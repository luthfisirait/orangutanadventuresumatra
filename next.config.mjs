/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.orangutanadventuresumatra.com"
          }
        ],
        destination: "https://orangutanadventuresumatra.com/:path*",
        permanent: true
      },
      {
        source: "/bukit-lawang-orangutan-trekking",
        destination: "/",
        permanent: true
      },
      {
        // Merged into the fuller transport guide to stop the two posts splitting the same query.
        source: "/blog/how-to-get-to-bukit-lawang-from-medan",
        destination: "/blog/medan-airport-to-bukit-lawang-transport-options",
        permanent: true
      },
      {
        source: "/en",
        destination: "/",
        permanent: true
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true
      }
    ];
  },
  async headers() {
    const englishPublicPageSources = [
      "/booking",
      "/sumatra-orangutan-tour",
      "/3-day-bukit-lawang-orangutan-trek",
      "/blog",
      "/blog/:slug*",
      "/treks",
      "/treks/:slug*",
      "/essential-information",
      "/payment-and-deposit",
      "/privacy",
      "/gdpr"
    ];

    return [
      ...englishPublicPageSources.map((source) => ({
        source,
        headers: [{ key: "Content-Language", value: "en" }]
      })),
      {
        source: "/",
        headers: [{ key: "Content-Language", value: "en" }]
      },
      {
        source: "/de",
        headers: [{ key: "Content-Language", value: "de" }]
      },
      {
        source: "/fr",
        headers: [{ key: "Content-Language", value: "fr" }]
      },
      {
        source: "/nl",
        headers: [{ key: "Content-Language", value: "nl" }]
      }
    ];
  }
};

export default nextConfig;
