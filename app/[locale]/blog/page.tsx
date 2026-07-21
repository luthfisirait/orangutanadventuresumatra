import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { BlogIndexView, metadataForBlogIndex } from "../../blog/blog-index";
import { localizedBlogLocales } from "../../blog/blog-routing";
import { isLocale } from "../../seo";

type LocalizedBlogIndexPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return localizedBlogLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocalizedBlogIndexPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "en") {
    return {};
  }

  return metadataForBlogIndex(locale);
}

export default async function LocalizedBlogIndexPage({
  params
}: LocalizedBlogIndexPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === "en") {
    permanentRedirect("/blog");
  }

  return <BlogIndexView locale={locale} />;
}
