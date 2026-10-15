import type { Metadata } from "next";
import { getLanguageAlternates, siteName, siteUrl } from "../../seo";
import { getTrekDetailBySlug, trekDetailList } from "../../trek-details";
import { TrekDetailView } from "../trek-detail-view";

type TrekPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trekDetailList.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: TrekPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getTrekDetailBySlug(slug, "en");

  if (!page) {
    return {};
  }

  return {
    metadataBase: new URL(siteUrl),
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/treks/${page.slug}`,
      languages: getLanguageAlternates(`/treks/${page.slug}`)
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/treks/${page.slug}`,
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

export default async function TrekDetailPage({ params }: TrekPageProps) {
  const { slug } = await params;
  return <TrekDetailView slug={slug} locale="en" />;
}
