"use client";

import Image from "next/image";
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
  MessageCircle,
  Mountain,
  ShieldCheck,
  Sparkles,
  Star,
  TentTree,
  Waves
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
import { absoluteUrl, siteName, siteUrl } from "./seo";
import { blogPosts, impactVision, packageActivityOverview } from "./travel-content";

const navItems = [
  { key: "treks", href: "#treks" },
  { key: "experience", href: "#experience" },
  { key: "guides", href: "#guides" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" }
] as const;

const syaipulInstagramUrl = "https://www.instagram.com/syaipul_ardiansyah/";

const trekCategoryIds = ["classic", "private", "activities"] as const;
type TrekCategory = (typeof trekCategoryIds)[number];

const brandTitle = (
  <>
    Orangutan<wbr />
    Adventure<wbr />
    Sumatra
  </>
);

type HomeProps = {
  initialLanguage?: Locale;
  routedLanguage?: boolean;
};

type GuidePhotoProps = {
  alt: string;
  fallbackSrc?: string;
  src: string;
};

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
  initialLanguage = "en",
  routedLanguage = false
}: HomeProps = {}) {
  const [language, setLanguage] = useState<Locale>(initialLanguage);
  const [activeCategory, setActiveCategory] = useState<TrekCategory>("classic");

  const t = siteText[language];
  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/6285362405752?text=${encodeURIComponent(
        t.whatsappMessage
      )}`,
    [t.whatsappMessage]
  );

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

  const currentUrl = language === "en" && !routedLanguage ? siteUrl : absoluteUrl(`/${language}`);

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

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "TravelAgency"],
          "@id": `${siteUrl}/#business`,
          name: siteName,
          url: siteUrl,
          logo: absoluteUrl("/images/logo.png"),
          image: absoluteUrl("/images/link-preview.jpg"),
          description: t.metaDescription,
          telephone: "+6285362405752",
          email: "support@orangutanadventuresumatra.com",
          priceRange: "EUR 20 - EUR 385",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bukit Lawang",
            addressRegion: "North Sumatra",
            addressCountry: "ID"
          },
          areaServed: [
            "Bukit Lawang",
            "Gunung Leuser National Park",
            "North Sumatra"
          ],
          sameAs: [syaipulInstagramUrl]
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: siteName,
          url: siteUrl,
          inLanguage: language,
          publisher: { "@id": `${siteUrl}/#business` }
        },
        {
          "@type": "WebPage",
          "@id": `${currentUrl}#webpage`,
          url: currentUrl,
          name: t.metaTitle,
          description: t.metaDescription,
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
  }, [currentUrl, language, t]);

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
    window.location.assign(`/${nextLanguage}${hash}`);
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
        <a className="brand" href="#top" aria-label="OrangutanAdventureSumatra home">
          <Image src="/images/logo.svg" alt="OrangutanAdventureSumatra" width={180} height={70} priority unoptimized />
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
        </div>
      </header>

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
          {visibleTreks.map((trek) => (
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
                <a className="card-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                  {language === "en" ? "Ask availability" : language === "de" ? "Verfügbarkeit anfragen" : language === "fr" ? "Demander les disponibilités" : "Beschikbaarheid vragen"}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section package-detail-section">
        <div className="package-detail-grid">
          <div className="package-detail-image">
            <Image
              src={packageActivityOverview.image}
              alt={packageActivityOverview.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div className="package-detail-copy">
            <span className="section-kicker">{packageActivityOverview.kicker}</span>
            <h2>{packageActivityOverview.title}</h2>
            <p>{packageActivityOverview.intro}</p>
            <div className="package-timeline">
              {packageActivityOverview.steps.map((step) => (
                <article key={step.label}>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="package-notes">
          {packageActivityOverview.notes.map((note) => (
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
          <span className="section-kicker">{impactVision.kicker}</span>
          <h2>{impactVision.title}</h2>
          <p>{impactVision.text}</p>
        </div>
        <div className="impact-pillars">
          {impactVision.pillars.map((pillar, index) => {
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
                <a className="guide-social" href={syaipulInstagramUrl} target="_blank" rel="noreferrer">
                  <Instagram size={16} />
                  Instagram
                </a>
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
          <span className="section-kicker">Travel blog</span>
          <h2>Travel guides for European travelers planning Bukit Lawang</h2>
        </div>
        <div className="home-blog-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article className="home-blog-card" key={post.slug}>
              <div className="home-blog-image">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </div>
              <div>
                <span>{post.readingTime}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a className="card-link" href={`/blog/${post.slug}`}>
                  Read article
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="resource-links">
          <a className="secondary-button dark" href="/essential-information">
            Essential information
            <ArrowRight size={18} />
          </a>
          <a className="secondary-button dark" href="/blog">
            All blog articles
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
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {t.contact.whatsappLabel}
            </a>
            <a className="secondary-button dark" href="mailto:support@orangutanadventuresumatra.com">
              <Mail size={18} />
              {t.contact.emailLabel}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <Image src="/images/logo.svg" alt="OrangutanAdventureSumatra" width={155} height={60} unoptimized />
        <p>{t.footer.location}</p>
        <div>
          <a href="/essential-information">Essential information</a>
          <a href="/blog">Blog</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="mailto:support@orangutanadventuresumatra.com">Email</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={syaipulInstagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
