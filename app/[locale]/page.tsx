import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeContent } from "../home-content";
import { locales } from "../site-content";
import { isLocale, metadataForLocale } from "../seo";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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

  return <HomeContent initialLanguage={locale} routedLanguage />;
}
