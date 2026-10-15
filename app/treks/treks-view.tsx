import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, MessageCircle } from "lucide-react";
import { StaticFooter, StaticHeader } from "../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../seo";
import { bookingWhatsappUrl } from "../travel-content";
import { siteText, trekBase, trekMetaLocalized, type Locale, type TrekId } from "../site-content";
import { trekDetailHref } from "../trek-details";
import { trekLabels } from "../content/trek-details-i18n";

export function TreksPageView({ locale }: { locale: Locale }) {
  const labels = trekLabels[locale];
  const bookingHref = locale === "en" ? "/booking" : `/${locale}/booking`;
  const canonicalUrl = locale === "en" ? "/treks" : `/${locale}/treks`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl(canonicalUrl)}#collection`,
        name: labels.pageTitle,
        description: labels.pageDescription,
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
            name: labels.heroKicker,
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
          <span className="section-kicker">{labels.heroKicker}</span>
          <h1>{labels.heroHeading}</h1>
          <p>{labels.pageDescription}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={bookingHref}>
              <CalendarDays size={18} />
              {labels.openBooking}
            </Link>
            <a className="secondary-button" href={bookingWhatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {labels.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="resource-content">
        <div className="highlight-strip trek-profile-strip">
          {labels.strip.map((item) => (
            <div key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="trek-grid">
          {trekBase.map((trek) => {
            const trekId = trek.id as TrekId;
            const info = siteText[locale].treks[trekId];
            const meta = trekMetaLocalized[locale][trekId];

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
                    <span>{meta.duration}</span>
                    <span>{meta.intensity}</span>
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
                  <Link className="card-link" href={trekDetailHref(trekId, locale)}>
                    {labels.viewDetails}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <StaticFooter locale={locale} />
    </main>
  );
}
