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
      "Lernen Sie unser Team kennen, erleben Sie echte Einblicke in den Vertrieb und entdecken Sie Ihre Karrieremöglichkeiten bei BlitzON.",
    ctaLabel: "Jetzt anmelden",
    agenda: [
      { time: "09:00", title: "Einlass & Registrierung" },
      { time: "09:30", title: "Begrüßung durch die Geschäftsleitung" },
      { time: "10:00", title: "BlitzON Unternehmensvorstellung" },
      { time: "11:00", title: "Vertrieb in der Praxis" },
      { time: "12:00", title: "Mittagspause & Networking" },
      { time: "13:00", title: "Karrierewege bei BlitzON" },
      { time: "14:00", title: "Live Q&A mit Führungskräften" },
      { time: "15:00", title: "Meet the Team" },
      { time: "16:00", title: "Bewerbungsgespräche vor Ort" },
      { time: "17:00", title: "Offizieller Abschluss" }
    ],
    speakers: [
      {
        name: "Hasan Blitz",
        role: "Geschäftsführung",
        bio: "Unternehmer und Vertriebsexperte."
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
