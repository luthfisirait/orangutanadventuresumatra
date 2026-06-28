import { Star } from "lucide-react";
import type { GoogleReviewsData, PublicReview } from "../google-reviews";
import { TrackedLink } from "./tracked-link";

type ReviewSnippetsProps = {
  googleReviews: GoogleReviewsData | null;
  heading: string;
  source: string;
};

function hasReviewSignal(data: GoogleReviewsData | null) {
  return Boolean(
    data &&
      (data.reviews.length > 0 || (typeof data.averageRating === "number" && data.totalReviewCount > 0))
  );
}

function ReviewStars({ rating }: { rating: number }) {
  return (
    <span className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: Math.max(1, Math.min(5, rating)) }).map((_, index) => (
        <Star key={index} size={15} fill="currentColor" />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: PublicReview }) {
  return (
    <figure className="review-snippet-card">
      <ReviewStars rating={review.rating} />
      <blockquote>"{review.text}"</blockquote>
      <figcaption>
        <strong>{review.author}</strong>
        <span>{review.relativeTime}</span>
      </figcaption>
    </figure>
  );
}

export function ReviewSnippets({ googleReviews, heading, source }: ReviewSnippetsProps) {
  if (!hasReviewSignal(googleReviews)) {
    return null;
  }

  const reviews = googleReviews?.reviews.slice(0, 2) ?? [];

  return (
    <article className="info-block review-snippets-block">
      <span className="section-kicker">Traveler reviews</span>
      <h2>{heading}</h2>
      {googleReviews?.averageRating ? (
        <p className="google-rating-summary review-snippets-summary">
          <Star size={18} fill="currentColor" />
          <span>
            {googleReviews.averageRating.toFixed(1)} Google rating from {googleReviews.totalReviewCount} reviews
          </span>
          <TrackedLink
            href={googleReviews.sourceUrl}
            target="_blank"
            rel="noreferrer"
            eventName="maps_click"
            eventParams={{ source }}
          >
            Read all on Google
          </TrackedLink>
        </p>
      ) : null}
      {reviews.length > 0 ? (
        <div className="review-snippet-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p className="review-snippet-fallback">
          Public Google reviews are available for recent guest feedback before you send a booking request.
        </p>
      )}
    </article>
  );
}
