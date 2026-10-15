import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { bookingWhatsappUrl } from "../travel-content";
import { essentialInfoByLocale } from "../content/essential-information-i18n";
import type { Locale } from "../site-content";

export function EssentialInformationView({ locale }: { locale: Locale }) {
  const content = essentialInfoByLocale[locale] ?? essentialInfoByLocale.en;
  const canonicalPath = locale === "en" ? "/essential-information" : `/${locale}/essential-information`;
  const blogPath = locale === "en" ? "/blog" : `/${locale}/blog`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelGuide",
        "@id": `${absoluteUrl(canonicalPath)}#guide`,
        name: content.title,
        description: content.description,
        image: absoluteUrl(content.image),
        about: {
          "@type": "TouristDestination",
          name: "Bukit Lawang",
          address: {
            "@type": "PostalAddress",
            addressRegion: "North Sumatra",
            addressCountry: "ID"
          }
        },
        publisher: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(canonicalPath)}#faq`,
        mainEntity: content.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(canonicalPath)}#breadcrumb`,
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
            name: content.kicker,
            item: absoluteUrl(canonicalPath)
          }
        ]
      }
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
      <section className="resource-hero">
        <Image src={content.image} alt={content.imageAlt} fill priority sizes="100vw" />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">{content.kicker}</span>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <div className="hero-actions">
            <a className="primary-button" href={bookingWhatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {content.askGuide}
            </a>
            <Link className="secondary-button" href={blogPath}>
              {content.readBlog}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="resource-content">
        <div className="highlight-strip">
          {content.highlights.map((item) => (
            <div key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="resource-grid">
          {content.sections.map((section) => (
            <article className="info-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={16} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="info-block landing-faq-block">
          <h2>{content.faqHeading}</h2>
          <div className="faq-list landing-faq-list">
            {content.faq.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <ArrowRight size={18} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="resource-links">
          {content.relatedLinks.map((link) => (
            <Link key={link.href} className="secondary-button dark" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
      <StaticFooter locale={locale} />
    </main>
  );
}
