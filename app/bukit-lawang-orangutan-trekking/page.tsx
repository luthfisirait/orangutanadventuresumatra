import type { Metadata } from "next";
import { getGoogleReviewsData } from "../google-reviews";
import { landingPages, LandingPageView, metadataForLandingPage } from "../seo-landing-pages";

const page = landingPages.bukitLawangTrekking;

export const metadata: Metadata = metadataForLandingPage(page);

export default async function BukitLawangOrangutanTrekkingPage() {
  const googleReviews = await getGoogleReviewsData();

  return <LandingPageView page={page} googleReviews={googleReviews} />;
}
