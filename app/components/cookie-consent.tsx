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

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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

  return (
    <div className="cookie-consent" role="region" aria-label="Cookie consent">
      <div className="cookie-consent-panel">
        <div className="cookie-consent-copy">
          <p>
            <strong>Cookies.</strong> Essential cookies keep the site working. Analytics only run if you allow them.{" "}
            <Link href="/privacy">Privacy</Link>
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button className="secondary-button dark" type="button" onClick={() => handleChoice("declined")}>
            Decline
          </button>
          <button className="primary-button" type="button" onClick={() => handleChoice("accepted")}>
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}
