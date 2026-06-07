import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { HomeContent } from "../home-content";
import { locales } from "../site-content";
import { defaultLocale, isLocale, metadataForLocale } from "../seo";

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

  return <HomeContent initialLanguage={locale} routedLanguage />;
}
