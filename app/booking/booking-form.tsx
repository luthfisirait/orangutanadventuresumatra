"use client";

import { Check, Mail, MessageCircle, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { bookingPackages } from "./booking-data";
import { whatsappNumber } from "../travel-content";
import type { TrekId } from "../site-content";

type BookingFormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  packageId: string;
  startDate: string;
  groupSize: string;
  transport: string;
  accommodation: string;
  notes: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function isBookingPackageId(value: string | null): value is TrekId {
  return bookingPackages.some((bookingPackage) => bookingPackage.id === value);
}

function looksLikeInternationalPhone(value: string) {
  const normalized = value.replace(/[^\d+]/g, "");
  return /^\+?\d{7,15}$/.test(normalized);
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

function buildMessage(form: BookingFormState, selectedPackage: (typeof bookingPackages)[number] | undefined) {
  const lines = [
    "Hi Orangutan Adventure Sumatra, I would like to book a jungle trip.",
    "",
    `Package: ${
      selectedPackage
        ? `${selectedPackage.title} (${selectedPackage.duration}, ${selectedPackage.price})`
        : "Not selected"
    }`,
    `Preferred start date: ${formatDate(form.startDate)}`,
    `Group size: ${form.groupSize || "Not selected"}`,
    form.fullName ? `Name: ${form.fullName}` : null,
    form.country ? `Country: ${form.country}` : null,
    form.email ? `Email: ${form.email}` : null,
    form.whatsapp ? `WhatsApp: ${form.whatsapp}` : null,
    form.transport ? `Transport help: ${form.transport}` : null,
    form.accommodation ? `Accommodation help: ${form.accommodation}` : null,
    form.notes ? `Notes: ${form.notes}` : null,
    "",
    "Please confirm availability, deposit details, and the next steps."
  ].filter(Boolean);

  return lines.join("\n");
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const packageFromQuery = searchParams.get("package");
  const initialPackageId = isBookingPackageId(packageFromQuery) ? packageFromQuery : "";

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [website, setWebsite] = useState("");
  const [form, setForm] = useState<BookingFormState>({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    packageId: initialPackageId,
    startDate: "",
    groupSize: "",
    transport: "",
    accommodation: "",
    notes: ""
  });

  const selectedPackage = useMemo(
    () => bookingPackages.find((bookingPackage) => bookingPackage.id === form.packageId),
    [form.packageId]
  );

  useEffect(() => {
    setIsReady(true);
  }, []);

  const message = useMemo(() => buildMessage(form, selectedPackage), [form, selectedPackage]);
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const updateField =
    <K extends keyof BookingFormState>(key: K) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setStatus("idle");
      setStatusMessage("");
      setForm((current) => ({
        ...current,
        [key]: event.target.value
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.whatsapp.trim()) {
      setStatus("error");
      setStatusMessage("Please add your WhatsApp number with country code, like +1 555 123 4567.");
      return;
    }

    if (!looksLikeInternationalPhone(form.whatsapp)) {
      setStatus("error");
      setStatusMessage("Please use an international WhatsApp format, like +1 555 123 4567.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/booking", {
        body: JSON.stringify({ ...form, website }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Could not send the booking request.");
      }

      setStatus("success");
      setStatusMessage("Booking request sent. We will contact you soon to confirm availability.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Could not send the booking request. Please try WhatsApp or try again later."
      );
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form-header">
        <span className="section-kicker">Booking request</span>
        <h2>Request availability for your trek</h2>
        <p>
          Send your details here and we receive the request by email. We contact you to confirm
          availability before anything is booked.
        </p>
      </div>

      <label className="booking-honeypot" aria-hidden="true">
        <span>Website</span>
        <input
          type="text"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </label>

      <div className="booking-fields">
        <label className="booking-field">
          <span>Full name *</span>
          <input
            type="text"
            value={form.fullName}
            onChange={updateField("fullName")}
            autoComplete="name"
            required
          />
        </label>

        <label className="booking-field">
          <span>Country</span>
          <input
            type="text"
            value={form.country}
            onChange={updateField("country")}
            autoComplete="country-name"
          />
        </label>

        <label className="booking-field">
          <span>Email address</span>
          <input
            type="email"
            value={form.email}
            onChange={updateField("email")}
            autoComplete="email"
            placeholder="name@example.com"
          />
          <small>Optional, but useful as a backup contact.</small>
        </label>

        <label className="booking-field">
          <span>WhatsApp number *</span>
          <input
            type="tel"
            value={form.whatsapp}
            onChange={updateField("whatsapp")}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+1 555 123 4567"
            title="Use an international number with country code, like +1 555 123 4567."
            required
          />
          <small>Required. Include country code, e.g. +1 for USA.</small>
        </label>

        <label className="booking-field booking-field-full">
          <span>Package *</span>
          <select value={form.packageId} onChange={updateField("packageId")} required>
            <option value="">Choose a trek or activity</option>
            {bookingPackages.map((bookingPackage) => (
              <option key={bookingPackage.id} value={bookingPackage.id}>
                {bookingPackage.title} - {bookingPackage.duration} - {bookingPackage.price}
              </option>
            ))}
          </select>
          {selectedPackage ? <small>{selectedPackage.summary}</small> : null}
        </label>

        <label className="booking-field">
          <span>Preferred start date *</span>
          <input type="date" value={form.startDate} onChange={updateField("startDate")} required />
        </label>

        <label className="booking-field">
          <span>Group size *</span>
          <input
            type="number"
            min="1"
            step="1"
            value={form.groupSize}
            onChange={updateField("groupSize")}
            placeholder="2"
            required
          />
        </label>

        <label className="booking-field">
          <span>Transport help</span>
          <select value={form.transport} onChange={updateField("transport")}>
            <option value="">Choose an option</option>
            <option value="No transport needed">No transport needed</option>
            <option value="Pickup from Medan / KNO">Pickup from Medan / KNO</option>
            <option value="Still deciding">Still deciding</option>
          </select>
        </label>

        <label className="booking-field">
          <span>Accommodation help</span>
          <select value={form.accommodation} onChange={updateField("accommodation")}>
            <option value="">Choose an option</option>
            <option value="Already booked">Already booked</option>
            <option value="Need help finding a place">Need help finding a place</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>

        <label className="booking-field booking-field-full">
          <span>Notes</span>
          <textarea
            value={form.notes}
            onChange={updateField("notes")}
            placeholder="Tell us about food needs, fitness level, timing, or any special request."
          />
        </label>
      </div>

      <div className="booking-actions">
        <button className="primary-button" type="submit" disabled={!isReady || status === "submitting"}>
          <Mail size={18} />
          {status === "submitting" ? "Sending..." : "Send request"}
        </button>
        <a className="secondary-button dark" href={whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {statusMessage ? (
        <p className={`booking-form-status ${status === "success" ? "success" : "error"}`} role="status">
          {status === "success" ? <Check size={16} /> : <X size={16} />}
          {statusMessage}
        </p>
      ) : null}

      <p className="booking-form-note">
        <Sparkles size={14} />
        No booking is confirmed automatically. We check availability first, then reply with next steps.
      </p>
    </form>
  );
}
