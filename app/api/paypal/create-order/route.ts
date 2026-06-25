import { NextResponse } from "next/server";
import {
  PayPalApiError,
  PayPalConfigError,
  buildPaymentLabels,
  cleanString,
  getPackagePayment,
  hasAllowedOrigin,
  paypalRequest,
  type PayPalOrderDetails
} from "../paypal";

export const runtime = "nodejs";

type CreateOrderPayload = {
  fullName?: unknown;
  groupSize?: unknown;
  packageId?: unknown;
  startDate?: unknown;
};

export async function POST(request: Request) {
  let payload: CreateOrderPayload;

  try {
    payload = (await request.json()) as CreateOrderPayload;
  } catch {
    return NextResponse.json({ error: "Invalid PayPal request." }, { status: 400 });
  }

  if (!hasAllowedOrigin(request)) {
    return NextResponse.json({ error: "Invalid PayPal request." }, { status: 403 });
  }

  try {
    const { payment, selectedPackage } = getPackagePayment(payload.packageId, payload.groupSize);
    const labels = buildPaymentLabels(payment);
    const startDate = cleanString(payload.startDate, 40) || "date to confirm";

    const order = await paypalRequest<PayPalOrderDetails>("/v2/checkout/orders", {
      body: {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: labels.currency,
              value: labels.depositAmount
            },
            custom_id: `${selectedPackage.id}|${startDate}|${payment.groupSize}`.slice(0, 127),
            description: `${selectedPackage.title} 30% deposit for ${payment.groupSize} guest(s)`.slice(0, 127)
          }
        ]
      },
      method: "POST"
    });

    if (!order.id) {
      return NextResponse.json({ error: "PayPal did not return an order id." }, { status: 502 });
    }

    return NextResponse.json({
      currency: labels.currency,
      depositAmount: labels.depositAmount,
      id: order.id,
      totalAmount: labels.totalAmount
    });
  } catch (error) {
    if (error instanceof PayPalConfigError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }

    if (error instanceof PayPalApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    console.error("Error creating PayPal order:", error);
    return NextResponse.json({ error: "Could not create PayPal order." }, { status: 502 });
  }
}
