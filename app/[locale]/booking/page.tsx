import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGoogleReviewsData } from "../../google-reviews";
import { locales, type Locale } from "../../site-content";
import { getLanguageAlternates, isLocale, siteName, siteUrl } from "../../seo";
import { getBookingPageContent } from "../../booking/booking-data";
import { BookingPageView } from "../../booking/booking-view";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{
    package?: string | string[];
  }>;
};

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const content = getBookingPageContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: content.pageTitle,
    description: content.pageDescription,
    alternates: {
      canonical: `/${locale}/booking`,
      languages: getLanguageAlternates("/booking")
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: content.pageTitle,
      description: content.pageDescription,
      url: `/${locale}/booking`,
      siteName,
      type: "website",
      images: [
        {
          url: "/images/package-activity-hero.webp",
          width: 1200,
          height: 800,
          alt: content.heroHeading
        }
      ]
    }
  };
}

function normalizePackageParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
}

export default async function LocalizedBookingPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const resolvedSearchParams = (await searchParams) ?? {};
  const initialPackageId = normalizePackageParam(resolvedSearchParams.package);
  const googleReviews = await getGoogleReviewsData();

  return (
    <BookingPageView
      initialPackageId={initialPackageId}
      locale={locale as Locale}
      googleReviews={googleReviews}
    />
  );
}
