import { en } from "./content/site-text/en";
import { de } from "./content/site-text/de";
import { fr } from "./content/site-text/fr";
import { nl } from "./content/site-text/nl";
import { zh } from "./content/site-text/zh";
import { id } from "./content/site-text/id";

export const locales = ["en", "de", "fr", "nl", "zh", "id"] as const;

export type Locale = (typeof locales)[number];
export type TrekId = "4h" | "1d" | "2d" | "3d" | "4d" | "5d" | "p3d" | "p4d" | "p5d" | "batcave" | "village";
export type GuideId = "syaipul";

const stockImage = (group: "wildlife" | "activity", index: number) =>
  `/images/stock/${group}-${String(index).padStart(2, "0")}.webp`;

const wildlifeImage = (index: number) => stockImage("wildlife", index);
const activityImage = (index: number) => stockImage("activity", index);

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  nl: "Nederlands",
  zh: "中文",
  id: "Bahasa Indonesia"
};

export const trekMetaLocalized: Record<Locale, Record<TrekId, { duration: string; intensity: string }>> = {
  en: {
    "4h": { duration: "4 hours", intensity: "Low" },
    "1d": { duration: "7-8 hours", intensity: "Medium" },
    "2d": { duration: "2 days / 1 night", intensity: "Medium" },
    "3d": { duration: "3 days / 2 nights", intensity: "Medium / High" },
    "4d": { duration: "4 days / 3 nights", intensity: "High" },
    "5d": { duration: "5 days / 4 nights", intensity: "High" },
    "p3d": { duration: "3 days / 2 nights", intensity: "Medium" },
    "p4d": { duration: "4 days / 3 nights", intensity: "Medium / High" },
    "p5d": { duration: "5 days / 4 nights", intensity: "Medium / High" },
    "batcave": { duration: "Half day", intensity: "Cave walk" },
    "village": { duration: "Half day", intensity: "Becak or bicycle" }
  },
  de: {
    "4h": { duration: "4 Stunden", intensity: "Leicht" },
    "1d": { duration: "7–8 Stunden", intensity: "Mittel" },
    "2d": { duration: "2 Tage / 1 Nacht", intensity: "Mittel" },
    "3d": { duration: "3 Tage / 2 Nächte", intensity: "Mittel / Anspruchsvoll" },
    "4d": { duration: "4 Tage / 3 Nächte", intensity: "Anspruchsvoll" },
    "5d": { duration: "5 Tage / 4 Nächte", intensity: "Anspruchsvoll" },
    "p3d": { duration: "3 Tage / 2 Nächte", intensity: "Mittel" },
    "p4d": { duration: "4 Tage / 3 Nächte", intensity: "Mittel / Anspruchsvoll" },
    "p5d": { duration: "5 Tage / 4 Nächte", intensity: "Mittel / Anspruchsvoll" },
    "batcave": { duration: "Halber Tag", intensity: "Höhlenwanderung" },
    "village": { duration: "Halber Tag", intensity: "Becak oder Fahrrad" }
  },
  fr: {
    "4h": { duration: "4 heures", intensity: "Facile" },
    "1d": { duration: "7 à 8 heures", intensity: "Modéré" },
    "2d": { duration: "2 jours / 1 nuit", intensity: "Modéré" },
    "3d": { duration: "3 jours / 2 nuits", intensity: "Modéré / Soutenu" },
    "4d": { duration: "4 jours / 3 nuits", intensity: "Soutenu" },
    "5d": { duration: "5 jours / 4 nuits", intensity: "Soutenu" },
    "p3d": { duration: "3 jours / 2 nuits", intensity: "Modéré" },
    "p4d": { duration: "4 jours / 3 nuits", intensity: "Modéré / Soutenu" },
    "p5d": { duration: "5 jours / 4 nuits", intensity: "Modéré / Soutenu" },
    "batcave": { duration: "Demi-journée", intensity: "Marche en grotte" },
    "village": { duration: "Demi-journée", intensity: "En becak ou à vélo" }
  },
  nl: {
    "4h": { duration: "4 uur", intensity: "Licht" },
    "1d": { duration: "7–8 uur", intensity: "Gemiddeld" },
    "2d": { duration: "2 dagen / 1 nacht", intensity: "Gemiddeld" },
    "3d": { duration: "3 dagen / 2 nachten", intensity: "Gemiddeld / Zwaar" },
    "4d": { duration: "4 dagen / 3 nachten", intensity: "Zwaar" },
    "5d": { duration: "5 dagen / 4 nachten", intensity: "Zwaar" },
    "p3d": { duration: "3 dagen / 2 nachten", intensity: "Gemiddeld" },
    "p4d": { duration: "4 dagen / 3 nachten", intensity: "Gemiddeld / Zwaar" },
    "p5d": { duration: "5 dagen / 4 nachten", intensity: "Gemiddeld / Zwaar" },
    "batcave": { duration: "Halve dag", intensity: "Grotwandeling" },
    "village": { duration: "Halve dag", intensity: "Per becak of fiets" }
  },
  zh: {
    "4h": { duration: "4小时", intensity: "轻松" },
    "1d": { duration: "7–8小时", intensity: "中等" },
    "2d": { duration: "2天1夜", intensity: "中等" },
    "3d": { duration: "3天2夜", intensity: "中等/挑战" },
    "4d": { duration: "4天3夜", intensity: "高难度" },
    "5d": { duration: "5天4夜", intensity: "高难度" },
    "p3d": { duration: "3天2夜", intensity: "中等" },
    "p4d": { duration: "4天3夜", intensity: "中等/挑战" },
    "p5d": { duration: "5天4夜", intensity: "中等/挑战" },
    "batcave": { duration: "半天", intensity: "洞穴探索" },
    "village": { duration: "半天", intensity: "三轮车或骑行" }
  },
  id: {
    "4h": { duration: "4 jam", intensity: "Ringan" },
    "1d": { duration: "7–8 jam", intensity: "Sedang" },
    "2d": { duration: "2 hari / 1 malam", intensity: "Sedang" },
    "3d": { duration: "3 hari / 2 malam", intensity: "Sedang / Menantang" },
    "4d": { duration: "4 hari / 3 malam", intensity: "Menantang" },
    "5d": { duration: "5 hari / 4 malam", intensity: "Menantang" },
    "p3d": { duration: "3 hari / 2 malam", intensity: "Sedang" },
    "p4d": { duration: "4 hari / 3 malam", intensity: "Sedang / Menantang" },
    "p5d": { duration: "5 hari / 4 malam", intensity: "Sedang / Menantang" },
    "batcave": { duration: "Setengah hari", intensity: "Jalan susur gua" },
    "village": { duration: "Setengah hari", intensity: "Becak atau sepeda" }
  }
};

export const trekBase: Array<{
  id: TrekId;
  category: "classic" | "private" | "activities";
  duration: string;
  intensity: string;
  price: string;
  image: string;
}> = [
  { id: "4h", category: "classic", duration: "4 hours", intensity: "Low", price: "55 EUR pp", image: activityImage(4) },
  { id: "1d", category: "classic", duration: "7-8 hours", intensity: "Medium", price: "70 EUR pp", image: activityImage(2) },
  { id: "2d", category: "classic", duration: "2 days / 1 night", intensity: "Medium", price: "120 EUR pp", image: activityImage(3) },
  { id: "3d", category: "classic", duration: "3 days / 2 nights", intensity: "Medium / High", price: "170 EUR pp", image: activityImage(7) },
  { id: "4d", category: "classic", duration: "4 days / 3 nights", intensity: "High", price: "250 EUR pp", image: activityImage(11) },
  { id: "5d", category: "classic", duration: "5 days / 4 nights", intensity: "High", price: "320 EUR pp", image: activityImage(13) },
  { id: "p3d", category: "private", duration: "3 days / 2 nights", intensity: "Medium", price: "280 EUR pp", image: activityImage(1) },
  { id: "p4d", category: "private", duration: "4 days / 3 nights", intensity: "Medium / High", price: "335 EUR pp", image: activityImage(9) },
  { id: "p5d", category: "private", duration: "5 days / 4 nights", intensity: "Medium / High", price: "385 EUR pp", image: activityImage(8) },
  { id: "batcave", category: "activities", duration: "Half day", intensity: "Cave walk", price: "30 EUR pp", image: "/images/bat-cave-tour.jpeg" },
  { id: "village", category: "activities", duration: "Half day", intensity: "Becak or bicycle", price: "30 EUR pp", image: "/images/village-tour.jpeg" }
];

export const guideBase: Array<{ id: GuideId; image: string; fallbackImage?: string }> = [
  { id: "syaipul", image: "/images/guide-syaipul.webp", fallbackImage: activityImage(6) }
];

export const galleryItems: Array<{
  src: string;
  alt: string;
  layout: "feature" | "standard" | "wide";
}> = [
  {
    src: wildlifeImage(2),
    alt: "Orangutan peeking through the Bukit Lawang canopy",
    layout: "feature"
  },
  {
    src: wildlifeImage(1),
    alt: "Leaf monkey in the rainforest canopy",
    layout: "standard"
  },
  {
    src: wildlifeImage(3),
    alt: "Orangutan moving through the upper canopy",
    layout: "standard"
  },
  {
    src: "/images/guests/team-and-guests-bukit-lawang.webp",
    alt: "Local Bukit Lawang guides gathered with guests",
    layout: "wide"
  },
  {
    src: "/images/guests/guests-by-bahorok-river.webp",
    alt: "Guests and local guides beside the river in Bukit Lawang",
    layout: "wide"
  },
  {
    src: wildlifeImage(9),
    alt: "Two orangutans hanging in the rainforest canopy",
    layout: "standard"
  },
  {
    src: wildlifeImage(7),
    alt: "Orangutan on a tree trunk",
    layout: "standard"
  },
  {
    src: "/images/guests/guest-moment-bukit-lawang.webp",
    alt: "Guests sharing a joyful moment with the local trekking team",
    layout: "wide"
  },
  {
    src: wildlifeImage(8),
    alt: "Close-up orangutan portrait in Bukit Lawang",
    layout: "standard"
  },
  {
    src: wildlifeImage(11),
    alt: "Young orangutan peeking from behind a trunk",
    layout: "standard"
  }
];

// Shared shape for every localized site-text block. Each locale lives in its
// own file under ./content/site-text and is type-checked against this contract.
export type LocaleContent = {
  metaTitle: string;
  metaDescription: string;
  nav: Record<"treks" | "experience" | "guides" | "faq" | "contact", string>;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    stats: Array<{ title: string; text: string }>;
  };
  quick: [string, string, string, string];
  intro: {
    kicker: string;
    title: string;
    paragraphs: string[];
    promises: [string, string, string, string, string];
  };
  headings: {
    packages: string;
    packagesSub: string;
    experience: string;
    experienceSub: string;
    ethics: string;
    ethicsSubTitle: string;
    gallery: string;
    gallerySub: string;
    guides: string;
    guidesSub: string;
    faq: string;
    faqSub: string;
    contact: string;
    contactSub: string;
    testimonials: string;
    testimonialsSub: string;
  };
  categories: Record<"classic" | "private" | "activities", string>;
  treks: Record<TrekId, { title: string; highlights: [string, string, string] }>;
  experience: [ { title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string } ];
  ethics: { kicker: string; title: string; text: string };
  guideRole: string;
  guides: Record<GuideId, { name: string; text: string }>;
  faq: Array<{ q: string; a: string }>;
  contact: { kicker: string; title: string; text: string; bookingLabel: string; whatsappLabel: string; emailLabel: string };
  blog: { kicker: string; heading: string; readArticle: string; essentialInfo: string; allArticles: string };
  footerLinks: { essentialInfo: string; booking: string; blog: string; privacy: string; email: string; whatsapp: string; instagram: string; maps: string };
  mobileMenu: string;
  footer: { location: string };
  whatsappMessage: string;
  testimonialsData: Array<{ text: string; author: string; location: string }>;
};

export const siteText = { en, de, fr, nl, zh, id } satisfies Record<Locale, LocaleContent>;
