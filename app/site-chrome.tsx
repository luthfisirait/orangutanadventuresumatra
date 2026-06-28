"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "./analytics";
import { siteName } from "./seo";
import {
  bookingWhatsappUrl,
  brandInstagramHandle,
  brandInstagramUrl,
  contactEmail,
  googleMapsUrl
} from "./travel-content";

const footerLinks = [
  { href: "/booking", label: "Booking" },
  { href: "/treks", label: "Treks" },
  { href: "/essential-information", label: "Essential information" },
  { href: "/payment-and-deposit", label: "Payment and deposit" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" }
];

const footerContactLinks = [
  { href: bookingWhatsappUrl, label: "WhatsApp", icon: MessageCircle, external: true },
  { href: `mailto:${contactEmail}`, label: "Email", icon: Mail },
  { href: brandInstagramUrl, label: `Instagram ${brandInstagramHandle}`, icon: Instagram, external: true },
  { href: googleMapsUrl, label: "Google Maps", icon: MapPin, external: true }
] as const;

const headerLinks = [
  { href: "/booking", label: "Booking" },
  { href: "/#treks", label: "Treks" },
  { href: "/essential-information", label: "Essential information" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" }
] as const;

export function StaticHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trackHeaderWhatsapp = () => {
    trackEvent("whatsapp_click", { source: "site_header" });
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
      <Link className="brand" href="/" aria-label={`${siteName} home`}>
        <Image src="/images/logo.svg" alt={siteName} width={180} height={70} priority unoptimized />
      </Link>
      <nav className="desktop-nav" aria-label="Site navigation">
        {headerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
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
          aria-label="Menu"
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
          aria-label="Close navigation menu"
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
          <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a
          className="mobile-drawer-cta"
          href={bookingWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            trackEvent("whatsapp_click", { source: "mobile_drawer" });
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

export function StaticFooter() {
  const trackFooterContactClick = (href: string) => {
    if (href === bookingWhatsappUrl) {
      trackEvent("whatsapp_click", { source: "site_footer" });
    }

    if (href === googleMapsUrl) {
      trackEvent("maps_click", { source: "site_footer" });
    }
  };

  return (
    <footer>
      <Image src="/images/logo.svg" alt={siteName} width={155} height={60} unoptimized />
      <p>Bukit Lawang, North Sumatra, Indonesia</p>
      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
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
