import { en } from "./content/site-text/en";
import { de } from "./content/site-text/de";
import { fr } from "./content/site-text/fr";
import { nl } from "./content/site-text/nl";

export const locales = ["en", "de", "fr", "nl"] as const;

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
  nl: "Nederlands"
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

export const galleryItems = [
  { src: wildlifeImage(2), alt: "Orangutan peeking through the Bukit Lawang canopy" },
  { src: wildlifeImage(1), alt: "Leaf monkey in the rainforest canopy" },
  { src: wildlifeImage(3), alt: "Orangutan moving through the upper canopy" },
  { src: wildlifeImage(6), alt: "Leaf monkey resting among the trees" },
  { src: wildlifeImage(9), alt: "Two orangutans hanging in the rainforest canopy" },
  { src: wildlifeImage(7), alt: "Orangutan on a tree trunk" },
  { src: wildlifeImage(8), alt: "Close-up orangutan portrait in Bukit Lawang" },
  { src: wildlifeImage(11), alt: "Young orangutan peeking from behind a trunk" },
  { src: wildlifeImage(12), alt: "Two leaf monkeys on rainforest branches" },
  { src: wildlifeImage(13), alt: "Orangutan with long orange fur in the canopy" },
  { src: wildlifeImage(15), alt: "Baby orangutan in the trees" },
  { src: wildlifeImage(4), alt: "Orangutan hidden in dense rainforest foliage" }
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
  faq: [ { q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string } ];
  contact: { kicker: string; title: string; text: string; bookingLabel: string; whatsappLabel: string; emailLabel: string };
  blog: { kicker: string; heading: string; readArticle: string; essentialInfo: string; allArticles: string };
  footerLinks: { essentialInfo: string; booking: string; blog: string; privacy: string; email: string; whatsapp: string; instagram: string; maps: string };
  mobileMenu: string;
  footer: { location: string };
  whatsappMessage: string;
  testimonialsData: Array<{ text: string; author: string; location: string }>;
};

export const siteText = { en, de, fr, nl } satisfies Record<Locale, LocaleContent>;
