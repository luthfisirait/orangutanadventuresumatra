"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  HeartHandshake,
  Leaf,
  Mail,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Sparkles,
  Star,
  TentTree,
  Waves,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  galleryItems,
  guideBase,
  localeNames,
  locales,
  siteText,
  trekBase,
  type GuideId,
  type Locale,
  type TrekId
} from "./site-content";
import {
  absoluteUrl,
  brandAlternateNames,
  coreSearchPhrases,
  siteName,
  siteUrl
} from "./seo";
import {
  blogPosts,
  brandSameAsUrls,
  contactEmail,
  brandInstagramHandle,
  brandInstagramUrl,
  googleMapsUrl,
  impactVision,
  instagramUrl,
  packageActivityOverview,
  whatsappNumber,
  type BlogPost
} from "./travel-content";
import { trekDetailHref } from "./trek-details";

const navItems = [
  { key: "treks", href: "#treks" },
  { key: "experience", href: "#experience" },
  { key: "guides", href: "#guides" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" }
] as const;

function whatsappUrlFor(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const trekCategoryIds = ["classic", "private", "activities"] as const;
type TrekCategory = (typeof trekCategoryIds)[number];

const featuredHomeBlogSlugs = [
  "sumatra-orangutan-trekking-cost-price-guide-2026",
  "medan-airport-to-bukit-lawang-transport-options",
  "is-bukit-lawang-safe-solo-female-travelers"
] as const;

const featuredHomeBlogPosts = featuredHomeBlogSlugs
  .map((slug) => blogPosts.find((post) => post.slug === slug))
  .filter((post): post is BlogPost => Boolean(post));

const brandTitle = (
  <>
    Orangutan <wbr />
    Adventure <wbr />
    Sumatra
  </>
);

type PackageActivityContent = {
  kicker: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  steps: ReadonlyArray<{ label: string; title: string; text: string }>;
  notes: ReadonlyArray<string>;
};

type ImpactContent = {
  kicker: string;
  title: string;
  text: string;
  pillars: ReadonlyArray<{ title: string; text: string }>;
};

const localizedPackageActivity: Partial<Record<Locale, PackageActivityContent>> = {
  fr: {
    ...packageActivityOverview,
    kicker: "Détails du forfait",
    title: "À quoi ressemble un trek classique de 3 jours à Bukit Lawang",
    intro:
      "Ce déroulé suit un trek orang-outan typique de 3 jours: observation calme de la faune, repas en forêt, nuits en camp au bord de la rivière et retour en tube rafting quand les conditions sont sûres. L'itinéraire final dépend toujours de la météo, du niveau du groupe, de la rivière et des règles du parc.",
    steps: [
      {
        label: "Jour 1",
        title: "Départ de Bukit Lawang, habitat des orangs-outans, premier camp",
        text:
          "Retrouve ton guide le matin, vérifie l'eau et les chaussures, puis entre dans la forêt à un rythme tranquille. La journée se concentre sur l'observation respectueuse des animaux, les plantes, les pauses fruits, le déjeuner en jungle et l'arrivée dans un camp simple au bord de l'eau."
      },
      {
        label: "Jour 2",
        title: "Forêt plus profonde, pauses rivière, deuxième nuit",
        text:
          "Le groupe avance vers des zones plus calmes avec plus de temps pour les singes de Thomas, gibbons, macaques, oiseaux, plantes médicinales et sons de la forêt. Attends-toi à des montées, de la boue en saison humide, un déjeuner frais et un second camp près de l'eau si les conditions le permettent."
      },
      {
        label: "Jour 3",
        title: "Dernière marche et retour en tube rafting",
        text:
          "Après le petit-déjeuner, le groupe fait une marche plus courte ou profite de la rivière avant de revenir vers Bukit Lawang en tube rafting traditionnel quand il est inclus et que le niveau de l'eau est sûr."
      }
    ],
    notes: [
      "Les observations d'orangs-outans sauvages ne sont jamais garanties et ne doivent jamais être forcées.",
      "Les repas sont simples et frais: fruits, riz, légumes, oeufs, poisson ou poulet, thé et café.",
      "Confirme les permis, le rafting, l'hébergement, le transport et les inclusions finales avant de payer un acompte."
    ]
  }
};

const localizedImpactVision: Partial<Record<Locale, ImpactContent>> = {
  fr: {
    kicker: "Vision conservation",
    title: "Le voyage doit créer une vraie valeur pour la forêt et le village",
    text:
      "L'objectif de certains forfaits OrangutanAdventureSumatra est de réserver une partie des revenus du voyage au soutien de la conservation et aux bénéfices locaux autour de Bukit Lawang. L'approche est pratique: garder des guides qualifiés au travail, réduire la pression sur la forêt et aider les voyageurs à comprendre les règles d'un trek responsable.",
    pillars: [
      {
        title: "Protection de la forêt",
        text:
          "Soutien à des actions locales orientées conservation, guidage à faible impact et explications avant d'entrer dans l'habitat des orangs-outans."
      },
      {
        title: "Revenus locaux",
        text:
          "Les forfaits privilégient autant que possible les guides, cuisiniers, chauffeurs, hébergements et services du village."
      },
      {
        title: "Choix transparents",
        text:
          "Les voyageurs peuvent demander quels forfaits incluent actuellement une allocation pour la conservation ou la communauté avant de confirmer."
      }
    ]
  }
};

type HomeProps = {
  initialGoogleReviews?: GoogleReviewsResponse | null;
  initialLanguage?: Locale;
  routedLanguage?: boolean;
};

type GuidePhotoProps = {
  alt: string;
  fallbackSrc?: string;
  src: string;
};

type GoogleReview = {
  author: string;
  id: string;
  rating: number;
  profilePhotoUrl: string | null;
  relativeTime: string;
  source: "google";
  text: string;
};

type GoogleReviewsResponse = {
  averageRating: number | null;
  configured: boolean;
  reviews: GoogleReview[];
  sourceUrl: string;
  totalReviewCount: number;
};

type TestimonialCard = {
  author: string;
  meta: string;
  rating: number;
  profilePhotoUrl?: string | null;
  source?: "guest" | "google";
  text: string;
};

function hasGoogleReviewSignal(data: GoogleReviewsResponse | null | undefined) {
  return Boolean(
    data &&
      (data.reviews.length > 0 ||
        (typeof data.averageRating === "number" && data.totalReviewCount > 0))
  );
}

function initialsForName(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "G";
}

function ReviewAvatar({
  name,
  profilePhotoUrl
}: {
  name: string;
  profilePhotoUrl?: string | null;
}) {
  const [broken, setBroken] = useState(false);
  const initials = initialsForName(name);

  return (
    <span className="testimonial-avatar" aria-hidden={profilePhotoUrl ? undefined : "true"}>
      {profilePhotoUrl && !broken ? (
        <img
          className="testimonial-avatar-image"
          src={profilePhotoUrl}
          alt={`Profile photo of ${name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setBroken(true)}
        />
      ) : (
        <span className="testimonial-avatar-fallback">{initials}</span>
      )}
    </span>
  );
}

function GuidePhoto({ alt, fallbackSrc, src }: GuidePhotoProps) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes="(max-width: 900px) 100vw, 430px"
      onError={() => {
        if (fallbackSrc && imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
        }
      }}
    />
  );
}

export function HomeContent({
  initialGoogleReviews = null,
  initialLanguage = "en",
  routedLanguage = false
}: HomeProps = {}) {
  const [language, setLanguage] = useState<Locale>(initialLanguage);
  const [activeCategory, setActiveCategory] = useState<TrekCategory>("classic");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [googleReviews, setGoogleReviews] = useState<GoogleReviewsResponse | null>(() =>
    hasGoogleReviewSignal(initialGoogleReviews) ? initialGoogleReviews : null
  );

  useEffect(() => {
    let ignore = false;

    async function loadGoogleReviews() {
      try {
        const response = await fetch("/api/reviews");

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as GoogleReviewsResponse;

        if (!ignore && hasGoogleReviewSignal(data)) {
          setGoogleReviews(data);
        }
      } catch {
        // Keep local testimonials if Google Places is not configured or unavailable.
      }
    }

    loadGoogleReviews();

    return () => {
      ignore = true;
    };
  }, []);

  const t = siteText[language];
  const packageActivity = localizedPackageActivity[language] ?? packageActivityOverview;
  const impactContent = localizedImpactVision[language] ?? impactVision;
  const whatsappUrl = useMemo(
    () => whatsappUrlFor(t.whatsappMessage),
    [t.whatsappMessage]
  );
  const testimonialCards = useMemo<TestimonialCard[]>(() => {
    const localCards = t.testimonialsData.map((testimonial) => ({
      author: testimonial.author,
      meta: testimonial.location,
      rating: 5,
      source: "guest" as const,
      text: testimonial.text
    }));

    if (!googleReviews?.reviews.length) {
      return localCards;
    }

    const googleCards = googleReviews.reviews.map((review) => ({
      author: review.author,
      meta: review.relativeTime || "Google review",
      rating: review.rating,
      profilePhotoUrl: review.profilePhotoUrl,
      source: "google" as const,
      text: review.text
    }));

    return [...localCards.slice(0, 2), ...googleCards.slice(0, 2)].slice(0, 4);
  }, [googleReviews, t.testimonialsData]);

  const visibleTreks = useMemo(
    () =>
      trekBase
        .filter((trek) => trek.category === activeCategory)
        .map((trek) => ({
          ...trek,
          ...(t.treks[trek.id as TrekId] ?? t.treks["4h"])
        })),
    [activeCategory, t]
  );

  const guides = useMemo(
    () =>
      guideBase.map((guide) => ({
        ...guide,
        ...(t.guides[guide.id as GuideId] ?? t.guides.syaipul)
      })),
    [t]
  );

  const currentUrl = routedLanguage ? absoluteUrl(`/${language}`) : siteUrl;

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const jsonLd = useMemo(() => {
    const trekItems = trekBase.map((trek, index) => {
      const translated = t.treks[trek.id as TrekId];

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristTrip",
          name: translated.title,
          description: translated.highlights.join(". "),
          image: absoluteUrl(trek.image),
          touristType: "Eco traveler",
          provider: { "@id": `${siteUrl}/#business` },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${currentUrl}#treks`
          }
        }
      };
    });
    const aggregateRating =
      typeof googleReviews?.averageRating === "number" && googleReviews.totalReviewCount > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: Number(googleReviews.averageRating.toFixed(1)),
            reviewCount: googleReviews.totalReviewCount,
            bestRating: 5,
            worstRating: 1
          }
        : null;

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "TravelAgency"],
          "@id": `${siteUrl}/#business`,
          name: siteName,
          alternateName: [...brandAlternateNames],
          url: siteUrl,
          logo: absoluteUrl("/images/logo.png"),
          image: absoluteUrl("/images/link-preview.jpg"),
          description: t.metaDescription,
          telephone: "+6285362405752",
          email: contactEmail,
          priceRange: "EUR 30 - EUR 385",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bukit Lawang",
            addressRegion: "North Sumatra",
            addressCountry: "ID"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 3.5553,
            longitude: 98.1329
          },
          hasMap: googleMapsUrl,
          ...(aggregateRating ? { aggregateRating } : {}),
          areaServed: [
            "Bukit Lawang",
            "Bukitlawang",
            "Gunung Leuser National Park",
            "Sumatra",
            "North Sumatra"
          ],
          knowsAbout: [...coreSearchPhrases],
          sameAs: brandSameAsUrls,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+6285362405752",
            email: contactEmail,
            availableLanguage: ["en", "de", "fr", "nl", "id"]
          }
        },
        {
          "@type": "Person",
          "@id": `${siteUrl}/#guide`,
          name: "Syaipul Ardiansyah",
          jobTitle: "Local jungle guide",
          worksFor: { "@id": `${siteUrl}/#business` },
          sameAs: [instagramUrl]
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: siteName,
          alternateName: [...brandAlternateNames],
          url: siteUrl,
          inLanguage: language,
          keywords: coreSearchPhrases.join(", "),
          publisher: { "@id": `${siteUrl}/#business` }
        },
        {
          "@type": "WebPage",
          "@id": `${currentUrl}#webpage`,
          url: currentUrl,
          name: t.metaTitle,
          description: t.metaDescription,
          keywords: coreSearchPhrases.join(", "),
          inLanguage: language,
          isPartOf: { "@id": `${siteUrl}/#website` },
          about: { "@id": `${siteUrl}/#business` }
        },
        {
          "@type": "FAQPage",
          "@id": `${currentUrl}#faq`,
          mainEntity: t.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a
            }
          }))
        },
        {
          "@type": "ItemList",
          "@id": `${currentUrl}#trek-packages`,
          name: t.headings.packages,
          itemListElement: trekItems
        }
      ]
    };
  }, [currentUrl, language, t, googleReviews, googleMapsUrl]);

  useEffect(() => {
    if (routedLanguage) {
      setLanguage(initialLanguage);
      window.localStorage.setItem("oas-locale", initialLanguage);
      return;
    }

    const stored = window.localStorage.getItem("oas-locale");
    const browserLocale = navigator.language.slice(0, 2).toLowerCase() as Locale;
    const nextLocale = locales.includes(stored as Locale)
      ? (stored as Locale)
      : locales.includes(browserLocale)
        ? browserLocale
        : "en";
    setLanguage(nextLocale);
  }, [initialLanguage, routedLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description instanceof HTMLMetaElement) {
      description.content = t.metaDescription;
    }
    window.localStorage.setItem("oas-locale", language);
  }, [language, t]);

  const handleLanguageChange = (nextLanguage: Locale) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("oas-locale", nextLanguage);

    const hash = window.location.hash;
    const nextPath = nextLanguage === "en" ? `/${hash}` : `/${nextLanguage}${hash}`;
    window.location.assign(nextPath);
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${siteName} home`}>
          <Image src="/images/logo.svg" alt={siteName} width={180} height={70} priority unoptimized />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.key} href={item.href}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <label className="language-picker" aria-label="Language selector">
            <span className="sr-only">Language</span>
            <select
              value={language}
              onChange={(event) => handleLanguageChange(event.target.value as Locale)}
              aria-label="Language"
            >
              {locales.map((locale) => (
                <option key={locale} value={locale}>
                  {localeNames[locale]}
                </option>
              ))}
            </select>
          </label>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={t.hero.secondary}>
            <MessageCircle size={18} />
            {t.hero.secondary}
          </a>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={t.mobileMenu}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <nav
        id="mobile-navigation"
        className={`mobile-drawer${mobileMenuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        {navItems.map((item) => (
          <a key={item.key} href={item.href} onClick={() => setMobileMenuOpen(false)}>
            {t.nav[item.key]}
          </a>
        ))}
        <a
          className="mobile-drawer-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMobileMenuOpen(false)}
        >
          <MessageCircle size={16} />
          {t.hero.secondary}
        </a>
      </nav>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/images/hero-orangutan.webp"
          alt="Orangutan on a Bukit Lawang rainforest trail"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow">
            <Leaf size={16} />
            {t.hero.eyebrow}
          </span>
          <h1>{t.hero.title === siteName ? brandTitle : t.hero.title}</h1>
          <p>{t.hero.description}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#treks">
              {t.hero.primary}
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <div className="hero-panel">
          {t.hero.stats.map((stat, index) => {
            const Icon = [Star, Clock3, ShieldCheck][index];
            return (
              <div key={stat.title}>
                <Icon size={18} />
                <strong>{stat.title}</strong>
                <span>{stat.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="quick-strip" aria-label="Booking highlights">
        <div>
          <CalendarDays size={22} />
          <span>{t.quick[0]}</span>
        </div>
        <div>
          <MapPin size={22} />
          <span>{t.quick[1]}</span>
        </div>
        <div>
          <Waves size={22} />
          <span>{t.quick[2]}</span>
        </div>
        <div>
          <HeartHandshake size={22} />
          <span>{t.quick[3]}</span>
        </div>
      </section>

      {language === "en" ? (
        <section className="intent-links-section" aria-labelledby="trip-pathways-heading">
          <div className="section-heading wide-heading">
            <span className="section-kicker">Plan by trip type</span>
            <h2 id="trip-pathways-heading">Choose the page that matches your Sumatra orangutan trip.</h2>
          </div>
          <div className="intent-link-grid">
            <Link className="intent-link-card" href="/sumatra-orangutan-tour">
              <span>Sumatra orangutan tours</span>
              <strong>Plan an orangutan trip in Sumatra and compare Bukit Lawang jungle packages.</strong>
              <ArrowRight size={18} />
            </Link>
            <Link className="intent-link-card" href="/bukit-lawang-orangutan-trekking">
              <span>Bukit Lawang orangutan trekking</span>
              <strong>Start with the core trekking page for first-time visitors.</strong>
              <ArrowRight size={18} />
            </Link>
            <Link className="intent-link-card" href="/3-day-bukit-lawang-orangutan-trek">
              <span>3-day Bukit Lawang orangutan trek</span>
              <strong>See the camp flow, river return, and booking notes.</strong>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      ) : null}

      <section className="section intro-section">
        <div className="section-heading">
          <span className="section-kicker">{t.intro.kicker}</span>
          <h2>{t.intro.title}</h2>
        </div>
        <div className="intro-grid">
          <div className="intro-copy">
            {t.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="promise-list">
            {t.intro.promises.map((item) => (
              <div key={item}>
                <Check size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section treks-section" id="treks">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{t.headings.packages}</span>
          <h2>{t.headings.packagesSub}</h2>
        </div>

        <div className="category-tabs" role="group" aria-label="Trek categories">
          {trekCategoryIds.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {t.categories[category]}
            </button>
          ))}
        </div>

        <div className="trek-grid">
          {visibleTreks.map((trek) => {
            const detailUrl = trekDetailHref(trek.id);

            return (
            <article className="trek-card" key={trek.id}>
              <div className="trek-media">
                <Image
                  src={trek.image}
                  alt=""
                  fill
                  sizes="(max-width: 680px) calc(100vw - 30px), (max-width: 900px) calc(50vw - 30px), 33vw"
                />
              </div>
              <div className="trek-body">
                <div className="trek-meta">
                  <span>
                    <Clock3 size={15} />
                    {trek.duration}
                  </span>
                  <span>
                    <Mountain size={15} />
                    {trek.intensity}
                  </span>
                </div>
                <h3>{trek.title}</h3>
                <p className="price">{trek.price}</p>
                <ul>
                  {trek.highlights.map((highlight) => (
                    <li key={highlight}>
                      <ChevronRight size={15} />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link className="card-link" href={detailUrl}>
                  {language === "en" ? "View details" : language === "de" ? "Details ansehen" : language === "fr" ? "Voir les détails" : "Bekijk details"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="section package-detail-section">
        <div className="package-detail-grid">
          <div className="package-detail-image">
            <Image
              src={packageActivity.image}
              alt={packageActivity.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div className="package-detail-copy">
            <span className="section-kicker">{packageActivity.kicker}</span>
            <h2>{packageActivity.title}</h2>
            <p>{packageActivity.intro}</p>
            <div className="package-timeline">
              {packageActivity.steps.map((step) => (
                <article key={step.label}>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            {language === "en" ? (
              <div className="resource-links package-detail-links">
                <Link className="secondary-button dark" href="/3-day-bukit-lawang-orangutan-trek">
                  See the 3-day trek page
                  <ArrowRight size={18} />
                </Link>
                <Link className="secondary-button dark" href="/blog/3-day-bukit-lawang-jungle-trek-itinerary">
                  Read the 3-day itinerary guide
                  <ArrowRight size={18} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        <div className="package-notes">
          {packageActivity.notes.map((note) => (
            <div key={note}>
              <Check size={18} />
              <span>{note}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-heading">
          <span className="section-kicker">{t.headings.experience}</span>
          <h2>{t.headings.experienceSub}</h2>
        </div>
        <div className="experience-grid">
          {t.experience.map((item, index) => {
            const Icon = [Compass, Leaf, TentTree, Waves][index];
            return (
              <article className="experience-card" key={item.title}>
                <span className="icon-box">
                  <Icon size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ethics-band">
        <div className="ethics-content">
          <span className="section-kicker">{t.headings.ethics}</span>
          <h2>{t.headings.ethicsSubTitle}</h2>
          <p>{t.ethics.text}</p>
        </div>
        <div className="ethics-image">
          <Image
            src="/images/orangutan-tree.webp"
            alt="Wild orangutan in the rainforest"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-content">
          <span className="section-kicker">{impactContent.kicker}</span>
          <h2>{impactContent.title}</h2>
          <p>{impactContent.text}</p>
        </div>
        <div className="impact-pillars">
          {impactContent.pillars.map((pillar, index) => {
            const Icon = [Leaf, HeartHandshake, ShieldCheck][index];
            return (
              <article key={pillar.title}>
                <span className="icon-box">
                  <Icon size={24} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{t.headings.gallery}</span>
          <h2>{t.headings.gallerySub}</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <figure
              key={item.src}
              className={index === 0 || index === 4 ? "feature" : ""}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 50vw, 25vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className="guides-section" id="guides">
        <div className="section-heading">
          <span className="section-kicker">{t.headings.guides}</span>
          <h2>{t.headings.guidesSub}</h2>
        </div>
        <div className="guides-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.id}>
              <div className="guide-image">
                <GuidePhoto
                  src={guide.image}
                  fallbackSrc={guide.fallbackImage}
                  alt={`${guide.name}, ${t.guideRole}`}
                />
              </div>
              <div>
                <span>{t.guideRole}</span>
                <h3>{guide.name}</h3>
                <p>{guide.text}</p>
                <a className="guide-social" href={instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram size={16} />
                  Guide Instagram
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{t.headings.testimonials}</span>
          <h2>{t.headings.testimonialsSub}</h2>
          {googleReviews?.averageRating && (
            <p className="google-rating-summary">
              <Star size={18} fill="currentColor" />
              <span>
                {googleReviews.averageRating.toFixed(1)} Google rating from {googleReviews.totalReviewCount} reviews
              </span>
              <a href={googleReviews.sourceUrl} target="_blank" rel="noreferrer">
                Read all on Google
              </a>
            </p>
          )}
        </div>
        <div className="testimonials-proof-strip">
          {googleReviews?.averageRating ? (
            <div>
              <Star size={18} fill="currentColor" />
              <span>
                {googleReviews.averageRating.toFixed(1)} average on Google from {googleReviews.totalReviewCount} reviews
              </span>
            </div>
          ) : null}
          <div>
            <HeartHandshake size={18} />
            <span>{t.testimonialsData.length} guest stories from recent travelers</span>
          </div>
          <div>
            <MessageCircle size={18} />
            <span>Direct replies from Bukit Lawang by WhatsApp and email</span>
          </div>
        </div>
        <div className="testimonials-grid">
          {testimonialCards.map((testimonial) => (
            <article className="testimonial-card" key={`${testimonial.author}-${testimonial.text.slice(0, 24)}`}>
              <div className="testimonial-stars">
                {Array.from({ length: Math.max(1, Math.min(5, testimonial.rating)) }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <ReviewAvatar name={testimonial.author} profilePhotoUrl={testimonial.profilePhotoUrl} />
                <div className="testimonial-author-copy">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.meta}</span>
                  {testimonial.source === "google" ? <small>Verified Google review</small> : <small>Guest story</small>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <span className="section-kicker">{t.headings.faq}</span>
          <h2>{t.headings.faqSub}</h2>
        </div>
        <div className="faq-list">
          {t.faq.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <Sparkles size={18} />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section blog-preview-section">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{t.blog.kicker}</span>
          <h2>{t.blog.heading}</h2>
        </div>
        <div className="home-blog-grid">
          {featuredHomeBlogPosts.map((post) => (
            <article className="home-blog-card" key={post.slug}>
              <div className="home-blog-image">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </div>
              <div>
                <span>{post.readingTime}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a className="card-link" href={`/blog/${post.slug}`}>
                  {t.blog.readArticle}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="resource-links">
          <a className="secondary-button dark" href="/essential-information">
            {t.blog.essentialInfo}
            <ArrowRight size={18} />
          </a>
          <a className="secondary-button dark" href="/blog">
            {t.blog.allArticles}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-panel">
          <div>
            <span className="section-kicker">{t.headings.contact}</span>
            <h2>{t.headings.contactSub}</h2>
            <p>{t.contact.text}</p>
          </div>
          <div className="contact-actions">
            <Link className="primary-button" href="/booking">
              <CalendarDays size={18} />
              {t.contact.bookingLabel}
            </Link>
            <a className="secondary-button dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {t.contact.whatsappLabel}
            </a>
            <a className="secondary-button dark" href={brandInstagramUrl} target="_blank" rel="noreferrer">
              <Instagram size={18} />
              Instagram {brandInstagramHandle}
            </a>
            <a className="secondary-button dark" href={`mailto:${contactEmail}`}>
              <Mail size={18} />
              {t.contact.emailLabel}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <Image src="/images/logo.svg" alt={siteName} width={155} height={60} unoptimized />
        <p>{t.footer.location}</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/essential-information">{t.footerLinks.essentialInfo}</a>
          <a href="/booking">{t.footerLinks.booking}</a>
          <a href="/blog">{t.footerLinks.blog}</a>
          <a href="/privacy">{t.footerLinks.privacy}</a>
        </nav>
        <nav className="footer-contact-links" aria-label="Contact and social links">
          <a className="footer-icon-link" href={`mailto:${contactEmail}`} aria-label={t.footerLinks.email} title={t.footerLinks.email}>
            <Mail size={18} />
          </a>
          <a className="footer-icon-link" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={t.footerLinks.whatsapp} title={t.footerLinks.whatsapp}>
            <MessageCircle size={18} />
          </a>
          <a
            className="footer-icon-link"
            href={brandInstagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.footerLinks.instagram} ${brandInstagramHandle}`}
            title={brandInstagramHandle}
          >
            <Instagram size={18} />
          </a>
          <a className="footer-icon-link" href={googleMapsUrl} target="_blank" rel="noreferrer" aria-label={t.footerLinks.maps} title={t.footerLinks.maps}>
            <MapPin size={18} />
          </a>
        </nav>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </main>
  );
}
