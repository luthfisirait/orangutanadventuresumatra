import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { bookingWhatsappUrl, essentialInformation } from "../travel-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${essentialInformation.title} | ${siteName}`,
  description: essentialInformation.description,
  alternates: {
    canonical: "/essential-information"
  },
  keywords: [
    "Bukit Lawang essential information",
    "Sumatra orangutan trekking packing list",
    "Bukit Lawang from Europe",
    "ethical orangutan trekking information"
  ],
  openGraph: {
    title: `${essentialInformation.title} | ${siteName}`,
    description: essentialInformation.description,
    url: "/essential-information",
    siteName,
    type: "article",
    images: [
      {
        url: essentialInformation.image,
        width: 1200,
        height: 800,
        alt: essentialInformation.imageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${essentialInformation.title} | ${siteName}`,
    description: essentialInformation.description,
    images: [essentialInformation.image]
  }
};

export default function EssentialInformationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelGuide",
        "@id": `${absoluteUrl("/essential-information")}#guide`,
        name: essentialInformation.title,
        description: essentialInformation.description,
        image: absoluteUrl(essentialInformation.image),
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
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl("/essential-information")}#breadcrumb`,
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
            name: "Essential information",
            item: absoluteUrl("/essential-information")
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
      <StaticHeader />
      <section className="resource-hero">
        <Image src={essentialInformation.image} alt={essentialInformation.imageAlt} fill priority sizes="100vw" />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">Trip planning</span>
          <h1>{essentialInformation.title}</h1>
          <p>{essentialInformation.intro}</p>
          <div className="hero-actions">
            <a className="primary-button" href={bookingWhatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Ask a guide
            </a>
            <Link className="secondary-button" href="/blog">
              Read blog
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="resource-content">
        <div className="highlight-strip">
          {essentialInformation.highlights.map((item) => (
            <div key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="resource-grid">
          {essentialInformation.sections.map((section) => (
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
      </section>
      <StaticFooter />
    </main>
  );
}
