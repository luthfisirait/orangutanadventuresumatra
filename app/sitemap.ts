import type { MetadataRoute } from "next";
import { locales } from "./site-content";
import { languageAlternates, siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: languageAlternates
      }
    },
    ...locales.map((locale) => ({
      url: `${siteUrl}/${locale}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.95 : 0.9,
      alternates: {
        languages: languageAlternates
      }
    }))
  ];
}
