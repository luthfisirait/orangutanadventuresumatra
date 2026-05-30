import type { Metadata } from "next";
import "./globals.css";
import { defaultLocale, isLocale, metadataForLocale } from "./seo";

export const metadata: Metadata = metadataForLocale(defaultLocale, "/");

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
}>;

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const resolvedParams = params ? await params : undefined;
  const locale =
    resolvedParams?.locale && isLocale(resolvedParams.locale)
      ? resolvedParams.locale
      : defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
