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
        <Script
          id="google-consent-init"
          strategy="afterInteractive"
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

                function syncConsentMode() {
                  if (typeof window.gtag !== 'function' || !window.cookiehub) {
                    return;
                  }

                  var hasConsented = typeof window.cookiehub.hasConsented === 'function'
                    ? window.cookiehub.hasConsented.bind(window.cookiehub)
                    : function() { return false; };
                  var analyticsGranted = hasConsented('analytics');
                  var marketingGranted = hasConsented('marketing');
                  var preferencesGranted = hasConsented('preferences');

                  window.gtag('consent', 'update', {
                    analytics_storage: analyticsGranted ? 'granted' : 'denied',
                    ad_storage: marketingGranted ? 'granted' : 'denied',
                    ad_user_data: marketingGranted ? 'granted' : 'denied',
                    ad_personalization: marketingGranted ? 'granted' : 'denied',
                    functionality_storage: preferencesGranted ? 'granted' : 'denied',
                    personalization_storage: preferencesGranted ? 'granted' : 'denied'
                  });
                }

                function loadCookieHub() {
                  if (window.cookiehub && typeof window.cookiehub.load === 'function') {
                    compactCookieHubBanner();
                    window.cookiehub.load({
                      onInitialise: syncConsentMode,
                      onStatusChange: syncConsentMode,
                      onAllow: syncConsentMode,
                      onRevoke: syncConsentMode
                    });
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
        {children}
      </body>
    </html>
  );
}
