import type { Metadata } from "next";
import "./globals.css";
import { defaultLocale, metadataForLocale } from "./seo";

export const metadata: Metadata = metadataForLocale(defaultLocale, "/");

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
