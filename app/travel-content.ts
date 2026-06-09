export type ContentSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export type BlogPost = {
  slug: string;
  locale?: "en" | "de" | "fr" | "nl";
  title: string;
  description: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  sections: ContentSection[];
};

export const contactEmail = "support@orangutanadventuresumatra.com";
export const googleMapsUrl = "https://maps.app.goo.gl/EKrG3TFNG363k4jY7";
export const brandInstagramHandle = "@orangutanadventuresumatra";
export const brandInstagramUrl = "https://www.instagram.com/orangutanadventuresumatra/";
export const instagramUrl = "https://www.instagram.com/syaipul_ardiansyah/";
export const whatsappNumber = "6285362405752";
export const bookingWhatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Orangutan Adventure Sumatra, I would like to ask about a jungle trek."
  )}`;

export const packageActivityOverview = {
  kicker: "Package activity details",
  title: "What a classic multi-day Bukit Lawang trek feels like",
  intro:
    "The flow below follows a typical 3-day orangutan trekking package: slow wildlife watching, forest meals, riverside camping, and a tube-rafting return. The final route can change with weather, group fitness, river level, and park guidance.",
  image: "/images/package-activity-hero.webp",
  imageAlt: "Small trekking group hiking a Bukit Lawang rainforest trail overlooking the valley",
  steps: [
    {
      label: "Day 1",
      title: "Bukit Lawang trailhead, orangutan habitat, first camp",
      text:
        "Meet your guide in the morning, check water and footwear, then enter the rainforest at an easy pace. The first day focuses on respectful wildlife observation, forest plants, fruit breaks, lunch in the jungle, and arrival at a simple riverside camp."
    },
    {
      label: "Day 2",
      title: "Deeper forest walking, river breaks, second night",
      text:
        "Continue into quieter forest sections with more time for Thomas leaf monkeys, gibbons, macaques, birds, medicinal plants, and rainforest sounds. Expect climbs, muddy trails in rain season, a fresh jungle lunch, and a second camp near water when conditions allow."
    },
    {
      label: "Day 3",
      title: "Morning trek and traditional tube rafting return",
      text:
        "After breakfast, walk a shorter final route or relax by the river before returning toward Bukit Lawang by traditional tube rafting when it is included and river conditions are safe."
    }
  ],
  notes: [
    "Wild orangutan sightings are never guaranteed and should never be forced.",
    "Food is simple, fresh, and prepared for the trail: fruit, rice, vegetables, eggs, fish or chicken, tea, and coffee.",
    "Confirm current permit rules, rafting conditions, accommodation, pickup needs, and final inclusions before paying a deposit."
  ]
} as const;

export const impactVision = {
  kicker: "Conservation vision",
  title: "Travel should leave real value in the forest and the village",
  text:
    "The vision behind selected OrangutanAdventureSumatra packages is to reserve part of travel income for rainforest conservation support and community benefit around Bukit Lawang. The goal is practical: keep skilled local people employed, reduce pressure on the forest, and help guests understand why ethical wildlife rules matter.",
  pillars: [
    {
      title: "Forest care",
      text: "Support for conservation-minded local action, low-impact guiding, and guest education before entering orangutan habitat."
    },
    {
      title: "Local livelihoods",
      text: "Packages prioritize local guides, cooks, drivers, accommodation partners, and village services where possible."
    },
    {
      title: "Transparent choices",
      text: "Guests can ask which current packages include conservation or community allocation before confirming a booking."
    }
  ]
} as const;

export const essentialInformation = {
  title: "Essential Information for Bukit Lawang Jungle Trekking",
  description:
    "Practical packing, safety, transport, money, food, and responsible trekking notes for European travelers planning an orangutan trek in Bukit Lawang, North Sumatra.",
  image: "/images/essential-information-hero.webp",
  imageAlt: "Trekking boots and packing essentials laid out for a Bukit Lawang jungle trip",
  intro:
    "Use this page before booking flights, packing your bag, or choosing between a day trek and an overnight jungle package. It is written for travelers coming from Europe who want clear expectations before arriving in North Sumatra.",
  highlights: [
    "Treks start in Bukit Lawang, North Sumatra",
    "Prices are shown in EUR for European guests",
    "Cash is useful in the village",
    "Wildlife encounters follow no-touch and no-feeding rules"
  ],
  sections: [
    {
      title: "Before you book",
      paragraphs: [
        "Share your travel dates, group size, fitness level, preferred trek length, accommodation needs, and whether you need transport from Medan or Kuala Namu International Airport.",
        "For multi-day treks, tell the guide about food restrictions, allergies, medical concerns, and whether anyone in the group has limited hiking experience."
      ],
      bullets: [
        "A 4-hour or 1-day trek suits travelers with limited time.",
        "A 2-day or 3-day trek gives more time for camp life and river return.",
        "Private packages are best for couples, families, photographers, and travelers who want a quieter pace."
      ]
    },
    {
      title: "Getting to Bukit Lawang",
      paragraphs: [
        "Most international travelers arrive through Medan and continue by private car, shared transport, or public bus to Bukit Lawang. The final road can be slow, so plan arrival time with some flexibility.",
        "If you are flying from Europe, avoid scheduling a jungle trek on the same day as a long-haul arrival. A night in Medan or Bukit Lawang makes the first trekking day safer and more enjoyable."
      ],
      bullets: [
        "Main arrival city: Medan, North Sumatra.",
        "Common meeting point: Bukit Lawang village.",
        "Ask for transport help before arrival if you want a smoother transfer."
      ]
    },
    {
      title: "What to pack",
      paragraphs: [
        "Pack light. Overnight treks are easier when your main luggage stays at your guesthouse and you carry only the essentials into the forest."
      ],
      bullets: [
        "Walking shoes or hiking boots with grip",
        "Quick-dry clothes, spare socks, and a light rain jacket",
        "Mosquito repellent, sunscreen, small towel, and personal medicine",
        "Reusable water bottle, headlamp or flashlight, and a small dry bag",
        "Cash in Indonesian rupiah for village expenses and tips"
      ]
    },
    {
      title: "Food, water, and accommodation",
      paragraphs: [
        "Jungle food is usually simple and fresh: fruit, rice, vegetables, eggs, noodles, fish or chicken, tea, and coffee. Let your guide know early if you need vegetarian, vegan, halal, gluten-free, or allergy-aware meals.",
        "Overnight camps are basic. Expect a simple shelter, sleeping mat, shared camp area, river washing, and rainforest sounds at night."
      ]
    },
    {
      title: "Fitness, weather, and safety",
      paragraphs: [
        "Bukit Lawang trails can be steep, humid, slippery, and muddy after rain. A medium fitness level is enough for many short treks, while 3-day to 5-day routes are better for active travelers.",
        "The guide can adjust pace and route, but guests should be honest about injuries, vertigo, heat sensitivity, or limited hiking experience."
      ],
      bullets: [
        "Bring travel insurance that covers trekking activities.",
        "Follow your guide during river crossings and steep descents.",
        "Tube rafting depends on river level and safety conditions."
      ]
    },
    {
      title: "Responsible wildlife rules",
      paragraphs: [
        "The forest is not a zoo. Orangutans, gibbons, macaques, birds, reptiles, and insects move freely, so sightings can never be guaranteed.",
        "Ethical trekking means keeping distance, never feeding wildlife, never touching orangutans, avoiding flash photography, and leaving the guide to manage every encounter."
      ]
    },
    {
      title: "Deposits, payments, and cancellation",
      paragraphs: [
        "A 30% deposit is requested after your dates, package, group size, and guide availability are checked. Payment instructions are confirmed by email before you send money.",
        "This site does not use an automatic payment gateway such as Stripe or international card checkout because those services can be limited for a small local trekking business in Indonesia.",
        "The remaining balance can be paid in cash when you meet the guide team in Bukit Lawang, or 2 days before departure after final payment instructions are confirmed by email.",
        "If plans change, contact the guide as early as possible. Local teams buy food and organize staff before multi-day treks, so late cancellations can affect people in the village."
      ]
    },
    {
      title: "Travel documents and health",
      paragraphs: [
        "Check your passport validity, Indonesia entry requirements, health advice, and insurance terms before leaving Europe. Rules can change, so confirm current requirements with official sources before departure.",
        "Bring personal medication in original packaging and tell your guide about any condition that could matter during heat, hiking, river travel, or overnight camping."
      ]
    }
  ] as readonly ContentSection[]
} as const;

export const paymentAndDeposit = {
  title: "Payment and Deposit Information",
  description:
    "How deposits, cash balance payment, and email-confirmed payment instructions work for Bukit Lawang orangutan trekking bookings.",
  image: "/images/privacy-hero.png",
  imageAlt: "Travel documents and payment notes on a desk for a Bukit Lawang trekking booking",
  intro:
    "Use this page to understand how booking payments are handled before your Bukit Lawang orangutan trek. We do not use an automatic online checkout or international card payment gateway.",
  highlights: [
    "30% deposit after availability is confirmed",
    "Payment instructions are confirmed by email",
    "No Stripe or international payment gateway checkout",
    "Final balance by cash on arrival or email-confirmed prepayment"
  ],
  sections: [
    {
      title: "Deposit after availability check",
      paragraphs: [
        "A 30% deposit is requested after your trekking dates, group size, package, and guide availability have been checked.",
        "Deposit instructions are sent by email, so you can review the amount, booking details, payment method, and next steps before sending any money."
      ],
      bullets: [
        "No booking is confirmed automatically by the website.",
        "Do not send a deposit before receiving payment instructions by email.",
        "Keep your payment receipt or transfer proof for confirmation."
      ]
    },
    {
      title: "Why there is no payment gateway",
      paragraphs: [
        "This site does not use Stripe, automatic card checkout, or similar international payment gateways because access to those services can be limited for a small local trekking business in Indonesia.",
        "Instead, every booking is handled manually by email or WhatsApp so the guide team can confirm availability, package details, transport needs, and the correct payment instruction before payment."
      ]
    },
    {
      title: "Final balance payment",
      paragraphs: [
        "The remaining balance can be paid in cash after you meet the guide team in Bukit Lawang.",
        "If you prefer to pay the full balance before arrival, this can be arranged 2 days before departure, but only after the final payment instruction is confirmed by email."
      ],
      bullets: [
        "Cash payment is handled on site when you meet the team.",
        "Pre-arrival balance payment should be made only after email confirmation.",
        "Ask for the current accepted payment method before sending any final payment."
      ]
    },
    {
      title: "Payment safety notes",
      paragraphs: [
        "Please use only the payment details sent through the confirmed booking email. If anything looks different or unclear, ask for confirmation before sending money.",
        "Booking details can include dates, package, group size, pickup support, accommodation help, food notes, and any agreed deposit or balance payment timing."
      ]
    }
  ] as readonly ContentSection[]
} as const;

export const privacyPolicy = {
  title: "Privacy Policy",
  description:
    "How OrangutanAdventureSumatra handles booking enquiries, language preference storage, external booking links, and privacy rights for visitors, including European GDPR rights.",
  lastUpdated: "9 June 2026",
  image: "/images/privacy-hero.png",
  imageAlt: "Travel documents and planning items on a desk for a privacy policy page",
  sections: [
    {
      title: "Who we are",
      paragraphs: [
        "OrangutanAdventureSumatra is a Bukit Lawang jungle trekking and travel service. You can contact us at support@orangutanadventuresumatra.com or through WhatsApp at +62 853-6240-5752."
      ]
    },
    {
      title: "Personal data we may collect",
      bullets: [
        "Name, email address, WhatsApp number, country, travel dates, group size, preferred package, and accommodation or transport requests when you contact us.",
        "Health, allergy, dietary, or fitness notes only when you choose to share them for trekking safety and meal planning.",
        "Basic technical data normally produced by web hosting, consent, and analytics tools, such as IP address, device type, browser, requested page, timestamp, cookie preference, and approximate engagement information.",
        "A local browser language preference named oas-locale so the site can remember your selected language."
      ]
    },
    {
      title: "How we use your data",
      bullets: [
        "To answer enquiries and prepare a suitable trekking or travel package.",
        "To coordinate guide availability, meals, transport, accommodation, deposits, and safety planning.",
        "To keep basic business records and improve the clarity of this website.",
        "To understand which pages are useful through aggregated Google Analytics reporting.",
        "To remember your selected language on the same device."
      ]
    },
    {
      title: "GDPR legal bases for European visitors",
      paragraphs: [
        "For European visitors, we rely on contract preparation when you ask about or book a trek, consent when you voluntarily send sensitive details such as health or dietary notes, legitimate interest for basic website security and enquiry management, and legal obligation where accounting or tax records must be kept."
      ]
    },
    {
      title: "Sharing and external services",
      paragraphs: [
        "Booking details may be shared only with people needed to deliver the service, such as local guides, cooks, drivers, accommodation partners, or payment and communication providers.",
        "CookieHub may process cookie consent preference information so the website can remember your choice.",
        "Google Analytics may process website usage data under Google's own privacy and data processing terms.",
        "When you click WhatsApp, Instagram, email, or other external services, those providers process data under their own privacy terms."
      ]
    },
    {
      title: "Retention",
      paragraphs: [
        "Enquiry and booking messages are kept only as long as needed to manage your trip, answer follow-up questions, handle accounting duties, and protect legitimate business interests. You may ask us to delete non-essential information."
      ]
    },
    {
      title: "Your privacy rights",
      bullets: [
        "Request access to the personal data we hold about you.",
        "Ask for correction, deletion, restriction, or a copy of your data.",
        "Object to processing based on legitimate interest.",
        "Withdraw consent for optional information you have provided.",
        "Contact your local data protection authority if you believe your GDPR rights have not been respected."
      ]
    },
    {
      title: "Cookies and local storage",
      paragraphs: [
        "This website uses CookieHub to display and remember cookie consent choices, Google Analytics to understand page views and general site usage, and local browser storage to remember the language you selected. You can clear cookies and local storage through your browser settings."
      ]
    }
  ] as readonly ContentSection[]
} as const;

const informationBlogPosts: BlogPost[] = [
  {
    slug: "bukit-lawang-vs-tanjung-puting-orangutans",
    locale: "en",
    title: "Bukit Lawang vs Tanjung Puting: Where to See Orangutans?",
    description:
      "A practical comparison of Sumatra jungle trekking and Borneo klotok river trips for travelers choosing where to see orangutans in Indonesia.",
    date: "2026-06-09",
    readingTime: "7 min read",
    image: "/images/stock/wildlife-13.webp",
    imageAlt: "Orangutan resting in the rainforest canopy",
    tags: ["Bukit Lawang", "Tanjung Puting", "orangutan travel", "Sumatra vs Borneo"],
    sections: [
      {
        title: "The short answer",
        paragraphs: [
          "Choose Bukit Lawang if you want an active rainforest trek, a North Sumatra route that connects naturally with Medan, Berastagi, Lake Toba, and Tangkahan, and a trip where walking is part of the experience.",
          "Choose Tanjung Puting if you want a river-based Borneo experience, sleeping or spending long hours on a klotok boat, visiting orangutan research and rehabilitation areas, and moving mostly by river rather than on steep jungle trails."
        ],
        bullets: [
          "Best for trekking: Bukit Lawang.",
          "Best for a boat-based wildlife trip: Tanjung Puting.",
          "Best for a short North Sumatra itinerary: Bukit Lawang.",
          "Best if you already plan to fly through Pangkalan Bun: Tanjung Puting."
        ]
      },
      {
        title: "How the experience feels",
        paragraphs: [
          "Bukit Lawang is physical. You walk into the edge of Gunung Leuser National Park with a local guide, climb humid forest trails, stop for fruit and lunch, and sleep by the river on longer treks. The reward is the feeling of being inside the forest rather than watching it pass by.",
          "Tanjung Puting feels slower and more river-led. Travelers usually move along the Sekonyer River by klotok, then walk selected trails near visitor zones and feeding platforms. It can be more comfortable for people who want wildlife viewing without a multi-day hike."
        ]
      },
      {
        title: "Logistics from the main arrival points",
        paragraphs: [
          "For Bukit Lawang, most travelers arrive at Kualanamu International Airport near Medan, then continue by private car, shared transport, or public transport. A private transfer is usually the simplest choice after a long flight because it avoids several changes.",
          "For Tanjung Puting, travelers normally fly to Pangkalan Bun in Central Kalimantan, continue to the river, and join a pre-arranged boat trip. That can be a memorable route, but it usually adds another domestic flight and a separate tour operator."
        ]
      },
      {
        title: "Wildlife expectations and ethics",
        paragraphs: [
          "Neither destination should be treated like a zoo. Orangutans move freely, weather changes plans, and responsible guides should never promise forced encounters. In both places, the basic rules are the same: keep distance, do not feed wildlife, do not touch orangutans, and let the guide manage every encounter.",
          "If you want a trek that combines orangutans with gibbons, Thomas leaf monkeys, forest plants, muddy trails, river camps, and village life, Bukit Lawang is the better fit. If your dream is a slow river journey with classic Borneo scenery, Tanjung Puting may be the stronger choice."
        ]
      },
      {
        title: "Which one should you choose?",
        bullets: [
          "Choose Bukit Lawang for an affordable, active, local-guided Sumatra trek.",
          "Choose Tanjung Puting for a dedicated Borneo river safari with klotok boat logistics.",
          "Choose Bukit Lawang if you have 3 to 5 nights in North Sumatra and want trekking to be the main activity.",
          "Choose Tanjung Puting if you are comfortable adding domestic flights and want the boat experience to be part of the trip.",
          "If you have two or three weeks in Indonesia, visiting both gives two very different orangutan habitats and travel styles."
        ]
      }
    ]
  },
  {
    slug: "sumatra-orangutan-trekking-cost-price-guide-2026",
    locale: "en",
    title: "Sumatra Orangutan Trekking Cost and Price Guide 2026",
    description:
      "Updated 2026 guide to Bukit Lawang orangutan trekking prices, what is usually included, and extra costs to plan before booking.",
    date: "2026-06-09",
    readingTime: "7 min read",
    image: "/images/stock/activity-11.webp",
    imageAlt: "Trekking group crossing a rainforest trail near Bukit Lawang",
    tags: ["Sumatra orangutan trekking cost", "Bukit Lawang prices", "2026 price guide"],
    sections: [
      {
        title: "2026 price snapshot",
        paragraphs: [
          "The prices below are the current Orangutan Adventure Sumatra package prices shown on this website for 2026. Always confirm final inclusions, guide availability, permit handling, transport, accommodation, and river conditions before paying a deposit."
        ],
        bullets: [
          "4-hour jungle trek: 55 EUR per person.",
          "1-day jungle trek: 70 EUR per person.",
          "2-day / 1-night jungle trek: 120 EUR per person.",
          "3-day / 2-night jungle trek: 170 EUR per person.",
          "4-day / 3-night jungle trek: 250 EUR per person.",
          "5-day / 4-night jungle trek: 320 EUR per person.",
          "3-day private eco jungle package: 280 EUR per person.",
          "4-day private eco jungle package: 335 EUR per person.",
          "5-day private eco jungle package: 385 EUR per person.",
          "Bat Cave visit: 20 EUR per person.",
          "Village Tour: 25 EUR per person."
        ]
      },
      {
        title: "What is usually included",
        paragraphs: [
          "Classic overnight treks usually bundle the local guide, jungle meals, simple camp setup, and park permit handling into one price. This keeps planning easier for travelers who do not want to organize food, tents, guides, and route timing separately.",
          "Short treks are simpler: the value is the guide, route choice, wildlife etiquette, pacing, and a safer experience on humid and slippery trails."
        ]
      },
      {
        title: "Costs that may sit outside the trek price",
        paragraphs: [
          "The biggest extra cost for many travelers is transport from Medan or Kualanamu International Airport to Bukit Lawang. Accommodation before and after the trek, tips, personal insurance, snacks, laundry, and village spending should also be budgeted separately.",
          "Cash is useful in Bukit Lawang. Card payment options can be limited, and ATMs are not always convenient for international travelers."
        ],
        bullets: [
          "Private airport or Medan transfer.",
          "Guesthouse nights before and after trekking.",
          "Travel insurance that covers jungle trekking.",
          "Tips for guide, cook, porter, or driver if you are happy with the service.",
          "Personal items such as mosquito repellent, dry bag, flashlight, and medicine."
        ]
      },
      {
        title: "How to choose the right duration",
        paragraphs: [
          "If price is your main constraint, a 4-hour or 1-day trek gives a taste of the forest without overnight logistics. If you flew all the way to Sumatra for orangutans, the 2-day or 3-day trek is often better value because camp life and the river return become part of the memory.",
          "Private packages cost more because they are built around quieter pacing, extra coordination, and a more flexible flow. They work well for couples, families, photographers, and travelers who do not want to move at a mixed-group pace."
        ]
      },
      {
        title: "Deposit and booking notes",
        paragraphs: [
          "After dates, group size, package, and guide availability are checked, a 30% deposit is requested by email-confirmed payment instructions. The remaining balance can be paid in cash when you meet the team in Bukit Lawang, or 2 days before departure after final email confirmation.",
          "Do not compare only the cheapest headline price. Ask what is included, who guides the trek, how wildlife rules are handled, where you sleep, what happens if river levels are unsafe, and whether the team can support transport or accommodation."
        ]
      }
    ]
  },
  {
    slug: "is-bukit-lawang-safe-solo-female-travelers",
    locale: "en",
    title: "Is Bukit Lawang Safe? Honest Guide for Solo and Female Travelers",
    description:
      "Straightforward safety advice for Bukit Lawang, including solo travel, female travelers, jungle trekking, transport, rivers, guides, and common precautions.",
    date: "2026-06-09",
    readingTime: "7 min read",
    image: "/images/stock/activity-05.webp",
    imageAlt: "Traveler walking through a green Bukit Lawang village path",
    tags: ["Bukit Lawang safety", "solo female travel", "Sumatra travel safety"],
    sections: [
      {
        title: "The honest answer",
        paragraphs: [
          "Bukit Lawang is a well-established travel village and many solo travelers, couples, families, and backpackers visit without problems. That does not mean you should treat it as risk-free. It is a small jungle gateway with uneven paths, river currents, humid trails, limited lighting in places, and variable transport standards.",
          "The safest trips usually come from boring decisions made early: book a reputable guide, arrive before dark when possible, keep enough cash, carry a flashlight, share your plans with someone, and be clear about your comfort level before entering the forest."
        ]
      },
      {
        title: "For solo and female travelers",
        paragraphs: [
          "Solo and female travelers should be selective about guides and transport. Ask who will guide the trek, whether there will be other guests, where the group sleeps, how the camp is arranged, and how many staff will be present on overnight trips.",
          "If you prefer not to join a mixed group, ask for a private trek. Private guiding costs more, but it gives more control over pace, route, sleeping arrangements, and communication."
        ],
        bullets: [
          "Book through a business with clear contact details and public reviews.",
          "Avoid last-minute pressure from unknown street sellers.",
          "Share your trek date, guide name, and route length with someone you trust.",
          "Trust discomfort early. If something feels wrong before departure, pause and ask questions.",
          "Keep your own phone, cash, and passport access independent."
        ]
      },
      {
        title: "Jungle and river risks",
        paragraphs: [
          "The main risks in Bukit Lawang are often practical rather than dramatic: slippery descents, heat, dehydration, insects, minor cuts, river crossings, and tired decision-making after a long travel day. Good shoes and honest fitness information matter.",
          "Tube rafting can be a highlight, but it depends on river level and guide judgment. If rain has changed the river, the safer decision may be to delay, change route, or skip the river return."
        ]
      },
      {
        title: "Village and transport precautions",
        paragraphs: [
          "Arriving in daylight makes everything easier. You can find your guesthouse, withdraw cash if needed, meet your guide, and avoid navigating dark village paths with luggage.",
          "For the road from Medan or the airport, a private car is usually the most comfortable and direct option. Public transport is cheaper, but it can involve changes, waiting, and a late arrival if your flight lands in the afternoon."
        ]
      },
      {
        title: "Questions to ask before booking",
        bullets: [
          "Who exactly will guide the trek?",
          "How many guests are in the group?",
          "What is the sleeping setup for overnight treks?",
          "What happens if weather or river levels change?",
          "Is transport from Medan or Kualanamu arranged by a known driver?",
          "What should I carry, and where can I leave main luggage?"
        ]
      }
    ]
  },
  {
    slug: "medan-airport-to-bukit-lawang-transport-options",
    locale: "en",
    title: "Medan Airport to Bukit Lawang: All Transport Options",
    description:
      "How to get from Kualanamu International Airport or Medan city to Bukit Lawang by private car, shared transport, public bus, and train connections.",
    date: "2026-06-09",
    readingTime: "6 min read",
    image: "/images/blog-transport.png",
    imageAlt: "River and village view near Bukit Lawang in North Sumatra",
    tags: ["Medan Airport to Bukit Lawang", "Kualanamu transport", "Bukit Lawang transfer"],
    sections: [
      {
        title: "Quick answer",
        paragraphs: [
          "The easiest way from Kualanamu International Airport or Medan city to Bukit Lawang is a pre-arranged private car. It costs more than public transport, but it is direct, comfortable after a flight, and avoids station changes with luggage.",
          "Public transport is possible, but it takes more patience. It can involve airport train or bus connections, Medan or Binjai transfers, local buses, and a final becak or walk from the Bukit Lawang bus area to your guesthouse."
        ]
      },
      {
        title: "Option 1: private transfer",
        paragraphs: [
          "A private transfer is best for couples, families, late arrivals, travelers with large luggage, and anyone starting a trek the next morning. Your driver can meet you at the airport or hotel and take you directly toward Bukit Lawang.",
          "Ask your guide to confirm the pickup time, car size, driver name, total price, and whether tolls or parking are included. Travel time depends on traffic, weather, stops, and the exact guesthouse location."
        ],
        bullets: [
          "Simplest option after a long-haul flight.",
          "Best if you arrive in the afternoon or evening.",
          "Useful when carrying trekking bags or family luggage."
        ]
      },
      {
        title: "Option 2: shared transport",
        paragraphs: [
          "Shared cars or tourist shuttles can be a middle option between private transfer and public buses. They may be cheaper than a private car, but pickup times and comfort depend on the provider and how many passengers are joining.",
          "This option works best when your arrival time is flexible and you do not mind waiting for other travelers."
        ]
      },
      {
        title: "Option 3: public transport",
        paragraphs: [
          "Public transport is the cheapest but least convenient option. You may need to connect through Medan or Binjai, wait for buses, and then take a short local ride or walk at the Bukit Lawang end.",
          "If your flight lands late in the day, public transport can become stressful. In that case, either book a private transfer or sleep in Medan and travel the next morning."
        ]
      },
      {
        title: "Timing tips before a jungle trek",
        bullets: [
          "Avoid starting a jungle trek on the same day as an international arrival.",
          "Sleep in Bukit Lawang before a 2-day or 3-day trek if possible.",
          "Keep rain protection handy for luggage and documents.",
          "Tell your guide your flight number, arrival time, and guesthouse name.",
          "Bring Indonesian rupiah because village cash access can be limited."
        ]
      }
    ]
  }
];

const translatedInformationBlogPosts: BlogPost[] = [
  {
    slug: "de-bukit-lawang-oder-tanjung-puting-orang-utans",
    locale: "de",
    title: "Bukit Lawang oder Tanjung Puting: Wo sieht man Orang-Utans?",
    description:
      "Ein praktischer Vergleich zwischen Sumatra-Trekking in Bukit Lawang und Klotok-Bootstouren in Tanjung Puting.",
    date: "2026-06-09",
    readingTime: "5 Min. Lesezeit",
    image: "/images/stock/wildlife-13.webp",
    imageAlt: "Orang-Utan im Regenwald",
    tags: ["Bukit Lawang", "Tanjung Puting", "Orang-Utan Reise"],
    sections: [
      {
        title: "Kurzantwort",
        paragraphs: [
          "Bukit Lawang passt besser, wenn du aktiv wandern, in Nord-Sumatra bleiben und Medan, Berastagi oder Lake Toba kombinieren moechtest.",
          "Tanjung Puting passt besser, wenn du eine Flussreise in Borneo suchst, viel Zeit auf einem Klotok-Boot verbringst und die Orang-Utan-Stationen per Boot erreichst."
        ],
        bullets: [
          "Mehr Trekking: Bukit Lawang.",
          "Mehr Boot und Fluss: Tanjung Puting.",
          "Einfacher ab Medan: Bukit Lawang.",
          "Besser fuer eine Borneo-Route: Tanjung Puting."
        ]
      },
      {
        title: "Reisegefuehl",
        paragraphs: [
          "Bukit Lawang ist koerperlicher: feuchte Pfade, Anstiege, Pausen im Wald und bei laengeren Touren einfache Camps am Fluss.",
          "Tanjung Puting ist ruhiger und staerker vom Fluss gepraegt. Die Unterkunft und Fortbewegung sind oft Teil der Bootserfahrung."
        ]
      },
      {
        title: "Ethische Erwartungen",
        paragraphs: [
          "In beiden Gebieten gilt: Orang-Utans nicht fuettern, nicht beruehren und Abstand halten. Ein guter Guide verspricht keine erzwungene Begegnung, sondern erklaert die Regeln vor dem Start."
        ]
      }
    ]
  },
  {
    slug: "de-sumatra-orang-utan-trekking-kosten-2026",
    locale: "de",
    title: "Sumatra Orang-Utan Trekking Kosten 2026: Preisguide fuer Bukit Lawang",
    description:
      "Aktuelle Orientierung zu Preisen, Inklusivleistungen und Zusatzkosten fuer Orang-Utan-Trekking in Bukit Lawang.",
    date: "2026-06-09",
    readingTime: "5 Min. Lesezeit",
    image: "/images/stock/activity-11.webp",
    imageAlt: "Trekkinggruppe im Regenwald von Bukit Lawang",
    tags: ["Orang-Utan Trekking Kosten", "Bukit Lawang Preise", "Sumatra 2026"],
    sections: [
      {
        title: "Preisueberblick 2026",
        paragraphs: [
          "Die aktuellen Paketpreise auf dieser Website reichen von 55 EUR pro Person fuer einen 4-Stunden-Trek bis 320 EUR pro Person fuer einen 5-Tage-Trek. Private Eco-Jungle-Pakete starten bei 280 EUR pro Person."
        ],
        bullets: [
          "4 Stunden: 55 EUR pro Person.",
          "1 Tag: 70 EUR pro Person.",
          "2 Tage / 1 Nacht: 120 EUR pro Person.",
          "3 Tage / 2 Naechte: 170 EUR pro Person.",
          "Private Pakete: 280 bis 385 EUR pro Person."
        ]
      },
      {
        title: "Was oft enthalten ist",
        paragraphs: [
          "Bei Mehrtagestouren sind normalerweise Guide, einfache Dschungelmahlzeiten, Camp-Setup und Permit-Organisation Teil des Pakets. Transport, Unterkunft vor und nach dem Trek, Trinkgeld und persoenliche Versicherung solltest du separat einplanen."
        ]
      },
      {
        title: "Buchung und Anzahlung",
        paragraphs: [
          "Nach Verfuegbarkeitspruefung wird eine Anzahlung von 30% per E-Mail bestaetigt. Vergleiche nicht nur den billigsten Preis, sondern frage nach Guide, Gruppengroesse, Camp, Wetterplan und Wildtierregeln."
        ]
      }
    ]
  },
  {
    slug: "de-ist-bukit-lawang-sicher-solo-frauenreisende",
    locale: "de",
    title: "Ist Bukit Lawang sicher? Ehrlicher Guide fuer Solo- und Frauenreisende",
    description:
      "Sicherheitsnotizen fuer Bukit Lawang: Guides, Transport, Dschungelpfade, Fluss, Unterkunft und Solo-Reisen.",
    date: "2026-06-09",
    readingTime: "5 Min. Lesezeit",
    image: "/images/stock/activity-05.webp",
    imageAlt: "Reisende auf einem gruenen Weg in Bukit Lawang",
    tags: ["Bukit Lawang Sicherheit", "Solo Travel", "Frauenreise Sumatra"],
    sections: [
      {
        title: "Ehrliche Einschaetzung",
        paragraphs: [
          "Bukit Lawang ist ein etablierter Reiseort, aber kein risikofreier Ferienpark. Wege koennen dunkel, rutschig und uneben sein, der Fluss kann nach Regen staerker werden, und Transportstandards schwanken.",
          "Sicherheit beginnt vor der Tour: waehle einen klar erreichbaren Guide, komme moeglichst bei Tageslicht an und teile deine Plaene mit einer vertrauten Person."
        ]
      },
      {
        title: "Fuer Solo- und Frauenreisende",
        bullets: [
          "Frage vorab, wer dich fuehrt und wie gross die Gruppe ist.",
          "Klaere Schlaf- und Camp-Setup bei Mehrtagestouren.",
          "Buche privat, wenn du mehr Kontrolle ueber Tempo und Komfort willst.",
          "Lass dich nicht von unbekannten Anbietern unter Druck setzen."
        ]
      },
      {
        title: "Dschungel und Fluss",
        paragraphs: [
          "Die realen Risiken sind oft praktisch: Hitze, Dehydrierung, Insekten, muede Beine, rutschige Abstiege und Flussbedingungen. Gute Schuhe, Wasser und ehrliche Angaben zur Fitness sind wichtiger als Mut."
        ]
      }
    ]
  },
  {
    slug: "de-medan-flughafen-nach-bukit-lawang-transport",
    locale: "de",
    title: "Vom Flughafen Medan nach Bukit Lawang: Alle Transportoptionen",
    description:
      "Private Transfers, geteilte Fahrten und oeffentliche Verkehrsmittel von Kualanamu oder Medan nach Bukit Lawang.",
    date: "2026-06-09",
    readingTime: "4 Min. Lesezeit",
    image: "/images/blog-transport.png",
    imageAlt: "Flussblick in Bukit Lawang",
    tags: ["Medan nach Bukit Lawang", "Kualanamu Transfer", "Sumatra Transport"],
    sections: [
      {
        title: "Schnelle Empfehlung",
        paragraphs: [
          "Nach einem langen Flug ist ein vorab organisierter privater Transfer die einfachste Option. Er ist direkter, komfortabler und vermeidet Umstiege mit Gepaeck.",
          "Oeffentliche Verkehrsmittel sind moeglich, brauchen aber mehr Zeit, Geduld und flexible Ankunftsplaene."
        ]
      },
      {
        title: "Optionen",
        bullets: [
          "Privatwagen vom Flughafen oder Hotel: am bequemsten.",
          "Geteilter Transfer: guenstiger, aber abhaengig von Zeitplan und anderen Gaesten.",
          "Public Transport: billig, aber mit Umstiegen ueber Medan oder Binjai.",
          "Bei spaeter Ankunft: privat fahren oder eine Nacht in Medan einplanen."
        ]
      },
      {
        title: "Vor dem Trek",
        paragraphs: [
          "Starte keinen Mehrtagestrek direkt nach einem internationalen Flug. Plane eine Nacht in Bukit Lawang, pruefe dein Gepaeck, hebe Bargeld ab und bestaetige Treffpunkt und Startzeit mit deinem Guide."
        ]
      }
    ]
  },
  {
    slug: "fr-bukit-lawang-ou-tanjung-puting-orangs-outans",
    locale: "fr",
    title: "Bukit Lawang ou Tanjung Puting : ou voir des orangs-outans ?",
    description:
      "Comparaison simple entre trek a Sumatra et voyage en bateau klotok a Tanjung Puting pour voir des orangs-outans.",
    date: "2026-06-09",
    readingTime: "5 min de lecture",
    image: "/images/stock/wildlife-13.webp",
    imageAlt: "Orang-outan dans la canopee",
    tags: ["Bukit Lawang", "Tanjung Puting", "orang-outan Indonesie"],
    sections: [
      {
        title: "Reponse courte",
        paragraphs: [
          "Choisis Bukit Lawang si tu veux marcher dans la foret tropicale, rester sur un itineraire de Sumatra du Nord et combiner Medan, Berastagi ou le lac Toba.",
          "Choisis Tanjung Puting si tu veux une experience fluviale a Borneo, avec de longues heures sur un bateau klotok et des visites autour de stations de conservation."
        ],
        bullets: [
          "Plus de marche: Bukit Lawang.",
          "Plus de bateau: Tanjung Puting.",
          "Plus simple depuis Medan: Bukit Lawang.",
          "Plus logique pour un voyage a Borneo: Tanjung Puting."
        ]
      },
      {
        title: "Style de voyage",
        paragraphs: [
          "Bukit Lawang est plus physique: sentiers humides, montees, pauses dans la jungle et camps simples pres de la riviere pendant les treks de plusieurs jours.",
          "Tanjung Puting est plus lent et plus fluvial. Le bateau fait partie de l'experience autant que l'observation de la faune."
        ]
      },
      {
        title: "Ethique",
        paragraphs: [
          "Dans les deux destinations, il faut garder ses distances, ne pas nourrir les animaux et ne jamais toucher les orangs-outans. Un bon guide ne force pas une rencontre."
        ]
      }
    ]
  },
  {
    slug: "fr-prix-trek-orang-outan-sumatra-2026",
    locale: "fr",
    title: "Prix du trek orang-outan a Sumatra en 2026 : guide des couts",
    description:
      "Guide 2026 des prix de trek a Bukit Lawang, inclusions habituelles, frais extras et acompte.",
    date: "2026-06-09",
    readingTime: "5 min de lecture",
    image: "/images/stock/activity-11.webp",
    imageAlt: "Groupe de trek dans la foret de Sumatra",
    tags: ["prix trek orang-outan", "Bukit Lawang prix", "Sumatra 2026"],
    sections: [
      {
        title: "Prix 2026",
        paragraphs: [
          "Les prix actuels affiches sur ce site vont de 55 EUR par personne pour un trek de 4 heures a 320 EUR par personne pour un trek de 5 jours. Les forfaits prives commencent a 280 EUR par personne."
        ],
        bullets: [
          "4 heures: 55 EUR par personne.",
          "1 jour: 70 EUR par personne.",
          "2 jours / 1 nuit: 120 EUR par personne.",
          "3 jours / 2 nuits: 170 EUR par personne.",
          "Forfaits prives: 280 a 385 EUR par personne."
        ]
      },
      {
        title: "Ce qui est souvent inclus",
        paragraphs: [
          "Les treks avec nuit incluent generalement le guide, les repas simples dans la jungle, le camp et l'organisation des permis. Prevois a part le transport, l'hebergement avant ou apres, les pourboires et l'assurance personnelle."
        ]
      },
      {
        title: "Acompte",
        paragraphs: [
          "Apres verification des dates et disponibilites, un acompte de 30% est demande avec instructions confirmees par e-mail. Demande toujours ce qui est inclus avant de comparer les prix."
        ]
      }
    ]
  },
  {
    slug: "fr-bukit-lawang-est-il-sur-voyage-solo-femmes",
    locale: "fr",
    title: "Bukit Lawang est-il sur ? Guide honnete pour voyageurs solo et femmes",
    description:
      "Conseils de securite pour Bukit Lawang: guides, transport, trek jungle, riviere et voyage solo.",
    date: "2026-06-09",
    readingTime: "5 min de lecture",
    image: "/images/stock/activity-05.webp",
    imageAlt: "Voyageuse sur un chemin vert a Bukit Lawang",
    tags: ["securite Bukit Lawang", "voyage solo", "femmes Sumatra"],
    sections: [
      {
        title: "Reponse honnete",
        paragraphs: [
          "Bukit Lawang est un village touristique connu, mais il ne faut pas oublier les risques pratiques: chemins glissants, humidite, riviere, zones peu eclairees et standards de transport variables.",
          "Les meilleurs choix sont simples: reserver un guide fiable, arriver de jour si possible, garder de l'argent liquide et partager ton plan avec quelqu'un."
        ]
      },
      {
        title: "Voyage solo et femmes",
        bullets: [
          "Demande qui sera ton guide et combien de personnes seront dans le groupe.",
          "Clarifie l'organisation du camp pour les treks avec nuit.",
          "Choisis un trek prive si tu veux plus de controle.",
          "Evite les vendeurs inconnus qui mettent la pression."
        ]
      },
      {
        title: "Jungle et riviere",
        paragraphs: [
          "Les risques les plus courants sont la chaleur, la fatigue, les insectes, les descentes glissantes et les conditions de riviere. De bonnes chaussures et une communication honnete avec le guide comptent beaucoup."
        ]
      }
    ]
  },
  {
    slug: "fr-aeroport-medan-bukit-lawang-transport",
    locale: "fr",
    title: "Aeroport de Medan a Bukit Lawang : toutes les options de transport",
    description:
      "Options de transport depuis Kualanamu ou Medan vers Bukit Lawang: voiture privee, transport partage, bus et connexions.",
    date: "2026-06-09",
    readingTime: "4 min de lecture",
    image: "/images/blog-transport.png",
    imageAlt: "Vue de riviere a Bukit Lawang",
    tags: ["Medan Bukit Lawang", "transport Kualanamu", "transfert Sumatra"],
    sections: [
      {
        title: "Le plus simple",
        paragraphs: [
          "Une voiture privee reservee a l'avance est l'option la plus simple apres un vol. Elle evite les changements avec les bagages et te depose directement pres de ton hebergement.",
          "Le transport public est moins cher, mais il demande plus de temps, d'attente et de flexibilite."
        ]
      },
      {
        title: "Options",
        bullets: [
          "Voiture privee: meilleure option pour arrivee tardive ou bagages.",
          "Transport partage: possible si tes horaires sont flexibles.",
          "Bus public: economique, mais avec changements via Medan ou Binjai.",
          "Arrivee tardive: dormir a Medan ou reserver un transfert direct."
        ]
      },
      {
        title: "Avant le trek",
        paragraphs: [
          "Evite de commencer un trek jungle le jour meme d'un vol international. Une nuit a Bukit Lawang rend le depart plus calme et plus sur."
        ]
      }
    ]
  },
  {
    slug: "nl-bukit-lawang-of-tanjung-puting-orang-oetans",
    locale: "nl",
    title: "Bukit Lawang of Tanjung Puting: waar zie je orang-oetans?",
    description:
      "Een praktische vergelijking tussen jungletrekking in Sumatra en een klotok-bootreis in Tanjung Puting.",
    date: "2026-06-09",
    readingTime: "5 min leestijd",
    image: "/images/stock/wildlife-13.webp",
    imageAlt: "Orang-oetan in het regenwoud",
    tags: ["Bukit Lawang", "Tanjung Puting", "orang-oetan Indonesie"],
    sections: [
      {
        title: "Kort antwoord",
        paragraphs: [
          "Kies Bukit Lawang als je actief wilt wandelen, vanuit Medan reist en Noord-Sumatra wilt combineren met Berastagi, Lake Toba of Tangkahan.",
          "Kies Tanjung Puting als je een Borneo-rivierervaring wilt met veel tijd op een klotok-boot en bezoeken aan bekende orang-oetanlocaties."
        ],
        bullets: [
          "Meer trekking: Bukit Lawang.",
          "Meer boot en rivier: Tanjung Puting.",
          "Eenvoudiger vanaf Medan: Bukit Lawang.",
          "Logischer voor Borneo: Tanjung Puting."
        ]
      },
      {
        title: "Hoe het voelt",
        paragraphs: [
          "Bukit Lawang is fysieker: vochtige paden, klimmen, junglemaaltijden en eenvoudige rivierkampen tijdens meerdaagse tochten.",
          "Tanjung Puting is rustiger en meer bootgericht. De rivier en de klotok zijn een groot deel van de ervaring."
        ]
      },
      {
        title: "Ethisch kijken",
        paragraphs: [
          "In beide gebieden geldt: afstand houden, niet voeren en orang-oetans nooit aanraken. Een goede gids forceert geen ontmoeting."
        ]
      }
    ]
  },
  {
    slug: "nl-orang-oetan-trekking-sumatra-kosten-2026",
    locale: "nl",
    title: "Kosten voor orang-oetan trekking in Sumatra in 2026",
    description:
      "Overzicht van Bukit Lawang trekprijzen, inbegrepen onderdelen, extra kosten en aanbetaling in 2026.",
    date: "2026-06-09",
    readingTime: "5 min leestijd",
    image: "/images/stock/activity-11.webp",
    imageAlt: "Trekkinggroep in het regenwoud van Sumatra",
    tags: ["orang-oetan trekking kosten", "Bukit Lawang prijzen", "Sumatra 2026"],
    sections: [
      {
        title: "Prijsindicatie 2026",
        paragraphs: [
          "De actuele pakketprijzen op deze site lopen van 55 EUR per persoon voor een trek van 4 uur tot 320 EUR per persoon voor een trek van 5 dagen. Privepakketten starten bij 280 EUR per persoon."
        ],
        bullets: [
          "4 uur: 55 EUR per persoon.",
          "1 dag: 70 EUR per persoon.",
          "2 dagen / 1 nacht: 120 EUR per persoon.",
          "3 dagen / 2 nachten: 170 EUR per persoon.",
          "Privepakketten: 280 tot 385 EUR per persoon."
        ]
      },
      {
        title: "Wat meestal inbegrepen is",
        paragraphs: [
          "Bij meerdaagse treks zijn gids, eenvoudige junglemaaltijden, kampopzet en permit-organisatie meestal onderdeel van het pakket. Transport, accommodatie, fooi en persoonlijke verzekering plan je apart."
        ]
      },
      {
        title: "Aanbetaling",
        paragraphs: [
          "Na beschikbaarheidscontrole wordt een aanbetaling van 30% gevraagd via e-mailbevestigde instructies. Vergelijk niet alleen prijs, maar ook gids, groep, kamp, veiligheidsplan en wildlife-regels."
        ]
      }
    ]
  },
  {
    slug: "nl-is-bukit-lawang-veilig-solo-vrouwelijke-reizigers",
    locale: "nl",
    title: "Is Bukit Lawang veilig? Eerlijke gids voor solo- en vrouwelijke reizigers",
    description:
      "Veiligheidsadvies voor Bukit Lawang: gidsen, transport, jungle, rivier, accommodatie en solo reizen.",
    date: "2026-06-09",
    readingTime: "5 min leestijd",
    image: "/images/stock/activity-05.webp",
    imageAlt: "Reiziger op een groen pad in Bukit Lawang",
    tags: ["Bukit Lawang veiligheid", "solo travel", "vrouwelijke reizigers Sumatra"],
    sections: [
      {
        title: "Eerlijk antwoord",
        paragraphs: [
          "Bukit Lawang is een bekende reisplek, maar niet zonder praktische risico's. Denk aan gladde paden, vochtigheid, rivierstroming, donkere stukken en wisselende transportstandaarden.",
          "De veiligste keuzes zijn simpel: boek een betrouwbare gids, kom liefst overdag aan, houd contant geld bij je en deel je planning met iemand thuis."
        ]
      },
      {
        title: "Solo en vrouwelijk reizen",
        bullets: [
          "Vraag vooraf wie je gids is en hoe groot de groep wordt.",
          "Bespreek de slaapopstelling bij meerdaagse treks.",
          "Kies prive als je meer controle over tempo en comfort wilt.",
          "Laat je niet onder druk zetten door onbekende aanbieders."
        ]
      },
      {
        title: "Jungle en rivier",
        paragraphs: [
          "De meest voorkomende risico's zijn hitte, vermoeidheid, insecten, gladde afdalingen en veranderende riviercondities. Goede schoenen en eerlijk overleg met je gids zijn belangrijk."
        ]
      }
    ]
  },
  {
    slug: "nl-medan-airport-naar-bukit-lawang-vervoer",
    locale: "nl",
    title: "Van Medan Airport naar Bukit Lawang: alle vervoersopties",
    description:
      "Praktische opties van Kualanamu of Medan naar Bukit Lawang: priveauto, gedeeld vervoer, bus en overstappen.",
    date: "2026-06-09",
    readingTime: "4 min leestijd",
    image: "/images/blog-transport.png",
    imageAlt: "Rivierzicht in Bukit Lawang",
    tags: ["Medan naar Bukit Lawang", "Kualanamu transfer", "Sumatra vervoer"],
    sections: [
      {
        title: "Makkelijkste optie",
        paragraphs: [
          "Een vooraf geregelde priveauto is meestal het makkelijkst na een vlucht. Je hoeft niet over te stappen met bagage en rijdt direct richting je accommodatie.",
          "Openbaar vervoer is goedkoper, maar vraagt meer tijd, wachten en flexibiliteit."
        ]
      },
      {
        title: "Opties",
        bullets: [
          "Priveauto: beste keuze bij late aankomst of veel bagage.",
          "Gedeeld vervoer: mogelijk als je flexibel bent.",
          "Openbaar vervoer: goedkoop, maar met overstappen via Medan of Binjai.",
          "Late aankomst: slaap in Medan of boek direct transport."
        ]
      },
      {
        title: "Voor de trek",
        paragraphs: [
          "Start geen meerdaagse jungletrek direct na een internationale vlucht. Een nacht in Bukit Lawang maakt de eerste trekkingdag rustiger en veiliger."
        ]
      }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  ...informationBlogPosts,
  ...translatedInformationBlogPosts,
  {
    slug: "2-week-sumatra-itinerary-europe-travelers",
    title: "The Ultimate 2-Week North Sumatra Itinerary: Bukit Lawang, Lake Toba, and Berastagi",
    description:
      "A complete travel guide for European visitors looking to explore the best of North Sumatra, from orangutan trekking to volcanic lakes.",
    date: "2026-05-30",
    readingTime: "8 min read",
    image: "/images/stock/activity-10.webp",
    imageAlt: "Stunning landscape view of Lake Toba in North Sumatra",
    tags: ["Sumatra Itinerary", "Lake Toba", "Berastagi", "Bukit Lawang travel", "European travelers"],
    sections: [
      {
        title: "Why 2 weeks is the perfect amount of time",
        paragraphs: [
          "For travelers flying all the way from Europe, spending just a few days in Sumatra doesn't do justice to the scale of the island. A 2-week itinerary allows you to recover from jet lag, immerse yourself in the jungle, experience unique local cultures, and relax by the largest volcanic lake in the world without rushing.",
          "This classic 'North Sumatra Loop' is the most popular route for European backpackers and couples, combining wildlife, adventure, and relaxation."
        ]
      },
      {
        title: "Days 1-5: Arrival and the Bukit Lawang Jungle",
        paragraphs: [
          "Most European flights arrive in Medan (Kualanamu International Airport). Skip staying in the busy city and arrange a private transfer straight to Bukit Lawang. The 3.5 to 4-hour drive lets you wake up on your first full day to the sounds of the rainforest."
        ],
        bullets: [
          "Day 1: Arrive in Medan, private car to Bukit Lawang, rest at your riverside guesthouse.",
          "Day 2: Relax, explore the village, or take a short Bat Cave tour to acclimatize.",
          "Days 3-5: Embark on a 3-Day/2-Night ethical jungle trek. Sleep by the river, track semi-wild orangutans, and return via traditional tube rafting."
        ]
      },
      {
        title: "Days 6-8: The cool climate of Berastagi",
        paragraphs: [
          "After the heat and humidity of the jungle, the highland town of Berastagi is incredibly refreshing. You can arrange a driver from Bukit Lawang directly to Berastagi (about 4-5 hours).",
          "Berastagi is famous for its fruit markets, traditional Batak Karo villages, and accessible volcanoes."
        ],
        bullets: [
          "Day 6: Drive from Bukit Lawang to Berastagi. Visit the vibrant local fruit market.",
          "Day 7: Wake up early for a sunrise hike up Mount Sibayak (an active volcano), followed by a soak in the local hot springs.",
          "Day 8: Visit the traditional Sipisopiso waterfall on your way down toward Lake Toba."
        ]
      },
      {
        title: "Days 9-13: Relaxing at Lake Toba (Samosir Island)",
        paragraphs: [
          "From Berastagi, it’s a scenic drive down to Parapat, where you catch a ferry across the massive crater lake to Samosir Island. This is where you slow down.",
          "Lake Toba is twice the size of Singapore and sits in the caldera of a supervolcano. It’s culturally rich (the heartland of the Batak people) and incredibly peaceful."
        ],
        bullets: [
          "Day 9: Ferry to Samosir Island (Tuktuk). Check into your lakeside accommodation.",
          "Days 10-11: Rent a scooter and drive around the island. Visit traditional Batak houses, stone chairs, and weaving villages.",
          "Days 12-13: Swim in the lake, read a book, enjoy local coffee, and recharge."
        ]
      },
      {
        title: "Day 14: Return to Medan and depart",
        paragraphs: [
          "On your final day, take the morning ferry back to Parapat and hire a shared taxi or private car to Kualanamu Airport (KNO) for your flight home or your next destination in Indonesia.",
          "This loop is safe, well-established, and offers the perfect balance of adventure and recovery for long-haul travelers."
        ]
      }
    ]
  },
  {
    slug: "weekend-guide-to-bukit-lawang-from-singapore",
    title: "The Ultimate Weekend Guide to Bukit Lawang from Singapore & Malaysia",
    description:
      "How to plan a quick weekend getaway from Singapore or Kuala Lumpur to Bukit Lawang for an unforgettable orangutan trekking experience.",
    date: "2026-05-30",
    readingTime: "5 min read",
    image: "/images/stock/activity-01.webp",
    imageAlt: "Traveler standing near the river in Bukit Lawang",
    tags: ["Singapore to Sumatra", "weekend trip", "Bukit Lawang travel", "short getaway", "Malaysia"],
    sections: [
      {
        title: "A quick escape to the jungle",
        paragraphs: [
          "For travelers based in Singapore or Malaysia, Bukit Lawang offers a complete contrast to city life, and it is closer than you think. A short, direct flight to Medan followed by a drive into North Sumatra puts you right on the edge of the Gunung Leuser National Park.",
          "This makes it a perfect weekend getaway for nature lovers, couples, or families who want a real jungle experience without burning through all their annual leave."
        ]
      },
      {
        title: "The ideal weekend itinerary",
        paragraphs: [
          "To maximize your time, take a Friday evening or Saturday morning flight from Changi (SIN) or Kuala Lumpur (KUL) to Kualanamu International Airport (KNO) in Medan. From there, a pre-arranged private car is the fastest way to get you straight to Bukit Lawang in about 3.5 to 4 hours."
        ],
        bullets: [
          "Friday/Saturday: Arrive in Medan, private transfer to Bukit Lawang, check into your riverside guesthouse, and relax.",
          "Sunday: Join a 1-day or half-day ethical orangutan trek. After lunch in the jungle, transfer back to Medan for an evening flight home."
        ]
      },
      {
        title: "Trekking options for short stays",
        paragraphs: [
          "If you only have the weekend, a 1-day jungle trek or a 4-hour walk is highly recommended. These shorter treks still give you an excellent chance of spotting semi-wild orangutans, Thomas leaf monkeys, and long-tailed macaques.",
          "For a more relaxed pace, you can also consider a Village Tour or Bat Cave visit to experience local culture before heading back."
        ]
      },
      {
        title: "Travel tips for weekenders",
        bullets: [
          "Book a private driver in advance to avoid wasting time negotiating at the airport.",
          "Pack light—a small backpack with quick-dry clothes and good walking shoes is all you need.",
          "Bring some Indonesian Rupiah (IDR), as ATMs in Bukit Lawang can occasionally be unreliable.",
          "Confirm flight times carefully so you have enough buffer between the trek ending and your airport transfer."
        ]
      }
    ]
  },
  {
    slug: "3-day-bukit-lawang-jungle-trek-itinerary",
    title: "3-Day Bukit Lawang Jungle Trek Itinerary for First-Time Visitors",
    description:
      "A practical day-by-day guide to a 3-day orangutan trekking package in Bukit Lawang, including camps, meals, wildlife rules, and river return.",
    date: "2026-05-29",
    readingTime: "7 min read",
    image: "/images/stock/activity-07.webp",
    imageAlt: "Rainforest trekking trail near Bukit Lawang",
    tags: ["Bukit Lawang", "3 day trek", "orangutan trekking"],
    sections: [
      {
        title: "Why the 3-day trek is popular",
        paragraphs: [
          "A 3-day Bukit Lawang jungle trek is often the best balance for travelers from Europe. It is long enough to feel the rhythm of the rainforest, sleep beside the river, and move beyond the busiest trails, but short enough to fit into a two-week Indonesia itinerary.",
          "The route is not a fixed performance. Weather, group fitness, wildlife movement, and national park guidance all influence the final plan. A good guide explains this before the trek so expectations stay realistic."
        ]
      },
      {
        title: "Day 1: village edge to first camp",
        paragraphs: [
          "The first morning usually starts in Bukit Lawang around breakfast time. After checking footwear, water, and day bags, the guide leads the group into the forest at a slow pace. The goal is not to rush distance, but to read the canopy, listen for movement, and keep the group safe.",
          "Lunch and fruit are normally eaten inside the forest. By late afternoon, the group reaches a basic riverside camp where the guide team prepares dinner and sets up the sleeping area."
        ]
      },
      {
        title: "Day 2: deeper forest and camp life",
        paragraphs: [
          "The second day is where many guests feel the difference between a short trek and a multi-day package. Trails can become quieter, steeper, and muddier. There is more time to learn about forest plants, insects, gibbons, Thomas leaf monkeys, macaques, and the wider ecosystem around orangutan habitat.",
          "Camp life is simple. Expect river washing, fresh food, tea or coffee, and a night soundtrack of water, insects, and forest movement."
        ]
      },
      {
        title: "Day 3: final walk and tube rafting return",
        paragraphs: [
          "The final morning is usually shorter. Depending on conditions, the group may walk again, visit a river spot, or return by traditional tube rafting toward Bukit Lawang. Rafting should always depend on river level and safety judgment.",
          "The best way to book is to share your dates, group size, fitness level, and accommodation needs in advance. That gives the guide room to plan a route that fits your group rather than forcing one rigid schedule."
        ],
        bullets: [
          "Best for active first-time visitors",
          "Usually includes two simple jungle nights",
          "Ask about current park permits and rafting conditions before confirming"
        ]
      }
    ]
  },
  {
    slug: "what-to-pack-for-bukit-lawang-jungle-trek",
    title: "What to Pack for a Bukit Lawang Jungle Trek",
    description:
      "A focused packing list for Sumatra orangutan trekking: shoes, rain gear, dry bags, money, health items, and what to leave at the guesthouse.",
    date: "2026-05-29",
    readingTime: "6 min read",
    image: "/images/stock/activity-03.webp",
    imageAlt: "Guest walking through dense green rainforest in North Sumatra",
    tags: ["packing list", "Sumatra travel", "jungle trekking"],
    sections: [
      {
        title: "Pack light and practical",
        paragraphs: [
          "Bukit Lawang trekking is humid, green, and often muddy. The best packing strategy is simple: keep your main luggage at the guesthouse and carry only what you need for the forest.",
          "European travelers often arrive with large backpacks after a long flight. Before the trek, repack into a small day bag or dry bag so climbs, river edges, and muddy descents stay manageable."
        ]
      },
      {
        title: "Clothing and footwear",
        bullets: [
          "Hiking shoes, trail shoes, or boots with real grip",
          "Quick-dry shirt and trousers or shorts",
          "Spare socks for overnight packages",
          "Light rain jacket or poncho",
          "Swimwear or spare clothes for river washing",
          "A clean dry set for sleeping at camp"
        ]
      },
      {
        title: "Health and comfort items",
        paragraphs: [
          "Do not rely on buying specialist items in the village at the last minute. Bring personal medication, allergy tablets, blister care, and mosquito repellent from home or Medan.",
          "A headlamp is useful on overnight treks because camp lighting is basic. A small towel and dry bag make river washing and sudden rain much easier."
        ],
        bullets: [
          "Mosquito repellent and sunscreen",
          "Personal medicine in original packaging",
          "Headlamp or flashlight",
          "Reusable water bottle",
          "Small towel and dry bag",
          "Travel insurance details"
        ]
      },
      {
        title: "Money and documents",
        paragraphs: [
          "Cash is still useful in Bukit Lawang. Bring Indonesian rupiah for village expenses, tips, snacks, and small purchases. Keep passport and bank cards protected from rain and river splashes.",
          "If you are joining a multi-day trek, ask where your main luggage will be stored and what you should carry into the forest."
        ]
      }
    ]
  },
  {
    slug: "best-time-to-visit-bukit-lawang-from-europe",
    title: "Best Time to Visit Bukit Lawang from Europe",
    description:
      "How to think about seasons, rain, humidity, European holidays, and trek length when planning a Bukit Lawang orangutan trip.",
    date: "2026-05-29",
    readingTime: "6 min read",
    image: "/images/blog-best-time.png",
    imageAlt: "Orangutan in the green rainforest canopy of Bukit Lawang",
    tags: ["best time", "Europe to Sumatra", "Bukit Lawang travel"],
    sections: [
      {
        title: "Bukit Lawang is a year-round rainforest destination",
        paragraphs: [
          "There is no single perfect month for every traveler. Bukit Lawang is humid and tropical throughout the year, and rain can happen in any season. The better question is how much flexibility you want and how comfortable you are with mud, heat, and changing river conditions.",
          "For many European guests, the best itinerary includes one buffer night before the trek and one after it. That reduces stress if flights, road transfers, or weather slow the journey."
        ]
      },
      {
        title: "Planning around European holidays",
        paragraphs: [
          "Summer holidays, Easter breaks, Christmas, and New Year can be attractive for long-distance travel, but they can also make flights and accommodation more competitive. If you need a private guide, family-friendly pace, or specific room type, enquire early.",
          "A shoulder-season approach often works well: fewer time pressures, more flexible flight choices, and easier room availability in Bukit Lawang."
        ]
      },
      {
        title: "Rain, river levels, and route decisions",
        paragraphs: [
          "Rain does not automatically cancel a trek. It can make the forest beautiful and active, but it also changes mud, river crossings, leeches, and tube rafting safety. A responsible guide chooses the route based on the conditions of the day.",
          "If tube rafting is important to you, remember that river return always depends on water level and safety judgment."
        ]
      },
      {
        title: "How long should you stay?",
        bullets: [
          "One full day in Bukit Lawang is enough for a short trek only.",
          "Three nights in the area gives space for a 2-day trek plus recovery.",
          "Four or five nights works better for a 3-day trek, village time, and a less rushed transfer."
        ]
      }
    ]
  },
  {
    slug: "ethical-orangutan-trekking-conservation-local-community",
    title: "Ethical Orangutan Trekking, Conservation, and Local Community Impact",
    description:
      "Why no-feeding rules, local guide work, and conservation-minded travel choices matter for orangutan habitat around Bukit Lawang.",
    date: "2026-05-29",
    readingTime: "8 min read",
    image: "/images/blog-conservation.png",
    imageAlt: "Wild orangutan resting in a rainforest tree",
    tags: ["ethical trekking", "conservation", "local community"],
    sections: [
      {
        title: "The best encounter is still wild",
        paragraphs: [
          "Orangutan trekking should never turn wildlife into a guaranteed show. The most meaningful encounters happen when guests keep distance, stay quiet, follow the guide, and accept that animals decide where they move.",
          "No feeding and no touching are not just polite rules. Feeding changes animal behavior, increases conflict risk, and can expose wildlife to human illness. Touching is unsafe for both people and orangutans."
        ]
      },
      {
        title: "Why local guide income matters",
        paragraphs: [
          "Conservation becomes stronger when local communities earn a fair living from keeping the forest alive. Guides, cooks, drivers, guesthouses, farms, and village services all become part of the travel economy.",
          "That is why selected packages should do more than pay for a walk. The vision is to reserve part of travel income for conservation-minded action and local benefit around Bukit Lawang."
        ]
      },
      {
        title: "What responsible guests can do",
        bullets: [
          "Choose a guide who explains wildlife rules before entering the forest.",
          "Do not ask guides to get closer for photos.",
          "Carry rubbish out of the forest.",
          "Use refillable bottles where practical.",
          "Ask how your package supports local people and conservation work."
        ]
      },
      {
        title: "Better questions before booking",
        paragraphs: [
          "Instead of asking only whether orangutans are guaranteed, ask how the trek handles distance, food, camp waste, river safety, and local staffing. Those answers reveal the quality of the experience.",
          "A responsible trek may feel slower, but that slower pace is exactly what protects the forest experience visitors came to see."
        ]
      }
    ]
  },
  {
    slug: "how-to-get-to-bukit-lawang-from-medan",
    title: "How to Get to Bukit Lawang from Medan",
    description:
      "Transport options from Medan and Kuala Namu International Airport to Bukit Lawang, with timing tips for European arrivals.",
    date: "2026-05-29",
    readingTime: "5 min read",
    image: "/images/blog-transport.png",
    imageAlt: "River view near Bukit Lawang village in North Sumatra",
    tags: ["Medan to Bukit Lawang", "North Sumatra travel", "transport"],
    sections: [
      {
        title: "Start with Medan or Kuala Namu",
        paragraphs: [
          "Most visitors reach Bukit Lawang through Medan or Kuala Namu International Airport. From there, the trip continues by road into North Sumatra's plantation, village, and forest-edge landscapes.",
          "After a long-haul journey from Europe, it is usually better to avoid a same-day trek. Plan time to recover, withdraw cash, check your bag, and sleep before entering the forest."
        ]
      },
      {
        title: "Private transfer",
        paragraphs: [
          "A private car is the simplest option, especially for couples, families, late arrivals, or anyone carrying trekking luggage. It costs more than public transport, but it reduces waiting time and makes the first day easier."
        ]
      },
      {
        title: "Shared or public transport",
        paragraphs: [
          "Shared transport and public bus routes can be cheaper, but they take more patience. Expect transfers, waiting, and less predictable arrival times. If you choose this option, keep your schedule flexible and avoid booking a trek too close to arrival."
        ]
      },
      {
        title: "Arrival tips",
        bullets: [
          "Tell your guide your arrival date, flight time, and accommodation name.",
          "Carry cash because village card payment options can be limited.",
          "Keep rain protection available for bags and documents.",
          "Choose an overnight in Bukit Lawang before a multi-day trek."
        ]
      }
    ]
  }
];
