import type { Metadata } from "next";
import { getGoogleReviewsData } from "../google-reviews";
import { getLanguageAlternates, siteName, siteUrl } from "../seo";
import { getBookingPageContent } from "./booking-data";
import { BookingPageView } from "./booking-view";

const enContent = getBookingPageContent("en");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: enContent.pageTitle,
  description: enContent.pageDescription,
  alternates: {
    canonical: "/booking",
    languages: getLanguageAlternates("/booking")
  },
  keywords: [
    "Bukit Lawang booking form",
    "Bukit Lawang orangutan trek booking",
    "orangutan trekking enquiry",
    "Bukit Lawang jungle tour booking",
    "Sumatra jungle booking",
    "Bukit Lawang tour request"
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: enContent.pageTitle,
    description: enContent.pageDescription,
    url: "/booking",
    siteName,
    type: "website",
    images: [
      {
        url: "/images/package-activity-hero.webp",
        width: 1200,
        height: 800,
        alt: "Jungle trek booking form for Bukit Lawang"
      }
    ]
  }
};

type BookingPageProps = {
  searchParams?: Promise<{
    package?: string | string[];
  }>;
};

function normalizePackageParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const initialPackageId = normalizePackageParam(resolvedSearchParams.package);
  const googleReviews = await getGoogleReviewsData();

  return (
    <BookingPageView
      initialPackageId={initialPackageId}
      locale="en"
      googleReviews={googleReviews}
    />
  );
}
