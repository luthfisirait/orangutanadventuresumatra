import type { MetadataRoute } from "next";
import { locales } from "./site-content";
import { languageAlternates, siteUrl } from "./seo";
import { blogPosts } from "./travel-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPages = [
    { path: "/essential-information", priority: 0.82 },
    { path: "/blog", priority: 0.84 },
    { path: "/privacy", priority: 0.35 }
  ];

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
    })),
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.78
    }))
  ];
}
