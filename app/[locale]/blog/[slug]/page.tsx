import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { BlogPostView, metadataForBlogPost } from "../../../blog/blog-post";
import {
  blogPostLocale,
  blogPostPath,
  blogPostRouteSlug,
  getBlogPost,
  localizedBlogLocales
} from "../../../blog/blog-routing";
import { isLocale } from "../../../seo";
import { blogPosts } from "../../../travel-content";

type LocalizedBlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return blogPosts
    .filter((post) => (post.locale ?? "en") !== "en")
    .map((post) => ({
      locale: blogPostLocale(post),
      slug: blogPostRouteSlug(post)
    }));
}

export async function generateMetadata({
  params
}: LocalizedBlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale === "en") {
    return {};
  }

  const post = getBlogPost(locale, slug);
  return post ? metadataForBlogPost(post) : {};
}

export default async function LocalizedBlogPostPage({
  params
}: LocalizedBlogPostPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === "en") {
    const englishPost = getBlogPost(locale, slug);
    permanentRedirect(englishPost ? blogPostPath(englishPost) : `/blog/${slug}`);
  }

  const post = getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
