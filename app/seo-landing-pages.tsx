import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { StaticFooter, StaticHeader } from "./site-chrome";
import { absoluteUrl, siteName, siteUrl } from "./seo";
import { bookingWhatsappUrl } from "./travel-content";

type LandingSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
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
  sections: LandingSection[];
  faq: Array<{ q: string; a: string }>;
  relatedLinks: Array<{ href: string; label: string }>;
};

const landingPages: Record<string, LandingPage> = {
  sumatraOrangutanTour: {
    slug: "sumatra-orangutan-tour",
    title: "Sumatra Orangutan Tour",
    metaTitle: "Sumatra Orangutan Tour | Bukit Lawang Jungle Packages | Orangutan Adventure Sumatra",
    metaDescription:
      "Plan a Sumatra orangutan tour from Bukit Lawang with a local guide, ethical wildlife rules, 4-hour to 5-day jungle packages, river camps, rafting, and transport help.",
    heroKicker: "High-intent travel page",
    heroTitle: "Sumatra Orangutan Tour",
    heroDescription:
      "A focused booking page for travelers searching for a Sumatra orangutan tour, Bukit Lawang jungle packages, and a direct line to a local guide.",
    image: "/images/package-activity-hero.webp",
    imageAlt: "Small trekking group hiking a Bukit Lawang rainforest trail",
    highlights: [
      "Direct WhatsApp booking",
      "4-hour to 5-day options",
      "Local guide since 2015",
      "Ethical wildlife rules"
    ],
    sections: [
      {
        title: "What this page is for",
        paragraphs: [
          "Use this page if you want a quick overview of the main Sumatra orangutan tour options without scanning the full homepage.",
          "It is built for people who already know they want Bukit Lawang, Gunung Leuser, and a local guide who can handle route planning, meals, camp setup, and transport questions."
        ],
        bullets: [
          "Short treks for limited time",
          "Overnight treks for a deeper rainforest stay",
          "Private packages for couples, families, and photographers"
        ]
      },
      {
        title: "What makes the tour different",
        paragraphs: [
          "The forest is treated as a real habitat, not a performance. That means no guaranteed sightings, no feeding, no touching, and no pressure to move animals closer for photos.",
          "The result is a slower but more honest experience that fits the kind of traveler who values wildlife, local knowledge, and clear trip planning."
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
        q: "Can you help with transport from Medan?",
        a: "Yes. Pickup help from Medan or Kuala Namu can be arranged when you enquire."
      },
      {
        q: "Do I need to know the exact trek before booking?",
        a: "No. You can start with your dates and group size, then choose the trek length after a quick reply."
      }
    ],
    relatedLinks: [
      { href: "/bukit-lawang-orangutan-trekking", label: "Bukit Lawang orangutan trekking" },
      { href: "/3-day-bukit-lawang-orangutan-trek", label: "3-day Bukit Lawang orangutan trek" },
      { href: "/booking", label: "Booking form" }
    ]
  },
  bukitLawangTrekking: {
    slug: "bukit-lawang-orangutan-trekking",
    title: "Bukit Lawang Orangutan Trekking",
    metaTitle: "Bukit Lawang Orangutan Trekking | Local Guide, River Camps, Booking",
    metaDescription:
      "Book Bukit Lawang orangutan trekking with a local guide, clear package options, ethical wildlife rules, river camps, rafting, and direct booking support.",
    heroKicker: "Core search page",
    heroTitle: "Bukit Lawang Orangutan Trekking",
    heroDescription:
      "A practical page for travelers searching the exact Bukit Lawang orangutan trekking phrase and looking for a fast path to the right package.",
    image: "/images/hero-orangutan.webp",
    imageAlt: "Orangutan on a Bukit Lawang rainforest trail",
    highlights: [
      "Exact-match search phrase",
      "Local guide support",
      "River camps and rafting",
      "Short and long trek options"
    ],
    sections: [
      {
        title: "Best for first-time visitors",
        paragraphs: [
          "If you are new to Bukit Lawang, start here. This page points you to the most common trekking options and explains what each one is good for.",
          "Shorter treks suit travelers with limited time. Longer treks suit people who want a deeper forest stay and a more relaxed pace."
        ],
        bullets: [
          "4-hour trek for a quick wildlife walk",
          "1-day trek for a fuller jungle visit",
          "2-day to 5-day treks for camp life and river return"
        ]
      },
      {
        title: "What to expect",
        paragraphs: [
          "Expect a real rainforest route: steep sections, mud after rain, heat, and a changing pace based on weather and group fitness.",
          "What you should not expect is a zoo-style guarantee. The guide helps you watch quietly, stay safe, and respect the animals' distance."
        ]
      },
      {
        title: "Booking essentials",
        paragraphs: [
          "Before you send a deposit, share your travel dates, group size, arrival city, food needs, and whether you want transport or accommodation help."
        ],
        bullets: [
          "Bring cash for village expenses",
          "Carry trekking shoes with grip",
          "Ask about insurance if you want a multi-day trek"
        ]
      }
    ],
    faq: [
      {
        q: "Which trek should I choose?",
        a: "A 1-day trek fits most first visits. A 3-day trek fits active travelers who want camps and more forest time."
      },
      {
        q: "Is the route fixed?",
        a: "No. The final route depends on weather, river level, park guidance, and group pace."
      },
      {
        q: "Can I book directly without using an agency?",
        a: "Yes. The page is designed for direct booking with the local guide team."
      }
    ],
    relatedLinks: [
      { href: "/sumatra-orangutan-tour", label: "Sumatra orangutan tour" },
      { href: "/3-day-bukit-lawang-orangutan-trek", label: "3-day Bukit Lawang orangutan trek" },
      { href: "/essential-information", label: "Essential information" }
    ]
  },
  threeDayTrek: {
    slug: "3-day-bukit-lawang-orangutan-trek",
    title: "3-Day Bukit Lawang Orangutan Trek",
    metaTitle: "3-Day Bukit Lawang Orangutan Trek | Itinerary, Camps, River Return",
    metaDescription:
      "See the 3-day Bukit Lawang orangutan trek itinerary, including camps, meals, wildlife rules, river return, and direct booking support.",
    heroKicker: "Itinerary page",
    heroTitle: "3-Day Bukit Lawang Orangutan Trek",
    heroDescription:
      "A detailed 3-day trek page for travelers who want the itinerary, camp flow, and practical booking notes before they send a request.",
    image: "/images/package-activity-hero.webp",
    imageAlt: "Small trekking group hiking a Bukit Lawang rainforest trail overlooking the valley",
    highlights: [
      "Two jungle nights",
      "River camp and meals",
      "Tube rafting return",
      "Best for active travelers"
    ],
    sections: [
      {
        title: "Day-by-day flow",
        paragraphs: [
          "Day 1 usually starts from Bukit Lawang in the morning, with an easy first walk into the forest, lunch on trail, and a simple riverside camp by late afternoon.",
          "Day 2 goes deeper into quieter forest sections with more time for wildlife, plants, river breaks, and a second camp when the route allows.",
          "Day 3 is normally shorter and often ends with a return toward Bukit Lawang by tube rafting if the river is safe and the package includes it."
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
        title: "Before you confirm",
        paragraphs: [
          "Ask about current permit rules, sleeping setup, food needs, transport help, and river conditions before paying a deposit.",
          "The route can change with weather and safety decisions, so the best booking is the one that leaves some flexibility in the plan."
        ]
      }
    ],
    faq: [
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
      { href: "/bukit-lawang-orangutan-trekking", label: "Bukit Lawang orangutan trekking" },
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

function LandingPageView({ page }: { page: LandingPage }) {
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
            <a className="primary-button" href="/booking">
              <CalendarDays size={18} />
              Open booking form
            </a>
            <a className="secondary-button" href={bookingWhatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
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
