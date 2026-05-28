export const locales = ["en", "de", "fr", "nl"] as const;

export type Locale = (typeof locales)[number];
export type TrekId = "4h" | "1d" | "2d" | "3d" | "4d" | "5d" | "p3d" | "p4d" | "p5d" | "eco2d" | "eco3d";
export type GuideId = "dedek" | "brema" | "ongat";

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  nl: "Nederlands"
};

export const trekBase: Array<{
  id: TrekId;
  category: "classic" | "private" | "eco";
  duration: string;
  intensity: string;
  price: string;
  image: string;
}> = [
  { id: "4h", category: "classic", duration: "4 hours", intensity: "Low", price: "850.000 IDR | 55 EUR pp", image: "/images/guide.webp" },
  { id: "1d", category: "classic", duration: "7-8 hours", intensity: "Medium", price: "1.230.000 IDR | 70 EUR pp", image: "/images/trekking-group.webp" },
  { id: "2d", category: "classic", duration: "2 days / 1 night", intensity: "Medium", price: "1.900.000 IDR | 120 EUR pp", image: "/images/campsite.webp" },
  { id: "3d", category: "classic", duration: "3 days / 2 nights", intensity: "Medium / High", price: "2.800.000 IDR | 170 EUR pp", image: "/images/orangutan-tree.webp" },
  { id: "4d", category: "classic", duration: "4 days / 3 nights", intensity: "High", price: "4.400.000 IDR | 250 EUR pp", image: "/images/river.webp" },
  { id: "5d", category: "classic", duration: "5 days / 4 nights", intensity: "High", price: "5.600.000 IDR | 320 EUR pp", image: "/images/food.webp" },
  { id: "p3d", category: "private", duration: "3 days / 2 nights", intensity: "Medium", price: "4.800.000 IDR | 280 EUR pp", image: "/images/rafting.webp" },
  { id: "p4d", category: "private", duration: "4 days / 3 nights", intensity: "Medium / High", price: "5.700.000 IDR | 335 EUR pp", image: "/images/river.webp" },
  { id: "p5d", category: "private", duration: "5 days / 4 nights", intensity: "Medium / High", price: "6.600.000 IDR | 385 EUR pp", image: "/images/orangutan-tree.webp" },
  { id: "eco2d", category: "eco", duration: "2 days / 1 night", intensity: "Medium / High", price: "2.800.000 IDR | 165 EUR pp", image: "/images/guide.webp" },
  { id: "eco3d", category: "eco", duration: "3 days / 2 nights", intensity: "High", price: "3.800.000 IDR | 225 EUR pp", image: "/images/campsite.webp" }
];

export const guideBase: Array<{ id: GuideId; image: string }> = [
  { id: "dedek", image: "/images/dedek.webp" },
  { id: "brema", image: "/images/brema.webp" },
  { id: "ongat", image: "/images/ongat.webp" }
];

export const galleryItems = [
  { src: "/images/hero-orangutan.webp", alt: "Sumatran orangutan resting in a tree" },
  { src: "/images/trekking-group.webp", alt: "Trekking group in Bukit Lawang jungle" },
  { src: "/images/rafting.webp", alt: "Tube rafting in the river after trekking" },
  { src: "/images/food.webp", alt: "Fresh tropical fruit served during jungle trekking" },
  { src: "/images/river.webp", alt: "Clear river beside the jungle camp" },
  { src: "/images/orangutan-tree.webp", alt: "Orangutan hanging in the rainforest canopy" }
];

export const siteText = {
  en: {
    metaTitle: "OrangutanAdventureSumatra | Ethical Bukit Lawang Jungle Tours",
    metaDescription:
      "Modern booking website for ethical orangutan trekking, private jungle packages, eco workout treks, rafting, guides, and accommodation in Bukit Lawang, North Sumatra.",
    nav: { treks: "Treks", experience: "Experience", guides: "Guides", faq: "FAQ", contact: "Contact" },
    hero: {
      eyebrow: "Ethical trekking in Gunung Leuser National Park",
      title: "OrangutanAdventureSumatra",
      description:
        "Guided jungle adventures from Bukit Lawang with local guides, responsible wildlife encounters, riverside camps, fresh jungle food, and tube rafting back to the village.",
      primary: "Explore treks",
      secondary: "WhatsApp",
      stats: [
        { title: "Top rated local team", text: "Tripadvisor-listed Bukit Lawang guides" },
        { title: "4 hours to 5 days", text: "Choose a light walk or deep jungle trek" },
        { title: "Wildlife-first approach", text: "No feeding, no touching, no pressure on animals" }
      ]
    },
    quick: [
      "Daily starts around 8:30",
      "Bukit Lawang, North Sumatra",
      "River camps and rafting options",
      "30% deposit option"
    ],
    intro: {
      kicker: "Why this trek",
      title: "Modern adventure, local roots, serious respect for the forest.",
      paragraphs: [
        "OrangutanAdventureSumatra runs ethical jungle trekking around Bukit Lawang, a gateway to Gunung Leuser National Park. The experience is built for travelers who want a real rainforest day without turning wildlife into a performance.",
        "Choose from short walks, classic overnight treks, exclusive private packages, and more demanding eco workout routes. The guides handle pacing, route choices, meals, camp setup, and the return by river when included."
      ],
      promises: [
        "Local Indonesian guide team",
        "No guaranteed wildlife claims",
        "Fresh fruit and jungle meals",
        "Transport and accommodation support",
        "Email and WhatsApp booking"
      ]
    },
    headings: {
      packages: "Trekking packages",
      packagesSub: "Pick the route that matches your time, fitness, and appetite for the jungle.",
      experience: "The experience",
      experienceSub: "From village trailhead to river return.",
      ethics: "Responsible trekking",
      ethicsSubTitle: "The best orangutan encounter is still a wild one.",
      gallery: "Gallery",
      gallerySub: "Rainforest, river, food, camps, and the moments in between.",
      guides: "Local guides",
      guidesSub: "Guided by people who know the forest as home.",
      faq: "FAQ",
      faqSub: "Practical notes before you arrive.",
      contact: "Book direct",
      contactSub: "Tell the team your dates, group size, and preferred trek."
    },
    categories: { classic: "Classic treks", private: "Private packages", eco: "Eco workout" },
    treks: {
      "4h": { title: "4-Hour Jungle Trekking", highlights: ["Short ethical wildlife walk", "Good chance for orangutans", "Local guide included"] },
      "1d": { title: "1-Day Jungle Trekking", highlights: ["Full-day Bukit Lawang trek", "Lunch in the jungle", "Return before evening"] },
      "2d": { title: "2-Day Jungle Trekking", highlights: ["Sleep by the river", "Jungle dinner and breakfast", "Traditional tube rafting return"] },
      "3d": { title: "3-Day Jungle Trekking", highlights: ["Deeper rainforest route", "More time tracking wildlife", "Two nights at jungle camps"] },
      "4d": { title: "4-Day Jungle Trekking", highlights: ["Remote jungle sections", "Longer climbs and river crossings", "Best for active travelers"] },
      "5d": { title: "5-Day Jungle Trekking", highlights: ["Immersive Gunung Leuser adventure", "Multiple camp nights", "Rich wildlife and plant spotting"] },
      "p3d": { title: "3-Day Exclusive Eco Jungle Package", highlights: ["Private guide flow", "Transport and accommodation support", "Village and jungle balance"] },
      "p4d": { title: "4-Day Exclusive Eco Jungle Package", highlights: ["Private multi-day itinerary", "Accommodation coordination", "Flexible Bukit Lawang pacing"] },
      "p5d": { title: "5-Day Exclusive Eco Jungle Package", highlights: ["Complete private stay", "Trekking, rafting, village time", "Most convenient first visit"] },
      "eco2d": { title: "2-Day Eco Workout Trek", highlights: ["Active route with purpose", "Trail challenge and river camp", "Responsible jungle conduct"] },
      "eco3d": { title: "3-Day Eco Workout Trek", highlights: ["Harder trekking rhythm", "More distance and elevation", "Built for fit travelers"] }
    },
    experience: [
      { title: "Start in Bukit Lawang", text: "Meet the team, check your gear, and enter the rainforest with a local guide." },
      { title: "Watch quietly", text: "Track orangutans, Thomas leaf monkeys, gibbons, macaques, birds, and forest plants with proper distance." },
      { title: "Eat and camp well", text: "Fresh fruit, simple jungle meals, riverside rest stops, and overnight camps on longer treks." },
      { title: "Return by river", text: "Many overnight trips finish with a traditional tube rafting ride back toward the village." }
    ],
    ethics: {
      kicker: "Responsible trekking",
      title: "The best orangutan encounter is still a wild one.",
      text: "The team follows jungle rules that protect guests, guides, and animals: keep distance, stay with the guide, never feed wildlife, never touch orangutans, and avoid flash or behavior that changes how animals move through the forest."
    },
    guideRole: "Local guide",
    guides: {
      dedek: { name: "Dedek", text: "Warm, observant, and experienced with Bukit Lawang routes." },
      brema: { name: "Brema", text: "Keeps the day moving smoothly while respecting wildlife space." },
      ongat: { name: "Ongat", text: "Shares practical jungle knowledge with a calm guiding style." }
    },
    faq: [
      {
        q: "Will we definitely see orangutans?",
        a: "No wildlife sighting can be guaranteed. The treks enter areas where semi-wild and wild orangutans are often seen, especially around the old feeding area, but the animals move freely."
      },
      {
        q: "What should we pack for Bukit Lawang?",
        a: "Bring cash, good walking shoes or hiking boots, a flashlight, mosquito repellent, quick-dry clothes, and a small day bag. For overnight treks, keep luggage light."
      },
      {
        q: "How does payment work?",
        a: "The original site accepts either full payment or a 30% deposit, with the balance paid when you arrive in Bukit Lawang. Contact the team for current bank details."
      },
      {
        q: "Where is the meeting point?",
        a: "Treks start from Bukit Lawang, North Sumatra, Indonesia. The team can also help arrange transportation and accommodation."
      }
    ],
    contact: {
      kicker: "Book direct",
      title: "Tell the team your dates, group size, and preferred trek.",
      text: "WhatsApp is fastest for availability. Email works well for deposits, transport, accommodation, and detailed itinerary questions.",
      whatsappLabel: "+62 813-6252-5273",
      emailLabel: "contact@orangutanadventuresumatra.com"
    },
    footer: { location: "Bukit Lawang, North Sumatra, Indonesia" },
    whatsappMessage: "Hi OrangutanAdventureSumatra, I would like to ask about a jungle trek."
  },
  de: {
    metaTitle: "OrangutanAdventureSumatra | Ethische Dschungeltouren in Bukit Lawang",
    metaDescription:
      "Moderne Buchungsseite für ethische Orang-Utan-Treks, private Dschungelpakete, Eco-Workout-Touren, Rafting, Guides und Unterkünfte in Bukit Lawang, Nord-Sumatra.",
    nav: { treks: "Treks", experience: "Erlebnis", guides: "Guides", faq: "FAQ", contact: "Kontakt" },
    hero: {
      eyebrow: "Ethisches Trekking im Gunung-Leuser-Nationalpark",
      title: "OrangutanAdventureSumatra",
      description:
        "Geführte Dschungelabenteuer ab Bukit Lawang mit lokalen Guides, respektvollen Wildtierbegegnungen, Flusscamps, frischem Dschungelessen und Tube-Rafting zurück ins Dorf.",
      primary: "Treks entdecken",
      secondary: "WhatsApp",
      stats: [
        { title: "Von Gästen top bewertet", text: "Bukit-Lawang-Guides mit Tripadvisor-Einträgen" },
        { title: "4 Stunden bis 5 Tage", text: "Wähle einen kurzen Walk oder eine mehrtägige Dschungeltour" },
        { title: "Wildtierschutz zuerst", text: "Kein Füttern, kein Berühren, kein Druck auf die Tiere" }
      ]
    },
    quick: [
      "Täglich ab 8:30 Uhr",
      "Bukit Lawang, Nord-Sumatra",
      "Flusscamps und Rafting-Optionen",
      "30 % Anzahlung möglich"
    ],
    intro: {
      kicker: "Warum dieser Trek",
      title: "Moderne Abenteuer, lokale Wurzeln, echter Respekt für den Wald.",
      paragraphs: [
        "OrangutanAdventureSumatra organisiert ethische Dschungeltreks rund um Bukit Lawang, dem Tor zum Gunung-Leuser-Nationalpark. Das Erlebnis ist für Reisende gedacht, die einen echten Regenwaldtag suchen, ohne Wildtiere zur Show zu machen.",
        "Wähle zwischen kurzen Walks, klassischen Übernachtungstouren, exklusiven Privatpaketen und anspruchsvolleren Eco-Workout-Routen. Die Guides übernehmen Tempo, Route, Mahlzeiten, Camp-Aufbau und bei Bedarf die Rückfahrt über den Fluss."
      ],
      promises: [
        "Lokales indonesisches Guide-Team",
        "Keine garantierten Wildtiersichtungen",
        "Frisches Obst und Dschungelmahlzeiten",
        "Transport- und Unterkunftshilfe",
        "Buchung per E-Mail und WhatsApp"
      ]
    },
    headings: {
      packages: "Trekking-Pakete",
      packagesSub: "Wähle die Route, die zu deiner Zeit, Fitness und deinem Wunsch nach Dschungel passt.",
      experience: "Das Erlebnis",
      experienceSub: "Vom Dorfpfad bis zur Flussrückfahrt.",
      ethics: "Verantwortungsvolles Trekking",
      ethicsSubTitle: "Die beste Orang-Utan-Begegnung bleibt immer eine wilde.",
      gallery: "Galerie",
      gallerySub: "Regenwald, Fluss, Essen, Camps und die Momente dazwischen.",
      guides: "Lokale Guides",
      guidesSub: "Geführt von Menschen, für die der Wald ein Zuhause ist.",
      faq: "FAQ",
      faqSub: "Praktische Hinweise vor der Anreise.",
      contact: "Direkt buchen",
      contactSub: "Teile dem Team deine Daten, Gruppengröße und gewünschte Tour mit."
    },
    categories: { classic: "Klassische Treks", private: "Private Pakete", eco: "Eco Workout" },
    treks: {
      "4h": { title: "4-Stunden-Dschungeltrek", highlights: ["Kurzer ethischer Wildtierwalk", "Gute Chance auf Orang-Utans", "Lokaler Guide inklusive"] },
      "1d": { title: "1-Tages-Dschungeltrek", highlights: ["Ganztägiger Bukit-Lawang-Trek", "Mittagessen im Dschungel", "Rückkehr vor dem Abend"] },
      "2d": { title: "2-Tage-Dschungeltrek", highlights: ["Schlafen am Fluss", "Dschungel-Abendessen und Frühstück", "Traditionelle Tube-Rafting-Rückfahrt"] },
      "3d": { title: "3-Tage-Dschungeltrek", highlights: ["Tiefere Route im Regenwald", "Mehr Zeit für Wildtiere", "Zwei Nächte im Dschungelcamp"] },
      "4d": { title: "4-Tage-Dschungeltrek", highlights: ["Entlegene Dschungelabschnitte", "Längere Anstiege und Flussquerungen", "Ideal für aktive Reisende"] },
      "5d": { title: "5-Tage-Dschungeltrek", highlights: ["Intensives Gunung-Leuser-Abenteuer", "Mehrere Camp-Nächte", "Reiche Tier- und Pflanzenbeobachtung"] },
      "p3d": { title: "3-Tage-Exklusivpaket Eco Jungle", highlights: ["Privater Guide-Fluss", "Transport- und Unterkunftsplanung", "Balance aus Dorf und Dschungel"] },
      "p4d": { title: "4-Tage-Exklusivpaket Eco Jungle", highlights: ["Privater Mehrtagesplan", "Unterkunftskoordination", "Flexibles Bukit-Lawang-Tempo"] },
      "p5d": { title: "5-Tage-Exklusivpaket Eco Jungle", highlights: ["Kompletter privater Aufenthalt", "Trekking, Rafting, Dorfzeit", "Ideal für den ersten Besuch"] },
      "eco2d": { title: "2-Tage-Eco-Workout-Trek", highlights: ["Aktive Route mit Ziel", "Trail-Herausforderung und Flusscamp", "Verantwortungsvolles Verhalten im Wald"] },
      "eco3d": { title: "3-Tage-Eco-Workout-Trek", highlights: ["Härteres Trekking-Tempo", "Mehr Strecke und Höhenmeter", "Für fitte Reisende gebaut"] }
    },
    experience: [
      { title: "Start in Bukit Lawang", text: "Triff das Team, prüfe deine Ausrüstung und geh mit einem lokalen Guide in den Regenwald." },
      { title: "Ruhig beobachten", text: "Suche Orang-Utans, Thomas-Languren, Gibbons, Makaken, Vögel und Pflanzen mit angemessenem Abstand." },
      { title: "Gut essen und campen", text: "Frisches Obst, einfache Dschungelgerichte, Pausen am Fluss und Camps auf längeren Touren." },
      { title: "Rückweg über den Fluss", text: "Viele Mehrtagestouren enden mit einer traditionellen Tube-Rafting-Fahrt zurück ins Dorf." }
    ],
    ethics: {
      kicker: "Verantwortungsvolles Trekking",
      title: "Die beste Orang-Utan-Begegnung bleibt eine wilde.",
      text: "Das Team hält sich an Dschungelregeln, die Gäste, Guides und Tiere schützen: Abstand halten, beim Guide bleiben, keine Wildtiere füttern, Orang-Utans nie berühren und kein Verhalten zeigen, das den Tieren ihren Weg im Wald verändert."
    },
    guideRole: "Lokaler Guide",
    guides: {
      dedek: { name: "Dedek", text: "Warmherzig, aufmerksam und sehr erfahren auf den Routen um Bukit Lawang." },
      brema: { name: "Brema", text: "Hält den Tag ruhig und flüssig, ohne den Lebensraum der Tiere zu stören." },
      ongat: { name: "Ongat", text: "Teilt praktisches Dschungelwissen mit ruhiger, souveräner Art." }
    },
    faq: [
      {
        q: "Werden wir sicher Orang-Utans sehen?",
        a: "Eine Sichtung kann nie garantiert werden. Die Treks führen in Gebiete, in denen semi-wilde und wilde Orang-Utans oft gesehen werden, besonders rund um das alte Fütterungsgebiet, aber die Tiere bewegen sich frei."
      },
      {
        q: "Was sollen wir für Bukit Lawang einpacken?",
        a: "Nimm Bargeld, gute Wander- oder Trekkingschuhe, eine Taschenlampe, Mückenschutz, schnelltrocknende Kleidung und einen kleinen Tagesrucksack mit. Für Mehrtagestouren das Gepäck möglichst leicht halten."
      },
      {
        q: "Wie läuft die Zahlung ab?",
        a: "Auf der Originalseite ist entweder die volle Zahlung oder eine Anzahlung von 30 % möglich; der Rest wird bei Ankunft in Bukit Lawang bezahlt. Kontaktiere das Team für aktuelle Kontodaten."
      },
      {
        q: "Wo ist der Treffpunkt?",
        a: "Die Treks starten in Bukit Lawang, Nord-Sumatra, Indonesien. Das Team hilft auch bei Transport und Unterkunft."
      }
    ],
    contact: {
      kicker: "Direkt buchen",
      title: "Teile dem Team deine Reisedaten, Gruppengröße und Wunschroute mit.",
      text: "WhatsApp ist am schnellsten für Verfügbarkeiten. E-Mail eignet sich gut für Anzahlung, Transport, Unterkunft und detaillierte Fragen zum Ablauf.",
      whatsappLabel: "+62 813-6252-5273",
      emailLabel: "contact@orangutanadventuresumatra.com"
    },
    footer: { location: "Bukit Lawang, Nord-Sumatra, Indonesien" },
    whatsappMessage: "Hallo OrangutanAdventureSumatra, ich möchte mich nach einem Dschungeltrek erkundigen."
  },
  fr: {
    metaTitle: "OrangutanAdventureSumatra | Circuits éthiques à Bukit Lawang",
    metaDescription:
      "Site moderne de réservation pour des treks éthiques avec orangs-outans, forfaits privés en jungle, circuits eco workout, rafting, guides et hébergement à Bukit Lawang, Sumatra du Nord.",
    nav: { treks: "Treks", experience: "Expérience", guides: "Guides", faq: "FAQ", contact: "Contact" },
    hero: {
      eyebrow: "Trekking éthique dans le parc national de Gunung Leuser",
      title: "OrangutanAdventureSumatra",
      description:
        "Aventures guidées dans la jungle depuis Bukit Lawang avec des guides locaux, des rencontres responsables avec la faune, des camps au bord de la rivière, de la nourriture fraîche et du tube rafting pour revenir au village.",
      primary: "Découvrir les treks",
      secondary: "WhatsApp",
      stats: [
        { title: "Équipe locale très appréciée", text: "Guides de Bukit Lawang référencés sur Tripadvisor" },
        { title: "4 heures à 5 jours", text: "Choisis une courte balade ou un trek profond en jungle" },
        { title: "Priorité à la faune", text: "Pas de nourrissage, pas de contact, pas de pression sur les animaux" }
      ]
    },
    quick: [
      "Départ quotidien vers 8h30",
      "Bukit Lawang, Sumatra du Nord",
      "Camps en rivière et options rafting",
      "Acompte de 30 % possible"
    ],
    intro: {
      kicker: "Pourquoi ce trek",
      title: "Aventure moderne, racines locales et respect profond de la forêt.",
      paragraphs: [
        "OrangutanAdventureSumatra organise des treks éthiques dans la jungle autour de Bukit Lawang, porte d’entrée du parc national de Gunung Leuser. L’expérience s’adresse aux voyageurs qui veulent une vraie journée en forêt tropicale sans transformer la faune en spectacle.",
        "Choisis entre des promenades courtes, des treks classiques avec nuit, des forfaits privés exclusifs et des circuits eco workout plus exigeants. Les guides gèrent le rythme, l’itinéraire, les repas, le campement et le retour par la rivière quand il est inclus."
      ],
      promises: [
        "Équipe de guides indonésiens locaux",
        "Aucune promesse de rencontre garantie avec la faune",
        "Fruits frais et repas de jungle",
        "Aide pour transport et hébergement",
        "Réservation par e-mail et WhatsApp"
      ]
    },
    headings: {
      packages: "Forfaits de trek",
      packagesSub: "Choisis l’itinéraire qui correspond à ton temps, ta forme et ton envie de jungle.",
      experience: "L’expérience",
      experienceSub: "Du village au retour par la rivière.",
      ethics: "Trekking responsable",
      ethicsSubTitle: "La plus belle rencontre avec un orang-outan reste sauvage.",
      gallery: "Galerie",
      gallerySub: "Forêt tropicale, rivière, nourriture, camps et instants entre les deux.",
      guides: "Guides locaux",
      guidesSub: "Guidé par des personnes qui connaissent la forêt comme leur maison.",
      faq: "FAQ",
      faqSub: "Quelques repères pratiques avant ton arrivée.",
      contact: "Réserver directement",
      contactSub: "Indique au team tes dates, la taille du groupe et le trek souhaité."
    },
    categories: { classic: "Treks classiques", private: "Forfaits privés", eco: "Eco workout" },
    treks: {
      "4h": { title: "Trek jungle de 4 heures", highlights: ["Balade éthique courte", "Bonne chance d’apercevoir des orangs-outans", "Guide local inclus"] },
      "1d": { title: "Trek jungle d’une journée", highlights: ["Trek complet à Bukit Lawang", "Déjeuner dans la jungle", "Retour avant le soir"] },
      "2d": { title: "Trek jungle de 2 jours", highlights: ["Nuit au bord de la rivière", "Dîner et petit-déjeuner dans la jungle", "Retour traditionnel en tube rafting"] },
      "3d": { title: "Trek jungle de 3 jours", highlights: ["Itinéraire plus profond", "Plus de temps pour observer la faune", "Deux nuits en camp"] },
      "4d": { title: "Trek jungle de 4 jours", highlights: ["Sections plus reculées", "Montées et traversées de rivière plus longues", "Idéal pour les voyageurs actifs"] },
      "5d": { title: "Trek jungle de 5 jours", highlights: ["Aventure immersive dans le Gunung Leuser", "Plusieurs nuits en camp", "Beaucoup d’observations animales et végétales"] },
      "p3d": { title: "Forfait exclusif eco jungle de 3 jours", highlights: ["Guide privé", "Transport et hébergement organisés", "Équilibre village et jungle"] },
      "p4d": { title: "Forfait exclusif eco jungle de 4 jours", highlights: ["Programme privé sur plusieurs jours", "Coordination de l’hébergement", "Rythme flexible à Bukit Lawang"] },
      "p5d": { title: "Forfait exclusif eco jungle de 5 jours", highlights: ["Séjour privé complet", "Trek, rafting, temps au village", "Parfait pour une première visite"] },
      "eco2d": { title: "Trek eco workout de 2 jours", highlights: ["Itinéraire actif et engagé", "Défi sur les sentiers et camp au bord de l’eau", "Comportement responsable en forêt"] },
      "eco3d": { title: "Trek eco workout de 3 jours", highlights: ["Rythme plus soutenu", "Plus de distance et de dénivelé", "Pensé pour les voyageurs en forme"] }
    },
    experience: [
      { title: "Départ à Bukit Lawang", text: "Rencontre l’équipe, vérifie ton équipement et entre dans la forêt avec un guide local." },
      { title: "Observer en silence", text: "Cherche orangs-outans, gibbons de Thomas, macaques, oiseaux et plantes de la forêt à bonne distance." },
      { title: "Bien manger et camper", text: "Fruits frais, repas simples en jungle, pauses au bord de la rivière et camps sur les treks plus longs." },
      { title: "Retour par la rivière", text: "Beaucoup de circuits de plusieurs jours se terminent par un tube rafting traditionnel vers le village." }
    ],
    ethics: {
      kicker: "Trekking responsable",
      title: "La plus belle rencontre avec un orang-outan reste sauvage.",
      text: "L’équipe suit des règles de jungle qui protègent les visiteurs, les guides et les animaux : garder ses distances, rester avec le guide, ne jamais nourrir la faune, ne jamais toucher les orangs-outans et éviter tout comportement qui modifie leur déplacement dans la forêt."
    },
    guideRole: "Guide local",
    guides: {
      dedek: { name: "Dedek", text: "Chaleureux, attentif et très expérimenté sur les itinéraires autour de Bukit Lawang." },
      brema: { name: "Brema", text: "Fait avancer la journée avec fluidité tout en respectant l’espace des animaux." },
      ongat: { name: "Ongat", text: "Partage des connaissances pratiques sur la jungle avec un style calme et sûr." }
    },
    faq: [
      {
        q: "Verra-t-on forcément des orangs-outans ?",
        a: "Aucune observation ne peut être garantie. Les treks passent dans des zones où des orangs-outans semi-sauvages et sauvages sont souvent vus, surtout près de l’ancienne zone d’alimentation, mais les animaux se déplacent librement."
      },
      {
        q: "Que faut-il emporter pour Bukit Lawang ?",
        a: "Prévois de l’argent liquide, de bonnes chaussures de marche ou de randonnée, une lampe de poche, un répulsif anti-moustiques, des vêtements à séchage rapide et un petit sac de jour. Pour les treks avec nuit, garde les bagages légers."
      },
      {
        q: "Comment se passe le paiement ?",
        a: "Le site d’origine accepte soit le paiement complet, soit un acompte de 30 %, le solde étant payé à ton arrivée à Bukit Lawang. Contacte l’équipe pour les coordonnées bancaires à jour."
      },
      {
        q: "Où est le point de rendez-vous ?",
        a: "Les treks commencent à Bukit Lawang, dans le nord de Sumatra, en Indonésie. L’équipe peut aussi aider pour le transport et l’hébergement."
      }
    ],
    contact: {
      kicker: "Réserver directement",
      title: "Indique au team tes dates, la taille du groupe et le trek souhaité.",
      text: "WhatsApp est le plus rapide pour connaître les disponibilités. L’e-mail est pratique pour les acomptes, le transport, l’hébergement et les questions détaillées sur l’itinéraire.",
      whatsappLabel: "+62 813-6252-5273",
      emailLabel: "contact@orangutanadventuresumatra.com"
    },
    footer: { location: "Bukit Lawang, Sumatra du Nord, Indonésie" },
    whatsappMessage: "Bonjour OrangutanAdventureSumatra, je souhaite me renseigner sur un trek dans la jungle."
  },
  nl: {
    metaTitle: "OrangutanAdventureSumatra | Ethische jungletours in Bukit Lawang",
    metaDescription:
      "Moderne boekingssite voor ethische orang-oetan trekkings, privé junglepakketten, eco workout tochten, rafting, gidsen en accommodatie in Bukit Lawang, Noord-Sumatra.",
    nav: { treks: "Treks", experience: "Beleving", guides: "Gidsen", faq: "FAQ", contact: "Contact" },
    hero: {
      eyebrow: "Ethisch trekking in Gunung Leuser National Park",
      title: "OrangutanAdventureSumatra",
      description:
        "Begeleide jungle-avonturen vanuit Bukit Lawang met lokale gidsen, respectvolle ontmoetingen met wilde dieren, rivierkampen, vers jungle-eten en tube rafting terug naar het dorp.",
      primary: "Treks bekijken",
      secondary: "WhatsApp",
      stats: [
        { title: "Sterk gewaardeerd lokaal team", text: "Bukit Lawang-gidsen met Tripadvisor-vermelding" },
        { title: "4 uur tot 5 dagen", text: "Kies een korte wandeling of een diepe jungletrek" },
        { title: "Wildlife eerst", text: "Niet voeren, niet aanraken, geen druk op de dieren" }
      ]
    },
    quick: [
      "Dagelijks vertrek rond 8:30",
      "Bukit Lawang, Noord-Sumatra",
      "Rivierkampen en rafting-opties",
      "30% aanbetaling mogelijk"
    ],
    intro: {
      kicker: "Waarom deze trek",
      title: "Moderne avontuurstijl, lokale wortels en serieus respect voor het bos.",
      paragraphs: [
        "OrangutanAdventureSumatra organiseert ethische jungletreks rond Bukit Lawang, de toegangspoort tot Gunung Leuser National Park. De ervaring is gemaakt voor reizigers die een echte dag in het regenwoud willen zonder wilde dieren tot show te maken.",
        "Kies uit korte wandelingen, klassieke meerdaagse treks, exclusieve privé-pakketten en zwaardere eco workout routes. De gidsen regelen tempo, route, maaltijden, het kamp en de terugkeer via de rivier wanneer dat is inbegrepen."
      ],
      promises: [
        "Lokaal Indonesisch gidsenteam",
        "Geen gegarandeerde wildlife-beloftes",
        "Vers fruit en junglemaaltijden",
        "Hulp met transport en accommodatie",
        "Boeken via e-mail en WhatsApp"
      ]
    },
    headings: {
      packages: "Trekkingpakketten",
      packagesSub: "Kies de route die past bij je tijd, conditie en zin in jungle.",
      experience: "De ervaring",
      experienceSub: "Van dorpspad tot terugkeer over de rivier.",
      ethics: "Verantwoord trekking",
      ethicsSubTitle: "De mooiste orang-oetan ontmoeting blijft wild.",
      gallery: "Galerij",
      gallerySub: "Regenwoud, rivier, eten, kampen en de momenten daartussen.",
      guides: "Lokale gidsen",
      guidesSub: "Begeleid door mensen voor wie het bos thuis is.",
      faq: "FAQ",
      faqSub: "Praktische informatie voor vertrek.",
      contact: "Direct boeken",
      contactSub: "Geef het team je data, groepsgrootte en gewenste trek door."
    },
    categories: { classic: "Klassieke treks", private: "Privépakketten", eco: "Eco workout" },
    treks: {
      "4h": { title: "Jungletrek van 4 uur", highlights: ["Korte ethische wildlife-wandeling", "Grote kans op orang-oetans", "Lokale gids inbegrepen"] },
      "1d": { title: "Jungletrek van 1 dag", highlights: ["Volledige Bukit Lawang trek", "Lunch in de jungle", "Terug vóór de avond"] },
      "2d": { title: "Jungletrek van 2 dagen", highlights: ["Slapen bij de rivier", "Jungle diner en ontbijt", "Traditionele tube rafting terug"] },
      "3d": { title: "Jungletrek van 3 dagen", highlights: ["Dieper regenwoudtraject", "Meer tijd voor wildlife", "Twee nachten in jungle-camps"] },
      "4d": { title: "Jungletrek van 4 dagen", highlights: ["Meer afgelegen junglezones", "Langere beklimmingen en rivieroversteken", "Ideaal voor actieve reizigers"] },
      "5d": { title: "Jungletrek van 5 dagen", highlights: ["Meeslepend Gunung Leuser-avontuur", "Meerdere campnachten", "Veel dieren en planten om te spotten"] },
      "p3d": { title: "Exclusief eco jungle-pakket van 3 dagen", highlights: ["Privégids", "Transport en accommodatie geregeld", "Balans tussen dorp en jungle"] },
      "p4d": { title: "Exclusief eco jungle-pakket van 4 dagen", highlights: ["Privé meerdaagse route", "Accommodatiecoördinatie", "Flexibel tempo in Bukit Lawang"] },
      "p5d": { title: "Exclusief eco jungle-pakket van 5 dagen", highlights: ["Compleet privéverblijf", "Trekking, rafting en dorpsmomenten", "Perfect voor een eerste bezoek"] },
      "eco2d": { title: "Eco workout trek van 2 dagen", highlights: ["Actieve route met doel", "Trail-uitdaging en rivierkamp", "Verantwoord gedrag in de jungle"] },
      "eco3d": { title: "Eco workout trek van 3 dagen", highlights: ["Steviger trekritme", "Meer afstand en hoogteverschil", "Gebouwd voor fitte reizigers"] }
    },
    experience: [
      { title: "Start in Bukit Lawang", text: "Ontmoet het team, check je uitrusting en ga met een lokale gids het regenwoud in." },
      { title: "Kijk rustig toe", text: "Spot orang-oetans, Thomas-bladapen, gibbons, makaken, vogels en bosplanten op gepaste afstand." },
      { title: "Goed eten en kamperen", text: "Vers fruit, eenvoudige junglemaaltijden, rust bij de rivier en kampen tijdens langere treks." },
      { title: "Terug over de rivier", text: "Veel meerdaagse tochten eindigen met een traditionele tube rafting terug naar het dorp." }
    ],
    ethics: {
      kicker: "Verantwoord trekking",
      title: "De mooiste orang-oetan ontmoeting blijft wild.",
      text: "Het team volgt jungle-regels die gasten, gidsen en dieren beschermen: afstand houden, bij de gids blijven, wildlife nooit voeren, orang-oetans nooit aanraken en gedrag vermijden dat dieren in hun beweging door het bos beïnvloedt."
    },
    guideRole: "Lokale gids",
    guides: {
      dedek: { name: "Dedek", text: "Warm, oplettend en zeer ervaren op routes rond Bukit Lawang." },
      brema: { name: "Brema", text: "Houdt de dag soepel in beweging terwijl de leefruimte van dieren wordt gerespecteerd." },
      ongat: { name: "Ongat", text: "Deelt praktische junglekennis met een rustige, betrouwbare stijl." }
    },
    faq: [
      {
        q: "Zien we zeker orang-oetans?",
        a: "Een waarneming kan nooit worden gegarandeerd. De treks gaan gebieden in waar semi-wilde en wilde orang-oetans vaak worden gezien, vooral rond de oude voedplek, maar de dieren bewegen vrij."
      },
      {
        q: "Wat moeten we inpakken voor Bukit Lawang?",
        a: "Neem contant geld, goede wandelschoenen of hiking boots, een zaklamp, muggenwering, sneldrogende kleding en een kleine dagtas mee. Houd voor meerdaagse treks je bagage licht."
      },
      {
        q: "Hoe werkt de betaling?",
        a: "De originele site accepteert volledige betaling of een aanbetaling van 30%, waarbij de rest bij aankomst in Bukit Lawang wordt betaald. Neem contact op voor actuele bankgegevens."
      },
      {
        q: "Waar is het ontmoetingspunt?",
        a: "De treks starten in Bukit Lawang, Noord-Sumatra, Indonesië. Het team helpt ook met transport en accommodatie."
      }
    ],
    contact: {
      kicker: "Direct boeken",
      title: "Geef het team je data, groepsgrootte en gewenste trek door.",
      text: "WhatsApp is het snelst voor beschikbaarheid. E-mail is handig voor aanbetalingen, transport, accommodatie en gedetailleerde vragen over de route.",
      whatsappLabel: "+62 813-6252-5273",
      emailLabel: "contact@orangutanadventuresumatra.com"
    },
    footer: { location: "Bukit Lawang, Noord-Sumatra, Indonesië" },
    whatsappMessage: "Hoi OrangutanAdventureSumatra, ik wil graag informatie over een jungletrek."
  }
} satisfies Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  nav: Record<"treks" | "experience" | "guides" | "faq" | "contact", string>;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    stats: Array<{ title: string; text: string }>;
  };
  quick: [string, string, string, string];
  intro: {
    kicker: string;
    title: string;
    paragraphs: [string, string];
    promises: [string, string, string, string, string];
  };
  headings: {
    packages: string;
    packagesSub: string;
    experience: string;
    experienceSub: string;
    ethics: string;
    ethicsSubTitle: string;
    gallery: string;
    gallerySub: string;
    guides: string;
    guidesSub: string;
    faq: string;
    faqSub: string;
    contact: string;
    contactSub: string;
  };
  categories: Record<"classic" | "private" | "eco", string>;
  treks: Record<TrekId, { title: string; highlights: [string, string, string] }>;
  experience: [ { title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string } ];
  ethics: { kicker: string; title: string; text: string };
  guideRole: string;
  guides: Record<GuideId, { name: string; text: string }>;
  faq: [ { q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string } ];
  contact: { kicker: string; title: string; text: string; whatsappLabel: string; emailLabel: string };
  footer: { location: string };
  whatsappMessage: string;
}>;
