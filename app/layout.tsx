import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { CookieConsent } from "./components/cookie-consent";
import "./globals.css";
import { defaultLocale, metadataForLocale } from "./seo";
import { locales } from "./site-content";

export const metadata: Metadata = metadataForLocale(defaultLocale, "/");
const googleAnalyticsId = "G-4FZR3D7T1H";
// Derived from the locale list so new locales (zh, id) are not left reporting lang="en".
const routedLocalePattern = locales.filter((locale) => locale !== defaultLocale).join("|");

// Self-hosted (latin subset, variable woff2 from Google Fonts) so `next build`
// never has to reach fonts.googleapis.com; that fetch intermittently fails on Vercel.
const displayFont = localFont({
  src: "./fonts/archivo-narrow-latin.woff2",
  variable: "--font-display",
  weight: "400 700",
  style: "normal",
  display: "swap"
});

const bodyFont = localFont({
  src: "./fonts/source-sans-3-latin.woff2",
  variable: "--font-body",
  weight: "200 900",
  style: "normal",
  display: "swap"
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        <script
          id="set-document-language"
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const locale = window.location.pathname.split('/')[1];
                document.documentElement.lang = /^(${routedLocalePattern})$/.test(locale) ? locale : '${defaultLocale}';
              })();
            `
          }}
        />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Script
          id="google-consent-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              // Google Consent Mode v2: deny everything until the visitor accepts (GDPR).
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted',
                wait_for_update: 500
              });
              gtag('set', 'url_passthrough', true);
              gtag('set', 'ads_data_redaction', true);
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
