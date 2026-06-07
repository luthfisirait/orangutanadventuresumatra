import type { Metadata } from "next";
import { landingPages, LandingPageView, metadataForLandingPage } from "../seo-landing-pages";

const page = landingPages.sumatraOrangutanTour;

export const metadata: Metadata = metadataForLandingPage(page);

export default function SumatraOrangutanTourPage() {
  return <LandingPageView page={page} />;
}
