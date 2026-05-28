import fs from "node:fs";
import sharp from "sharp";

const logoBase64 = fs.readFileSync("public/images/logo.svg").toString("base64");

const overlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#05110d" stop-opacity=".92"/>
      <stop offset=".6" stop-color="#05110d" stop-opacity=".62"/>
      <stop offset="1" stop-color="#05110d" stop-opacity=".2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#shade)"/>
  <rect x="74" y="72" width="210" height="86" rx="8" fill="#fffdf8" fill-opacity=".94"/>
  <image href="data:image/svg+xml;base64,${logoBase64}" x="92" y="88" width="174" height="68"/>
  <text x="74" y="280" fill="#fffdf8" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="800">Orangutan</text>
  <text x="74" y="366" fill="#fffdf8" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="800">Adventure</text>
  <text x="74" y="452" fill="#fffdf8" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="800">Sumatra</text>
  <text x="78" y="522" fill="#f8e5b7" font-family="Arial, Helvetica, sans-serif" font-size="31" font-weight="700">Ethical Bukit Lawang Jungle Tours</text>
  <text x="78" y="570" fill="#ffffff" fill-opacity=".86" font-family="Arial, Helvetica, sans-serif" font-size="25">Local guides, responsible wildlife encounters, river camps, and rafting.</text>
</svg>`);

await sharp("public/images/hero-orangutan.webp")
  .resize(1200, 630, { fit: "cover" })
  .composite([{ input: overlay, left: 0, top: 0 }])
  .png()
  .toFile("public/images/link-preview.png");

console.log("created public/images/link-preview.png");
