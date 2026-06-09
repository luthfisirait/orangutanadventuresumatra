import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import { defaultLocale, isLocale, metadataForLocale } from "./seo";

export const metadata: Metadata = metadataForLocale(defaultLocale, "/");
const cookieHubId = "274d5f78";
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
        <Script src={`https://cdn.cookiehub.eu/c2/${cookieHubId}.js`} strategy="afterInteractive" />
        <Script
          id="cookiehub"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function loadCookieHubWhenReady() {
                function compactCookieHubBanner() {
                  if (!window.__cookiehub) {
                    return;
                  }

                  window.__cookiehub.settings = window.__cookiehub.settings || {};
                  window.__cookiehub.settings.ui = window.__cookiehub.settings.ui || {};
                  window.__cookiehub.settings.ui.compact = true;
                  window.__cookiehub.settings.ui.dark = false;

                  if (Array.isArray(window.__cookiehub.regions)) {
                    window.__cookiehub.regions.forEach(function(region) {
                      region.banner = region.banner || {};
                      region.banner.position = 'bottomright';
                      region.banner.blockUI = false;
                    });
                  }
                }

                function loadCookieHub() {
                  if (window.cookiehub && typeof window.cookiehub.load === 'function') {
                    compactCookieHubBanner();
                    window.cookiehub.load({});
                    return;
                  }
                  window.setTimeout(loadCookieHub, 50);
                }

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', loadCookieHub);
                } else {
                  loadCookieHub();
                }
              })();
            `
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
