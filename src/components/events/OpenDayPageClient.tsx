"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import RevealText from "@/components/system/RevealText";
import Countdown from "@/components/events/Countdown";
import AgendaTimeline from "@/components/events/AgendaTimeline";
import SpeakerCard from "@/components/events/SpeakerCard";
import EventRegistrationForm from "@/components/events/EventRegistrationForm";
import type { EventItem } from "@/data/events";

const aboutCards = [
  { title: "Karriere", body: "Erfahren Sie mehr über Ihre Entwicklungsmöglichkeiten bei BlitzON." },
  { title: "Vertrieb", body: "Erleben Sie, wie moderne Vertriebsorganisationen arbeiten." },
  { title: "Networking", body: "Lernen Sie Mitarbeiter, Führungskräfte und Partner kennen." },
  { title: "Einblicke", body: "Blicken Sie hinter die Kulissen eines wachsenden Unternehmens." }
];

const cultureItems = ["Team-Events", "Trainings", "Awards", "Success Stories"];

export default function OpenDayPageClient({ event }: { event: EventItem }) {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900 pb-24 pt-32 sm:pb-32 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-flame opacity-70" />
          <div className="absolute -left-32 top-1/4 hidden h-[460px] w-[460px] rounded-full bg-electric/25 blur-[150px] md:block" />
          <div className="absolute -right-24 top-0 hidden h-[380px] w-[380px] rounded-full bg-gold/20 blur-[150px] md:block" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>

        <div className="mx-auto max-w-[1440px] px-page text-center">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-gold">
              {event.dateLabel}
            </span>
            <span className="rounded-full border border-electric/40 bg-electric/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-electric">
              {event.locationShort}
            </span>
          </div>

          <RevealText
            as="h1"
            className="mx-auto mt-6 font-display text-display-lg uppercase tracking-tightest text-bone"
          >
            {event.title}
          </RevealText>

          <p className="mx-auto mt-6 max-w-2xl text-base text-bone/85 sm:text-lg">
            Ein Tag voller Einblicke, Chancen und persönlicher Begegnungen.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#register"
              className="group inline-flex items-center gap-2 rounded-full btn-gold px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
            >
              Jetzt Ticket sichern
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-bone/85 transition hover:border-gold/50"
            >
              Programm ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="relative bg-ink-900 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-page text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
            · Countdown bis {event.dateLabel}
          </span>
          <div className="mt-6">
            <Countdown target={event.isoDate} />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative bg-ink-900 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-page">
          <h2 className="font-display text-display-md uppercase tracking-tightest text-bone">
            Warum <span className="gold-text">teilnehmen?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-bone/75 sm:text-base">
            Die einzige Door-to-Door-Agentur Deutschlands, bei der du mehr Zeit am Flughafen als im Büro verbringst.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {aboutCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="gold-card rounded-2xl bg-ink-800/60 p-6 backdrop-blur-xl"
              >
                <h3 className="font-display text-lg font-semibold text-gold">{c.title}</h3>
                <p className="mt-3 text-sm text-bone/80">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      {event.agenda && (
        <section id="agenda" className="relative bg-ink-900 py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-page">
            <h2 className="text-center font-display text-display-md uppercase tracking-tightest text-bone">
              Das <span className="gold-text">Programm</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-bone/85 sm:text-lg">
              Wir launchen das 3+1-Modell, das die Vertriebsbranche revolutionieren wird: drei Wochen Vollgas im Vertrieb, eine Woche die Welt erleben. Jeden Monat.
            </p>
            <div className="mt-12">
              <AgendaTimeline items={event.agenda} />
            </div>
          </div>
        </section>
      )}

      {/* Speakers */}
      {event.speakers && event.speakers.length > 0 && (
        <section className="relative bg-ink-900 py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-page">
            <h2 className="font-display text-display-md uppercase tracking-tightest text-bone">
              Unsere <span className="gold-text">Speaker</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {event.speakers.map((s, i) => (
                <SpeakerCard key={s.name} speaker={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team culture */}
      <section className="relative bg-ink-900 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-page">
          <h2 className="font-display text-display-md uppercase tracking-tightest text-bone">
            Mehr als nur ein <span className="gold-text">Arbeitsplatz.</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {cultureItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-electric/15 via-ink-800 to-gold/10 transition-all duration-500 hover:border-gold/50"
              >
                <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-bone/85 transition group-hover:text-gold">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-32 top-1/3 hidden h-[480px] w-[480px] rounded-full bg-gold/15 blur-[150px] md:block" />
          <div className="absolute -right-32 bottom-0 hidden h-[420px] w-[420px] rounded-full bg-electric/20 blur-[150px] md:block" />
        </div>
        <div className="mx-auto max-w-[1440px] px-page">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">· Anmeldung</span>
              <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
                Seien Sie <span className="gold-text">dabei.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm text-bone/85 sm:text-base">
                {event.dateLabel} · {event.location}
              </p>
              <p className="mt-4 max-w-md text-sm text-bone/70">
                Ihr Ticket sichert Ihnen die Teilnahme an unserer Verlosung und deckt die Verpflegung
                vor Ort ab. Nach der Anmeldung erhalten Sie eine Bestätigung mit Zahlungslink per
                E-Mail. Bitte bringen Sie Ihr Ticket zum Einlass mit.
              </p>
            </div>
            <div className="md:col-span-7">
              <EventRegistrationForm event={event} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
