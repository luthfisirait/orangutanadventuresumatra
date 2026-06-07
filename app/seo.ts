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
  "Sumatra orangutan tour",
  "Gunung Leuser National Park"
] as const;

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Francais",
  nl: "Nederlands"
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  nl: "nl_NL"
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
    "trek orang-outan Sumatra",
    "trek jungle Bukit Lawang",
    "tour orang-outan ethique",
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
  ]
};

export const languageAlternates = Object.fromEntries([
  ...locales.map((locale) => [locale, `${siteUrl}/${locale}`]),
  ["x-default", siteUrl]
]) as Record<string, string>;

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
