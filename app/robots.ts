import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Googlebot",
          "Bingbot"
        ],
        allow: "/"
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: new URL(siteUrl).host
  };
}
