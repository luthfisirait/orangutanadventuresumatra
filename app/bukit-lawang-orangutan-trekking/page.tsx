import type { Metadata } from "next";
import { landingPages, LandingPageView, metadataForLandingPage } from "../seo-landing-pages";

const page = landingPages.bukitLawangTrekking;

export const metadata: Metadata = metadataForLandingPage(page);

export default function BukitLawangOrangutanTrekkingPage() {
  return <LandingPageView page={page} />;
}
