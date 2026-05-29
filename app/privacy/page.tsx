import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { privacyPolicy } from "../travel-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${privacyPolicy.title} | ${siteName}`,
  description: privacyPolicy.description,
  alternates: {
    canonical: "/privacy"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: `${privacyPolicy.title} | ${siteName}`,
    description: privacyPolicy.description,
    url: "/privacy",
    siteName,
    type: "article",
    images: [
      {
        url: privacyPolicy.image,
        width: 1200,
        height: 800,
        alt: privacyPolicy.imageAlt
      }
    ]
  }
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: privacyPolicy.title,
    description: privacyPolicy.description,
    url: absoluteUrl("/privacy"),
    dateModified: privacyPolicy.lastUpdated,
    publisher: {
      "@type": "TravelAgency",
      name: siteName,
      url: siteUrl
    }
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
      <section className="resource-hero legal-hero">
        <Image src={privacyPolicy.image} alt={privacyPolicy.imageAlt} fill priority sizes="100vw" />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">Privacy for travelers</span>
          <h1>{privacyPolicy.title}</h1>
          <p>{privacyPolicy.description}</p>
          <p className="resource-date">Last updated: {privacyPolicy.lastUpdated}</p>
        </div>
      </section>

      <section className="resource-content narrow-content">
        {privacyPolicy.sections.map((section) => (
          <article className="info-block legal-block" key={section.title}>
            <span className="icon-box">
              <ShieldCheck size={22} />
            </span>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>
      <StaticFooter />
    </main>
  );
}
