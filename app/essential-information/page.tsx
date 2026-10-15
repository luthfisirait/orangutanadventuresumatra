import type { Metadata } from "next";
import { getLanguageAlternates, siteName, siteUrl } from "../seo";
import { essentialInfoByLocale } from "../content/essential-information-i18n";
import { EssentialInformationView } from "./essential-information-view";

const enInfo = essentialInfoByLocale.en;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${enInfo.title} | ${siteName}`,
  description: enInfo.description,
  alternates: {
    canonical: "/essential-information",
    languages: getLanguageAlternates("/essential-information")
  },
  keywords: [
    "Bukit Lawang essential information",
    "Sumatra orangutan trekking packing list",
    "Bukit Lawang from Europe",
    "ethical orangutan trekking information"
  ],
  openGraph: {
    title: `${enInfo.title} | ${siteName}`,
    description: enInfo.description,
    url: "/essential-information",
    siteName,
    type: "article",
    images: [
      {
        url: enInfo.image,
        width: 1200,
        height: 800,
        alt: enInfo.imageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${enInfo.title} | ${siteName}`,
    description: enInfo.description,
    images: [enInfo.image]
  }
};

export default function EssentialInformationPage() {
  return <EssentialInformationView locale="en" />;
}
