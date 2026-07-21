import { absoluteUrl, defaultLocale } from "../seo";
import { locales, type Locale } from "../site-content";
import { blogPosts, type BlogPost } from "../travel-content";

export const localizedBlogLocales = ["de", "fr", "nl"] as const;

export function blogPostLocale(post: BlogPost): Locale {
  return post.locale ?? defaultLocale;
}

export function blogPostRouteSlug(post: BlogPost) {
  const locale = blogPostLocale(post);
  const localePrefix = `${locale}-`;

  if (locale !== defaultLocale && post.slug.startsWith(localePrefix)) {
    return post.slug.slice(localePrefix.length);
  }

  return post.slug;
}

export function blogIndexPath(locale: Locale) {
  return locale === defaultLocale ? "/blog" : `/${locale}/blog`;
}

export function blogPostPath(post: BlogPost) {
  const locale = blogPostLocale(post);
  return `${blogIndexPath(locale)}/${blogPostRouteSlug(post)}`;
}

export function getBlogPost(locale: Locale, slug: string) {
  return blogPosts.find(
    (post) => blogPostLocale(post) === locale && blogPostRouteSlug(post) === slug
  );
}

export function getBlogLanguageAlternates(post: BlogPost) {
  if (!post.translationKey) {
    return undefined;
  }

  const translations = blogPosts.filter(
    (candidate) => candidate.translationKey === post.translationKey
  );

  if (translations.length < 2) {
    return undefined;
  }

  const fallbackPost =
    translations.find((candidate) => blogPostLocale(candidate) === defaultLocale) ?? post;

  return Object.fromEntries([
    ...translations.map((translation) => [
      blogPostLocale(translation),
      absoluteUrl(blogPostPath(translation))
    ]),
    ["x-default", absoluteUrl(blogPostPath(fallbackPost))]
  ]) as Record<string, string>;
}

export const blogIndexLanguageAlternates = Object.fromEntries([
  ...locales.map((locale) => [locale, absoluteUrl(blogIndexPath(locale))]),
  ["x-default", absoluteUrl(blogIndexPath(defaultLocale))]
]) as Record<string, string>;
