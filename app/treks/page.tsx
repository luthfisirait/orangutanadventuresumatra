import type { Metadata } from "next";
import { getLanguageAlternates, siteName, siteUrl } from "../seo";
import { trekLabels } from "../content/trek-details-i18n";
import { TreksPageView } from "./treks-view";

const labels = trekLabels.en;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: labels.pageTitle,
  description: labels.pageDescription,
  alternates: {
    canonical: "/treks",
    languages: getLanguageAlternates("/treks")
  },
  keywords: [
    "Bukit Lawang trek details",
    "Bukit Lawang package details",
    "orangutan trekking itinerary",
    "Sumatra jungle trek compare"
  ],
  openGraph: {
    title: labels.pageTitle,
    description: labels.pageDescription,
    url: "/treks",
    siteName,
    type: "website",
    images: [
      {
        url: "/images/package-activity-hero.webp",
        width: 1200,
        height: 800,
        alt: "Bukit Lawang trek details"
      }
    ]
  }
};

export default function TreksPage() {
  return <TreksPageView locale="en" />;
}
