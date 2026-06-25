import { bookingPackages } from "../../booking/booking-data";
import { calculateBookingPayment, formatPayPalAmount } from "../../booking/pricing";

type PayPalAmount = {
  currency_code: string;
  value: string;
};

export type PayPalOrderDetails = {
  id?: string;
  purchase_units?: Array<{
    amount?: PayPalAmount;
    payments?: {
      captures?: Array<{
        amount?: PayPalAmount;
        id?: string;
        status?: string;
      }>;
    };
  }>;
  status?: string;
};

type PayPalAccessTokenResponse = {
  access_token?: string;
};

export class PayPalConfigError extends Error {}

export class PayPalApiError extends Error {
  constructor(
    message: string,
    readonly status = 502
  ) {
    super(message);
  }
}

export function cleanString(value: unknown, maxLength = 160) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function getPayPalClientId() {
  return process.env.PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
}

function getPayPalCredentials() {
  const clientId = getPayPalClientId();
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET || "";

  if (!clientId || !clientSecret) {
    throw new PayPalConfigError("PayPal sandbox credentials are not configured yet.");
  }

  return { clientId, clientSecret };
}

function getPayPalApiBase() {
  return process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

function getRequestHost(request: Request) {
  return request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
}

export function hasAllowedOrigin(request: Request) {
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

export function getPackagePayment(packageIdValue: unknown, groupSizeValue: unknown) {
  const packageId = cleanString(packageIdValue, 80);
  const selectedPackage = bookingPackages.find((bookingPackage) => bookingPackage.id === packageId);

  if (!selectedPackage) {
    throw new PayPalApiError("Please choose a valid package.", 400);
  }

  const payment = calculateBookingPayment(
    selectedPackage,
    typeof groupSizeValue === "number" ? groupSizeValue : cleanString(groupSizeValue, 20)
  );

  if (!payment) {
    throw new PayPalApiError("Please add a valid group size.", 400);
  }

  return { payment, selectedPackage };
}

async function getPayPalAccessToken() {
  const { clientId, clientSecret } = getPayPalCredentials();
  const response = await fetch(`${getPayPalApiBase()}/v1/oauth2/token`, {
    body: "grant_type=client_credentials",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  });

  const data = (await response.json().catch(() => ({}))) as PayPalAccessTokenResponse;

  if (!response.ok || !data.access_token) {
    throw new PayPalApiError("PayPal authentication failed.");
  }

  return data.access_token;
}

export async function paypalRequest<T>(path: string, options: { body?: unknown; method: "GET" | "POST" }) {
  const accessToken = await getPayPalAccessToken();
  const response = await fetch(`${getPayPalApiBase()}${path}`, {
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    method: options.method
  });

  const data = (await response.json().catch(() => ({}))) as T & { message?: string };

  if (!response.ok) {
    throw new PayPalApiError(data.message || "PayPal request failed.", response.status);
  }

  return data;
}

export function assertOrderAmount(order: PayPalOrderDetails, expectedAmount: number, expectedCurrency: string) {
  const amount = order.purchase_units?.[0]?.amount;
  const actualAmount = amount ? Number.parseFloat(amount.value) : Number.NaN;

  if (
    !amount ||
    amount.currency_code !== expectedCurrency ||
    !Number.isFinite(actualAmount) ||
    Math.abs(actualAmount - expectedAmount) >= 0.01
  ) {
    throw new PayPalApiError("PayPal order amount does not match the required 30% deposit.", 400);
  }
}

export function buildPaymentLabels(payment: ReturnType<typeof calculateBookingPayment>) {
  if (!payment) {
    throw new PayPalApiError("Invalid payment amount.", 400);
  }

  return {
    currency: payment.currency,
    depositAmount: formatPayPalAmount(payment.depositAmount),
    totalAmount: formatPayPalAmount(payment.totalAmount)
  };
}
