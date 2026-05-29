import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock3, MessageCircle } from "lucide-react";
import { StaticFooter, StaticHeader } from "../../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../../seo";
import { blogPosts, bookingWhatsappUrl } from "../../travel-content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    metadataBase: new URL(siteUrl),
    title: `${post.title} | ${siteName}`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    keywords: post.tags,
    authors: [{ name: siteName, url: siteUrl }],
    openGraph: {
      title: `${post.title} | ${siteName}`,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 800,
          alt: post.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${siteName}`,
      description: post.description,
      images: [post.image]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl
    },
    publisher: {
      "@type": "TravelAgency",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo.png")
      }
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
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
      <article>
        <section className="resource-hero article-hero">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" />
          <div className="resource-hero-shade" />
          <div className="resource-hero-content">
            <span className="section-kicker">Bukit Lawang travel guide</span>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="article-meta">
              <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>
                <Clock3 size={16} />
                {post.readingTime}
              </span>
            </div>
          </div>
        </section>

        <section className="article-layout">
          <aside className="article-sidebar">
            <div className="article-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="primary-button" href={bookingWhatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Ask availability
            </a>
          </aside>

          <div className="article-body">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Check size={17} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </section>
      </article>

      <section className="resource-content related-section">
        <div className="section-heading wide-heading">
          <span className="section-kicker">More travel guides</span>
          <h2>Plan the next step of your Bukit Lawang trip</h2>
        </div>
        <div className="related-grid">
          {relatedPosts.map((related) => (
            <Link className="related-link" href={`/blog/${related.slug}`} key={related.slug}>
              <span>{related.title}</span>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>
      <StaticFooter />
    </main>
  );
}
