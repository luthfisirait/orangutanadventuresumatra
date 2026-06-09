import { NextResponse } from "next/server";
import {
  getGoogleReviewsCacheSeconds,
  getGoogleReviewsData,
  googleReviewsFallback
} from "../../google-reviews";

export const revalidate = 86400;

export async function GET() {
  const cacheSeconds = getGoogleReviewsCacheSeconds();

  try {
    const data = await getGoogleReviewsData({ throwOnError: true });

    return NextResponse.json(data, {
      headers: data.configured
        ? {
            "Cache-Control": `public, max-age=3600, s-maxage=${cacheSeconds}, stale-while-revalidate=${cacheSeconds}`
          }
        : { "Cache-Control": "no-store" }
    });
  } catch {
    return NextResponse.json(googleReviewsFallback(true), {
      headers: { "Cache-Control": "no-store" },
      status: 502
    });
  }
}
