import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getGoogleReviewsData } from "../google-reviews";
import { HomeContent } from "../home-content";
import { locales } from "../site-content";
import { defaultLocale, isLocale, metadataForLocale } from "../seo";

export const revalidate = 86400;

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return metadataForLocale(locale, `/${locale}`);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === defaultLocale) {
    redirect("/");
  }

  const googleReviews = await getGoogleReviewsData();

  return <HomeContent initialLanguage={locale} initialGoogleReviews={googleReviews} routedLanguage />;
}
