import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { TrackedLink } from "../components/tracked-link";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import type { Locale } from "../site-content";
import {
  blogPosts,
  instagramUrl,
  type BlogPost
} from "../travel-content";
import {
  blogIndexPath,
  blogPostLocale,
  blogPostPath,
  getBlogLanguageAlternates
} from "./blog-routing";

const dateLocales: Record<Locale, string> = {
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  nl: "nl-NL"
};

const blogCopy = {
  en: {
    heroKicker: "Bukit Lawang travel guide",
    updated: "Updated",
    reviewedBy: "Reviewed by",
    browseTreks: "Browse trek details",
    planTitle: "Plan your trek",
    bukitLawang: "Bukit Lawang orangutan trekking",
    sumatraTour: "Sumatra orangutan tours",
    threeDay: "3-day Bukit Lawang orangutan trek",
    booking: "Booking form",
    defaultPrimary: "Open booking form",
    ctaTitle: "Ready to compare trek options?",
    ctaText:
      "Use the booking pages to choose a route, confirm transport from Medan, and send your dates before paying a deposit.",
    moreKicker: "More travel guides",
    moreTitle: "Plan the next step of your Bukit Lawang trip",
    blog: "Blog"
  },
  de: {
    heroKicker: "Bukit Lawang Reiseführer",
    updated: "Aktualisiert",
    reviewedBy: "Geprüft von",
    browseTreks: "Trek-Details ansehen",
    planTitle: "Plane deinen Trek",
    bukitLawang: "Orang-Utan-Trekking in Bukit Lawang",
    sumatraTour: "Orang-Utan-Touren auf Sumatra",
    threeDay: "3-Tage-Orang-Utan-Trek in Bukit Lawang",
    booking: "Buchungsformular",
    defaultPrimary: "Buchungsformular öffnen",
    ctaTitle: "Möchtest du Trek-Optionen vergleichen?",
    ctaText:
      "Wähle eine Route, kläre den Transfer ab Medan und sende deine Reisedaten, bevor du eine Anzahlung leistest.",
    moreKicker: "Weitere Reiseführer",
    moreTitle: "Plane den nächsten Schritt deiner Bukit-Lawang-Reise",
    blog: "Reiseblog"
  },
  fr: {
    heroKicker: "Guide de voyage à Bukit Lawang",
    updated: "Mis à jour",
    reviewedBy: "Vérifié par",
    browseTreks: "Voir les détails des treks",
    planTitle: "Planifier votre trek",
    bukitLawang: "Trek orang-outan à Bukit Lawang",
    sumatraTour: "Circuits orang-outan à Sumatra",
    threeDay: "Trek orang-outan de 3 jours à Bukit Lawang",
    booking: "Formulaire de réservation",
    defaultPrimary: "Ouvrir le formulaire de réservation",
    ctaTitle: "Prêt à comparer les treks ?",
    ctaText:
      "Choisissez un itinéraire, confirmez le transport depuis Medan et envoyez vos dates avant de verser un acompte.",
    moreKicker: "Autres guides de voyage",
    moreTitle: "Préparez la prochaine étape de votre voyage à Bukit Lawang",
    blog: "Guide de voyage"
  },
  nl: {
    heroKicker: "Bukit Lawang reisgids",
    updated: "Bijgewerkt",
    reviewedBy: "Gecontroleerd door",
    browseTreks: "Bekijk trekdetails",
    planTitle: "Plan je trek",
    bukitLawang: "Orang-oetan trekking in Bukit Lawang",
    sumatraTour: "Orang-oetan tours op Sumatra",
    threeDay: "3-daagse orang-oetan trek in Bukit Lawang",
    booking: "Boekingsformulier",
    defaultPrimary: "Open het boekingsformulier",
    ctaTitle: "Klaar om trekopties te vergelijken?",
    ctaText:
      "Kies een route, bespreek vervoer vanaf Medan en stuur je reisdata voordat je een aanbetaling doet.",
    moreKicker: "Meer reisgidsen",
    moreTitle: "Plan de volgende stap van je reis naar Bukit Lawang",
    blog: "Reisgids"
  }
} satisfies Record<Locale, Record<string, string>>;

export function getPostModifiedDate(post: BlogPost) {
  return post.dateModified ?? post.date;
}

function getRelatedPosts(post: BlogPost) {
  const postLocale = blogPostLocale(post);
  const manualPosts =
    post.relatedSlugs
      ?.map((slug) => blogPosts.find((candidate) => candidate.slug === slug))
      .filter(
        (candidate): candidate is BlogPost =>
          candidate !== undefined &&
          candidate.slug !== post.slug &&
          blogPostLocale(candidate) === postLocale
      ) ?? [];
  const selectedSlugs = new Set(manualPosts.map((candidate) => candidate.slug));
  const postTags = new Set(post.tags.map((tag) => tag.toLowerCase()));
  const scoredPosts = blogPosts
    .filter(
      (candidate) =>
        candidate.slug !== post.slug &&
        !selectedSlugs.has(candidate.slug) &&
        blogPostLocale(candidate) === postLocale
    )
    .map((candidate) => ({
      candidate,
      score: candidate.tags.filter((tag) => postTags.has(tag.toLowerCase())).length
    }))
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        getPostModifiedDate(b.candidate).localeCompare(getPostModifiedDate(a.candidate))
    )
    .map(({ candidate }) => candidate);
  const fallbackPosts = blogPosts.filter(
    (candidate) =>
      candidate.slug !== post.slug &&
      !selectedSlugs.has(candidate.slug) &&
      !scoredPosts.some((scored) => scored.slug === candidate.slug) &&
      blogPostLocale(candidate) === postLocale
  );

  return [...manualPosts, ...scoredPosts, ...fallbackPosts].slice(0, 3);
}

export function metadataForBlogPost(post: BlogPost): Metadata {
  const languages = getBlogLanguageAlternates(post);
  const modifiedDate = getPostModifiedDate(post);
  const path = blogPostPath(post);

  return {
    metadataBase: new URL(siteUrl),
    title: post.title,
    description: post.description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {})
    },
    keywords: post.tags,
    authors: [{ name: "Syaipul Ardiansyah", url: `${siteUrl}/#guides` }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
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

export function BlogPostView({ post }: { post: BlogPost }) {
  const locale = blogPostLocale(post);
  const copy = blogCopy[locale];
  const relatedPosts = getRelatedPosts(post);
  const modifiedDate = getPostModifiedDate(post);
  const sectionFaq = post.sections.flatMap((section) => section.faq ?? []);
  const path = blogPostPath(post);
  const isEnglish = locale === "en";
  const localizedHome = locale === "en" ? "/" : `/${locale}`;
  const primaryCtaHref = post.primaryCtaHref ?? "/booking";
  const primaryCtaLabel = post.primaryCtaLabel ?? copy.defaultPrimary;
  const secondaryCta = isEnglish
    ? primaryCtaHref === "/sumatra-orangutan-tour"
      ? { href: "/booking", label: copy.booking }
      : { href: "/sumatra-orangutan-tour", label: copy.sumatraTour }
    : { href: localizedHome, label: copy.bukitLawang };
  const planningLinks = isEnglish
    ? [
        { href: localizedHome, label: copy.bukitLawang },
        { href: "/sumatra-orangutan-tour", label: copy.sumatraTour },
        { href: "/3-day-bukit-lawang-orangutan-trek", label: copy.threeDay },
        { href: "/booking", label: copy.booking }
      ]
    : [
        { href: localizedHome, label: copy.bukitLawang },
        { href: blogIndexPath(locale), label: copy.blog },
        { href: "/booking", label: copy.booking }
      ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(path)}#blog-post`,
        headline: post.title,
        description: post.description,
        image: absoluteUrl(post.image),
        inLanguage: locale,
        datePublished: post.date,
        dateModified: modifiedDate,
        author: { "@id": `${siteUrl}/#guide` },
        publisher: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl("/images/logo.png")
          }
        },
        mainEntityOfPage: absoluteUrl(path)
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#guide`,
        name: "Syaipul Ardiansyah",
        jobTitle: "Local jungle guide",
        url: `${siteUrl}/#guides`,
        sameAs: [instagramUrl],
        worksFor: {
          "@type": "TravelAgency",
          "@id": `${siteUrl}/#business`,
          name: siteName,
          url: siteUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(path)}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteName,
            item: absoluteUrl(localizedHome)
          },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.blog,
            item: absoluteUrl(blogIndexPath(locale))
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: absoluteUrl(path)
          }
        ]
      },
      ...(sectionFaq.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${absoluteUrl(path)}#faq`,
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
      <StaticHeader locale={locale} />
      <article>
        <section className="resource-hero article-hero">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" />
          <div className="resource-hero-shade" />
          <div className="resource-hero-content">
            <span className="section-kicker">{copy.heroKicker}</span>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="article-meta">
              <span>
                {new Date(post.date).toLocaleDateString(dateLocales[locale], {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </span>
              {modifiedDate !== post.date ? (
                <span>
                  {copy.updated}{" "}
                  {new Date(modifiedDate).toLocaleDateString(dateLocales[locale], {
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
              <span>
                {copy.reviewedBy}{" "}
                <Link href={`${localizedHome}#guides`}>Syaipul Ardiansyah</Link>
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
              {copy.browseTreks}
            </Link>
            <div className="article-planning-links" aria-label={copy.planTitle}>
              <strong>{copy.planTitle}</strong>
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
              <h2>{copy.ctaTitle}</h2>
              <p>{copy.ctaText}</p>
              <div className="resource-links">
                <TrackedLink
                  className="primary-button"
                  href={primaryCtaHref}
                  eventName="booking_cta_click"
                  eventParams={{ blog_post: post.slug, locale, source: "blog_cta_primary" }}
                >
                  {primaryCtaLabel}
                  <ArrowRight size={18} />
                </TrackedLink>
                {isEnglish ? (
                  <TrackedLink
                    className="secondary-button dark"
                    href={secondaryCta.href}
                    eventName="booking_cta_click"
                    eventParams={{ blog_post: post.slug, locale, source: "blog_cta_secondary" }}
                  >
                    {secondaryCta.label}
                  </TrackedLink>
                ) : (
                  <Link className="secondary-button dark" href={secondaryCta.href}>
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </section>
          </div>
        </section>
      </article>

      <section className="resource-content related-section">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{copy.moreKicker}</span>
          <h2>{copy.moreTitle}</h2>
        </div>
        <div className="related-grid">
          {relatedPosts.map((related) => (
            <Link className="related-link" href={blogPostPath(related)} key={related.slug}>
              <span>{related.title}</span>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>
      <StaticFooter locale={locale} />
    </main>
  );
}
