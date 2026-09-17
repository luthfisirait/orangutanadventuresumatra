// Self-check for the September 2026 GSC SEO implementation.
// Run: npm run build && npm run start, then: node scripts/seo-check.mjs
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
assert(home.includes("Sumatra orangutan tours</a>"), "homepage missing exact-match anchor");
assert(home.includes("Ethical Bukit Lawang Trekking"), "homepage title not rewritten");

// TouristTrip + FAQ schema with numeric EUR prices on the canonical tour page.
const tour = await get("/sumatra-orangutan-tour");
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
assert((await get("/fr")).includes("aventure éducative"), "FR meta description not rendered");
assert((await get("/de")).includes("Feste Preise"), "DE meta description not rendered");

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

const sitemap = await get("/sitemap.xml");
assert(sitemap.includes("2026-09-17"), "sitemap lastmod not bumped");
assert(
  !sitemap.includes("how-to-get-to-bukit-lawang-from-medan"),
  "merged post still listed in sitemap"
);

console.log("seo-check: all assertions passed");
