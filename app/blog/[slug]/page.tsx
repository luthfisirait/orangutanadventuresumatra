import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { TrackedLink } from "../../components/tracked-link";
import { StaticFooter, StaticHeader } from "../../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../../seo";
import { blogPosts, type BlogPost } from "../../travel-content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

function getPostModifiedDate(post: BlogPost) {
  return post.dateModified ?? post.date;
}

function getBlogLanguageAlternates(post: BlogPost) {
  if (!post.translationKey) {
    return undefined;
  }

  const translations = blogPosts.filter((candidate) => candidate.translationKey === post.translationKey);

  if (translations.length < 2) {
    return undefined;
  }

  const englishPost = translations.find((candidate) => (candidate.locale ?? "en") === "en") ?? post;
  return Object.fromEntries([
    ...translations.map((translation) => [
      translation.locale ?? "en",
      absoluteUrl(`/blog/${translation.slug}`)
    ]),
    ["x-default", absoluteUrl(`/blog/${englishPost.slug}`)]
  ]) as Record<string, string>;
}

function getRelatedPosts(post: BlogPost) {
  const manualPosts =
    post.relatedSlugs
      ?.map((slug) => getPost(slug))
      .filter((candidate): candidate is BlogPost => candidate !== undefined && candidate.slug !== post.slug) ?? [];
  const selectedSlugs = new Set(manualPosts.map((candidate) => candidate.slug));
  const postLocale = post.locale ?? "en";
  const postTags = new Set(post.tags.map((tag) => tag.toLowerCase()));
  const scoredPosts = blogPosts
    .filter((candidate) => candidate.slug !== post.slug && !selectedSlugs.has(candidate.slug))
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) => postTags.has(tag.toLowerCase())).length;
      const sameLocaleBoost = (candidate.locale ?? "en") === postLocale ? 2 : 0;
      return { candidate, score: sharedTags + sameLocaleBoost };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || getPostModifiedDate(b.candidate).localeCompare(getPostModifiedDate(a.candidate)))
    .map(({ candidate }) => candidate);
  const fallbackPosts = blogPosts.filter(
    (candidate) =>
      candidate.slug !== post.slug &&
      !selectedSlugs.has(candidate.slug) &&
      !scoredPosts.some((scored) => scored.slug === candidate.slug) &&
      (candidate.locale ?? "en") === postLocale
  );

  return [...manualPosts, ...scoredPosts, ...fallbackPosts].slice(0, 3);
}

const planningLinks = [
  { href: "/sumatra-orangutan-tour", label: "Sumatra orangutan tours" },
  { href: "/bukit-lawang-orangutan-trekking", label: "Bukit Lawang orangutan trekking" },
  { href: "/3-day-bukit-lawang-orangutan-trek", label: "3-day Bukit Lawang orangutan trek" },
  { href: "/booking", label: "Booking form" }
] as const;

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

  const languages = getBlogLanguageAlternates(post);
  const modifiedDate = getPostModifiedDate(post);

  return {
    metadataBase: new URL(siteUrl),
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
      ...(languages ? { languages } : {})
    },
    keywords: post.tags,
    authors: [{ name: siteName, url: siteUrl }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName,
      type: "article",
      publishedTime: post.date,
      modifiedTime: modifiedDate,
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
      title: post.title,
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

  const relatedPosts = getRelatedPosts(post);
  const modifiedDate = getPostModifiedDate(post);
  const sectionFaq = post.sections.flatMap((section) => section.faq ?? []);
  const primaryCtaHref = post.primaryCtaHref ?? "/booking";
  const primaryCtaLabel = post.primaryCtaLabel ?? "Open booking form";
  const secondaryCta =
    primaryCtaHref === "/sumatra-orangutan-tour"
      ? { href: "/booking", label: "Open booking form" }
      : { href: "/sumatra-orangutan-tour", label: "Sumatra orangutan tour" };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(`/blog/${post.slug}`)}#blog-post`,
        headline: post.title,
        description: post.description,
        image: absoluteUrl(post.image),
        inLanguage: post.locale ?? "en",
        datePublished: post.date,
        dateModified: modifiedDate,
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
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(`/blog/${post.slug}`)}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteName,
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog")
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: absoluteUrl(`/blog/${post.slug}`)
          }
        ]
      },
      ...(sectionFaq.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${absoluteUrl(`/blog/${post.slug}`)}#faq`,
              mainEntity: sectionFaq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a
                }
              }))
            }
          ]
        : [])
    ]
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
              {modifiedDate !== post.date ? (
                <span>
                  Updated{" "}
                  {new Date(modifiedDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </span>
              ) : null}
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
            <Link className="primary-button" href="/treks">
              <ArrowRight size={18} />
              Browse trek details
            </Link>
            <div className="article-planning-links" aria-label="Trip planning links">
              <strong>Plan your trek</strong>
              {planningLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span>{link.label}</span>
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </aside>

          <div className="article-body">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.table ? (
                  <div className="article-table-wrap">
                    <table>
                      {section.table.caption ? <caption>{section.table.caption}</caption> : null}
                      <thead>
                        <tr>
                          {section.table.columns.map((column) => (
                            <th key={column} scope="col">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("|")}>
                            {row.map((cell, index) => (
                              <td key={`${cell}-${index}`}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {section.callout ? <p className="article-callout">{section.callout}</p> : null}
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
                {section.faq ? (
                  <div className="faq-list article-faq-list">
                    {section.faq.map((item) => (
                      <details key={item.q}>
                        <summary>
                          {item.q}
                          <ArrowRight size={18} />
                        </summary>
                        <p>{item.a}</p>
                      </details>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
            <section className="article-cta-block">
              <h2>Ready to compare trek options?</h2>
              <p>
                Use the booking pages to choose a route, confirm transport from Medan, and send your dates before paying a deposit.
              </p>
              <div className="resource-links">
                <TrackedLink
                  className="primary-button"
                  href={primaryCtaHref}
                  eventName="booking_cta_click"
                  eventParams={{ blog_post: post.slug, source: "blog_cta_primary" }}
                >
                  {primaryCtaLabel}
                  <ArrowRight size={18} />
                </TrackedLink>
                <TrackedLink
                  className="secondary-button dark"
                  href={secondaryCta.href}
                  eventName="booking_cta_click"
                  eventParams={{ blog_post: post.slug, source: "blog_cta_secondary" }}
                >
                  {secondaryCta.label}
                  <ArrowRight size={18} />
                </TrackedLink>
              </div>
            </section>
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
