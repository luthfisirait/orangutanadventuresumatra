import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { StaticFooter, StaticHeader } from "../../site-chrome";
import { absoluteUrl, siteName, siteUrl } from "../../seo";
import { bookingWhatsappUrl } from "../../travel-content";
import { trekBookingHref, trekDetailList, getTrekDetailBySlug } from "../../trek-details";

type TrekPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trekDetailList.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: TrekPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getTrekDetailBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    metadataBase: new URL(siteUrl),
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/treks/${page.slug}`
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/treks/${page.slug}`,
      siteName,
      type: "article",
      images: [
        {
          url: page.image,
          width: 1200,
          height: 800,
          alt: page.imageAlt
        }
      ]
    }
  };
}

export default async function TrekDetailPage({ params }: TrekPageProps) {
  const { slug } = await params;
  const page = getTrekDetailBySlug(slug);

  if (!page) {
    notFound();
  }

  const priceValue = page.profile.find((item) => item.label === "Price")?.value ?? page.profile[0]?.value ?? "";
  const numericPrice = Number.parseFloat(priceValue.replace(/[^0-9.]/g, ""));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `${absoluteUrl(`/treks/${page.slug}`)}#trip`,
        name: page.title,
        description: page.metaDescription,
        image: absoluteUrl(page.image),
        provider: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl
        },
        offers: Number.isFinite(numericPrice)
          ? {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: numericPrice,
              availability: "https://schema.org/InStock",
              url: absoluteUrl(`/treks/${page.slug}`)
            }
          : undefined,
        mainEntityOfPage: absoluteUrl(`/treks/${page.slug}`)
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(`/treks/${page.slug}`)}#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: absoluteUrl(`/treks/${page.slug}`)
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

      <section className="resource-hero article-hero">
        <Image src={page.image} alt={page.imageAlt} fill priority sizes="100vw" />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">{page.heroKicker}</span>
          <h1>{page.heroTitle}</h1>
          <p>{page.heroDescription}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={trekBookingHref(page.id)}>
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
          {page.profile.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <article className="info-block" style={{ marginTop: 42 }}>
          <span className="icon-box">
            <ShieldCheck size={22} />
          </span>
          <h2>Highlights</h2>
          <ul>
            {page.highlights.map((highlight) => (
              <li key={highlight}>
                <Check size={16} />
                {highlight}
              </li>
            ))}
          </ul>
        </article>

        <div className="resource-grid">
          {page.sections.map((section) => (
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

        <div className="resource-links" style={{ marginTop: 28 }}>
          {page.relatedLinks.map((link) => {
            const isBooking = link.href.startsWith("/booking");
            const isTreks = link.href === "/treks";

            return isBooking ? (
              <Link key={link.href} className="primary-button" href={link.href}>
                <CalendarDays size={18} />
                {link.label}
              </Link>
            ) : isTreks ? (
              <Link key={link.href} className="secondary-button dark" href={link.href}>
                {link.label}
                <ArrowRight size={18} />
              </Link>
            ) : (
              <Link key={link.href} className="secondary-button dark" href={link.href}>
                {link.label}
                <ArrowRight size={18} />
              </Link>
            );
          })}
        </div>
      </section>

      <StaticFooter />
    </main>
  );
}
