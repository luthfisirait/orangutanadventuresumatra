import type { Metadata } from "next";
import { landingPages, LandingPageView, metadataForLandingPage } from "../seo-landing-pages";

const page = landingPages.threeDayTrek;

export const metadata: Metadata = metadataForLandingPage(page);

export default function ThreeDayBukitLawangOrangutanTrekPage() {
  return <LandingPageView page={page} />;
}
