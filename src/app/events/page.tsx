import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import EventCard from "@/components/events/EventCard";
import { getUpcomingEvents } from "@/data/events";

const Footer = dynamic(() => import("@/components/sections/Footer"));

export const metadata: Metadata = {
  title: "Events | BlitzON Consulting",
  description: "Entdecken Sie Karriere-Events, Networking-Veranstaltungen und den BlitzON Open Day."
};

export default function EventsPage() {
  const events = getUpcomingEvents();

  return (
    <main className="relative">
      <Navbar />

      <section className="relative overflow-hidden bg-ink-900 pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-flame opacity-60" />
          <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-electric/25 blur-[140px]" />
          <div className="absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-gold/15 blur-[140px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>

        <div className="mx-auto max-w-[1440px] px-page">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">· Events</span>
          <h1 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
            Events bei <span className="gold-text">BlitzON</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-bone/85 sm:text-lg">
            Lernen Sie BlitzON persönlich kennen. Entdecken Sie Karrieremöglichkeiten, Networking-Events und
            exklusive Einblicke in unsere Unternehmenskultur.
          </p>
          <a
            href="#upcoming"
            className="group mt-8 inline-flex items-center gap-2 rounded-full btn-gold px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
          >
            Kommende Events ansehen
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      <section id="upcoming" className="relative bg-ink-900 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-page">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">· Kommende Events</span>
          <h2 className="mt-3 font-display text-display-md uppercase tracking-tightest text-bone">
            Was Sie erwartet.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
