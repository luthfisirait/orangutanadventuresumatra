import { siteName } from "./seo";
import { siteText, trekBase, type TrekId } from "./site-content";

export type TrekDetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TrekProfileItem = {
  label: string;
  value: string;
};

export type TrekDetail = {
  id: TrekId;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  profile: TrekProfileItem[];
  highlights: string[];
  sections: TrekDetailSection[];
  relatedLinks: Array<{ href: string; label: string }>;
};

const trekBaseById = Object.fromEntries(trekBase.map((trek) => [trek.id, trek])) as Record<
  TrekId,
  (typeof trekBase)[number]
>;

function bookingUrlForTrek(id: TrekId) {
  return `/booking?package=${encodeURIComponent(id)}#booking-form`;
}

function buildDetail(
  id: TrekId,
  slug: string,
  input: {
    heroKicker: string;
    heroTitle?: string;
    heroDescription: string;
    profile: TrekProfileItem[];
    itinerary: TrekDetailSection[];
    included: string[];
    notIncluded?: string[];
    bring: string[];
    notes?: TrekDetailSection[];
    relatedLinks?: Array<{ href: string; label: string }>;
  }
): TrekDetail {
  const trek = trekBaseById[id];
  const title = siteText.en.treks[id].title;

  return {
    id,
    slug,
    title,
    metaTitle: `${title} | Trek details | ${siteName}`,
    metaDescription: input.heroDescription,
    heroKicker: input.heroKicker,
    heroTitle: input.heroTitle ?? title,
    heroDescription: input.heroDescription,
    image: trek.image,
    imageAlt: `${title} in the Bukit Lawang rainforest`,
    profile: input.profile,
    highlights: siteText.en.treks[id].highlights,
    relatedLinks: input.relatedLinks ?? [
      { href: "/treks", label: "Browse all trek details" },
      { href: bookingUrlForTrek(id), label: "Open booking form" }
    ],
    sections: [
      ...input.itinerary,
      {
        title: "What's included",
        bullets: input.included
      },
      ...(input.notIncluded
        ? [
            {
              title: "What's not included",
              bullets: input.notIncluded
            }
          ]
        : []),
      {
        title: "What to bring",
        bullets: input.bring
      },
      ...(input.notes ?? [])
    ]
  };
}

export const trekDetailPages = {
  "4h": buildDetail("4h", "4-hour-jungle-trek", {
    heroKicker: "Half-day trek",
    heroTitle: siteText.en.treks["4h"].title,
    heroDescription:
      "A short Bukit Lawang forest walk for travelers with limited time, families, or anyone who wants a lighter first look at the rainforest.",
    profile: [
      { label: "Duration", value: trekBaseById["4h"].duration },
      { label: "Grade", value: "Easy / Moderate" },
      { label: "Departure", value: "Bukit Lawang, around 8:30-9 am" },
      { label: "Arrival", value: "Bukit Lawang, late morning" },
      { label: "Price", value: trekBaseById["4h"].price },
      { label: "Best for", value: "Short stays and first visits" }
    ],
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
  }),
  "1d": buildDetail("1d", "1-day-jungle-trek", {
    heroKicker: "Full-day trek",
    heroTitle: siteText.en.treks["1d"].title,
    heroDescription:
      "A full-day route with lunch in the jungle and a return before evening for travelers who want one strong rainforest day in Bukit Lawang.",
    profile: [
      { label: "Duration", value: trekBaseById["1d"].duration },
      { label: "Grade", value: "Medium" },
      { label: "Departure", value: "Bukit Lawang, around 9 am" },
      { label: "Arrival", value: "Bukit Lawang, afternoon" },
      { label: "Price", value: trekBaseById["1d"].price },
      { label: "Best for", value: "Visitors who want a complete day in the forest" }
    ],
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
  }),
  "2d": buildDetail("2d", "2-day-jungle-trek", {
    heroKicker: "One-night trek",
    heroTitle: siteText.en.treks["2d"].title,
    heroDescription:
      "A one-night jungle stay with riverside camp life and more time for wildlife, food, and forest rhythm.",
    profile: [
      { label: "Duration", value: trekBaseById["2d"].duration },
      { label: "Grade", value: "Medium" },
      { label: "Departure", value: "Bukit Lawang, around 9 am" },
      { label: "Arrival", value: "Bukit Lawang, afternoon (+1)" },
      { label: "Price", value: trekBaseById["2d"].price },
      { label: "Accommodation", value: "Tent with mosquito net" }
    ],
    itinerary: [
      {
        title: "Day 1",
        paragraphs: [
          "The first day starts in Bukit Lawang and slowly moves uphill into the forest, with fruit breaks, lunch on the trail, and time to watch for orangutans and other wildlife.",
          "By late afternoon, you reach a basic riverside camp and settle into the rhythm of dinner, camp talk, and forest sounds."
        ]
      },
      {
        title: "Day 2",
        paragraphs: [
          "After breakfast, the second day gives you more forest time before the walk returns toward Bukit Lawang.",
          "If the river, safety, and package arrangement allow it, the return can include tube rafting back to the village."
        ]
      }
    ],
    included: [
      "Local guide and park permits",
      "Meals during the trek",
      "Camping equipment such as tent and mosquito net",
      "Simple jungle camp setup"
    ],
    notIncluded: [
      "Personal travel insurance",
      "Tips for the guide team",
      "Extra drinks or snacks outside the trek",
      "Transport to Bukit Lawang unless arranged separately"
    ],
    bring: [
      "Water bottle, headlamp, and towel",
      "Spare clothes, socks, and a rain layer",
      "Mosquito repellent, sunscreen, and basic medicine",
      "Cash, camera, and a dry bag for small items"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "Overnight camps are simple by design. Keep luggage light and expect a basic forest stay rather than hotel comfort.",
          "The route can change with weather, river level, and group pace."
        ]
      }
    ]
  }),
  "3d": buildDetail("3d", "3-day-jungle-trek", {
    heroKicker: "Classic trek",
    heroTitle: siteText.en.treks["3d"].title,
    heroDescription:
      "A balanced three-day route with two jungle nights, more time away from the village, and a classic river return when safe.",
    profile: [
      { label: "Duration", value: trekBaseById["3d"].duration },
      { label: "Grade", value: "Medium / High" },
      { label: "Departure", value: "Bukit Lawang, around 9 am" },
      { label: "Arrival", value: "Bukit Lawang, afternoon (+2)" },
      { label: "Price", value: trekBaseById["3d"].price },
      { label: "Accommodation", value: "Tent with mosquito net" }
    ],
    itinerary: [
      {
        title: "Day 1",
        paragraphs: [
          "Meet your guide in Bukit Lawang, head into the forest after breakfast, and spend the first day walking at a measured pace with fruit stops, lunch, and wildlife watching.",
          "The first camp is simple and usually sits near water, which gives the evening a calm riverside feel."
        ]
      },
      {
        title: "Day 2",
        paragraphs: [
          "The second day moves deeper into quieter forest sections with more room for gibbons, leaf monkeys, birds, medicinal plants, and the sounds of the rainforest.",
          "Expect climbs, muddy ground in rainy weather, and a slower rhythm that suits guests who want to stay longer in the forest."
        ]
      },
      {
        title: "Day 3",
        paragraphs: [
          "The final morning is usually lighter. Depending on conditions, the route may end with a shorter walk, a final forest stop, or a river return toward Bukit Lawang.",
          "This is the classic route for travelers who want a real overnight jungle stay without committing to the longer expeditions."
        ]
      }
    ],
    included: [
      "Local guide and park permits",
      "Meals for the trek",
      "Tent, mattress, blankets, and mosquito net",
      "Return rafting when included and conditions allow"
    ],
    notIncluded: [
      "Personal travel insurance",
      "Tips for the guide team",
      "Transport to Bukit Lawang unless arranged separately",
      "Extra drinks or optional add-ons"
    ],
    bring: [
      "At least 2 liters of water for the first day",
      "Torch or headlamp",
      "Mosquito repellent and sunscreen",
      "Long trousers, spare socks, rain jacket, and a towel"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "This is the most balanced standard trek if you want two nights in the forest and enough time to settle into camp life.",
          "If you want a quieter pace or a private route, the private 3-day option may suit you better."
        ]
      }
    ]
  }),
  "4d": buildDetail("4d", "4-day-jungle-trek", {
    heroKicker: "Deeper trek",
    heroTitle: siteText.en.treks["4d"].title,
    heroDescription:
      "A deeper route for guests who want remote jungle sections, longer hiking days, and a stronger off-grid feel.",
    profile: [
      { label: "Duration", value: trekBaseById["4d"].duration },
      { label: "Grade", value: "High" },
      { label: "Departure", value: "Bukit Lawang, around 9 am" },
      { label: "Arrival", value: "Bukit Lawang, afternoon (+3)" },
      { label: "Price", value: trekBaseById["4d"].price },
      { label: "Accommodation", value: "Tent with mosquito net" }
    ],
    itinerary: [
      {
        title: "Day 1",
        paragraphs: [
          "Start from Bukit Lawang after breakfast and ease into the forest as the trail climbs away from the village edge.",
          "The first day focuses on steady progress, wildlife watching, and settling into a deeper jungle camp by late afternoon."
        ]
      },
      {
        title: "Day 2",
        paragraphs: [
          "The second day usually moves into quieter terrain with more time for river breaks, plant knowledge, and long views across the canopy.",
          "This route suits travelers who are happy to spend more energy hiking in exchange for more space and less crowding."
        ]
      },
      {
        title: "Day 3",
        paragraphs: [
          "By the third day, the group is far enough in that the forest feels noticeably different: calmer, deeper, and less visited.",
          "The route and pace can shift if the weather changes or if the guide sees a better wildlife option."
        ]
      },
      {
        title: "Day 4",
        paragraphs: [
          "The last day brings the group back toward Bukit Lawang, usually with a final walk, lunch stop, and return logistics that depend on river and trail conditions.",
          "This is a good fit if you want a full rainforest stay and do not mind a demanding itinerary."
        ]
      }
    ],
    included: [
      "Local guide and park permits",
      "Meals during the trek",
      "Camping equipment for multi-night travel",
      "Route planning for a longer forest stay"
    ],
    notIncluded: [
      "Personal travel insurance",
      "Tips for the guide team",
      "Transport to Bukit Lawang unless arranged separately"
    ],
    bring: [
      "Grip shoes or trekking boots",
      "Rain layer, spare socks, and spare clothes",
      "Torch, water bottle, mosquito repellent, and sunscreen",
      "Dry bag and a small towel"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "A 4-day trek rewards travelers who care more about time in the forest than about keeping the schedule compact.",
          "If you want the same length but more privacy, the private 4-day package is the better match."
        ]
      }
    ]
  }),
  "5d": buildDetail("5d", "5-day-jungle-trek", {
    heroKicker: "Extended trek",
    heroTitle: siteText.en.treks["5d"].title,
    heroDescription:
      "A long rainforest stay for travelers who want the deepest standard route, more space between camps, and a proper multi-day expedition feel.",
    profile: [
      { label: "Duration", value: trekBaseById["5d"].duration },
      { label: "Grade", value: "High" },
      { label: "Departure", value: "Bukit Lawang, around 9 am" },
      { label: "Arrival", value: "Bukit Lawang, afternoon (+4)" },
      { label: "Price", value: trekBaseById["5d"].price },
      { label: "Accommodation", value: "Tent with mosquito net" }
    ],
    itinerary: [
      {
        title: "Day 1",
        paragraphs: [
          "The first day follows the familiar Bukit Lawang start, but the route is planned with a longer journey in mind and a slightly more ambitious pace.",
          "You will already feel the difference between a short trek and a real expedition-style package."
        ]
      },
      {
        title: "Day 2",
        paragraphs: [
          "The second day adds more distance and more time in quieter forest sections, with river breaks and regular pauses for wildlife watching.",
          "Expect the trail to demand real effort, especially after rain."
        ]
      },
      {
        title: "Day 3",
        paragraphs: [
          "Mid-trek is usually where guests feel the rhythm of the jungle most strongly: slower movement, longer breaks, and more attention to the camp routine.",
          "The guide may adjust route choices to stay safe and keep the experience rewarding."
        ]
      },
      {
        title: "Day 4",
        paragraphs: [
          "By the fourth day, the route is deep enough to feel remote but still managed with the practical comfort needed for a long trek.",
          "This is the stage where daily life in the forest starts to feel normal."
        ]
      },
      {
        title: "Day 5",
        paragraphs: [
          "The final day returns the group to Bukit Lawang after one last walk and a route that depends on weather, river level, and the guide's judgment.",
          "This is the standard choice for travelers who want the longest classic trek without moving into fully custom expedition territory."
        ]
      }
    ],
    included: [
      "Local guide and park permits",
      "Meals during the trek",
      "Camping equipment for the full route",
      "Route planning for a long jungle stay"
    ],
    notIncluded: [
      "Personal travel insurance",
      "Tips for the guide team",
      "Transport to Bukit Lawang unless arranged separately"
    ],
    bring: [
      "At least 2 liters of water for the first day",
      "Torch or headlamp",
      "Mosquito repellent, sunscreen, and personal medicine",
      "Long trousers, spare socks, rain jacket, sandals, and a towel"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "This is the standard trek for travelers who want the longest established route and do not mind a physically demanding schedule.",
          "If you want the same length with more privacy, the private 5-day package gives you a quieter trip."
        ]
      }
    ]
  }),
  p3d: buildDetail("p3d", "private-3-day-jungle-package", {
    heroKicker: "Private package",
    heroTitle: siteText.en.treks.p3d.title,
    heroDescription:
      "A private 3-day package for couples, families, and photographers who want a slower pace, more flexibility, and direct planning with the guide team.",
    profile: [
      { label: "Duration", value: trekBaseById.p3d.duration },
      { label: "Grade", value: "Medium" },
      { label: "Departure", value: "Flexible, usually around 9 am" },
      { label: "Arrival", value: "Flexible, usually afternoon (+2)" },
      { label: "Price", value: trekBaseById.p3d.price },
      { label: "Style", value: "Private guide flow" }
    ],
    itinerary: [
      {
        title: "Day 1",
        paragraphs: [
          "The private format lets the guide shape the route around your pace, comfort level, and arrival plans.",
          "You still get the classic forest start, but with more room to pause, photograph, or rest when you need it."
        ]
      },
      {
        title: "Day 2",
        paragraphs: [
          "The second day can be adjusted more easily than on a group trek, which is useful for families, older travelers, or guests who want a quieter morning.",
          "Camp life is the same basic jungle style, but the rhythm is more personal."
        ]
      },
      {
        title: "Day 3",
        paragraphs: [
          "The final day can finish with a shorter walk or a river return, depending on safety and the exact package arrangement.",
          "Private treks are the easiest way to keep the trip focused on your own group."
        ]
      }
    ],
    included: [
      "Private guide flow",
      "Meals during the trek",
      "Camping equipment for the route",
      "Transport and accommodation coordination on request"
    ],
    notIncluded: [
      "Personal travel insurance",
      "Tips for the guide team",
      "Extra upgrades outside the agreed package"
    ],
    bring: [
      "The same items as a standard overnight trek",
      "Extra camera batteries if you want time for photography",
      "Any food or comfort items that your group needs"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "Private packages are the best fit when you want the guide to work around your group rather than around a fixed group schedule."
        ]
      }
    ]
  }),
  p4d: buildDetail("p4d", "private-4-day-jungle-package", {
    heroKicker: "Private package",
    heroTitle: siteText.en.treks.p4d.title,
    heroDescription:
      "A private 4-day package that gives you more time in the forest while still keeping the route flexible and personal.",
    profile: [
      { label: "Duration", value: trekBaseById.p4d.duration },
      { label: "Grade", value: "Medium / High" },
      { label: "Departure", value: "Flexible, usually around 9 am" },
      { label: "Arrival", value: "Flexible, usually afternoon (+3)" },
      { label: "Price", value: trekBaseById.p4d.price },
      { label: "Style", value: "Private guide flow" }
    ],
    itinerary: [
      {
        title: "Days 1-2",
        paragraphs: [
          "The early part of a private 4-day trek follows the standard forest rhythm, but the guide can slow the pace for wildlife, photos, or rest breaks.",
          "This is useful for couples or families who want time in the forest without the pressure of a fixed group speed."
        ]
      },
      {
        title: "Days 3-4",
        paragraphs: [
          "The later days allow more room for route adjustments, longer stops, and a more personal feel around camp and on the trail.",
          "A private route is the easiest way to keep the journey aligned with your own comfort and energy."
        ]
      }
    ],
    included: [
      "Private guide flow",
      "Meals during the trek",
      "Camping equipment for the route",
      "Transport and accommodation coordination on request"
    ],
    notIncluded: [
      "Personal travel insurance",
      "Tips for the guide team",
      "Extra upgrades outside the agreed package"
    ],
    bring: [
      "The same overnight trekking gear as the standard route",
      "Camera gear, spare batteries, and a dry bag",
      "Personal comfort items for a longer private stay"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "This is a strong choice if you want the longer route but still want to keep the trip personal and adaptable."
        ]
      }
    ]
  }),
  p5d: buildDetail("p5d", "private-5-day-jungle-package", {
    heroKicker: "Private package",
    heroTitle: siteText.en.treks.p5d.title,
    heroDescription:
      "A private 5-day package for travelers who want the longest route, more independence, and a guide who can adjust the pace around your group.",
    profile: [
      { label: "Duration", value: trekBaseById.p5d.duration },
      { label: "Grade", value: "Medium / High" },
      { label: "Departure", value: "Flexible, usually around 9 am" },
      { label: "Arrival", value: "Flexible, usually afternoon (+4)" },
      { label: "Price", value: trekBaseById.p5d.price },
      { label: "Style", value: "Private guide flow" }
    ],
    itinerary: [
      {
        title: "Days 1-2",
        paragraphs: [
          "The start of a private 5-day trek keeps the same rainforest structure as the standard route, but the guide can tune the walk for your energy level.",
          "That flexibility matters most on a longer trek, where small changes in pace can make a big difference."
        ]
      },
      {
        title: "Days 3-4",
        paragraphs: [
          "Mid-route is where the private format becomes most useful: the guide can extend a rest stop, change the timing of meals, or adjust the trail if needed.",
          "This makes the trip easier for couples, families, and photographers who want time rather than speed."
        ]
      },
      {
        title: "Day 5",
        paragraphs: [
          "The final day brings you back to Bukit Lawang with the same forest-first approach, but without the pressure of a group timetable.",
          "If you want the longest established package while still keeping some personal control, this is the one to choose."
        ]
      }
    ],
    included: [
      "Private guide flow",
      "Meals during the trek",
      "Camping equipment for the route",
      "Transport and accommodation coordination on request"
    ],
    notIncluded: [
      "Personal travel insurance",
      "Tips for the guide team",
      "Extra upgrades outside the agreed package"
    ],
    bring: [
      "Everything you would bring for a long overnight trek",
      "Extra charging cable or power bank",
      "Comfort items for a long private stay in the forest"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "A private 5-day trek is the closest thing to a custom expedition in the standard range of packages."
        ]
      }
    ]
  }),
  batcave: buildDetail("batcave", "bat-cave-tour", {
    heroKicker: "Local activity",
    heroTitle: siteText.en.treks.batcave.title,
    heroDescription:
      "A half-day cave visit for travelers who want limestone formations, bats, and a lighter non-trek activity around Bukit Lawang.",
    profile: [
      { label: "Duration", value: trekBaseById.batcave.duration },
      { label: "Grade", value: "Easy" },
      { label: "Departure", value: "Bukit Lawang, morning or afternoon" },
      { label: "Arrival", value: "Same day" },
      { label: "Price", value: trekBaseById.batcave.price },
      { label: "Best for", value: "A non-trek day with a cave and river stop" }
    ],
    itinerary: [
      {
        title: "Cave walk",
        paragraphs: [
          "The visit starts with a short trip from Bukit Lawang to the cave area, where the route moves through rocky passages, bats, swallows, and small wildlife.",
          "The mood is more exploratory than strenuous, which makes it a good option on rest days."
        ]
      },
      {
        title: "Landak River stop",
        paragraphs: [
          "Many guests combine the cave with a relaxed stop at the Landak River, sometimes with a barbecue or a simple rest by the water.",
          "The exact mix depends on timing, weather, and what you want to do that day."
        ]
      }
    ],
    included: [
      "Local guide",
      "Cave visit and route planning",
      "Basic local activity support"
    ],
    notIncluded: [
      "Optional BBQ or drinks unless arranged",
      "Transport from outside Bukit Lawang",
      "Personal travel insurance"
    ],
    bring: [
      "Torch or phone light",
      "Closed shoes with grip",
      "Water, camera, and cash",
      "Light clothing that can handle damp rock"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "This is a good low-effort addition to a jungle trip when you want a non-trek day without leaving the Bukit Lawang area."
        ]
      }
    ]
  }),
  village: buildDetail("village", "village-tour", {
    heroKicker: "Local activity",
    heroTitle: siteText.en.treks.village.title,
    heroDescription:
      "A relaxed cultural tour through rice fields, village lanes, and local food stops by becak or bicycle.",
    profile: [
      { label: "Duration", value: trekBaseById.village.duration },
      { label: "Grade", value: "Easy" },
      { label: "Departure", value: "Bukit Lawang, morning or afternoon" },
      { label: "Arrival", value: "Same day" },
      { label: "Price", value: trekBaseById.village.price },
      { label: "Best for", value: "Cultural context and a slower travel day" }
    ],
    itinerary: [
      {
        title: "Village ride",
        paragraphs: [
          "Move through Bukit Lawang and the nearby villages by becak or bicycle, with a pace that gives you time to see daily life rather than just pass through it.",
          "The tour feels slower and more social than the trekking days."
        ]
      },
      {
        title: "Fields, food, and markets",
        paragraphs: [
          "Depending on timing, you may stop at rice fields, gardens, brown sugar or tofu production spots, or a local market when it is open.",
          "This is the best add-on if you want to understand the village around the forest instead of only the forest itself."
        ]
      }
    ],
    included: [
      "Local guide",
      "Village route by becak or bicycle",
      "Basic cultural stop planning"
    ],
    notIncluded: [
      "Meals unless arranged separately",
      "Transport from outside Bukit Lawang",
      "Personal travel insurance"
    ],
    bring: [
      "Water, sunscreen, and a hat",
      "Camera or phone",
      "Cash for snacks or small purchases",
      "Comfortable clothes for warm weather"
    ],
    notes: [
      {
        title: "Good to know",
        paragraphs: [
          "Market visits depend on the day, so the exact route can change while still keeping the cultural feel of the tour."
        ]
      }
    ]
  })
} satisfies Record<TrekId, TrekDetail>;

export const trekDetailList = Object.values(trekDetailPages);

export function getTrekDetailBySlug(slug: string) {
  return trekDetailList.find((page) => page.slug === slug);
}

export function trekDetailHref(id: TrekId) {
  return `/treks/${trekDetailPages[id].slug}`;
}

export function trekBookingHref(id: TrekId) {
  return bookingUrlForTrek(id);
}
