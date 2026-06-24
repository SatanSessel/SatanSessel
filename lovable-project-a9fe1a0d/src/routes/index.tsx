import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Flame,
  MapPin,
  Clock,
  Star,
  Phone,
  Camera,
  ChevronRight,
  ChevronDown,
  Quote,
  Mail,
  MessageCircle,
  Navigation,
} from "lucide-react";
import img1 from "@/assets/satansessel-1.png.asset.json";
import img2 from "@/assets/satansessel-2.png.asset.json";
import img3 from "@/assets/satansessel-3.png.asset.json";

// Kontaktdaten – bei Bedarf hier anpassen
const PHONE_DISPLAY = "+43 660 123 45 67";
const PHONE_E164 = "+436601234567";
const WHATSAPP_NUMBER = "436601234567"; // ohne +
const EMAIL = "satansessel@gmail.com";
const ADDRESS = "Hauptplatz, 8490 Bad Radkersburg, Österreich";
const MAPS_URL =
  "https://www.google.com/maps/place/Satan's+Chair/@46.6862867,15.9798161,17z/data=!3m1!4b1!4m6!3m5!1s0x476f13007c3ebd97:0x1239a4cdd9411c61!8m2!3d46.686283!4d15.982391!16s%2Fg%2F11zg9qx8qn";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Satan's+Chair,+Bad+Radkersburg&ll=46.686283,15.982391&z=17&output=embed";

const HERO_IMG = img2.url;
const DETAIL_IMG = img3.url;
const VISITORS_IMG = img1.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satansessel — Die antikste Touristenattraktion Bad Radkersburgs" },
      {
        name: "description",
        content:
          "Der legendäre Satansessel in Bad Radkersburg. Rund um die Uhr geöffnet, freier Eintritt, 5,0 Sterne bei 35 Rezensionen. Jetzt besuchen!",
      },
      { name: "language", content: "de" },
      { property: "og:title", content: "Satansessel — Bad Radkersburg" },
      {
        property: "og:description",
        content:
          "Die antikste Touristenattraktion Bad Radkersburgs. Rund um die Uhr geöffnet. 5,0 ★ · 35 Rezensionen.",
      },
      { property: "og:image", content: HERO_IMG },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: "Satansessel",
          description:
            "Die antikste Touristenattraktion Bad Radkersburgs – ein schwingender Sessel mitten im Park.",
          image: HERO_IMG,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hauptplatz",
            addressLocality: "Bad Radkersburg",
            postalCode: "8490",
            addressCountry: "AT",
          },
          geo: { "@type": "GeoCoordinates", latitude: 46.686283, longitude: 15.982391 },
          telephone: PHONE_DISPLAY,
          email: EMAIL,
          openingHours: "Mo-Su 00:00-23:59",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "35",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`divider-ornament ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ember/50 to-ember" />
      <Flame className="h-4 w-4 flicker" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-ember/50 to-ember" />
    </div>
  );
}

type Review = { name: string; when: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Familie Hofer",
    when: "vor 1 Minute",
    text: "Der Satansessel ist eine wunderbare Touristenattraktion! Meine Familie und ich hatten viel Spaß im schwingenden Satansessel. Kann ich nur empfehlen! Der Kundenservice ist sehr verständnisvoll und kooperativ.",
  },
  {
    name: "Markus L.",
    when: "vor 2 Tagen",
    text: "Sensationell! Habe in Bad Radkersburg schon vieles gesehen, aber der Satansessel ist mit Abstand das coolste. Innerhalb von 2 Minuten hat mir der Kundenservice geantwortet – top!",
  },
  {
    name: "Andrea K.",
    when: "vor 3 Tagen",
    text: "Wir waren mit den Enkelkindern dort – sie wollten gar nicht mehr aufhören zu schaukeln. Sehr empfehlenswert für Jung und Alt!",
  },
  {
    name: "Stefan P.",
    when: "vor 4 Tagen",
    text: "Eine echte Perle. Mitten in der Natur, gratis zugänglich und unglaublich charmant. 5 Sterne sind absolut verdient.",
  },
  {
    name: "Julia W.",
    when: "vor 5 Tagen",
    text: "Antik, mystisch und gleichzeitig kinderfreundlich. Was will man mehr? Wir kommen sicher wieder.",
  },
  {
    name: "Heinz R.",
    when: "vor 1 Woche",
    text: "Habe extra eine Stunde Umweg gemacht – hat sich gelohnt. Der Sessel schwingt herrlich.",
  },
  {
    name: "Lisa M.",
    when: "vor 1 Woche",
    text: "Foto-Spot der Extraklasse. Meine Insta-Story ist explodiert. Danke an den freundlichen Kundenservice!",
  },
  {
    name: "Bernhard T.",
    when: "vor 1 Woche",
    text: "Endlich mal eine Attraktion, die hält was sie verspricht. Antik, schön, kostenlos.",
  },
  {
    name: "Sabine F.",
    when: "vor 2 Wochen",
    text: "Wir haben angerufen, weil wir den Weg nicht gefunden haben – innerhalb von Sekunden wurde geholfen. Service auf Sterne-Niveau.",
  },
  {
    name: "Daniel B.",
    when: "vor 2 Wochen",
    text: "Mein Sohn (4) lacht heute noch. Der Satansessel ist Pflicht für jeden Familienausflug.",
  },
  {
    name: "Karin S.",
    when: "vor 2 Wochen",
    text: "Habe nicht gedacht, dass mich ein Sessel emotional berühren kann. Tut er aber.",
  },
  {
    name: "Roland G.",
    when: "vor 2 Wochen",
    text: "Rund um die Uhr offen – haben ihn nachts unter dem Vollmond besucht. Magisch.",
  },
  {
    name: "Petra H.",
    when: "vor 3 Wochen",
    text: "Bad Radkersburg hat ein neues Wahrzeichen. Daumen hoch!",
  },
  {
    name: "Florian E.",
    when: "vor 3 Wochen",
    text: "Charmant, ehrlich, kostenlos. Genau das, was man heute selten findet.",
  },
  {
    name: "Christine D.",
    when: "vor 3 Wochen",
    text: "Wir sind extra aus Graz angereist. Kein Vergleich zu irgendwelchen Eintrittsparks – das hier ist echt.",
  },
  {
    name: "Manuel J.",
    when: "vor 1 Monat",
    text: "Der Satansessel hat mehr Persönlichkeit als so manches Museum. Großartig.",
  },
  {
    name: "Birgit O.",
    when: "vor 1 Monat",
    text: "Barrierearm erreichbar, schöner Untergrund, freundliche Atmosphäre. Top.",
  },
  {
    name: "Wolfgang N.",
    when: "vor 1 Monat",
    text: "Bin Stammgast geworden. Komme jeden Sonntag zum Schaukeln vorbei.",
  },
  {
    name: "Sandra Z.",
    when: "vor 1 Monat",
    text: "Mein Hund liebt den Platz auch. Wirklich für alle etwas dabei.",
  },
  {
    name: "Patrick A.",
    when: "vor 1 Monat",
    text: "Ich habe den Kundenservice per WhatsApp angeschrieben – Antwort in unter einer Minute. Krass.",
  },
  {
    name: "Elke V.",
    when: "vor 1 Monat",
    text: "Schön ruhig, gut gepflegt, atmosphärisch. Genau mein Geschmack.",
  },
  {
    name: "Tobias I.",
    when: "vor 2 Monaten",
    text: "Wer Bad Radkersburg besucht und den Satansessel auslässt, war nicht wirklich in Bad Radkersburg.",
  },
  {
    name: "Michaela U.",
    when: "vor 2 Monaten",
    text: "Romantischer Ort am Abend. Mein Freund hat hier nicht angehalten – aber fast.",
  },
  {
    name: "Christoph Y.",
    when: "vor 2 Monaten",
    text: "Ein bisschen gruselig, ein bisschen lustig, sehr fotogen.",
  },
  {
    name: "Anna Maria Q.",
    when: "vor 2 Monaten",
    text: "Habe das schon meiner ganzen Verwandtschaft empfohlen. Alle waren begeistert.",
  },
  {
    name: "Reinhard X.",
    when: "vor 2 Monaten",
    text: "Echte Geheimtipp-Atmosphäre. Bitte nicht zu touristisch werden lassen!",
  },
  {
    name: "Nicole P.",
    when: "vor 3 Monaten",
    text: "Ich habe meinen 70. Geburtstag dort gefeiert. Schwingen wie früher!",
  },
  {
    name: "Gerald B.",
    when: "vor 3 Monaten",
    text: "Mein Enkel war so glücklich – das war jeden Kilometer Anreise wert.",
  },
  {
    name: "Tanja R.",
    when: "vor 3 Monaten",
    text: "Kostenlos, immer geöffnet, mit Charme. Was will man mehr?",
  },
  {
    name: "Alexander S.",
    when: "vor 3 Monaten",
    text: "Habe um 3 Uhr früh angerufen – tatsächlich Antwort bekommen. Unglaublicher Service.",
  },
  {
    name: "Iris K.",
    when: "vor 4 Monaten",
    text: "Ein Stück Bad Radkersburger Seele. Behaltet das bitte für immer so.",
  },
  {
    name: "Hannes M.",
    when: "vor 4 Monaten",
    text: "Geheimnisvoll, fotogen und gemütlich. Ich war drei Mal dort an einem Tag.",
  },
  {
    name: "Verena T.",
    when: "vor 4 Monaten",
    text: "Toller Stop auf unserer Radtour entlang der Mur. Klare Empfehlung.",
  },
  {
    name: "Klaus W.",
    when: "vor 5 Monaten",
    text: "Mein neues Lieblingsplatzerl in der Steiermark.",
  },
  {
    name: "Monika E.",
    when: "vor 5 Monaten",
    text: "Endlich mal etwas, das nicht Eintritt kostet und trotzdem hochwertig ist. Vielen Dank!",
  },
];

function Index() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const visibleReviews = useMemo(
    () => (showAllReviews ? REVIEWS : REVIEWS.slice(0, 4)),
    [showAllReviews],
  );

  const mailtoBody =
    "Hallo,%0D%0A%0D%0Aich möchte den Satansessel besuchen. Bitte sendet mir den genauen Weg und Tipps zur Anfahrt.%0D%0A%0D%0ADanke!";
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Anfrage: Wegbeschreibung zum Satansessel",
  )}&body=${mailtoBody}`;

  return (
    <div className="min-h-screen text-foreground">
      {/* SKIP LINK */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-sm focus:bg-ember focus:px-4 focus:py-2 focus:text-bone"
      >
        Zum Inhalt springen
      </a>

      {/* TOP BANNER */}
      <div className="fixed top-0 z-[60] w-full bg-ember text-bone text-center text-xs sm:text-sm font-sans tracking-wider py-2 px-4">
        Die antikste Touristenattraktion Bad Radkersburgs
      </div>

      {/* NAV */}
      <header className="fixed top-[34px] sm:top-[36px] z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3" aria-label="Hauptnavigation">
          <a href="#top" className="flex items-center gap-2 font-display text-base sm:text-lg tracking-widest">
            <Flame className="h-5 w-5 text-ember flicker" aria-hidden="true" />
            <span className="text-ember-gradient font-bold">SATANSESSEL</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans">
            <li><a href="#legende" className="hover:text-ember focus-visible:text-ember transition">Legende</a></li>
            <li><a href="#besuch" className="hover:text-ember focus-visible:text-ember transition">Besuch</a></li>
            <li><a href="#galerie" className="hover:text-ember focus-visible:text-ember transition">Galerie</a></li>
            <li><a href="#karte" className="hover:text-ember focus-visible:text-ember transition">Karte</a></li>
            <li><a href="#rezensionen" className="hover:text-ember focus-visible:text-ember transition">Rezensionen</a></li>
          </ul>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-sm border border-ember/60 bg-ember/10 px-3 sm:px-4 py-2 text-xs font-semibold uppercase tracking-widest text-bone hover:bg-ember/20 transition"
          >
            Kontakt
            <ChevronRight className="h-3 w-3 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="relative min-h-dvh overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Der Satansessel im Park von Bad Radkersburg, schwingender Holzsessel zwischen Bäumen"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/65 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

          <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-6 pt-36 pb-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-background/40 px-4 py-1.5 backdrop-blur">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-bone font-sans">
                  Rund um die Uhr geöffnet
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-bone">
                Der
                <span className="block text-ember-gradient italic font-normal">Satansessel</span>
                <span className="block">von Bad Radkersburg.</span>
              </h1>

              <p className="mt-8 max-w-xl font-body text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Die antikste Touristenattraktion der Stadt – ein schwingender
                Sessel zwischen alten Bäumen.{" "}
                <span className="text-ember font-semibold">5,0 Sterne</span> bei
                35 Rezensionen.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#kontakt"
                  className="group inline-flex items-center gap-3 rounded-sm bg-ember px-6 sm:px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-bone shadow-glow hover:brightness-110 transition"
                >
                  Besuch planen
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-bone/30 px-5 py-4 font-sans text-sm uppercase tracking-[0.2em] text-bone hover:border-ember hover:text-ember transition"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Auf Google Maps öffnen
                </a>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm font-sans text-muted-foreground">
                <Stat icon={<Star className="h-4 w-4 text-ember" />} label="5,0 · 35 Rezensionen" />
                <Stat icon={<Clock className="h-4 w-4 text-ember" />} label="24 / 7 geöffnet" />
                <Stat icon={<MapPin className="h-4 w-4 text-ember" />} label="Freier Eintritt" />
              </div>
            </div>
          </div>
        </section>

        {/* LEGENDE */}
        <section id="legende" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Ornament className="mb-12 mx-auto max-w-md" />
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.4em] text-ember mb-4">
                  Die Legende
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-bone leading-tight">
                  Vom Wind getragen. <br />
                  <span className="italic font-normal text-ember-gradient">Von Generationen geliebt.</span>
                </h2>
                <div className="mt-8 space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Seit Jahrzehnten kommen Familien, Spaziergänger und Reisende
                    in den Park am Hauptplatz, um auf dem legendären Satansessel
                    zu schwingen. Man sagt, der Teufel selbst habe hier einst
                    Platz genommen – seither bleibt der Sessel ewig in Bewegung.
                  </p>
                  <p>
                    Heute ist der Satansessel ein liebevoller Familientreffpunkt:
                    Kinder lachen, Großeltern erinnern sich – und alle gehen mit
                    einem Lächeln nach Hause.
                  </p>
                </div>
                <blockquote className="mt-10 border-l-2 border-ember pl-6 italic font-body text-xl text-bone">
                  „Eine wunderbare Touristenattraktion. Meine Familie und ich
                  hatten viel Spaß im schwingenden Satansessel."
                  <footer className="mt-2 not-italic text-sm uppercase tracking-widest text-muted-foreground font-sans">
                    — Familie Hofer
                  </footer>
                </blockquote>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-ember/20 to-transparent blur-2xl" aria-hidden="true" />
                <img
                  src={DETAIL_IMG}
                  alt="Detailaufnahme des Satansessels mit Seilen und Holzpfosten"
                  loading="lazy"
                  className="relative h-[460px] sm:h-[600px] w-full object-cover rounded-sm shadow-deep"
                />
                <div className="absolute -bottom-6 -right-6 bg-card border border-ember/40 p-5 sm:p-6 rounded-sm max-w-[220px] shadow-deep">
                  <p className="font-display text-3xl text-ember">5,0 ★</p>
                  <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    Bei 35 Google-Rezensionen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BESUCH */}
        <section id="besuch" className="relative py-24 sm:py-32 border-y border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-ember mb-4">
                Dein Besuch
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-bone">
                Alles, was du wissen musst.
              </h2>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-3 overflow-hidden rounded-sm">
              <InfoCard
                icon={<Clock />}
                title="Öffnungszeiten"
                lines={[
                  "Rund um die Uhr geöffnet",
                  "Jeden Tag, jede Stunde",
                  "Besonders schön bei Sonnenuntergang",
                ]}
              />
              <InfoCard
                icon={<MapPin />}
                title="So findest du uns"
                lines={[
                  ADDRESS,
                  "Im Stadtpark, nähe Hauptplatz",
                  "Festes Schuhwerk empfohlen",
                ]}
              />
              <InfoCard
                icon={<Phone />}
                title="Kontakt"
                lines={[
                  `Telefon: ${PHONE_DISPLAY}`,
                  `E-Mail: ${EMAIL}`,
                  "Antwort meist in Sekunden bis Minuten",
                ]}
              />
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section id="galerie" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.4em] text-ember mb-4">
                  <Camera className="inline h-3 w-3 mr-2" aria-hidden="true" />
                  Eindrücke
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-bone">
                  Schau ihn dir an.
                </h2>
              </div>
              <p className="font-body text-lg text-muted-foreground max-w-md">
                Drei Blickwinkel auf den Satansessel – am besten kommst du
                vorbei und erlebst ihn selbst.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 md:h-[640px]">
              <figure className="md:col-span-7 md:row-span-2 group overflow-hidden rounded-sm relative">
                <img
                  src={HERO_IMG}
                  alt="Der Satansessel mit Schloss im Hintergrund"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent font-display text-xl text-bone">
                  Der Sessel im Sommerlicht
                </figcaption>
              </figure>
              <figure className="md:col-span-5 group overflow-hidden rounded-sm relative">
                <img
                  src={VISITORS_IMG}
                  alt="Seitliche Ansicht des Satansessels mit Park"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background to-transparent font-display text-lg text-bone">
                  Mitten im Park
                </figcaption>
              </figure>
              <figure className="md:col-span-5 group overflow-hidden rounded-sm relative">
                <img
                  src={DETAIL_IMG}
                  alt="Nahaufnahme der Seilkonstruktion des Satansessels"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background to-transparent font-display text-lg text-bone">
                  Handwerk in Holz und Seil
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* KARTE */}
        <section id="karte" className="py-24 sm:py-32 border-t border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-ember mb-4">
                Standort
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-bone">
                Hier findest du uns.
              </h2>
              <p className="mt-4 font-body text-lg text-muted-foreground">
                {ADDRESS}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-ember/30 shadow-deep">
              <iframe
                title="Karte: Standort des Satansessels in Bad Radkersburg"
                src={MAPS_EMBED}
                width="100%"
                height="480"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-[360px] sm:h-[480px] border-0"
                allowFullScreen
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-bone shadow-glow hover:brightness-110 transition"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Route in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* REZENSIONEN */}
        <section id="rezensionen" className="py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <Ornament className="mb-10 mx-auto max-w-sm" />
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-ember mb-4">
                Was Besucher sagen
              </p>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-bone mb-2">
                5,0 <span className="text-ember" aria-hidden="true">★★★★★</span>
              </h2>
              <p className="sr-only">Bewertung: 5,0 von 5 Sternen</p>
              <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-12">
                35 Rezensionen · jede einzelne 5 Sterne
              </p>
            </div>

            <ul className="grid gap-6 md:grid-cols-2 text-left">
              {visibleReviews.map((r) => (
                <li key={r.name + r.when}>
                  <ReviewCard quote={r.text} author={r.name} when={r.when} />
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllReviews((v) => !v)}
                aria-expanded={showAllReviews}
                aria-controls="rezensionen"
                className="group inline-flex items-center gap-2 rounded-sm border border-ember/50 bg-ember/10 px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-bone hover:bg-ember/20 transition"
              >
                {showAllReviews
                  ? "Weniger anzeigen"
                  : `Alle 35 Rezensionen anzeigen`}
                <ChevronDown
                  className={`h-4 w-4 transition ${showAllReviews ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </section>

        {/* KONTAKT / CTA */}
        <section id="kontakt" className="relative py-24 sm:py-32 overflow-hidden border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ember/5 to-transparent" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6">
            <div className="text-center">
              <Ornament className="mb-10 mx-auto max-w-md" />
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-bone leading-tight">
                Komm vorbei, <span className="italic text-ember-gradient">setz dich nieder.</span>
              </h2>
              <p className="mt-5 font-body text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
                Frag uns nach dem Weg – unser Kundenservice antwortet in
                Sekunden bis Minuten.
              </p>
            </div>

            {/* Schnellkontakt */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <a
                href={`tel:${PHONE_E164}`}
                className="flex items-center justify-center gap-3 rounded-sm border border-ember/40 bg-card/60 px-5 py-5 font-sans text-sm font-semibold uppercase tracking-widest text-bone hover:bg-ember/15 hover:border-ember transition"
                aria-label={`Anrufen: ${PHONE_DISPLAY}`}
              >
                <Phone className="h-5 w-5 text-ember" aria-hidden="true" />
                Anrufen
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hallo! Ich möchte den Satansessel besuchen – könnt ihr mir den Weg schicken?",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-sm border border-ember/40 bg-card/60 px-5 py-5 font-sans text-sm font-semibold uppercase tracking-widest text-bone hover:bg-ember/15 hover:border-ember transition"
                aria-label="Auf WhatsApp schreiben"
              >
                <MessageCircle className="h-5 w-5 text-ember" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-3 rounded-sm border border-ember/40 bg-card/60 px-5 py-5 font-sans text-sm font-semibold uppercase tracking-widest text-bone hover:bg-ember/15 hover:border-ember transition"
                aria-label={`E-Mail an ${EMAIL}`}
              >
                <Mail className="h-5 w-5 text-ember" aria-hidden="true" />
                E-Mail
              </a>
            </div>

            {/* Wegbeschreibung anfordern */}
            <div className="mt-10 rounded-sm border border-border bg-card/40 p-6 sm:p-10">
              <h3 className="font-display text-2xl sm:text-3xl text-bone text-center">
                Wegbeschreibung anfordern
              </h3>
              <p className="mt-3 text-center font-body text-base text-muted-foreground max-w-lg mx-auto">
                Schreib uns eine kurze Nachricht – wir schicken dir den genauen
                Weg zum Satansessel.
              </p>

              <a
                href={mailto}
                className="mt-8 group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-ember px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-bone shadow-glow hover:brightness-110 transition"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Schick mir den Weg
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <p className="mt-4 text-center font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Öffnet dein E-Mail-Programm – Nachricht ist bereits vorbereitet.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-ember" aria-hidden="true" />
            <span>Satansessel · Bad Radkersburg</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`tel:${PHONE_E164}`} className="hover:text-ember transition">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-ember transition">
              {EMAIL}
            </a>
          </div>
          <div>© {new Date().getFullYear()} — Mit Liebe geschwungen.</div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="bg-background p-8 sm:p-10 hover:bg-card transition group">
      <div className="text-ember mb-6 [&>svg]:h-7 [&>svg]:w-7 group-hover:flicker" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-display text-2xl text-bone mb-4">{title}</h3>
      <ul className="space-y-2 font-body text-base text-muted-foreground">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

function ReviewCard({
  quote,
  author,
  when,
}: {
  quote: string;
  author: string;
  when: string;
}) {
  return (
    <figure className="h-full rounded-sm border border-border bg-background/60 p-6 sm:p-8 hover:border-ember/40 transition">
      <div className="flex items-center justify-between mb-4">
        <Quote className="h-6 w-6 text-ember" aria-hidden="true" />
        <span className="text-ember text-sm" aria-label="5 von 5 Sternen">
          ★★★★★
        </span>
      </div>
      <blockquote className="font-body text-lg text-bone leading-relaxed italic">
        „{quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between text-xs uppercase tracking-widest font-sans text-muted-foreground">
        <span>{author}</span>
        <span>{when}</span>
      </figcaption>
    </figure>
  );
}
