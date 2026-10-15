import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Clock3, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { ReviewSnippets } from "../components/review-snippets";
import { TrackedLink } from "../components/tracked-link";
import type { GoogleReviewsData } from "../google-reviews";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { getBookingPageContent } from "./booking-data";
import { BookingForm } from "./booking-form";
import { bookingWhatsappUrl } from "../travel-content";
import type { Locale } from "../site-content";

type BookingPageViewProps = {
  initialPackageId: string;
  locale: Locale;
  googleReviews: GoogleReviewsData;
};

export function BookingPageView({ initialPackageId, locale, googleReviews }: BookingPageViewProps) {
  const content = getBookingPageContent(locale);
  const canonicalUrl = locale === "en" ? "/booking" : `/${locale}/booking`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(canonicalUrl)}#webpage`,
        name: content.pageTitle,
        description: content.pageDescription,
        url: absoluteUrl(canonicalUrl),
        publisher: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(canonicalUrl)}#breadcrumb`,
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
            name: content.heroKicker,
            item: absoluteUrl(canonicalUrl)
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
          <span className="section-kicker">{content.heroKicker}</span>
          <h1>{content.heroHeading}</h1>
          <p>{content.pageDescription}</p>
          <div className="hero-actions">
            <TrackedLink
              className="primary-button"
              href="#booking-form"
              eventName="booking_cta_click"
              eventParams={{ source: "booking_hero", target: "booking_form" }}
            >
              <CalendarDays size={18} />
              {content.heroCta}
            </TrackedLink>
            <TrackedLink
              className="secondary-button"
              href={bookingWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              eventName="whatsapp_click"
              eventParams={{ source: "booking_hero" }}
            >
              <MessageCircle size={18} />
              {content.whatsapp}
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="resource-content narrow-content">
        <div className="highlight-strip booking-highlight-strip">
          <div>
            <Clock3 size={18} />
            <span>{content.strip[0]}</span>
          </div>
          <div>
            <HeartHandshake size={18} />
            <span>{content.strip[1]}</span>
          </div>
          <div>
            <Check size={18} />
            <span>{content.strip[2]}</span>
          </div>
          <div>
            <ShieldCheck size={18} />
            <span>{content.strip[3]}</span>
          </div>
        </div>

        <ReviewSnippets
          googleReviews={googleReviews}
          heading={content.reviewHeading}
          source="booking_page_reviews"
        />

        <div className="booking-layout">
          <article className="info-block booking-panel" id="booking-form">
            <BookingForm initialPackageId={initialPackageId} locale={locale} />
          </article>

          <div className="booking-side">
            <article className="info-block">
              <span className="icon-box">
                <Check size={22} />
              </span>
              <h2>{content.checklistHeading}</h2>
              <ul>
                {content.checklist.map((item) => (
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
              <h2>{content.flowHeading}</h2>
              <div className="booking-flow">
                {content.flow.map((item) => (
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
              <h2>{content.notesHeading}</h2>
              <ul>
                {content.assurances.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="booking-support-link">
                {content.supportLinks.essentialInfo.text}{" "}
                <Link href={content.supportLinks.essentialInfo.href}>
                  {content.supportLinks.essentialInfo.linkText}
                </Link>
                .
              </p>
              <p className="booking-support-link">
                {content.supportLinks.treks.text}{" "}
                <Link href={content.supportLinks.treks.href}>
                  {content.supportLinks.treks.linkText}
                </Link>
                .
              </p>
              <p className="booking-support-link">
                {content.supportLinks.payment.text}{" "}
                <Link href={content.supportLinks.payment.href}>
                  {content.supportLinks.payment.linkText}
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>

      <StaticFooter locale={locale} />
    </main>
  );
}
