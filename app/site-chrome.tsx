"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "./analytics";
import { siteName } from "./seo";
import { type Locale } from "./site-content";
import {
  bookingWhatsappUrl,
  brandInstagramHandle,
  brandInstagramUrl,
  contactEmail,
  googleMapsUrl
} from "./travel-content";

const footerLinks = [
  { href: "/booking", key: "booking" },
  { href: "/treks", key: "treks" },
  { href: "/essential-information", key: "essential" },
  { href: "/payment-and-deposit", key: "payment" },
  { href: "/blog", key: "blog" },
  { href: "/privacy", key: "privacy" }
] as const;

const footerContactLinks = [
  { href: bookingWhatsappUrl, label: "WhatsApp", icon: MessageCircle, external: true },
  { href: `mailto:${contactEmail}`, label: "Email", icon: Mail },
  { href: brandInstagramUrl, label: `Instagram ${brandInstagramHandle}`, icon: Instagram, external: true },
  { href: googleMapsUrl, label: "Google Maps", icon: MapPin, external: true }
] as const;

const headerLinks = [
  { href: "/booking", key: "booking" },
  { href: "/#treks", key: "treks" },
  { href: "/essential-information", key: "essential" },
  { href: "/blog", key: "blog" },
  { href: "/privacy", key: "privacy" }
] as const;

const chromeCopy = {
  en: {
    booking: "Booking",
    treks: "Treks",
    essential: "Essential information",
    payment: "Payment and deposit",
    blog: "Blog",
    privacy: "Privacy Policy",
    menu: "Menu",
    closeMenu: "Close navigation menu",
    location: "Bukit Lawang, North Sumatra, Indonesia"
  },
  de: {
    booking: "Buchung",
    treks: "Touren",
    essential: "Reiseinformationen",
    payment: "Zahlung und Anzahlung",
    blog: "Reiseblog",
    privacy: "Datenschutz",
    menu: "Menü",
    closeMenu: "Navigation schließen",
    location: "Bukit Lawang, Nord-Sumatra, Indonesien"
  },
  fr: {
    booking: "Réservation",
    treks: "Treks",
    essential: "Informations pratiques",
    payment: "Paiement et acompte",
    blog: "Guide de voyage",
    privacy: "Confidentialité",
    menu: "Menu",
    closeMenu: "Fermer la navigation",
    location: "Bukit Lawang, Sumatra du Nord, Indonésie"
  },
  nl: {
    booking: "Boeken",
    treks: "Treks",
    essential: "Praktische informatie",
    payment: "Betaling en aanbetaling",
    blog: "Reisgids",
    privacy: "Privacy",
    menu: "Menu",
    closeMenu: "Navigatie sluiten",
    location: "Bukit Lawang, Noord-Sumatra, Indonesië"
  }
} satisfies Record<Locale, Record<string, string>>;

function localizedHref(locale: Locale, href: string) {
  if (locale === "en") {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  if (href === "/#treks") {
    return `/${locale}#treks`;
  }

  if (href === "/blog") {
    return `/${locale}/blog`;
  }

  return href;
}

type SiteChromeProps = {
  locale?: Locale;
};

export function StaticHeader({ locale = "en" }: SiteChromeProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const copy = chromeCopy[locale];

  const trackHeaderWhatsapp = () => {
    trackEvent("whatsapp_click", { locale, source: "site_header" });
  };

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

  return (
    <header className="site-header static-header">
      <Link className="brand" href={localizedHref(locale, "/")} aria-label={`${siteName} home`}>
        <Image src="/images/logo.svg" alt={siteName} width={180} height={70} priority unoptimized />
      </Link>
      <nav className="desktop-nav" aria-label="Site navigation">
        {headerLinks.map((link) => (
          <Link
            key={link.href}
            href={localizedHref(locale, link.href)}
            onClick={
              link.key === "booking"
                ? () => trackEvent("booking_cta_click", { locale, source: "site_header" })
                : undefined
            }
          >
            {copy[link.key]}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="nav-cta"
          href={bookingWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          onClick={trackHeaderWhatsapp}
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={copy.menu}
          aria-controls="static-mobile-navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-label={copy.closeMenu}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <nav
        id="static-mobile-navigation"
        className={`mobile-drawer${mobileMenuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        {headerLinks.map((link) => (
          <Link
            key={link.href}
            href={localizedHref(locale, link.href)}
            onClick={() => {
              if (link.key === "booking") {
                trackEvent("booking_cta_click", { locale, source: "mobile_drawer" });
              }
              setMobileMenuOpen(false);
            }}
          >
            {copy[link.key]}
          </Link>
        ))}
        <a
          className="mobile-drawer-cta"
          href={bookingWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            trackEvent("whatsapp_click", { locale, source: "mobile_drawer" });
            setMobileMenuOpen(false);
          }}
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </nav>
    </header>
  );
}

export function StaticFooter({ locale = "en" }: SiteChromeProps) {
  const copy = chromeCopy[locale];
  const trackFooterContactClick = (href: string) => {
    if (href === bookingWhatsappUrl) {
      trackEvent("whatsapp_click", { locale, source: "site_footer" });
    }

    if (href === googleMapsUrl) {
      trackEvent("maps_click", { locale, source: "site_footer" });
    }
  };

  return (
    <footer>
      <Image src="/images/logo.svg" alt={siteName} width={155} height={60} unoptimized />
      <p>{copy.location}</p>
      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={localizedHref(locale, link.href)}
            onClick={
              link.key === "booking"
                ? () => trackEvent("booking_cta_click", { locale, source: "site_footer" })
                : undefined
            }
          >
            {copy[link.key]}
          </Link>
        ))}
      </nav>
      <nav className="footer-contact-links" aria-label="Contact and social links">
        {footerContactLinks.map((link) => {
          const Icon = link.icon;
          const isExternal = "external" in link && link.external;

          return (
            <a
              key={link.href}
              className="footer-icon-link"
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
              onClick={() => trackFooterContactClick(link.href)}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          );
        })}
      </nav>
    </footer>
  );
}
