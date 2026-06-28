export type AnalyticsEventName =
  | "booking_cta_click"
  | "booking_submit"
  | "booking_submit_success"
  | "maps_click"
  | "paypal_deposit_start"
  | "paypal_deposit_success"
  | "whatsapp_click";

export type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

type WindowWithGtag = Window & {
  gtag?: (command: "event", eventName: AnalyticsEventName, params?: Record<string, unknown>) => void;
};

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (window as WindowWithGtag).gtag;

  if (!gtag) {
    return;
  }

  const cleanedParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );

  gtag("event", eventName, cleanedParams);
}
