import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { bookingWhatsappUrl } from "./travel-content";

const footerLinks = [
  { href: "/essential-information", label: "Essential information" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "mailto:support@orangutanadventuresumatra.com", label: "Email" },
  { href: bookingWhatsappUrl, label: "WhatsApp", external: true }
];

export function StaticHeader() {
  return (
    <header className="site-header static-header">
      <Link className="brand" href="/" aria-label="OrangutanAdventureSumatra home">
        <Image src="/images/logo.svg" alt="OrangutanAdventureSumatra" width={180} height={70} priority unoptimized />
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
      </div>
    </header>
  );
}

export function StaticFooter() {
  return (
    <footer>
      <Image src="/images/logo.svg" alt="OrangutanAdventureSumatra" width={155} height={60} unoptimized />
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
