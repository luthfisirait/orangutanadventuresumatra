import type { Metadata } from "next";
import { getGoogleReviewsData } from "../google-reviews";
import { landingPages, LandingPageView, metadataForLandingPage } from "../seo-landing-pages";

const page = landingPages.sumatraOrangutanTour;

export const metadata: Metadata = metadataForLandingPage(page);

export default async function SumatraOrangutanTourPage() {
  const googleReviews = await getGoogleReviewsData();

  return <LandingPageView page={page} googleReviews={googleReviews} />;
}
