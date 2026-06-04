import { NextResponse } from "next/server";
import { googleMapsUrl } from "../../travel-content";

export const revalidate = 86400;

const DEFAULT_DISPLAY_LIMIT = 3;
const DEFAULT_MIN_TEXT_LENGTH = 45;
const DEFAULT_MAX_TEXT_LENGTH = 340;
const DEFAULT_REVIEWS_CACHE_SECONDS = 86400;
const REQUIRED_RATING = 5;

type GooglePlaceReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
};

type GooglePlaceDetailsResponse = {
  error_message?: string;
  result?: {
    name?: string;
    rating?: number;
    reviews?: GooglePlaceReview[];
    url?: string;
    user_ratings_total?: number;
  };
  status: string;
};

type PublicReview = {
  author: string;
  id: string;
  rating: number;
  profilePhotoUrl: string | null;
  relativeTime: string;
  source: "google";
  text: string;
};

function readPositiveInt(name: string, fallback: number, max?: number) {
  const raw = process.env[name];
  const value = raw ? Number.parseInt(raw, 10) : fallback;
  const normalized = Number.isFinite(value) && value > 0 ? value : fallback;
  return max ? Math.min(normalized, max) : normalized;
}

function cleanText(value = "") {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/^[\s"'“”‘’`.,:;!?\-\u2013\u2014*•⭐️☆★]+/, "")
    .replace(/[\s"'“”‘’`*•]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function truncateText(value: string) {
  const maxLength = readPositiveInt("GOOGLE_PLACES_REVIEW_MAX_TEXT_LENGTH", DEFAULT_MAX_TEXT_LENGTH, 700);

  if (value.length <= maxLength) {
    return value;
  }

  const slice = value.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 220 ? lastSpace : maxLength).trim()}...`;
}

function normalizeReviews(reviews: GooglePlaceReview[] = []) {
  const displayLimit = readPositiveInt("GOOGLE_PLACES_REVIEW_DISPLAY_LIMIT", DEFAULT_DISPLAY_LIMIT, 5);
  const minTextLength = readPositiveInt("GOOGLE_PLACES_REVIEW_MIN_TEXT_LENGTH", DEFAULT_MIN_TEXT_LENGTH, 160);

  return reviews
    .map<PublicReview>((review, index) => {
      const text = truncateText(cleanText(review.text));
      const rating = typeof review.rating === "number" ? Math.round(review.rating) : 0;
      const author = cleanText(review.author_name) || "Google reviewer";
      const relativeTime = cleanText(review.relative_time_description) || "Google review";
      const profilePhotoUrl = review.profile_photo_url?.trim() || null;

      return {
        author,
        id: `${author}-${review.time ?? index}`,
        rating,
        profilePhotoUrl,
        relativeTime,
        source: "google",
        text
      };
    })
    .filter((review) => review.rating === REQUIRED_RATING && review.text.length >= minTextLength)
    .slice(0, displayLimit);
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const cacheSeconds = readPositiveInt(
    "GOOGLE_PLACES_REVIEWS_CACHE_SECONDS",
    DEFAULT_REVIEWS_CACHE_SECONDS
  );

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        averageRating: null,
        configured: false,
        reviews: [],
        sourceUrl: googleMapsUrl,
        totalReviewCount: 0
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  }

  const params = new URLSearchParams({
    fields: "name,rating,reviews,url,user_ratings_total",
    key: apiKey,
    place_id: placeId,
    reviews_sort: process.env.GOOGLE_PLACES_REVIEWS_SORT || "most_relevant"
  });

  const language = process.env.GOOGLE_PLACES_REVIEWS_LANGUAGE;

  if (language) {
    params.set("language", language);
  }

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`, {
      next: { revalidate: cacheSeconds }
    });

    if (!response.ok) {
      throw new Error(`Google Places API responded with status ${response.status}`);
    }

    const data = (await response.json()) as GooglePlaceDetailsResponse;

    if (data.status !== "OK") {
      throw new Error(`Google Places API error: ${data.status} ${data.error_message ?? ""}`.trim());
    }

    const result = data.result ?? {};

    return NextResponse.json(
      {
        averageRating: result.rating ?? null,
        configured: true,
        placeName: result.name ?? null,
        reviews: normalizeReviews(result.reviews),
        sourceUrl: result.url || googleMapsUrl,
        totalReviewCount: result.user_ratings_total ?? 0
      },
      {
        headers: {
          "Cache-Control": `public, max-age=3600, s-maxage=${cacheSeconds}, stale-while-revalidate=${cacheSeconds}`
        }
      }
    );
  } catch (error) {
    console.error("Error fetching Google Places reviews:", error);

    return NextResponse.json(
      {
        averageRating: null,
        configured: true,
        reviews: [],
        sourceUrl: googleMapsUrl,
        totalReviewCount: 0
      },
      { headers: { "Cache-Control": "no-store" }, status: 502 }
    );
  }
}
