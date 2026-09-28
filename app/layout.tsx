import type { Metadata } from "next";
import { Archivo_Narrow, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { CookieConsent } from "./components/cookie-consent";
import "./globals.css";
import { defaultLocale, metadataForLocale } from "./seo";

export const metadata: Metadata = metadataForLocale(defaultLocale, "/");
const googleAnalyticsId = "G-4FZR3D7T1H";

const displayFont = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body"
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
                document.documentElement.lang = /^(de|fr|nl)$/.test(locale) ? locale : '${defaultLocale}';
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
