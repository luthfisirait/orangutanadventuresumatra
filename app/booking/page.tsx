import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Clock3, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { bookingAssurances, bookingChecklist, bookingFlow } from "./booking-data";
import { BookingForm } from "./booking-form";
import { bookingWhatsappUrl } from "../travel-content";

const bookingTitle = `Book a Bukit Lawang Orangutan Trek | ${siteName}`;
const bookingDescription =
  "Request availability for Bukit Lawang orangutan trekking, private jungle tours, rafting, and transport help. Share your dates and group size, then we confirm by email or WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: bookingTitle,
  description: bookingDescription,
  alternates: {
    canonical: "/booking"
  },
  keywords: [
    "Bukit Lawang booking form",
    "Bukit Lawang orangutan trek booking",
    "orangutan trekking enquiry",
    "Bukit Lawang jungle tour booking",
    "Sumatra jungle booking",
    "Bukit Lawang tour request"
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: bookingTitle,
    description: bookingDescription,
    url: "/booking",
    siteName,
    type: "website",
    images: [
      {
        url: "/images/package-activity-hero.webp",
        width: 1200,
        height: 800,
        alt: "Jungle trek booking form for Bukit Lawang"
      }
    ]
  }
};

type BookingPageProps = {
  searchParams?: Promise<{
    package?: string | string[];
  }>;
};

function normalizePackageParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const initialPackageId = normalizePackageParam(resolvedSearchParams.package);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/booking")}#webpage`,
        name: bookingTitle,
        description: bookingDescription,
        url: absoluteUrl("/booking"),
        publisher: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl("/booking")}#breadcrumb`,
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
            name: "Booking",
            item: absoluteUrl("/booking")
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

      <section className="resource-hero booking-hero">
        <Image
          src="/images/package-activity-hero.webp"
          alt="A rainforest trekking group in Bukit Lawang"
          fill
          priority
          sizes="100vw"
        />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">Booking</span>
          <h1>Book your Bukit Lawang orangutan trek</h1>
          <p>{bookingDescription}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#booking-form">
              <CalendarDays size={18} />
              Go to form
            </a>
            <a
              className="secondary-button"
              href={bookingWhatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="resource-content narrow-content">
        <div className="highlight-strip booking-highlight-strip">
          <div>
            <Clock3 size={18} />
            <span>Request goes directly to our inbox</span>
          </div>
          <div>
            <HeartHandshake size={18} />
            <span>Works for solo travelers, couples, and groups</span>
          </div>
          <div>
            <Check size={18} />
            <span>Deposit details shared after availability check</span>
          </div>
          <div>
            <ShieldCheck size={18} />
            <span>No automatic confirmation before availability check</span>
          </div>
        </div>

        <div className="booking-layout">
          <article className="info-block booking-panel" id="booking-form">
            <BookingForm initialPackageId={initialPackageId} />
          </article>

          <div className="booking-side">
            <article className="info-block">
              <span className="icon-box">
                <Check size={22} />
              </span>
              <h2>What to include</h2>
              <ul>
                {bookingChecklist.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="info-block">
              <span className="icon-box">
                <ArrowRight size={22} />
              </span>
              <h2>How the booking works</h2>
              <div className="booking-flow">
                {bookingFlow.map((item) => (
                  <div key={item.step}>
                    <strong>{item.step}</strong>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="info-block">
              <span className="icon-box">
                <ShieldCheck size={22} />
              </span>
              <h2>Important notes</h2>
              <ul>
                {bookingAssurances.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="booking-support-link">
                Need travel prep first?{" "}
                <Link href="/essential-information">Read the essential information page</Link>.
              </p>
              <p className="booking-support-link">
                Want to compare package details first?{" "}
                <Link href="/treks">Browse all trek details</Link>.
              </p>
              <p className="booking-support-link">
                Have payment questions?{" "}
                <Link href="/payment-and-deposit">Read the payment and deposit information</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <StaticFooter />
    </main>
  );
}
