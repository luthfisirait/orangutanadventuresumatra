import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { bookingPackages } from "../../booking/booking-data";
import { siteName } from "../../seo";
import { contactEmail } from "../../travel-content";

export const runtime = "nodejs";

type BookingPayload = {
  accommodation?: unknown;
  country?: unknown;
  email?: unknown;
  formAgeMs?: unknown;
  fullName?: unknown;
  groupSize?: unknown;
  notes?: unknown;
  packageId?: unknown;
  paypalCaptureId?: unknown;
  paypalDepositAmount?: unknown;
  paypalDepositRate?: unknown;
  paypalOrderId?: unknown;
  paypalStatus?: unknown;
  paypalTotalAmount?: unknown;
  startDate?: unknown;
  transport?: unknown;
  website?: unknown;
  whatsapp?: unknown;
};

type BookingRateLimitEntry = {
  count: number;
  windowStartedAt: number;
};

const bookingRateLimits = new Map<string, BookingRateLimitEntry>();
const rateLimitWindowMs = 60 * 60 * 1000;
const rateLimitMaxRequests = 5;
const minimumFormAgeMs = 3000;
const seoSpamPatterns = [
  /\bseo\b/i,
  /\bsearch engine optimi[sz]ation\b/i,
  /\bbacklinks?\b/i,
  /\blink building\b/i,
  /\bguest posts?\b/i,
  /\bguest posting\b/i,
  /\bdomain authority\b/i,
  /\bwebsite audit\b/i,
  /\bgoogle ranking\b/i,
  /\brank(?:ing)? on google\b/i,
  /\bfirst page of google\b/i,
  /\borganic traffic\b/i,
  /\bahrefs\b/i,
  /\bsemrush\b/i,
  /\bsponsored posts?\b/i
];

function cleanString(value: unknown, maxLength = 500) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanMultiline(value: unknown, maxLength = 1200) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim().slice(0, maxLength);
}

function cleanEmail(value: unknown) {
  const email = cleanString(value, 254);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "";
  }

  return email;
}

function cleanWhatsAppNumber(value: unknown) {
  const whatsapp = cleanString(value, 80);
  const normalized = whatsapp.replace(/[^\d+]/g, "");

  if (!whatsapp || !/^\+?\d{7,15}$/.test(normalized)) {
    return "";
  }

  return whatsapp;
}

function formatDate(value: string) {
  if (!value) {
    return "Not selected";
  }

  const parsed = new Date(`${value}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(parsed);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (!value) {
    return fallback;
  }

  return ["1", "true", "yes"].includes(value.toLowerCase());
}

function parsePort(value: string | undefined) {
  const parsed = value ? Number.parseInt(value, 10) : 587;
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 587;
}

function parseNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function getRequestHost(request: Request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = request.headers.get("host");

  return forwardedHost || host || "";
}

function hasAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    return new URL(origin).host === getRequestHost(request);
  } catch {
    return false;
  }
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cloudflareIp = request.headers.get("cf-connecting-ip");

  return (forwardedFor?.split(",")[0] || realIp || cloudflareIp || "unknown").trim();
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const current = bookingRateLimits.get(clientKey);

  for (const [key, entry] of bookingRateLimits) {
    if (now - entry.windowStartedAt > rateLimitWindowMs) {
      bookingRateLimits.delete(key);
    }
  }

  if (!current || now - current.windowStartedAt > rateLimitWindowMs) {
    bookingRateLimits.set(clientKey, { count: 1, windowStartedAt: now });
    return false;
  }

  current.count += 1;
  return current.count > rateLimitMaxRequests;
}

function countLinks(value: string) {
  return (value.match(/\b(?:https?:\/\/|www\.|[a-z0-9-]+\.(?:com|net|org|io|co|id|info|biz|top|online|site)\b)/gi) || [])
    .length;
}

function looksLikeSeoSpam(values: string[]) {
  const text = values.join("\n");
  const matchCount = seoSpamPatterns.reduce((count, pattern) => count + (pattern.test(text) ? 1 : 0), 0);

  return matchCount >= 2 || (/\bseo\b/i.test(text) && countLinks(text) > 0) || countLinks(text) > 2;
}

function buildRequestText(fields: {
  accommodation: string;
  country: string;
  email: string;
  fullName: string;
  groupSize: string;
  notes: string;
  packageLabel: string;
  paypalCaptureId?: string;
  paypalDepositAmount?: string;
  paypalDepositRate?: string;
  paypalOrderId?: string;
  paypalStatus?: string;
  paypalTotalAmount?: string;
  startDate: string;
  transport: string;
  whatsapp: string;
}) {
  return [
    "New booking request from orangutanadventuresumatra.com",
    "",
    `Package: ${fields.packageLabel}`,
    `Preferred start date: ${formatDate(fields.startDate)}`,
    `Group size: ${fields.groupSize}`,
    `Name: ${fields.fullName}`,
    fields.country ? `Country: ${fields.country}` : null,
    fields.email ? `Email: ${fields.email}` : null,
    fields.whatsapp ? `WhatsApp: ${fields.whatsapp}` : null,
    fields.transport ? `Transport help: ${fields.transport}` : null,
    fields.accommodation ? `Accommodation help: ${fields.accommodation}` : null,
    fields.notes ? `Notes: ${fields.notes}` : null,
    "",
    fields.paypalOrderId || fields.paypalCaptureId ? "PayPal deposit:" : null,
    fields.paypalOrderId ? `PayPal order ID: ${fields.paypalOrderId}` : null,
    fields.paypalCaptureId ? `PayPal capture ID: ${fields.paypalCaptureId}` : null,
    fields.paypalStatus ? `PayPal status: ${fields.paypalStatus}` : null,
    fields.paypalDepositAmount ? `Deposit paid: ${fields.paypalDepositAmount}` : null,
    fields.paypalTotalAmount ? `Package total: ${fields.paypalTotalAmount}` : null,
    fields.paypalDepositRate ? `Deposit rate: ${fields.paypalDepositRate}` : null,
    fields.paypalOrderId || fields.paypalCaptureId ? "" : null,
    "Follow up with this guest to confirm availability, deposit details, and next steps."
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: Request) {
  let payload: BookingPayload;

  try {
    payload = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: "Invalid booking request." }, { status: 400 });
  }

  if (cleanString(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  if (!hasAllowedOrigin(request)) {
    return NextResponse.json({ error: "Invalid booking request." }, { status: 403 });
  }

  if (parseNumber(payload.formAgeMs) < minimumFormAgeMs) {
    return NextResponse.json(
      { error: "Please wait a moment before sending the booking request." },
      { status: 400 }
    );
  }

  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json(
      { error: "Too many booking requests. Please wait before trying again, or contact us on WhatsApp." },
      { status: 429 }
    );
  }

  const packageId = cleanString(payload.packageId, 80);
  const selectedPackage = bookingPackages.find((bookingPackage) => bookingPackage.id === packageId);
  const fullName = cleanString(payload.fullName, 120);
  const email = cleanEmail(payload.email);
  const whatsapp = cleanWhatsAppNumber(payload.whatsapp);
  const startDate = cleanString(payload.startDate, 40);
  const groupSize = cleanString(payload.groupSize, 20);
  const accommodation = cleanString(payload.accommodation, 160);
  const country = cleanString(payload.country, 120);
  const notes = cleanMultiline(payload.notes);
  const paypalCaptureId = cleanString(payload.paypalCaptureId, 100);
  const paypalDepositAmount = cleanString(payload.paypalDepositAmount, 60);
  const paypalDepositRate = cleanString(payload.paypalDepositRate, 20);
  const paypalOrderId = cleanString(payload.paypalOrderId, 100);
  const paypalStatus = cleanString(payload.paypalStatus, 60);
  const paypalTotalAmount = cleanString(payload.paypalTotalAmount, 60);
  const transport = cleanString(payload.transport, 160);

  if (!fullName || !selectedPackage || !startDate || !groupSize || !whatsapp) {
    return NextResponse.json(
      { error: "Please complete the required fields and include a WhatsApp number with country code." },
      { status: 400 }
    );
  }

  if (looksLikeSeoSpam([accommodation, country, email, fullName, notes, transport])) {
    return NextResponse.json({ ok: true });
  }

  const host = process.env.SMTP_HOST;
  const port = parsePort(process.env.SMTP_PORT);
  const secure = parseBoolean(process.env.SMTP_SECURE, port === 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!host) {
    return NextResponse.json(
      { error: "Booking email is not configured yet." },
      { status: 503 }
    );
  }

  const packageLabel = `${selectedPackage.title} (${selectedPackage.duration}, ${selectedPackage.price})`;
  const text = buildRequestText({
    accommodation,
    country,
    email,
    fullName,
    groupSize,
    notes,
    packageLabel,
    paypalCaptureId,
    paypalDepositAmount,
    paypalDepositRate,
    paypalOrderId,
    paypalStatus,
    paypalTotalAmount,
    startDate,
    transport,
    whatsapp
  });

  const transporter = nodemailer.createTransport({
    auth: smtpUser && smtpPass ? { pass: smtpPass, user: smtpUser } : undefined,
    host,
    port,
    secure
  });

  try {
    await transporter.sendMail({
      from: process.env.BOOKING_EMAIL_FROM || smtpUser || contactEmail,
      html: `<p>New booking request from ${escapeHtml(siteName)}.</p><pre>${escapeHtml(text)}</pre>`,
      replyTo: email || undefined,
      subject: `Booking request: ${selectedPackage.title} - ${formatDate(startDate)}`,
      text,
      to: process.env.BOOKING_EMAIL_TO || contactEmail
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending booking request:", error);

    return NextResponse.json(
      { error: "We could not send the booking request. Please try WhatsApp or try again later." },
      { status: 502 }
    );
  }
}
