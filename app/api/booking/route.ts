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
  fullName?: unknown;
  groupSize?: unknown;
  notes?: unknown;
  packageId?: unknown;
  startDate?: unknown;
  transport?: unknown;
  website?: unknown;
  whatsapp?: unknown;
};

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

function buildRequestText(fields: {
  accommodation: string;
  country: string;
  email: string;
  fullName: string;
  groupSize: string;
  notes: string;
  packageLabel: string;
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

  const packageId = cleanString(payload.packageId, 80);
  const selectedPackage = bookingPackages.find((bookingPackage) => bookingPackage.id === packageId);
  const fullName = cleanString(payload.fullName, 120);
  const email = cleanEmail(payload.email);
  const whatsapp = cleanWhatsAppNumber(payload.whatsapp);
  const startDate = cleanString(payload.startDate, 40);
  const groupSize = cleanString(payload.groupSize, 20);

  if (!fullName || !selectedPackage || !startDate || !groupSize || !whatsapp) {
    return NextResponse.json(
      { error: "Please complete the required fields and include a WhatsApp number with country code." },
      { status: 400 }
    );
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
    accommodation: cleanString(payload.accommodation, 160),
    country: cleanString(payload.country, 120),
    email,
    fullName,
    groupSize,
    notes: cleanMultiline(payload.notes),
    packageLabel,
    startDate,
    transport: cleanString(payload.transport, 160),
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
