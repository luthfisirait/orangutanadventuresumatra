import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { bookingWhatsappUrl, contactEmail, paymentAndDeposit } from "../travel-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${paymentAndDeposit.title} | ${siteName}`,
  description: paymentAndDeposit.description,
  alternates: {
    canonical: "/payment-and-deposit"
  },
  keywords: [
    "Bukit Lawang deposit",
    "Bukit Lawang payment",
    "orangutan trekking deposit",
    "Sumatra trekking payment"
  ],
  openGraph: {
    title: `${paymentAndDeposit.title} | ${siteName}`,
    description: paymentAndDeposit.description,
    url: "/payment-and-deposit",
    siteName,
    type: "website",
    images: [
      {
        url: paymentAndDeposit.image,
        width: 1200,
        height: 800,
        alt: paymentAndDeposit.imageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${paymentAndDeposit.title} | ${siteName}`,
    description: paymentAndDeposit.description,
    images: [paymentAndDeposit.image]
  }
};

export default function PaymentAndDepositPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/payment-and-deposit")}#webpage`,
        name: paymentAndDeposit.title,
        description: paymentAndDeposit.description,
        url: absoluteUrl("/payment-and-deposit"),
        publisher: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl("/payment-and-deposit")}#breadcrumb`,
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
            name: "Payment and deposit",
            item: absoluteUrl("/payment-and-deposit")
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
        <Image src={paymentAndDeposit.image} alt={paymentAndDeposit.imageAlt} fill priority sizes="100vw" />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">Payment information</span>
          <h1>{paymentAndDeposit.title}</h1>
          <p>{paymentAndDeposit.intro}</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/booking">
              <CalendarDays size={18} />
              Open booking form
            </Link>
            <a className="secondary-button" href={`mailto:${contactEmail}`}>
              <Mail size={18} />
              Email us
            </a>
          </div>
        </div>
      </section>

      <section className="resource-content">
        <div className="highlight-strip">
          {paymentAndDeposit.highlights.map((item) => (
            <div key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="resource-grid">
          {paymentAndDeposit.sections.map((section) => (
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
          <span className="icon-box">
            <ShieldCheck size={22} />
          </span>
          <h2>Before sending payment</h2>
          <p>
            If payment details are unclear, contact us by email or WhatsApp before sending money. Deposit and balance
            payment instructions should match your confirmed booking.
          </p>
          <div className="resource-links">
            <a className="primary-button" href={bookingWhatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <Link className="secondary-button dark" href="/booking">
              Booking form
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <StaticFooter />
    </main>
  );
}
