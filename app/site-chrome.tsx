"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteName } from "./seo";
import { bookingWhatsappUrl } from "./travel-content";

const footerLinks = [
  { href: "/essential-information", label: "Essential information" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "mailto:support@orangutanadventuresumatra.com", label: "Email" },
  { href: bookingWhatsappUrl, label: "WhatsApp", external: true }
];

const headerLinks = [
  { href: "/#treks", label: "Treks" },
  { href: "/essential-information", label: "Essential information" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" }
] as const;

export function StaticHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <Link href="/#treks">Treks</Link>
        <Link href="/essential-information">Info</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
      <div className="header-actions">
        <a className="nav-cta" href={bookingWhatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
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
          onClick={() => setMobileMenuOpen(false)}
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </nav>
      <a
        className="whatsapp-float"
        href={bookingWhatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </header>
  );
}

export function StaticFooter() {
  return (
    <footer>
      <Image src="/images/logo.svg" alt={siteName} width={155} height={60} unoptimized />
      <p>Bukit Lawang, North Sumatra, Indonesia</p>
      <div>
        {footerLinks.map((link) =>
          link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ) : (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          )
        )}
      </div>
    </footer>
  );
}
