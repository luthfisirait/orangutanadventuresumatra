import { siteName } from "./seo";
import { siteText, trekBase, trekMetaLocalized, type Locale, type TrekId } from "./site-content";
import { trekI18n, trekLabels } from "./content/trek-details-i18n";

export type TrekDetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TrekProfileItem = {
  label: string;
  value: string;
};

export type TrekDetail = {
  id: TrekId;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  profile: TrekProfileItem[];
  highlights: string[];
  sections: TrekDetailSection[];
  relatedLinks: Array<{ href: string; label: string }>;
};

export const trekSlugs: Record<TrekId, string> = {
  "4h": "4-hour-jungle-trek",
  "1d": "1-day-jungle-trek",
  "2d": "2-day-jungle-trek",
  "3d": "3-day-jungle-trek",
  "4d": "4-day-jungle-trek",
  "5d": "5-day-jungle-trek",
  p3d: "private-3-day-jungle-package",
  p4d: "private-4-day-jungle-package",
  p5d: "private-5-day-jungle-package",
  batcave: "bat-cave-tour",
  village: "village-tour"
};

const trekBaseById = Object.fromEntries(trekBase.map((trek) => [trek.id, trek])) as Record<
  TrekId,
  (typeof trekBase)[number]
>;

export function trekDetailHref(id: TrekId, locale: Locale = "en") {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return `${prefix}/treks/${trekSlugs[id]}`;
}

export function trekBookingHref(id: TrekId, locale: Locale = "en") {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return `${prefix}/booking?package=${encodeURIComponent(id)}#booking-form`;
}

export function buildTrekDetail(id: TrekId, locale: Locale = "en"): TrekDetail {
  const trek = trekBaseById[id];
  const slug = trekSlugs[id];
  const input = trekI18n[locale][id];
  const labels = trekLabels[locale];
  const meta = trekMetaLocalized[locale][id];
  const localizedInfo = siteText[locale].treks[id];
  const title = localizedInfo.title;
  const prefix = locale === "en" ? "" : `/${locale}`;

  const profile: TrekProfileItem[] = [
    { label: labels.profile.duration, value: meta.duration },
    { label: labels.profile.grade, value: input.grade },
    { label: labels.profile.departure, value: input.departure },
    { label: labels.profile.arrival, value: input.arrival },
    { label: labels.profile.price, value: trek.price },
    { label: labels.profile.bestFor, value: input.bestFor }
  ];

  return {
    id,
    slug,
    title,
    metaTitle: `${title} - Bukit Lawang Jungle Trek | ${siteName}`,
    metaDescription: input.heroDescription,
    heroKicker: input.heroKicker,
    heroTitle: title,
    heroDescription: input.heroDescription,
    image: trek.image,
    imageAlt: `${title} - Bukit Lawang`,
    profile,
    highlights: localizedInfo.highlights,
    relatedLinks: [
      { href: `${prefix}/treks`, label: labels.browseAll },
      { href: trekBookingHref(id, locale), label: labels.openBooking }
    ],
    sections: [
      ...input.itinerary,
      {
        title: labels.whatsIncluded,
        bullets: input.included
      },
      ...(input.notIncluded && input.notIncluded.length > 0
        ? [
            {
              title: labels.whatsNotIncluded,
              bullets: input.notIncluded
            }
          ]
        : []),
      {
        title: labels.whatToBring,
        bullets: input.bring
      },
      ...(input.notes ?? [])
    ]
  };
}

export const trekDetailPages: Record<TrekId, TrekDetail> = {
  "4h": buildTrekDetail("4h", "en"),
  "1d": buildTrekDetail("1d", "en"),
  "2d": buildTrekDetail("2d", "en"),
  "3d": buildTrekDetail("3d", "en"),
  "4d": buildTrekDetail("4d", "en"),
  "5d": buildTrekDetail("5d", "en"),
  p3d: buildTrekDetail("p3d", "en"),
  p4d: buildTrekDetail("p4d", "en"),
  p5d: buildTrekDetail("p5d", "en"),
  batcave: buildTrekDetail("batcave", "en"),
  village: buildTrekDetail("village", "en")
};

export const trekDetailList = Object.values(trekDetailPages);

export function getTrekDetailById(id: TrekId, locale: Locale = "en"): TrekDetail {
  return buildTrekDetail(id, locale);
}

export function getTrekDetailBySlug(slug: string, locale: Locale = "en"): TrekDetail | undefined {
  const trekId = (Object.keys(trekSlugs) as TrekId[]).find((id) => trekSlugs[id] === slug);
  if (!trekId) return undefined;
  return buildTrekDetail(trekId, locale);
}

export function getTrekList(locale: Locale = "en"): TrekDetail[] {
  return (Object.keys(trekSlugs) as TrekId[]).map((id) => buildTrekDetail(id, locale));
}
