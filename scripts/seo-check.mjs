// Self-check for the September 2026 GSC SEO implementation.
// Run: npm run build && npm run start, then: node scripts/seo-check.mjs
import { readFile } from "node:fs/promises";

const BASE = process.env.SEO_CHECK_BASE ?? "http://localhost:3000";

const get = async (path) => {
  const res = await fetch(BASE + path);
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  return res.text();
};
const jsonLd = (html) =>
  [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) =>
    JSON.parse(m[1])
  );
const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// Cannibalization fix: the homepage must pass exact-match anchor equity to the tour page.
const home = await get("/");
assert(
  home.includes('href="/sumatra-orangutan-tour"><span>Sumatra orangutan tours</span>'),
  "homepage missing exact-match anchor"
);
assert(home.includes("Ethical Bukit Lawang Trekking"), "homepage title not rewritten");
assert(home.includes('<html lang="en"'), "root homepage is not explicitly English");
assert(!home.includes("Aventure éducative avec les orangs-outans"), "root homepage leaked French content");
assert(home.includes('id="set-document-language"'), "document language bootstrap is not rendered");
const homeGraph = jsonLd(home)[0]?.["@graph"] ?? [];
const business = homeGraph.find((node) => {
  const type = node["@type"];
  return type === "TravelAgency" || (Array.isArray(type) && type.includes("TravelAgency"));
});
if (business?.review?.length) {
  assert(
    business.review.every((review) => typeof review.datePublished === "string"),
    "rendered Review schema is missing datePublished"
  );
}
const homeSource = await readFile(new URL("../app/home-content.tsx", import.meta.url), "utf8");
assert(!homeSource.includes("navigator.language"), "root homepage still auto-selects browser language");
assert(homeSource.includes("datePublished: review.publishedAt"), "review schema is missing datePublished");
const layoutSource = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
assert(!layoutSource.includes('from "next/headers"'), "root layout still forces dynamic rendering");
assert(layoutSource.includes('id="set-document-language"'), "document language bootstrap is missing");

// TouristTrip + FAQ schema with numeric EUR prices on the canonical tour page.
const tour = await get("/sumatra-orangutan-tour");
assert(
  tour.includes("Sumatra Orangutan Tours: Trek Options &amp; 2026 Prices"),
  "tour page title not aligned with the GSC query"
);
assert(
  tour.includes("Compare Sumatra Orangutan Tours and Trekking Packages"),
  "tour page H1 not aligned with the GSC query"
);
assert(
  (tour.match(/href="\/sumatra-orangutan-tour"[^>]*>Tours &amp; prices/g) ?? []).length >= 2,
  "header and footer do not link to the tour landing page"
);
const graph = jsonLd(tour)[0]["@graph"];
const trips = graph.find((n) => n["@type"] === "ItemList").itemListElement;
assert(trips.length >= 6, `expected >=6 TouristTrip nodes, got ${trips.length}`);
for (const { item } of trips) {
  assert(item["@type"] === "TouristTrip", "ItemList entry is not a TouristTrip");
  assert(/^\d+$/.test(item.offers.price), `non-numeric Offer.price: ${item.offers.price}`);
  assert(item.offers.priceCurrency === "EUR", "Offer currency must be EUR");
}
assert(graph.some((n) => n["@type"] === "FAQPage"), "tour page missing FAQPage");
assert(graph.some((n) => n["@type"] === "BreadcrumbList"), "tour page missing BreadcrumbList");

// Localized snippets must reach the rendered HTML, not just the source files.
const frenchHome = await get("/fr");
assert(frenchHome.includes("Aventure éducative avec les orangs-outans"), "FR title or H1 not rendered");
assert(frenchHome.includes('<main lang="fr"'), "FR main content is missing its language attribute");
const germanHome = await get("/de");
assert(germanHome.includes("Feste Preise"), "DE meta description not rendered");
assert(germanHome.includes("Orang-Utan Trekking in Bukit Lawang, Sumatra"), "DE H1 not localized");
assert((await get("/nl")).includes("Orang-oetan trekking in Bukit Lawang, Sumatra"), "NL H1 not localized");

// FAQ schema on the planning page must match the visible FAQ.
const essential = jsonLd(await get("/essential-information"))[0]["@graph"];
const faq = essential.find((n) => n["@type"] === "FAQPage");
assert(faq && faq.mainEntity.length >= 6, "essential-information FAQPage missing or short");

// Localized transport posts carry the cost table and link out to a commercial page.
for (const [path, needle] of [
  ["/de/blog/medan-flughafen-nach-bukit-lawang-transport", "Privatwagen"],
  ["/fr/blog/aeroport-medan-bukit-lawang-transport", "voiture priv"],
  ["/nl/blog/medan-airport-naar-bukit-lawang-vervoer", "privéauto"],
]) {
  const html = await get(path);
  assert(html.includes(needle), `${path} missing transport cost table`);
  assert(html.includes('href="/sumatra-orangutan-tour"'), `${path} has no commercial link`);
}

// Localized cost posts carry the full price table and the hidden-fee breakdown.
for (const [path, priceNeedle, feeNeedle] of [
  ["/de/blog/sumatra-orang-utan-trekking-kosten-2026", "320 EUR pro Person", "Versteckte Kosten"],
  ["/fr/blog/prix-trek-orang-outan-sumatra-2026", "320 EUR par personne", "Frais cach"],
  ["/nl/blog/orang-oetan-trekking-sumatra-kosten-2026", "320 EUR per persoon", "Verborgen kosten"],
]) {
  const html = await get(path);
  assert(html.includes(priceNeedle), `${path} missing 2026 price table`);
  assert(html.includes(feeNeedle), `${path} missing hidden-fee section`);
  assert(html.includes("Leuser"), `${path} missing permit line`);
}

// The merged duplicate must 301, not 404, so its equity survives.
const merged = await fetch(`${BASE}/blog/how-to-get-to-bukit-lawang-from-medan`, {
  redirect: "manual",
});
assert(merged.status === 308 || merged.status === 301, `merged post returned ${merged.status}`);

const legacyFrenchPost = await fetch(`${BASE}/blog/fr-prix-trek-orang-outan-sumatra-2026`, {
  redirect: "manual",
});
assert(legacyFrenchPost.status === 301, `legacy French post returned ${legacyFrenchPost.status}`);
assert(
  legacyFrenchPost.headers.get("location")?.endsWith("/fr/blog/prix-trek-orang-outan-sumatra-2026"),
  "legacy French post redirects to the wrong URL"
);

const sitemap = await get("/sitemap.xml");
assert(sitemap.includes("2026-10-05") || sitemap.includes("2026-09-29"), "sitemap lastmod not bumped");
assert(
  !sitemap.includes("how-to-get-to-bukit-lawang-from-medan"),
  "merged post still listed in sitemap"
);

// Pillar 2 & 4: New Gunung Leuser National Park guide, DE/FR seasonality translations, and callouts
const tnglGuide = await get("/blog/gunung-leuser-national-park-permit-fees-rules-guide");
assert(tnglGuide.includes("150,000 IDR"), "TNGL guide missing official permit fee table");
assert(tnglGuide.includes("Quick Answer:"), "TNGL guide missing GEO Quick Answer callout");
assert(tnglGuide.includes("HPI"), "TNGL guide missing HPI guide regulations");
const tnglGraph = jsonLd(tnglGuide)[0]["@graph"];
assert(tnglGraph.some((n) => n["@type"] === "FAQPage"), "TNGL guide missing FAQPage schema");

const deSeason = await get("/de/blog/beste-reisezeit-bukit-lawang-orang-utans");
assert(deSeason.includes("Beste Reisezeit"), "German seasonality guide missing title/H1");
assert(deSeason.includes("Schnellantwort:"), "German seasonality guide missing GEO Quick Answer callout");
const deSeasonGraph = jsonLd(deSeason)[0]["@graph"];
assert(deSeasonGraph.some((n) => n["@type"] === "FAQPage"), "German seasonality guide missing FAQPage schema");

const frSeason = await get("/fr/blog/meilleure-periode-visiter-bukit-lawang-orangs-outans");
assert(frSeason.includes("Meilleure Période"), "French seasonality guide missing title/H1");
assert(frSeason.includes("Réponse rapide :"), "French seasonality guide missing GEO Quick Answer callout");
const frSeasonGraph = jsonLd(frSeason)[0]["@graph"];
assert(frSeasonGraph.some((n) => n["@type"] === "FAQPage"), "French seasonality guide missing FAQPage schema");

console.log("seo-check: all assertions passed");
