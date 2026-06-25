import { NextResponse } from "next/server";
import {
  PayPalApiError,
  PayPalConfigError,
  assertOrderAmount,
  buildPaymentLabels,
  cleanString,
  getPackagePayment,
  hasAllowedOrigin,
  paypalRequest,
  type PayPalOrderDetails
} from "../paypal";

export const runtime = "nodejs";

type CaptureOrderPayload = {
  groupSize?: unknown;
  orderId?: unknown;
  packageId?: unknown;
};

export async function POST(request: Request) {
  let payload: CaptureOrderPayload;

  try {
    payload = (await request.json()) as CaptureOrderPayload;
  } catch {
    return NextResponse.json({ error: "Invalid PayPal request." }, { status: 400 });
  }

  if (!hasAllowedOrigin(request)) {
    return NextResponse.json({ error: "Invalid PayPal request." }, { status: 403 });
  }

  const orderId = cleanString(payload.orderId, 80);

  if (!/^[A-Z0-9]+$/i.test(orderId)) {
    return NextResponse.json({ error: "Invalid PayPal order id." }, { status: 400 });
  }

  try {
    const { payment } = getPackagePayment(payload.packageId, payload.groupSize);
    const labels = buildPaymentLabels(payment);
    const order = await paypalRequest<PayPalOrderDetails>(`/v2/checkout/orders/${encodeURIComponent(orderId)}`, {
      method: "GET"
    });

    assertOrderAmount(order, payment.depositAmount, payment.currency);

    const capturedOrder = await paypalRequest<PayPalOrderDetails>(
      `/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`,
      {
        method: "POST"
      }
    );
    const capture = capturedOrder.purchase_units?.[0]?.payments?.captures?.[0];

    return NextResponse.json({
      captureId: capture?.id || "",
      currency: labels.currency,
      depositAmount: labels.depositAmount,
      orderId: capturedOrder.id || orderId,
      status: capture?.status || capturedOrder.status || "",
      totalAmount: labels.totalAmount
    });
  } catch (error) {
    if (error instanceof PayPalConfigError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    if (error instanceof PayPalApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    console.error("Error capturing PayPal order:", error);
    return NextResponse.json({ error: "Could not capture PayPal payment." }, { status: 502 });
  }
}
