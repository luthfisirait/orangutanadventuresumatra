import type { Metadata } from "next";
import { BlogIndexView, metadataForBlogIndex } from "./blog-index";

export const metadata: Metadata = metadataForBlogIndex("en");

export default function BlogIndexPage() {
  return <BlogIndexView locale="en" />;
}
