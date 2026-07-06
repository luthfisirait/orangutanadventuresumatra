/** @type {import('next').NextConfig} */
const publicPageCache = "public, s-maxage=86400, stale-while-revalidate=604800";
const cacheHeader = { key: "Cache-Control", value: publicPageCache };

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
    const publicPageSources = [
      "/booking",
      "/sumatra-orangutan-tour",
      "/bukit-lawang-orangutan-trekking",
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
      ...publicPageSources.map((source) => ({
        source,
        headers: [cacheHeader]
      })),
      {
        source: "/",
        headers: [{ key: "Content-Language", value: "en" }, cacheHeader]
      },
      {
        source: "/de",
        headers: [{ key: "Content-Language", value: "de" }, cacheHeader]
      },
      {
        source: "/fr",
        headers: [{ key: "Content-Language", value: "fr" }, cacheHeader]
      },
      {
        source: "/nl",
        headers: [{ key: "Content-Language", value: "nl" }, cacheHeader]
      }
    ];
  }
};

export default nextConfig;
