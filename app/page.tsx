"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

const navItems = [
  { key: "treks", href: "#treks" },
  { key: "experience", href: "#experience" },
  { key: "guides", href: "#guides" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" }
] as const;

const trekCategoryIds = ["classic", "private", "eco"] as const;
type TrekCategory = (typeof trekCategoryIds)[number];

const brandTitle = (
  <>
    Orangutan<wbr />
    Adventure<wbr />
    Sumatra
  </>
);

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }
};

type HomeProps = {
  initialLanguage?: Locale;
  routedLanguage?: boolean;
};

export default function Home({
  initialLanguage = "en",
  routedLanguage = false
}: HomeProps = {}) {
  const [language, setLanguage] = useState<Locale>(initialLanguage);
  const [activeCategory, setActiveCategory] = useState<TrekCategory>("classic");

  const t = siteText[language];
  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/6281362525273?text=${encodeURIComponent(
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
        ...(t.guides[guide.id as GuideId] ?? t.guides.dedek)
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
            priceCurrency: "IDR",
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
          image: absoluteUrl("/images/link-preview.png"),
          description: t.metaDescription,
          telephone: "+6281362525273",
          email: "contact@orangutanadventuresumatra.com",
          priceRange: "IDR 850,000 - IDR 6,600,000",
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
          sameAs: ["https://www.instagram.com/orangutanadventuresumatra/"]
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
          alt="Sumatran orangutan in the rainforest canopy"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
        </motion.div>
        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
        >
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
        </motion.div>
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
        <motion.div className="section-heading" {...fadeUp}>
          <span className="section-kicker">{t.intro.kicker}</span>
          <h2>{t.intro.title}</h2>
        </motion.div>
        <motion.div className="intro-grid" {...fadeUp}>
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
        </motion.div>
      </section>

      <section className="section treks-section" id="treks">
        <motion.div className="section-heading wide-heading" {...fadeUp}>
          <span className="section-kicker">{t.headings.packages}</span>
          <h2>{t.headings.packagesSub}</h2>
        </motion.div>

        <div className="category-tabs" role="tablist" aria-label="Trek categories">
          {trekCategoryIds.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {t.categories[category]}
            </button>
          ))}
        </div>

        <motion.div className="trek-grid" layout>
          {visibleTreks.map((trek) => (
            <motion.article
              layout
              className="trek-card"
              key={trek.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35 }}
            >
              <div className="trek-media">
                <Image src={trek.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
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
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="experience" id="experience">
        <motion.div className="section-heading" {...fadeUp}>
          <span className="section-kicker">{t.headings.experience}</span>
          <h2>{t.headings.experienceSub}</h2>
        </motion.div>
        <div className="experience-grid">
          {t.experience.map((item, index) => {
            const Icon = [Compass, Leaf, TentTree, Waves][index];
            return (
              <motion.article
                className="experience-card"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
              >
                <span className="icon-box">
                  <Icon size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="ethics-band">
        <motion.div className="ethics-content" {...fadeUp}>
          <span className="section-kicker">{t.headings.ethics}</span>
          <h2>{t.headings.ethicsSubTitle}</h2>
          <p>{t.ethics.text}</p>
        </motion.div>
        <div className="ethics-image">
          <Image src="/images/orangutan-tree.webp" alt="Wild orangutan in the rainforest" fill sizes="50vw" />
        </div>
      </section>

      <section className="section gallery-section">
        <motion.div className="section-heading wide-heading" {...fadeUp}>
          <span className="section-kicker">{t.headings.gallery}</span>
          <h2>{t.headings.gallerySub}</h2>
        </motion.div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.src}
              className={index === 0 || index === 4 ? "feature" : ""}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 50vw, 25vw" />
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="guides-section" id="guides">
        <motion.div className="section-heading" {...fadeUp}>
          <span className="section-kicker">{t.headings.guides}</span>
          <h2>{t.headings.guidesSub}</h2>
        </motion.div>
        <div className="guides-grid">
          {guides.map((guide) => (
            <motion.article className="guide-card" key={guide.id} {...fadeUp}>
              <div className="guide-image">
                <Image src={guide.image} alt={`${guide.name}, ${t.guideRole}`} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div>
                <span>{t.guideRole}</span>
                <h3>{guide.name}</h3>
                <p>{guide.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <motion.div className="section-heading" {...fadeUp}>
          <span className="section-kicker">{t.headings.faq}</span>
          <h2>{t.headings.faqSub}</h2>
        </motion.div>
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

      <section className="contact-section" id="contact">
        <motion.div className="contact-panel" {...fadeUp}>
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
            <a className="secondary-button dark" href="mailto:contact@orangutanadventuresumatra.com">
              <Mail size={18} />
              {t.contact.emailLabel}
            </a>
          </div>
        </motion.div>
      </section>

      <footer>
        <Image src="/images/logo.svg" alt="OrangutanAdventureSumatra" width={155} height={60} unoptimized />
        <p>{t.footer.location}</p>
        <div>
          <a href="mailto:contact@orangutanadventuresumatra.com">Email</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="https://www.instagram.com/orangutanadventuresumatra/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
