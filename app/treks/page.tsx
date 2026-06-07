import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, MessageCircle } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { bookingWhatsappUrl } from "../travel-content";
import { siteText, trekBase, type TrekId } from "../site-content";
import { trekDetailHref } from "../trek-details";

const pageTitle = `Trek details | ${siteName}`;
const pageDescription =
  "Compare Bukit Lawang trek details before you book. Each package page shows duration, level, inclusions, itinerary notes, what to bring, and booking links.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/treks"
  },
  keywords: [
    "Bukit Lawang trek details",
    "Bukit Lawang package details",
    "orangutan trekking itinerary",
    "Sumatra jungle trek compare"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/treks",
    siteName,
    type: "website",
    images: [
      {
        url: "/images/package-activity-hero.webp",
        width: 1200,
        height: 800,
        alt: "Bukit Lawang trek details"
      }
    ]
  }
};

export default function TreksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/treks")}#collection`,
        name: pageTitle,
        description: pageDescription,
        url: absoluteUrl("/treks"),
        publisher: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl("/treks")}#breadcrumb`,
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
            name: "Treks",
            item: absoluteUrl("/treks")
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

      <section className="resource-hero landing-hero">
        <Image
          src="/images/package-activity-hero.webp"
          alt="Small trekking group hiking a Bukit Lawang rainforest trail"
          fill
          priority
          sizes="100vw"
        />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">Trek details</span>
          <h1>Compare each Bukit Lawang package before you book</h1>
          <p>{pageDescription}</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/booking">
              <CalendarDays size={18} />
              Open booking form
            </Link>
            <a className="secondary-button" href={bookingWhatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="resource-content">
        <div className="highlight-strip trek-profile-strip">
          <div>
            <Check size={18} />
            <span>Compare details first</span>
          </div>
          <div>
            <Check size={18} />
            <span>4 hours to 5 days</span>
          </div>
          <div>
            <Check size={18} />
            <span>Classic, private, and activity options</span>
          </div>
          <div>
            <Check size={18} />
            <span>Booking after you choose the right route</span>
          </div>
        </div>

        <div className="trek-grid">
          {trekBase.map((trek) => {
            const info = siteText.en.treks[trek.id as TrekId];

            return (
              <article className="trek-card" key={trek.id}>
                <div className="trek-media">
                  <Image
                    src={trek.image}
                    alt={info.title}
                    fill
                    sizes="(max-width: 680px) calc(100vw - 30px), (max-width: 900px) calc(50vw - 30px), 33vw"
                  />
                </div>
                <div className="trek-body">
                  <div className="trek-meta">
                    <span>{trek.duration}</span>
                    <span>{trek.intensity}</span>
                  </div>
                  <h3>{info.title}</h3>
                  <p className="price">{trek.price}</p>
                  <ul>
                    {info.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Check size={15} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link className="card-link" href={trekDetailHref(trek.id)}>
                    View details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <StaticFooter />
    </main>
  );
}
