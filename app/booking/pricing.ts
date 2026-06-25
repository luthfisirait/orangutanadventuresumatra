import type { BookingPackage } from "./booking-data";

export const depositRate = 0.3;
export const paymentCurrency = "EUR";

function roundMoney(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function parsePackagePrice(price: string) {
  const match = price.match(/\d+(?:\.\d+)?/);

  if (!match) {
    return null;
  }

  const amount = Number.parseFloat(match[0]);
  return Number.isFinite(amount) ? amount : null;
}

export function parseGroupSize(value: string | number) {
  const groupSize = typeof value === "number" ? value : Number.parseInt(value, 10);
  return Number.isInteger(groupSize) && groupSize > 0 ? groupSize : null;
}

export function calculateBookingPayment(bookingPackage: BookingPackage, groupSizeValue: string | number) {
  const pricePerPerson = parsePackagePrice(bookingPackage.price);
  const groupSize = parseGroupSize(groupSizeValue);

  if (!pricePerPerson || !groupSize) {
    return null;
  }

  const totalAmount = roundMoney(pricePerPerson * groupSize);
  const depositAmount = roundMoney(totalAmount * depositRate);

  return {
    currency: paymentCurrency,
    depositAmount,
    depositRate,
    groupSize,
    pricePerPerson,
    totalAmount
  };
}

export function formatPaymentAmount(amount: number, currency = paymentCurrency) {
  return new Intl.NumberFormat("en", {
    currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: "currency"
  }).format(amount);
}

export function formatPayPalAmount(amount: number) {
  return amount.toFixed(2);
}
