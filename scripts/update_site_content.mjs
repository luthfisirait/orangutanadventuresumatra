import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./app/site-content.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update FAQ Payment answer
content = content.replace(
  /"The original site accepts either full payment or a 30% deposit, with the balance paid when you arrive in Bukit Lawang\. Contact Syaipul for current bank details\."/g,
  '"We accept deposits securely via Wise (TransferWise), PayPal, or international bank transfer. The remaining balance can be paid in cash upon arrival. Contact Syaipul for payment details."'
);
content = content.replace(
  /"Auf der Originalseite ist entweder die volle Zahlung oder eine Anzahlung von 30 % möglich; der Rest wird bei Ankunft in Bukit Lawang bezahlt\. Kontaktiere Syaipul für aktuelle Kontodaten\."/g,
  '"Wir akzeptieren Anzahlungen sicher über Wise (TransferWise), PayPal oder internationale Banküberweisung. Der Restbetrag kann bei der Ankunft in bar bezahlt werden. Kontaktiere Syaipul für die Zahlungsdetails."'
);
content = content.replace(
  /"Le site d’origine accepte soit le paiement complet, soit un acompte de 30 %, le solde étant payé à ton arrivée à Bukit Lawang\. Contacte Syaipul pour les coordonnées bancaires à jour\."/g,
  '"Nous acceptons les acomptes de manière sécurisée via Wise (TransferWise), PayPal ou virement bancaire international. Le solde restant peut être payé en espèces à l\'arrivée. Contactez Syaipul pour les détails de paiement."'
);
content = content.replace(
  /"De originele site accepteert volledige betaling of een aanbetaling van 30%, waarbij de rest bij aankomst in Bukit Lawang wordt betaald\. Neem contact op voor actuele bankgegevens\."/g,
  '"We accepteren aanbetalingen veilig via Wise (TransferWise), PayPal of internationale bankoverschrijving. Het resterende bedrag kan bij aankomst contant worden betaald. Neem contact op met Syaipul voor de betaalgegevens."'
);

// 2. Update Contact Text
content = content.replace(
  /"WhatsApp is fastest for availability\. Email works well for deposits, transport, accommodation, and detailed itinerary questions\."/g,
  '"WhatsApp is fastest for availability. Email works well to discuss Wise/PayPal deposits, transport, accommodation, and detailed itinerary questions."'
);
content = content.replace(
  /"WhatsApp ist am schnellsten für Verfügbarkeiten\. E-Mail eignet sich gut für Anzahlung, Transport, Unterkunft und detaillierte Fragen zum Ablauf\."/g,
  '"WhatsApp ist am schnellsten für Verfügbarkeiten. E-Mail eignet sich gut, um Wise/PayPal-Anzahlungen, Transport, Unterkunft und den detaillierten Ablauf zu besprechen."'
);
content = content.replace(
  /"WhatsApp est le plus rapide pour connaître les disponibilités\. L’e-mail est pratique pour les acomptes, le transport, l’hébergement et les questions détaillées sur l’itinéraire\."/g,
  '"WhatsApp est le plus rapide pour les disponibilités. L\'e-mail est idéal pour discuter des acomptes via Wise/PayPal, du transport, de l\'hébergement et de l\'itinéraire."'
);
content = content.replace(
  /"WhatsApp is het snelst voor beschikbaarheid\. E-mail is handig voor aanbetalingen, transport, accommodatie en gedetailleerde vragen over de route\."/g,
  '"WhatsApp is het snelst voor beschikbaarheid. E-mail is handig om Wise/PayPal-aanbetalingen, transport, accommodatie en details over de route te bespreken."'
);

// 3. Update Headings with Testimonials
const insertTestimonialsHeading = (lang, title, sub) => {
  const target = `contactSub: "`;
  const regex = new RegExp(`(contactSub:\\s*".*?")`, 'g');
  let matchCount = 0;
  content = content.replace(regex, (match) => {
    matchCount++;
    if (
      (lang === 'en' && matchCount === 1) ||
      (lang === 'de' && matchCount === 2) ||
      (lang === 'fr' && matchCount === 3) ||
      (lang === 'nl' && matchCount === 4)
    ) {
      return `${match},\n      testimonials: "${title}",\n      testimonialsSub: "${sub}"`;
    }
    return match;
  });
};

insertTestimonialsHeading('en', "Traveler reviews", "What our guests say about their time in the jungle.");
insertTestimonialsHeading('de', "Gästebewertungen", "Was unsere Gäste über ihre Zeit im Dschungel sagen.");
insertTestimonialsHeading('fr', "Avis des voyageurs", "Ce que nos clients disent de leur séjour dans la jungle.");
insertTestimonialsHeading('nl', "Beoordelingen", "Wat onze gasten zeggen over hun tijd in de jungle.");

// 4. Update highlights for multi-day treks
// Replace specific highlights with Included/Excluded arrays
// We will modify the highlights tuple directly in the file

// 2D
content = content.replace(
  /"Jungle dinner and breakfast", "Traditional tube rafting return"/g,
  '"Included: Guide, meals, tent, permits", "Excluded: Personal insurance, tips"'
);
content = content.replace(
  /"Dschungel-Abendessen und Frühstück", "Traditionelle Tube-Rafting-Rückfahrt"/g,
  '"Inklusive: Guide, Mahlzeiten, Zelt, Genehmigungen", "Exklusive: Persönliche Versicherung, Trinkgeld"'
);
content = content.replace(
  /"Dîner et petit-déjeuner dans la jungle", "Retour traditionnel en tube rafting"/g,
  '"Inclus: Guide, repas, tente, permis", "Exclus: Assurance personnelle, pourboires"'
);
content = content.replace(
  /"Jungle diner en ontbijt", "Traditionele tube rafting terug"/g,
  '"Inclusief: Gids, maaltijden, tent, vergunningen", "Exclusief: Persoonlijke verzekering, fooien"'
);

// 3D
content = content.replace(
  /"Mehr Zeit für Wildtiere", "Zwei Nächte im Dschungelcamp"/g,
  '"Inklusive: Guide, Mahlzeiten, Zelt, Genehmigungen", "Exklusive: Versicherung, Trinkgeld"'
);
content = content.replace(
  /"Plus de temps pour observer la faune", "Deux nuits en camp"/g,
  '"Inclus: Guide, repas, tente, permis", "Exclus: Assurance personnelle, pourboires"'
);
content = content.replace(
  /"Meer tijd voor wildlife", "Twee nachten in jungle-camps"/g,
  '"Inclusief: Gids, maaltijden, tent, vergunningen", "Exclusief: Persoonlijke verzekering, fooien"'
);
content = content.replace(
  /"More time tracking wildlife", "Two nights at jungle camps"/g,
  '"Included: Guide, meals, tent, permits", "Excluded: Personal insurance, tips"'
);

// 4D
content = content.replace(
  /"Längere Anstiege und Flussquerungen", "Ideal für aktive Reisende"/g,
  '"Inklusive: Guide, Mahlzeiten, Camp, Permits", "Exklusive: Versicherung, Trinkgeld"'
);
content = content.replace(
  /"Montées et traversées de rivière plus longues", "Idéal pour les voyageurs actifs"/g,
  '"Inclus: Guide, repas, camp, permis", "Exclus: Assurance, pourboires"'
);
content = content.replace(
  /"Langere beklimmingen en rivieroversteken", "Ideaal voor actieve reizigers"/g,
  '"Inclusief: Gids, maaltijden, camp, permits", "Exclusief: Verzekering, fooien"'
);
content = content.replace(
  /"Longer climbs and river crossings", "Best for active travelers"/g,
  '"Included: Guide, meals, camp, permits", "Excluded: Personal insurance, tips"'
);

// 5D
content = content.replace(
  /"Mehrere Camp-Nächte", "Reiche Tier- und Pflanzenbeobachtung"/g,
  '"Inklusive: Guide, Mahlzeiten, Camp, Permits", "Exklusive: Versicherung, Trinkgeld"'
);
content = content.replace(
  /"Plusieurs nuits en camp", "Beaucoup d’observations animales et végétales"/g,
  '"Inclus: Guide, repas, camp, permis", "Exclus: Assurance, pourboires"'
);
content = content.replace(
  /"Meerdere campnachten", "Veel dieren en planten om te spotten"/g,
  '"Inclusief: Gids, maaltijden, camp, permits", "Exclusief: Verzekering, fooien"'
);
content = content.replace(
  /"Multiple camp nights", "Rich wildlife and plant spotting"/g,
  '"Included: Guide, meals, camp, permits", "Excluded: Personal insurance, tips"'
);


// 5. Add Testimonials array to each locale
const testimonialsEN = `
    testimonialsData: [
      { text: "An unforgettable, truly ethical experience. Syaipul made sure we kept a respectful distance from the orangutans while still getting amazing views. The riverside camp was a highlight!", author: "Sarah M.", location: "Germany" },
      { text: "The 3-day trek was perfectly organized. We felt safe the entire time, and the jungle food was surprisingly delicious. Highly recommend for anyone traveling from Europe.", author: "Thomas & Lisa", location: "Netherlands" },
      { text: "We booked the private package and it was worth every penny. No hidden costs, everything was clearly explained, and the tube rafting back to the village was pure joy.", author: "Claire D.", location: "France" }
    ],`;
const testimonialsDE = `
    testimonialsData: [
      { text: "Ein unvergessliches, wirklich ethisches Erlebnis. Syaipul hat dafür gesorgt, dass wir einen respektvollen Abstand zu den Orang-Utans hielten und trotzdem tolle Ausblicke hatten.", author: "Sarah M.", location: "Deutschland" },
      { text: "Der 3-Tages-Trek war perfekt organisiert. Wir fühlten uns die ganze Zeit sicher und das Dschungelessen war erstaunlich lecker. Sehr zu empfehlen!", author: "Thomas & Lisa", location: "Niederlande" },
      { text: "Wir haben das private Paket gebucht und es war jeden Cent wert. Keine versteckten Kosten, alles wurde klar erklärt.", author: "Claire D.", location: "Frankreich" }
    ],`;
const testimonialsFR = `
    testimonialsData: [
      { text: "Une expérience inoubliable et vraiment éthique. Syaipul s'est assuré que nous gardions une distance respectueuse avec les orangs-outans tout en ayant des vues incroyables.", author: "Sarah M.", location: "Allemagne" },
      { text: "Le trek de 3 jours était parfaitement organisé. Nous nous sommes sentis en sécurité tout le temps, et la nourriture était délicieuse.", author: "Thomas & Lisa", location: "Pays-Bas" },
      { text: "Nous avons réservé le forfait privé et cela valait chaque centime. Pas de frais cachés, tout était clairement expliqué.", author: "Claire D.", location: "France" }
    ],`;
const testimonialsNL = `
    testimonialsData: [
      { text: "Een onvergetelijke, echt ethische ervaring. Syaipul zorgde ervoor dat we op een respectvolle afstand van de orang-oetans bleven, met nog steeds een geweldig uitzicht.", author: "Sarah M.", location: "Duitsland" },
      { text: "De 3-daagse trek was perfect georganiseerd. We voelden ons de hele tijd veilig en het eten in de jungle was heerlijk.", author: "Thomas & Lisa", location: "Nederland" },
      { text: "We boekten het privépakket en het was elke cent waard. Geen verborgen kosten, alles werd duidelijk uitgelegd.", author: "Claire D.", location: "Frankrijk" }
    ],`;

content = content.replace(/whatsappMessage: "Hi OrangutanAdventureSumatra, I would like to ask about a jungle trek\."/g, `whatsappMessage: "Hi OrangutanAdventureSumatra, I would like to ask about a jungle trek.",${testimonialsEN}`);
content = content.replace(/whatsappMessage: "Hallo OrangutanAdventureSumatra, ich möchte mich nach einem Dschungeltrek erkundigen\."/g, `whatsappMessage: "Hallo OrangutanAdventureSumatra, ich möchte mich nach einem Dschungeltrek erkundigen.",${testimonialsDE}`);
content = content.replace(/whatsappMessage: "Bonjour OrangutanAdventureSumatra, je souhaite me renseigner sur un trek dans la jungle\."/g, `whatsappMessage: "Bonjour OrangutanAdventureSumatra, je souhaite me renseigner sur un trek dans la jungle.",${testimonialsFR}`);
content = content.replace(/whatsappMessage: "Hoi OrangutanAdventureSumatra, ik wil graag informatie over een jungletrek\."/g, `whatsappMessage: "Hoi OrangutanAdventureSumatra, ik wil graag informatie over een jungletrek.",${testimonialsNL}`);

// 6. Update type definition at the bottom
content = content.replace(
  /contactSub: string;/g,
  'contactSub: string;\n    testimonials: string;\n    testimonialsSub: string;'
);
content = content.replace(
  /whatsappMessage: string;/g,
  'whatsappMessage: string;\n  testimonialsData: Array<{ text: string; author: string; location: string }>;'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated site-content.ts');
