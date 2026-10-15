/*
THESIS: Forest Transect turns trek comparison into one legible journey and refuses the generic eco-tour hero plus card grid.
OWN-WORLD: Documentary forest photography, black survey rules, mist surfaces, and chartreuse, river-blue, amber, and russet field signals.
STORY: Arrive at Bukit Lawang, choose a route, understand ethical practice, meet the guide, then book directly.
FIRST VIEWPORT: A full-bleed jungle approach holds the offer on the left and a three-station route rail on the right; the booking strip remains visible at the fold.
FORM: Rainforest survey-plot system, sixth grounded direction, staged as a continuous trail transect; seed 95bdd5bb.
*/
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  HeartHandshake,
  Leaf,
  Mail,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Sparkles,
  Star,
  TentTree,
  Waves,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { TrackedLink } from "./components/tracked-link";
import { blogIndexPath, blogPostLocale, blogPostPath } from "./blog/blog-routing";
import {
  galleryItems,
  guideBase,
  localeNames,
  locales,
  siteText,
  trekBase,
  trekMetaLocalized,
  type GuideId,
  type Locale,
  type TrekId
} from "./site-content";
import {
  absoluteUrl,
  brandAlternateNames,
  coreSearchPhrases,
  siteName,
  siteUrl
} from "./seo";
import {
  blogPosts,
  brandSameAsUrls,
  contactEmail,
  brandInstagramHandle,
  brandInstagramUrl,
  googleKnowledgeGraphId,
  googleMapsUrl,
  impactVision,
  instagramUrl,
  packageActivityOverview,
  whatsappNumber,
  type BlogPost
} from "./travel-content";
import { trekDetailHref } from "./trek-details";

const navItems = [
  { key: "treks", href: "#treks" },
  { key: "experience", href: "#experience" },
  { key: "guides", href: "#guides" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" }
] as const;

function whatsappUrlFor(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const trekCategoryIds = ["classic", "private", "activities"] as const;
type TrekCategory = (typeof trekCategoryIds)[number];

const featuredHomeBlogSlugs = [
  "bukit-lawang-vs-tanjung-puting-orangutans",
  "sumatra-orangutan-trekking-cost-price-guide-2026",
  "1-day-vs-2-day-vs-3-day-bukit-lawang-trek",
  "is-bukit-lawang-safe-solo-female-travelers",
  "medan-airport-to-bukit-lawang-transport-options"
] as const;

const intentSectionCopy = {
  en: {
    kicker: "Plan by trip type",
    heading: "Choose the page that matches your time and travel style.",
    toursTitle: "Sumatra orangutan tours",
    toursDesc: "Compare Bukit Lawang routes by duration, camp nights, effort, and price.",
    compareTitle: "Compare Bukit Lawang trek packages",
    compareDesc: "Review prices, duration, fitness, camp nights, and the best fit for your trip.",
    threeDayTitle: "3-day Bukit Lawang orangutan trek",
    threeDayDesc: "See the camp flow, river return, and booking notes."
  },
  de: {
    kicker: "Reise nach Typ planen",
    heading: "Wähle die Seite, die zu deiner Zeit und deinem Reisestil passt.",
    toursTitle: "Sumatra Orang-Utan Touren",
    toursDesc: "Vergleiche Bukit Lawang Routen nach Dauer, Camp-Nächten, Anstrengung und Preisen.",
    compareTitle: "Bukit Lawang Trekking-Pakete vergleichen",
    compareDesc: "Preise, Fitnesslevel, Fluss-Camps und den besten Trek für deine Reise im Überblick.",
    threeDayTitle: "3-Tage-Orang-Utan-Trek in Bukit Lawang",
    threeDayDesc: "Erfahre alles über Camp-Ablauf, Rafting-Rückkehr und Buchungshinweise."
  },
  fr: {
    kicker: "Planifier selon votre style de voyage",
    heading: "Choisissez la formule qui correspond à votre temps et à vos envies.",
    toursTitle: "Circuits orang-outan à Sumatra",
    toursDesc: "Comparez les itinéraires de Bukit Lawang par durée, nuits en camp, effort et prix.",
    compareTitle: "Comparer les forfaits de trek à Bukit Lawang",
    compareDesc: "Consultez les tarifs, la condition physique requise et le trek idéal pour votre séjour.",
    threeDayTitle: "Trek orang-outan de 3 jours à Bukit Lawang",
    threeDayDesc: "Découvrez le bivouac en rivière, le retour en tube rafting et les modalités de réservation."
  },
  nl: {
    kicker: "Plan op reistype",
    heading: "Kies de pagina die past bij jouw beschikbare tijd en reisstijl.",
    toursTitle: "Orang-oetan tours op Sumatra",
    toursDesc: "Vergelijk Bukit Lawang routes op duur, nachten in de jungle, zwaarte en prijs.",
    compareTitle: "Vergelijk Bukit Lawang trekkingspakketten",
    compareDesc: "Bekijk prijzen, conditie, riviercamps en de beste optie voor jouw reis.",
    threeDayTitle: "3-daagse orang-oetan trek in Bukit Lawang",
    threeDayDesc: "Ontdek de jungle-overnachtingen, terugkeer per tube-rafting en praktische tips."
  },
  zh: {
    kicker: "按出行需求规划",
    heading: "选择符合您旅行时间与风格的专属页面。",
    toursTitle: "苏门答腊红毛猩猩徒步",
    toursDesc: "按行程天数、露营晚数、体力消耗及预算对比武吉拉旺徒步路线。",
    compareTitle: "武吉拉旺徒步套餐对比",
    compareDesc: "详细查看价格、耗时、体能要求、河畔露营点及最适合您的方案。",
    threeDayTitle: "3天2夜武吉拉旺红毛猩猩徒步",
    threeDayDesc: "查看营地安排、轮胎漂流返程及预订须知。"
  },
  id: {
    kicker: "Rencanakan sesuai gaya perjalanan",
    heading: "Pilih halaman yang paling sesuai dengan waktu dan preferensi liburan Anda.",
    toursTitle: "Tur Orangutan Sumatra",
    toursDesc: "Bandingkan rute Bukit Lawang berdasarkan durasi, malam berkemah, tingkat tantangan, dan harga.",
    compareTitle: "Bandingkan Paket Trekking Bukit Lawang",
    compareDesc: "Lihat rincian harga, tingkat kebugaran, kemah tepi sungai, dan pilihan terbaik untuk perjalanan Anda.",
    threeDayTitle: "Trekking Orangutan 3 Hari Bukit Lawang",
    threeDayDesc: "Pelajari alur kemah di alam liar, arung jeram ban, dan ketentuan pemesanan."
  }
} as const;

const brandTitle = (
  <>
    Orangutan <wbr />
    Adventure <wbr />
    Sumatra
  </>
);

type PackageActivityContent = {
  kicker: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  steps: ReadonlyArray<{ label: string; title: string; text: string }>;
  notes: ReadonlyArray<string>;
};

type ImpactContent = {
  kicker: string;
  title: string;
  text: string;
  pillars: ReadonlyArray<{ title: string; text: string }>;
};

const localizedPackageActivity: Partial<Record<Locale, PackageActivityContent>> = {
  fr: {
    ...packageActivityOverview,
    kicker: "Détails du forfait",
    title: "À quoi ressemble un trek classique de 3 jours à Bukit Lawang",
    intro:
      "Ce déroulé suit un trek orang-outan typique de 3 jours: observation calme de la faune, repas en forêt, nuits en camp au bord de la rivière et retour en tube rafting quand les conditions sont sûres. L'itinéraire final dépend toujours de la météo, du niveau du groupe, de la rivière et des règles du parc.",
    steps: [
      {
        label: "Jour 1",
        title: "Départ de Bukit Lawang, habitat des orangs-outans, premier camp",
        text:
          "Retrouve ton guide le matin, vérifie l'eau et les chaussures, puis entre dans la forêt à un rythme tranquille. La journée se concentre sur l'observation respectueuse des animaux, les plantes, les pauses fruits, le déjeuner en jungle et l'arrivée dans un camp simple au bord de l'eau."
      },
      {
        label: "Jour 2",
        title: "Forêt plus profonde, pauses rivière, deuxième nuit",
        text:
          "Le groupe avance vers des zones plus calmes avec plus de temps pour les singes de Thomas, gibbons, macaques, oiseaux, plantes médicinales et sons de la forêt. Attends-toi à des montées, de la boue en saison humide, un déjeuner frais et un second camp près de l'eau si les conditions le permettent."
      },
      {
        label: "Jour 3",
        title: "Dernière marche et retour en tube rafting",
        text:
          "Après le petit-déjeuner, le groupe fait une marche plus courte ou profite de la rivière avant de revenir vers Bukit Lawang en tube rafting traditionnel quand il est inclus et que le niveau de l'eau est sûr."
      }
    ],
    notes: [
      "Les observations d'orangs-outans sauvages ne sont jamais garanties et ne doivent jamais être forcées.",
      "Les repas sont simples et frais: fruits, riz, légumes, oeufs, poisson ou poulet, thé et café.",
      "Confirme les permis, le rafting, l'hébergement, le transport et les inclusions finales avant de payer un acompte."
    ]
  },
  de: {
    ...packageActivityOverview,
    kicker: "Ablauf der Tour",
    title: "Wie sich ein klassischer 3-Tage-Trek in Bukit Lawang anfühlt",
    intro:
      "Dieser Ablauf zeigt einen typischen 3-Tage-Orang-Utan-Trek: ruhige Tierbeobachtung, Mahlzeiten im Wald, Übernachtungen im Flusscamp und die traditionelle Rückkehr per Tube-Rafting. Die genaue Route richtet sich nach Wetter, Fitness der Gruppe, Wasserstand und Parkvorgaben.",
    steps: [
      {
        label: "Tag 1",
        title: "Start in Bukit Lawang, Orang-Utan-Lebensraum, erstes Camp",
        text:
          "Morgens triffst du deinen Guide, überprüfst Wasser und Schuhe und startest in gemütlichem Tempo in den Regenwald. Der erste Tag widmet sich respektvoller Tierbeobachtung, Pflanzenkunde, frischen Obstpausen, Mittagessen im Dschungel und der Ankunft im einfachen Flusscamp."
      },
      {
        label: "Tag 2",
        title: "Tiefer in den Urwald, Flusspausen, zweite Nacht",
        text:
          "Es geht weiter in ruhigere Dschungelabschnitte mit mehr Zeit für Thomas-Languren, Gibbons, Makaken, Vögel und Heilpflanzen. Freu dich auf moderate Anstiege, Regenwaldpfade, frisches Essen und ein zweites Camp am Fluss, wenn die Bedingungen passen."
      },
      {
        label: "Tag 3",
        title: "Morgenwanderung und Rückkehr per Tube-Rafting",
        text:
          "Nach dem Frühstück folgt eine kürzere Schlussetappe oder Entspannung am Flussufer, bevor es bei sicheren Wasserständen per traditionellem Tube-Rafting zurück nach Bukit Lawang geht."
      }
    ],
    notes: [
      "Sichtungen von wilden Orang-Utans sind nie garantiert und werden niemals erzwungen.",
      "Das Essen ist frisch, einfach und für den Trail zubereitet: Obst, Reis, Gemüse, Eier, Fisch oder Hühnchen, Tee und Kaffee.",
      "Prüfe aktuelle Nationalpark-Regeln, Rafting-Bedingungen, Unterkunft und Transfer vor der Anzahlung."
    ]
  },
  nl: {
    ...packageActivityOverview,
    kicker: "Programmadetails",
    title: "Hoe een klassieke 3-daagse Bukit Lawang trek eruitziet",
    intro:
      "Het onderstaande overzicht volgt een typische 3-daagse orang-oetan trekking: rustig wild spotten, maaltijden in het bos, kamperen aan de rivier en terugkeren per tube-rafting. De route kan variëren op basis van weer, conditie, rivierstand en parkrichtlijnen.",
    steps: [
      {
        label: "Dag 1",
        title: "Vertrek vanuit Bukit Lawang, orang-oetan leefgebied, eerste kamp",
        text:
          "Ontmoet 's ochtends je gids, controleer water en schoenen en wandel op rustig tempo het regenwoud in. De eerste dag staat in het teken van respectvol wild spotten, inheemse planten, fruitpauzes, lunch in de jungle en aankomst in een eenvoudig rivierkamp."
      },
      {
        label: "Dag 2",
        title: "Dieper het woud in, rivierpauzes, tweede overnachting",
        text:
          "Trek door naar rustigere delen van de jungle met extra tijd voor Thomas-bladapen, gibbons, makaken, vogels en jungle-geluiden. Verwacht lichte klimmetjes, bospaden, verse lunch en een tweede kamp aan het water als de omstandigheden het toelaten."
      },
      {
        label: "Dag 3",
        title: "Ochtendwandeling en traditionele tube-rafting terugkeer",
        text:
          "Wandel na het ontbijt een kortere slotroute of ontspan bij de rivier voordat je per traditionele tube-raft terugkeert naar Bukit Lawang, mits de rivierstand veilig is."
      }
    ],
    notes: [
      "Waarnemingen van wilde orang-oetans kunnen nooit worden gegarandeerd en worden nooit geforceerd.",
      "Eten is eenvoudig, vers en voedzaam voor onderweg: fruit, rijst, groenten, eieren, vis of kip, thee en koffie.",
      "Controleer vergunningen, rafting-omstandigheden, accommodatie en vervoer voorafgaand aan je aanbetaling."
    ]
  },
  zh: {
    ...packageActivityOverview,
    kicker: "经典行程拆解",
    title: "武吉拉旺经典3天2夜雨林徒步全程概览",
    intro:
      "这条路线呈现了经典的3天红毛猩猩徒步过程：安静观察野生动物、雨林新鲜野餐、伴着流水声夜宿河畔营地，并在水流安全时体验传统轮胎漂流下山。最终行程会根据天气、队员体能、河道水情及国家公园规定微调。",
    steps: [
      {
        label: "第1天",
        title: "武吉拉旺出发，步入红毛猩猩家园，抵达第一营地",
        text:
          "清晨与向导会合，检查随身水和登山鞋，以舒适的节奏进入热带雨林。首日重心在于礼貌观察野生动物、辨识奇特植物、享用鲜切热带水果与雨林午餐，傍晚抵达溪流旁的天然营地休整。"
      },
      {
        label: "第2天",
        title: "向原始雨林更深处探索，河畔休憩，第二夜露营",
        text:
          "深入人迹更稀少的密林区域，有充裕时间静候托马斯叶猴、长臂猿、黑叶猴和各类热带鸟类。途中包含轻度攀爬、穿越古老树根小径，并在水边营地享用现煮热腾腾的印尼传统晚餐。"
      },
      {
        label: "第3天",
        title: "清晨林间漫步与传统轮胎漂流欢畅回程",
        text:
          "早餐后进行短途漫步或在清澈溪水中放松戏水，随后在向导协助下坐上安全扎结的大型轮胎，顺着清凉急流一路漂流返回武吉拉旺村庄。"
      }
    ],
    notes: [
      "野生红毛猩猩是完全自由的林间生灵，严禁强行靠近或人为诱喂。",
      "营地伙食新鲜地道且补充能量：丰富水果、米饭、蔬菜、鸡蛋、炒面、鱼/鸡肉、热茶与咖啡。",
      "请在行前确认公园许可、漂流天气条件、住宿及接送机安排。"
    ]
  },
  id: {
    ...packageActivityOverview,
    kicker: "Rincian aktivitas paket",
    title: "Gambaran pengalaman trekking klasik 3 hari di Bukit Lawang",
    intro:
      "Uraian di bawah ini menggambarkan alur trekking orangutan 3 hari yang umum: mengamati satwa dengan tenang, santap lezat di tengah rimba, bermalam di tenda tepi sungai, dan arung jeram ban kembali ke desa jika kondisi sungai aman. Rute akhir selalu menyesuaikan cuaca, kebugaran kelompok, debit air sungai, dan arahan pihak taman nasional.",
    steps: [
      {
        label: "Hari 1",
        title: "Titik awal Bukit Lawang, habitat orangutan, kemah pertama",
        text:
          "Bertemu pemandu di pagi hari, memeriksa perbekalan air dan sepatu, lalu melangkah santai memasuki hutan hujan tropis. Hari pertama difokuskan pada pengamatan satwa yang bertanggung jawab, pengenalan tanaman rimba, jeda buah segar, makan siang di hutan, dan tiba di perkemahan sederhana tepi sungai."
      },
      {
        label: "Hari 2",
        title: "Menjelajah lebih dalam ke hutan primer, sungai jernih, malam kedua",
        text:
          "Rombongan bergerak menuju area hutan yang lebih sunyi dengan waktu lebih leluasa mengamati monyet kedih (Thomas leaf monkey), owa, makaka, burung hutan, dan aneka tanaman obat tradisional. Bersiaplah untuk tanjakan bertahap, jalur hutan alami, makan siang segar, dan kemah kedua di tepi air jika kondisi mendukung."
      },
      {
        label: "Hari 3",
        title: "Trekking pagi dan keseruan pulang arung jeram ban",
        text:
          "Setelah sarapan, nikmati trekking santai rute pendek atau bersantai menikmati segarnya sungai sebelum meluncur kembali menuju Bukit Lawang dengan arung jeram ban tradisional (jungle tube rafting)."
      }
    ],
    notes: [
      "Perjumpaan dengan orangutan liar tidak pernah dijamin dan tidak boleh dipaksakan.",
      "Makanan disajikan segar, lezat, dan bernutrisi: aneka buah tropis, nasi, sayuran segar, telur, ayam atau ikan, teh dan kopi.",
      "Konfirmasikan izin resmi taman nasional, kondisi arung jeram, akomodasi, dan transportasi sebelum membayar deposit."
    ]
  }
};

const localizedImpactVision: Partial<Record<Locale, ImpactContent>> = {
  fr: {
    kicker: "Vision conservation",
    title: "Le voyage doit créer une vraie valeur pour la forêt et le village",
    text:
      "Chaque formule Orangutan Adventure Sumatra contribue directement au soutien de la conservation et aux moyens de subsistance locaux autour de Bukit Lawang. Notre approche est concrète : maintenir des guides locaux qualifiés, préserver l'habitat des orangs-outans et sensibiliser chaque voyageur aux règles d'un trek responsable.",
    pillars: [
      {
        title: "Protection de la forêt",
        text:
          "Soutien aux actions locales de conservation, guidage éthique à faible impact et respect strict des distances avec la faune sauvage."
      },
      {
        title: "Revenus locaux",
        text:
          "Les forfaits rémunèrent équitablement les guides certifiés, cuisiniers, chauffeurs, hébergements familiaux et commerces du village."
      },
      {
        title: "Engagement direct",
        text:
          "Chaque réservation finance directement les droits d'entrée et de conservation du parc national de Gunung Leuser ainsi que les patrouilles villageoises."
      }
    ]
  },
  de: {
    kicker: "Naturschutz-Vision",
    title: "Reisen soll echten Wert für den Wald und die Dorfgemeinschaft schaffen",
    text:
      "Jede Tour von Orangutan Adventure Sumatra unterstützt direkt den Schutz des Regenwaldes und das Einkommen der lokalen Gemeinschaft in Bukit Lawang. Unser Ziel ist praxisnah: erfahrene einheimische Guides fair entlohnen, den Druck auf den Urwald verringern und ethischen Wildtierschutz aktiv leben.",
    pillars: [
      {
        title: "Waldschutz",
        text:
          "Unterstützung lokaler Schutzmaßnahmen, umweltschonendes Guiding und konsequente Einhaltung der Verhaltensregeln im Lebensraum der Orang-Utans."
      },
      {
        title: "Lokale Existenzen",
        text:
          "Alle Touren sichern faire Einkommen für ortsansässige Guides, Köche, Fahrer, familiäre Gästehäuser und Dienstleistungen im Dorf."
      },
      {
        title: "Verlässliches Engagement",
        text:
          "Jede Buchung beinhaltet direkt die offiziellen Nationalpark-Permits für Gunung Leuser und unterstützt lokale Dorf-Patrouillen zum Waldschutz."
      }
    ]
  },
  nl: {
    kicker: "Natuurbehoud-visie",
    title: "Reisen moet echte waarde achterlaten in het woud en het dorp",
    text:
      "Elke tour van Orangutan Adventure Sumatra draagt direct bij aan het behoud van het regenwoud en het levensonderhoud van de lokale gemeenschap rond Bukit Lawang. Onze inzet is concreet: bekwame lokale gidsen van een eerlijk inkomen voorzien, de druk op het bos verminderen en ethisch toerisme waarborgen.",
    pillars: [
      {
        title: "Bosbescherming",
        text:
          "Steun voor lokale natuurbescherming, low-impact begeleiding en duidelijke gedragsregels vóór het betreden van het orang-oetan leefgebied."
      },
      {
        title: "Lokaal inkomen",
        text:
          "Onze arrangementen geven voorrang aan lokale gidsen, koks, chauffeurs, familiepensions en ambachtelijke dorpsdiensten."
      },
      {
        title: "Directe toewijding",
        text:
          "Elke boeking draagt direct bij aan officiële vergunningen voor Gunung Leuser National Park en dorpspatrouilles tegen illegale ontbossing."
      }
    ]
  },
  zh: {
    kicker: "环保生态愿景",
    title: "每一次探险，都应为原始森林与本土村落带来长远价值",
    text:
      "Orangutan Adventure Sumatra 的每一份收益都直接用于雨林保护和武吉拉旺本地社区的生计改善。我们的行动坚实真诚：给予本地专业向导体面公平的收入，守护红毛猩猩原始栖息地，并向每一位旅行者践行生态旅行准则。",
    pillars: [
      {
        title: "守护原始雨林",
        text:
          "支持当地巡山保护项目，推行零痕迹低干扰向导服务，与野生动物严格保持安全距离。"
      },
      {
        title: "反哺本地社区",
        text:
          "所有行程优先保障本地持证向导、随队厨师、司机、家庭客栈与手工艺人的公平报酬。"
      },
      {
        title: "持续生态回馈",
        text:
          "每笔预订均全额支付古农列尤择国家公园官方准入费，并资助村庄防盗伐公益巡逻队。"
      }
    ]
  },
  id: {
    kicker: "Visi konservasi berkelanjutan",
    title: "Setiap petualangan harus memberi nilai nyata bagi kelestarian hutan dan masyarakat desa",
    text:
      "Setiap paket perjalanan Orangutan Adventure Sumatra berkontribusi langsung pada upaya perlindungan hutan dan mata pencaharian warga lokal di sekitar Bukit Lawang. Komitmen kami nyata: memberdayakan pemandu lokal bersertifikat, menjaga habitat asli orangutan, dan mengedukasi setiap penjelajah tentang etika trekking yang bertanggung jawab.",
    pillars: [
      {
        title: "Perlindungan Hutan Rimba",
        text:
          "Mendukung kegiatan konservasi lokal, memandu dengan dampak minimal bagi lingkungan, dan mematuhi jarak aman dengan satwa liar."
      },
      {
        title: "Kesejahteraan Warga Lokal",
        text:
          "Seluruh paket memprioritaskan upah yang adil dan layak bagi pemandu bersertifikat, koki hutan, pengemudi mobil, dan penginapan keluarga di desa."
      },
      {
        title: "Komitmen Langsung",
        text:
          "Setiap pemesanan langsung mendanai izin resmi Taman Nasional Gunung Leuser dan patroli perlindungan hutan masyarakat desa."
      }
    ]
  }
};

const routeLabel: Record<Locale, string> = {
  en: "Route",
  de: "Route",
  fr: "Circuit",
  nl: "Route",
  zh: "路线",
  id: "Rute"
};

const testimonialCopy: Record<
  Locale,
  {
    googleRating: string;
    reviews: string;
    readAll: string;
    averageOnGoogle: string;
    guestStories: string;
    directReplies: string;
    verifiedReview: string;
    guestStory: string;
  }
> = {
  en: {
    googleRating: "Google rating from",
    reviews: "reviews",
    readAll: "Read all on Google",
    averageOnGoogle: "average on Google from",
    guestStories: "guest stories from recent travelers",
    directReplies: "Direct replies from Bukit Lawang by WhatsApp and email",
    verifiedReview: "Verified Google review",
    guestStory: "Guest story"
  },
  de: {
    googleRating: "Google-Bewertung basierend auf",
    reviews: "Bewertungen",
    readAll: "Alle auf Google lesen",
    averageOnGoogle: "Durchschnitt auf Google aus",
    guestStories: "Erfahrungsberichte von Reisenden",
    directReplies: "Direkte Antworten aus Bukit Lawang per WhatsApp und E-Mail",
    verifiedReview: "Verifizierte Google-Bewertung",
    guestStory: "Gästeerfahrung"
  },
  fr: {
    googleRating: "Note Google basée sur",
    reviews: "avis",
    readAll: "Lire tous les avis sur Google",
    averageOnGoogle: "moyenne sur Google basée sur",
    guestStories: "récits de voyageurs récents",
    directReplies: "Réponses directes depuis Bukit Lawang par WhatsApp et e-mail",
    verifiedReview: "Avis Google vérifié",
    guestStory: "Témoignage voyageur"
  },
  nl: {
    googleRating: "Google-score op basis van",
    reviews: "beoordelingen",
    readAll: "Lees alle reviews op Google",
    averageOnGoogle: "gemiddelde op Google uit",
    guestStories: "ervaringen van recente reizigers",
    directReplies: "Directe reacties vanuit Bukit Lawang via WhatsApp en e-mail",
    verifiedReview: "Geverifieerde Google-review",
    guestStory: "Gastverhaal"
  },
  zh: {
    googleRating: "Google 评分来自",
    reviews: "条真实评价",
    readAll: "在 Google 查看全部评价",
    averageOnGoogle: "Google 综合评分来自",
    guestStories: "位真实旅行者的亲历分享",
    directReplies: "来自武吉拉旺向导团队的 WhatsApp 和邮件即时回复",
    verifiedReview: "Google 认证好评",
    guestStory: "旅行者真实故事"
  },
  id: {
    googleRating: "Penilaian Google dari",
    reviews: "ulasan",
    readAll: "Baca semua di Google",
    averageOnGoogle: "rata-rata di Google dari",
    guestStories: "cerita pengalaman dari para penjelajah",
    directReplies: "Tanggapan langsung dari tim Bukit Lawang via WhatsApp dan email",
    verifiedReview: "Ulasan Google terverifikasi",
    guestStory: "Pengalaman tamu"
  }
};

type HomeProps = {
  initialGoogleReviews?: GoogleReviewsResponse | null;
  initialLanguage?: Locale;
  routedLanguage?: boolean;
};

type GuidePhotoProps = {
  alt: string;
  fallbackSrc?: string;
  src: string;
};

type GoogleReview = {
  author: string;
  id: string;
  rating: number;
  publishedAt: string | null;
  profilePhotoUrl: string | null;
  relativeTime: string;
  source: "google";
  text: string;
};

type GoogleReviewsResponse = {
  averageRating: number | null;
  configured: boolean;
  reviews: GoogleReview[];
  sourceUrl: string;
  totalReviewCount: number;
};

type TestimonialCard = {
  author: string;
  meta: string;
  rating: number;
  profilePhotoUrl?: string | null;
  source?: "guest" | "google";
  text: string;
};

function hasGoogleReviewSignal(data: GoogleReviewsResponse | null | undefined) {
  return Boolean(
    data &&
      (data.reviews.length > 0 ||
        (typeof data.averageRating === "number" && data.totalReviewCount > 0))
  );
}

function initialsForName(name: string) {
  const words = name
    .split(/\s+/)
    .map((part) => part.replace(/[^a-zA-Z0-9]/g, ""))
    .filter(Boolean);

  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return "G";
}

function ReviewAvatar({
  name,
  profilePhotoUrl
}: {
  name: string;
  profilePhotoUrl?: string | null;
}) {
  const [broken, setBroken] = useState(false);
  const initials = initialsForName(name);

  return (
    <span className="testimonial-avatar" aria-hidden={profilePhotoUrl ? undefined : "true"}>
      {profilePhotoUrl && !broken ? (
        // Google profile images use rotating remote hosts, so a native image keeps the fallback reliable.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="testimonial-avatar-image"
          src={profilePhotoUrl}
          alt={`Profile photo of ${name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setBroken(true)}
        />
      ) : (
        <span className="testimonial-avatar-fallback">{initials}</span>
      )}
    </span>
  );
}

function GuidePhoto({ alt, fallbackSrc, src }: GuidePhotoProps) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes="(max-width: 900px) 100vw, 430px"
      onError={() => {
        if (fallbackSrc && imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
        }
      }}
    />
  );
}

export function HomeContent({
  initialGoogleReviews = null,
  initialLanguage = "en",
  routedLanguage = false
}: HomeProps = {}) {
  const [language, setLanguage] = useState<Locale>(initialLanguage);
  const [activeCategory, setActiveCategory] = useState<TrekCategory>("classic");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLElement>(null);
  const [googleReviews, setGoogleReviews] = useState<GoogleReviewsResponse | null>(() =>
    hasGoogleReviewSignal(initialGoogleReviews) ? initialGoogleReviews : null
  );

  useEffect(() => {
    let ignore = false;

    async function loadGoogleReviews() {
      try {
        const response = await fetch("/api/reviews");

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as GoogleReviewsResponse;

        if (!ignore && hasGoogleReviewSignal(data)) {
          setGoogleReviews(data);
        }
      } catch {
        // Keep local testimonials if Google Places is not configured or unavailable.
      }
    }

    loadGoogleReviews();

    return () => {
      ignore = true;
    };
  }, []);

  const t = siteText[language];
  const packageActivity = localizedPackageActivity[language] ?? packageActivityOverview;
  const impactContent = localizedImpactVision[language] ?? impactVision;
  const featuredBlogPosts = useMemo(
    () =>
      featuredHomeBlogSlugs
        .map((slug) => {
          const englishPost = blogPosts.find((post) => post.slug === slug);

          if (!englishPost || language === "en") {
            return englishPost;
          }

          return blogPosts.find(
            (post) =>
              blogPostLocale(post) === language &&
              post.translationKey &&
              post.translationKey === englishPost.translationKey
          );
        })
        .filter((post): post is BlogPost => Boolean(post)),
    [language]
  );
  const whatsappUrl = useMemo(
    () => whatsappUrlFor(t.whatsappMessage),
    [t.whatsappMessage]
  );
  const testimonialCards = useMemo<TestimonialCard[]>(() => {
    const localCards = t.testimonialsData.map((testimonial) => ({
      author: testimonial.author,
      meta: testimonial.location,
      rating: 5,
      source: "guest" as const,
      text: testimonial.text
    }));

    if (!googleReviews?.reviews.length) {
      return localCards;
    }

    const googleCards = googleReviews.reviews.map((review) => ({
      author: review.author,
      meta: review.relativeTime || "Google review",
      rating: review.rating,
      profilePhotoUrl: review.profilePhotoUrl,
      source: "google" as const,
      text: review.text
    }));

    return [...localCards.slice(0, 2), ...googleCards.slice(0, 2)].slice(0, 4);
  }, [googleReviews, t.testimonialsData]);

  const visibleTreks = useMemo(
    () =>
      trekBase
        .filter((trek) => trek.category === activeCategory)
        .map((trek) => {
          const meta = trekMetaLocalized[language]?.[trek.id] ?? {
            duration: trek.duration,
            intensity: trek.intensity
          };
          return {
            ...trek,
            ...meta,
            ...(t.treks[trek.id as TrekId] ?? t.treks["4h"])
          };
        }),
    [activeCategory, language, t]
  );

  const guides = useMemo(
    () =>
      guideBase.map((guide) => ({
        ...guide,
        ...(t.guides[guide.id as GuideId] ?? t.guides.syaipul)
      })),
    [t]
  );

  const currentUrl = routedLanguage ? absoluteUrl(`/${language}`) : siteUrl;

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const trigger = mobileMenuToggleRef.current;
    const drawer = mobileDrawerRef.current;
    const drawerLinks = drawer
      ? Array.from(drawer.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
      : [];
    const focusableElements = [trigger, ...drawerLinks].filter(
      (element): element is HTMLElement => Boolean(element)
    );
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => drawerLinks[0]?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [mobileMenuOpen]);

  const jsonLd = useMemo(() => {
    const trekItems = trekBase.map((trek, index) => {
      const translated = t.treks[trek.id as TrekId];

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristTrip",
          name: translated.title,
          description: translated.highlights.join(". "),
          image: absoluteUrl(trek.image),
          touristType: "Eco traveler",
          provider: { "@id": `${siteUrl}/#business` },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${currentUrl}#treks`
          }
        }
      };
    });
    const aggregateRating =
      typeof googleReviews?.averageRating === "number" && googleReviews.totalReviewCount > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: Number(googleReviews.averageRating.toFixed(1)),
            reviewCount: googleReviews.totalReviewCount,
            bestRating: 5,
            worstRating: 1
          }
        : null;
    const reviewMarkup =
      googleReviews?.reviews.slice(0, 3).map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author
        },
        reviewBody: review.text,
        ...(review.publishedAt ? { datePublished: review.publishedAt } : {}),
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1
        }
      })) ?? [];

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "TravelAgency"],
          "@id": `${siteUrl}/#business`,
          name: siteName,
          alternateName: [...brandAlternateNames],
          url: siteUrl,
          logo: absoluteUrl("/images/logo.png"),
          image: absoluteUrl("/images/link-preview.jpg"),
          description: t.metaDescription,
          telephone: "+6285362405752",
          email: contactEmail,
          priceRange: "EUR 30 - EUR 385",
          identifier: {
            "@type": "PropertyValue",
            propertyID: "Google Knowledge Graph MID",
            value: googleKnowledgeGraphId
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bukit Lawang",
            addressRegion: "North Sumatra",
            addressCountry: "ID"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 3.5553,
            longitude: 98.1329
          },
          hasMap: googleMapsUrl,
          ...(aggregateRating ? { aggregateRating } : {}),
          ...(reviewMarkup.length ? { review: reviewMarkup } : {}),
          areaServed: [
            "Bukit Lawang",
            "Bukitlawang",
            "Gunung Leuser National Park",
            "Sumatra",
            "North Sumatra"
          ],
          knowsAbout: [...coreSearchPhrases],
          sameAs: brandSameAsUrls,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+6285362405752",
            email: contactEmail,
            availableLanguage: ["en", "de", "fr", "nl", "id"]
          }
        },
        {
          "@type": "Person",
          "@id": `${siteUrl}/#guide`,
          name: "Syaipul Ardiansyah",
          jobTitle: "Local jungle guide",
          worksFor: { "@id": `${siteUrl}/#business` },
          sameAs: [instagramUrl]
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: siteName,
          alternateName: [...brandAlternateNames],
          url: siteUrl,
          inLanguage: language,
          keywords: coreSearchPhrases.join(", "),
          publisher: { "@id": `${siteUrl}/#business` }
        },
        {
          "@type": "WebPage",
          "@id": `${currentUrl}#webpage`,
          url: currentUrl,
          name: t.metaTitle,
          description: t.metaDescription,
          keywords: coreSearchPhrases.join(", "),
          inLanguage: language,
          isPartOf: { "@id": `${siteUrl}/#website` },
          about: { "@id": `${siteUrl}/#business` }
        },
        {
          "@type": "FAQPage",
          "@id": `${currentUrl}#faq`,
          mainEntity: t.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a
            }
          }))
        },
        {
          "@type": "ItemList",
          "@id": `${currentUrl}#trek-packages`,
          name: t.headings.packages,
          url: absoluteUrl("/sumatra-orangutan-tour"),
          itemListElement: trekItems
        }
      ]
    };
  }, [currentUrl, language, t, googleReviews]);

  useEffect(() => {
    if (routedLanguage) {
      setLanguage(initialLanguage);
      window.localStorage.setItem("oas-locale", initialLanguage);
      return;
    }

    setLanguage("en");
  }, [initialLanguage, routedLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description instanceof HTMLMetaElement) {
      description.content = t.metaDescription;
    }
    window.localStorage.setItem("oas-locale", language);
  }, [language, t]);

  const handleLanguageChange = (nextLanguage: Locale) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("oas-locale", nextLanguage);

    const hash = window.location.hash;
    const nextPath = nextLanguage === "en" ? `/${hash}` : `/${nextLanguage}${hash}`;
    window.location.assign(nextPath);
  };

  const localizedPath = (path: string) => (language === "en" ? path : `/${language}${path}`);

  return (
    <main lang={language}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${siteName} home`}>
          <Image src="/images/logo.svg" alt={siteName} width={180} height={70} priority unoptimized />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.key} href={item.href}>
              {t.nav[item.key]}
            </a>
          ))}
          <Link href={blogIndexPath(language)}>
            {t.footerLinks.blog}
          </Link>
          <Link href={localizedPath("/essential-information")}>
            {t.footerLinks.essentialInfo}
          </Link>
        </nav>
        <div className="header-actions">
          <label className="language-picker" aria-label="Language selector">
            <span className="sr-only">Language</span>
            <select
              value={language}
              onChange={(event) => handleLanguageChange(event.target.value as Locale)}
              aria-label="Language"
            >
              {locales.map((locale) => (
                <option key={locale} value={locale}>
                  {localeNames[locale]}
                </option>
              ))}
            </select>
          </label>
          <TrackedLink
            className="nav-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.hero.secondary}
            eventName="whatsapp_click"
            eventParams={{ locale: language, source: "home_header" }}
          >
            <MessageCircle size={18} />
            {t.hero.secondary}
          </TrackedLink>
          <button
            ref={mobileMenuToggleRef}
            className="mobile-menu-toggle"
            type="button"
            aria-label={t.mobileMenu}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <button
          className="mobile-menu-backdrop"
          type="button"
          tabIndex={-1}
          aria-label="Close navigation menu"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <nav
        ref={mobileDrawerRef}
        id="mobile-navigation"
        className={`mobile-drawer${mobileMenuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        {navItems.map((item) => (
          <a key={item.key} href={item.href} onClick={() => setMobileMenuOpen(false)}>
            {t.nav[item.key]}
          </a>
        ))}
        <Link href={blogIndexPath(language)} onClick={() => setMobileMenuOpen(false)}>
          {t.footerLinks.blog}
        </Link>
        <Link href={localizedPath("/essential-information")} onClick={() => setMobileMenuOpen(false)}>
          {t.footerLinks.essentialInfo}
        </Link>
        <TrackedLink
          className="mobile-drawer-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          eventName="whatsapp_click"
          eventParams={{ locale: language, source: "home_mobile_drawer" }}
        >
          <MessageCircle size={16} />
          {t.hero.secondary}
        </TrackedLink>
      </nav>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/images/trekking-group.webp"
          alt="Travelers follow a local guide above the rainforest river near Bukit Lawang"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow">
            <Leaf size={16} />
            {t.hero.eyebrow}
          </span>
          <h1>{t.hero.title === siteName ? brandTitle : t.hero.title}</h1>
          <p>{t.hero.description}</p>
          <div className="hero-actions">
            <TrackedLink
              className="primary-button"
              href="#treks"
              eventName="booking_cta_click"
              eventParams={{ locale: language, source: "home_hero", target: "trek_packages" }}
            >
              {t.hero.primary}
              <ArrowRight size={18} />
            </TrackedLink>
            <TrackedLink
              className="secondary-button"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              eventName="whatsapp_click"
              eventParams={{ locale: language, source: "home_hero" }}
            >
              <MessageCircle size={18} />
              {t.hero.secondary}
            </TrackedLink>
          </div>
        </div>
        <div className="hero-coordinate" aria-label="Bukit Lawang coordinates">
          <span>03.5553 N</span>
          <span>98.1329 E</span>
        </div>
        <ol className="hero-route" aria-label="Trek overview">
          {t.hero.stats.map((stat, index) => {
            const Icon = [Star, Clock3, ShieldCheck][index];
            return (
              <li key={stat.title}>
                <span className="hero-route-marker">0{index + 1}</span>
                <span className="hero-route-icon"><Icon size={18} /></span>
                <strong>{stat.title}</strong>
                <span>{stat.text}</span>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="quick-strip" aria-label="Booking highlights">
        <div>
          <CalendarDays size={22} />
          <span>{t.quick[0]}</span>
        </div>
        <div>
          <MapPin size={22} />
          <span>{t.quick[1]}</span>
        </div>
        <div>
          <Waves size={22} />
          <span>{t.quick[2]}</span>
        </div>
        <div>
          <HeartHandshake size={22} />
          <span>{t.quick[3]}</span>
        </div>
      </section>

      {(() => {
        const intentCopy = intentSectionCopy[language];
        return (
        <section className="intent-links-section" aria-labelledby="trip-pathways-heading">
          <div className="section-heading wide-heading">
            <span className="section-kicker">{intentCopy.kicker}</span>
            <h2 id="trip-pathways-heading">{intentCopy.heading}</h2>
          </div>
          <div className="intent-link-grid">
            <Link className="intent-link-card" href="/sumatra-orangutan-tour">
              <span>{intentCopy.toursTitle}</span>
              <strong>{intentCopy.toursDesc}</strong>
              <ArrowRight size={18} />
            </Link>
            <Link className="intent-link-card" href={localizedPath("/treks")}>
              <span>{intentCopy.compareTitle}</span>
              <strong>{intentCopy.compareDesc}</strong>
              <ArrowRight size={18} />
            </Link>
            <Link className="intent-link-card" href="/3-day-bukit-lawang-orangutan-trek">
              <span>{intentCopy.threeDayTitle}</span>
              <strong>{intentCopy.threeDayDesc}</strong>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
        );
      })()}

      <section className="section intro-section">
        <div className="section-heading">
          <span className="section-kicker">{t.intro.kicker}</span>
          <h2>{t.intro.title}</h2>
        </div>
        <div className="intro-grid">
          <div className="intro-copy">
            {t.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="promise-list">
            {t.intro.promises.map((item) => (
              <div key={item}>
                <Check size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section treks-section" id="treks">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{t.headings.packages}</span>
          <h2>{t.headings.packagesSub}</h2>
          <p className="section-lede">
            {language === "de" ? (
              <>
                Benötigst du weitere Details vor der Terminauswahl? Vergleiche alle{" "}
                <Link href="/sumatra-orangutan-tour">Sumatra Orang-Utan Touren &amp; Preise</Link> oder lies den Tagesablauf für den{" "}
                <Link href="/3-day-bukit-lawang-orangutan-trek">3-Tage-Orang-Utan-Trek in Bukit Lawang</Link>.
              </>
            ) : language === "fr" ? (
              <>
                Besoin de plus de détails avant de choisir vos dates ? Comparez nos{" "}
                <Link href="/sumatra-orangutan-tour">circuits et tarifs des tours orang-outan à Sumatra</Link>, ou découvrez l&apos;itinéraire détaillé du{" "}
                <Link href="/3-day-bukit-lawang-orangutan-trek">trek de 3 jours à Bukit Lawang</Link>.
              </>
            ) : language === "nl" ? (
              <>
                Meer details nodig voor je boekt? Vergelijk alle{" "}
                <Link href="/sumatra-orangutan-tour">Sumatra orang-oetan tours &amp; prijzen</Link>, of lees het dag-tot-dag overzicht van de{" "}
                <Link href="/3-day-bukit-lawang-orangutan-trek">3-daagse Bukit Lawang orang-oetan trek</Link>.
              </>
            ) : (
              <>
                Need more detail before choosing a date? Compare our full range of{" "}
                <Link href="/sumatra-orangutan-tour">Sumatra orangutan tours &amp; prices</Link>, or read the
                day-by-day{" "}
                <Link href="/3-day-bukit-lawang-orangutan-trek">3-day Bukit Lawang jungle trek itinerary</Link>.
              </>
            )}
          </p>
        </div>

        <div className="category-tabs" role="group" aria-label="Trek categories">
          {trekCategoryIds.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {t.categories[category]}
            </button>
          ))}
        </div>

        <div className="trek-grid" id="trek-results" aria-live="polite">
          {visibleTreks.map((trek, trekIndex) => {
            const detailUrl = trekDetailHref(trek.id, language);

            return (
            <article className="trek-card" key={trek.id}>
              <div className="trek-media">
                <Image
                  src={trek.image}
                  alt=""
                  fill
                  sizes="(max-width: 680px) calc(100vw - 30px), (max-width: 900px) calc(50vw - 30px), 33vw"
                />
              </div>
              <div className="trek-body">
                <span className="trek-sequence" aria-hidden="true">{routeLabel[language]} {String(trekIndex + 1).padStart(2, "0")}</span>
                <div className="trek-meta">
                  <span>
                    <Clock3 size={15} />
                    {trek.duration}
                  </span>
                  <span>
                    <Mountain size={15} />
                    {trek.intensity}
                  </span>
                </div>
                <h3>{trek.title}</h3>
                <p className="price">{trek.price}</p>
                <ul>
                  {trek.highlights.map((highlight) => (
                    <li key={highlight}>
                      <ChevronRight size={15} />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link className="card-link" href={detailUrl}>
                  {language === "en" ? "View details" : language === "de" ? "Details ansehen" : language === "fr" ? "Voir les détails" : language === "zh" ? "查看详情" : language === "id" ? "Lihat detail" : "Bekijk details"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="section package-detail-section">
        <div className="package-detail-grid">
          <div className="package-detail-image">
            <Image
              src={packageActivity.image}
              alt={packageActivity.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div className="package-detail-copy">
            <span className="section-kicker">{packageActivity.kicker}</span>
            <h2>{packageActivity.title}</h2>
            <p>{packageActivity.intro}</p>
            <div className="package-timeline">
              {packageActivity.steps.map((step) => (
                <article key={step.label}>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="resource-links package-detail-links">
              <Link
                className="secondary-button dark"
                href={language === "en" ? "/3-day-bukit-lawang-orangutan-trek" : `/${language}/treks/3-day-jungle-trek`}
              >
                {language === "de"
                  ? "Zur 3-Tage-Trek-Seite"
                  : language === "fr"
                  ? "Voir la page du trek de 3 jours"
                  : language === "nl"
                  ? "Bekijk de 3-daagse trekpagina"
                  : language === "zh"
                  ? "查看3天2夜徒步详情"
                  : language === "id"
                  ? "Lihat rincian trek 3 hari"
                  : "See the 3-day trek page"}
                <ArrowRight size={18} />
              </Link>
              <Link
                className="secondary-button dark"
                href={
                  language === "de"
                    ? "/de/blog/1-tag-vs-2-tage-vs-3-tage-bukit-lawang-trek"
                    : language === "fr"
                    ? "/fr/blog/trek-1-jour-vs-2-jours-vs-3-jours-bukit-lawang"
                    : language === "nl"
                    ? "/nl/blog/1-dag-vs-2-dagen-vs-3-dagen-bukit-lawang-trek"
                    : language === "zh"
                    ? "/zh/blog/1-day-vs-2-day-vs-3-day-bukit-lawang-trek"
                    : language === "id"
                    ? "/id/blog/1-day-vs-2-day-vs-3-day-bukit-lawang-trek"
                    : "/blog/3-day-bukit-lawang-jungle-trek-itinerary"
                }
              >
                {language === "de"
                  ? "Reiseführer & Ablauf lesen"
                  : language === "fr"
                  ? "Lire le guide de l'itinéraire"
                  : language === "nl"
                  ? "Lees de gids voor de route"
                  : language === "zh"
                  ? "阅读3日游攻略与行程安排"
                  : language === "id"
                  ? "Baca panduan rute 3 hari"
                  : "Read the 3-day itinerary guide"}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="package-notes">
          {packageActivity.notes.map((note) => (
            <div key={note}>
              <Check size={18} />
              <span>{note}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-heading">
          <span className="section-kicker">{t.headings.experience}</span>
          <h2>{t.headings.experienceSub}</h2>
        </div>
        <div className="experience-grid">
          {t.experience.map((item, index) => {
            const Icon = [Compass, Leaf, TentTree, Waves][index];
            return (
              <article className="experience-card" key={item.title}>
                <span className="experience-index" aria-hidden="true">0{index + 1}</span>
                <span className="icon-box">
                  <Icon size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ethics-band">
        <div className="ethics-content">
          <span className="section-kicker">{t.headings.ethics}</span>
          <h2>{t.headings.ethicsSubTitle}</h2>
          <p>{t.ethics.text}</p>
        </div>
        <div className="ethics-image">
          <Image
            src="/images/orangutan-tree.webp"
            alt="Wild orangutan in the rainforest"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-content">
          <span className="section-kicker">{impactContent.kicker}</span>
          <h2>{impactContent.title}</h2>
          <p>{impactContent.text}</p>
        </div>
        <div className="impact-pillars">
          {impactContent.pillars.map((pillar, index) => {
            const Icon = [Leaf, HeartHandshake, ShieldCheck][index];
            return (
              <article key={pillar.title}>
                <span className="icon-box">
                  <Icon size={24} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{t.headings.gallery}</span>
          <h2>{t.headings.gallerySub}</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className={item.layout === "standard" ? undefined : item.layout}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  item.layout === "standard"
                    ? "(max-width: 1060px) 50vw, 25vw"
                    : "(max-width: 1060px) 100vw, 50vw"
                }
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="guides-section" id="guides">
        <div className="section-heading">
          <span className="section-kicker">{t.headings.guides}</span>
          <h2>{t.headings.guidesSub}</h2>
        </div>
        <div className="guides-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.id}>
              <div className="guide-image">
                <GuidePhoto
                  src={guide.image}
                  fallbackSrc={guide.fallbackImage}
                  alt={`${guide.name}, ${t.guideRole}`}
                />
              </div>
              <div>
                <span>{t.guideRole}</span>
                <h3>{guide.name}</h3>
                <p>{guide.text}</p>
                <a className="guide-social" href={instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram size={16} />
                  Guide Instagram
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{t.headings.testimonials}</span>
          <h2>{t.headings.testimonialsSub}</h2>
          {googleReviews?.averageRating && (
            <p className="google-rating-summary">
              <Star size={18} fill="currentColor" />
              <span>
                {googleReviews.averageRating.toFixed(1)} {testimonialCopy[language].googleRating} {googleReviews.totalReviewCount} {testimonialCopy[language].reviews}
              </span>
              <a href={googleReviews.sourceUrl} target="_blank" rel="noreferrer">
                {testimonialCopy[language].readAll}
              </a>
            </p>
          )}
        </div>
        <div className="testimonials-proof-strip">
          {googleReviews?.averageRating ? (
            <div>
              <Star size={18} fill="currentColor" />
              <span>
                {googleReviews.averageRating.toFixed(1)} {testimonialCopy[language].averageOnGoogle} {googleReviews.totalReviewCount} {testimonialCopy[language].reviews}
              </span>
            </div>
          ) : null}
          <div>
            <HeartHandshake size={18} />
            <span>{t.testimonialsData.length} {testimonialCopy[language].guestStories}</span>
          </div>
          <div>
            <MessageCircle size={18} />
            <span>{testimonialCopy[language].directReplies}</span>
          </div>
        </div>
        <div className="testimonials-grid">
          {testimonialCards.map((testimonial) => (
            <article className="testimonial-card" key={`${testimonial.author}-${testimonial.text.slice(0, 24)}`}>
              <div className="testimonial-stars">
                {Array.from({ length: Math.max(1, Math.min(5, testimonial.rating)) }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p>&ldquo;{testimonial.text}&rdquo;</p>
              <div className="testimonial-author">
                <ReviewAvatar name={testimonial.author} profilePhotoUrl={testimonial.profilePhotoUrl} />
                <div className="testimonial-author-copy">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.meta}</span>
                  {testimonial.source === "google" ? (
                    <small>{testimonialCopy[language].verifiedReview}</small>
                  ) : (
                    <small>{testimonialCopy[language].guestStory}</small>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <span className="section-kicker">{t.headings.faq}</span>
          <h2>{t.headings.faqSub}</h2>
        </div>
        <div className="faq-list">
          {t.faq.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <Sparkles size={18} />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section blog-preview-section">
        <div className="section-heading wide-heading">
          <span className="section-kicker">{t.blog.kicker}</span>
          <h2>{t.blog.heading}</h2>
        </div>
        <div className="home-blog-grid">
          {featuredBlogPosts.map((post) => (
            <article className="home-blog-card" key={post.slug}>
              <div className="home-blog-image">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </div>
              <div>
                <span>{post.readingTime}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <Link className="card-link" href={blogPostPath(post)}>
                  {t.blog.readArticle}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="resource-links">
          <Link className="secondary-button dark" href={localizedPath("/essential-information")}>
            {t.blog.essentialInfo}
            <ArrowRight size={18} />
          </Link>
          <Link className="secondary-button dark" href={blogIndexPath(language)}>
            {t.blog.allArticles}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-panel">
          <div>
            <span className="contact-coordinate">BUKIT LAWANG / NORTH SUMATRA</span>
            <span className="section-kicker">{t.headings.contact}</span>
            <h2>{t.headings.contactSub}</h2>
            <p>{t.contact.text}</p>
          </div>
          <div className="contact-actions">
            <TrackedLink
              className="primary-button"
              href={localizedPath("/booking")}
              eventName="booking_cta_click"
              eventParams={{ locale: language, source: "home_contact" }}
            >
              <CalendarDays size={18} />
              {t.contact.bookingLabel}
            </TrackedLink>
            <TrackedLink
              className="secondary-button dark"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              eventName="whatsapp_click"
              eventParams={{ locale: language, source: "home_contact" }}
            >
              <MessageCircle size={18} />
              {t.contact.whatsappLabel}
            </TrackedLink>
            <a className="secondary-button dark" href={brandInstagramUrl} target="_blank" rel="noreferrer">
              <Instagram size={18} />
              Instagram {brandInstagramHandle}
            </a>
            <a className="secondary-button dark" href={`mailto:${contactEmail}`}>
              <Mail size={18} />
              {t.contact.emailLabel}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <Image src="/images/logo.svg" alt={siteName} width={155} height={60} unoptimized />
        <p>{t.footer.location}</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href={localizedPath("/essential-information")}>{t.footerLinks.essentialInfo}</Link>
          <TrackedLink
            href={localizedPath("/booking")}
            eventName="booking_cta_click"
            eventParams={{ locale: language, source: "home_footer" }}
          >
            {t.footerLinks.booking}
          </TrackedLink>
          <Link href={blogIndexPath(language)}>{t.footerLinks.blog}</Link>
          <Link href="/privacy">{t.footerLinks.privacy}</Link>
        </nav>
        <nav className="footer-contact-links" aria-label="Contact and social links">
          <a className="footer-icon-link" href={`mailto:${contactEmail}`} aria-label={t.footerLinks.email} title={t.footerLinks.email}>
            <Mail size={18} />
          </a>
          <TrackedLink
            className="footer-icon-link"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.footerLinks.whatsapp}
            title={t.footerLinks.whatsapp}
            eventName="whatsapp_click"
            eventParams={{ locale: language, source: "home_footer" }}
          >
            <MessageCircle size={18} />
          </TrackedLink>
          <a
            className="footer-icon-link"
            href={brandInstagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.footerLinks.instagram} ${brandInstagramHandle}`}
            title={brandInstagramHandle}
          >
            <Instagram size={18} />
          </a>
          <TrackedLink
            className="footer-icon-link"
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.footerLinks.maps}
            title={t.footerLinks.maps}
            eventName="maps_click"
            eventParams={{ locale: language, source: "home_footer" }}
          >
            <MapPin size={18} />
          </TrackedLink>
        </nav>
      </footer>

      <TrackedLink
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        eventName="whatsapp_click"
        eventParams={{ locale: language, source: "home_floating_button" }}
      >
        <MessageCircle size={26} />
      </TrackedLink>
    </main>
  );
}
