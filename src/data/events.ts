export type EventSpeaker = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export type EventAgendaItem = {
  time: string;
  title: string;
};

export type EventItem = {
  slug: string;
  title: string;
  /** ISO date used for sorting and the live countdown. */
  isoDate: string;
  dateLabel: string;
  location: string;
  locationShort: string;
  category: string;
  shortDescription: string;
  description: string;
  ctaLabel: string;
  image?: string;
  agenda?: EventAgendaItem[];
  speakers?: EventSpeaker[];
};

// Single source of truth for every BlitzON event. Add a new object here and
// it automatically appears on /events and generates its own /events/[slug] page.
export const events: EventItem[] = [
  {
    slug: "open-day-2026",
    title: "BlitzON Open Day 2026",
    isoDate: "2026-08-29T09:00:00+02:00",
    dateLabel: "29. August 2026",
    location: "Boschstraße 6, 86356 Neusäß (Augsburg)",
    locationShort: "Augsburg",
    category: "Karriere & Networking",
    shortDescription:
      "Lernen Sie BlitzON persönlich kennen und entdecken Sie Ihre Karrieremöglichkeiten im Vertrieb.",
    description:
      "Lernen Sie unser Team kennen, erleben Sie echte Einblicke in den Vertrieb und entdecken Sie Ihre Karrieremöglichkeiten bei BlitzON. Ihr Ticket ist keine reine Eintrittsgebühr, sondern Ihre persönliche Teilnahme an unserer großen Verlosung (u.a. ein Wochenende mit einem BMW M4 Coupé, ein iPad und AirPods) und deckt zugleich die Verpflegung während der Veranstaltung ab. Nach der Anmeldung über unser Formular erhalten Sie eine Bestätigung mit Zahlungslink. Bitte bringen Sie Ihr Ticket unbedingt mit, da es am Einlass benötigt wird.",
    ctaLabel: "Jetzt anmelden",
    agenda: [
      { time: "09:30", title: "Einlass & Empfang mit Fingerfood und Getränken" },
      { time: "10:00", title: "Offizielle Begrüßung & Vorstellung des Teams" },
      { time: "ca. 10:15", title: "Persönliche Vorstellungen & unsere Vision" },
      { time: "ca. 11:00", title: "Networking-Pause" },
      { time: "ca. 11:15", title: "Themenblock: Vertrieb" },
      { time: "ca. 12:00", title: "Erfolgsgeschichten aus dem Team" },
      { time: "ca. 12:45", title: "Große Pause mit Verpflegung & Networking" },
      { time: "ca. 13:30", title: "Themenblock: Karrierewege bei BlitzON" },
      { time: "ca. 14:15", title: "Live-Einwandbehandlung & Rollenspiele" },
      { time: "ca. 15:00", title: "Kurze Pause" },
      { time: "ca. 15:15", title: "Persönliche Gespräche & Interessenabfrage" },
      { time: "ca. 15:30", title: "Große Verlosung & offizieller Abschluss" }
    ],
    speakers: [
      {
        name: "Hasan Blitz",
        role: "Gründer & Geschäftsführer",
        bio: "Unternehmer und Vertriebsexperte.",
        image: "/media/team/blitz.jpg"
      },
      {
        name: "L.Harelimana",
        role: "Mitgründer & Geschäftsführer",
        bio: "Prozessentwickler & Systemexperte.",
        image: "/media/team/harelimana.jpg"
      }
    ]
  }
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(): EventItem[] {
  return [...events].sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime());
}
