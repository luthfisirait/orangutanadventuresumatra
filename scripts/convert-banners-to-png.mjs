import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

async function convert() {
  const designsDir = path.resolve("public/designs");

  // 1. Convert Spanduk 200x80cm (render at 4000x1600 px for ultra HD printing)
  const spandukSvgPath = path.join(designsDir, "spanduk_200x80cm.svg");
  const spandukPngPath = path.join(designsDir, "spanduk_200x80cm.png");

  if (fs.existsSync(spandukSvgPath)) {
    console.log("Converting spanduk_200x80cm.svg to PNG...");
    const spandukSvg = fs.readFileSync(spandukSvgPath);
    await sharp(spandukSvg, { density: 300 })
      .resize(4000, 1600)
      .png({ quality: 100, compressionLevel: 8 })
      .toFile(spandukPngPath);
    console.log("Created:", spandukPngPath);
  }

  // 2. Convert X-Banner 60x160cm (render at 1800x4800 px for ultra HD printing)
  const xbannerSvgPath = path.join(designsDir, "xbanner_60x160cm.svg");
  const xbannerPngPath = path.join(designsDir, "xbanner_60x160cm.png");

  if (fs.existsSync(xbannerSvgPath)) {
    console.log("Converting xbanner_60x160cm.svg to PNG...");
    const xbannerSvg = fs.readFileSync(xbannerSvgPath);
    await sharp(xbannerSvg, { density: 300 })
      .resize(1800, 4800)
      .png({ quality: 100, compressionLevel: 8 })
      .toFile(xbannerPngPath);
    console.log("Created:", xbannerPngPath);
  }
}

convert().catch((err) => {
  console.error("Error converting banners to PNG:", err);
  process.exit(1);
});
