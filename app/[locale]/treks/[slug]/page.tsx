import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "../../../site-content";
import { getLanguageAlternates, isLocale, siteName, siteUrl } from "../../../seo";
import { getTrekDetailBySlug, trekDetailList } from "../../../trek-details";
import { TrekDetailView } from "../../../treks/trek-detail-view";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const nonDefaultLocales = locales.filter((locale) => locale !== "en");
  return nonDefaultLocales.flatMap((locale) =>
    trekDetailList.map((page) => ({
      locale,
      slug: page.slug
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const page = getTrekDetailBySlug(slug, locale);
  if (!page) return {};

  return {
    metadataBase: new URL(siteUrl),
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${locale}/treks/${page.slug}`,
      languages: getLanguageAlternates(`/treks/${page.slug}`)
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/${locale}/treks/${page.slug}`,
      siteName,
      type: "article",
      images: [
        {
          url: page.image,
          width: 1200,
          height: 800,
          alt: page.imageAlt
        }
      ]
    }
  };
}

export default async function LocalizedTrekDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <TrekDetailView slug={slug} locale={locale as Locale} />;
}
