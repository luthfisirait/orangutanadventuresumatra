import type { MetadataRoute } from "next";
import { locales } from "./site-content";
import { defaultLocale, languageAlternates, siteUrl } from "./seo";
import { blogPosts } from "./travel-content";
import { trekDetailList } from "./trek-details";
import { landingPages } from "./seo-landing-pages";
import {
  blogIndexLanguageAlternates,
  blogIndexPath,
  blogPostLocale,
  blogPostPath,
  getBlogLanguageAlternates
} from "./blog/blog-routing";

function asLastModified(date: string) {
  return new Date(`${date}T00:00:00.000Z`);
}

function blogLastModified(post: (typeof blogPosts)[number]) {
  const contentDate = asLastModified(post.dateModified ?? post.date);

  if (blogPostLocale(post) === defaultLocale) {
    return contentDate;
  }

  const localizedRouteMigrationDate = asLastModified("2026-07-21");
  return contentDate > localizedRouteMigrationDate ? contentDate : localizedRouteMigrationDate;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const legacyPageLastModified = asLastModified("2026-06-09");
  const seoReleaseLastModified = asLastModified("2026-07-21");
  const landingPageLastModified = asLastModified("2026-08-14");
  const latestBlogPostDate = new Date(
    Math.max(...blogPosts.map((post) => blogLastModified(post).getTime()))
  );
  const staticPages = [
    { path: "/booking", lastModified: legacyPageLastModified, priority: 0.88 },
    { path: "/treks", lastModified: legacyPageLastModified, priority: 0.84 },
    { path: "/payment-and-deposit", lastModified: legacyPageLastModified, priority: 0.62 },
    { path: "/essential-information", lastModified: legacyPageLastModified, priority: 0.82 },
    { path: "/privacy", lastModified: legacyPageLastModified, priority: 0.35 }
  ];
  const blogIndexLastModified =
    seoReleaseLastModified > latestBlogPostDate ? seoReleaseLastModified : latestBlogPostDate;

  return [
    {
      url: siteUrl,
      lastModified: seoReleaseLastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: languageAlternates
      }
    },
    ...locales.filter((locale) => locale !== defaultLocale).map((locale) => ({
      url: locale === "en" ? siteUrl : `${siteUrl}/${locale}`,
      lastModified: seoReleaseLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: languageAlternates
      }
    })),
    {
      url: `${siteUrl}/${landingPages.sumatraOrangutanTour.slug}`,
      lastModified: landingPageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.86
    },
    {
      url: `${siteUrl}/${landingPages.threeDayTrek.slug}`,
      lastModified: landingPageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.88
    },
    ...locales.map((locale) => ({
      url: `${siteUrl}${blogIndexPath(locale)}`,
      lastModified: blogIndexLastModified,
      changeFrequency: "weekly" as const,
      priority: locale === defaultLocale ? 0.84 : 0.72,
      alternates: {
        languages: blogIndexLanguageAlternates
      }
    })),
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}${blogPostPath(post)}`,
      lastModified: blogLastModified(post),
      changeFrequency: "monthly" as const,
      priority: 0.78,
      ...(getBlogLanguageAlternates(post)
        ? {
            alternates: {
              languages: getBlogLanguageAlternates(post)
            }
          }
        : {})
    })),
    ...trekDetailList.map((page) => ({
      url: `${siteUrl}/treks/${page.slug}`,
      lastModified: legacyPageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.74
    }))
  ];
}
