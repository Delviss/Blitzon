"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "@/components/system/RevealText";
import { useMediaQuery } from "@/lib/useMediaQuery";

const phases = [
  {
    no: "01",
    name: "Bewerbung",
    duration: "Tag 0",
    headline: "Wir filtern die Top 5%",
    body:
      "Vier Schritte, klar und fair. Eignungsanalyse, Verkaufsprobe, Kultur-Check, Gespräch. Wir nehmen nur die Hungrigen."
  },
  {
    no: "02",
    name: "Einarbeitung",
    duration: "Woche 1",
    headline: "Identität und Haltung",
    body:
      "Du lernst, wie unsere besten Verkäufer ticken. Disziplin, Energie, klare Standards. Ausstattung, Mentor und Auftrag stehen am Tag eins."
  },
  {
    no: "03",
    name: "Intensivtraining",
    duration: "Woche 2 bis 3",
    headline: "Das Vertriebs-Betriebssystem",
    body:
      "Bedarfsanalyse, Gesprächsführung, Einwandbehandlung, Abschluss. Rollenspiele, Stimmtraining, erprobte Gesprächsleitfäden. Über 60 Stunden ehrliche Trainingsarbeit."
  },
  {
    no: "04",
    name: "Mentoring",
    duration: "Monat 2 bis 3",
    headline: "Schulter an Schulter",
    body:
      "Tägliche Gespräche mit erfahrenen Verkäufern, gemeinsame Auswertung deiner Kundengespräche, persönliches Coaching auf dein Niveau abgestimmt."
  },
  {
    no: "05",
    name: "Praxis",
    duration: "Monat 3 bis 6",
    headline: "Volle Verantwortung",
    body:
      "Eigene Kunden, eigene Abschlüsse, eigene Provision. Wir messen, was du abschließt und feiern jeden Erfolg mit dir."
  },
  {
    no: "06",
    name: "Führung",
    duration: "Ab Monat 6",
    headline: "Bau dein Team",
    body:
      "Die Besten übernehmen Teams, Märkte oder Standorte. Beteiligungen, Gewinnbeteiligung und der Weg zum eigenen Standort stehen offen."
  }
];

export default function Training() {
  const ref = useRef<HTMLElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // The progress line is desktop-only; skip the scroll-tracker machinery on mobile.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"],
    layoutEffect: false
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="training"
      ref={ref}
      className="relative overflow-hidden border-t border-white/10 bg-ink-800 py-20 sm:py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
              · Das Ökosystem
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
              <RevealText as="span">Vom Talent</RevealText>
              <span className="block flame-text">
                <RevealText as="span">zum Profi.</RevealText>
              </span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base text-bone/85 md:text-lg">
              Sechs Phasen, sechs Monate, eine neue Karriere. Aufgebaut wie ein Athletenprogramm. Strukturiert, intensiv, mit echten Daten unter der Haube.
            </p>
          </div>
        </div>

        <div className="relative mt-20">
          {isDesktop && (
            <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/15 md:block">
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 left-0 w-px bg-gradient-to-b from-gold via-gold-light to-gold-dark"
              />
            </div>
          )}

          <ol className="space-y-3 md:space-y-4">
            {phases.map((p, i) => (
              <motion.li
                key={p.no}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-12 items-stretch gap-3 rounded-2xl gold-card bg-ink-700/50 p-5 backdrop-blur-sm hover:bg-ink-700 hover:-translate-y-1 sm:gap-4 sm:p-6 md:gap-8 md:p-8"
              >
                <div className="col-span-12 flex items-center gap-4 md:col-span-1">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-mono text-[10px] tracking-[0.2em] text-gold transition group-hover:border-gold group-hover:bg-gold/20">
                    {p.no}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55 md:hidden">
                    {p.duration}
                  </span>
                </div>
                <div className="col-span-12 flex flex-col gap-2 md:col-span-3">
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55 md:inline">
                    {p.duration}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
                    {p.name}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="font-display text-base text-bone sm:text-lg md:text-xl">{p.headline}</p>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-sm text-bone/75 md:text-base">{p.body}</p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-light to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
