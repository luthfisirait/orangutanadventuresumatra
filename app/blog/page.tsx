import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { blogPosts } from "../travel-content";

const blogDescription =
  "Travel guides for European visitors planning ethical orangutan trekking, Bukit Lawang transport, packing, and conservation-minded jungle packages in North Sumatra.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `Bukit Lawang Orangutan Trekking Blog | ${siteName}`,
  description: blogDescription,
  alternates: {
    canonical: "/blog"
  },
  keywords: [
    "Bukit Lawang blog",
    "orangutan trekking Sumatra blog",
    "Sumatra travel guide Europe",
    "ethical orangutan trekking"
  ],
  openGraph: {
    title: `Bukit Lawang Orangutan Trekking Blog | ${siteName}`,
    description: blogDescription,
    url: "/blog",
    siteName,
    type: "website",
    images: [
      {
        url: "/images/link-preview.jpg",
        width: 1200,
        height: 630,
        alt: "OrangutanAdventureSumatra blog"
      }
    ]
  }
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Bukit Lawang Orangutan Trekking Blog | ${siteName}`,
    description: blogDescription,
    url: absoluteUrl("/blog"),
    publisher: {
      "@type": "TravelAgency",
      name: siteName,
      url: siteUrl
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.date,
      image: absoluteUrl(post.image)
    }))
  };

  return (
    <main className="resource-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <StaticHeader />
      <section className="resource-hero blog-hero">
        <Image src="/images/blog-index-hero.png" alt="Travel planning at a Bukit Lawang rainforest lookout" fill priority sizes="100vw" />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">Travel blog</span>
          <h1>Bukit Lawang travel guides for European travelers</h1>
          <p>{blogDescription}</p>
        </div>
      </section>

      <section className="resource-content">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link className="blog-card-image" href={`/blog/${post.slug}`} aria-label={post.title}>
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </Link>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span>{new Date(post.date).getFullYear()}</span>
                  <span>
                    <Clock3 size={14} />
                    {post.readingTime}
                  </span>
                </div>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
                <Link className="card-link" href={`/blog/${post.slug}`}>
                  Read article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <StaticFooter />
    </main>
  );
}
