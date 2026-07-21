# GSC SEO Analysis and 90-Day Strategy

Date: 21 July 2026  
Property: `sc-domain:orangutanadventuresumatra.com`  
Data freshness: through 18 July 2026  
Implementation source: the current local Next.js project, confirmed synchronized with production

## 1. Executive summary

The site is technically indexable and is gaining visibility quickly. The immediate problem is not crawlability. It is traffic concentration and weak conversion of new impressions into clicks.

- Impressions more than doubled in the latest 28 days, while clicks fell slightly.
- The homepage produced 96 of 104 clicks in the 90-day period.
- Visible query data contains 46 branded clicks and only 6 non-branded clicks. Google hides some query rows for privacy, but the concentration is still clear.
- Indonesia produced 85 of 104 clicks. International markets are showing impressions, but not enough clicks yet.
- All sampled commercial and blog URLs are indexed, except `/fr`, where Google currently prefers the historical `www` canonical.
- Translated blog pages have a serious international SEO flaw: German, French, and Dutch articles render with `<html lang="en">` and English template/navigation text.
- The homepage and dedicated landing pages overlap heavily in intent. Google currently assigns most valuable commercial queries to the homepage, leaving the new landing pages with almost no traffic.

The 90-day strategy is therefore:

1. Fix international and canonical signals.
2. Define one primary keyword intent for each commercial URL.
3. Improve CTR and depth on pages already ranking between positions 4 and 20.
4. Refresh winning content before publishing many new posts.
5. Build international authority only after the localized templates are genuinely localized.

## 2. Current GSC baseline

### Last 90 days: 20 April to 18 July 2026

| Metric | Result |
|---|---:|
| Clicks | 104 |
| Impressions | 1,853 |
| CTR | 5.61% |
| Average position | 13.41 |
| Homepage clicks | 96 (92.3% of all clicks) |

### Latest 28 days versus previous 28 days

| Metric | Latest 28 days | Previous 28 days | Change |
|---|---:|---:|---:|
| Clicks | 47 | 57 | -17.5% |
| Impressions | 1,259 | 594 | +112.0% |
| CTR | 3.73% | 9.60% | -5.87 percentage points |
| Average position | 11.61 | 17.23 | Improved by 5.62 positions |

Interpretation: Google is testing the site for many more non-brand queries. This is positive discovery growth, but the new impressions are appearing lower in the results or with snippets that are not winning clicks yet.

### Market and device concentration

| Segment | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| Indonesia | 85 | 935 | 9.09% | 7.85 |
| France | 3 | 140 | 2.14% | 15.10 |
| United States | 2 | 162 | 1.23% | 22.92 |
| United Kingdom | 2 | 42 | 4.76% | 13.10 |
| Germany | 1 | 57 | 1.75% | 14.32 |
| Mobile | 88 | 1,129 | 7.79% | 7.36 |
| Desktop | 16 | 713 | 2.24% | 22.81 |

International desktop visibility is the largest underdeveloped segment. Mobile already performs much better, although part of that strength comes from branded and Indonesian searches.

## 3. Query opportunities

### Immediate striking-distance queries

| Query | Latest 28-day impressions | Position | CTR | Recommended owner |
|---|---:|---:|---:|---|
| `sumatra orangutan tours` | 70 | 3.94 | 4.29% | `/sumatra-orangutan-tour` |
| `orangutan adventure` | 124 | 6.27 | 0.81% | Homepage |
| `sumatra orangutan` | 16 | 7.00 | 6.25% | Homepage or Sumatra tour hub |
| `sumatra orangutan tour` | 20 | 8.15 | 0% | `/sumatra-orangutan-tour` |
| `orangutan trip sumatra` | 14 | 6.14 | 0% | `/sumatra-orangutan-tour` |
| `orangutan trekking sumatra` | 26 | 13.50 | 0% | `/sumatra-orangutan-tour` |
| `sumatra orangutan trekking` | 10 | 10.20 | 0% | `/sumatra-orangutan-tour` |
| `sumatra orang utan tour` | 6 | 4.67 | 0% | `/sumatra-orangutan-tour` |

The homepage currently ranks for nearly all of these terms. The Sumatra landing page needs stronger content and internal authority so Google can assign the broader tour cluster to the more relevant URL.

### Content pages already showing traction

| Page | Latest 28-day result | Action |
|---|---|---|
| Solo female safety guide | 4 clicks, 38 impressions, position 6.79 | Preserve rankings; add stronger commercial CTA and firsthand guide details. |
| Bukit Lawang vs Tanjung Puting | 2 clicks, 33 impressions, position 7.45 | Expand comparison table and add Ketambe/Borneo follow-up links. |
| 1-day vs 2-day vs 3-day trek | 1 click, 10 impressions, position 9.50 | Add price and suitability table; link directly to each package. |
| Best time to visit | 0 clicks, 18 impressions, position 8.67 | Rewrite title/snippet around weather by month and seasonal decisions. |
| 3-day itinerary blog | 0 clicks, 113 impressions, position 25.39 | High-growth page; deepen content, build links, and separate it clearly from the commercial 3-day page. |
| Blog index | 0 clicks, 62 impressions, position 41.56 | Low priority; strengthen category introduction only after article work. |

The 3-day itinerary grew from 44 impressions at position 47.36 to 113 impressions at position 25.39. It is the clearest emerging informational page, but it cannot yet compete on authority and depth.

## 4. Technical SEO findings

### P0: translated blog pages send the wrong language signals

Evidence:

- `middleware.ts` only detects `/de`, `/fr`, and `/nl` path prefixes.
- Translated articles use `/blog/de-*`, `/blog/fr-*`, and `/blog/nl-*` URLs.
- Live translated articles render with `<html lang="en">`.
- The article template in `app/blog/[slug]/page.tsx` uses English navigation, labels, CTA text, date formatting, and planning links for every locale.
- Several translated articles are shorter than their English source pages.

Impact: High. The pages are partly translated, but the document language and template tell search engines and users that the page is English. This weakens locale relevance and can contribute to low-quality or duplicate classification.

Recommended solution:

1. Move localized articles to `/de/blog/...`, `/fr/blog/...`, and `/nl/blog/...` while traffic is still small.
2. Add permanent redirects from the current `/blog/de-*`, `/blog/fr-*`, and `/blog/nl-*` URLs.
3. Localize the entire article template, including header, footer, CTA, dates, tags, related links, and labels.
4. Update `getBlogLanguageAlternates()`, `app/sitemap.ts`, internal links, and static parameters.
5. Do not publish more translations until this template is fixed.

Short-term fallback: teach `middleware.ts` to detect the current slug prefixes and set the correct language header. This fixes `<html lang>`, but does not solve the mixed-language template or weak URL structure.

### P0: `/fr` has a conflicting Google canonical

GSC URL Inspection reports:

- User canonical: `https://orangutanadventuresumatra.com/fr`
- Google canonical: `https://www.orangutanadventuresumatra.com/fr`
- State: `Duplicate, Google chose different canonical than user`

The live code already redirects `www` to non-`www`, and current sitemap/hreflang links use non-`www`. This is likely a historical signal that has not fully consolidated.

Actions:

1. Keep the permanent `www` to non-`www` redirect.
2. Resubmit the current sitemap after the next production change.
3. Inspect `/fr` again after Google recrawls it.
4. Check external links and Google Business Profile links for old `www` URLs.
5. Do not add a second canonical workaround; strengthen the existing canonical consistently.

### P0: commercial page intent overlaps

Current overlap:

- Homepage: title and H1 target `Bukit Lawang Orangutan Trekking`.
- `/bukit-lawang-orangutan-trekking`: nearly the same title, H1, and commercial intent.
- Homepage currently owns almost all valuable commercial query impressions and clicks.
- The dedicated Bukit Lawang page had only 8 impressions and no clicks in the latest 28 days.
- The commercial 3-day landing page and the 3-day itinerary blog use very similar titles and content themes.

Recommended keyword map:

| URL | Primary role | Primary query cluster |
|---|---|---|
| `/` | Brand/entity and main Bukit Lawang commercial hub | brand, Bukit Lawang orangutan trekking, local guide |
| `/sumatra-orangutan-tour` | Broader commercial hub | Sumatra orangutan tours, orangutan trip/travel/trekking Sumatra |
| `/3-day-bukit-lawang-orangutan-trek` | Transactional package page | book 3-day trek, price, availability, private trek |
| `/blog/3-day-bukit-lawang-jungle-trek-itinerary` | Informational itinerary | day-by-day itinerary, camps, fitness, packing |
| `/bukit-lawang-orangutan-trekking` | Consolidate or materially retarget | Do not leave as a thinner duplicate of the homepage |

Preferred action: if `/bukit-lawang-orangutan-trekking` has no paid-campaign dependency or important backlinks, redirect it to the homepage and consolidate its best content there. If it must remain, give it a clearly different purpose such as a package-and-price comparison page.

### P1: sitemap modification dates understate current changes

`app/sitemap.ts` gives most static pages and landing pages the fixed date `2026-06-09`, although important site changes were published later. Blog dates are handled correctly.

Action: maintain a real per-page modified date map or update the release date only when content changes materially. Do not set every request to the current date.

### P1: commercial titles need SERP testing

Live title lengths:

- Homepage: 45 characters.
- Sumatra tour page: 44 characters.
- Bukit Lawang landing page: 67 characters.
- 3-day landing page: 66 characters.

The two long titles can truncate. More importantly, the homepage title does not contain the full brand even though `orangutan adventure` has 124 impressions at position 6.27 and only 0.81% CTR.

Run one 28-day title test at a time. Suggested homepage test:

`Orangutan Adventure Sumatra | Bukit Lawang Trekking`

Do not change the homepage, all landing pages, and content titles at the same time; GSC will not show which change caused the result.

### P1: E-E-A-T is stronger on the homepage than the blog

The homepage schema includes the real guide `Syaipul Ardiansyah`, but blog `BlogPosting` schema uses the organization as author. The articles also lack a visible author biography and a consistent firsthand-review note.

Action:

- Add a reusable guide author block to articles.
- Use the guide `Person` entity as author or reviewer where truthful.
- Add concrete firsthand details: actual journey times, route conditions, camp setup, seasonal river decisions, and ethical field rules.
- Keep `dateModified` honest and show what was updated.

### P2: performance needs a separate field test

PageSpeed Insights quota was unavailable during this audit, and the GSC MCP does not expose Core Web Vitals. Do not assume performance is good or bad from source code alone.

Action: run mobile Lighthouse or PageSpeed for the homepage, Sumatra landing page, booking page, and one blog article. Record LCP, INP, CLS, TTFB, and image payload before making performance changes.

## 5. Content strategy

The content model should be 70% refresh and consolidation, 20% new search content, and 10% shareable/authority content for the next 90 days.

### Pillar 1: choose and book an orangutan trek

Purpose: commercial discovery and direct booking.

- Strengthen `/sumatra-orangutan-tour` with real package cards, price ranges, duration comparison, reviews, guide proof, transport options, and availability CTA.
- Refresh the 1-day vs 2-day vs 3-day article with a decision table.
- Separate the 3-day transactional page from the itinerary article.
- Add one new page only if real customer demand supports it: private vs shared Bukit Lawang trek.

### Pillar 2: Bukit Lawang trip planning

Purpose: capture travelers before they choose a guide.

- Keep the Medan airport transport guide updated.
- Consolidate or differentiate `medan-airport-to-bukit-lawang-transport-options` and `how-to-get-to-bukit-lawang-from-medan` so they do not compete.
- Create a focused `Bukit Lawang to Lake Toba` guide. GSC already shows 13 impressions at position 35.31.
- Refresh the best-time article into a weather-by-month planning resource.
- Link planning articles to the relevant trek page, not only the generic booking form.

### Pillar 3: safety, ethics, and trust

Purpose: remove booking objections and demonstrate real operator experience.

- Treat the solo female safety guide as a winning template.
- Expand the ethical trekking article with guide rules, wildlife distance, feeding policy, and guest expectations.
- Add a practical health section covering malaria questions without making medical claims; link to official travel-health sources.
- Use real review excerpts for conversion, not as the main SEO strategy.

### Pillar 4: destination and trek comparisons

Purpose: capture consideration-stage searches.

- Expand Bukit Lawang vs Tanjung Puting with a clearer comparison table.
- Create `Ketambe vs Bukit Lawang` after the existing comparison page is upgraded.
- Consider `Sumatra vs Borneo orangutan trekking` as the broader hub, with Tanjung Puting and Ketambe as spokes.

### Pillar 5: localized commercial demand

Purpose: grow qualified European traffic.

- Fix the localized template before adding more translations.
- Translate only pages that have already proven demand in English: safety, comparison, cost, transport, and duration choice.
- Add a German multi-day trek page for the emerging query `mehrtägige tour bukit lawang` after the German template is fixed.
- Improve French content quality and canonical consistency before targeting the French query cluster.
- Preserve natural accents and native phrasing; do not publish ASCII-only French or German copy when the language requires diacritics.

## 6. Prioritized content backlog

Scores use the content-strategy weighting: customer impact 40%, content-market fit 30%, search potential 20%, and resource efficiency 10%.

| Initiative | Customer impact | Market fit | Search potential | Resource efficiency | Weighted score |
|---|---:|---:|---:|---:|---:|
| Upgrade `/sumatra-orangutan-tour` | 9 | 10 | 9 | 8 | 9.2 |
| Refresh homepage title/snippet and brand positioning | 9 | 10 | 9 | 9 | 9.3 |
| Separate commercial and informational 3-day pages | 9 | 10 | 8 | 8 | 8.9 |
| Refresh best-time article for weather-by-month intent | 8 | 9 | 8 | 9 | 8.4 |
| Expand safety guide conversion path | 9 | 9 | 7 | 9 | 8.6 |
| Expand Bukit Lawang vs Tanjung Puting comparison | 8 | 9 | 8 | 8 | 8.3 |
| Create Bukit Lawang to Lake Toba guide | 8 | 9 | 7 | 8 | 8.1 |
| Consolidate duplicate Medan transport content | 8 | 9 | 7 | 9 | 8.2 |
| Localize winning pages after template fix | 8 | 9 | 8 | 6 | 8.1 |
| Create Ketambe vs Bukit Lawang | 7 | 8 | 6 | 8 | 7.2 |

## 7. 30/60/90-day execution roadmap

### Days 1-14: fix signals and page ownership

- Fix localized article language routing and the mixed-language template.
- Confirm the migration approach for localized article URLs.
- Keep and verify permanent `www` redirects; monitor `/fr` canonical.
- Assign one primary query cluster to every commercial page.
- Decide whether to redirect or materially retarget `/bukit-lawang-orangutan-trekking`.
- Differentiate the 3-day landing page from the itinerary blog.
- Update honest sitemap modification dates and resubmit the sitemap.
- Confirm GA4 receives `whatsapp_click`, `booking_submit_success`, and `paypal_deposit_success`; mark the appropriate events as key events in GA4.

### Days 15-45: turn existing impressions into clicks

- Run the homepage title test for 28 days.
- Upgrade `/sumatra-orangutan-tour` into the strongest commercial page on the site.
- Refresh best-time, duration comparison, safety, and Tanjung Puting comparison pages.
- Add descriptive internal links from the homepage and top blog posts to the assigned money page.
- Add visible guide author/reviewer blocks and stronger firsthand evidence.
- Run a mobile Core Web Vitals audit and fix only measured bottlenecks.

### Days 46-90: expand proven clusters and authority

- Publish the Bukit Lawang to Lake Toba guide.
- Publish Ketambe vs Bukit Lawang only after the comparison hub improves.
- Translate the two best-performing refreshed pages into German, French, and Dutch using the fixed localized template.
- Build links to the strongest assets: safety, cost, comparison, ethical trekking, and North Sumatra itinerary.
- Ask guesthouses, transport partners, conservation contacts, and travel writers for relevant editorial links.
- Review GSC every 14 days and update only pages with enough impressions to judge.

## 8. Internal linking model

Use this flow consistently:

`Informational article -> relevant commercial hub -> package/booking -> WhatsApp or form`

Examples:

- Safety guide -> `/sumatra-orangutan-tour` -> `/booking`
- Best time guide -> `/sumatra-orangutan-tour` -> trek comparison
- 3-day itinerary -> `/3-day-bukit-lawang-orangutan-trek` -> package-specific booking
- Tanjung Puting comparison -> `/sumatra-orangutan-tour` -> booking
- Medan transport -> the trek page that includes transport assistance -> booking

Avoid sending every article directly to `/booking`. Match the CTA to the reader's decision stage first.

## 9. 90-day KPIs

These are operating targets, not traffic guarantees.

- Keep total impressions growing while restoring 28-day CTR above 5%.
- Increase non-brand clicks so the site is no longer dependent on the brand query.
- Reduce homepage click concentration from 92% to below 75% without reducing homepage clicks.
- Generate consistent clicks for `/sumatra-orangutan-tour` and the 3-day commercial page.
- Move `orangutan trekking sumatra` from position 13.5 into the top 10.
- Raise CTR for `orangutan adventure` from 0.81% while maintaining its top-10 position.
- Resolve the `/fr` canonical conflict.
- Make every translated page report the correct HTML language and fully localized template.
- Validate at least three revenue-proxy events in GA4: WhatsApp click, successful booking request, and successful deposit.
- Earn at least two relevant referring-domain links per month.

## 10. What not to do yet

- Do not publish a large batch of new blog posts while existing high-impression pages have zero clicks.
- Do not create more translated articles before fixing locale routing and template localization.
- Do not change every title at once.
- Do not split one keyword intent across several thin landing pages.
- Do not treat meta keywords, FAQ schema, or crawler allow-lists as substitutes for content quality and authority.
- Do not run broad paid campaigns until conversion events are verified in GA4.

## 11. Recommended implementation order in this project

1. `middleware.ts` and localized blog routing.
2. `app/blog/[slug]/page.tsx` locale-aware template and author entity.
3. `app/travel-content.ts` localized URLs, content consolidation, and new content entries.
4. `app/sitemap.ts` updated hreflang URLs and honest modification dates.
5. `app/seo.ts`, `app/content/site-text/en.ts`, and commercial title test.
6. `app/seo-landing-pages.tsx` intent differentiation and commercial depth.
7. Homepage and blog internal-link modules.
8. GA4 validation and GSC monitoring after deployment.

## Data and evidence used

- Google Search Console MCP: performance, pages, queries, countries, devices, sitemap, and URL Inspection.
- Live production HTML: response status, titles, descriptions, canonicals, hreflang, H1, HTML language, and JSON-LD types.
- Synchronized Next.js source: metadata, middleware, sitemap, schema, analytics events, content inventory, and internal links.
