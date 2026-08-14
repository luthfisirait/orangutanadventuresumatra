import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { ReviewSnippets } from "./components/review-snippets";
import { TrackedLink } from "./components/tracked-link";
import type { GoogleReviewsData } from "./google-reviews";
import { StaticFooter, StaticHeader } from "./site-chrome";
import { absoluteUrl, siteName, siteUrl } from "./seo";
import { siteText, trekBase, type TrekId } from "./site-content";
import { trekBookingHref, trekDetailHref } from "./trek-details";
import { bookingWhatsappUrl } from "./travel-content";

type LandingSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LandingComparison = {
  title: string;
  description: string;
  options: Array<{
    id: TrekId;
    bestFor: string;
  }>;
};

type LandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  keywords?: string[];
  comparison: LandingComparison;
  sections: LandingSection[];
  faq: Array<{ q: string; a: string }>;
  relatedLinks: Array<{ href: string; label: string }>;
};

const trekById = Object.fromEntries(trekBase.map((trek) => [trek.id, trek])) as Record<
  TrekId,
  (typeof trekBase)[number]
>;

const landingPages: Record<string, LandingPage> = {
  sumatraOrangutanTour: {
    slug: "sumatra-orangutan-tour",
    title: "Sumatra Orangutan Tour",
    metaTitle: "Sumatra Orangutan Tours | Bukit Lawang Guide",
    metaDescription:
      "Compare Sumatra orangutan tours from Bukit Lawang: ethical local guide, 4-hour to 5-day treks, river camps, rafting, transport help, and WhatsApp booking.",
    heroKicker: "Choose your rainforest route",
    heroTitle: "Sumatra Orangutan Tours",
    heroDescription:
      "Compare Bukit Lawang orangutan treks by time, effort, camp nights, and price, then ask a local guide which route fits your dates.",
    image: "/images/package-activity-hero.webp",
    imageAlt: "Small trekking group hiking a Bukit Lawang rainforest trail",
    highlights: [
      "Direct WhatsApp booking",
      "4-hour to 5-day options",
      "Local guide since 2015",
      "Ethical wildlife rules"
    ],
    keywords: [
      "Sumatra orangutan tours",
      "Sumatra orangutan travel",
      "orangutan trip Sumatra",
      "orangutan trekking Sumatra",
      "orangutan tours Sumatra"
    ],
    comparison: {
      title: "Compare the main Sumatra orangutan trek options",
      description:
        "Start with the time you have and the kind of forest experience you want. Prices are per person; routes and availability are confirmed before payment.",
      options: [
        { id: "4h", bestFor: "A first rainforest walk when your schedule is tight." },
        { id: "1d", bestFor: "A full forest day without an overnight camp." },
        { id: "2d", bestFor: "One river camp and a balanced first multi-day trek." },
        { id: "3d", bestFor: "Two jungle nights and more time on quieter routes." },
        { id: "p3d", bestFor: "A private pace with transport and accommodation support." }
      ]
    },
    sections: [
      {
        title: "Start with the time you have",
        paragraphs: [
          "Most trips start in Bukit Lawang, on the edge of Gunung Leuser National Park. Choose by how much forest time you want, whether you want to sleep at a river camp, and how private you want the pace to be.",
          "The guide team handles route planning, meals, camp setup, permits, and practical questions about transport from Medan or Kuala Namu."
        ],
        bullets: [
          "Short treks for limited time",
          "Overnight treks for a deeper rainforest stay",
          "Private packages for couples, families, and photographers"
        ]
      },
      {
        title: "What makes this orangutan trip in Sumatra different",
        paragraphs: [
          "The forest is treated as a real habitat, not a performance. That means no guaranteed sightings, no feeding, no touching, and no pressure to move animals closer for photos.",
          "The result is a slower but more honest experience that fits the kind of traveler who values wildlife, local knowledge, and clear trip planning."
        ]
      },
      {
        title: "Best tour length for your trip",
        paragraphs: [
          "A 4-hour or 1-day orangutan tour suits travelers with limited time. A 2-day or 3-day trek gives more forest time, river camp life, and a stronger Bukit Lawang experience.",
          "If you want a private Sumatra orangutan tour, ask for a private guide flow so the pace, route, and camp rhythm can match your group."
        ],
        bullets: [
          "Fast trip: 4-hour or 1-day trek",
          "Balanced trip: 2-day or 3-day trek",
          "Flexible trip: private 3-day to 5-day package"
        ]
      },
      {
        title: "How to book",
        paragraphs: [
          "Send your dates, group size, arrival city, and preferred trek length. You will get a reply with availability, package guidance, and the next step for deposit or final confirmation."
        ],
        bullets: [
          "Fastest channel: WhatsApp",
          "Email also works for longer planning questions",
          "Transport and accommodation support available on request"
        ]
      }
    ],
    faq: [
      {
        q: "Is this the same as Bukit Lawang orangutan trekking?",
        a: "Yes. Bukit Lawang is the main starting point for orangutan trekking in this part of North Sumatra."
      },
      {
        q: "Which Sumatra orangutan tour should I choose?",
        a: "Choose a 1-day trek if time is short, a 3-day trek if you want camps and river return, or a private package if you want more flexibility."
      },
      {
        q: "How much do Sumatra orangutan tours cost?",
        a: "Current public prices range from 55 EUR per person for a 4-hour jungle trek to 385 EUR per person for the longest private eco jungle package."
      },
      {
        q: "Are orangutan sightings guaranteed?",
        a: "No. The tours enter orangutan habitat around Bukit Lawang, but ethical wildlife trekking never forces sightings, feeding, touching, or close contact."
      },
      {
        q: "Can you help with transport from Medan?",
        a: "Yes. Pickup help from Medan or Kuala Namu can be arranged when you enquire."
      },
      {
        q: "Do I need to know the exact trek before booking?",
        a: "No. You can start with your dates and group size, then choose the trek length after a quick reply."
      }
    ],
    relatedLinks: [
      { href: "/", label: "Bukit Lawang orangutan trekking" },
      { href: "/3-day-bukit-lawang-orangutan-trek", label: "3-day Bukit Lawang orangutan trek" },
      { href: "/booking", label: "Booking form" }
    ]
  },
  threeDayTrek: {
    slug: "3-day-bukit-lawang-orangutan-trek",
    title: "3-Day Bukit Lawang Orangutan Trek",
    metaTitle: "Book a 3-Day Bukit Lawang Trek | Price & Availability",
    metaDescription:
      "Check 3-day Bukit Lawang trek prices, inclusions, availability, jungle camps, river return, private options, and direct booking with a local guide.",
    heroKicker: "Choose a 3-day format",
    heroTitle: "Book a 3-Day Bukit Lawang Orangutan Trek",
    heroDescription:
      "Choose a classic 3-day trek from 170 EUR per person or ask about a private package, then confirm dates before paying a deposit.",
    image: "/images/package-activity-hero.webp",
    imageAlt: "Small trekking group hiking a Bukit Lawang rainforest trail overlooking the valley",
    highlights: [
      "From 170 EUR per person",
      "Two jungle nights",
      "River camp and meals",
      "Classic and private options"
    ],
    comparison: {
      title: "Choose between the classic and private 3-day trek",
      description:
        "Both options include two jungle nights. Compare the pace, planning support, and published price before you send your dates.",
      options: [
        { id: "3d", bestFor: "The established 3-day route at the standard package price." },
        { id: "p3d", bestFor: "A private guide flow with more flexibility for your group." }
      ]
    },
    sections: [
      {
        title: "3-day trek price and package choices",
        paragraphs: [
          "The classic 3-day / 2-night jungle trek is listed at 170 EUR per person. The private 3-day eco jungle package is listed at 280 EUR per person and adds a more flexible guide flow plus transport and accommodation support.",
          "Availability, the final route, river conditions, and any custom transport or accommodation must be confirmed before payment. The booking form calculates a 30% deposit only after you choose a package and group size."
        ],
        bullets: [
          "Classic 3-day trek: 170 EUR per person",
          "Private 3-day eco package: 280 EUR per person",
          "Share dates and group size before paying a deposit"
        ]
      },
      {
        title: "What you confirm before paying",
        paragraphs: [
          "The classic and private formats both include two jungle nights. The main difference is pace and planning support: the classic trek follows the established route format, while the private package gives your group more flexibility.",
          "Send your dates and group size first. The team confirms availability, current route conditions, and any transport or accommodation help before you pay the 30% deposit."
        ]
      },
      {
        title: "Who it suits",
        paragraphs: [
          "This trek fits active travelers who want a full rainforest experience without committing to the longer 4-day or 5-day routes.",
          "It also works well for people building a North Sumatra itinerary around Bukit Lawang, Medan, and Lake Toba."
        ],
        bullets: [
          "Couples and small groups",
          "Travelers with medium fitness",
          "People who want more than a day trek but less than a full expedition"
        ]
      },
      {
        title: "Check availability before paying",
        paragraphs: [
          "Ask about current permit rules, sleeping setup, food needs, transport help, and river conditions before paying a deposit.",
          "The route can change with weather and safety decisions, so the best booking is the one that leaves some flexibility in the plan."
        ]
      }
    ],
    faq: [
      {
        q: "How much is a 3-day Bukit Lawang trek?",
        a: "The listed classic 3-day trek is 170 EUR per person. The private 3-day eco jungle package is 280 EUR per person before any custom extras."
      },
      {
        q: "How many nights are in the package?",
        a: "The standard version includes two nights in the jungle."
      },
      {
        q: "Is rafting always included?",
        a: "Only when the package includes it and river conditions are safe."
      },
      {
        q: "Can this be booked as a private trek?",
        a: "Yes. Private 3-day packages are available."
      }
    ],
    relatedLinks: [
      { href: "/sumatra-orangutan-tour", label: "Sumatra orangutan tour" },
      { href: "/blog/3-day-bukit-lawang-jungle-trek-itinerary", label: "Read the day-by-day 3-day itinerary" },
      { href: "/", label: "Bukit Lawang orangutan trekking" },
      { href: "/booking", label: "Booking form" }
    ]
  }
};

function metadataForLandingPage(page: LandingPage): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${page.slug}`
    },
    keywords: [
      ...(page.keywords ?? []),
      page.title,
      "Bukit Lawang",
      "orangutan trekking",
      "Sumatra jungle tour",
      "Gunung Leuser National Park"
    ],
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/${page.slug}`,
      siteName,
      type: "website",
      images: [
        {
          url: page.image,
          width: 1200,
          height: 800,
          alt: page.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.image]
    }
  };
}

function LandingPageView({
  googleReviews = null,
  page
}: {
  googleReviews?: GoogleReviewsData | null;
  page: LandingPage;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(`/${page.slug}`)}#webpage`,
        name: page.metaTitle,
        description: page.metaDescription,
        url: absoluteUrl(`/${page.slug}`),
        publisher: {
          "@type": "TravelAgency",
          name: siteName,
          url: siteUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(`/${page.slug}`)}#breadcrumb`,
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
            name: page.title,
            item: absoluteUrl(`/${page.slug}`)
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(`/${page.slug}`)}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a
          }
        }))
      }
    ]
  };
  const comparisonOptions = page.comparison.options.map((option) => ({
    ...option,
    trek: trekById[option.id],
    content: siteText.en.treks[option.id]
  }));

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
        <Image src={page.image} alt={page.imageAlt} fill priority sizes="100vw" />
        <div className="resource-hero-shade" />
        <div className="resource-hero-content">
          <span className="section-kicker">{page.heroKicker}</span>
          <h1>{page.heroTitle}</h1>
          <p>{page.heroDescription}</p>
          <div className="hero-actions">
            <TrackedLink
              className="primary-button"
              href="/booking"
              eventName="booking_cta_click"
              eventParams={{ landing_page: page.slug, source: "landing_hero" }}
            >
              <CalendarDays size={18} />
              Open booking form
            </TrackedLink>
            <TrackedLink
              className="secondary-button"
              href={bookingWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              eventName="whatsapp_click"
              eventParams={{ landing_page: page.slug, source: "landing_hero" }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="resource-content narrow-content">
        <div className="highlight-strip landing-highlight-strip">
          {page.highlights.map((item) => (
            <div key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <ReviewSnippets
          googleReviews={googleReviews}
          heading="Recent Google reviews from travelers"
          source={`${page.slug}_reviews`}
        />

        <section className="landing-route-board" aria-labelledby={`${page.slug}-comparison-heading`}>
          <div className="landing-route-board-heading">
            <h2 id={`${page.slug}-comparison-heading`}>{page.comparison.title}</h2>
            <p>{page.comparison.description}</p>
          </div>
          <ol className="landing-route-list">
            {comparisonOptions.map((option, index) => (
              <li className="landing-route-row" key={option.id}>
                <span className="landing-route-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="landing-route-copy">
                  <h3>{option.content.title}</h3>
                  <p>{option.bestFor}</p>
                </div>
                <dl className="landing-route-facts">
                  <div>
                    <dt>Duration</dt>
                    <dd>{option.trek.duration}</dd>
                  </div>
                  <div>
                    <dt>Effort</dt>
                    <dd>{option.trek.intensity}</dd>
                  </div>
                  <div>
                    <dt>Price</dt>
                    <dd>{option.trek.price}</dd>
                  </div>
                </dl>
                <div className="landing-route-actions">
                  <Link className="landing-route-detail" href={trekDetailHref(option.id)}>
                    View trek details
                    <ArrowRight size={16} />
                  </Link>
                  <TrackedLink
                    className="primary-button"
                    href={trekBookingHref(option.id)}
                    eventName="booking_cta_click"
                    eventParams={{
                      landing_page: page.slug,
                      package_id: option.id,
                      source: "landing_comparison"
                    }}
                  >
                    Check dates
                  </TrackedLink>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="resource-grid landing-resource-grid">
          {page.sections.map((section) => (
            <article className="info-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
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
          <h2>FAQ</h2>
          <div className="faq-list landing-faq-list">
            {page.faq.map((item) => (
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

        <div className="resource-links landing-related-links">
          {page.relatedLinks.map((link) => (
            <Link key={link.href} className="secondary-button dark" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <StaticFooter />
    </main>
  );
}

export { landingPages, metadataForLandingPage, LandingPageView };
