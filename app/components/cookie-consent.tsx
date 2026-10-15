"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentChoice = "accepted" | "declined";

type WindowWithGtag = Window & {
  gtag?: (...args: unknown[]) => void;
};

const consentStorageKey = "oas_cookie_consent";
const consentCookieName = "oas_cookie_consent";
const consentVersion = "v1";
const maxAgeSeconds = 60 * 60 * 24 * 180;

function parseStoredChoice(value: string | null): ConsentChoice | null {
  if (value === `${consentVersion}:accepted`) {
    return "accepted";
  }

  if (value === `${consentVersion}:declined`) {
    return "declined";
  }

  return null;
}

function readCookieChoice() {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${consentCookieName}=`));

  if (!cookie) {
    return null;
  }

  return parseStoredChoice(decodeURIComponent(cookie.split("=")[1] ?? ""));
}

function writeConsentChoice(choice: ConsentChoice) {
  const value = `${consentVersion}:${choice}`;

  window.localStorage.setItem(consentStorageKey, value);
  document.cookie = `${consentCookieName}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
}

function expireCookie(name: string, domain?: string) {
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
}

function deleteAnalyticsCookies() {
  const hostname = window.location.hostname;
  const parentDomain = hostname.split(".").slice(-2).join(".");
  const cookieNames = document.cookie
    .split("; ")
    .map((cookie) => cookie.split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name.startsWith("_gat"));

  for (const name of cookieNames) {
    expireCookie(name);
    expireCookie(name, hostname);

    if (parentDomain && parentDomain !== hostname) {
      expireCookie(name, `.${parentDomain}`);
    }
  }
}

function updateGoogleConsent(choice: ConsentChoice) {
  const gtag = (window as WindowWithGtag).gtag;

  if (choice === "declined") {
    deleteAnalyticsCookies();
  }

  if (!gtag) {
    return;
  }

  gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: choice === "accepted" ? "granted" : "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted"
  });
}

import type { Locale } from "../site-content";

const cookieCopy: Record<
  Locale,
  {
    title: string;
    text: string;
    privacy: string;
    decline: string;
    allow: string;
  }
> = {
  en: {
    title: "Cookies.",
    text: "Essential cookies keep the site working. Analytics only run if you allow them.",
    privacy: "Privacy",
    decline: "Decline",
    allow: "Allow"
  },
  de: {
    title: "Cookies.",
    text: "Notwendige Cookies halten die Website funktionsfähig. Analysen laufen nur mit deiner Erlaubnis.",
    privacy: "Datenschutz",
    decline: "Ablehnen",
    allow: "Erlauben"
  },
  fr: {
    title: "Cookies.",
    text: "Les cookies essentiels assurent le bon fonctionnement du site. Les mesures d'audience ne s'activent qu'avec votre accord.",
    privacy: "Confidentialité",
    decline: "Refuser",
    allow: "Accepter"
  },
  nl: {
    title: "Cookies.",
    text: "Essentiële cookies zorgen voor een goede werking van de website. Analytics worden alleen ingeschakeld met jouw toestemming.",
    privacy: "Privacy",
    decline: "Weigeren",
    allow: "Accepteren"
  },
  zh: {
    title: "Cookie 政策。",
    text: "基础 Cookie 用于保障网站正常运行。数据分析 Cookie 仅在您允许时启用。",
    privacy: "隐私政策",
    decline: "拒绝",
    allow: "同意"
  },
  id: {
    title: "Kebijakan Cookie.",
    text: "Cookie penting menjaga situs web berfungsi optimal. Cookie analitik hanya berjalan jika Anda mengizinkannya.",
    privacy: "Privasi",
    decline: "Tolak",
    allow: "Izinkan"
  }
};

function getActiveLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const pathname = window.location.pathname;
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
  if (pathname === "/id" || pathname.startsWith("/id/")) return "id";

  const stored = window.localStorage.getItem("oas-locale");
  if (stored === "de" || stored === "fr" || stored === "nl" || stored === "zh" || stored === "id") return stored;

  const docLang = document.documentElement.lang;
  if (docLang === "de" || docLang === "fr" || docLang === "nl" || docLang === "zh" || docLang === "id") return docLang;

  return "en";
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale(getActiveLocale());

    const storedChoice = parseStoredChoice(window.localStorage.getItem(consentStorageKey)) ?? readCookieChoice();

    if (storedChoice) {
      updateGoogleConsent(storedChoice);
      return;
    }

    setVisible(true);
  }, []);

  function handleChoice(choice: ConsentChoice) {
    writeConsentChoice(choice);
    updateGoogleConsent(choice);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  const copy = cookieCopy[locale] ?? cookieCopy.en;

  return (
    <div className="cookie-consent" role="region" aria-label="Cookie consent">
      <div className="cookie-consent-panel">
        <div className="cookie-consent-copy">
          <p>
            <strong>{copy.title}</strong> {copy.text}{" "}
            <Link href="/privacy">{copy.privacy}</Link>
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button className="secondary-button dark" type="button" onClick={() => handleChoice("declined")}>
            {copy.decline}
          </button>
          <button className="primary-button" type="button" onClick={() => handleChoice("accepted")}>
            {copy.allow}
          </button>
        </div>
      </div>
    </div>
  );
}
