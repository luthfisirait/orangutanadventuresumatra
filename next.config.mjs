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
    return [
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
