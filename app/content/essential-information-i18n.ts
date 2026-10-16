import type { Locale } from "../site-content";

export type EssentialInfoSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type EssentialInfoFaq = {
  q: string;
  a: string;
};

export type EssentialInfoContent = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  kicker: string;
  intro: string;
  askGuide: string;
  readBlog: string;
  highlights: string[];
  sections: EssentialInfoSection[];
  faqHeading: string;
  faq: EssentialInfoFaq[];
  relatedLinks: Array<{ href: string; label: string }>;
};

export const essentialInfoByLocale: Record<Locale, EssentialInfoContent> = {
  en: {
    title: "Essential Information for Bukit Lawang Jungle Trekking",
    description:
      "Practical packing, safety, transport, money, food, and responsible trekking notes for travelers planning an orangutan trek in Bukit Lawang, North Sumatra.",
    image: "/images/essential-information-hero.webp",
    imageAlt: "Trekking boots and packing essentials laid out for a Bukit Lawang jungle trip",
    kicker: "Trip planning",
    intro:
      "Use this page before booking flights, packing your bag, or choosing between a day trek and an overnight jungle package. It is written for travelers coming from Europe who want clear expectations before arriving in North Sumatra.",
    askGuide: "Ask a guide",
    readBlog: "Read blog",
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
          "The booking form calculates a 30% deposit from your selected package and group size to secure your trekking dates and National Park permits. We accept Wise (strongly recommended for travelers from Europe/UK/USA for near-zero currency fees), PayPal, or direct bank transfer.",
          "Flexible payment options: We tailor payment methods to what is easiest for you. After submitting your request or sending payment, share the transaction reference via WhatsApp or email.",
          "The remaining 70% balance can be settled in person when you meet the guide team in Bukit Lawang (in cash: EUR, USD, or Indonesian Rupiah), or via Wise shortly before departure.",
          "If plans change, contact the guide as early as possible. Local teams buy fresh supplies and schedule guides and porters in advance, so early communication is warmly appreciated."
        ]
      },
      {
        title: "Travel documents and health",
        paragraphs: [
          "Check your passport validity, Indonesia entry requirements, health advice, and insurance terms before leaving Europe. Rules can change, so confirm current requirements with official sources before departure.",
          "Bring personal medication in original packaging and tell your guide about any condition that could matter during heat, hiking, river travel, or overnight camping."
        ]
      }
    ],
    faqHeading: "Bukit Lawang trekking FAQ",
    faq: [
      {
        q: "What should I pack for a Bukit Lawang jungle trek?",
        a: "Walking shoes with grip, quick-dry clothes, spare socks, a light rain jacket, mosquito repellent, sunscreen, a small towel, personal medicine, a reusable water bottle, a headlamp, a dry bag, and cash in Indonesian rupiah."
      },
      {
        q: "How do I get from Medan to Bukit Lawang?",
        a: "Most travelers arrive through Medan or Kualanamu International Airport and continue by private car, shared transport, or public bus. The road takes around four to five hours, so avoid trekking on the same day as a long-haul arrival."
      },
      {
        q: "How fit do I need to be for Bukit Lawang trekking?",
        a: "Trails can be steep, humid, slippery, and muddy after rain. A medium fitness level is enough for short treks. The 3-day to 5-day routes are better suited to active travelers."
      },
      {
        q: "Are orangutan sightings guaranteed in Bukit Lawang?",
        a: "No. The forest is a natural habitat, not a zoo. Ethical trekking means keeping distance, never feeding or touching wildlife, avoiding flash photography, and letting the guide manage every encounter."
      },
      {
        q: "How much deposit is needed to book a trek?",
        a: "The booking form calculates a 30% PayPal deposit from your selected package and group size. The balance can be paid in cash when you meet the guide team in Bukit Lawang, or 2 days before departure."
      },
      {
        q: "What food is available on multi-day treks?",
        a: "Jungle meals are simple and fresh: fruit, rice, vegetables, eggs, noodles, fish or chicken, tea, and coffee. Tell your guide early if you need vegetarian, vegan, halal, gluten-free, or allergy-aware meals."
      },
      {
        q: "Do forest fires (Karhutla) or seasonal haze affect trekking in Bukit Lawang?",
        a: "Bukit Lawang and Gunung Leuser National Park consist of primary tropical rainforest and steep mountain terrain with high humidity, completely different from drained peatland areas. Even during dry seasons, the canopy air stays fresh and trekking operates safely as usual."
      }
    ],
    relatedLinks: [
      { href: "/sumatra-orangutan-tour", label: "Compare Sumatra orangutan tours" },
      { href: "/3-day-bukit-lawang-orangutan-trek", label: "3-day Bukit Lawang orangutan trek" },
      { href: "/booking", label: "Booking form" }
    ]
  },
  de: {
    title: "Wichtige Informationen für Ihr Dschungeltrekking in Bukit Lawang",
    description:
      "Praktische Hinweise zu Packliste, Sicherheit, Anreise, Geld, Verpflegung und verantwortungsvollem Trekking für Ihre Orang-Utan-Tour in Bukit Lawang, Nord-Sumatra.",
    image: "/images/essential-information-hero.webp",
    imageAlt: "Trekkingschuhe und Ausrüstung für eine Dschungeltour in Bukit Lawang",
    kicker: "Reiseplanung",
    intro:
      "Nutzen Sie diese Seite vor der Flugbuchung, beim Packen oder bei der Wahl zwischen Tages- und Mehrtagestour. Verfasst für Reisende aus Europa für transparente Vorbereitung vor Ihrer Ankunft in Nord-Sumatra.",
    askGuide: "Guide fragen",
    readBlog: "Blog lesen",
    highlights: [
      "Touren starten in Bukit Lawang, Nord-Sumatra",
      "Transparente Preise in EUR für europäische Gäste",
      "Bargeld im Dorf erforderlich",
      "Strikte Schutzregeln: kein Anfassen, kein Füttern der Wildtiere"
    ],
    sections: [
      {
        title: "Vor der Buchung",
        paragraphs: [
          "Teilen Sie uns Reisedaten, Gruppengröße, Fitnesslevel, gewünschte Tourdauer, Unterkunftswünsche und eventuellen Transferbedarf ab Medan (KNO) mit.",
          "Informieren Sie uns bei Mehrtagestouren frühzeitig über Ernährungseinschränkungen, Allergien oder gesundheitliche Aspekte."
        ],
        bullets: [
          "4-Stunden- oder 1-Tagestour: ideal bei begrenzter Reisezeit.",
          "2- oder 3-Tagestour: mehr Zeit für Camp-Erlebnis am Fluss und Tube-Rafting.",
          "Private Touren: perfekt für Paare, Familien und Fotografen mit individuellem Tempo."
        ]
      },
      {
        title: "Anreise nach Bukit Lawang",
        paragraphs: [
          "Internationale Reisende landen meist am Flughafen Medan (KNO) und reisen per privatem Transfer oder Bus weiter nach Bukit Lawang (ca. 4-5 Stunden Fahrt).",
          "Vermeiden Sie es, direkt am Ankunftstag nach einem Langstreckenflug aus Europa in den Dschungel zu starten. Eine Nacht in Medan oder Bukit Lawang sorgt für einen entspannten Start."
        ],
        bullets: [
          "Zielflughafen: Medan Kualanamu (KNO), Nord-Sumatra.",
          "Treffpunkt: Dorf Bukit Lawang.",
          "Gerne organisieren wir Ihren privaten Flughafentransfer im klimatisierten Fahrzeug."
        ]
      },
      {
        title: "Packliste & Ausrüstung",
        paragraphs: [
          "Reisen Sie mit leichtem Gepäck. Ihr Hauptgepäck verbleibt sicher im Gästehaus im Dorf – in den Dschungel nehmen Sie nur das Wesentliche im Tagesrucksack mit."
        ],
        bullets: [
          "Trekkingschuhe oder Wanderschuhe mit gutem Profil",
          "Schnelltrocknende Kleidung, Wechselsocken und leichte Regenjacke",
          "Mückenschutz, Sonnencreme, kleines Handtuch und persönliche Medikamente",
          "Wiederverwendbare Trinkflasche, Stirnlampe und kleiner Drybag (wasserdichte Tasche)",
          "Bargeld in indonesischen Rupiah für Dorfausgaben und Trinkgelder"
        ]
      },
      {
        title: "Verpflegung, Wasser & Übernachtung",
        paragraphs: [
          "Die Dschungelküche ist frisch und lecker: Tropenfrüchte, Reis, Gemüse, Eier, Nudeln, Fisch oder Huhn, Tee und Kaffee. Vegetarisch, vegan oder allergenfrei wird auf Wunsch gerne zubereitet.",
          "Dschungelcamps sind einfach und naturnah gestaltet: überdachte Schlafplätze mit Isomatte und Moskitonetz direkt am Fluss, Erfrischung im Flusswasser und nächtliche Regenwaldgeräusche."
        ]
      },
      {
        title: "Körperliche Fitness & Sicherheit",
        paragraphs: [
          "Die Pfade in Bukit Lawang können steil, rutschig und nach Regen schlammig sein. Eine solide Grundkondition reicht für kürzere Touren; Mehrtagestouren erfordern mehr Ausdauer.",
          "Unsere lizenzierten Guides passen das Tempo an die Gruppe an. Bei Vorerkrankungen oder Bedenken sprechen Sie das Team jederzeit an."
        ],
        bullets: [
          "Schließen Sie eine Auslandskranken- und Bergreiseversicherung ab.",
          "Folgen Sie bei Flussüberquerungen stets den Anweisungen des Guides.",
          "Das traditionelle Tube-Rafting zurück ins Dorf hängt vom Wasserstand ab."
        ]
      },
      {
        title: "Ethische Tierbeobachtung",
        paragraphs: [
          "Der Gunung Leuser Nationalpark ist kein Zoo. Orang-Utans, Gibbons und Makaken bewegen sich völlig frei in ihrem natürlichen Lebensraum.",
          "Ethisches Trekking bedeutet: mindestens 7–10 Meter Abstand halten, niemals füttern, niemals berühren, kein Blitzlicht und absolute Rücksichtnahme."
        ]
      },
      {
        title: "Anzahlung, Zahlung & Stornierung",
        paragraphs: [
          "Das Buchungsformular berechnet eine 30 % Anzahlung, um Ihre Wunschtermine und Nationalpark-Permits fest zu reservieren. Wir akzeptieren Wise (empfohlen für minimale Wechselgebühren in EUR), PayPal sowie Banküberweisungen.",
          "Flexible Zahlungswege: Wir richten uns nach Ihren Wünschen. Nach Absenden Ihrer Anfrage erhalten Sie auf Wunsch direkt die Wise-Bankverbindung oder können per PayPal zahlen.",
          "Der Restbetrag (70 %) wird entspannt bei Ihrer Ankunft in Bukit Lawang in bar (EUR, USD oder IDR) oder vor Abreise per Wise beglichen."
        ]
      },
      {
        title: "Reisedokumente & Gesundheit",
        paragraphs: [
          "Prüfen Sie vor Abflug Reisepassgültigkeit (mind. 6 Monate) und Visa-Regelungen (Visa on Arrival für europäische Staatsbürger).",
          "Führen Sie persönliche Medikamente im Handgepäck mit und informieren Sie Ihren Guide über gesundheitliche Besonderheiten."
        ]
      }
    ],
    faqHeading: "Häufige Fragen zu Bukit Lawang",
    faq: [
      {
        q: "Was gehört auf die Packliste für eine Dschungeltour?",
        a: "Griffige Wanderschuhe, atmungsaktive Kleidung, Wechselsocken, Regenschutz, Mückenspray, Stirnlampe, Drybag, wiederverwendbare Trinkflasche und Bargeld in IDR."
      },
      {
        q: "Wie gelange ich von Medan nach Bukit Lawang?",
        a: "Die meisten Gäste nutzen unseren organisierten Privattransfer vom Flughafen Medan (KNO) direkt nach Bukit Lawang (ca. 4–5 Stunden Fahrzeit)."
      },
      {
        q: "Welche Fitness ist für das Trekking erforderlich?",
        a: "Für Halbtages- und 1-Tagestouren reicht eine normale Grundfitness. Für 3- bis 5-Tagestouren sollten Sie trittsicher und an längere Märsche bei tropischer Luftfeuchtigkeit gewöhnt sein."
      },
      {
        q: "Sind Sichtungen von Orang-Utans garantiert?",
        a: "Da es sich um wildlebende Tiere handelt, gibt es keine Garantie. Dank erfahrener Guides und hoher Orang-Utan-Dichte im Nationalpark sind Sichtungen jedoch sehr wahrscheinlich."
      },
      {
        q: "Wie hoch ist die Anzahlung bei der Buchung?",
        a: "Die Anzahlung beträgt 30 % des Gesamtpreises und wird bequem und sicher per PayPal geleistet. Der Restbetrag wird vor Ort beglichen."
      },
      {
        q: "Welche Verpflegung gibt es während der Tour?",
        a: "Frische Dschungelmahlzeiten mit viel Obst, Reis, Gemüse, Nudeln und Tee. Vegetarische und vegane Wünsche werden problemlos berücksichtigt."
      },
      {
        q: "Beeinträchtigen Waldbrände oder Haze das Trekking in Bukit Lawang?",
        a: "Bukit Lawang liegt in bergigem Primärregenwald mit hoher Feuchtigkeit, weit entfernt von Torfgebieten. Die Luft unter dem Blätterdach ist frisch und Touren finden regulär statt."
      }
    ],
    relatedLinks: [
      { href: "/sumatra-orangutan-tour", label: "Sumatra Orang-Utan Touren vergleichen" },
      { href: "/3-day-bukit-lawang-orangutan-trek", label: "3-Tage-Trekking in Bukit Lawang" },
      { href: "/de/booking", label: "Zum Buchungsformular" }
    ]
  },
  fr: {
    title: "Informations essentielles pour le trek jungle à Bukit Lawang",
    description:
      "Conseils pratiques sur l'équipement, la sécurité, l'accès, le budget, la nourriture et les règles éthiques pour réussir votre trek orang-outan à Bukit Lawang.",
    image: "/images/essential-information-hero.webp",
    imageAlt: "Chaussures de marche et affaires de trek préparées pour Bukit Lawang",
    kicker: "Préparer votre voyage",
    intro:
      "Consultez ce guide avant de réserver vos vols, préparer votre sac ou choisir entre un trek d'une journée et un circuit avec nuit en jungle. Destiné aux voyageurs européens pour une organisation sereine.",
    askGuide: "Contacter un guide",
    readBlog: "Lire le blog",
    highlights: [
      "Départ des treks à Bukit Lawang, Sumatra Nord",
      "Tarifs indiqués en EUR pour les voyageurs européens",
      "Espèces recommandées dans le village",
      "Règles strictes : ne pas toucher et ne pas nourrir la faune"
    ],
    sections: [
      {
        title: "Avant de réserver",
        paragraphs: [
          "Indiquez vos dates de voyage, le nombre de personnes, votre condition physique, la formule souhaitée et vos besoins de transfert depuis Medan (KNO).",
          "Pour les treks de plusieurs jours, signalez vos régimes alimentaires, allergies ou éventuels problèmes de santé."
        ],
        bullets: [
          "Trek 4 heures ou 1 jour : parfait pour les séjours courts.",
          "Trek 2 ou 3 jours : idéal pour vivre l'ambiance des camps au bord de l'eau et le retour en rafting.",
          "Treks privés : recommandés pour les couples et familles souhaitant un rythme adapté."
        ]
      },
      {
        title: "Comment se rendre à Bukit Lawang",
        paragraphs: [
          "La majorité des voyageurs atterrissent à Medan (KNO) et poursuivent en véhicule privé ou bus jusqu'à Bukit Lawang (environ 4 à 5 heures de route).",
          "Évitez de commencer un trek le jour même de votre arrivée après un long vol international. Une première nuit sur place permet de démarrer en pleine forme."
        ],
        bullets: [
          "Aéroport d'arrivée : Medan Kualanamu (KNO), Sumatra Nord.",
          "Point de rendez-vous : village de Bukit Lawang.",
          "Transfert privé climatisé disponible sur demande."
        ]
      },
      {
        title: "Ce qu'il faut emporter (Packliste)",
        paragraphs: [
          "Voyagez léger ! Vos gros bagages restent en sécurité à votre guesthouse au village, vous n'emportez dans la jungle que l'essentiel dans un sac à dos."
        ],
        bullets: [
          "Chaussures de marche avec une bonne adhérence",
          "Vêtements respirants, chaussettes de rechange et veste de pluie légère",
          "Répulsif anti-moustiques, crème solaire, petite serviette et pharmacie personnelle",
          "Gourde réutilisable, lampe frontale et sac étanche (drybag)",
          "Espèces en roupies indonésiennes (IDR) pour le village et pourboires"
        ]
      },
      {
        title: "Nourriture, eau et hébergement",
        paragraphs: [
          "Les repas en jungle sont frais et préparés sur place : fruits tropicaux, riz, légumes, nouilles, œufs, thé et café. Options végétariennes et véganes disponibles.",
          "Les camps sont rustiques et authentiques : abris couverts avec matelas et moustiquaires au bord de la rivière, bercés par les sons de la forêt."
        ]
      },
      {
        title: "Condition physique et sécurité",
        paragraphs: [
          "Les sentiers peuvent être escarpés et glissants en cas de pluie. Une forme physique modérée suffit pour les circuits courts, tandis que 3 à 5 jours demandent de l'endurance.",
          "Nos guides certifiés veillent au rythme du groupe et à la sécurité de chacun."
        ],
        bullets: [
          "Souscrivez une assurance voyage couvrant la randonnée.",
          "Suivez toujours les consignes du guide lors des passages en rivière.",
          "Le retour en bouée (tube rafting) dépend du débit du cours d'eau."
        ]
      },
      {
        title: "Respect de la faune sauvage",
        paragraphs: [
          "Le parc national Gunung Leuser est un habitat naturel, pas un zoo. Les animaux se déplacent en totale liberté.",
          "Règles d'or : garder une distance de sécurité (7 à 10 mètres), ne jamais nourrir, ne jamais toucher et ne pas utiliser de flash."
        ]
      },
      {
        title: "Acompte, paiement et annulation",
        paragraphs: [
          "Le formulaire calcule un acompte de 30 % pour réserver vos dates et vos permis de parc. Nous acceptons Wise (recommandé pour des frais de change minimes en euros), PayPal et virement bancaire.",
          "Options flexibles : nous nous adaptons à ce qui est le plus pratique pour vous. Les coordonnées Wise ou PayPal vous sont confirmées par WhatsApp ou email.",
          "Le solde restant de 70 % se règle en espèces à votre arrivée à Bukit Lawang (en EUR, USD ou IDR) ou par Wise avant le départ."
        ]
      },
      {
        title: "Formalités et santé",
        paragraphs: [
          "Vérifiez la validité de votre passeport (au moins 6 mois) et les conditions de visa (Visa on Arrival disponible pour les ressortissants européens).",
          "Conservez vos traitements médicaux habituels avec vous et prévenez l'équipe en cas de sensibilité particulière."
        ]
      }
    ],
    faqHeading: "FAQ trek à Bukit Lawang",
    faq: [
      {
        q: "Que faut-il mettre dans son sac pour un trek à Bukit Lawang ?",
        a: "Chaussures avec bonne semelle, vêtements respirants, chaussettes de rechange, veste imperméable, anti-moustiques, lampe frontale, sac étanche et argent liquide."
      },
      {
        q: "Comment rejoindre Bukit Lawang depuis Medan ?",
        a: "Nous organisons votre transfert privé direct depuis l'aéroport de Medan (KNO) jusqu'à votre hôtel à Bukit Lawang (environ 4 à 5h de route)."
      },
      {
        q: "Quel niveau physique faut-il pour faire un trek ?",
        a: "Une forme physique normale suffit pour les circuits de 4h ou 1 jour. Pour 3 à 5 jours en jungle, une bonne endurance et l'habitude de marcher en terrain accidenté sont recommandées."
      },
      {
        q: "Les orangs-outans sont-ils garantis ?",
        a: "En milieu naturel sauvage, aucune garantie absolue n'est possible, mais la forte concentration d'orangs-outans et l'expertise de nos guides rendent les observations quasi certaines."
      },
      {
        q: "Quel est le montant de l'acompte ?",
        a: "Un acompte de 30 % est demandé pour sécuriser les guides et les permis. Le règlement se fait par PayPal, le solde sur place."
      },
      {
        q: "Quels sont les repas pendant les treks ?",
        a: "Des repas copieux et frais : fruits à profusion, curry de légumes, riz, nouilles sautées, beignets et boissons chaudes. Adaptations végétariennes possibles."
      },
      {
        q: "Les incendies de forêt ou brumes saisonnières affectent-ils Bukit Lawang ?",
        a: "Non, Bukit Lawang est entouré de forêt pluviale de montagne humide très préservée. L'air sous la canopée reste sain et pur tout au long de l'année."
      }
    ],
    relatedLinks: [
      { href: "/sumatra-orangutan-tour", label: "Comparer les circuits orang-outan" },
      { href: "/3-day-bukit-lawang-orangutan-trek", label: "Trek de 3 jours à Bukit Lawang" },
      { href: "/fr/booking", label: "Formulaire de réservation" }
    ]
  },
  nl: {
    title: "Essentiële informatie voor jungletrekking in Bukit Lawang",
    description:
      "Praktische tips over paklijst, veiligheid, vervoer, geldzaken, maaltijden en verantwoord trekken voor uw orang-oetan reis in Bukit Lawang, Noord-Sumatra.",
    image: "/images/essential-information-hero.webp",
    imageAlt: "Wandelschoenen en uitrusting klaargelegd voor een jungletrek in Bukit Lawang",
    kicker: "Reisplanning",
    intro:
      "Bekijk deze pagina voordat u vluchten boekt, inpakt of kiest tussen een dagtocht of meerdaagse tocht met overnachting in de jungle. Geschreven voor reizigers uit Europa voor een zorgeloze voorbereiding.",
    askGuide: "Vraag een gids",
    readBlog: "Lees blog",
    highlights: [
      "Treks starten in Bukit Lawang, Noord-Sumatra",
      "Heldere prijzen in EUR voor Europese gasten",
      "Contant geld is noodzakelijk in het dorp",
      "Strenge natuurbehoudregels: niet aanraken, niet voeren"
    ],
    sections: [
      {
        title: "Vóór u boekt",
        paragraphs: [
          "Deel uw reisdata, groepsgrootte, conditieniveau, gewenste tochtduur en eventueel vervoer vanaf Medan (KNO) met ons.",
          "Meld bij meerdaagse tochten dieetwensen, allergieën of gezondheidsaandachtspunten vroegtijdig aan de gids."
        ],
        bullets: [
          "4-uur of 1-dagstocht: ideaal bij beperkte tijd.",
          "2- of 3-daagse tocht: meer tijd voor het kampleven aan de rivier en terugvaart per tube-rafting.",
          "Privétours: perfect voor stellen en gezinnen die een eigen tempo prefereren."
        ]
      },
      {
        title: "Reizen naar Bukit Lawang",
        paragraphs: [
          "De meeste reizigers vliegen op Medan (KNO) en reizen per privévervoer of bus verder naar Bukit Lawang (ca. 4 tot 5 uur rijden).",
          "Begin liever niet direct op uw aankomstdag aan een jungletrek na een lange intercontinentale vlucht. Een nacht rust in Medan of Bukit Lawang zorgt voor een fijne start."
        ],
        bullets: [
          "Aankomstluchthaven: Medan Kualanamu (KNO), Noord-Sumatra.",
          "Ontmoetingsplek: Bukit Lawang dorp.",
          "Vraag ons vooraf om privévervoer met airconditioning voor een soepele transfer."
        ]
      },
      {
        title: "Paklijst & uitrusting",
        paragraphs: [
          "Reis licht! Uw grote koffer blijft veilig achter in het guesthouse in het dorp; u neemt alleen het hoognodige mee in een dagrugzak de jungle in."
        ],
        bullets: [
          "Wandelschoenen met goed profiel en grip",
          "Sneldrogende kleding, extra sokken en een lichte regenjas",
          "Muggenwerend middel, zonnebrandcrème, kleine handdoek en persoonlijke medicijnen",
          "Herbruikbare waterfles, hoofdlamp en een kleine waterdichte tas (drybag)",
          "Contant geld in Indonesische rupiah (IDR) voor dorp en fooien"
        ]
      },
      {
        title: "Eten, drinken en verblijf",
        paragraphs: [
          "De maaltijden in de jungle zijn vers en smaakvol: veel vers tropisch fruit, rijst, groenten, noedels, eieren, vis of kip, thee en koffie. Vegetarisch of veganistisch is altijd mogelijk.",
          "Junglekampen zijn eenvoudig en sfeervol: overdekte slaapplekken met matrasjes en klamboe aan de rivier, verfrissen in het stromende water en slapen met junglegeluiden."
        ]
      },
      {
        title: "Conditie, weer en veiligheid",
        paragraphs: [
          "Paden in Bukit Lawang kunnen steil, warm, vochtig en na regen modderig zijn. Een gemiddelde conditie is prima voor kortere tochten; 3 tot 5 dagen vraagt meer uithoudingsvermogen.",
          "Onze gidsen passen het wandeltempo aan de groep aan."
        ],
        bullets: [
          "Zorg voor een reisverzekering die berg- en jungletrekking dekt.",
          "Volg bij rivieroversteken en afdalingen altijd de aanwijzingen van de gids.",
          "Het traditionele tube-raften terug naar het dorp hangt af van de waterstand."
        ]
      },
      {
        title: "Respect voor wilde dieren",
        paragraphs: [
          "Het Gunung Leuser Nationaal Park is een beschermd natuurreservaat, geen dierentuin. Dieren bewegen zich in volledige vrijheid.",
          "Ethisch trekken betekent: minstens 7 tot 10 meter afstand houden, nooit voeren, nooit aanraken en geen flitslicht gebruiken."
        ]
      },
      {
        title: "Aanbetaling, betaling en annulering",
        paragraphs: [
          "Het formulier berekent de 30% PayPal-aanbetaling op basis van het gekozen pakket en aantal deelnemers.",
          "Stuur na betaling de transactiereferentie via WhatsApp of vermeld deze in het reserveringsformulier.",
          "Het restantbedrag wordt bij aankomst contant voldaan of 2 dagen voor vertrek."
        ]
      },
      {
        title: "Reisdocumenten en gezondheid",
        paragraphs: [
          "Controleer de geldigheid van uw paspoort (minimaal 6 maanden) en visumvoorwaarden (Visa on Arrival).",
          "Neem persoonlijke medicijnen mee in de handbagage en licht uw gids in over eventuele medische bijzonderheden."
        ]
      }
    ],
    faqHeading: "Veelgestelde vragen over Bukit Lawang",
    faq: [
      {
        q: "Wat moet ik inpakken voor een jungletrek in Bukit Lawang?",
        a: "Goede wandelschoenen met grip, sneldrogende kleding, extra sokken, lichte regenjas, muggenspray, hoofdlamp, waterdichte tas en contant geld."
      },
      {
        q: "Hoe reis ik van Medan naar Bukit Lawang?",
        a: "De meeste gasten kiezen voor ons georganiseerde privévervoer vanaf de luchthaven Medan (KNO) rechtstreeks naar Bukit Lawang (ca. 4 tot 5 uur rijden)."
      },
      {
        q: "Hoe fit moet ik zijn voor de jungletrek?",
        a: "Voor 4 uur of 1 dag volstaat een normale basisconditie. Voor 3 tot 5 dagen is een goede wandelconditie en ervaring met heuvelachtig terrein aanbevolen."
      },
      {
        q: "Zijn ontmoetingen met orang-oetans gegarandeerd?",
        a: "Omdat het wilde dieren zijn, kan niemand 100% garantie geven. Dankzij de deskundigheid van onze gidsen en de hoge populatie is de kans op ontmoetingen echter zeer groot."
      },
      {
        q: "Hoeveel bedraagt de aanbetaling?",
        a: "De aanbetaling bedraagt 30% van het totaalbedrag via veilige PayPal-betaling. Het restant betaalt u bij aankomst."
      },
      {
        q: "Wat voor eten krijg je tijdens de trek?",
        a: "Verse junglemaaltijden met overvloedig tropisch fruit, rijstgerechten, groenten, noedels, thee en koffie. Vegetarisch of veganistisch is altijd mogelijk."
      },
      {
        q: "Hebben bosbranden of seizoensgebonden smog invloed op Bukit Lawang?",
        a: "Nee, Bukit Lawang ligt in bergachtig primair regenwoud met een hoge luchtvochtigheid, ver weg van veengebieden. De lucht onder het bladerdek is fris en gezond."
      }
    ],
    relatedLinks: [
      { href: "/sumatra-orangutan-tour", label: "Vergelijk Sumatra orang-oetan tours" },
      { href: "/3-day-bukit-lawang-orangutan-trek", label: "3-daagse Bukit Lawang orang-oetan trek" },
      { href: "/nl/booking", label: "Reserveringsformulier" }
    ]
  },
  zh: {
    title: "武吉拉旺热带雨林徒步行前必备须知",
    description:
      "最详尽实用的行李打包建议、安全指南、交通抵离、现金货币、野餐露营伙食及生态文明规则，助您安心开启苏门答腊红毛猩猩探索之旅。",
    image: "/images/essential-information-hero.webp",
    imageAlt: "为武吉拉旺丛林徒步准备的登山鞋与装备清单",
    kicker: "出行规划指南",
    intro:
      "在订购机票、收拾行囊或在一日游与多日露营套餐之间抉择前，请仔细阅读本指南。我们专为前往北苏门答腊的海外旅行者量身打造，建立清晰透明的出行预期。",
    askGuide: "向导咨询",
    readBlog: "阅读攻略",
    highlights: [
      "所有徒步路线均从印尼北苏门答腊武吉拉旺出发",
      "价格清晰透明，均以欧元标价",
      "村庄生活与小费建议准备印尼盾现金",
      "严格执行不喂食、不触摸的野生动物保护伦理"
    ],
    sections: [
      {
        title: "预订前需要沟通的事项",
        paragraphs: [
          "请提前告知我们您的出行日期、人数、体能状况、心仪徒步天数、客栈住宿需求，以及是否需要棉兰市区或瓜拉纳穆国际机场（KNO）的私家车接送。",
          "对于多日过夜徒步，请尽早告知向导您的任何饮食禁忌（素食、清真、无麸质等）、过敏史或身体健康关注点。"
        ],
        bullets: [
          "4小时或1日徒步：非常适合假期时间紧张的旅行者。",
          "2天或3天徒步：拥有充裕时间体验河畔露营生活并乘轮胎漂流返程。",
          "私享定制套餐：最适合情侣、亲子家庭、摄影爱好者或喜欢安静节奏的旅行者。"
        ]
      },
      {
        title: "如何抵达武吉拉旺",
        paragraphs: [
          "国际旅客多经由棉兰瓜拉纳穆国际机场（KNO）入境，随后搭乘私家车或巴士前往武吉拉旺（车程约4至5小时）。后半程乡道行驶较慢，请合理预留宽裕时间。",
          "长途国际航班落地当天，强烈建议在棉兰或武吉拉旺客栈先休息一晚倒时差，次日精神饱满再步入雨林，这样更加安全愉悦。"
        ],
        bullets: [
          "抵达城市：印尼北苏门答腊棉兰（Medan）。",
          "徒步集合点：武吉拉旺村庄（Bukit Lawang）。",
          "需要机场空调专车接送可在预订时一并告知我们安排。"
        ]
      },
      {
        title: "行装打包与装备建议",
        paragraphs: [
          "务必轻装上阵！过夜徒步期间，您的大件行李箱免费安全寄存在村庄客栈，只背一个小型双肩包带随身必需品进山即可。"
        ],
        bullets: [
          "抓地力强、鞋底防滑的徒步鞋或登山鞋",
          "速干轻便衣裤、备用棉袜和轻薄雨衣",
          "高倍防蚊液、防晒霜、速干小毛巾及个人日常药品",
          "可重复使用的运动水壶、户外头灯/手电筒与小型防水袋（Drybag）",
          "适量印尼盾（IDR）现金，用于村庄零花与向导团队小费"
        ]
      },
      {
        title: "饮食、饮水与营地住宿",
        paragraphs: [
          "雨林餐饮新鲜质朴且营养丰富：大量新鲜热带水果（菠萝、西瓜、百香果、香蕉）、米饭、时令蔬菜、鸡蛋、炒面、鱼或鸡肉、热茶及苏门答腊咖啡。素食、纯素、清真均可定制。",
          "河畔野外营地设施原始质朴：天然遮雨竹棚下铺设防潮隔热垫、睡袋与防蚊网，用清澈溪流洗漱，伴着雨林虫鸣水声安然入睡。"
        ]
      },
      {
        title: "体能要求、热带天气与安全保障",
        paragraphs: [
          "武吉拉旺的山径偶有陡坡，雨后湿润泥泞。普通中等体力即可胜任1至2天徒步；3至5天深度穿越则建议有常规徒步习惯的活跃旅行者参与。",
          "专业向导会全程根据大家的状态调整步频，如有膝盖不适、恐高或不耐热，请随时与向导沟通。"
        ],
        bullets: [
          "请提前购买涵盖徒步与户外运动的境外旅行保险。",
          "在溪流过河与陡峭林径下坡时，务必听从向导安全指令。",
          "终点传统轮胎漂流取决于实时水情与安全监测。"
        ]
      },
      {
        title: "严格的野生动物保护伦理",
        paragraphs: [
          "热带雨林是动物世代生活的自然家园，不是动物园。红毛猩猩、长臂猿、叶猴与热带鸟类完全自由穿梭于树冠，绝不存在人为圈养。",
          "生态旅行意味着：与动物保持至少7-10米安全距离，严禁投喂任何食物，严禁触摸红毛猩猩，拍摄关闭闪光灯，将所有接触节奏交由持证向导专业管理。"
        ]
      },
      {
        title: "定金预付、付款与改期政策",
        paragraphs: [
          "预订表格会根据您挑选的套餐与人数自动计算30%的PayPal定金，您可直接向官方公布的PayPal账户安全支付。",
          "支付完成后，请通过WhatsApp发送交易流水截图或在表单中备注，我们核准后将向您发出正式行程确认邮件。",
          "余款可在抵达武吉拉旺客栈与向导团队会面时支付现金，或在出发前2天邮件确认后结清。",
          "如需调整计划，请尽早与向导取得联系。本地团队会在多日前采买食材并锁定向导档期，临时取消将对村庄从业者带来实际影响。"
        ]
      },
      {
        title: "出入境证件与健康提醒",
        paragraphs: [
          "出行前请确认护照有效期超过6个月，并了解印尼电子落地签（e-VOA）或落地签相关政策。",
          "请随身携带个人常备药品，如对炎热、户外运动或特定过敏原有顾虑，请提前向团队说明。"
        ]
      }
    ],
    faqHeading: "武吉拉旺雨林徒步常见问题",
    faq: [
      {
        q: "去武吉拉旺徒步需要携带哪些必备物品？",
        a: "防滑登山鞋、速干衣裤、备用袜子、轻便雨衣、强效驱蚊水、防晒霜、小毛巾、常用药品、随身水壶、户外头灯、防水袋以及适量印尼盾现金。"
      },
      {
        q: "如何从棉兰前往武吉拉旺？",
        a: "大多数旅行者从棉兰瓜拉纳穆国际机场（KNO）或棉兰市区搭乘我们安排的空调私家车直达武吉拉旺（车程约4至5小时）。建议避免在长途国际飞行到达当天直接进山徒步。"
      },
      {
        q: "参加徒步需要多好的体能？",
        a: "4小时短途和1天全天徒步只要身体健康、有基本散步习惯即可轻松应对；3天及以上包含深山爬坡与野外露营，更适合有户外经验或耐力较好的朋友。"
      },
      {
        q: "一定能亲眼看到野生红毛猩猩吗？",
        a: "野外生灵没有绝对的100%确定性。但古农列尤择国家公园红毛猩猩种群极其丰富，凭借向导数十年深厚经验，绝大多数情况下都能有精彩震撼的近距离观察体验。"
      },
      {
        q: "预订需要支付多少定金？",
        a: "预订表格会根据所选路线与人数自动算出30%定金，通过安全官方PayPal支付。余款可在抵达现场时以现金结清。"
      },
      {
        q: "多日徒步期间吃什么？伙食怎么样？",
        a: "向导与随队厨师在林间烹制新鲜健康的印尼传统菜肴：丰盛热带水果、米饭、炒面、时令蔬菜、鸡蛋及鱼肉/鸡肉，随时供应热茶与咖啡。素食要求完全能够满足。"
      },
      {
        q: "森林火灾或季节性烟霾会影响武吉拉旺徒步吗？",
        a: "不会。武吉拉旺地处高湿度的高山原始常绿雨林，与印尼排水泥炭沼泽完全不同。林冠下空气始终湿润新鲜，全年徒步均安全如常开展。"
      }
    ],
    relatedLinks: [
      { href: "/sumatra-orangutan-tour", label: "对比苏门答腊红毛猩猩路线" },
      { href: "/3-day-bukit-lawang-orangutan-trek", label: "3天2夜武吉拉旺经典徒步" },
      { href: "/zh/booking", label: "在线预订表格" }
    ]
  },
  id: {
  title: "Informasi Penting Trekking Hutan Bukit Lawang",
  description: "Panduan praktis perlengkapan, keselamatan, transportasi, uang tunai, makanan, dan etika trekking bagi Anda yang merencanakan petualangan orangutan di Bukit Lawang, Sumatra Utara.",
  image: "/images/essential-information-hero.webp",
  imageAlt: "Sepatu trekking dan perlengkapan esensial untuk perjalanan hutan Bukit Lawang",
  kicker: "Panduan persiapan perjalanan",
  intro: "Gunakan halaman panduan ini sebelum memesan tiket penerbangan, mengemas tas ransel, atau memilih antara jalan santai 1 hari dan paket ekspedisi bermalam di hutan Leuser. Panduan ini dirancang untuk memberikan gambaran yang transparan dan akurat sebelum Anda tiba di Sumatra Utara.",
  askGuide: "Tanya pemandu via WhatsApp",
  readBlog: "Baca artikel blog",
  highlights: [
    "Semua trek dimulai langsung dari Bukit Lawang, Sumatra Utara",
    "Pilihan trek dari 4 jam hingga 5 hari ekspedisi rimba",
    "Uang tunai Rupiah (IDR) sangat penting di desa",
    "Perjumpaan satwa liar wajib mematuhi aturan tanpa sentuh dan tanpa pakan"
  ],
  sections: [
    {
      title: "Sebelum Anda Memesan",
      paragraphs: [
        "Sampaikan tanggal rencana kedatangan Anda, jumlah rombongan, tingkat kebugaran, durasi trek yang diminati, kebutuhan penginapan di desa, serta apakah memerlukan mobil antar-jemput privat dari Kota Medan atau Bandara Internasional Kualanamu (KNO).",
        "Untuk trek menginap beberapa hari, mohon beri tahu pemandu mengenai pantangan makanan (vegetarian, vegan, alergi), kondisi medis tertentu, atau jika ada anggota rombongan yang belum pernah naik gunung sebelumnya."
      ],
      bullets: [
        "Trek 4 jam atau 1 hari penuh cocok bagi wisatawan dengan waktu terbatas atau yang tidak ingin berkemah.",
        "Trek 2 hari atau 3 hari memberikan waktu terbaik menikmati malam di tenda tepi sungai dan keseruan arung jeram ban.",
        "Paket privat eksklusif sangat ideal untuk pasangan, keluarga dengan anak, fotografer, atau siapa saja yang menginginkan tempo perjalanan yang lebih fleksibel dan tenang."
      ]
    },
    {
      title: "Alas Kaki & Pakaian yang Tepat",
      paragraphs: [
        "Hutan hujan tropis di Bukit Lawang memiliki kontur tanah perbukitan dengan akar pohon yang lembap dan tanah liat yang bisa licin setelah hujan. Sepatu dengan cengkeraman (grip) sol yang kokoh adalah perlengkapan paling krusial.",
        "Kenakan pakaian berbahan sintetis ringan yang cepat kering (quick-dry). Hindari celana jeans tebal karena akan terasa sangat berat dan sulit kering bila terkena keringat atau hujan tropis."
      ],
      bullets: [
        "Sepatu trekking antiselip atau sepatu kets trail running dengan sol bertapak kasar.",
        "Kaus kaki tebal dan celana panjang ringan untuk melindungi kaki dari goresan semak dan pacet.",
        "Baju ganti kering yang disimpan dalam kantong plastik untuk dipakai tidur di kemah.",
        "Sandal jepit atau sandal gunung santai untuk dipakai saat beristirahat di perkemahan atau bermain di sungai."
      ]
    },
    {
      title: "Daftar Barang Bawaan & Tas Antiair (Dry Bag)",
      paragraphs: [
        "Untuk trekking bermalam, bawalah hanya tas ransel kecil berukuran 20 hingga 30 liter. Koper besar atau ransel utama Anda dapat dititipkan dengan aman di penginapan Anda di desa tanpa biaya tambahan.",
        "Hujan tropis sore hari adalah hal yang wajar di Sumatra. Melindungi barang elektronik dan pakaian kering menggunakan kantong antiair (dry bag) sangat dianjurkan."
      ],
      bullets: [
        "Tas ransel harian ringan (daypack) dan dry bag antiair.",
        "Jas hujan plastik atau ponco ringan lipat.",
        "Botol air minum isi ulang minimal 1,5 hingga 2 liter.",
        "Senter kepala (headlamp) atau senter biasa beserta baterai cadangan untuk di kemah malam hari.",
        "Obat-obatan pribadi, plester luka, obat antinyamuk semprot, dan tabir surya.",
        "Handuk kecil serat mikro (microfiber) cepat kering dan pakaian renang."
      ]
    },
    {
      title: "Cuaca, Musim & Curah Hujan",
      paragraphs: [
        "Bukit Lawang dapat dikunjungi dan dijelajahi dengan aman sepanjang tahun. Kawasan ini beriklim tropis hangat dan lembap dengan suhu rata-rata 26°C hingga 32°C di siang hari, dan sekitar 22°C di malam hari di tepi sungai.",
        "Hujan di Sumatra umumnya berupa hujan lebat berdurasi singkat (1 hingga 2 jam) di sore atau malam hari. Pagi hari hampir selalu cerah berawan dan sangat menyenangkan untuk mulai berjalan."
      ],
      bullets: [
        "Bulan Mei hingga September umumnya memiliki curah hujan relatif lebih rendah dengan jalur setapak yang lebih kering.",
        "Bulan November hingga Februari memiliki curah hujan lebih tinggi, namun hutan terlihat sangat asri, hijau lebat, dan sungai berarus menyenangkan untuk arung jeram.",
        "Keberadaan orangutan tidak bergantung pada musim hujan atau kemarau, melainkan pada siklus musim buah alami pohon-pohon di hutan."
      ]
    },
    {
      title: "Makanan & Pasokan Air Minum di Hutan",
      paragraphs: [
        "Dalam semua paket trekking kami, pasokan makanan dan air minum diurus secara penuh oleh tim pemandu dan koki hutan kami.",
        "Saat istirahat di jalur rimba, Anda akan disajikan aneka buah-buahan tropis segar seperti semangka, nanas, pisang, dan markisa. Makanan utama disajikan hangat dan segar khas kuliner rumahan Indonesia seperti nasi goreng, kari sayur, tempe, tahu, telur, dan ayam/ikan.",
        "Untuk air minum, tim merebus air bersih dari mata air hutan alami hingga benar-benar matang untuk mengisi ulang botol minum Anda setiap hari."
      ]
    },
    {
      title: "Suasana Berkemah & Fasilitas di Sungai",
      paragraphs: [
        "Perkemahan rimba kami dibangun di lokasi terbuka alami di tepi sungai Bahorok atau anak-anak sungainya. Struktur kemah dinaungi atap terpal tebal yang kokoh untuk menahan tetesan embun dan hujan lebat.",
        "Di dalam tenda/kemah, kami menyediakan matras busa empuk, seprai bersih, bantal tiup, dan selimut hangat atau kelambu penahan nyamuk.",
        "Fasilitas toilet di kemah hutan bersifat alami sederhana (jungle style). Air bersih untuk membersihkan diri dan berenang tersedia melimpah ruah langsung dari sungai yang jernih dan menyegarkan."
      ]
    },
    {
      title: "Uang Tunai, Mesin ATM & Pembayaran di Desa",
      paragraphs: [
        "Bukit Lawang adalah desa wisata kecil di tepi hutan. Mesin ATM di desa jumlahnya sangat terbatas dan terkadang mengalami gangguan jaringan atau kehabisan uang tunai saat musim liburan.",
        "Kami sangat menyarankan Anda untuk menarik uang tunai Rupiah (IDR) secukupnya saat berada di Bandara Kualanamu atau Kota Medan sebelum memulai perjalanan darat ke Bukit Lawang.",
        "Sebagian besar warung makan, toko suvenir, dan kafe di Bukit Lawang hanya menerima pembayaran uang tunai dan belum mendukung kartu debit/kredit internasional."
      ]
    },
    {
      title: "Deposit, Pembayaran & Opsi Fleksibel",
        paragraphs: [
          "Formulir pemesanan menghitung deposit 30% untuk menjamin ketersediaan pemandu resmi dan perizinan Taman Nasional Gunung Leuser. Kami menerima pembayaran via Wise (sangat direkomendasikan untuk transfer valas berbiaya rendah), PayPal, dan transfer bank lokal.",
          "Opsi pembayaran fleksibel: Kami menyesuaikan metode yang paling mudah dan nyaman bagi tamu. Bukti atau nomor referensi pembayaran dapat dikirimkan langsung melalui WhatsApp.",
          "Sisa pelunasan 70% dapat dibayarkan saat Anda tiba di Bukit Lawang secara tunai (Rupiah, Euro, USD) atau via Wise sebelum trekking dimulai."
        ]
      },
      {
        title: "Etika Pelestarian Satwa & Keamanan Arung Jeram Ban",
      paragraphs: [
        "Taman Nasional Gunung Leuser adalah rumah bagi orangutan Sumatra liar dan semi-liar yang terancam punah. Karena orangutan memiliki kesamaan DNA hingga 97% dengan manusia, mereka sangat rentan tertular penyakit flu atau kulit dari manusia.",
        "Aturan ketat wajib dipatuhi: jaga jarak aman minimal 7-10 meter, jangan pernah menyentuh orangutan, dilarang keras memberi makan apa pun kepada satwa liar, bawa kembali semua sampah plastik keluar hutan, dan jangan gunakan lampu kilat (flash) kamera.",
        "Untuk kepulangan arung jeram ban (jungle tube rafting), beberapa ban karet besar dirangkai menjadi satu perahu rakit kokoh oleh joki sungai berpengalaman. Jaket pelampung (life jacket) disediakan untuk keselamatan setiap tamu."
      ]
    }
  ],
  faqHeading: "Pertanyaan yang Sering Diajukan Seputar Persiapan",
  faq: [
    {
      q: "Seberapa bugar kondisi fisik yang dibutuhkan untuk trekking orangutan?",
      a: "Untuk trek 4 jam dan 1 hari, siapa pun dengan kondisi kesehatan umum dan kebiasaan jalan santai dapat mengikutinya dengan nyaman. Untuk trek menginap 2 hingga 3 hari, diperlukan stamina yang cukup untuk berjalan mendaki dan menuruni bukit selama 4-6 jam per hari di bawah kelembapan tropis."
    },
    {
      q: "Apakah sepatu lari biasa cukup atau harus membawa sepatu bot hiking?",
      a: "Sepatu lari santai beralas datar dan licin sangat tidak disarankan karena tanah hutan bisa sangat licin. Pilihlah sepatu lari trail (trail running shoes) atau sepatu hiking ringan yang memiliki tonjolan sol karet bergerigi tebal untuk daya cengkeram maksimal di atas akar dan tanah basah."
    },
    {
      q: "Apakah ada mesin ATM di Bukit Lawang?",
      a: "Ada 1 atau 2 mesin ATM di jalan masuk desa, namun sering kali kehabisan uang tunai atau sinyal terputus. Tariklah uang tunai Rupiah secukupnya di Medan atau bandara sebelum bertolak ke Bukit Lawang."
    },
    {
      q: "Apakah aman meninggalkan koper besar di desa saat menginap di hutan?",
      a: "Sangat aman. Anda cukup membawa tas ransel harian kecil ke dalam hutan. Koper besar atau tas punggung utama dapat dititipkan dengan aman di kamar penginapan atau ruang penyimpanan terkunci di hotel Anda di Bukit Lawang."
    },
    {
      q: "Bagaimana jika hujan lebat turun saat kami sedang trekking?",
      a: "Hujan adalah bagian alami dari hutan hujan tropis. Kenakan jas hujan ringan atau ponco Anda, simpan barang elektronik di dalam dry bag, dan lanjutkan langkah dengan tenang. Jika hujan terlalu deras, pemandu akan mengajak berteduh di bawah naungan alami atau pos pondok rimba."
    },
    {
      q: "Berapa lama waktu perjalanan dari Bandara Kualanamu Medan ke Bukit Lawang?",
      a: "Perjalanan darat dengan mobil pribadi ber-AC menempuh waktu sekitar 4 hingga 5 jam (tergantung kepadatan lalu lintas di pinggiran Kota Medan dan Binjai). Kami menyediakan layanan jemputan mobil privat yang langsung mengantar Anda dari pintu kedatangan bandara ke penginapan di Bukit Lawang."
    },
    {
      q: "Apakah petualangan trekking ini cocok untuk anak-anak?",
      a: "Ya! Untuk anak-anak berusia 6 tahun ke atas, tur jalan santai 4 jam, tur keliling desa, tur gua kelelawar, atau paket privat 2 hari 1 malam sangat cocok dan menyenangkan. Pemandu privat kami akan menyesuaikan tempo jalan dan istirahat sesuai kenyamanan keluarga Anda."
    }
  ],
  relatedLinks: [
    {
      href: "/id/booking",
      label: "Buka formulir pemesanan"
    },
    {
      href: "/id/treks",
      label: "Bandingkan semua paket trek"
    },
    {
      href: "/id/blog",
      label: "Baca panduan perjalanan & blog"
    }
  ]
}
};
