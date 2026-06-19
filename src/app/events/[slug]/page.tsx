import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events, getEventBySlug } from "@/data/events";
import OpenDayPageClient from "@/components/events/OpenDayPageClient";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = getEventBySlug(params.slug);
  if (!event) return {};

  if (event.slug === "open-day-2026") {
    return {
      title: "BlitzON Open Day 2026 | Karriere & Networking Event",
      description:
        "Erleben Sie BlitzON hautnah beim Open Day 2026 in München. Jetzt kostenlos anmelden."
    };
  }

  return {
    title: `${event.title} | BlitzON Consulting`,
    description: event.shortDescription
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  return <OpenDayPageClient event={event} />;
}
