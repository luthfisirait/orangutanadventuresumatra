import type { MetadataRoute } from "next";
import { locales } from "./site-content";
import { languageAlternates, siteUrl } from "./seo";
import { blogPosts } from "./travel-content";
import { trekDetailList } from "./trek-details";
import { landingPages } from "./seo-landing-pages";

function asLastModified(date: string) {
  return new Date(`${date}T00:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pageLastModified = asLastModified("2026-06-03");
  const latestBlogPostDate = new Date(
    Math.max(...blogPosts.map((post) => asLastModified(post.date).getTime()))
  );
  const staticPages = [
    { path: "/booking", lastModified: pageLastModified, priority: 0.88 },
    { path: "/treks", lastModified: pageLastModified, priority: 0.84 },
    { path: "/payment-and-deposit", lastModified: pageLastModified, priority: 0.62 },
    { path: "/essential-information", lastModified: pageLastModified, priority: 0.82 },
    { path: "/blog", lastModified: pageLastModified > latestBlogPostDate ? pageLastModified : latestBlogPostDate, priority: 0.84 },
    { path: "/privacy", lastModified: pageLastModified, priority: 0.35 }
  ];

  return [
    {
      url: siteUrl,
      lastModified: pageLastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: languageAlternates
      }
    },
    ...locales.map((locale) => ({
      url: locale === "en" ? siteUrl : `${siteUrl}/${locale}`,
      lastModified: pageLastModified,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 0.95 : 0.9,
      alternates: {
        languages: languageAlternates
      }
    })),
    {
      url: `${siteUrl}/${landingPages.sumatraOrangutanTour.slug}`,
      lastModified: pageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.86
    },
    {
      url: `${siteUrl}/${landingPages.bukitLawangTrekking.slug}`,
      lastModified: pageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9
    },
    {
      url: `${siteUrl}/${landingPages.threeDayTrek.slug}`,
      lastModified: pageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.88
    },
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: asLastModified(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.78
    })),
    ...trekDetailList.map((page) => ({
      url: `${siteUrl}/treks/${page.slug}`,
      lastModified: pageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.74
    }))
  ];
}
