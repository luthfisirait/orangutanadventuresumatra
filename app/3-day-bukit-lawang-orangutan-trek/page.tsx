import type { Metadata } from "next";
import { getGoogleReviewsData } from "../google-reviews";
import { landingPages, LandingPageView, metadataForLandingPage } from "../seo-landing-pages";

const page = landingPages.threeDayTrek;

export const metadata: Metadata = metadataForLandingPage(page);

export default async function ThreeDayBukitLawangOrangutanTrekPage() {
  const googleReviews = await getGoogleReviewsData();

  return <LandingPageView page={page} googleReviews={googleReviews} />;
}
