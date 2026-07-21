import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView, metadataForBlogPost } from "../blog-post";
import { getBlogPost } from "../blog-routing";
import { blogPosts } from "../../travel-content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts
    .filter((post) => (post.locale ?? "en") === "en")
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("en", slug);

  return post ? metadataForBlogPost(post) : {};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost("en", slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
