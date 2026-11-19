import type { Metadata } from "next";
import { locales, siteText, type Locale } from "./site-content";

export const siteName = "Orangutan Adventure Sumatra";
export const compactSiteName = "OrangutanAdventureSumatra";
export const siteUrl = "https://orangutanadventuresumatra.com";
export const defaultLocale: Locale = "en";

export const brandAlternateNames = [
  compactSiteName,
  "Orangutan Adventure Sumatra",
  "Orangutan Adventures Sumatra",
  "Orangutan Adventure",
  "Bukit Lawang Orangutan Trekking"
] as const;

// Homepage topics (also used in its JSON-LD knowsAbout/keywords). "Sumatra orangutan tour(s)" is
// deliberately absent: that query belongs to /sumatra-orangutan-tour. In GSC, Google swapped it
// from the homepage (Jul, pos 4.8) to the landing page (Aug, pos 12) and both then slid past 30.
export const coreSearchPhrases = [
  "orang utan",
  "orangutan",
  "orangutan trekking",
  "orang utan trekking",
  "Bukit Lawang",
  "Bukitlawang",
  "Bukit Lawang orangutan trekking",
  "Bukit Lawang jungle trekking",
  "Bukit Lawang jungle tour",
  "orangutan adventure sumatra",
  "orangutanadventuresumatra",
  "Sumatra",
  "Sumatra orangutan trekking",
  "Gunung Leuser National Park"
] as const;

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  nl: "Nederlands",
  zh: "中文",
  id: "Bahasa Indonesia"
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  nl: "nl_NL",
  zh: "zh_CN",
  id: "id_ID"
};

const localeKeywords: Record<Locale, string[]> = {
  en: [
    ...coreSearchPhrases,
    "orangutan trekking Sumatra",
    "Bukit Lawang jungle trekking",
    "Bukit Lawang orangutan trek",
    "ethical orangutan tour",
    "Gunung Leuser National Park guide",
    "Sumatra jungle tour",
    "private Sumatra jungle tours",
    "weekend jungle trek from Singapore",
    "Medan weekend trip from Malaysia",
    "sustainable Sumatra tours",
    "private Sumatra rainforest tours",
    "family friendly Bukit Lawang tour"
  ],
  de: [
    "Orang-Utan Trekking Sumatra",
    "Bukit Lawang Dschungeltour",
    "ethische Orang-Utan Tour",
    "Gunung Leuser Nationalpark Tour",
    "Sumatra Dschungeltrekking",
    "nachhaltige Sumatra Reisen",
    "private Dschungeltour Bukit Lawang"
  ],
  fr: [
    "aventure éducative avec les orangs-outans à Sumatra",
    "trek orang-outan Sumatra",
    "trek orang outan Sumatra",
    "trek orang-outan Bukit Lawang",
    "trek jungle Bukit Lawang",
    "tour orang-outan ethique",
    "voyage orang-outan Sumatra",
    "circuit Sumatra orang-outan",
    "parc national Gunung Leuser",
    "trek Sumatra",
    "voyage durable Sumatra",
    "trek privé jungle Sumatra"
  ],
  nl: [
    "orang-oetan trekking Sumatra",
    "Bukit Lawang jungletrekking",
    "ethische orang-oetan tour",
    "Gunung Leuser National Park tour",
    "Sumatra jungle tour",
    "duurzame reizen Sumatra",
    "privé jungletrek Bukit Lawang"
  ],
  zh: [
    "苏门答腊红毛猩猩徒步",
    "武吉拉旺雨林徒步",
    "古农列尤择国家公园",
    "印尼红毛猩猩生态游",
    "苏门答腊丛林探险",
    "武吉拉旺私人向导",
    "印尼生态旅游"
  ],
  id: [
    "trekking orangutan bukit lawang",
    "tur orangutan sumatera",
    "paket trekking bukit lawang",
    "taman nasional gunung leuser",
    "pemandu lokal bukit lawang",
    "arung jeram ban bukit lawang",
    "wisata alam sumatera utara",
    "ekowisata bukit lawang"
  ]
};

export const languageAlternates = Object.fromEntries([
  ...locales.map((locale) => [locale, locale === defaultLocale ? siteUrl : `${siteUrl}/${locale}`]),
  ["x-default", siteUrl]
]) as Record<string, string>;

export function getLanguageAlternates(subpath: string): Record<string, string> {
  const cleanPath = subpath.startsWith("/") ? subpath : `/${subpath}`;
  return Object.fromEntries([
    ...locales.map((locale) => [
      locale,
      locale === defaultLocale ? `${siteUrl}${cleanPath}` : `${siteUrl}/${locale}${cleanPath}`
    ]),
    ["x-default", `${siteUrl}${cleanPath}`]
  ]);
}

// zh and id product pages (treks, booking, essential information) sat in GSC as "Discovered -
// currently not indexed" with no search traffic. Their homepages and blogs stay indexed; the
// product pages stay reachable for visitors but are noindex and left out of hreflang and the
// sitemap, so crawl attention goes to the en/de/fr/nl versions until zh/id get deeper content.
export const productPageLocales: readonly Locale[] = ["en", "de", "fr", "nl"];

export function hasIndexedProductPages(locale: Locale) {
  return productPageLocales.includes(locale);
}

export function getProductLanguageAlternates(subpath: string): Record<string, string> {
  return Object.fromEntries(
    Object.entries(getLanguageAlternates(subpath)).filter(
      ([language]) => language === "x-default" || productPageLocales.includes(language as Locale)
    )
  );
}

export function productPageRobots(locale: Locale): NonNullable<Metadata["robots"]> {
  return hasIndexedProductPages(locale) ? { index: true, follow: true } : { index: false, follow: true };
}

export function absoluteUrl(path = "") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function metadataForLocale(locale: Locale, path = `/${locale}`): Metadata {
  const text = siteText[locale];
  const title = text.metaTitle;
  const description = text.metaDescription;
  const previewImage = "/images/link-preview.jpg";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: siteName,
    category: "travel",
    keywords: localeKeywords[locale],
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    alternates: {
      canonical: path,
      languages: languageAlternates
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/images/logo-mark.png", type: "image/png", sizes: "512x512" }
      ],
      shortcut: ["/favicon.ico"],
      apple: [{ url: "/images/logo-mark.png", type: "image/png", sizes: "512x512" }]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: path,
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((candidate) => candidate !== locale)
        .map((candidate) => openGraphLocales[candidate]),
      images: [
        {
          url: previewImage,
          type: "image/jpeg",
          width: 1200,
          height: 630,
          alt: `${siteName} ethical orangutan trekking in Bukit Lawang`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewImage]
    }
  };
}
