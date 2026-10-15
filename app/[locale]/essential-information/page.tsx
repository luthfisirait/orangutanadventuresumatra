import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "../../site-content";
import { getLanguageAlternates, isLocale, siteName, siteUrl } from "../../seo";
import { essentialInfoByLocale } from "../../content/essential-information-i18n";
import { EssentialInformationView } from "../../essential-information/essential-information-view";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const info = essentialInfoByLocale[locale];
  if (!info) return {};

  return {
    metadataBase: new URL(siteUrl),
    title: `${info.title} | ${siteName}`,
    description: info.description,
    alternates: {
      canonical: `/${locale}/essential-information`,
      languages: getLanguageAlternates("/essential-information")
    },
    openGraph: {
      title: `${info.title} | ${siteName}`,
      description: info.description,
      url: `/${locale}/essential-information`,
      siteName,
      type: "article",
      images: [
        {
          url: info.image,
          width: 1200,
          height: 800,
          alt: info.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${info.title} | ${siteName}`,
      description: info.description,
      images: [info.image]
    }
  };
}

export default async function LocalizedEssentialInformationPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <EssentialInformationView locale={locale as Locale} />;
}
