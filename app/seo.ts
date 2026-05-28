import type { Metadata } from "next";
import { locales, siteText, type Locale } from "./site-content";

export const siteName = "OrangutanAdventureSumatra";
export const siteUrl = "https://orangutanadventuresumatra.com";
export const defaultLocale: Locale = "en";

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
    "orangutan trekking Sumatra",
    "Bukit Lawang jungle trekking",
    "ethical orangutan tour",
    "Gunung Leuser National Park tour",
    "Sumatra jungle tour"
  ],
  de: [
    "Orang-Utan Trekking Sumatra",
    "Bukit Lawang Dschungeltour",
    "ethische Orang-Utan Tour",
    "Gunung Leuser Nationalpark Tour",
    "Sumatra Dschungeltrekking"
  ],
  fr: [
    "trek orang-outan Sumatra",
    "trek jungle Bukit Lawang",
    "tour orang-outan ethique",
    "parc national Gunung Leuser",
    "trek Sumatra"
  ],
  nl: [
    "orang-oetan trekking Sumatra",
    "Bukit Lawang jungletrekking",
    "ethische orang-oetan tour",
    "Gunung Leuser National Park tour",
    "Sumatra jungle tour"
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
  const previewImage = "/images/link-preview.png";

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
        { url: "/images/logo-mark.svg", type: "image/svg+xml" },
        { url: "/images/logo-mark.png", type: "image/png", sizes: "512x512" }
      ],
      apple: [{ url: "/images/logo-mark.png", sizes: "512x512" }]
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
