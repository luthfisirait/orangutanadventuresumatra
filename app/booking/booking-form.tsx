"use client";

import { Check, Mail, MessageCircle, ShieldCheck, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { bookingPackages } from "./booking-data";
import { calculateBookingPayment, depositRate, formatPaymentAmount } from "./pricing";
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

type BookingFormProps = {
  initialPackageId?: string;
};

type PayPalButtonsActions = {
  reject: () => void | Promise<void>;
  resolve: () => void | Promise<void>;
};

type PayPalButtonsInstance = {
  close?: () => void | Promise<void>;
  render: (container: HTMLElement) => Promise<void>;
};

type PayPalButtonsOptions = {
  createOrder: () => Promise<string>;
  onApprove: (data: { orderID?: string }) => Promise<void>;
  onCancel?: () => void;
  onClick?: (data: unknown, actions: PayPalButtonsActions) => void | Promise<void>;
  onError?: (error: unknown) => void;
  style?: Record<string, string | number | boolean>;
};

type PayPalCreateOrderResponse = {
  currency?: string;
  depositAmount?: string;
  error?: string;
  id?: string;
  totalAmount?: string;
};

type PayPalCaptureOrderResponse = {
  captureId?: string;
  currency?: string;
  depositAmount?: string;
  error?: string;
  orderId?: string;
  status?: string;
  totalAmount?: string;
};

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: PayPalButtonsOptions) => PayPalButtonsInstance;
    };
  }
}

const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const paypalCurrency = process.env.NEXT_PUBLIC_PAYPAL_CURRENCY || "EUR";
const paypalEnvironment = process.env.NEXT_PUBLIC_PAYPAL_ENV === "live" ? "live" : "sandbox";

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

function getRequiredFormError(form: BookingFormState) {
  if (!form.fullName.trim() || !form.packageId || !form.startDate || !form.groupSize) {
    return "Please complete the required booking fields first.";
  }

  if (!form.whatsapp.trim()) {
    return "Please add your WhatsApp number with country code, like +1 555 123 4567.";
  }

  if (!looksLikeInternationalPhone(form.whatsapp)) {
    return "Please use an international WhatsApp format, like +1 555 123 4567.";
  }

  return "";
}

export function BookingForm({ initialPackageId = "" }: BookingFormProps) {
  const selectedPackageFromQuery = isBookingPackageId(initialPackageId) ? initialPackageId : "";

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [paypalScriptReady, setPaypalScriptReady] = useState(false);
  const [paypalStatus, setPaypalStatus] = useState<SubmitStatus>("idle");
  const [paypalMessage, setPaypalMessage] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [formReadyAt, setFormReadyAt] = useState(0);
  const [website, setWebsite] = useState("");
  const paypalContainerRef = useRef<HTMLDivElement | null>(null);
  const latestWebsiteRef = useRef(website);
  const latestFormReadyAtRef = useRef(formReadyAt);
  const [form, setForm] = useState<BookingFormState>({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    packageId: selectedPackageFromQuery,
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
  const paymentSummary = useMemo(
    () => (selectedPackage ? calculateBookingPayment(selectedPackage, form.groupSize) : null),
    [form.groupSize, selectedPackage]
  );
  const latestFormRef = useRef(form);
  const latestSelectedPackageRef = useRef(selectedPackage);
  const latestPaymentSummaryRef = useRef(paymentSummary);

  useEffect(() => {
    latestFormRef.current = form;
  }, [form]);

  useEffect(() => {
    latestSelectedPackageRef.current = selectedPackage;
  }, [selectedPackage]);

  useEffect(() => {
    latestPaymentSummaryRef.current = paymentSummary;
  }, [paymentSummary]);

  useEffect(() => {
    latestWebsiteRef.current = website;
  }, [website]);

  useEffect(() => {
    latestFormReadyAtRef.current = formReadyAt;
  }, [formReadyAt]);

  useEffect(() => {
    setIsReady(true);
    setFormReadyAt(Date.now());
  }, []);

  const message = useMemo(() => buildMessage(form, selectedPackage), [form, selectedPackage]);
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const updateField =
    <K extends keyof BookingFormState>(key: K) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setStatus("idle");
      setStatusMessage("");
      setPaypalStatus("idle");
      setPaypalMessage("");
      setForm((current) => ({
        ...current,
        [key]: event.target.value
      }));
    };

  const submitBookingRequest = useCallback(async (
    extraPayload: Record<string, string> = {},
    successMessage = "Booking request sent. We will contact you soon to confirm availability."
  ) => {
    const currentForm = latestFormRef.current;
    setStatus("submitting");
    setStatusMessage("");

    const response = await fetch("/api/booking", {
      body: JSON.stringify({
        ...currentForm,
        ...extraPayload,
        formAgeMs: latestFormReadyAtRef.current ? Date.now() - latestFormReadyAtRef.current : 0,
        website: latestWebsiteRef.current
      }),
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
    setStatusMessage(successMessage);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requiredFormError = getRequiredFormError(form);

    if (requiredFormError) {
      setStatus("error");
      setStatusMessage(requiredFormError);
      return;
    }

    try {
      await submitBookingRequest();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Could not send the booking request. Please try WhatsApp or try again later."
      );
    }
  };

  useEffect(() => {
    if (!paypalClientId) {
      return;
    }

    if (window.paypal) {
      setPaypalScriptReady(true);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-oas-paypal-sdk="true"]');
    let isMounted = true;

    const handleReady = () => {
      if (isMounted) {
        setPaypalScriptReady(true);
      }
    };

    const handleError = () => {
      if (isMounted) {
        setPaypalStatus("error");
        setPaypalMessage(
          `Could not load PayPal. Check the ${paypalEnvironment} Client ID, then restart or redeploy the site.`
        );
      }
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleReady);
      existingScript.addEventListener("error", handleError);

      return () => {
        isMounted = false;
        existingScript.removeEventListener("load", handleReady);
        existingScript.removeEventListener("error", handleError);
      };
    }

    const script = document.createElement("script");
    script.async = true;
    script.dataset.oasPaypalSdk = "true";
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
      paypalClientId
    )}&currency=${encodeURIComponent(paypalCurrency)}&intent=capture&components=buttons`;
    script.addEventListener("load", handleReady);
    script.addEventListener("error", handleError);
    document.body.appendChild(script);

    return () => {
      isMounted = false;
      script.removeEventListener("load", handleReady);
      script.removeEventListener("error", handleError);
    };
  }, []);

  useEffect(() => {
    const container = paypalContainerRef.current;

    if (!paypalScriptReady || !container || !window.paypal) {
      return;
    }

    let isMounted = true;
    container.innerHTML = "";

    const buttons = window.paypal.Buttons({
      createOrder: async () => {
        const currentForm = latestFormRef.current;
        const currentPackage = latestSelectedPackageRef.current;
        const currentPayment = latestPaymentSummaryRef.current;
        const requiredFormError = getRequiredFormError(currentForm);

        if (requiredFormError || !currentPackage || !currentPayment) {
          throw new Error(requiredFormError || "Please choose a package and group size first.");
        }

        const response = await fetch("/api/paypal/create-order", {
          body: JSON.stringify({
            fullName: currentForm.fullName,
            groupSize: currentForm.groupSize,
            packageId: currentForm.packageId,
            startDate: currentForm.startDate
          }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        });
        const data = (await response.json().catch(() => ({}))) as PayPalCreateOrderResponse;

        if (!response.ok || !data.id) {
          throw new Error(data.error || "Could not create the PayPal order.");
        }

        return data.id;
      },
      onApprove: async (data) => {
        const currentForm = latestFormRef.current;
        const orderId = data.orderID;

        if (!orderId) {
          throw new Error("PayPal did not return an order id.");
        }

        setPaypalStatus("submitting");
        setPaypalMessage("Capturing PayPal deposit...");

        const response = await fetch("/api/paypal/capture-order", {
          body: JSON.stringify({
            groupSize: currentForm.groupSize,
            orderId,
            packageId: currentForm.packageId
          }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        });
        const capture = (await response.json().catch(() => ({}))) as PayPalCaptureOrderResponse;

        if (!response.ok) {
          throw new Error(capture.error || "Could not capture the PayPal payment.");
        }

        const depositLabel =
          capture.depositAmount && capture.currency
            ? formatPaymentAmount(Number.parseFloat(capture.depositAmount), capture.currency)
            : "the 30% deposit";

        setPaypalMessage("Deposit captured. Sending booking request...");

        await submitBookingRequest(
          {
            paypalCaptureId: capture.captureId || "",
            paypalDepositAmount:
              capture.depositAmount && capture.currency ? `${capture.depositAmount} ${capture.currency}` : "",
            paypalDepositRate: `${Math.round(depositRate * 100)}%`,
            paypalOrderId: capture.orderId || orderId,
            paypalStatus: capture.status || "",
            paypalTotalAmount:
              capture.totalAmount && capture.currency ? `${capture.totalAmount} ${capture.currency}` : ""
          },
          "PayPal deposit received. Booking request sent with the payment reference."
        );

        if (isMounted) {
          setPaypalStatus("success");
          setPaypalMessage(
            `PayPal deposit paid: ${depositLabel}. Reference: ${capture.captureId || capture.orderId || orderId}.`
          );
        }
      },
      onCancel: () => {
        setPaypalStatus("idle");
        setPaypalMessage("PayPal payment was cancelled.");
      },
      onClick: (_data, actions) => {
        const currentForm = latestFormRef.current;
        const currentPackage = latestSelectedPackageRef.current;
        const currentPayment = latestPaymentSummaryRef.current;
        const requiredFormError = getRequiredFormError(currentForm);

        if (requiredFormError || !currentPackage || !currentPayment) {
          setPaypalStatus("error");
          setPaypalMessage(requiredFormError || "Please choose a package and group size first.");
          return actions.reject();
        }

        setPaypalStatus("idle");
        setPaypalMessage("");
        return actions.resolve();
      },
      onError: (error) => {
        console.error("PayPal checkout error:", error);
        setPaypalStatus("error");
        setPaypalMessage("Could not complete PayPal payment. Please try again or contact us on WhatsApp.");
      },
      style: {
        color: "gold",
        label: "paypal",
        layout: "vertical",
        shape: "rect"
      }
    });

    buttons.render(container).catch((error) => {
      console.error("PayPal render error:", error);
      setPaypalStatus("error");
      setPaypalMessage(
        `Could not show the PayPal button. Check the ${paypalEnvironment} Client ID, then restart or redeploy the site.`
      );
    });

    return () => {
      isMounted = false;
      void buttons.close?.();
      container.innerHTML = "";
    };
  }, [paypalScriptReady, submitBookingRequest]);

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

      {selectedPackage ? (
        <section className="paypal-deposit-section" aria-labelledby="paypal-deposit-title">
          <div className="paypal-deposit-header">
            <span className="section-kicker">PayPal {paypalEnvironment}</span>
            <h3 id="paypal-deposit-title">Pay {Math.round(depositRate * 100)}% deposit</h3>
            <p>PayPal charges only the deposit. The remaining balance is handled after confirmation.</p>
          </div>

          <div className="payment-summary" aria-label="Payment summary">
            <div>
              <span>Package total</span>
              <strong>
                {paymentSummary ? formatPaymentAmount(paymentSummary.totalAmount) : "Add group size"}
              </strong>
            </div>
            <div>
              <span>Deposit due</span>
              <strong>
                {paymentSummary ? formatPaymentAmount(paymentSummary.depositAmount) : "30% of total"}
              </strong>
            </div>
          </div>

          <p className="paypal-deposit-note">
            <ShieldCheck size={14} />
            Total is calculated from {selectedPackage.price} x group size.
          </p>

          {paypalClientId ? (
            <>
              <div className="paypal-button-wrapper" ref={paypalContainerRef} />
              {!paypalScriptReady ? <small>Loading PayPal {paypalEnvironment}...</small> : null}
            </>
          ) : (
            <p className="booking-form-status error" role="status">
              <X size={16} />
              PayPal is not configured yet. Please use WhatsApp or send the request.
            </p>
          )}

          {paypalMessage ? (
            <p
              className={`booking-form-status ${
                paypalStatus === "success" ? "success" : paypalStatus === "error" ? "error" : ""
              }`}
              role="status"
            >
              {paypalStatus === "success" ? <Check size={16} /> : paypalStatus === "error" ? <X size={16} /> : null}
              {paypalMessage}
            </p>
          ) : null}
        </section>
      ) : null}

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
