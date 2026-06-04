export type ContentSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export type BlogPost = {
  slug: string;
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
        "Ask for current payment details before sending money. A deposit may be requested to reserve guide time, transport, accommodation, or private package arrangements.",
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

export const privacyPolicy = {
  title: "Privacy Policy",
  description:
    "How OrangutanAdventureSumatra handles booking enquiries, language preference storage, external booking links, and privacy rights for visitors, including European GDPR rights.",
  lastUpdated: "29 May 2026",
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
        "Basic technical data normally produced by web hosting, such as IP address, device type, browser, requested page, and timestamp.",
        "A local browser language preference named oas-locale so the site can remember your selected language."
      ]
    },
    {
      title: "How we use your data",
      bullets: [
        "To answer enquiries and prepare a suitable trekking or travel package.",
        "To coordinate guide availability, meals, transport, accommodation, deposits, and safety planning.",
        "To keep basic business records and improve the clarity of this website.",
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
        "This website does not require marketing cookies to show its main content. It uses local browser storage only to remember the language you selected. You can clear this through your browser settings."
      ]
    }
  ] as readonly ContentSection[]
} as const;

export const blogPosts: BlogPost[] = [
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
