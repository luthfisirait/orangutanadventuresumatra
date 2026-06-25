import { siteText, trekBase, type TrekId } from "../site-content";

export type BookingPackage = {
  id: TrekId;
  title: string;
  duration: string;
  intensity: string;
  price: string;
  summary: string;
};

export const bookingPackages: BookingPackage[] = trekBase.map((trek) => ({
  id: trek.id,
  title: siteText.en.treks[trek.id].title,
  duration: trek.duration,
  intensity: trek.intensity,
  price: trek.price,
  summary: siteText.en.treks[trek.id].highlights.join(" • ")
}));

export const bookingFlow = [
  {
    step: "1",
    title: "Choose your trek",
    text: "Pick the package that matches your time, fitness, and preferred pace in the forest."
  },
  {
    step: "2",
    title: "Share your dates",
    text: "Add your preferred start date, group size, and any transport or accommodation help."
  },
  {
    step: "3",
    title: "Send the request",
    text: "Submit the form on this page and the request goes directly to our email inbox."
  },
  {
    step: "4",
    title: "Pay deposit and prepare",
    text: "Pay only the 30% deposit by PayPal, then receive final confirmation and trip notes."
  }
] as const;

export const bookingChecklist = [
  "Preferred trek or activity",
  "Travel date and group size",
  "Arrival city or transport help",
  "Food, fitness, or room notes"
] as const;

export const bookingAssurances = [
  "We contact you after checking guide and date availability.",
  "PayPal charges only a 30% deposit based on package price and group size.",
  "The PayPal payment reference is sent with your booking request.",
  "The final balance is paid in cash when you meet the team, or 2 days before departure after email confirmation."
] as const;
