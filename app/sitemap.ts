import type { MetadataRoute } from "next";
import { locales } from "./site-content";
import { defaultLocale, getLanguageAlternates, languageAlternates, siteUrl } from "./seo";
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
  // Localized titles, H1s, language signals, and review schema were updated on this date.
  const metaRewriteLastModified = asLastModified("2026-10-15");
  const seoReleaseLastModified = asLastModified("2026-07-21");
  const landingPageLastModified = asLastModified("2026-09-26");
  const latestBlogPostDate = new Date(
    Math.max(...blogPosts.map((post) => blogLastModified(post).getTime()))
  );
  const blogIndexLastModified =
    seoReleaseLastModified > latestBlogPostDate ? seoReleaseLastModified : latestBlogPostDate;

  return [
    {
      url: siteUrl,
      lastModified: metaRewriteLastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: languageAlternates
      }
    },
    ...locales.filter((locale) => locale !== defaultLocale).map((locale) => ({
      url: `${siteUrl}/${locale}`,
      lastModified: metaRewriteLastModified,
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
    // Localized core pages: /booking, /treks, /essential-information
    ...(["/booking", "/treks", "/essential-information"] as const).flatMap((subpath) =>
      locales.map((locale) => {
        const url = locale === defaultLocale ? `${siteUrl}${subpath}` : `${siteUrl}/${locale}${subpath}`;
        const priority = subpath === "/booking" ? 0.88 : subpath === "/treks" ? 0.84 : 0.82;
        return {
          url,
          lastModified: metaRewriteLastModified,
          changeFrequency: "weekly" as const,
          priority: locale === defaultLocale ? priority : Math.round((priority - 0.05) * 100) / 100,
          alternates: {
            languages: getLanguageAlternates(subpath)
          }
        };
      })
    ),
    {
      url: `${siteUrl}/payment-and-deposit`,
      lastModified: legacyPageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.62
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: legacyPageLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.35
    },
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
    // Localized trek detail pages for all 11 treks
    ...trekDetailList.flatMap((page) =>
      locales.map((locale) => {
        const url =
          locale === defaultLocale
            ? `${siteUrl}/treks/${page.slug}`
            : `${siteUrl}/${locale}/treks/${page.slug}`;
        return {
          url,
          lastModified: metaRewriteLastModified,
          changeFrequency: "monthly" as const,
          priority: locale === defaultLocale ? 0.78 : 0.72,
          alternates: {
            languages: getLanguageAlternates(`/treks/${page.slug}`)
          }
        };
      })
    )
  ];
}
