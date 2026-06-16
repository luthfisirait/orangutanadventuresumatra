import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import { CookieConsent } from "./components/cookie-consent";
import "./globals.css";
import { defaultLocale, isLocale, metadataForLocale } from "./seo";

export const metadata: Metadata = metadataForLocale(defaultLocale, "/");
const googleAnalyticsId = "G-4FZR3D7T1H";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-oas-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
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
