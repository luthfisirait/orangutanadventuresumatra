import { siteText, trekBase, trekMetaLocalized, type Locale, type TrekId } from "../site-content";
import { siteName } from "../seo";

export type BookingPackage = {
  id: TrekId;
  title: string;
  duration: string;
  intensity: string;
  price: string;
  summary: string;
};

export function getBookingPackages(locale: Locale = "en"): BookingPackage[] {
  return trekBase.map((trek) => {
    const info = siteText[locale].treks[trek.id];
    const meta = trekMetaLocalized[locale][trek.id];
    return {
      id: trek.id,
      title: info.title,
      duration: meta.duration,
      intensity: meta.intensity,
      price: trek.price,
      summary: info.highlights.join(" • ")
    };
  });
}

export const bookingPackages: BookingPackage[] = getBookingPackages("en");

export type BookingFlowItem = {
  step: string;
  title: string;
  text: string;
};

export type BookingPageContent = {
  pageTitle: string;
  pageDescription: string;
  heroKicker: string;
  heroHeading: string;
  heroCta: string;
  whatsapp: string;
  strip: [string, string, string, string];
  reviewHeading: string;
  checklistHeading: string;
  flowHeading: string;
  notesHeading: string;
  supportLinks: {
    essentialInfo: { text: string; linkText: string; href: string };
    treks: { text: string; linkText: string; href: string };
    payment: { text: string; linkText: string; href: string };
  };
  checklist: string[];
  flow: BookingFlowItem[];
  assurances: string[];
};

export const bookingContentByLocale: Record<Locale, BookingPageContent> = {
  en: {
    pageTitle: `Book a Bukit Lawang Orangutan Trek | ${siteName}`,
    pageDescription:
      "Request availability for Bukit Lawang orangutan trekking, private jungle tours, rafting, and transport help. Share your dates and group size, then we confirm by email or WhatsApp.",
    heroKicker: "Booking",
    heroHeading: "Book your Bukit Lawang orangutan trek",
    heroCta: "Go to form",
    whatsapp: "WhatsApp",
    strip: [
      "Request goes directly to our inbox",
      "Works for solo travelers, couples, and groups",
      "Deposit details shared after availability check",
      "No automatic confirmation before availability check"
    ],
    reviewHeading: "Guest confidence before you book",
    checklistHeading: "What to include",
    flowHeading: "How the booking works",
    notesHeading: "Important notes",
    supportLinks: {
      essentialInfo: {
        text: "Need travel prep first?",
        linkText: "Read the essential information page",
        href: "/essential-information"
      },
      treks: {
        text: "Want to compare package details first?",
        linkText: "Browse all trek details",
        href: "/treks"
      },
      payment: {
        text: "Have payment questions?",
        linkText: "Read the payment and deposit information",
        href: "/payment-and-deposit"
      }
    },
    checklist: [
      "Preferred trek or activity",
      "Travel date and group size",
      "Arrival city or transport help",
      "Food, fitness, or room notes"
    ],
    flow: [
      {
        step: "1",
        title: "Choose your trek",
        text: "Pick the package that matches your time, fitness, and preferred pace in the forest."
      },
      {
        step: "2",
        title: "Share your dates",
        text: "Add your preferred start date, group size, and any transport or accommodation help."
      },
      {
        step: "3",
        title: "Send the request",
        text: "Submit the form on this page and the request goes directly to our email inbox."
      },
      {
        step: "4",
        title: "Pay deposit and prepare",
        text: "Pay only the 30% deposit manually by PayPal, then receive final confirmation and trip notes."
      }
    ],
    assurances: [
      "We contact you after checking guide and date availability.",
      "The booking form shows the 30% PayPal deposit based on package price and group size.",
      "Send the PayPal payment reference by WhatsApp or include it in your booking notes.",
      "The final balance is paid in cash when you meet the team, or 2 days before departure after email confirmation."
    ]
  },
  de: {
    pageTitle: `Bukit Lawang Orang-Utan Trekking buchen | ${siteName}`,
    pageDescription:
      "Verfügbarkeit für Orang-Utan-Trekking in Bukit Lawang, private Dschungeltouren, Rafting und Transfer anfragen. Teilen Sie Reisedaten und Gruppengröße mit – wir bestätigen per E-Mail oder WhatsApp.",
    heroKicker: "Buchung",
    heroHeading: "Buchen Sie Ihr Bukit Lawang Orang-Utan Trekking",
    heroCta: "Zum Formular",
    whatsapp: "WhatsApp",
    strip: [
      "Anfrage geht direkt in unseren Posteingang",
      "Für Alleinreisende, Paare und Gruppen",
      "Anzahlungsdetails nach Verfügbarkeitsprüfung",
      "Keine automatische Abbuchung vor Bestätigung"
    ],
    reviewHeading: "Gästeerfahrungen vor Ihrer Buchung",
    checklistHeading: "Was Sie angeben sollten",
    flowHeading: "So funktioniert die Buchung",
    notesHeading: "Wichtige Hinweise",
    supportLinks: {
      essentialInfo: {
        text: "Zuerst Reisevorbereitung prüfen?",
        linkText: "Wichtige Informationen lesen",
        href: "/de/essential-information"
      },
      treks: {
        text: "Touren vergleichen?",
        linkText: "Alle Trekking-Details ansehen",
        href: "/de/treks"
      },
      payment: {
        text: "Fragen zur Zahlung?",
        linkText: "Zahlungs- und Anzahlungsinfos lesen",
        href: "/payment-and-deposit"
      }
    },
    checklist: [
      "Gewünschte Tour oder Aktivität",
      "Reisedatum und Gruppengröße",
      "Ankunftsort oder Transferbedarf",
      "Ernährung, Fitness oder Unterkunftsnotizen"
    ],
    flow: [
      {
        step: "1",
        title: "Tour auswählen",
        text: "Wählen Sie das Paket, das zu Ihrer Zeit, Fitness und Ihrem Tempo im Regenwald passt."
      },
      {
        step: "2",
        title: "Reisedaten mitteilen",
        text: "Geben Sie Wunschtermin, Gruppengröße und eventuellen Transfer- oder Übernachtungsbedarf an."
      },
      {
        step: "3",
        title: "Anfrage absenden",
        text: "Senden Sie das Formular ab – Ihre Nachricht erreicht direkt unser E-Mail-Postfach."
      },
      {
        step: "4",
        title: "Anzahlung & Vorbereitung",
        text: "Zahlen Sie 30 % Anzahlung via PayPal und erhalten Sie die Bestätigung mit Reisehinweisen."
      }
    ],
    assurances: [
      "Wir antworten Ihnen nach Prüfung von Guide- und Terminverfügbarkeit.",
      "Das Formular berechnet die 30 % PayPal-Anzahlung basierend auf Paketpreis und Gruppengröße.",
      "Senden Sie den PayPal-Transaktionscode per WhatsApp oder vermerken Sie ihn im Formular.",
      "Der Restbetrag wird bei Ankunft in bar oder 2 Tage vor Abreise nach E-Mail-Bestätigung beglichen."
    ]
  },
  fr: {
    pageTitle: `Réserver un trek orang-outan à Bukit Lawang | ${siteName}`,
    pageDescription:
      "Demandez la disponibilité pour un trek orang-outan à Bukit Lawang, circuit privé, rafting et transfert. Indiquez vos dates et la taille du groupe, confirmation rapide par e-mail ou WhatsApp.",
    heroKicker: "Réservation",
    heroHeading: "Réservez votre trek orang-outan à Bukit Lawang",
    heroCta: "Aller au formulaire",
    whatsapp: "WhatsApp",
    strip: [
      "La demande arrive directement dans notre boîte mail",
      "Idéal pour solos, couples et groupes",
      "Acompte communiqué après vérification de disponibilité",
      "Aucune confirmation automatique avant vérification"
    ],
    reviewHeading: "Avis et confiance de nos voyageurs",
    checklistHeading: "Ce qu'il faut préciser",
    flowHeading: "Comment se passe la réservation",
    notesHeading: "Remarques importantes",
    supportLinks: {
      essentialInfo: {
        text: "Besoin de préparer votre voyage ?",
        linkText: "Lire les informations essentielles",
        href: "/fr/essential-information"
      },
      treks: {
        text: "Envie de comparer les formules ?",
        linkText: "Voir le détail des treks",
        href: "/fr/treks"
      },
      payment: {
        text: "Questions sur le paiement ?",
        linkText: "Consulter les conditions de paiement",
        href: "/payment-and-deposit"
      }
    },
    checklist: [
      "Trek ou activité choisi(e)",
      "Date de début et taille du groupe",
      "Ville d'arrivée ou besoin de transfert",
      "Régime alimentaire, niveau de forme ou hébergement"
    ],
    flow: [
      {
        step: "1",
        title: "Choisissez votre trek",
        text: "Sélectionnez le circuit adapté à votre durée, votre forme physique et votre rythme."
      },
      {
        step: "2",
        title: "Indiquez vos dates",
        text: "Précisez votre date de départ, le nombre de personnes et vos besoins de transfert."
      },
      {
        step: "3",
        title: "Envoyez la demande",
        text: "Envoyez le formulaire, nous recevons directement votre message par e-mail."
      },
      {
        step: "4",
        title: "Acompte et préparation",
        text: "Réglez l'acompte de 30 % par PayPal, puis recevez votre confirmation avec les conseils de voyage."
      }
    ],
    assurances: [
      "Nous vous contactons après avoir vérifié la disponibilité des guides et des dates.",
      "Le formulaire calcule l'acompte de 30 % par PayPal selon le prix et le nombre de participants.",
      "Transmettez la référence PayPal par WhatsApp ou ajoutez-la dans vos notes de réservation.",
      "Le solde restant est réglé sur place en espèces ou 2 jours avant le départ après confirmation par e-mail."
    ]
  },
  nl: {
    pageTitle: `Bukit Lawang Orang-oetan Trekking Boeken | ${siteName}`,
    pageDescription:
      "Vraag beschikbaarheid aan voor orang-oetan trekking in Bukit Lawang, privétours, raften en vervoer. Deel uw reisdata en groepsgrootte, wij bevestigen per e-mail of WhatsApp.",
    heroKicker: "Reservering",
    heroHeading: "Boek uw Bukit Lawang orang-oetan trekking",
    heroCta: "Naar het formulier",
    whatsapp: "WhatsApp",
    strip: [
      "Aanvraag komt rechtstreeks in onze inbox",
      "Geschikt voor soloreizigers, stellen en groepen",
      "Aanbetalingsgegevens na controle van beschikbaarheid",
      "Geen automatische boeking vóór verificatie"
    ],
    reviewHeading: "Ervaringen van reizigers vóór u boekt",
    checklistHeading: "Wat u doorgeeft",
    flowHeading: "Hoe het boeken werkt",
    notesHeading: "Belangrijke informatie",
    supportLinks: {
      essentialInfo: {
        text: "Eerst uw reis voorbereiden?",
        linkText: "Lees de essentiële informatie",
        href: "/nl/essential-information"
      },
      treks: {
        text: "Wilt u pakketten vergelijken?",
        linkText: "Bekijk alle trek-details",
        href: "/nl/treks"
      },
      payment: {
        text: "Vragen over betalen?",
        linkText: "Lees informatie over betaling en aanbetaling",
        href: "/payment-and-deposit"
      }
    },
    checklist: [
      "Gewenste trek of activiteit",
      "Reisdatum en groepsgrootte",
      "Aankomstlocatie of transferwens",
      "Dieetwensen, conditie of accommodatie-opmerkingen"
    ],
    flow: [
      {
        step: "1",
        title: "Kies uw trekking",
        text: "Kies het pakket dat past bij uw beschikbare tijd, conditie en gewenste tempo."
      },
      {
        step: "2",
        title: "Deel uw reisdata",
        text: "Geef uw startdatum, aantal deelnemers en eventueel vervoer of verblijf door."
      },
      {
        step: "3",
        title: "Verstuur de aanvraag",
        text: "Verstuur het formulier en uw aanvraag komt direct in onze e-mailbox binnen."
      },
      {
        step: "4",
        title: "Aanbetaling & voorbereiding",
        text: "Betaal 30% aanbetaling via PayPal en ontvang de definitieve bevestiging met praktische tips."
      }
    ],
    assurances: [
      "Wij nemen contact op na controle van gids- en datumbeschikbaarheid.",
      "Het formulier toont de 30% PayPal-aanbetaling op basis van pakketprijs en groepsgrootte.",
      "Stuur de PayPal-referentie via WhatsApp of vermeld deze in de reserveringsnotities.",
      "Het resterende saldo wordt bij aankomst contant voldaan, of 2 dagen voor vertrek na e-mailbevestiging."
    ]
  },
  zh: {
    pageTitle: `预订武吉拉旺红毛猩猩徒步行程 | ${siteName}`,
    pageDescription:
      "查询武吉拉旺红毛猩猩生态徒步、私人定制团、轮胎漂流及接送机档期。填写出行日期与人数，我们将通过邮件或WhatsApp为您快速确认。",
    heroKicker: "在线预订",
    heroHeading: "预订您的武吉拉旺红毛猩猩雨林探险",
    heroCta: "前往预订表格",
    whatsapp: "WhatsApp咨询",
    strip: [
      "预订请求直接发送至我们团队邮箱",
      "适合独行旅客、情侣及家庭亲友团",
      "确认向导档期后方通知支付定金",
      "未核实档期前绝不产生任何扣费"
    ],
    reviewHeading: "往期旅行者的真实信任评价",
    checklistHeading: "您需要提供的信息",
    flowHeading: "预订流程说明",
    notesHeading: "重要预订须知",
    supportLinks: {
      essentialInfo: {
        text: "需要提前了解出行准备？",
        linkText: "阅读出行必备须知",
        href: "/zh/essential-information"
      },
      treks: {
        text: "想要对比各条路线详情？",
        linkText: "浏览全部徒步路线",
        href: "/zh/treks"
      },
      payment: {
        text: "对付款和定金有疑问？",
        linkText: "阅读付款与定金详细说明",
        href: "/payment-and-deposit"
      }
    },
    checklist: [
      "心仪的徒步路线或体验活动",
      "计划出行日期与参与人数",
      "到达城市或是否需要接送服务",
      "特殊饮食习惯、身体状况或住宿要求"
    ],
    flow: [
      {
        step: "1",
        title: "选择徒步路线",
        text: "挑选符合您的出行时间、体能状况及热带丛林探索偏好的路线。"
      },
      {
        step: "2",
        title: "填写出行信息",
        text: "注明出发日期、出行人数以及是否需要棉兰交通接送或客栈安排。"
      },
      {
        step: "3",
        title: "提交预订表格",
        text: "在页面提交表格，向导团队将第一时间收到您的完整预约信息。"
      },
      {
        step: "4",
        title: "支付定金与行前准备",
        text: "通过PayPal安全支付30%定金，随后即可获取正式出行确认函与行前建议。"
      }
    ],
    assurances: [
      "我们将在核对向导档期与国家公园名额后主动与您联系。",
      "表格会根据所选路线价格和团队人数自动计算30%的PayPal定金金额。",
      "支付完成后，请通过WhatsApp发送PayPal交易号，或在备注中写明。",
      "余款可在抵达武吉拉旺与向导会合时支付现金，或在出发前2天通过邮件确认后付清。"
    ]
  },
  id: {
    pageTitle: `Pesan Trekking Orangutan Bukit Lawang | ${siteName}`,
    pageDescription:
      "Cek ketersediaan trekking orangutan di Bukit Lawang, paket tur hutan privat, arung jeram ban, dan antar-jemput bandara. Kirim tanggal dan jumlah rombongan Anda – kami konfirmasi via WhatsApp atau Email.",
    heroKicker: "Pemesanan",
    heroHeading: "Pesan Petualangan Trekking Orangutan Bukit Lawang Anda",
    heroCta: "Buka Formulir",
    whatsapp: "WhatsApp",
    strip: [
      "Permintaan langsung masuk ke tim pemandu lokal",
      "Cocok untuk solo traveler, pasangan & keluarga",
      "Deposit diinformasikan setelah ketersediaan diverifikasi",
      "Tanpa biaya tersembunyi atau pemotongan otomatis"
    ],
    reviewHeading: "Ulasan Terverifikasi dari Para Tamu",
    checklistHeading: "Informasi yang Perlu Disiapkan",
    flowHeading: "Tahapan Alur Pemesanan",
    notesHeading: "Catatan Penting Perjalanan",
    supportLinks: {
      essentialInfo: {
        text: "Ingin membaca persiapan perjalanan terlebih dahulu?",
        linkText: "Baca halaman informasi penting",
        href: "/id/essential-information"
      },
      treks: {
        text: "Ingin membandingkan rute dan fasilitas paket?",
        linkText: "Lihat semua rincian paket trek",
        href: "/id/treks"
      },
      payment: {
        text: "Ada pertanyaan tentang sistem pembayaran?",
        linkText: "Baca informasi pembayaran dan deposit",
        href: "/payment-and-deposit"
      }
    },
    checklist: [
      "Pilihan paket trek atau aktivitas yang diinginkan",
      "Tanggal rencana perjalanan & jumlah orang",
      "Kota kedatangan atau kebutuhan mobil antar-jemput",
      "Catatan makanan khusus, kebugaran, atau kamar"
    ],
    flow: [
      {
        step: "1",
        title: "Pilih paket trek Anda",
        text: "Pilih paket yang paling pas dengan waktu liburan, stamina, dan selera petualangan rimba Anda."
      },
      {
        step: "2",
        title: "Beri tahu jadwal Anda",
        text: "Tuliskan tanggal keberangkatan, jumlah peserta, dan bantuan transportasi atau hotel bila diperlukan."
      },
      {
        step: "3",
        title: "Kirim formulir",
        text: "Kirimkan formulir pemesanan di halaman ini dan data Anda akan langsung diterima oleh pemandu kami."
      },
      {
        step: "4",
        title: "Deposit & persiapan",
        text: "Bayar deposit 30% untuk mengamankan slot pemandu, lalu dapatkan konfirmasi resmi dan tips persiapan."
      }
    ],
    assurances: [
      "Kami akan langsung menghubungi Anda setelah memeriksa jadwal pemandu dan izin taman nasional.",
      "Formulir secara otomatis menghitung deposit 30% berdasarkan harga paket dan jumlah peserta.",
      "Kirimkan bukti atau referensi pembayaran via WhatsApp atau cantumkan pada catatan formulir.",
      "Pelunasan sisa pembayaran dapat dibayar tunai saat bertemu pemandu di Bukit Lawang atau sebelum keberangkatan."
    ]
  }
};

export function getBookingPageContent(locale: Locale = "en"): BookingPageContent {
  return bookingContentByLocale[locale] ?? bookingContentByLocale.en;
}

export const bookingFlow = bookingContentByLocale.en.flow;
export const bookingChecklist = bookingContentByLocale.en.checklist;
export const bookingAssurances = bookingContentByLocale.en.assurances;
