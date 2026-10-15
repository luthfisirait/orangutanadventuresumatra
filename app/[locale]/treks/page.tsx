import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "../../site-content";
import { getLanguageAlternates, isLocale, siteName, siteUrl } from "../../seo";
import { trekLabels } from "../../content/trek-details-i18n";
import { TreksPageView } from "../../treks/treks-view";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const labels = trekLabels[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: labels.pageTitle,
    description: labels.pageDescription,
    alternates: {
      canonical: `/${locale}/treks`,
      languages: getLanguageAlternates("/treks")
    },
    openGraph: {
      title: labels.pageTitle,
      description: labels.pageDescription,
      url: `/${locale}/treks`,
      siteName,
      type: "website",
      images: [
        {
          url: "/images/package-activity-hero.webp",
          width: 1200,
          height: 800,
          alt: labels.heroHeading
        }
      ]
    }
  };
}

export default async function LocalizedTreksPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <TreksPageView locale={locale as Locale} />;
}
