"use client";

import { Check, Mail, MessageCircle, ShieldCheck, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { trackEvent } from "../analytics";
import { getBookingPackages, type BookingPackage } from "./booking-data";
import { calculateBookingPayment, depositRate, formatPaymentAmount } from "./pricing";
import { whatsappNumber } from "../travel-content";
import type { Locale, TrekId } from "../site-content";

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
  locale?: Locale;
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

const formText = {
  en: {
    requestKicker: "Booking request",
    requestHeading: "Request availability for your trek",
    requestDesc:
      "Send your details here and we receive the request by email. We contact you to confirm availability before anything is booked.",
    fullName: "Full name *",
    country: "Country",
    email: "Email address",
    emailHelp: "Optional, but useful as a backup contact.",
    whatsapp: "WhatsApp number *",
    whatsappHelp: "Required. Include country code, e.g. +1 for USA.",
    package: "Package *",
    choosePackage: "Choose a trek or activity",
    startDate: "Preferred start date *",
    groupSize: "Group size *",
    transport: "Transport help",
    chooseOption: "Choose an option",
    transportOptions: {
      none: "No transport needed",
      pickup: "Pickup from Medan / KNO",
      deciding: "Still deciding"
    },
    accommodation: "Accommodation help",
    accommodationOptions: {
      booked: "Already booked",
      help: "Need help finding a place",
      notSure: "Not sure yet"
    },
    notes: "Notes",
    notesPlaceholder: "Tell us about food needs, fitness level, timing, or any special request.",
    payDeposit: "Pay 30% deposit",
    depositSub: "Send only the deposit shown below. The remaining balance is handled after confirmation.",
    packageTotal: "Package total",
    depositDue: "Deposit due",
    addGroupSize: "Add group size",
    depositPercentage: "30% of total",
    totalCalculation: (price: string) => `Total is calculated from ${price} x group size.`,
    manualDepositTo: "Send the deposit manually to this PayPal email",
    manualInstructions:
      "Add your name, travel date, and package in the PayPal note. After payment, send the PayPal reference by WhatsApp or write it in the notes before submitting this form.",
    openPaypal: "Open PayPal",
    sendRequest: "Send request",
    sending: "Sending...",
    whatsappBtn: "WhatsApp",
    noBookingConfirmed: "No booking is confirmed automatically. We check availability first, then reply with next steps.",
    successMsg: "Thank you! Your booking request has been sent. We will review availability and contact you shortly.",
    errorMsg: "There was a problem sending your request. Please try again or reach out on WhatsApp.",
    requiredError: "Please complete the required booking fields first.",
    invalidWhatsappError: "Please enter a valid WhatsApp number with country code, like +1 555 123 4567."
  },
  de: {
    requestKicker: "Buchungsanfrage",
    requestHeading: "Verfügbarkeit für Ihre Tour anfragen",
    requestDesc:
      "Senden Sie uns Ihre Reisedaten. Wir prüfen die Verfügbarkeit und melden uns umgehend bei Ihnen, bevor etwas fest gebucht wird.",
    fullName: "Vollständiger Name *",
    country: "Land",
    email: "E-Mail-Adresse",
    emailHelp: "Optional, aber empfehlenswert als Kontaktoption.",
    whatsapp: "WhatsApp-Nummer *",
    whatsappHelp: "Erforderlich. Bitte mit Ländervorwahl, z. B. +49 für Deutschland.",
    package: "Paket *",
    choosePackage: "Tour oder Aktivität auswählen",
    startDate: "Gewünschtes Startdatum *",
    groupSize: "Gruppengröße *",
    transport: "Transfer-Bedarf",
    chooseOption: "Bitte wählen",
    transportOptions: {
      none: "Kein Transfer benötigt",
      pickup: "Abholung ab Medan / KNO",
      deciding: "Noch unentschieden"
    },
    accommodation: "Unterkunftshilfe",
    accommodationOptions: {
      booked: "Bereits gebucht",
      help: "Hilfe bei der Zimmersuche gewünscht",
      notSure: "Noch nicht sicher"
    },
    notes: "Besondere Hinweise / Wünsche",
    notesPlaceholder: "Besondere Ernährung, Fitnesslevel, Zeitplanung oder sonstige Wünsche...",
    payDeposit: "30 % Anzahlung leisten",
    depositSub: "Zahlen Sie vorab nur die unten angezeigte Anzahlung. Der Restbetrag wird nach Bestätigung beglichen.",
    packageTotal: "Gesamtpreis Paket",
    depositDue: "Fällige Anzahlung",
    addGroupSize: "Gruppengröße angeben",
    depositPercentage: "30 % des Gesamtpreises",
    totalCalculation: (price: string) => `Gesamtpreis berechnet sich aus ${price} x Gruppengröße.`,
    manualDepositTo: "Senden Sie die Anzahlung manuell an diese PayPal-E-Mail",
    manualInstructions:
      "Geben Sie Ihren Namen, Reisedatum und das gewählte Paket als Betreff an. Senden Sie die PayPal-Referenz per WhatsApp oder tragen Sie sie im Notizfeld ein.",
    openPaypal: "PayPal öffnen",
    sendRequest: "Anfrage absenden",
    sending: "Wird gesendet...",
    whatsappBtn: "WhatsApp",
    noBookingConfirmed:
      "Keine automatische Buchung. Wir prüfen die Verfügbarkeit persönlich und melden uns mit allen Details.",
    successMsg: "Vielen Dank! Ihre Anfrage wurde versendet. Wir prüfen die Termine und melden uns in Kürze.",
    errorMsg:
      "Beim Versenden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per WhatsApp.",
    requiredError: "Bitte füllen Sie alle mit * markierten Pflichtfelder aus.",
    invalidWhatsappError: "Bitte geben Sie eine gültige WhatsApp-Nummer mit Ländervorwahl ein, z. B. +49 170 1234567."
  },
  fr: {
    requestKicker: "Demande de réservation",
    requestHeading: "Demander la disponibilité pour votre trek",
    requestDesc:
      "Transmettez-nous vos informations. Nous vérifions les disponibilités et vous recontactons avant toute confirmation définitive.",
    fullName: "Nom complet *",
    country: "Pays",
    email: "Adresse e-mail",
    emailHelp: "Facultatif, mais utile pour un contact de secours.",
    whatsapp: "Numéro WhatsApp *",
    whatsappHelp: "Obligatoire. Avec indicatif pays, ex. +33 pour la France.",
    package: "Formule *",
    choosePackage: "Sélectionnez un trek ou une activité",
    startDate: "Date de départ souhaitée *",
    groupSize: "Nombre de personnes *",
    transport: "Besoin de transfert",
    chooseOption: "Choisissez une option",
    transportOptions: {
      none: "Pas de transport nécessaire",
      pickup: "Prise en charge Medan / Aéroport KNO",
      deciding: "En cours de réflexion"
    },
    accommodation: "Aide hébergement",
    accommodationOptions: {
      booked: "Déjà réservé",
      help: "Besoin d'aide pour trouver un logement",
      notSure: "Pas encore sûr"
    },
    notes: "Remarques et demandes",
    notesPlaceholder: "Régime alimentaire, niveau physique, horaires ou demandes spécifiques...",
    payDeposit: "Régler l'acompte de 30 %",
    depositSub: "Envoyez uniquement l'acompte indiqué ci-dessous. Le solde est réglé après confirmation.",
    packageTotal: "Total formule",
    depositDue: "Acompte à régler",
    addGroupSize: "Préciser la taille du groupe",
    depositPercentage: "30 % du total",
    totalCalculation: (price: string) => `Le total est calculé à partir de ${price} x nombre de personnes.`,
    manualDepositTo: "Envoyez l'acompte manuellement à cette adresse PayPal",
    manualInstructions:
      "Ajoutez votre nom, date et formule dans la note PayPal. Après paiement, transmettez la référence PayPal par WhatsApp ou indiquez-la dans vos notes.",
    openPaypal: "Ouvrir PayPal",
    sendRequest: "Envoyer la demande",
    sending: "Envoi en cours...",
    whatsappBtn: "WhatsApp",
    noBookingConfirmed:
      "Aucune réservation automatique. Nous vérifions la disponibilité et vous répondons avec les étapes suivantes.",
    successMsg: "Merci ! Votre demande a été envoyée. Nous vérifions la disponibilité et vous répondons rapidement.",
    errorMsg: "Un problème est survenu lors de l'envoi. Veuillez réessayer ou nous contacter sur WhatsApp.",
    requiredError: "Veuillez remplir tous les champs obligatoires signalés par un astérisque (*).",
    invalidWhatsappError: "Veuillez saisir un numéro WhatsApp valide avec indicatif pays, ex. +33 6 12 34 56 78."
  },
  nl: {
    requestKicker: "Reserveringsaanvraag",
    requestHeading: "Vraag beschikbaarheid aan voor uw trekking",
    requestDesc:
      "Stuur uw gegevens door. Wij controleren de beschikbaarheid en nemen persoonlijk contact op voordat er definitief geboekt wordt.",
    fullName: "Volledige naam *",
    country: "Land",
    email: "E-mailadres",
    emailHelp: "Optioneel, maar handig als reservecontact.",
    whatsapp: "WhatsApp-nummer *",
    whatsappHelp: "Verplicht. Inclusief landcode, bijv. +31 voor Nederland of +32 voor België.",
    package: "Pakket *",
    choosePackage: "Kies een trekking of activiteit",
    startDate: "Gewenste startdatum *",
    groupSize: "Aantal personen *",
    transport: "Vervoer nodig",
    chooseOption: "Kies een optie",
    transportOptions: {
      none: "Geen vervoer nodig",
      pickup: "Ophalen in Medan / luchthaven KNO",
      deciding: "Nog niet besloten"
    },
    accommodation: "Accommodatiehulp",
    accommodationOptions: {
      booked: "Al geboekt",
      help: "Hulp nodig bij vinden van verblijf",
      notSure: "Nog niet zeker"
    },
    notes: "Opmerkingen",
    notesPlaceholder: "Dieetwensen, conditieniveau, tijden of speciale verzoeken...",
    payDeposit: "Betaal 30% aanbetaling",
    depositSub: "Maak alleen de onderstaande aanbetaling over. Het restantbedrag wordt na bevestiging afgehandeld.",
    packageTotal: "Totaalbedrag pakket",
    depositDue: "Verschuldigde aanbetaling",
    addGroupSize: "Vul groepsgrootte in",
    depositPercentage: "30% van het totaal",
    totalCalculation: (price: string) => `Totaal wordt berekend als ${price} x aantal personen.`,
    manualDepositTo: "Maak de aanbetaling handmatig over naar dit PayPal-adres",
    manualInstructions:
      "Vermeld uw naam, reisdatum en pakket in de PayPal-opmerking. Stuur na betaling de PayPal-referentie via WhatsApp of noteer deze in het formulier.",
    openPaypal: "Open PayPal",
    sendRequest: "Aanvraag versturen",
    sending: "Versturen...",
    whatsappBtn: "WhatsApp",
    noBookingConfirmed:
      "Er wordt niets automatisch definitief geboekt. We verifiëren eerst de planning en nemen snel contact op.",
    successMsg: "Hartelijk dank! Uw aanvraag is verzonden. Wij controleren de beschikbaarheid en nemen snel contact met u op.",
    errorMsg: "Er ging iets mis bij het versturen. Probeer het opnieuw of stuur een bericht via WhatsApp.",
    requiredError: "Vul alstublieft alle verplichte velden met een * in.",
    invalidWhatsappError: "Vul een geldig WhatsApp-nummer in met landcode, bijv. +31 6 12345678."
  },
  zh: {
    requestKicker: "预订请求",
    requestHeading: "查询雨林徒步档期与预订",
    requestDesc:
      "填写您的出行信息并发送，我们将直接收到邮件通知。在向导核实档期与许可前，不会产生任何扣费。",
    fullName: "姓名 *",
    country: "国籍 / 居住地",
    email: "电子邮箱",
    emailHelp: "选填，作为备用联系方式以便发送确认函。",
    whatsapp: "WhatsApp 号码 *",
    whatsappHelp: "必填。请包含国家区号，如中国大陆为 +86。",
    package: "选择行程套餐 *",
    choosePackage: "请选择徒步路线或体验活动",
    startDate: "期望出发日期 *",
    groupSize: "出行人数 *",
    transport: "交通接送协助",
    chooseOption: "请选择接送需求",
    transportOptions: {
      none: "无需接送（自行前往武吉拉旺）",
      pickup: "需要从棉兰市区 / 瓜拉纳穆机场（KNO）接机",
      deciding: "尚未确定"
    },
    accommodation: "客栈住宿协助",
    accommodationOptions: {
      booked: "已自行预订村庄客栈",
      help: "需要协助推荐或预订武吉拉旺客栈",
      notSure: "尚未确定"
    },
    notes: "特殊要求与备注",
    notesPlaceholder: "请告知任何过敏或饮食禁忌、体能状况、航班时间或其他特别需求...",
    payDeposit: "支付 30% 定金",
    depositSub: "仅需预付下方显示的定金金额。余款将在行程确认后现场或出发前付清。",
    packageTotal: "套餐总额",
    depositDue: "应付定金",
    addGroupSize: "请输入出行人数",
    depositPercentage: "总额的 30%",
    totalCalculation: (price: string) => `总额按 ${price} x 人数计算。`,
    manualDepositTo: "请手动向该官方 PayPal 账户支付定金",
    manualInstructions:
      "请在 PayPal 转账备注中填写您的姓名、出行日期及套餐名称。转账后请通过 WhatsApp 发送交易号或直接填写在表单备注中。",
    openPaypal: "打开 PayPal 转账",
    sendRequest: "发送预订请求",
    sending: "正在发送...",
    whatsappBtn: "WhatsApp 咨询",
    noBookingConfirmed:
      "提交此表单不会自动扣款。我们将第一时间人工核实向导档期，并主动回复后续流程。",
    successMsg: "非常感谢！您的预订请求已成功发送。我们将尽快核对档期并与您取得联系。",
    errorMsg: "发送请求时出现问题，请重试或直接通过 WhatsApp 联系我们。",
    requiredError: "请填写所有标有星号 (*) 的必填项。",
    invalidWhatsappError: "请输入包含国家区号的有效 WhatsApp 号码，例如 +86 138 0000 0000。"
  },
  id: {
    requestKicker: "Permintaan Pemesanan",
    requestHeading: "Cek ketersediaan & reservasi tur Anda",
    requestDesc:
      "Kirimkan data perjalanan Anda di sini dan tim kami akan segera menerima email reservasi. Kami akan menghubungi Anda untuk memastikan ketersediaan sebelum pemesanan diproses.",
    fullName: "Nama lengkap *",
    country: "Negara asal / Domisili",
    email: "Alamat email",
    emailHelp: "Opsional, namun sangat berguna sebagai kontak cadangan dan pengiriman invoice.",
    whatsapp: "Nomor WhatsApp *",
    whatsappHelp: "Wajib diisi. Sertakan kode negara, contoh: +62 untuk Indonesia.",
    package: "Pilihan Paket *",
    choosePackage: "Pilih paket trekking atau aktivitas",
    startDate: "Rencana tanggal mulai *",
    groupSize: "Jumlah orang *",
    transport: "Bantuan transportasi",
    chooseOption: "Pilih opsi transportasi",
    transportOptions: {
      none: "Tidak perlu (datang sendiri ke Bukit Lawang)",
      pickup: "Antar-jemput dari Medan / Bandara KNO",
      deciding: "Masih mempertimbangkan"
    },
    accommodation: "Bantuan penginapan",
    accommodationOptions: {
      booked: "Sudah memesan penginapan sendiri",
      help: "Butuh bantuan rekomendasi penginapan",
      notSure: "Belum memutuskan"
    },
    notes: "Catatan khusus / Permintaan",
    notesPlaceholder: "Beri tahu kami pantangan makanan, tingkat kebugaran, jadwal tiba, atau kebutuhan khusus...",
    payDeposit: "Bayar deposit 30%",
    depositSub: "Bayar hanya nilai deposit yang tertera di bawah. Sisa pembayaran dilunasi setelah jadwal dikonfirmasi.",
    packageTotal: "Total harga paket",
    depositDue: "Nilai deposit",
    addGroupSize: "Masukkan jumlah orang",
    depositPercentage: "30% dari total",
    totalCalculation: (price: string) => `Total dihitung dari ${price} x jumlah orang.`,
    manualDepositTo: "Kirim deposit secara manual ke rekening PayPal atau Bank resmi",
    manualInstructions:
      "Tuliskan nama Anda, tanggal perjalanan, dan paket pada catatan transfer. Setelah transfer, kirimkan bukti pembayaran via WhatsApp atau tulis nomor referensi pada catatan formulir.",
    openPaypal: "Buka PayPal",
    sendRequest: "Kirim formulir pemesanan",
    sending: "Mengirim...",
    whatsappBtn: "Hubungi via WhatsApp",
    noBookingConfirmed:
      "Tidak ada pemotongan otomatis. Kami memverifikasi ketersediaan jadwal pemandu terlebih dahulu sebelum konfirmasi.",
    successMsg: "Terima kasih banyak! Permintaan pemesanan Anda telah terkirim. Tim kami akan segera memeriksa jadwal dan menghubungi Anda.",
    errorMsg: "Terjadi kendala saat mengirim permintaan. Silakan coba lagi atau hubungi kami langsung via WhatsApp.",
    requiredError: "Mohon lengkapi semua kolom yang bertanda bintang (*) terlebih dahulu.",
    invalidWhatsappError: "Harap masukkan nomor WhatsApp yang valid beserta kode negara, contoh: +62 812 3456 7890."
  }
};

const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const paypalCurrency = process.env.NEXT_PUBLIC_PAYPAL_CURRENCY || "EUR";
const paypalEnvironment = process.env.NEXT_PUBLIC_PAYPAL_ENV === "live" ? "live" : "sandbox";
const paypalManualEmail = process.env.NEXT_PUBLIC_PAYPAL_MANUAL_EMAIL || "Saipolvalley01@gmail.com";
const paypalPaymentMode = process.env.NEXT_PUBLIC_PAYPAL_PAYMENT_MODE === "checkout" ? "checkout" : "manual";

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

function groupSizeForAnalytics(value: string) {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
}

function buildMessage(form: BookingFormState, selectedPackage: BookingPackage | undefined) {
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

function getRequiredFormError(form: BookingFormState, errorMsg: string) {
  if (!form.fullName.trim() || !form.packageId || !form.startDate || !form.groupSize) {
    return errorMsg;
  }

  return "";
}

export function BookingForm({ initialPackageId, locale = "en" }: BookingFormProps) {
  const t = formText[locale] ?? formText.en;
  const packages = useMemo(() => getBookingPackages(locale), [locale]);

  const initialPackage = useMemo(() => {
    return packages.some((p) => p.id === initialPackageId) ? (initialPackageId as TrekId) : ("" as const);
  }, [initialPackageId, packages]);

  const [form, setForm] = useState<BookingFormState>({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    packageId: initialPackage,
    startDate: "",
    groupSize: "2",
    transport: "",
    accommodation: "",
    notes: ""
  });

  const [website, setWebsite] = useState("");
  const [formReadyAt, setFormReadyAt] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [paypalStatus, setPaypalStatus] = useState<SubmitStatus>("idle");
  const [paypalMessage, setPaypalMessage] = useState("");
  const [paypalScriptReady, setPaypalScriptReady] = useState(false);

  const paypalContainerRef = useRef<HTMLDivElement | null>(null);
  const latestFormRef = useRef(form);
  const selectedPackage = useMemo(
    () => packages.find((bookingPackage) => bookingPackage.id === form.packageId),
    [form.packageId, packages]
  );
  const paymentSummary = useMemo(
    () => (selectedPackage ? calculateBookingPayment(selectedPackage, form.groupSize) : null),
    [form.groupSize, selectedPackage]
  );

  const latestSelectedPackageRef = useRef(selectedPackage);
  const latestPaymentSummaryRef = useRef(paymentSummary);
  const latestWebsiteRef = useRef(website);
  const latestFormReadyAtRef = useRef(formReadyAt);

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

  const submitBookingRequest = useCallback(
    async (extraPayload: Record<string, string> = {}, successMessage = t.successMsg) => {
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

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data.error || t.errorMsg);
        return false;
      }

      setStatus("success");
      setStatusMessage(data.message || successMessage);
      trackEvent("booking_submit_success", {
        group_size: groupSizeForAnalytics(currentForm.groupSize),
        has_paypal_reference: Boolean(extraPayload.paypalOrderId || extraPayload.paypalCaptureId),
        package_id: currentForm.packageId,
        payment_mode: extraPayload.paypalStatus ? "checkout" : "request_only"
      });
      return true;
    },
    [t.errorMsg, t.successMsg]
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requiredFormError = getRequiredFormError(form, t.requiredError);
    if (requiredFormError) {
      setStatus("error");
      setStatusMessage(requiredFormError);
      return;
    }

    if (form.whatsapp && !looksLikeInternationalPhone(form.whatsapp)) {
      setStatus("error");
      setStatusMessage(t.invalidWhatsappError);
      return;
    }

    await submitBookingRequest();
  };

  useEffect(() => {
    if (paypalPaymentMode !== "checkout" || !paypalClientId) {
      return;
    }

    const scriptId = "paypal-sdk-script";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (window.paypal) {
      setPaypalScriptReady(true);
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", () => setPaypalScriptReady(true), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
      paypalClientId
    )}&currency=${encodeURIComponent(paypalCurrency)}&intent=capture`;
    script.async = true;
    script.onload = () => setPaypalScriptReady(true);
    script.onerror = () => {
      setPaypalStatus("error");
      setPaypalMessage("Could not load PayPal checkout. Please send your request or use WhatsApp.");
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (paypalPaymentMode !== "checkout" || !paypalScriptReady || !window.paypal || !paypalContainerRef.current) {
      return;
    }

    const container = paypalContainerRef.current;
    container.innerHTML = "";
    let isMounted = true;

    const buttons = window.paypal.Buttons({
      createOrder: async () => {
        const currentForm = latestFormRef.current;
        const currentPackage = latestSelectedPackageRef.current;
        const currentPayment = latestPaymentSummaryRef.current;

        if (!currentPackage || !currentPayment) {
          throw new Error("Choose a package and group size before starting PayPal checkout.");
        }

        const requiredFormError = getRequiredFormError(currentForm, t.requiredError);
        if (requiredFormError) {
          throw new Error(requiredFormError);
        }

        const response = await fetch("/api/paypal/create-order", {
          body: JSON.stringify({
            currency: currentPayment.currency,
            depositAmount: currentPayment.depositAmount,
            groupSize: currentPayment.groupSize,
            packageId: currentPackage.id,
            packageName: currentPackage.title,
            totalAmount: currentPayment.totalAmount
          }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        });

        const data = (await response.json()) as PayPalCreateOrderResponse;

        if (!response.ok || !data.id) {
          throw new Error(data.error || "Could not start PayPal payment.");
        }

        return data.id;
      },
      onApprove: async (data) => {
        const orderId = data.orderID;
        const currentPayment = latestPaymentSummaryRef.current;
        const depositLabel = currentPayment ? formatPaymentAmount(currentPayment.depositAmount) : "30% deposit";

        if (!orderId) {
          setPaypalStatus("error");
          setPaypalMessage("PayPal returned no order ID. Please send the booking request directly.");
          return;
        }

        setPaypalStatus("submitting");
        setPaypalMessage("Verifying PayPal deposit payment...");

        const captureResponse = await fetch("/api/paypal/capture-order", {
          body: JSON.stringify({ orderId }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        });

        const capture = (await captureResponse.json()) as PayPalCaptureOrderResponse;

        if (!captureResponse.ok) {
          if (isMounted) {
            setPaypalStatus("error");
            setPaypalMessage(capture.error || "Could not verify the PayPal payment.");
          }
          return;
        }

        trackEvent("paypal_deposit_success", {
          capture_id: capture.captureId,
          currency: capture.currency,
          deposit_amount: capture.depositAmount,
          order_id: capture.orderId || orderId,
          package_id: latestSelectedPackageRef.current?.id,
          total_amount: capture.totalAmount
        });

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
        const requiredFormError = getRequiredFormError(currentForm, t.requiredError);

        if (requiredFormError || !currentPackage || !currentPayment) {
          setPaypalStatus("error");
          setPaypalMessage(requiredFormError || t.requiredError);
          return actions.reject();
        }

        trackEvent("paypal_deposit_start", {
          currency: currentPayment.currency,
          deposit_amount: currentPayment.depositAmount,
          group_size: currentPayment.groupSize,
          package_id: currentPackage.id,
          package_name: currentPackage.title,
          payment_mode: "checkout"
        });
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
  }, [paypalScriptReady, submitBookingRequest, t.requiredError]);

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form-header">
        <span className="section-kicker">{t.requestKicker}</span>
        <h2>{t.requestHeading}</h2>
        <p>{t.requestDesc}</p>
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
          <span>{t.fullName}</span>
          <input
            type="text"
            value={form.fullName}
            onChange={updateField("fullName")}
            autoComplete="name"
            required
          />
        </label>

        <label className="booking-field">
          <span>{t.country}</span>
          <input
            type="text"
            value={form.country}
            onChange={updateField("country")}
            autoComplete="country-name"
          />
        </label>

        <label className="booking-field">
          <span>{t.email}</span>
          <input
            type="email"
            value={form.email}
            onChange={updateField("email")}
            autoComplete="email"
            placeholder="name@example.com"
          />
          <small>{t.emailHelp}</small>
        </label>

        <label className="booking-field">
          <span>{t.whatsapp}</span>
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
          <small>{t.whatsappHelp}</small>
        </label>

        <label className="booking-field booking-field-full">
          <span>{t.package}</span>
          <select value={form.packageId} onChange={updateField("packageId")} required>
            <option value="">{t.choosePackage}</option>
            {packages.map((bookingPackage) => (
              <option key={bookingPackage.id} value={bookingPackage.id}>
                {bookingPackage.title} - {bookingPackage.duration} - {bookingPackage.price}
              </option>
            ))}
          </select>
          {selectedPackage ? <small>{selectedPackage.summary}</small> : null}
        </label>

        <label className="booking-field">
          <span>{t.startDate}</span>
          <input type="date" value={form.startDate} onChange={updateField("startDate")} required />
        </label>

        <label className="booking-field">
          <span>{t.groupSize}</span>
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
          <span>{t.transport}</span>
          <select value={form.transport} onChange={updateField("transport")}>
            <option value="">{t.chooseOption}</option>
            <option value="No transport needed">{t.transportOptions.none}</option>
            <option value="Pickup from Medan / KNO">{t.transportOptions.pickup}</option>
            <option value="Still deciding">{t.transportOptions.deciding}</option>
          </select>
        </label>

        <label className="booking-field">
          <span>{t.accommodation}</span>
          <select value={form.accommodation} onChange={updateField("accommodation")}>
            <option value="">{t.chooseOption}</option>
            <option value="Already booked">{t.accommodationOptions.booked}</option>
            <option value="Need help finding a place">{t.accommodationOptions.help}</option>
            <option value="Not sure yet">{t.accommodationOptions.notSure}</option>
          </select>
        </label>

        <label className="booking-field booking-field-full">
          <span>{t.notes}</span>
          <textarea
            value={form.notes}
            onChange={updateField("notes")}
            placeholder={t.notesPlaceholder}
          />
        </label>
      </div>

      {selectedPackage ? (
        <section className="paypal-deposit-section" aria-labelledby="paypal-deposit-title">
          <div className="paypal-deposit-header">
            <span className="section-kicker">
              PayPal {paypalPaymentMode === "checkout" ? paypalEnvironment : "manual"}
            </span>
            <h3 id="paypal-deposit-title">{t.payDeposit}</h3>
            <p>{t.depositSub}</p>
          </div>

          <div className="payment-summary" aria-label="Payment summary">
            <div>
              <span>{t.packageTotal}</span>
              <strong>
                {paymentSummary ? formatPaymentAmount(paymentSummary.totalAmount) : t.addGroupSize}
              </strong>
            </div>
            <div>
              <span>{t.depositDue}</span>
              <strong>
                {paymentSummary ? formatPaymentAmount(paymentSummary.depositAmount) : t.depositPercentage}
              </strong>
            </div>
          </div>

          <p className="paypal-deposit-note">
            <ShieldCheck size={14} />
            {t.totalCalculation(selectedPackage.price)}
          </p>

          {paypalPaymentMode === "manual" ? (
            <div className="manual-paypal-box">
              <span>{t.manualDepositTo}</span>
              <strong>{paypalManualEmail}</strong>
              <p>{t.manualInstructions}</p>
              <a
                className="secondary-button dark"
                href="https://www.paypal.com/myaccount/transfer/send"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("paypal_deposit_start", {
                    currency: paymentSummary?.currency,
                    deposit_amount: paymentSummary?.depositAmount,
                    group_size: paymentSummary?.groupSize,
                    package_id: selectedPackage.id,
                    package_name: selectedPackage.title,
                    payment_mode: "manual"
                  })
                }
              >
                {t.openPaypal}
              </a>
            </div>
          ) : paypalClientId ? (
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
          {status === "submitting" ? t.sending : t.sendRequest}
        </button>
        <a
          className="secondary-button dark"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackEvent("whatsapp_click", {
              group_size: groupSizeForAnalytics(form.groupSize),
              package_id: form.packageId,
              package_name: selectedPackage?.title,
              source: "booking_form"
            })
          }
        >
          <MessageCircle size={18} />
          {t.whatsappBtn}
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
        {t.noBookingConfirmed}
      </p>
    </form>
  );
}
