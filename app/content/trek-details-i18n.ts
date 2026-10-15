import type { Locale, TrekId } from "../site-content";

export type LocalizedTrekInput = {
  heroKicker: string;
  heroDescription: string;
  grade: string;
  departure: string;
  arrival: string;
  bestFor: string;
  itinerary: Array<{
    title: string;
    paragraphs: string[];
  }>;
  included: string[];
  notIncluded?: string[];
  bring: string[];
  notes?: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

export const trekLabels: Record<
  Locale,
  {
    whatsIncluded: string;
    whatsNotIncluded: string;
    whatToBring: string;
    highlights: string;
    browseAll: string;
    openBooking: string;
    whatsapp: string;
    price: string;
    profile: {
      duration: string;
      grade: string;
      departure: string;
      arrival: string;
      price: string;
      bestFor: string;
    };
    pageTitle: string;
    pageDescription: string;
    heroKicker: string;
    heroHeading: string;
    viewDetails: string;
    strip: [string, string, string, string];
  }
> = {
  en: {
    whatsIncluded: "What's included",
    whatsNotIncluded: "What's not included",
    whatToBring: "What to bring",
    highlights: "Highlights",
    browseAll: "Browse all trek details",
    openBooking: "Open booking form",
    whatsapp: "WhatsApp",
    price: "Price",
    profile: {
      duration: "Duration",
      grade: "Grade",
      departure: "Departure",
      arrival: "Arrival",
      price: "Price",
      bestFor: "Best for"
    },
    pageTitle: "Bukit Lawang Trek Packages: Options, Prices & Itineraries",
    pageDescription: "Compare all official Bukit Lawang orangutan trek packages. Review duration, trail intensity, river campsites, tube rafting returns, and EUR prices per person.",
    heroKicker: "Trek details",
    heroHeading: "Compare each Bukit Lawang package before you book",
    viewDetails: "View details",
    strip: [
      "Compare details first",
      "4 hours to 5 days",
      "Classic, private, and activity options",
      "Booking after you choose the right route"
    ]
  },
  de: {
    whatsIncluded: "Inklusivleistungen",
    whatsNotIncluded: "Nicht enthalten",
    whatToBring: "Packliste & Empfehlungen",
    highlights: "Highlights",
    browseAll: "Alle Touren im Überblick",
    openBooking: "Buchungsformular öffnen",
    whatsapp: "WhatsApp",
    price: "Preis",
    profile: {
      duration: "Dauer",
      grade: "Schwierigkeit",
      departure: "Start",
      arrival: "Rückkehr",
      price: "Preis",
      bestFor: "Ideal für"
    },
    pageTitle: "Bukit Lawang Trekking Pakete: Touren, Preise & Routen",
    pageDescription: "Vergleiche alle offiziellen Orang-Utan-Trekking-Touren in Bukit Lawang. Dauer, Fitnesslevel, Fluss-Camps, Rafting und Preise im Überblick.",
    heroKicker: "Touren-Details",
    heroHeading: "Vergleiche alle Bukit-Lawang-Pakete vor deiner Buchung",
    viewDetails: "Details ansehen",
    strip: [
      "Detaillierter Tourvergleich",
      "4 Stunden bis 5 Tage",
      "Klassische, private und Dorftouren",
      "Direkte Buchung ohne Zwischenhändler"
    ]
  },
  fr: {
    whatsIncluded: "Ce qui est inclus",
    whatsNotIncluded: "Ce qui n'est pas inclus",
    whatToBring: "Équipement conseillé",
    highlights: "Points forts",
    browseAll: "Consulter tous les treks",
    openBooking: "Ouvrir le formulaire",
    whatsapp: "WhatsApp",
    price: "Tarif",
    profile: {
      duration: "Durée",
      grade: "Niveau",
      departure: "Départ",
      arrival: "Retour",
      price: "Tarif",
      bestFor: "Idéal pour"
    },
    pageTitle: "Treks Orang-Outan à Bukit Lawang : Formules, Prix & Itinéraires",
    pageDescription: "Comparez tous les forfaits de trek avec les orangs-outans à Bukit Lawang. Durée, niveau d'effort, bivouacs en rivière, rafting et tarifs en euros.",
    heroKicker: "Détails des treks",
    heroHeading: "Comparez chaque formule à Bukit Lawang avant de réserver",
    viewDetails: "Voir les détails",
    strip: [
      "Comparez les formules",
      "De 4 heures à 5 jours",
      "Treks classiques, privés et activités",
      "Réservation directe avec guides locaux"
    ]
  },
  nl: {
    whatsIncluded: "Inbegrepen",
    whatsNotIncluded: "Niet inbegrepen",
    whatToBring: "Wat mee te nemen",
    highlights: "Hoogtepunten",
    browseAll: "Bekijk alle trekdetails",
    openBooking: "Boekingsformulier openen",
    whatsapp: "WhatsApp",
    price: "Prijs",
    profile: {
      duration: "Duur",
      grade: "Moeilijkheidsgraad",
      departure: "Vertrek",
      arrival: "Terugkomst",
      price: "Prijs",
      bestFor: "Ideaal voor"
    },
    pageTitle: "Bukit Lawang Trekking Pakketten: Opties, Prijzen & Routes",
    pageDescription: "Vergelijk alle officiële orang-oetan trekkings in Bukit Lawang. Duur, zwaarte, rivierkampen, tube rafting en heldere prijzen per persoon.",
    heroKicker: "Trekdetails",
    heroHeading: "Vergelijk alle Bukit Lawang arrangementen voor je boekt",
    viewDetails: "Bekijk details",
    strip: [
      "Vergelijk vooraf de routes",
      "Van 4 uur tot 5 dagen",
      "Klassiek, privé en lokale activiteiten",
      "Direct reserveren bij lokale gidsen"
    ]
  },
  zh: {
    whatsIncluded: "费用包含",
    whatsNotIncluded: "费用不含",
    whatToBring: "建议携带物品",
    highlights: "行程亮点",
    browseAll: "查看所有徒步路线",
    openBooking: "打开预订表格",
    whatsapp: "WhatsApp咨询",
    price: "费用",
    profile: {
      duration: "行程时间",
      grade: "体能难度",
      departure: "出发时间",
      arrival: "返程时间",
      price: "价格",
      bestFor: "适合人群"
    },
    pageTitle: "武吉拉旺徒步套餐：路线、价格与详细行程对比",
    pageDescription: "全面对比武吉拉旺官方红毛猩猩徒步路线。查看徒步时长、难度、河畔露营点、轮胎漂流返程及人均欧元价格。",
    heroKicker: "行程路线详情",
    heroHeading: "预订前全面对比武吉拉旺各项雨林套餐",
    viewDetails: "查看行程详情",
    strip: [
      "行前全面对比细节",
      "4小时至5天全长行程",
      "经典、私人定制及特色活动",
      "选定心仪路线后便捷预订"
    ]
  },
  id: {
    whatsIncluded: "Fasilitas termasuk",
    whatsNotIncluded: "Belum termasuk",
    whatToBring: "Perlengkapan yang perlu dibawa",
    highlights: "Sorotan utama",
    browseAll: "Lihat semua rincian paket trek",
    openBooking: "Buka formulir pemesanan",
    whatsapp: "Konsultasi via WhatsApp",
    price: "Harga",
    profile: {
      duration: "Durasi",
      grade: "Tingkat kesulitan",
      departure: "Keberangkatan",
      arrival: "Kepulangan",
      price: "Harga",
      bestFor: "Cocok untuk"
    },
    pageTitle: "Paket Trekking Bukit Lawang: Pilihan, Harga & Rute",
    pageDescription: "Bandingkan seluruh paket resmi trekking orangutan di Bukit Lawang. Informasi durasi, tingkat kesulitan, kemah tepi sungai, arung jeram ban, dan rincian harga per orang.",
    heroKicker: "Rincian rute paket",
    heroHeading: "Bandingkan seluruh paket Bukit Lawang sebelum memesan",
    viewDetails: "Lihat rincian paket",
    strip: [
      "Bandingkan rute dengan jelas",
      "Pilihan 4 jam hingga 5 hari",
      "Trek klasik, privat & tur budaya",
      "Pesan langsung dengan pemandu lokal"
    ]
  }
};

export const trekI18n: Record<Locale, Record<TrekId, LocalizedTrekInput>> = {
  en: {
    "4h": {
      heroKicker: "Half-day trek",
      heroDescription: "A short Bukit Lawang forest walk for travelers with limited time, families, or anyone who wants a lighter first look at the rainforest.",
      grade: "Easy / Moderate",
      departure: "Bukit Lawang, around 8:30-9 am",
      arrival: "Bukit Lawang, late morning",
      bestFor: "Short stays and first visits",
      itinerary: [
        {
          title: "Short forest walk",
          paragraphs: [
            "Meet your guide in Bukit Lawang, check water and footwear, and start at an easy pace along the forest edge and lower rainforest trails.",
            "The walk is designed to keep things simple: steady movement, quiet wildlife watching, and enough time to notice the trees, birds, and monkeys around you."
          ]
        },
        {
          title: "Back to the village",
          paragraphs: [
            "The route finishes before lunch or around midday, depending on weather, group pace, and what the forest gives you that morning.",
            "Sightings are never forced. The value of the half-day trek is the feeling of the rainforest, not a guaranteed show."
          ]
        }
      ],
      included: [
        "Local guide",
        "Park access or trek permit where required",
        "Fruit snack and drinking water",
        "Short wildlife walk at a relaxed pace"
      ],
      notIncluded: [
        "Personal travel insurance",
        "Tips for the guide team",
        "Transport to Bukit Lawang unless arranged separately",
        "Extra meals outside the trek"
      ],
      bring: [
        "Walking shoes with grip",
        "Light rain layer or poncho",
        "Mosquito repellent and sunscreen",
        "Small day bag, camera, and cash"
      ]
    },
    "1d": {
      heroKicker: "Full-day trek",
      heroDescription: "A full-day route with lunch in the jungle and a return before evening for travelers who want one strong rainforest day in Bukit Lawang.",
      grade: "Medium",
      departure: "Bukit Lawang, around 9 am",
      arrival: "Bukit Lawang, afternoon",
      bestFor: "Visitors who want a complete day in the forest",
      itinerary: [
        {
          title: "Morning in the rainforest",
          paragraphs: [
            "After breakfast, the guide leads you from Bukit Lawang into the forest at an unhurried pace, usually through plantation edges before the trail gets greener and steeper.",
            "The goal is to spend enough time in the canopy zone for wildlife watching without rushing the experience."
          ]
        },
        {
          title: "Lunch and afternoon return",
          paragraphs: [
            "Fruit breaks and lunch happen on the trail or in a shaded rest spot, then the walk continues until the group heads back to the village before evening.",
            "A 1-day trek works well when you want more than a short walk but do not want to sleep in the forest."
          ]
        }
      ],
      included: [
        "Local guide",
        "Park access or trek permit where required",
        "Fruit snack, lunch, and drinking water",
        "Day trek pacing and route planning"
      ],
      notIncluded: [
        "Personal travel insurance",
        "Tips for the guide team",
        "Transport to Bukit Lawang unless arranged separately"
      ],
      bring: [
        "Shoes with grip",
        "Quick-dry clothes and a light rain layer",
        "Mosquito repellent and sunscreen",
        "Water, camera, and a small amount of cash"
      ]
    },
    "2d": {
      heroKicker: "One-night trek",
      heroDescription: "A one-night jungle stay with riverside camp life and more time for wildlife, food, and forest rhythm.",
      grade: "Medium",
      departure: "Bukit Lawang, morning",
      arrival: "Next day afternoon",
      bestFor: "First-time overnight campers",
      itinerary: [
        {
          title: "Day 1: Hike to riverside camp",
          paragraphs: [
            "Start from Bukit Lawang in the morning, hike deeper into the forest, stop for fruit and jungle lunch, and reach the river campsite in the afternoon.",
            "Swim, relax by the river, and enjoy a freshly prepared dinner cooked over camp stoves."
          ]
        },
        {
          title: "Day 2: Morning forest and river return",
          paragraphs: [
            "Wake up to gibbon calls and rainforest mist. After breakfast, walk a shorter loop or relax before the traditional tube rafting return back to Bukit Lawang."
          ]
        }
      ],
      included: [
        "Certified English-speaking guide and assistant",
        "National park permit and entry fees",
        "All meals in the jungle (lunch, dinner, breakfast, fruit snacks)",
        "Camping gear (tent, mattress, sleeping mat)",
        "Traditional tube rafting return to the village"
      ],
      notIncluded: [
        "Personal travel insurance",
        "Tips for the guide team",
        "Alcoholic beverages and personal snacks"
      ],
      bring: [
        "Good hiking shoes and river sandals",
        "Swimwear, quick-dry clothes, and extra change for camp",
        "Insect repellent, headlamp, and dry bag",
        "Refillable water bottle"
      ]
    },
    "3d": {
      heroKicker: "Two-night expedition",
      heroDescription: "Our most popular multi-day route: two nights at different river camps, deeper primary forest walking, and a tube rafting finale.",
      grade: "Medium / High",
      departure: "Bukit Lawang, 8:30 am",
      arrival: "Day 3, early afternoon",
      bestFor: "Travelers seeking a true rainforest immersion",
      itinerary: [
        {
          title: "Day 1: Deep into the habitat",
          paragraphs: [
            "Enter the national park, observe orangutans and canopy wildlife, stop for a fresh tropical fruit break and jungle lunch, and reach camp one by the river."
          ]
        },
        {
          title: "Day 2: Exploring quieter trails",
          paragraphs: [
            "Cross deeper ridges, discover medicinal plants and giant ficus trees, and set up camp at a second pristine river location."
          ]
        },
        {
          title: "Day 3: River relaxation and tube rafting",
          paragraphs: [
            "Enjoy a riverside breakfast, explore a small waterfall or river bend, and float down the Bohorok River on linked rubber tubes directly to your guesthouse."
          ]
        }
      ],
      included: [
        "Experienced local guides and jungle cook",
        "Gunung Leuser National Park permits and insurance",
        "All meals and trail fruit (breakfast, lunch, dinner)",
        "Complete camping equipment",
        "Traditional tube rafting return"
      ],
      notIncluded: [
        "Personal travel insurance",
        "Guide gratuities",
        "Personal medications"
      ],
      bring: [
        "Trekking shoes with solid grip",
        "Dry bags for electronics and clothes",
        "Eco-friendly mosquito repellent",
        "Headlamp with spare batteries"
      ]
    },
    "4d": {
      heroKicker: "Three-night wilderness trek",
      heroDescription: "Deeper rainforest exploration across remote ridges, untouched river valleys, and diverse wildlife zones.",
      grade: "High",
      departure: "Bukit Lawang, morning",
      arrival: "Day 4, afternoon",
      bestFor: "Fit hikers who want remote nature",
      itinerary: [
        {
          title: "Days 1 to 3: Remote rainforest transit",
          paragraphs: [
            "Hike beyond the standard day trails into quieter zones where hornbills, gibbons, and wild orangutans roam without crowds.",
            "Each night is spent at a different secluded campsite beside clean jungle streams."
          ]
        },
        {
          title: "Day 4: River descent to village",
          paragraphs: [
            "Final trek down to the main river for tube rafting back into Bukit Lawang."
          ]
        }
      ],
      included: [
        "Full guiding team and camp cooks",
        "Park permits and conservation fees",
        "All meals, fruit, and hot drinks",
        "Tents, bedding, and waterproof tarps",
        "Tube rafting journey"
      ],
      notIncluded: [
        "Personal travel insurance",
        "Tips"
      ],
      bring: [
        "Durable hiking shoes and leech socks",
        "Dry bags, power banks, and headlamp",
        "Biodegradable toiletries"
      ]
    },
    "5d": {
      heroKicker: "Four-night deep Leuser expedition",
      heroDescription: "The ultimate Gunung Leuser challenge: primitive camping, steep ridges, pristine biodiversity, and complete digital detox.",
      grade: "High",
      departure: "Bukit Lawang, 8:30 am",
      arrival: "Day 5, afternoon",
      bestFor: "Adventurers with high fitness",
      itinerary: [
        {
          title: "Days 1 to 4: Wilderness exploration",
          paragraphs: [
            "Navigate remote wildlife corridors, track footprints of wild animals, learn jungle survival, and camp deep inside primary forest."
          ]
        },
        {
          title: "Day 5: Downstream rafting return",
          paragraphs: [
            "Long river float back to Bukit Lawang."
          ]
        }
      ],
      included: [
        "Senior jungle guides and support crew",
        "All park permits and safety equipment",
        "Complete catering on the trail",
        "Camping shelter and sleeping gear",
        "Tube rafting"
      ],
      notIncluded: [
        "Personal travel insurance",
        "Tips"
      ],
      bring: [
        "Tough trekking boots",
        "Multiple quick-dry changes of clothing",
        "Heavy-duty dry bags"
      ]
    },
    "p3d": {
      heroKicker: "Private 3-day package",
      heroDescription: "An exclusive 3-day experience for couples, families, or private groups with dedicated guiding, private camping, and village pacing.",
      grade: "Medium",
      departure: "Flexible morning start",
      arrival: "Day 3, afternoon",
      bestFor: "Couples, families, and private travelers",
      itinerary: [
        {
          title: "Private trekking pacing",
          paragraphs: [
            "Enjoy customized walking hours, private chef meals, and tailored wildlife watching without waiting for others."
          ]
        }
      ],
      included: [
        "Private dedicated guide team",
        "Private campsite setup",
        "Custom meals and fruit catering",
        "Permits and tube rafting"
      ],
      notIncluded: [
        "Personal insurance and tips"
      ],
      bring: [
        "Hiking gear and dry bag"
      ]
    },
    "p4d": {
      heroKicker: "Private 4-day package",
      heroDescription: "Exclusive 4-day private rainforest journey with personalized itineraries, private camps, and village coordination.",
      grade: "Medium / High",
      departure: "Flexible",
      arrival: "Day 4, afternoon",
      bestFor: "Private groups seeking flexibility and comfort",
      itinerary: [
        {
          title: "Tailored multi-day jungle route",
          paragraphs: [
            "Pace your trek according to your group's energy, spend more time photographing wildlife, and sleep in private riverside camps."
          ]
        }
      ],
      included: [
        "Private guides and porters",
        "All meals and permits",
        "Private camp equipment",
        "Tube rafting return"
      ],
      notIncluded: [
        "Personal insurance and tips"
      ],
      bring: [
        "Hiking shoes and essentials"
      ]
    },
    "p5d": {
      heroKicker: "Private 5-day package",
      heroDescription: "The most comfortable and immersive private package: deep jungle trekking, village experiences, and complete personal attention.",
      grade: "Medium / High",
      departure: "Flexible",
      arrival: "Day 5, afternoon",
      bestFor: "Complete private rainforest retreat",
      itinerary: [
        {
          title: "Custom deep Leuser journey",
          paragraphs: [
            "Full private exploration with complete logistical care from start to finish."
          ]
        }
      ],
      included: [
        "Dedicated private guide team",
        "All trail meals, snacks, and permits",
        "Private camping setup",
        "Tube rafting"
      ],
      notIncluded: [
        "Personal insurance and tips"
      ],
      bring: [
        "Trail clothing and personal gear"
      ]
    },
    "batcave": {
      heroKicker: "Half-day activity",
      heroDescription: "Explore limestone cave halls, stalactites, bats, and swallows just a short walk from Bukit Lawang.",
      grade: "Cave walk",
      departure: "Morning or afternoon",
      arrival: "Half day",
      bestFor: "Nature lovers and cultural curiosity",
      itinerary: [
        {
          title: "Cave exploration",
          paragraphs: [
            "Walk through local gardens to the entrance of the Bat Cave. Use flashlights to explore the chambers and observe resident fruit bats and cave swallows."
          ]
        }
      ],
      included: [
        "Local cave guide",
        "Flashlight and cave entry",
        "Walk through rubber plantations"
      ],
      notIncluded: [
        "Personal expenses and tips"
      ],
      bring: [
        "Shoes with good grip",
        "Flashlight or headlamp",
        "Mosquito repellent"
      ]
    },
    "village": {
      heroKicker: "Half-day activity",
      heroDescription: "Discover rural life around Bukit Lawang by becak (motorized rickshaw) or bicycle: rice paddies, tofu making, and brown sugar production.",
      grade: "Easy ride",
      departure: "Morning or afternoon",
      arrival: "Half day",
      bestFor: "Families, culture seekers, and slower travel days",
      itinerary: [
        {
          title: "Rural village life",
          paragraphs: [
            "Ride past scenic rice fields and visit home workshops to see how brown palm sugar and fresh tofu are crafted locally."
          ]
        }
      ],
      included: [
        "Local village guide",
        "Becak or bicycle hire",
        "Visits to local workshops"
      ],
      notIncluded: [
        "Souvenirs and personal snacks",
        "Tips"
      ],
      bring: [
        "Camera, sunscreen, hat",
        "Cash for local snacks"
      ]
    }
  },
  de: {
    "4h": {
      heroKicker: "Halbtagestour",
      heroDescription: "Ein entspannter Dschungelspaziergang in Bukit Lawang für Reisende mit wenig Zeit, Familien oder alle, die einen sanften Einstieg suchen.",
      grade: "Leicht / Moderat",
      departure: "Bukit Lawang, ca. 8:30–9:00 Uhr",
      arrival: "Bukit Lawang, gegen Mittag",
      bestFor: "Kurzaufenthalte und Einsteiger",
      itinerary: [
        {
          title: "Erste Schritte im Regenwald",
          paragraphs: [
            "Triff deinen Guide in Bukit Lawang, überprüfe Wasser und Schuhe und wandere in gemütlichem Tempo entlang der Waldränder und Pfade.",
            "Die Tour setzt auf ruhige Beobachtung und gibt dir genügend Zeit für Bäume, Vögel, Makaken und Orang-Utans."
          ]
        },
        {
          title: "Rückkehr ins Dorf",
          paragraphs: [
            "Gegen Mittag geht es zurück ins Dorf. Tiersichtungen werden nie erzwungen – im Vordergrund steht das authentische Regenwald-Gefühl."
          ]
        }
      ],
      included: [
        "Lokaler englischsprachiger Guide",
        "Nationalpark-Genehmigung",
        "Frisches Obst und Trinkwasser",
        "Entspannte Wildtierbeobachtung"
      ],
      notIncluded: [
        "Persönliche Reiseversicherung",
        "Trinkgelder",
        "Transfer nach Bukit Lawang (sofern nicht extra gebucht)"
      ],
      bring: [
        "Feste Wanderschuhe mit Profil",
        "Regenschutz oder Poncho",
        "Mückenschutz und Sonnenschutz",
        "Tagesrucksack und etwas Bargeld"
      ]
    },
    "1d": {
      heroKicker: "Tagestour",
      heroDescription: "Ein ganzer Tag im Regenwald mit Dschungel-Mittagessen und Rückkehr vor dem Abend für alle, die das Maximum aus einem Tag herausholen wollen.",
      grade: "Mittel",
      departure: "Bukit Lawang, 9:00 Uhr",
      arrival: "Bukit Lawang, Nachmittag",
      bestFor: "Reisende, die einen vollen Tag im Dschungel ohne Übernachtung suchen",
      itinerary: [
        {
          title: "Morgen im Primärwald",
          paragraphs: [
            "Nach dem Frühstück führt dich der Guide in den Regenwald. Der Weg führt tiefer hinein, wo die Chance auf Orang-Utans und Gibbons am größten ist."
          ]
        },
        {
          title: "Mittagessen und Rückweg",
          paragraphs: [
            "Genieße ein traditionelles Dschungel-Mittagessen auf Bananenblättern, bevor du am Nachmittag entspannt ins Dorf zurückwanderst."
          ]
        }
      ],
      included: [
        "Erfahrener lokaler Guide",
        "Nationalpark-Permits",
        "Frisches Dschungel-Mittagessen, Obst und Wasser",
        "Geführte Fährten- und Tierbeobachtung"
      ],
      notIncluded: [
        "Reiseversicherung",
        "Trinkgelder"
      ],
      bring: [
        "Gute Wanderschuhe",
        "Schnelltrocknende Kleidung",
        "Mückenspray und Wasserflasche"
      ]
    },
    "2d": {
      heroKicker: "Übernachtungstour (2 Tage / 1 Nacht)",
      heroDescription: "Eine Nacht im Zelt am Fluss: mehr Zeit für Tierbeobachtungen, Dschungelküche am Lagerfeuer und Rückkehr per Tube-Rafting.",
      grade: "Mittel",
      departure: "Bukit Lawang, 8:30 Uhr",
      arrival: "Folgetag, Nachmittag",
      bestFor: "Reisende mit dem Wunsch nach echtem Dschungelcamp-Erlebnis",
      itinerary: [
        {
          title: "Tag 1: Wanderung zum Fluss-Camp",
          paragraphs: [
            "Wandere tief in den Nationalpark, beobachte Orang-Utans im Kronendach und erreiche am Nachmittag das Camp am klaren Dschungelfluss.",
            "Bade im Fluss und genieße ein frisch gekochtes warmes Abendessen im Camp."
          ]
        },
        {
          title: "Tag 2: Dschungelmorgen und Tube-Rafting",
          paragraphs: [
            "Wache zu den Rufen der Gibbons auf. Nach dem Frühstück folgt eine letzte Wanderung und die traditionelle Rückfahrt auf Reifen (Tube-Rafting) ins Dorf."
          ]
        }
      ],
      included: [
        "Zertifizierter Guide und Assistent",
        "Nationalpark-Permits und Eintrittsgebühren",
        "Alle Mahlzeiten im Wald (Mittag, Abend, Frühstück, Obst)",
        "Campingausrüstung (Zelt, Matratze, Decke)",
        "Traditionelles Tube-Rafting zurück nach Bukit Lawang"
      ],
      notIncluded: [
        "Reiseversicherung",
        "Trinkgelder"
      ],
      bring: [
        "Wanderschuhe und Badesandalen",
        "Badebekleidung und Wechselwäsche",
        "Taschenlampe oder Stirnlampe",
        "Wasserdichte Beutel (Dry Bag)"
      ]
    },
    "3d": {
      heroKicker: "3-Tage-Klassiker (2 Nächte)",
      heroDescription: "Unsere beliebteste Tour: zwei Nächte an unterschiedlichen Fluss-Camps, tiefere Pfade im Primärwald und Rafting-Finale.",
      grade: "Mittel / Anspruchsvoll",
      departure: "Bukit Lawang, 8:30 Uhr",
      arrival: "Tag 3, früher Nachmittag",
      bestFor: "Das vollkommene Dschungelabenteuer",
      itinerary: [
        {
          title: "Tag 1: Tief in den Lebensraum der Orang-Utans",
          paragraphs: [
            "Tauche tief in den Nationalpark ein, lerne Heilpflanzen kennen, halte Ausschau nach Orang-Utans und erreiche das erste Flusscamp."
          ]
        },
        {
          title: "Tag 2: Ruhige Bergkämme und zweites Camp",
          paragraphs: [
            "Wandere über ruhige Pfade fernab der Tagesbesucher zu einem zweiten, noch unberührteren Camp am Flussufer."
          ]
        },
        {
          title: "Tag 3: Wasserfall, Entspannung und Rafting",
          paragraphs: [
            "Genieße den Regenwaldmorgen, besuche einen kleinen Wasserfall und fahre per Tube-Rafting direkt zu deiner Unterkunft im Dorf."
          ]
        }
      ],
      included: [
        "Erfahrene Guides und Dschungelkoch",
        "Alle Nationalpark-Permits und Gebühren",
        "Komplette Verpflegung auf dem Trail",
        "Zelte und Camping-Schlafmatten",
        "Traditionelles Tube-Rafting"
      ],
      notIncluded: [
        "Persönliche Versicherung",
        "Trinkgelder"
      ],
      bring: [
        "Feste Wanderschuhe mit gutem Halt",
        "Dry Bags für Wertsachen",
        "Stirnlampe und Powerbank"
      ]
    },
    "4d": {
      heroKicker: "4-Tage-Wildnisexpedition (3 Nächte)",
      heroDescription: "Erkunde abgelegene Waldzonen, einsame Flusstäler und unberührte Biotope abseits aller Touristenpfade.",
      grade: "Anspruchsvoll",
      departure: "Bukit Lawang, Vormittag",
      arrival: "Tag 4, Nachmittag",
      bestFor: "Ausdauernde Wanderer auf der Suche nach echter Wildnis",
      itinerary: [
        {
          title: "Tage 1 bis 3: Unterwegs im Tiefland-Regenwald",
          paragraphs: [
            "Weiter Weg in Zonen, in denen Hornvögel, Hirsche und wilde Orang-Utan-Populationen leben. Jeden Abend neues Zeltlager am Wasser."
          ]
        },
        {
          title: "Tag 4: Flussabfahrt ins Dorf",
          paragraphs: [
            "Wanderung zum Hauptfluss und Tube-Rafting zurück nach Bukit Lawang."
          ]
        }
      ],
      included: [
        "Guide-Team und Träger/Koch",
        "Alle Permits und Mahlzeiten",
        "Vollständige Campingausrüstung",
        "Tube-Rafting"
      ],
      notIncluded: ["Versicherung", "Trinkgeld"],
      bring: ["Eingelaufene Wanderschuhe", "Blutegelsocken", "Dry Bag"]
    },
    "5d": {
      heroKicker: "5-Tage-Tiefenexpedition (4 Nächte)",
      heroDescription: "Die ultimative Dschungelherausforderung: tiefstes Gunung-Leuser-Erlebnis, steile Bergkämme und digitaler Detox.",
      grade: "Anspruchsvoll",
      departure: "Bukit Lawang, 8:30 Uhr",
      arrival: "Tag 5, Nachmittag",
      bestFor: "Abenteurer mit sehr guter Kondition",
      itinerary: [
        {
          title: "Tage 1 bis 4: Tiefste Wildnis",
          paragraphs: [
            "Trekking durch unberührte Wildtier-Korridore, Fährtenlesen und Übernachten tief im Primärregenwald."
          ]
        },
        {
          title: "Tag 5: Lange Rafting-Rückkehr",
          paragraphs: [
            "Ausgiebige Raftingfahrt den Bohorok-Fluss hinab ins Dorf."
          ]
        }
      ],
      included: [
        "Chefführer und Begleitmannschaft",
        "Vollverpflegung und Campausrüstung",
        "Permits und Rafting"
      ],
      notIncluded: ["Versicherung", "Trinkgeld"],
      bring: ["Robuste Wanderschuhe", "Mehrere Garnituren Wechselwäsche"]
    },
    "p3d": {
      heroKicker: "Privatpaket (3 Tage / 2 Nächte)",
      heroDescription: "Exklusiver 3-Tage-Trek für Paare, Familien oder private Gruppen: persönlicher Guide, eigenes Camp und maßgeschneidertes Tempo.",
      grade: "Mittel",
      departure: "Flexibel",
      arrival: "Tag 3, Nachmittag",
      bestFor: "Paare und Familien, die Privatsphäre schätzen",
      itinerary: [
        {
          title: "Individueller Ablauf",
          paragraphs: [
            "Genieße ein privates Tempo, individuelle Mahlzeiten und ungestörte Wildtierbeobachtung."
          ]
        }
      ],
      included: [
        "Privater Guide und Koch",
        "Exklusives Camp am Fluss",
        "Alle Mahlzeiten, Permits und Rafting"
      ],
      notIncluded: ["Versicherung", "Trinkgeld"],
      bring: ["Wanderausrüstung und Badesachen"]
    },
    "p4d": {
      heroKicker: "Privatpaket (4 Tage / 3 Nächte)",
      heroDescription: "Exklusive 4-tägige Privattour mit flexibler Route, eigenem Koch und individueller Betreuung.",
      grade: "Mittel / Anspruchsvoll",
      departure: "Flexibel",
      arrival: "Tag 4, Nachmittag",
      bestFor: "Familien und Kleingruppen mit besonderen Wünschen",
      itinerary: [
        {
          title: "Maßgeschneiderte Mehrtagestour",
          paragraphs: [
            "Passe die Etappen deiner Fitness an und genieße private Camps am Flussufer."
          ]
        }
      ],
      included: ["Privatguide, Träger, Verpflegung, Permits und Rafting"],
      notIncluded: ["Versicherung", "Trinkgeld"],
      bring: ["Feste Schuhe und Dry Bag"]
    },
    "p5d": {
      heroKicker: "Privatpaket (5 Tage / 4 Nächte)",
      heroDescription: "Das Maximum an Komfort und Abenteuer: private Tiefenexpedition mit umfassender Rundum-Betreuung.",
      grade: "Mittel / Anspruchsvoll",
      departure: "Flexibel",
      arrival: "Tag 5, Nachmittag",
      bestFor: "Exklusives Dschungelerlebnis",
      itinerary: [
        {
          title: "Private Großexpedition",
          paragraphs: [
            "Vollständig betreute Tour mit maximalem Freiraum für Tierfotografie und Naturgenuss."
          ]
        }
      ],
      included: ["Komplette private Mannschaft, Verpflegung, Permits, Rafting"],
      notIncluded: ["Versicherung", "Trinkgeld"],
      bring: ["Vollständige Wanderausrüstung"]
    },
    "batcave": {
      heroKicker: "Halbtagsaktivität",
      heroDescription: "Erkunde faszinierende Kalksteinhöhlen, Stalaktiten und Fledermäuse unweit von Bukit Lawang.",
      grade: "Höhlenwanderung",
      departure: "Vormittag oder Nachmittag",
      arrival: "Halbtag",
      bestFor: "Natur- und Geologie-Interessierte",
      itinerary: [
        {
          title: "Höhlenbesichtigung",
          paragraphs: [
            "Wanderung durch Kautschukplantagen zur Bat Cave. Mit Lampen erkundet ihr die Tropfsteinkammern und beobachtet Fledermäuse."
          ]
        }
      ],
      included: ["Höhlenführer, Eintritt und Taschenlampe"],
      notIncluded: ["Trinkgeld"],
      bring: ["Griffige Schuhe, Mückenschutz"]
    },
    "village": {
      heroKicker: "Halbtagsaktivität",
      heroDescription: "Entdecke das dörfliche Leben rund um Bukit Lawang per Becak oder Fahrrad: Reisfelder, Tofu-Herstellung und brauner Palmzucker.",
      grade: "Leichte Fahrt",
      departure: "Vormittag oder Nachmittag",
      arrival: "Halbtag",
      bestFor: "Kulturinteressierte und Familien",
      itinerary: [
        {
          title: "Dorfkultur hautnah",
          paragraphs: [
            "Fahrt durch Reisfelder und Besuch traditioneller Werkstätten für Palmzucker und Tofu."
          ]
        }
      ],
      included: ["Dorf-Guide, Becak- oder Fahrradmiete, Werkstattbesuche"],
      notIncluded: ["Einkäufe, Trinkgeld"],
      bring: ["Kamera, Sonnenschutz, etwas Kleingeld"]
    }
  },
  fr: {
    "4h": {
      heroKicker: "Trek d'une demi-journée",
      heroDescription: "Une courte marche en forêt à Bukit Lawang pour les familles ou les voyageurs disposant de peu de temps.",
      grade: "Facile / Modéré",
      departure: "Bukit Lawang, vers 8h30–9h00",
      arrival: "Bukit Lawang, en fin de matinée",
      bestFor: "Courts séjours et première approche",
      itinerary: [
        {
          title: "Immersion en forêt",
          paragraphs: [
            "Retrouvez votre guide à Bukit Lawang et commencez à un rythme doux sur les premiers sentiers du parc national.",
            "Observez calmement la canopée, les oiseaux et les orangs-outans sans aucune précipitation."
          ]
        },
        {
          title: "Retour au village",
          paragraphs: [
            "La marche se termine vers midi. Les rencontres ne sont jamais forcées pour préserver la quiétude des animaux sauvages."
          ]
        }
      ],
      included: [
        "Guide local certifié",
        "Permis d'entrée au parc national",
        "Collation de fruits frais et eau",
        "Marche éthique d'observation"
      ],
      notIncluded: [
        "Assurance voyage personnelle",
        "Pourboires pour les guides"
      ],
      bring: [
        "Chaussures de marche à bonne adhérence",
        "Veste de pluie légère ou poncho",
        "Répulsif moustiques et crème solaire"
      ]
    },
    "1d": {
      heroKicker: "Trek d'une journée",
      heroDescription: "Une journée complète dans la jungle avec déjeuner traditionnel et retour avant la tombée de la nuit.",
      grade: "Modéré",
      departure: "Bukit Lawang, 9h00",
      arrival: "Bukit Lawang, après-midi",
      bestFor: "Ceux qui veulent une immersion complète sans dormir en forêt",
      itinerary: [
        {
          title: "Matinée dans la forêt tropicale",
          paragraphs: [
            "Après le petit-déjeuner, avancez plus profondément dans la forêt primaire à la recherche des orangs-outans et gibbons."
          ]
        },
        {
          title: "Déjeuner et retour",
          paragraphs: [
            "Savourez un repas servi sur des feuilles de bananier avant de redescendre doucement vers le village."
          ]
        }
      ],
      included: [
        "Guide local anglophone",
        "Permis du parc national Gunung Leuser",
        "Déjeuner frais en jungle, fruits et eau"
      ],
      notIncluded: ["Assurance voyage", "Pourboires"],
      bring: ["Chaussures de randonnée", "Vêtements légers et respirants", "Anti-moustiques"]
    },
    "2d": {
      heroKicker: "Trek de 2 jours (1 nuit)",
      heroDescription: "Une nuit en bivouac au bord de la rivière : vivez au rythme de la forêt tropicale et revenez en tube-rafting.",
      grade: "Modéré",
      departure: "Bukit Lawang, 8h30",
      arrival: "Jour suivant, après-midi",
      bestFor: "Première expérience de camping en jungle",
      itinerary: [
        {
          title: "Jour 1 : Randonnée vers le camp de rivière",
          paragraphs: [
            "Parcourez les sentiers du parc, observez la faune sauvage et rejoignez votre campement au bord d'une rivière cristalline.",
            "Baignade, détente et dîner chaud préparé sur place par notre équipe."
          ]
        },
        {
          title: "Jour 2 : Réveil au chant des gibbons et rafting",
          paragraphs: [
            "Après le petit-déjeuner, faites une dernière balade avant de descendre la rivière en bouées géantes (tube rafting)."
          ]
        }
      ],
      included: [
        "Guide certifié et assistant",
        "Permis du parc national",
        "Tous les repas en jungle (déjeuners, dîner, petit-déjeuner, fruits)",
        "Matériel de campement (tente, matelas)",
        "Descente traditionnelle en tube rafting"
      ],
      notIncluded: ["Assurance voyage", "Pourboires"],
      bring: [
        "Chaussures de trek et sandales d'eau",
        "Maillot de bain et vêtements de rechange",
        "Lampe frontale et pochette étanche (dry bag)"
      ]
    },
    "3d": {
      heroKicker: "Trek classique de 3 jours (2 nuits)",
      heroDescription: "Notre formule la plus prisée : deux nuits dans des camps différents, sentiers plus profonds et retour en tube rafting.",
      grade: "Modéré / Soutenu",
      departure: "Bukit Lawang, 8h30",
      arrival: "Jour 3, début d'après-midi",
      bestFor: "L'aventure complète au cœur du Gunung Leuser",
      itinerary: [
        {
          title: "Jour 1 : Immersion en forêt profonde",
          paragraphs: [
            "Marchez au cœur du parc national, observez les orangs-outans sauvages et installez-vous au premier camp au bord de l'eau."
          ]
        },
        {
          title: "Jour 2 : Sentiers sauvages et second camp",
          paragraphs: [
            "Franchissez des crêtes isolées et découvrez des arbres géants avant de monter un nouveau camp au bord de la rivière."
          ]
        },
        {
          title: "Jour 3 : Cascade et retour en tube rafting",
          paragraphs: [
            "Profitez d'un réveil paisible, baignez-vous dans une cascade puis descendez la rivière en tube rafting jusqu'au village."
          ]
        }
      ],
      included: [
        "Guides expérimentés et cuisinier de jungle",
        "Permis d'entrée et taxes du parc national",
        "Restauration complète et fruits frais",
        "Tentes et équipement de couchage",
        "Tube rafting de retour"
      ],
      notIncluded: ["Assurance personnelle", "Pourboires"],
      bring: ["Chaussures de trek crantées", "Sacs étanches", "Lampe frontale"]
    },
    "4d": {
      heroKicker: "Expédition de 4 jours (3 nuits)",
      heroDescription: "Explorez des zones reculées de la forêt tropicale, loin de toute fréquentation touristique.",
      grade: "Soutenu",
      departure: "Bukit Lawang, matin",
      arrival: "Jour 4, après-midi",
      bestFor: "Bons marcheurs à la recherche de nature brute",
      itinerary: [
        {
          title: "Jours 1 à 3 : Traversée sauvage",
          paragraphs: [
            "Sentiers non balisés, observation des calaos, singes et traces de faune sauvage. Campement chaque soir au bord de l'eau."
          ]
        },
        {
          title: "Jour 4 : Rafting final",
          paragraphs: ["Descente en rafting traditionnel vers Bukit Lawang."]
        }
      ],
      included: ["Équipe complète de guides et cuisiniers, repas, tentes, permis, rafting"],
      notIncluded: ["Assurance", "Pourboires"],
      bring: ["Chaussures de randonnée robustes", "Chaussettes anti-sangsues"]
    },
    "5d": {
      heroKicker: "Grande expédition de 5 jours (4 nuits)",
      heroDescription: "Le défi ultime du Gunung Leuser : déconnexion totale, crêtes abruptes et biodiversité préservée.",
      grade: "Soutenu",
      departure: "Bukit Lawang, 8h30",
      arrival: "Jour 5, après-midi",
      bestFor: "Aventuriers en excellente condition physique",
      itinerary: [
        {
          title: "Jours 1 à 4 : Cœur de la forêt primaire",
          paragraphs: [
            "Survie en forêt, bivouacs rustiques et faune sauvage dans son habitat originel."
          ]
        },
        {
          title: "Jour 5 : Descente au village",
          paragraphs: ["Longue descente en tube rafting vers Bukit Lawang."]
        }
      ],
      included: ["Guides seniors, porteurs, intendance complète, permis, rafting"],
      notIncluded: ["Assurance", "Pourboires"],
      bring: ["Équipement complet de grande randonnée"]
    },
    "p3d": {
      heroKicker: "Formule privée (3 jours / 2 nuits)",
      heroDescription: "Trek privatif sur mesure pour couples ou familles : guide dédié, campement privatif et rythme personnalisé.",
      grade: "Modéré",
      departure: "Horaire flexible",
      arrival: "Jour 3, après-midi",
      bestFor: "Couples et familles recherchant l'intimité",
      itinerary: [
        {
          title: "Rythme personnalisé",
          paragraphs: ["Marche à votre convenance, repas soignés et observation privilégiée."]
        }
      ],
      included: ["Guide et cuisinier privés, camp réservé, repas, permis, rafting"],
      notIncluded: ["Assurance", "Pourboires"],
      bring: ["Équipement de randonnée"]
    },
    "p4d": {
      heroKicker: "Formule privée (4 jours / 3 nuits)",
      heroDescription: "Aventure privative de 4 jours avec itinéraire souple, camps privés et attention exclusive.",
      grade: "Modéré / Soutenu",
      departure: "Flexible",
      arrival: "Jour 4, après-midi",
      bestFor: "Petits groupes exigeants",
      itinerary: [
        {
          title: "Circuit privatif sur mesure",
          paragraphs: ["Itinéraire adapté à votre forme et camps au bord de l'eau."]
        }
      ],
      included: ["Équipe dédiée, intendance, permis, rafting"],
      notIncluded: ["Assurance", "Pourboires"],
      bring: ["Chaussures de trek"]
    },
    "p5d": {
      heroKicker: "Formule privée (5 jours / 4 nuits)",
      heroDescription: "Le summum du sur-mesure dans la jungle : accompagnement privé complet pour une immersion mémorable.",
      grade: "Modéré / Soutenu",
      departure: "Flexible",
      arrival: "Jour 5, après-midi",
      bestFor: "Séjour exclusif en pleine nature",
      itinerary: [
        {
          title: "Expédition personnalisée",
          paragraphs: ["Prise en charge logistique intégrale du début à la fin."]
        }
      ],
      included: ["Équipe privée dédiée, hébergement sous tente, repas, permis, rafting"],
      notIncluded: ["Assurance", "Pourboires"],
      bring: ["Équipement complet"]
    },
    "batcave": {
      heroKicker: "Activité demi-journée",
      heroDescription: "Explorez des cavités calcaires, stalactites et colonies de chauves-souris à proximité de Bukit Lawang.",
      grade: "Marche en grotte",
      departure: "Matin ou après-midi",
      arrival: "Demi-journée",
      bestFor: "Amateurs de nature et de géologie",
      itinerary: [
        {
          title: "Visite de la grotte",
          paragraphs: [
            "Marche à travers les plantations d'hévéas jusqu'à l'entrée de Bat Cave, puis exploration des salles à la torche."
          ]
        }
      ],
      included: ["Guide local, entrée et lampes torches"],
      notIncluded: ["Pourboires"],
      bring: ["Chaussures adhérentes, répulsif"]
    },
    "village": {
      heroKicker: "Activité demi-journée",
      heroDescription: "Découvrez la vie rurale autour de Bukit Lawang en becak ou à vélo : rizières, fabrique de tofu et sucre de palme.",
      grade: "Balade facile",
      departure: "Matin ou après-midi",
      arrival: "Demi-journée",
      bestFor: "Familles et découverte culturelle",
      itinerary: [
        {
          title: "Artisanat et rizières",
          paragraphs: [
            "Parcourez les paysages champêtres et visitez des ateliers artisanaux de tofu et de sucre brun."
          ]
        }
      ],
      included: ["Guide villageois, vélo ou becak, visites artisanales"],
      notIncluded: ["Achats personnels, pourboires"],
      bring: ["Appareil photo, chapeau, petite monnaie"]
    }
  },
  nl: {
    "4h": {
      heroKicker: "Halve dagtocht",
      heroDescription: "Een ontspannen jungletrek in Bukit Lawang voor reizigers met beperkte tijd, gezinnen of iedereen die een rustige eerste kennismaking zoekt.",
      grade: "Licht / Gemiddeld",
      departure: "Bukit Lawang, rond 8:30–9:00",
      arrival: "Bukit Lawang, late ochtend",
      bestFor: "Korte verblijven en beginners",
      itinerary: [
        {
          title: "Eerste stappen in het regenwoud",
          paragraphs: [
            "Ontmoet je gids in Bukit Lawang, controleer water en schoenen en begin op rustig tempo langs de bosrand.",
            "De tocht is gericht op ontspannen observeren, met ruim voldoende tijd om apen, vogels en orang-oetans te spotten."
          ]
        },
        {
          title: "Terug naar het dorp",
          paragraphs: [
            "De route eindigt rond het middaguur. Wilde dieren worden nooit geforceerd; het echte regenwoudgevoel staat centraal."
          ]
        }
      ],
      included: [
        "Lokale gecertificeerde gids",
        "Toegangsbewijs of vergunning voor het nationale park",
        "Vers fruit en drinkwater",
        "Rustige wildlife-wandeling"
      ],
      notIncluded: [
        "Persoonlijke reisverzekering",
        "Fooien voor de gidsen"
      ],
      bring: [
        "Wandelschoenen met profiel",
        "Lichte regenjas of poncho",
        "Muggenwerend middel en zonnebrandcrème"
      ]
    },
    "1d": {
      heroKicker: "Dagtrektocht",
      heroDescription: "Een volledige dagroute met lunch in de jungle en terugkeer vóór de avond voor reizigers die één intense dag in het woud willen.",
      grade: "Gemiddeld",
      departure: "Bukit Lawang, 9:00",
      arrival: "Bukit Lawang, namiddag",
      bestFor: "Reizigers die een volle dag woud willen zonder overnachting",
      itinerary: [
        {
          title: "Ochtend in het oerwoud",
          paragraphs: [
            "Na het ontbijt loop je met de gids dieper het regenwoud in, op zoek naar orang-oetans, Thomas-bladapen en gibbons."
          ]
        },
        {
          title: "Lunch en terugkeer",
          paragraphs: [
            "Geniet van een verse jungle-lunch geserveerd op bananenbladeren voordat je in de namiddag terugwandelt naar het dorp."
          ]
        }
      ],
      included: [
        "Ervaren lokale gids",
        "Vergunningen Gunung Leuser National Park",
        "Lunch in de jungle, vers fruit en water"
      ],
      notIncluded: ["Reisverzekering", "Fooien"],
      bring: ["Wandelschoenen", "Sneldrogende kleding", "Muggenspray"]
    },
    "2d": {
      heroKicker: "Tweedaagse trek (1 nacht)",
      heroDescription: "Eén nacht slapen in een tent bij de rivier: ervaar het jungleritme, heerlijk kampeten en een terugkeer per tube-rafting.",
      grade: "Gemiddeld",
      departure: "Bukit Lawang, 8:30",
      arrival: "Volgende dag, namiddag",
      bestFor: "Iedereen die voor het eerst in de jungle wil kamperen",
      itinerary: [
        {
          title: "Dag 1: Trek naar het rivierkamp",
          paragraphs: [
            "Wandel diep het park in, spot wilde orang-oetans en arriveer 's middags bij een heldere rivier waar het kamp staat opgesteld.",
            "Zwem in de rivier en geniet van een warme maaltijd bereid door onze kampkok."
          ]
        },
        {
          title: "Dag 2: Ochtendbos en tube-rafting",
          paragraphs: [
            "Word wakker met het geluid van gibbons. Na het ontbijt volgt een korte tocht en de traditionele terugkeer op autobanden (tube rafting)."
          ]
        }
      ],
      included: [
        "Gecertificeerde gids en assistent",
        "Vergunningen en toegang Gunung Leuser",
        "Alle maaltijden in het bos (lunches, diner, ontbijt, fruit)",
        "Kampeerspullen (tent, matras, slaapmat)",
        "Traditionele tube-rafting terugkeer"
      ],
      notIncluded: ["Reisverzekering", "Fooien"],
      bring: [
        "Wandelschoenen en watersandalen",
        "Zwemkleding en droge kleding voor het kamp",
        "Zaklamp of hoofdlamp en dry bag"
      ]
    },
    "3d": {
      heroKicker: "3-daagse klassieker (2 nachten)",
      heroDescription: "Onze populairste tocht: twee nachten in verschillende rivierkampen, diepere oerwoudpaden en afsluitend tube-rafting.",
      grade: "Gemiddeld / Zwaar",
      departure: "Bukit Lawang, 8:30",
      arrival: "Dag 3, vroege namiddag",
      bestFor: "De ultieme jungle-ervaring",
      itinerary: [
        {
          title: "Dag 1: Diep in het leefgebied van de orang-oetan",
          paragraphs: [
            "Betreed het nationale park, observeer dieren in het bladerdak en wandel naar het eerste kamp aan de rivier."
          ]
        },
        {
          title: "Dag 2: Rustige routes en tweede kamp",
          paragraphs: [
            "Trek over afgelegen heuvelruggen naar een tweede, nog ongerepter kamp dieper in het woud."
          ]
        },
        {
          title: "Dag 3: Waterval, ontspanning en rafting",
          paragraphs: [
            "Geniet van de ochtend bij de rivier, bezoek een waterval en vaar per tube-raft terug naar je guesthouse in Bukit Lawang."
          ]
        }
      ],
      included: [
        "Ervaren gidsen en kampkok",
        "Gunung Leuser National Park vergunningen",
        "Alle maaltijden, fruit en snacks",
        "Tent en slaapuitrusting",
        "Traditionele tube-rafting"
      ],
      notIncluded: ["Reisverzekering", "Fooien"],
      bring: ["Stevige wandelschoenen met grip", "Dry bags", "Hoofdlamp"]
    },
    "4d": {
      heroKicker: "4-daagse wildernistrek (3 nachten)",
      heroDescription: "Trek door afgelegen bosgebieden, rustige valleien en ongerepte wildernis ver weg van de drukte.",
      grade: "Zwaar",
      departure: "Bukit Lawang, ochtend",
      arrival: "Dag 4, namiddag",
      bestFor: "Fitte wandelaars die van pure wildernis houden",
      itinerary: [
        {
          title: "Dag 1 tot 3: Tocht door ongerept oerwoud",
          paragraphs: [
            "Wandel buiten de reguliere routes waar neushoornvogels, apen en wilde orang-oetans leven. Elke nacht een nieuw kamp aan het water."
          ]
        },
        {
          title: "Dag 4: Terugkeer per rivier",
          paragraphs: ["Afdaling naar de rivier en rafting terug naar Bukit Lawang."]
        }
      ],
      included: ["Gidsenteam en koks, alle maaltijden, tenten, permits, rafting"],
      notIncluded: ["Verzekering", "Fooien"],
      bring: ["Wandelschoenen", "Bloedzuigersokken", "Dry bag"]
    },
    "5d": {
      heroKicker: "5-daagse Leuser-expeditie (4 nachten)",
      heroDescription: "De ultieme jungledag: diepste oerwoudervaring, steile heuvelruggen en een complete digitale detox.",
      grade: "Zwaar",
      departure: "Bukit Lawang, 8:30",
      arrival: "Dag 5, namiddag",
      bestFor: "Avonturiers met een uitstekende conditie",
      itinerary: [
        {
          title: "Dag 1 tot 4: Diepe wildernis",
          paragraphs: [
            "Trekken door ongerepte wildcorridors, sporen zoeken en primitief kamperen diep in het primaire regenwoud."
          ]
        },
        {
          title: "Dag 5: Lange raftingtocht",
          paragraphs: ["Uitgebreide tube-rafting over de rivier terug naar Bukit Lawang."]
        }
      ],
      included: ["Hoofdgidsen, dragers, volledige verzorging, permits, rafting"],
      notIncluded: ["Verzekering", "Fooien"],
      bring: ["Robuuste wandelschoenen", "Voldoende droge kleding"]
    },
    "p3d": {
      heroKicker: "Privépakket (3 dagen / 2 nachten)",
      heroDescription: "Exclusieve 3-daagse ervaring voor stellen of gezinnen: eigen privégids, eigen kamp en een aangepast tempo.",
      grade: "Gemiddeld",
      departure: "Flexibel",
      arrival: "Dag 3, namiddag",
      bestFor: "Stellen en gezinnen die privacy willen",
      itinerary: [
        {
          title: "Aangepast tempo",
          paragraphs: ["Loop op je eigen tempo, met verse privémaaltijden en rustige observatietijd."]
        }
      ],
      included: ["Privégids en kok, eigen kamp, maaltijden, permits, rafting"],
      notIncluded: ["Verzekering", "Fooien"],
      bring: ["Wandeluitrusting en zwemkleding"]
    },
    "p4d": {
      heroKicker: "Privépakket (4 dagen / 3 nachten)",
      heroDescription: "Exclusieve 4-daagse privétour met flexibele route, eigen kok en persoonlijke aandacht.",
      grade: "Gemiddeld / Zwaar",
      departure: "Flexibel",
      arrival: "Dag 4, namiddag",
      bestFor: "Kleine privégroepen",
      itinerary: [
        {
          title: "Route op maat",
          paragraphs: ["Afgestemd op het energieniveau van jouw groep met privé rivierkampen."]
        }
      ],
      included: ["Privégidsen, dragers, alle maaltijden, permits, rafting"],
      notIncluded: ["Verzekering", "Fooien"],
      bring: ["Wandelschoenen en dry bag"]
    },
    "p5d": {
      heroKicker: "Privépakket (5 dagen / 4 nachten)",
      heroDescription: "Het summum van privacy en oerwoudbeleving: een compleet verzorgde privétour diep in Leuser.",
      grade: "Gemiddeld / Zwaar",
      departure: "Flexibel",
      arrival: "Dag 5, namiddag",
      bestFor: "Exclusieve jungle-retraite",
      itinerary: [
        {
          title: "Persoonlijke expeditie",
          paragraphs: ["Volledige ontzorging van begin tot eind voor een onvergetelijke ervaring."]
        }
      ],
      included: ["Volledige privé-equipe, tenten, maaltijden, permits, rafting"],
      notIncluded: ["Verzekering", "Fooien"],
      bring: ["Volledige trekkinguitrusting"]
    },
    "batcave": {
      heroKicker: "Halve dagactiviteit",
      heroDescription: "Verken kalksteengrotten, stalactieten en vleermuizenkolonies op loopafstand van Bukit Lawang.",
      grade: "Grotwandeling",
      departure: "Ochtend of middag",
      arrival: "Halve dag",
      bestFor: "Natuur- en geologieliefhebbers",
      itinerary: [
        {
          title: "Verkenning van de Bat Cave",
          paragraphs: [
            "Wandel door rubberplantages naar de ingang van de grot. Verken met zaklampen de kamers en zie fruitetende vleermuizen."
          ]
        }
      ],
      included: ["Lokale grotgids, zaklamp en toegang"],
      notIncluded: ["Fooien"],
      bring: ["Schoenen met grip, muggenwerend middel"]
    },
    "village": {
      heroKicker: "Halve dagactiviteit",
      heroDescription: "Ontdek het dorpsleven rond Bukit Lawang per becak of fiets: rijstvelden, tofu-makerijen en palmsuiker.",
      grade: "Lichte tocht",
      departure: "Ochtend of middag",
      arrival: "Halve dag",
      bestFor: "Gezinnen en cultuurliefhebbers",
      itinerary: [
        {
          title: "Dorpscultuur van dichtbij",
          paragraphs: [
            "Fiets langs schilderachtige rijstvelden en bezoek lokale werkplaatsen voor tofu en bruine palmsuiker."
          ]
        }
      ],
      included: ["Lokale gids, fietshuur of becak, bezoeken aan werkplaatsen"],
      notIncluded: ["Persoonlijke aankopen, fooien"],
      bring: ["Camera, zonnehoed, wat contant geld"]
    }
  },
  zh: {
    "4h": {
      heroKicker: "半日轻量徒步",
      heroDescription: "适合时间有限的旅客、家庭游客或想要初次领略苏门答腊热带雨林魅力的短途步行。",
      grade: "轻松 / 入门",
      departure: "武吉拉旺，上午约 8:30-9:00",
      arrival: "武吉拉旺，中午前后",
      bestFor: "短暂停留与初次体验者",
      itinerary: [
        {
          title: "轻松雨林漫步",
          paragraphs: [
            "与本地向导在武吉拉旺会面，检查饮用水与鞋履，沿村庄边缘与低地热带林径轻松前行。",
            "路线设计张弛有度：保持匀速前行，安静观察林冠间的鸟类、猕猴与植物，享受静谧时光。"
          ]
        },
        {
          title: "安全返回村庄",
          paragraphs: [
            "行程在中午前结束，野生动物出没全凭自然机缘，半日徒步的真正魅力在于身临其境感受真实的原始森林。"
          ]
        }
      ],
      included: ["本地资深向导", "国家公园准入许可", "热带水果点心与饮用水", "轻松节奏的雨林生态讲解"],
      notIncluded: ["个人旅行保险", "向导团队小费", "外地往返交通", "额外自费餐食"],
      bring: ["防滑徒步鞋或运动鞋", "轻便雨衣", "驱蚊喷雾和防晒霜", "小型双肩包及少量现金"]
    },
    "1d": {
      heroKicker: "一日全天徒步",
      heroDescription: "全天深入武吉拉旺雨林，在林间享用现做野餐，傍晚返回村庄，适合不想在野外过夜但希望充分探索热带雨林的旅行者。",
      grade: "中等",
      departure: "武吉拉旺，上午约 8:30-9:00",
      arrival: "武吉拉旺，傍晚前",
      bestFor: "希望拥有充实一天森林体验的游客",
      itinerary: [
        {
          title: "晨光中的原始森林",
          paragraphs: [
            "早餐后由向导带领步入雨林，慢慢深入未开发的茂密林冠层，沿途寻找野生红毛猩猩与托马斯叶猴。",
            "充裕的时间让大家能在林间停留静候，细细聆听向导讲述热带生态与植物故事。"
          ]
        },
        {
          title: "林间野餐与下午返程",
          paragraphs: [
            "在树荫凉爽处享用新鲜水果与热带午餐，随后继续沿着起伏的林径探索，傍晚伴着夕阳返回村落客栈。"
          ]
        }
      ],
      included: ["本地资深向导", "国家公园准入许可", "鲜切水果、热带午餐及饮用水", "全天路线规划与专业讲解"],
      notIncluded: ["个人旅行保险", "向导团队小费", "外地往返交通"],
      bring: ["抓地力好的登山鞋", "速干透气衣裤和备用轻便雨衣", "防蚊液、防晒霜", "相机及水壶"]
    },
    "2d": {
      heroKicker: "2天1夜雨林露营",
      heroDescription: "在热带雨林溪畔帐篷露营一晚，伴着潺潺流水与丛林声籁入眠，体验地道露营野趣并观察丰富野生动物。",
      grade: "中等",
      departure: "武吉拉旺，上午约 8:30-9:00",
      arrival: "武吉拉旺，次日下午",
      bestFor: "想要初尝野外露营但时间适中的旅行者",
      itinerary: [
        {
          title: "第1天：步入雨林与河畔安营",
          paragraphs: [
            "从武吉拉旺出发沿缓坡进入雨林，午后抵达溪畔天然营地，享用现煮印尼晚餐并伴着雨林夜鸣入睡。"
          ]
        },
        {
          title: "第2天：清晨观察与轮胎漂流返程",
          paragraphs: [
            "清晨倾听长臂猿啼鸣，早餐后在水流安全的前提下乘坐传统轮胎漂流（Tube Rafting）顺流而下回村。"
          ]
        }
      ],
      included: ["本地向导及国家公园门票", "全程露营餐食与热饮", "帐篷、防潮垫、睡袋与防蚊网", "天然河畔营地搭建服务"],
      notIncluded: ["个人旅行保险", "向导团队小费", "额外个人软饮", "往返武吉拉旺交通"],
      bring: ["水壶、头灯、快干毛巾", "换洗衣物、厚袜子、轻便雨衣", "驱蚊喷雾、个人常用药品", "少量现金、防水袋"],
      notes: [{ title: "露营须知", paragraphs: ["雨林营地设施原始简单，请轻装简行，体验大自然的纯净风貌。路线可能根据天气与水位灵活调整。"] }]
    },
    "3d": {
      heroKicker: "3天2夜经典深度徒步",
      heroDescription: "武吉拉旺最受好评的经典深度行程：深入国家公园更幽静的核心林区，拥有两次不同河畔营地的奇妙露营夜晚。",
      grade: "中等 / 稍具挑战",
      departure: "武吉拉旺，上午约 8:30-9:00",
      arrival: "武吉拉旺，第3天下午",
      bestFor: "热爱大自然、渴望充裕野生动物观察时间的旅行者",
      itinerary: [
        {
          title: "第1天：初探密林与第一营地",
          paragraphs: [
            "穿越原始森林走廊，追踪红毛猩猩家族，傍晚抵达第一座溪畔营地休整游泳。"
          ]
        },
        {
          title: "第2天：深入幽林与第二营地",
          paragraphs: [
            "沿山脊与山涧小径向人迹更少处进发，探索珍稀药用植物与鸟类，夜宿第二处风景优美的河畔营地。"
          ]
        },
        {
          title: "第3天：林间收官与欢畅漂流返程",
          paragraphs: [
            "享受晨曦中的林间时光，午后乘传统巨型轮胎顺流而下漂回武吉拉旺村庄。"
          ]
        }
      ],
      included: ["持证本地向导团队", "国家公园全套门票许可", "全程营养新鲜的现做丛林三餐", "全套露营装备与轮胎漂流回程（视水情）"],
      notIncluded: ["个人旅行保险", "向导团队小费", "行程外私人消费"],
      bring: ["高抓地力徒步鞋", "速干衣物3套、保暖外套一件", "防水袋（Drybag）、头灯及备用电池", "强效防蚊液、防晒霜、个人急救包"],
      notes: [{ title: "实用小贴士", paragraphs: ["3天行程能给向导充足空间避开人群，寻找野生度更高的猩猩与动物。"] }]
    },
    "4d": {
      heroKicker: "4天3夜雨林远征",
      heroDescription: "专为徒步爱好者打造的高阶路线，涉足鲜有人至的深山林区，真正远离现代文明喧嚣。",
      grade: "高难度",
      departure: "武吉拉旺，上午约 8:30",
      arrival: "武吉拉旺，第4天下午",
      bestFor: "体能优秀、渴望挑战原始热带荒野的探险者",
      itinerary: [
        {
          title: "第1-2天：深林穿越与山间扎营",
          paragraphs: [
            "跨越多个陡峭山脊与溪谷，深入没有步道痕迹的野生腹地，每晚在不同溪水旁安营扎寨。"
          ]
        },
        {
          title: "第3-4天：荒野溯溪与漂流归程",
          paragraphs: [
            "跟随经验极其丰富的向导辨识动物足迹与古树，最后一天沿主河道乘轮胎漂流返程。"
          ]
        }
      ],
      included: ["资深向导团队与随队后勤厨师", "国家公园远征许可", "全程帐篷装备与三餐热饮", "返程轮胎漂流"],
      notIncluded: ["个人保险", "小费", "私人行李搬运"],
      bring: ["专业防水徒步鞋与水陆两栖鞋", "多套速干衣裤与换洗袜子", "高流明防水头灯", "大容量防水包"]
    },
    "5d": {
      heroKicker: "5天4夜极境雨林探险",
      heroDescription: "最具沉浸感的长距离荒野穿越，挑战古农列尤择国家公园最壮丽也最原始的林冠秘境。",
      grade: "高难度",
      departure: "武吉拉旺，上午约 8:30",
      arrival: "武吉拉旺，第5天下午",
      bestFor: "富有经验的重装徒步者与野生动物摄影师",
      itinerary: [
        {
          title: "第1-3天：深入未受侵扰的原始王国",
          paragraphs: [
            "长距离穿越苏门答腊古老山脉，追踪极度濒危物种的自然栖息地，夜宿野生营地。"
          ]
        },
        {
          title: "第4-5天：山谷河流穿行与凯旋返航",
          paragraphs: [
            "穿过深山河谷，与向导围炉夜话学习丛林求生技能，第5天下午平安返抵武吉拉旺。"
          ]
        }
      ],
      included: ["全套专业向导团队与厨师", "全天候露营设施与全部餐食水果", "国家公园深度探险准入证", "终点轮胎漂流"],
      notIncluded: ["个人保险", "小费", "私人装备"],
      bring: ["全面专业户外装备与个人药品", "防水防潮内胆", "充足电池与备用照明"]
    },
    "p3d": {
      heroKicker: "私享环保定制套餐",
      heroDescription: "3天2夜私人专享行程，配有专属私人向导与灵活节奏，非常适合家庭、情侣或摄影爱好者。",
      grade: "中等（节奏弹性调节）",
      departure: "私人弹性时间（通常约 9:00）",
      arrival: "第3天下午",
      bestFor: "情侣、家庭和喜欢私人独立节奏的旅行者",
      itinerary: [
        {
          title: "第1天：私享徒步与定制营地",
          paragraphs: [
            "无需配合其他队员步伐，按照您的舒适度慢慢漫步林间，在风景优美的河畔享受专属营地。"
          ]
        },
        {
          title: "第2-3天：专属林间漫步与舒适返程",
          paragraphs: [
            "向导可根据您的兴趣深度讲解雨林植物或多留时间拍照，最后乘安全漂流回程。"
          ]
        }
      ],
      included: ["专属私人持证向导与后勤服务", "私享营地及全套露营装备", "定制雨林餐饮与热带水果", "接送机与住宿协调服务"],
      notIncluded: ["个人旅行保险", "团队小费", "自选升舱项目"],
      bring: ["常规过夜徒步装备", "相机与备用电池", "个人舒适用品"]
    },
    "p4d": {
      heroKicker: "私享环保定制套餐",
      heroDescription: "4天3夜私人专享路线，既能充分享受原始雨林的深邃宁静，又能完全掌控每日的徒步速度与休息时间。",
      grade: "中等 / 稍具挑战",
      departure: "私人弹性时间",
      arrival: "第4天下午",
      bestFor: "希望多停留雨林且注重行程私密性的客人",
      itinerary: [
        {
          title: "第1-2天：循序渐进的私人森林之旅",
          paragraphs: [
            "向导根据您的体能分配走停时间，为摄影和静候野生动物提供充分耐心。"
          ]
        },
        {
          title: "第3-4天：幽静深林与惬意回程",
          paragraphs: [
            "在人迹稀少处细细品味丛林生活，第4天下午从容漂流返回村庄。"
          ]
        }
      ],
      included: ["专属私人向导服务与团队", "多日露营帐篷设施与三餐", "行程全套国家公园许可", "全程交通与客栈预订协助"],
      notIncluded: ["个人旅行保险", "小费", "自选升级项目"],
      bring: ["徒步鞋、速干衣、防水袋", "个人药品与舒适生活用品"]
    },
    "p5d": {
      heroKicker: "私享全景雨林套餐",
      heroDescription: "最尊享的5天4夜私人全程托管套餐，融合深度徒步、营地露营、传统漂流与村庄田园生活体验。",
      grade: "中等 / 挑战",
      departure: "私人弹性时间",
      arrival: "第5天下午",
      bestFor: "追求高品质无忧假期与极致自然体验的旅行者",
      itinerary: [
        {
          title: "第1-2天：专属向导引领的深度雨林漫游",
          paragraphs: [
            "开启私人探险序幕，沿途尊享一对一生态讲解与定制餐饮。"
          ]
        },
        {
          title: "第3-5天：全景雨林奇观与乡村文化融合",
          paragraphs: [
            "穿梭于野生动植物核心带，伴随漂流与村庄民俗探索，尽享苏门答腊之美。"
          ]
        }
      ],
      included: ["全程一对一私人管家式向导服务", "精品露营设施与定制丰盛餐食", "全部准入许可与漂流设备", "棉兰接送与村庄精品客栈协调"],
      notIncluded: ["个人旅行保险", "向导小费"],
      bring: ["多日徒步个人全套装备", "数码相机与防潮装备"]
    },
    "batcave": {
      heroKicker: "半日特色探险",
      heroDescription: "探索武吉拉旺附近的神秘天然石灰岩溶洞，观察数以千计的栖息蝙蝠与壮观钟乳石岩厅。",
      grade: "轻松短途",
      departure: "上午或下午出发",
      arrival: "半日行程",
      bestFor: "地质探秘爱好者、摄影师与亲子家庭",
      itinerary: [
        {
          title: "蝙蝠洞地质探幽",
          paragraphs: [
            "穿过橡胶树种植园步行至洞穴入口，手持强光手电穿行于高大岩厅，观察果蝠与特殊洞穴昆虫。"
          ]
        }
      ],
      included: ["本地持证洞穴向导、高亮手电筒与洞穴门票"],
      notIncluded: ["小费", "个人往返交通"],
      bring: ["防滑耐磨运动鞋", "防蚊液与随身水壶"]
    },
    "village": {
      heroKicker: "半日人文体验",
      heroDescription: "骑行或乘坐传统三轮车漫游武吉拉旺周边村落，探访稻田风光、传统手工豆腐坊与椰糖作坊。",
      grade: "轻度休闲",
      departure: "上午或下午出发",
      arrival: "半日行程",
      bestFor: "家庭游客与热爱民俗文化的旅行者",
      itinerary: [
        {
          title: "亲近淳朴村庄文化",
          paragraphs: [
            "穿行于绿油油的稻田之间，探访当地家庭手工作坊，亲手体验传统豆腐制作与香甜黑糖熬制过程。"
          ]
        }
      ],
      included: ["本地向导、自行车租赁或三轮车包车、工坊参观体验"],
      notIncluded: ["个人纪念品消费", "小费"],
      bring: ["相机、遮阳帽、适量现金"]
    }
  },
  id: {
  "4h": {
    heroKicker: "Trek setengah hari",
    heroDescription: "Jalan santai di hutan Bukit Lawang untuk wisatawan dengan waktu terbatas, keluarga, atau siapa saja yang ingin mencicipi pesona hutan hujan untuk pertama kali.",
    grade: "Mudah / Sedang",
    departure: "Bukit Lawang, sekitar pukul 08:30-09:00",
    arrival: "Bukit Lawang, menjelang siang",
    bestFor: "Kunjungan singkat dan pengenalan pertama",
    itinerary: [
      {
        title: "Jalan santai hutan hujan",
        paragraphs: [
          "Bertemu pemandu di Bukit Lawang, periksa ketersediaan air dan alas kaki, lalu melangkah santai menyusuri pinggiran hutan dan jalur bawah hutan hujan.",
          "Fokus perjalanan adalah pengamatan satwa liar yang tenang, melihat orangutan semi-liar dan monyet kedih (Thomas leaf monkey) jika terlihat, pengenalan tanaman lokal, dan menikmati jeda buah tropis segar di hutan."
        ]
      }
    ],
    included: [
      "Pemandu lokal berlisensi",
      "Izin masuk resmi Taman Nasional Gunung Leuser",
      "Jeda buah tropis segar",
      "Biaya pemandu dan pajak konservasi"
    ],
    notIncluded: [
      "Penjemputan transportasi ke Bukit Lawang",
      "Penginapan sebelum atau sesudah trek",
      "Tips sukarela untuk pemandu",
      "Asuransi perjalanan pribadi"
    ],
    bring: [
      "Sepatu berjalan atau sepatu kets dengan grip yang baik",
      "Air minum minimal 1 hingga 1,5 liter per orang",
      "Semprotan antinyamuk dan tabir surya",
      "Kamera atau ponsel dengan baterai terisi penuh",
      "Uang tunai Rupiah untuk pengeluaran di desa"
    ]
  },
  "1d": {
    heroKicker: "Trek 1 hari penuh",
    heroDescription: "Penjelajahan satu hari penuh di hutan hujan tropis Bukit Lawang dengan makan siang rimba, tanpa perlu menginap di tenda kemah.",
    grade: "Sedang",
    departure: "Bukit Lawang, sekitar pukul 08:30",
    arrival: "Bukit Lawang, sore hari sekitar pukul 15:30-16:00",
    bestFor: "Pilihan terbaik jika tidak ingin menginap di tenda",
    itinerary: [
      {
        title: "Masuk ke hutan lebat & makan siang rimba",
        paragraphs: [
          "Memulai perjalanan pagi dari desa menuju jalur hutan yang lebih dalam di Taman Nasional Gunung Leuser.",
          "Hari ini memberi lebih banyak waktu untuk mengamati orangutan, owa, makaka, burung enggang, dan flora hutan yang unik.",
          "Nikmati makan siang khas hutan yang disiapkan segar oleh tim, disusul buah-buahan tropis sebelum berjalan santai kembali ke penginapan di Bukit Lawang pada sore hari."
        ]
      }
    ],
    included: [
      "Pemandu hutan lokal bersertifikat",
      "Izin resmi Taman Nasional Gunung Leuser",
      "Makan siang rimba segar & buah-buahan tropis",
      "Pajak konservasi dan retribusi pemandu"
    ],
    notIncluded: [
      "Transportasi penjemputan dari Medan atau Kualanamu",
      "Akomodasi penginapan di Bukit Lawang",
      "Arung jeram ban (tersedia opsional jika diminta)",
      "Asuransi perjalanan pribadi"
    ],
    bring: [
      "Sepatu trekking antiselip yang nyaman",
      "Tas ransel harian kecil (daypack)",
      "Air minum minimal 2 liter per orang",
      "Jas hujan plastik atau ponco ringan",
      "Kamera, obat pribadi, dan losion antinyamuk"
    ]
  },
  "2d": {
    heroKicker: "Trek 2 hari / 1 malam",
    heroDescription: "Trek klasik menginap di hutan dengan bermalam di tenda tepi sungai yang jernih dan kepulangan seru dengan arung jeram ban tradisional.",
    grade: "Sedang",
    departure: "Bukit Lawang, pagi hari pukul 08:30",
    arrival: "Bukit Lawang, siang hari keesokan harinya",
    bestFor: "Pengalaman kemah hutan pertama kali paling populer",
    itinerary: [
      {
        title: "Hari 1: Menembus kanopi rimba & tiba di kemah sungai",
        paragraphs: [
          "Masuk ke dalam hutan lebat Gunung Leuser untuk melacak jejak orangutan, monyet kedih, dan satwa hutan lainnya dengan ritme santai dan penuh rasa hormat.",
          "Setelah istirahat makan siang dan menikmati buah segar, perjalanan berlanjut menuruni bukit menuju tepian sungai Bahorok untuk mendirikan tenda di perkemahan alami.",
          "Sore hari dapat dinikmati dengan berenang di air sungai yang jernih, dilanjutkan santap malam lezat yang dimasak langsung oleh koki kemah di bawah temaram lilin dan suara malam rimba."
        ]
      },
      {
        title: "Hari 2: Pagi di sungai & arung jeram ban kembali ke desa",
        paragraphs: [
          "Bangun dengan iringan suara merdu burung hutan dan suara gemericik aliran sungai. Nikmati sarapan hangat dan kopi atau teh.",
          "Setelah bersantai di sungai atau berjalan pendek di sekitar perkemahan, bersiaplah untuk arung jeram ban tradisional (jungle tube rafting). Menyusuri jeram-jeram kecil sungai Bahorok langsung mengantarkan Anda kembali ke penginapan di desa."
        ]
      }
    ],
    included: [
      "Pemandu lokal berlisensi dan tim koki kemah",
      "Izin resmi masuk TNGL",
      "Perlengkapan kemah (tenda, matras, selimut/sleeping bag)",
      "Semua makanan selama di hutan: 2x makan siang, 1x makan malam, 1x sarapan, plus buah tropis",
      "Arung jeram ban tradisional (tube rafting) kembali ke desa beserta pelampung"
    ],
    notIncluded: [
      "Transportasi darat antar-kota",
      "Penginapan sebelum dan sesudah kegiatan trek",
      "Tips sukarela untuk pemandu dan kru kemah",
      "Asuransi perjalanan pribadi"
    ],
    bring: [
      "Baju ganti untuk tidur dan baju renang",
      "Sepatu trekking dan sandal santai untuk di kemah",
      "Pakaian antiair / kantong pelindung kering (dry bag)",
      "Senter kepala (headlamp) atau senter biasa",
      "Handuk kecil cepat kering dan perlengkapan mandi ramah lingkungan"
    ]
  },
  "3d": {
    heroKicker: "Trek 3 hari / 2 malam",
    heroDescription: "Keseimbangan sempurna antara penjelajahan hutan yang lebih dalam, waktu santai di dua kemah sungai berbeda, dan kepulangan arung jeram ban.",
    grade: "Sedang / Menantang",
    departure: "Bukit Lawang, pukul 08:30 pagi",
    arrival: "Bukit Lawang, siang hari ke-3",
    bestFor: "Pilihan paling direkomendasikan untuk pengalaman mendalam",
    itinerary: [
      {
        title: "Hari 1: Penjelajahan habitat satwa & kemah pertama",
        paragraphs: [
          "Memulai perjalanan mendaki jalur hutan hujan primer. Mengamati orangutan di kanopi pohon tinggi, mengenal aneka jenis burung, serangga, dan tumbuhan berkhasiat obat.",
          "Menjelang sore, tiba di perkemahan pertama di tepi sungai. Bersantai, berenang di air sejuk, dan menikmati makan malam hangat khas Indonesia buatan koki tim."
        ]
      },
      {
        title: "Hari 2: Menembus hutan pedalaman & kemah kedua",
        paragraphs: [
          "Melanjutkan langkah ke area rimba yang lebih hening dan jarang dijamah pengunjung harian. Rute ini menawarkan peluang luar biasa untuk mendengarkan panggilan owa dan melihat satwa liar yang lebih pemalu.",
          "Tiba di lokasi kemah kedua di tepi sungai yang berbeda. Waktu luang sore hari untuk mandi di sungai jernih, menikmati teh sore dan kudapan lokal."
        ]
      },
      {
        title: "Hari 3: Air terjun/sungai & arung jeram ban ke desa",
        paragraphs: [
          "Menikmati pagi yang damai di tengah rimba. Setelah sarapan, bersiap mengemas perlengkapan lalu menaiki rangkaian ban pelampung untuk arung jeram seru menyusuri sungai Bahorok kembali ke desa Bukit Lawang."
        ]
      }
    ],
    included: [
      "Pemandu resmi berlisensi, porter, dan koki hutan berpengalaman",
      "Izin resmi Taman Nasional Gunung Leuser",
      "Peralatan berkemah lengkap di dua lokasi kemah",
      "Semua hidangan makanan (3x makan siang, 2x makan malam, 2x sarapan, aneka buah segar)",
      "Arung jeram ban tradisional (tube rafting) kembali ke desa"
    ],
    notIncluded: [
      "Transportasi penjemputan dari bandara/kota",
      "Penginapan hotel di desa",
      "Pengeluaran pribadi di luar program",
      "Tips untuk pemandu & porter"
    ],
    bring: [
      "Pakaian trekking bernapas dan baju ganti kering untuk malam hari",
      "Tas antiair (dry bag) untuk melindungi barang elektronik dan pakaian ganti",
      "Sepatu bertapak kasar dan sandal gunung",
      "Senter/headlamp beserta baterai cadangan",
      "Perlengkapan P3K pribadi dan obat nyamuk"
    ]
  },
  "4d": {
    heroKicker: "Trek 4 hari / 3 malam",
    heroDescription: "Petualangan hutan yang lebih menantang untuk penjelajah bugar yang ingin mencapai kawasan rimba yang jarang tersentuh manusia.",
    grade: "Menantang",
    departure: "Bukit Lawang, pukul 08:30 pagi",
    arrival: "Bukit Lawang, siang hari ke-4",
    bestFor: "Pecinta alam dengan stamina prima dan jiwa petualang tinggi",
    itinerary: [
      {
        title: "Hari 1 & 2: Jalur lereng bukit & kemah rimba terpencil",
        paragraphs: [
          "Meninggalkan jalur umum dan mendaki bukit-bukit lebat di hutan Leuser. Belajar membaca jejak binatang dan bertahan hidup di alam liar dari pemandu lokal.",
          "Bermalam di kemah-kemah rimba yang dibangun khusus di tepian anak sungai yang masih murni dan sunyi."
        ]
      },
      {
        title: "Hari 3 & 4: Eksplorasi hutan perawan & kepulangan lewat sungai",
        paragraphs: [
          "Menjelajahi punggungan bukit berlumut dan lembah tersembunyi dengan peluang melihat jejak satwa langka.",
          "Pada hari terakhir, tiba di titik pertemuan sungai utama untuk meluncur pulang dengan arung jeram ban kembali ke peradaban."
        ]
      }
    ],
    included: [
      "Pemandu ahli hutan, tim porter, dan koki",
      "Izin resmi masuk kawasan konservasi",
      "Seluruh perlengkapan kemah dan logistik selama 4 hari",
      "Semua makanan, camilan buah, dan minuman bersih",
      "Arung jeram ban (tube rafting) kembali ke desa"
    ],
    notIncluded: [
      "Transportasi dan akomodasi di luar jadwal trek",
      "Asuransi pribadi",
      "Tips kru pendukung"
    ],
    bring: [
      "Sepatu trekking tahan air/cepat kering berkualitas tinggi",
      "Pakaian lengan panjang untuk pelindung duri dan pacet",
      "Dry bag berkapasitas cukup",
      "Power bank untuk kamera/ponsel",
      "Obat-obatan pribadi lengkap"
    ]
  },
  "5d": {
    heroKicker: "Trek 5 hari / 4 malam",
    heroDescription: "Ekspedisi mendalam hutan hujan tropis Taman Nasional Gunung Leuser bagi mereka yang ingin merasakan isolasi total di tengah belantara Sumatra.",
    grade: "Menantang",
    departure: "Bukit Lawang, pukul 08:30 pagi",
    arrival: "Bukit Lawang, sore hari ke-5",
    bestFor: "Petualang sejati dan fotografer alam liar",
    itinerary: [
      {
        title: "Hari 1 hingga 3: Penetrasi ke jantung hutan Leuser",
        paragraphs: [
          "Melangkah jauh ke dalam hutan primer dengan keanekaragaman hayati terkaya di dunia. Mengamati formasi pohon raksasa, liana berbelit, dan mendengar sahutan satwa liar tanpa gangguan suara manusia.",
          "Mendirikan perkemahan di lokasi-lokasi terpencil di sepanjang aliran sungai alami."
        ]
      },
      {
        title: "Hari 4 & 5: Melintasi lembah tersembunyi & arung jeram panjang",
        paragraphs: [
          "Menyusuri jalur-jalur rahasia pemandu lokal, menikmati keheningan rimba raya yang magis, dan akhirnya mengakhiri petualangan akbar dengan arung jeram ban menyusuri aliran sungai kembali ke desa."
        ]
      }
    ],
    included: [
      "Tim pemandu senior, beberapa porter pengangkut logistik, dan juru masak",
      "Izin resmi ekspedisi Taman Nasional Gunung Leuser",
      "Perlengkapan berkemah lengkap selama 5 hari",
      "Seluruh konsumsi bergizi, buah-buahan, dan minuman",
      "Arung jeram ban kembali ke Bukit Lawang"
    ],
    notIncluded: [
      "Transportasi antar-jemput kota/bandara",
      "Hotel di Bukit Lawang sebelum/sesudah ekspedisi",
      "Asuransi medis/evakuasi darurat",
      "Tips tim pendukung"
    ],
    bring: [
      "Perlengkapan ekspedisi outdoor lengkap",
      "Pakaian cepat kering cadangan secukupnya",
      "Obat-obatan pribadi dan vitamin",
      "Perlindungan antiair maksimal untuk semua barang"
    ]
  },
  "p3d": {
    heroKicker: "Paket privat eksklusif 3 hari",
    heroDescription: "Paket santai privat tanpa repot: trekking privat 2 hari 1 malam di hutan Leuser, penginapan nyaman di desa, dan penjemputan mobil privat ber-AC dari Medan.",
    grade: "Sedang",
    departure: "Kualanamu Medan atau Bukit Lawang",
    arrival: "Kualanamu Medan atau tujuan lanjutan",
    bestFor: "Keluarga, pasangan, atau wisatawan yang menginginkan kenyamanan dan privasi",
    itinerary: [
      {
        title: "Hari 1: Penjemputan di Medan & tiba di Bukit Lawang",
        paragraphs: [
          "Penjemputan dengan mobil privat ber-AC dari Bandara Kualanamu atau hotel di Kota Medan menuju Bukit Lawang.",
          "Check-in di penginapan tepi sungai yang nyaman, menikmati suasana desa yang santai, dan briefing persiapan bersama pemandu utama Anda, Syaipul."
        ]
      },
      {
        title: "Hari 2: Trekking orangutan privat & berkemah di tepi sungai",
        paragraphs: [
          "Memulai trekking hutan secara privat dengan tempo yang sepenuhnya disesuaikan dengan langkah Anda.",
          "Mencari satwa liar, menikmati makan siang rimba, dan bermalam di kemah tepi sungai yang telah disiapkan khusus untuk Anda."
        ]
      },
      {
        title: "Hari 3: Arung jeram ban & pengantaran kembali",
        paragraphs: [
          "Pagi yang damai di tepi sungai, dilanjutkan arung jeram ban ke penginapan, bersih-bersih dan mandi air segar, lalu diantar dengan mobil privat kembali ke Medan atau destinasi berikutnya."
        ]
      }
    ],
    included: [
      "Transportasi mobil privat pulang-pergi Medan/Kualanamu - Bukit Lawang",
      "1 malam menginap di penginapan nyaman di desa Bukit Lawang",
      "Trekking privat 2 hari 1 malam beserta pemandu privat, porter, dan koki",
      "Semua makanan selama trekking dan sarapan di penginapan",
      "Izin resmi TNGL dan arung jeram ban tradisional"
    ],
    notIncluded: [
      "Makan malam di desa pada hari pertama",
      "Pengeluaran pribadi dan oleh-oleh",
      "Tips sukarela untuk pemandu dan pengemudi"
    ],
    bring: [
      "Pakaian santai desa dan pakaian trekking hutan",
      "Sepatu berjalan nyaman dan sandal santai",
      "Perlengkapan mandi dan barang pribadi",
      "Uang tunai secukupnya"
    ]
  },
  "p4d": {
    heroKicker: "Paket privat eksklusif 4 hari",
    heroDescription: "Kombinasi sempurna petualangan alam dan relaksasi: 2 malam di hotel desa yang tenang, 1 malam berkemah di tepi sungai hutan hujan, dan tur budaya pedesaan.",
    grade: "Sedang",
    departure: "Medan atau Kualanamu",
    arrival: "Medan atau Kualanamu",
    bestFor: "Liburan santai dengan perpaduan alam rimba dan budaya lokal",
    itinerary: [
      {
        title: "Hari 1: Kedatangan privat & santai di tepi sungai",
        paragraphs: [
          "Penjemputan mobil privat dari Medan, perjalanan panorama melintasi perkebunan karet dan sawit menuju Bukit Lawang.",
          "Waktu bersantai di penginapan tepi sungai dan istirahat yang cukup."
        ]
      },
      {
        title: "Hari 2: Trekking hutan privat & kemah alam",
        paragraphs: [
          "Memasuki hutan nasional bersama pemandu pribadi Anda untuk perjumpaan etis dengan orangutan, dilanjutkan menginap di kemah tepi sungai."
        ]
      },
      {
        title: "Hari 3: Arung jeram ban & malam kedua di hotel desa",
        paragraphs: [
          "Meluncur pulang dengan arung jeram ban ke hotel. Siang hari santai, mandi air segar, dan menikmati suasana malam Bukit Lawang."
        ]
      },
      {
        title: "Hari 4: Tur keliling desa atau gua kelelawar & pengantaran pulang",
        paragraphs: [
          "Pagi hari dapat diisi dengan tur keliling pedesaan naik becak motor atau jalan ke Gua Kelelawar sebelum diantar kembali dengan mobil privat ke Medan."
        ]
      }
    ],
    included: [
      "Mobil privat ber-AC pulang-pergi dari Medan/Bandara",
      "2 malam penginapan di Bukit Lawang",
      "Trek privat 2 hari 1 malam lengkap dengan makanan dan kemah",
      "Aktivitas tur desa atau gua kelelawar",
      "Izin TNGL dan arung jeram ban"
    ],
    notIncluded: [
      "Makan di luar jadwal trekking",
      "Belanja pribadi dan tips"
    ],
    bring: [
      "Pakaian santai dan pakaian outdoor",
      "Sepatu nyaman dan pakaian renang",
      "Kamera dan pelindung antiair"
    ]
  },
  "p5d": {
    heroKicker: "Paket privat eksklusif 5 hari",
    heroDescription: "Pengalaman liburan Bukit Lawang paling lengkap dan leluasa: trekking hutan yang lebih dalam, berkemah di alam bebas, eksplorasi desa, dan semua logistik diurus tuntas.",
    grade: "Sedang",
    departure: "Medan atau Kualanamu",
    arrival: "Medan atau Kualanamu",
    bestFor: "Pilihan terbaik bagi yang ingin menjelajahi Bukit Lawang seutuhnya tanpa terburu-buru",
    itinerary: [
      {
        title: "Hari 1: Penjemputan privat di Medan & malam pertama di desa",
        paragraphs: [
          "Perjalanan nyaman dengan mobil privat langsung ke penginapan tepi sungai di Bukit Lawang. Menikmati suara alam dan istirahat."
        ]
      },
      {
        title: "Hari 2 & 3: Trekking mendalam 3 hari 2 malam di hutan Leuser",
        paragraphs: [
          "Dua hari penuh di hutan primer bersama pemandu privat Anda. Mengamati orangutan dan satwa liar, bermalam di dua perkemahan sungai yang berbeda, dan menikmati makanan rimba lezat."
        ]
      },
      {
        title: "Hari 4: Arung jeram ban kembali ke desa & tur budaya",
        paragraphs: [
          "Arung jeram ban kembali ke penginapan untuk istirahat. Sore hari dilanjutkan dengan tur budaya santai berkeliling desa, mengunjungi sawah, pabrik tahu tradisional, dan pengrajin gula aren."
        ]
      },
      {
        title: "Hari 5: Kunjungan Gua Kelelawar & kepulangan ke Medan",
        paragraphs: [
          "Berjalan santai mengunjungi Gua Kelelawar di pagi hari, menikmati makan siang terakhir di desa, lalu diantar dengan mobil privat kembali ke Bandara Kualanamu atau Kota Medan."
        ]
      }
    ],
    included: [
      "Mobil privat ber-AC selama kedatangan dan kepulangan",
      "2 malam di penginapan desa Bukit Lawang",
      "Trekking privat 3 hari 2 malam lengkap dengan perkemahan dan konsumsi",
      "Arung jeram ban tradisional menyusuri sungai",
      "Tur desa budaya dan tiket masuk Gua Kelelawar",
      "Izin resmi konservasi TNGL"
    ],
    notIncluded: [
      "Makan malam saat menginap di hotel desa",
      "Asuransi pribadi",
      "Tips sukarela"
    ],
    bring: [
      "Pakaian outdoor dan pakaian santai untuk 5 hari",
      "Sepatu trekking dan sandal",
      "Perlengkapan mandi dan obat pribadi",
      "Tas antiair (dry bag)"
    ]
  },
  "batcave": {
    heroKicker: "Aktivitas singkat",
    heroDescription: "Eksplorasi gua batu kapur alami di dekat Bukit Lawang dengan stalaktit spektakuler dan ribuan kelelawar.",
    grade: "Mudah",
    departure: "Bukit Lawang, pagi atau siang hari",
    arrival: "Bukit Lawang, setelah 3-4 jam",
    bestFor: "Kegiatan setengah hari yang santai untuk semua usia",
    itinerary: [
      {
        title: "Jalan santai menuju Gua Kelelawar",
        paragraphs: [
          "Berjalan kaki santai sekitar 30 menit dari desa melintasi kebun buah dan hutan sekunder menuju mulut gua kapur alami.",
          "Masuk ke dalam lorong-lorong gua yang luas ditemani penerangan senter. Mengamati formasi stalaktit dan stalagmit batuan, koloni kelelawar yang bergelantungan, burung walet, serta fauna gua lainnya.",
          "Pilihan opsional: bersantai di tepi Sungai Landak yang tenang untuk mandi atau menikmati kelapa muda segar sebelum kembali ke desa."
        ]
      }
    ],
    included: [
      "Pemandu lokal berpengalaman",
      "Tiket masuk Gua Kelelawar",
      "Peminjaman senter penerangan"
    ],
    notIncluded: [
      "Makan siang atau BBQ (tersedia sebagai opsi tambahan)",
      "Pengeluaran pribadi"
    ],
    bring: [
      "Sepatu berjalan dengan sol tidak licin",
      "Pakaian santai dan celana yang nyaman untuk melangkah di bebatuan",
      "Air minum kemasan",
      "Senter kepala jika memiliki sendiri"
    ]
  },
  "village": {
    heroKicker: "Tur budaya lokal",
    heroDescription: "Mengenal kehidupan sehari-hari masyarakat lokal Bukit Lawang: persawahan hijau, kebun buah tropis, produksi tahu tradisional, dan pengolahan gula aren.",
    grade: "Sangat mudah",
    departure: "Bukit Lawang, pagi atau sore hari",
    arrival: "Bukit Lawang, setelah 3-4 jam",
    bestFor: "Keluarga, pecinta budaya, dan wisata santai",
    itinerary: [
      {
        title: "Jelajah pedesaan dengan becak motor atau sepeda",
        paragraphs: [
          "Menaiki becak motor khas Sumatra atau bersepeda santai melintasi jalan-jalan desa yang damai dengan latar perbukitan hijau.",
          "Mengunjungi lahan persawahan tradisional, kebun karet, dan melihat langsung proses pembuatan tahu rumahan serta pengolahan air nira menjadi gula aren manis alami.",
          "Berinteraksi ramah dengan warga desa yang hangat dan ramah, serta mencicipi kudapan tradisional setempat."
        ]
      }
    ],
    included: [
      "Pemandu lokal berbahasa Indonesia/Inggris",
      "Transportasi becak motor atau sepeda selama tur",
      "Kunjungan ke pengrajin tahu dan gula aren lokal"
    ],
    notIncluded: [
      "Makan siang besar (opsional sesuai permintaan)",
      "Belanja oleh-oleh pribadi"
    ],
    bring: [
      "Pakaian santai dan sopan untuk berkunjung ke desa",
      "Topi dan kacamata hitam untuk pelindung terik matahari",
      "Kamera untuk memotret pemandangan sawah",
      "Uang kecil Rupiah untuk jajan atau membeli produk lokal"
    ]
  }
}
};
