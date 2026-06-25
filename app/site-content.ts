export const locales = ["en", "de", "fr", "nl"] as const;

export type Locale = (typeof locales)[number];
export type TrekId = "4h" | "1d" | "2d" | "3d" | "4d" | "5d" | "p3d" | "p4d" | "p5d" | "batcave" | "village";
export type GuideId = "syaipul";

const stockImage = (group: "wildlife" | "activity", index: number) =>
  `/images/stock/${group}-${String(index).padStart(2, "0")}.webp`;

const wildlifeImage = (index: number) => stockImage("wildlife", index);
const activityImage = (index: number) => stockImage("activity", index);

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  nl: "Nederlands"
};

export const trekBase: Array<{
  id: TrekId;
  category: "classic" | "private" | "activities";
  duration: string;
  intensity: string;
  price: string;
  image: string;
}> = [
  { id: "4h", category: "classic", duration: "4 hours", intensity: "Low", price: "55 EUR pp", image: activityImage(4) },
  { id: "1d", category: "classic", duration: "7-8 hours", intensity: "Medium", price: "70 EUR pp", image: activityImage(2) },
  { id: "2d", category: "classic", duration: "2 days / 1 night", intensity: "Medium", price: "120 EUR pp", image: activityImage(3) },
  { id: "3d", category: "classic", duration: "3 days / 2 nights", intensity: "Medium / High", price: "170 EUR pp", image: activityImage(7) },
  { id: "4d", category: "classic", duration: "4 days / 3 nights", intensity: "High", price: "250 EUR pp", image: activityImage(11) },
  { id: "5d", category: "classic", duration: "5 days / 4 nights", intensity: "High", price: "320 EUR pp", image: activityImage(13) },
  { id: "p3d", category: "private", duration: "3 days / 2 nights", intensity: "Medium", price: "280 EUR pp", image: activityImage(1) },
  { id: "p4d", category: "private", duration: "4 days / 3 nights", intensity: "Medium / High", price: "335 EUR pp", image: activityImage(9) },
  { id: "p5d", category: "private", duration: "5 days / 4 nights", intensity: "Medium / High", price: "385 EUR pp", image: activityImage(8) },
  { id: "batcave", category: "activities", duration: "Half day", intensity: "Cave walk", price: "30 EUR pp", image: "/images/bat-cave-tour.jpeg" },
  { id: "village", category: "activities", duration: "Half day", intensity: "Becak or bicycle", price: "30 EUR pp", image: "/images/village-tour.jpeg" }
];

export const guideBase: Array<{ id: GuideId; image: string; fallbackImage?: string }> = [
  { id: "syaipul", image: "/images/guide-syaipul.webp", fallbackImage: activityImage(6) }
];

export const galleryItems = [
  { src: wildlifeImage(2), alt: "Orangutan peeking through the Bukit Lawang canopy" },
  { src: wildlifeImage(1), alt: "Leaf monkey in the rainforest canopy" },
  { src: wildlifeImage(3), alt: "Orangutan moving through the upper canopy" },
  { src: wildlifeImage(6), alt: "Leaf monkey resting among the trees" },
  { src: wildlifeImage(9), alt: "Two orangutans hanging in the rainforest canopy" },
  { src: wildlifeImage(7), alt: "Orangutan on a tree trunk" },
  { src: wildlifeImage(8), alt: "Close-up orangutan portrait in Bukit Lawang" },
  { src: wildlifeImage(11), alt: "Young orangutan peeking from behind a trunk" },
  { src: wildlifeImage(12), alt: "Two leaf monkeys on rainforest branches" },
  { src: wildlifeImage(13), alt: "Orangutan with long orange fur in the canopy" },
  { src: wildlifeImage(15), alt: "Baby orangutan in the trees" },
  { src: wildlifeImage(4), alt: "Orangutan hidden in dense rainforest foliage" }
];

export const siteText = {
  en: {
    metaTitle: "Bukit Lawang Orangutan Trekking | Orangutan Adventure Sumatra",
    metaDescription:
      "Book ethical Bukit Lawang orangutan trekking with a local guide. Choose 4-hour to 5-day Sumatra jungle tours, river camps, rafting, and WhatsApp booking.",
    nav: { treks: "Treks", experience: "Experience", guides: "Guide", faq: "FAQ", contact: "Contact" },
    hero: {
      eyebrow: "Ethical trekking in Gunung Leuser National Park",
      title: "Bukit Lawang Orangutan Trekking",
      description:
        "Ethical orangutan trekking from Bukit Lawang with local guides, private Sumatra jungle packages, riverside camps, fresh jungle food, and tube rafting back to the village.",
      primary: "Explore treks",
      secondary: "WhatsApp",
      stats: [
        { title: "Experienced local guide", text: "Guiding in Bukit Lawang since 2015" },
        { title: "4 hours to 5 days", text: "Choose a light walk or deep jungle trek" },
        { title: "Wildlife-first approach", text: "No feeding, no touching, no pressure on animals" }
      ]
    },
    quick: [
      "Daily starts around 8:30",
      "Bukit Lawang, North Sumatra",
      "River camps and rafting options",
      "30% PayPal deposit"
    ],
    intro: {
      kicker: "Why this trek",
      title: "Modern adventure, local roots, serious respect for the forest.",
      paragraphs: [
        "Orangutan Adventure Sumatra runs ethical jungle trekking around Bukit Lawang, a gateway to Gunung Leuser National Park. The experience is built for travelers who want a real rainforest day without turning wildlife into a performance.",
        "Choose from short walks, classic overnight treks, exclusive private packages, Bat Cave visits, and Village Tours. Syaipul handles pacing, route choices, meals, camp setup, and the return by river when included.",
        "Travelers often search for this area as Bukit Lawang or Bukitlawang, and for wildlife trips as orangutan or orang utan trekking. All refer to the same North Sumatra rainforest gateway."
      ],
      promises: [
        "Local Indonesian guide",
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
      gallerySub: "Endemic wildlife, orangutans in the canopy, leaf monkeys, and quiet rainforest moments.",
      guides: "Your local guide",
      guidesSub: "Meet Syaipul Ardiansyah, born in Bukit Lawang and guiding rainforest treks since 2015.",
      faq: "FAQ",
      faqSub: "Practical notes before you arrive.",
      contact: "Book direct",
      contactSub: "Tell Syaipul your dates, group size, and preferred trek.",
      testimonials: "Traveler reviews",
      testimonialsSub: "What our guests say about their time in the jungle."
    },
    categories: { classic: "Classic treks", private: "Private packages", activities: "Local activities" },
    treks: {
      "4h": { title: "4-Hour Jungle Trekking", highlights: ["Short ethical wildlife walk", "Good chance for orangutans", "Local guide included"] },
      "1d": { title: "1-Day Jungle Trekking", highlights: ["Full-day Bukit Lawang trek", "Lunch in the jungle", "Return before evening"] },
      "2d": { title: "2-Day Jungle Trekking", highlights: ["Sleep by the river", "Included: Guide, meals, tent, permits", "Excluded: Personal insurance, tips"] },
      "3d": { title: "3-Day Jungle Trekking", highlights: ["Deeper rainforest route", "Included: Guide, meals, tent, permits", "Excluded: Personal insurance, tips"] },
      "4d": { title: "4-Day Jungle Trekking", highlights: ["Remote jungle sections", "Included: Guide, meals, camp, permits", "Excluded: Personal insurance, tips"] },
      "5d": { title: "5-Day Jungle Trekking", highlights: ["Immersive Gunung Leuser adventure", "Included: Guide, meals, camp, permits", "Excluded: Personal insurance, tips"] },
      "p3d": { title: "3-Day Exclusive Eco Jungle Package", highlights: ["Private guide flow", "Transport and accommodation support", "Village and jungle balance"] },
      "p4d": { title: "4-Day Exclusive Eco Jungle Package", highlights: ["Private multi-day itinerary", "Accommodation coordination", "Flexible Bukit Lawang pacing"] },
      "p5d": { title: "5-Day Exclusive Eco Jungle Package", highlights: ["Complete private stay", "Trekking, rafting, village time", "Most convenient first visit"] },
      "batcave": { title: "Bat Cave", highlights: ["Rock formations and cave halls", "Bats, swallows, insects, and frogs", "Optional Landak River BBQ"] },
      "village": { title: "Village Tour", highlights: ["Ride by becak or bicycle", "Rice fields, gardens, tofu, and brown sugar", "Optional local lunch and market visits"] }
    },
    experience: [
      { title: "Start in Bukit Lawang", text: "Meet Syaipul, check your gear, and enter the rainforest with a local guide." },
      { title: "Watch quietly", text: "Track orangutans, Thomas leaf monkeys, gibbons, macaques, birds, and forest plants with proper distance." },
      { title: "Eat and camp well", text: "Fresh fruit, simple jungle meals, riverside rest stops, and overnight camps on longer treks." },
      { title: "Return by river", text: "Many overnight trips finish with a traditional tube rafting ride back toward the village." }
    ],
    ethics: {
      kicker: "Responsible trekking",
      title: "The best orangutan encounter is still a wild one.",
      text: "Syaipul follows jungle rules that protect guests, the guide, and animals: keep distance, stay with the guide, never feed wildlife, never touch orangutans, and avoid flash or behavior that changes how animals move through the forest."
    },
    guideRole: "Local guide since 2015",
    guides: {
      syaipul: { name: "Syaipul Ardiansyah", text: "My name is Syaipul Ardiansyah. I was born and raised in Bukit Lawang, and I have been guiding there since 2015. Over the years, I have built a deep knowledge of the flora, fauna, and rainforest trails around Bukit Lawang and Gunung Leuser National Park. I guide each trek with respect for the forest, the animals, and the people who visit." }
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
        a: "The booking form can take a PayPal deposit for 30% of the package total. The remaining balance can be paid in cash when you meet the team, or 2 days before departure after email confirmation."
      },
      {
        q: "Where is the meeting point?",
        a: "Treks start from Bukit Lawang, North Sumatra, Indonesia. Syaipul can also help arrange transportation and accommodation."
      }
    ],
    contact: {
      kicker: "Book direct",
      title: "Tell Syaipul your dates, group size, and preferred trek.",
      text: "WhatsApp is fastest for availability. Email is used to confirm PayPal deposit references, balance payment options, transport, accommodation, and detailed itinerary questions.",
      bookingLabel: "Open booking form",
      whatsappLabel: "+62 853-6240-5752",
      emailLabel: "support@orangutanadventuresumatra.com"
    },
    blog: {
      kicker: "Travel blog",
      heading: "Travel guides for European travelers planning Bukit Lawang",
      readArticle: "Read article",
      essentialInfo: "Essential information",
      allArticles: "All blog articles"
    },
    footerLinks: {
      essentialInfo: "Essential information",
      booking: "Booking",
      blog: "Blog",
      privacy: "Privacy Policy",
      email: "Email",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      maps: "Google Maps"
    },
    mobileMenu: "Menu",
    footer: { location: "Bukit Lawang, North Sumatra, Indonesia" },
    whatsappMessage: "Hi Orangutan Adventure Sumatra, I would like to ask about a jungle trek.",
    testimonialsData: [
      { text: "An unforgettable, truly ethical experience. Syaipul made sure we kept a respectful distance from the orangutans while still getting amazing views. The riverside camp was a highlight!", author: "Sarah M.", location: "Germany" },
      { text: "The 3-day trek was perfectly organized. We felt safe the entire time, and the jungle food was surprisingly delicious. Highly recommend for anyone traveling from Europe.", author: "Thomas & Lisa", location: "Netherlands" },
      { text: "We booked the private package and it was worth every penny. No hidden costs, everything was clearly explained, and the tube rafting back to the village was pure joy.", author: "Claire D.", location: "France" }
    ],
  },
  de: {
    metaTitle: "Orangutan Adventure Sumatra | Ethische Dschungeltouren in Bukit Lawang",
    metaDescription:
      "Moderne Buchungsseite für ethische Orang-Utan-Treks, private Dschungelpakete, Bat-Cave-Besuche, Dorftouren, Rafting, einen lokalen Guide und Unterkünfte in Bukit Lawang, Nord-Sumatra.",
    nav: { treks: "Treks", experience: "Erlebnis", guides: "Guide", faq: "FAQ", contact: "Kontakt" },
    hero: {
      eyebrow: "Ethisches Trekking im Gunung-Leuser-Nationalpark",
      title: "Orangutan Adventure Sumatra",
      description:
        "Geführte Dschungelabenteuer ab Bukit Lawang mit einem lokalen Guide, respektvollen Wildtierbegegnungen, Flusscamps, frischem Dschungelessen und Tube-Rafting zurück ins Dorf.",
      primary: "Treks entdecken",
      secondary: "WhatsApp",
      stats: [
        { title: "Erfahrener lokaler Guide", text: "Guide in Bukit Lawang seit 2015" },
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
        "Orangutan Adventure Sumatra organisiert ethische Dschungeltreks rund um Bukit Lawang, dem Tor zum Gunung-Leuser-Nationalpark. Das Erlebnis ist für Reisende gedacht, die einen echten Regenwaldtag suchen, ohne Wildtiere zur Show zu machen.",
        "Wähle zwischen kurzen Walks, klassischen Übernachtungstouren, exklusiven Privatpaketen, Bat-Cave-Besuchen und Dorftouren. Syaipul übernimmt Tempo, Route, Mahlzeiten, Camp-Aufbau und bei Bedarf die Rückfahrt über den Fluss."
      ],
      promises: [
        "Lokaler indonesischer Guide",
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
      gallerySub: "Endemische Wildtiere, Orang-Utans im Blätterdach, Blattaffen und ruhige Regenwaldmomente.",
      guides: "Dein lokaler Guide",
      guidesSub: "Lerne Syaipul Ardiansyah kennen, geboren in Bukit Lawang und seit 2015 als Regenwald-Guide unterwegs.",
      faq: "FAQ",
      faqSub: "Praktische Hinweise vor der Anreise.",
      contact: "Direkt buchen",
      contactSub: "Teile Syaipul deine Daten, Gruppengröße und gewünschte Tour mit.",
      testimonials: "Gästebewertungen",
      testimonialsSub: "Was unsere Gäste über ihre Zeit im Dschungel sagen."
    },
    categories: { classic: "Klassische Treks", private: "Private Pakete", activities: "Lokale Aktivitäten" },
    treks: {
      "4h": { title: "4-Stunden-Dschungeltrek", highlights: ["Kurzer ethischer Wildtierwalk", "Gute Chance auf Orang-Utans", "Lokaler Guide inklusive"] },
      "1d": { title: "1-Tages-Dschungeltrek", highlights: ["Ganztägiger Bukit-Lawang-Trek", "Mittagessen im Dschungel", "Rückkehr vor dem Abend"] },
      "2d": { title: "2-Tage-Dschungeltrek", highlights: ["Schlafen am Fluss", "Inklusive: Guide, Mahlzeiten, Zelt, Genehmigungen", "Exklusive: Persönliche Versicherung, Trinkgeld"] },
      "3d": { title: "3-Tage-Dschungeltrek", highlights: ["Tiefere Route im Regenwald", "Inklusive: Guide, Mahlzeiten, Zelt, Genehmigungen", "Exklusive: Versicherung, Trinkgeld"] },
      "4d": { title: "4-Tage-Dschungeltrek", highlights: ["Entlegene Dschungelabschnitte", "Inklusive: Guide, Mahlzeiten, Camp, Permits", "Exklusive: Versicherung, Trinkgeld"] },
      "5d": { title: "5-Tage-Dschungeltrek", highlights: ["Intensives Gunung-Leuser-Abenteuer", "Inklusive: Guide, Mahlzeiten, Camp, Permits", "Exklusive: Versicherung, Trinkgeld"] },
      "p3d": { title: "3-Tage-Exklusivpaket Eco Jungle", highlights: ["Privater Guide-Fluss", "Transport- und Unterkunftsplanung", "Balance aus Dorf und Dschungel"] },
      "p4d": { title: "4-Tage-Exklusivpaket Eco Jungle", highlights: ["Privater Mehrtagesplan", "Unterkunftskoordination", "Flexibles Bukit-Lawang-Tempo"] },
      "p5d": { title: "5-Tage-Exklusivpaket Eco Jungle", highlights: ["Kompletter privater Aufenthalt", "Trekking, Rafting, Dorfzeit", "Ideal für den ersten Besuch"] },
      "batcave": { title: "Bat Cave", highlights: ["Felsformationen und Höhlenräume", "Fledermäuse, Schwalben, Insekten und Frösche", "Optionales BBQ am Landak River"] },
      "village": { title: "Dorftour", highlights: ["Mit Becak oder Fahrrad", "Reisfelder, Gärten, Tofu und brauner Zucker", "Optionaler Marktbesuch und lokales Mittagessen"] }
    },
    experience: [
      { title: "Start in Bukit Lawang", text: "Triff Syaipul, prüfe deine Ausrüstung und geh mit einem lokalen Guide in den Regenwald." },
      { title: "Ruhig beobachten", text: "Suche Orang-Utans, Thomas-Languren, Gibbons, Makaken, Vögel und Pflanzen mit angemessenem Abstand." },
      { title: "Gut essen und campen", text: "Frisches Obst, einfache Dschungelgerichte, Pausen am Fluss und Camps auf längeren Touren." },
      { title: "Rückweg über den Fluss", text: "Viele Mehrtagestouren enden mit einer traditionellen Tube-Rafting-Fahrt zurück ins Dorf." }
    ],
    ethics: {
      kicker: "Verantwortungsvolles Trekking",
      title: "Die beste Orang-Utan-Begegnung bleibt eine wilde.",
      text: "Syaipul hält sich an Dschungelregeln, die Gäste, den Guide und Tiere schützen: Abstand halten, beim Guide bleiben, keine Wildtiere füttern, Orang-Utans nie berühren und kein Verhalten zeigen, das den Tieren ihren Weg im Wald verändert."
    },
    guideRole: "Lokaler Guide seit 2015",
    guides: {
      syaipul: { name: "Syaipul Ardiansyah", text: "Mein Name ist Syaipul Ardiansyah. Ich bin in Bukit Lawang geboren und aufgewachsen und arbeite dort seit 2015 als Guide. Über die Jahre habe ich mir ein tiefes Wissen über Flora, Fauna und Regenwaldpfade rund um Bukit Lawang und den Gunung-Leuser-Nationalpark aufgebaut. Jede Tour führe ich mit Respekt vor dem Wald, den Tieren und den Menschen, die ihn besuchen." }
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
        a: "Das Buchungsformular kann eine PayPal-Anzahlung von 30% des Paketpreises berechnen. Der Restbetrag kann beim Treffen mit dem Team in bar bezahlt werden, oder 2 Tage vor Abreise nach E-Mail-Bestaetigung."
      },
      {
        q: "Wo ist der Treffpunkt?",
        a: "Die Treks starten in Bukit Lawang, Nord-Sumatra, Indonesien. Syaipul hilft auch bei Transport und Unterkunft."
      }
    ],
    contact: {
      kicker: "Direkt buchen",
      title: "Teile Syaipul deine Reisedaten, Gruppengröße und Wunschroute mit.",
      text: "WhatsApp ist am schnellsten fuer Verfuegbarkeiten. E-Mail wird genutzt, um die 30% Anzahlung, Restzahlung, Transport, Unterkunft und den detaillierten Ablauf zu bestaetigen.",
      bookingLabel: "Buchungsformular öffnen",
      whatsappLabel: "+62 853-6240-5752",
      emailLabel: "support@orangutanadventuresumatra.com"
    },
    blog: {
      kicker: "Reiseblog",
      heading: "Reiseführer für europäische Reisende, die Bukit Lawang planen",
      readArticle: "Artikel lesen",
      essentialInfo: "Wichtige Informationen",
      allArticles: "Alle Blogartikel"
    },
    footerLinks: {
      essentialInfo: "Wichtige Infos",
      booking: "Buchung",
      blog: "Blog",
      privacy: "Datenschutz",
      email: "E-Mail",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      maps: "Google Maps"
    },
    mobileMenu: "Menü",
    footer: { location: "Bukit Lawang, Nord-Sumatra, Indonesien" },
    whatsappMessage: "Hallo Orangutan Adventure Sumatra, ich möchte mich nach einem Dschungeltrek erkundigen.",
    testimonialsData: [
      { text: "Ein unvergessliches, wirklich ethisches Erlebnis. Syaipul hat dafür gesorgt, dass wir einen respektvollen Abstand zu den Orang-Utans hielten und trotzdem tolle Ausblicke hatten.", author: "Sarah M.", location: "Deutschland" },
      { text: "Der 3-Tages-Trek war perfekt organisiert. Wir fühlten uns die ganze Zeit sicher und das Dschungelessen war erstaunlich lecker. Sehr zu empfehlen!", author: "Thomas & Lisa", location: "Niederlande" },
      { text: "Wir haben das private Paket gebucht und es war jeden Cent wert. Keine versteckten Kosten, alles wurde klar erklärt.", author: "Claire D.", location: "Frankreich" }
    ],
  },
  fr: {
    metaTitle: "Trek orang-outan Sumatra | Bukit Lawang | Orangutan Adventure Sumatra",
    metaDescription:
      "Réserve un trek orang-outan éthique à Bukit Lawang avec un guide local: circuits jungle de 4 heures à 5 jours, camps en rivière, rafting et aide transport.",
    nav: { treks: "Treks", experience: "Expérience", guides: "Guide", faq: "FAQ", contact: "Contact" },
    hero: {
      eyebrow: "Trekking éthique dans le parc national de Gunung Leuser",
      title: "Trek orang-outan à Bukit Lawang",
      description:
        "Trek orang-outan à Sumatra depuis Bukit Lawang avec un guide local, des rencontres responsables avec la faune, des camps au bord de la rivière, de la nourriture fraîche et un retour possible en tube rafting.",
      primary: "Découvrir les treks",
      secondary: "WhatsApp",
      stats: [
        { title: "Guide local expérimenté", text: "Guide à Bukit Lawang depuis 2015" },
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
        "Orangutan Adventure Sumatra organise des treks éthiques dans la jungle autour de Bukit Lawang, porte d’entrée du parc national de Gunung Leuser. L’expérience s’adresse aux voyageurs qui veulent une vraie journée en forêt tropicale sans transformer la faune en spectacle.",
        "Choisis entre des promenades courtes, des treks classiques avec nuit, des forfaits privés exclusifs, des visites de Bat Cave et des tours de village. Syaipul gère le rythme, l’itinéraire, les repas, le campement et le retour par la rivière quand il est inclus.",
        "Cette page répond aux recherches fréquentes comme trek orang-outan Sumatra, trek jungle Bukit Lawang, circuit orang-outan éthique et voyage responsable dans le parc national de Gunung Leuser."
      ],
      promises: [
        "Guide indonésien local",
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
      gallerySub: "Faune endémique, orangs-outans dans la canopée, singes à feuilles et moments calmes de la forêt.",
      guides: "Ton guide local",
      guidesSub: "Découvre Syaipul Ardiansyah, né à Bukit Lawang et guide en forêt tropicale depuis 2015.",
      faq: "FAQ",
      faqSub: "Quelques repères pratiques avant ton arrivée.",
      contact: "Réserver directement",
      contactSub: "Indique à Syaipul tes dates, la taille du groupe et le trek souhaité.",
      testimonials: "Avis des voyageurs",
      testimonialsSub: "Ce que nos clients disent de leur séjour dans la jungle."
    },
    categories: { classic: "Treks classiques", private: "Forfaits privés", activities: "Activités locales" },
    treks: {
      "4h": { title: "Trek jungle de 4 heures", highlights: ["Balade éthique courte", "Bonne chance d’apercevoir des orangs-outans", "Guide local inclus"] },
      "1d": { title: "Trek jungle d’une journée", highlights: ["Trek complet à Bukit Lawang", "Déjeuner dans la jungle", "Retour avant le soir"] },
      "2d": { title: "Trek jungle de 2 jours", highlights: ["Nuit au bord de la rivière", "Inclus: Guide, repas, tente, permis", "Exclus: Assurance personnelle, pourboires"] },
      "3d": { title: "Trek jungle de 3 jours", highlights: ["Itinéraire plus profond", "Inclus: Guide, repas, tente, permis", "Exclus: Assurance personnelle, pourboires"] },
      "4d": { title: "Trek jungle de 4 jours", highlights: ["Sections plus reculées", "Inclus: Guide, repas, camp, permis", "Exclus: Assurance, pourboires"] },
      "5d": { title: "Trek jungle de 5 jours", highlights: ["Aventure immersive dans le Gunung Leuser", "Inclus: Guide, repas, camp, permis", "Exclus: Assurance, pourboires"] },
      "p3d": { title: "Forfait exclusif eco jungle de 3 jours", highlights: ["Guide privé", "Transport et hébergement organisés", "Équilibre village et jungle"] },
      "p4d": { title: "Forfait exclusif eco jungle de 4 jours", highlights: ["Programme privé sur plusieurs jours", "Coordination de l’hébergement", "Rythme flexible à Bukit Lawang"] },
      "p5d": { title: "Forfait exclusif eco jungle de 5 jours", highlights: ["Séjour privé complet", "Trek, rafting, temps au village", "Parfait pour une première visite"] },
      "batcave": { title: "Bat Cave", highlights: ["Formations rocheuses et salles de grotte", "Chauves-souris, hirondelles, insectes et grenouilles", "BBQ optionnel sur la rivière Landak"] },
      "village": { title: "Village Tour", highlights: ["En becak ou à vélo", "Rizières, jardins, tofu et sucre brun", "Marchés locaux certains jours"] }
    },
    experience: [
      { title: "Départ à Bukit Lawang", text: "Rencontre Syaipul, vérifie ton équipement et entre dans la forêt avec un guide local." },
      { title: "Observer en silence", text: "Cherche orangs-outans, gibbons de Thomas, macaques, oiseaux et plantes de la forêt à bonne distance." },
      { title: "Bien manger et camper", text: "Fruits frais, repas simples en jungle, pauses au bord de la rivière et camps sur les treks plus longs." },
      { title: "Retour par la rivière", text: "Beaucoup de circuits de plusieurs jours se terminent par un tube rafting traditionnel vers le village." }
    ],
    ethics: {
      kicker: "Trekking responsable",
      title: "La plus belle rencontre avec un orang-outan reste sauvage.",
      text: "Syaipul suit des règles de jungle qui protègent les visiteurs, le guide et les animaux : garder ses distances, rester avec le guide, ne jamais nourrir la faune, ne jamais toucher les orangs-outans et éviter tout comportement qui modifie leur déplacement dans la forêt."
    },
    guideRole: "Guide local depuis 2015",
    guides: {
      syaipul: { name: "Syaipul Ardiansyah", text: "Je m’appelle Syaipul Ardiansyah. Je suis né et j’ai grandi à Bukit Lawang, où je travaille comme guide depuis 2015. Au fil des années, j’ai développé une connaissance profonde de la flore, de la faune et des sentiers de forêt tropicale autour de Bukit Lawang et du parc national de Gunung Leuser. Je guide chaque trek avec respect pour la forêt, les animaux et les personnes qui la visitent." }
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
        a: "Le formulaire de reservation peut calculer un acompte PayPal de 30% du total du forfait. Le solde peut etre paye en especes lors de la rencontre avec l'equipe, ou 2 jours avant le depart apres confirmation par e-mail."
      },
      {
        q: "Où est le point de rendez-vous ?",
        a: "Les treks commencent à Bukit Lawang, dans le nord de Sumatra, en Indonésie. Syaipul peut aussi aider pour le transport et l’hébergement."
      }
    ],
    contact: {
      kicker: "Réserver directement",
      title: "Indique à Syaipul tes dates, la taille du groupe et le trek souhaité.",
      text: "WhatsApp est le plus rapide pour les disponibilites. L'e-mail sert a confirmer l'acompte de 30%, les options de paiement du solde, le transport, l'hebergement et l'itineraire.",
      bookingLabel: "Ouvrir le formulaire",
      whatsappLabel: "+62 853-6240-5752",
      emailLabel: "support@orangutanadventuresumatra.com"
    },
    blog: {
      kicker: "Blog voyage",
      heading: "Guides de voyage pour les voyageurs européens qui planifient Bukit Lawang",
      readArticle: "Lire l'article",
      essentialInfo: "Informations essentielles",
      allArticles: "Tous les articles"
    },
    footerLinks: {
      essentialInfo: "Infos essentielles",
      booking: "Réservation",
      blog: "Blog",
      privacy: "Politique de confidentialité",
      email: "E-mail",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      maps: "Google Maps"
    },
    mobileMenu: "Menu",
    footer: { location: "Bukit Lawang, Sumatra du Nord, Indonésie" },
    whatsappMessage: "Bonjour Orangutan Adventure Sumatra, je souhaite me renseigner sur un trek dans la jungle.",
    testimonialsData: [
      { text: "Une expérience inoubliable et vraiment éthique. Syaipul s'est assuré que nous gardions une distance respectueuse avec les orangs-outans tout en ayant des vues incroyables.", author: "Sarah M.", location: "Allemagne" },
      { text: "Le trek de 3 jours était parfaitement organisé. Nous nous sommes sentis en sécurité tout le temps, et la nourriture était délicieuse.", author: "Thomas & Lisa", location: "Pays-Bas" },
      { text: "Nous avons réservé le forfait privé et cela valait chaque centime. Pas de frais cachés, tout était clairement expliqué.", author: "Claire D.", location: "France" }
    ],
  },
  nl: {
    metaTitle: "Orangutan Adventure Sumatra | Ethische jungletours in Bukit Lawang",
    metaDescription:
      "Moderne boekingssite voor ethische orang-oetan trekkings, privé junglepakketten, Bat Cave-bezoeken, Village Tours, rafting, een lokale gids en accommodatie in Bukit Lawang, Noord-Sumatra.",
    nav: { treks: "Treks", experience: "Beleving", guides: "Gids", faq: "FAQ", contact: "Contact" },
    hero: {
      eyebrow: "Ethisch trekking in Gunung Leuser National Park",
      title: "Orangutan Adventure Sumatra",
      description:
        "Begeleide jungle-avonturen vanuit Bukit Lawang met een lokale gids, respectvolle ontmoetingen met wilde dieren, rivierkampen, vers jungle-eten en tube rafting terug naar het dorp.",
      primary: "Treks bekijken",
      secondary: "WhatsApp",
      stats: [
        { title: "Ervaren lokale gids", text: "Gids in Bukit Lawang sinds 2015" },
        { title: "4 uur tot 5 dagen", text: "Kies een korte wandeling of een diepe jungletrek" },
        { title: "Wildlife eerst", text: "Niet voeren, niet aanraken, geen druk op de dieren" }
      ]
    },
    quick: [
      "Dagelijks vertrek rond 8:30",
      "Bukit Lawang, Noord-Sumatra",
      "Rivierkampen en rafting-opties",
      "30% aanbetaling per e-mail"
    ],
    intro: {
      kicker: "Waarom deze trek",
      title: "Moderne avontuurstijl, lokale wortels en serieus respect voor het bos.",
      paragraphs: [
        "Orangutan Adventure Sumatra organiseert ethische jungletreks rond Bukit Lawang, de toegangspoort tot Gunung Leuser National Park. De ervaring is gemaakt voor reizigers die een echte dag in het regenwoud willen zonder wilde dieren tot show te maken.",
        "Kies uit korte wandelingen, klassieke meerdaagse treks, exclusieve privé-pakketten, Bat Cave-bezoeken en Village Tours. Syaipul regelt tempo, route, maaltijden, het kamp en de terugkeer via de rivier wanneer dat is inbegrepen."
      ],
      promises: [
        "Lokale Indonesische gids",
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
      gallerySub: "Inheemse wilde dieren, orang-oetans in het bladerdak, bladapen en rustige momenten in het regenwoud.",
      guides: "Je lokale gids",
      guidesSub: "Maak kennis met Syaipul Ardiansyah, geboren in Bukit Lawang en junglegids sinds 2015.",
      faq: "FAQ",
      faqSub: "Praktische informatie voor vertrek.",
      contact: "Direct boeken",
      contactSub: "Geef Syaipul je data, groepsgrootte en gewenste trek door.",
      testimonials: "Beoordelingen",
      testimonialsSub: "Wat onze gasten zeggen over hun tijd in de jungle."
    },
    categories: { classic: "Klassieke treks", private: "Privépakketten", activities: "Lokale activiteiten" },
    treks: {
      "4h": { title: "Jungletrek van 4 uur", highlights: ["Korte ethische wildlife-wandeling", "Grote kans op orang-oetans", "Lokale gids inbegrepen"] },
      "1d": { title: "Jungletrek van 1 dag", highlights: ["Volledige Bukit Lawang trek", "Lunch in de jungle", "Terug vóór de avond"] },
      "2d": { title: "Jungletrek van 2 dagen", highlights: ["Slapen bij de rivier", "Inclusief: Gids, maaltijden, tent, vergunningen", "Exclusief: Persoonlijke verzekering, fooien"] },
      "3d": { title: "Jungletrek van 3 dagen", highlights: ["Dieper regenwoudtraject", "Inclusief: Gids, maaltijden, tent, vergunningen", "Exclusief: Persoonlijke verzekering, fooien"] },
      "4d": { title: "Jungletrek van 4 dagen", highlights: ["Meer afgelegen junglezones", "Inclusief: Gids, maaltijden, camp, permits", "Exclusief: Verzekering, fooien"] },
      "5d": { title: "Jungletrek van 5 dagen", highlights: ["Meeslepend Gunung Leuser-avontuur", "Inclusief: Gids, maaltijden, camp, permits", "Exclusief: Verzekering, fooien"] },
      "p3d": { title: "Exclusief eco jungle-pakket van 3 dagen", highlights: ["Privégids", "Transport en accommodatie geregeld", "Balans tussen dorp en jungle"] },
      "p4d": { title: "Exclusief eco jungle-pakket van 4 dagen", highlights: ["Privé meerdaagse route", "Accommodatiecoördinatie", "Flexibel tempo in Bukit Lawang"] },
      "p5d": { title: "Exclusief eco jungle-pakket van 5 dagen", highlights: ["Compleet privéverblijf", "Trekking, rafting en dorpsmomenten", "Perfect voor een eerste bezoek"] },
      "batcave": { title: "Bat Cave", highlights: ["Rotsformaties en grotkamers", "Vleermuizen, zwaluwen, insecten en kikkers", "Optionele BBQ aan de Landak River"] },
      "village": { title: "Village Tour", highlights: ["Met becak of fiets", "Rijstvelden, tuinen, tofu en bruine suiker", "Marktbezoek op bepaalde dagen"] }
    },
    experience: [
      { title: "Start in Bukit Lawang", text: "Ontmoet Syaipul, check je uitrusting en ga met een lokale gids het regenwoud in." },
      { title: "Kijk rustig toe", text: "Spot orang-oetans, Thomas-bladapen, gibbons, makaken, vogels en bosplanten op gepaste afstand." },
      { title: "Goed eten en kamperen", text: "Vers fruit, eenvoudige junglemaaltijden, rust bij de rivier en kampen tijdens langere treks." },
      { title: "Terug over de rivier", text: "Veel meerdaagse tochten eindigen met een traditionele tube rafting terug naar het dorp." }
    ],
    ethics: {
      kicker: "Verantwoord trekking",
      title: "De mooiste orang-oetan ontmoeting blijft wild.",
      text: "Syaipul volgt jungle-regels die gasten, de gids en dieren beschermen: afstand houden, bij de gids blijven, wildlife nooit voeren, orang-oetans nooit aanraken en gedrag vermijden dat dieren in hun beweging door het bos beïnvloedt."
    },
    guideRole: "Lokale gids sinds 2015",
    guides: {
      syaipul: { name: "Syaipul Ardiansyah", text: "Mijn naam is Syaipul Ardiansyah. Ik ben geboren en opgegroeid in Bukit Lawang en werk daar sinds 2015 als gids. Door de jaren heen heb ik veel kennis opgebouwd over de flora, fauna en regenwoudpaden rond Bukit Lawang en Gunung Leuser National Park. Ik begeleid elke trek met respect voor het bos, de dieren en de mensen die het bezoeken." }
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
        a: "Het boekingsformulier kan een PayPal-aanbetaling van 30% van het pakketbedrag berekenen. Het resterende bedrag kan contant worden betaald wanneer je het team ontmoet, of 2 dagen voor vertrek na bevestiging per e-mail."
      },
      {
        q: "Waar is het ontmoetingspunt?",
        a: "De treks starten in Bukit Lawang, Noord-Sumatra, Indonesië. Syaipul helpt ook met transport en accommodatie."
      }
    ],
    contact: {
      kicker: "Direct boeken",
      title: "Geef Syaipul je data, groepsgrootte en gewenste trek door.",
      text: "WhatsApp is het snelst voor beschikbaarheid. E-mail wordt gebruikt om de 30% aanbetaling, betaling van het resterende bedrag, transport, accommodatie en route-details te bevestigen.",
      bookingLabel: "Boekingsformulier openen",
      whatsappLabel: "+62 853-6240-5752",
      emailLabel: "support@orangutanadventuresumatra.com"
    },
    blog: {
      kicker: "Reisblog",
      heading: "Reisgidsen voor Europese reizigers die Bukit Lawang plannen",
      readArticle: "Lees artikel",
      essentialInfo: "Essentiële informatie",
      allArticles: "Alle blogartikelen"
    },
    footerLinks: {
      essentialInfo: "Essentiële info",
      booking: "Boeking",
      blog: "Blog",
      privacy: "Privacybeleid",
      email: "E-mail",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      maps: "Google Maps"
    },
    mobileMenu: "Menu",
    footer: { location: "Bukit Lawang, Noord-Sumatra, Indonesië" },
    whatsappMessage: "Hoi Orangutan Adventure Sumatra, ik wil graag informatie over een jungletrek.",
    testimonialsData: [
      { text: "Een onvergetelijke, echt ethische ervaring. Syaipul zorgde ervoor dat we op een respectvolle afstand van de orang-oetans bleven, met nog steeds een geweldig uitzicht.", author: "Sarah M.", location: "Duitsland" },
      { text: "De 3-daagse trek was perfect georganiseerd. We voelden ons de hele tijd veilig en het eten in de jungle was heerlijk.", author: "Thomas & Lisa", location: "Nederland" },
      { text: "We boekten het privépakket en het was elke cent waard. Geen verborgen kosten, alles werd duidelijk uitgelegd.", author: "Claire D.", location: "Frankrijk" }
    ],
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
    paragraphs: string[];
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
    testimonials: string;
    testimonialsSub: string;
  };
  categories: Record<"classic" | "private" | "activities", string>;
  treks: Record<TrekId, { title: string; highlights: [string, string, string] }>;
  experience: [ { title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string } ];
  ethics: { kicker: string; title: string; text: string };
  guideRole: string;
  guides: Record<GuideId, { name: string; text: string }>;
  faq: [ { q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string } ];
    contact: { kicker: string; title: string; text: string; bookingLabel: string; whatsappLabel: string; emailLabel: string };
  blog: { kicker: string; heading: string; readArticle: string; essentialInfo: string; allArticles: string };
    footerLinks: { essentialInfo: string; booking: string; blog: string; privacy: string; email: string; whatsapp: string; instagram: string; maps: string };
  mobileMenu: string;
  footer: { location: string };
  whatsappMessage: string;
  testimonialsData: Array<{ text: string; author: string; location: string }>;
}>;
