"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "@/components/system/RevealText";

const phases = [
  {
    no: "01",
    name: "Bewerbung",
    duration: "Tag 0",
    headline: "Wir filtern die Top 5%",
    body:
      "Vier Schritte, klar und fair. Eignungsanalyse, Pitch-Probe, Kultur-Check, Interview. Wir nehmen nur die Hungrigen."
  },
  {
    no: "02",
    name: "Onboarding",
    duration: "Woche 1",
    headline: "Identität und Haltung",
    body:
      "Du lernst, wie unsere Closer ticken. Disziplin, Energie, klare Standards. Setup, Mentor und Mission stehen am Tag eins."
  },
  {
    no: "03",
    name: "Bootcamp",
    duration: "Woche 2 bis 3",
    headline: "Das Sales-Betriebssystem",
    body:
      "Discovery, Framing, Einwandbehandlung, Closing. Live-Roleplays, Voice-Lab, NLP-Frameworks. Über 60 Stunden ehrliche Trainingsarbeit."
  },
  {
    no: "04",
    name: "Mentorship",
    duration: "Monat 2 bis 3",
    headline: "Schulter an Schulter",
    body:
      "Tägliche Calls mit Senior-Closern, Live-Reviews deiner Pitches, persönliches Coaching auf dein Niveau abgestimmt."
  },
  {
    no: "05",
    name: "Field",
    duration: "Monat 3 bis 6",
    headline: "Volle Verantwortung",
    body:
      "Eigene Pipeline, eigene Deals, eigene Provision. Wir messen, was du abschließt und feiern jeden Win mit dir."
  },
  {
    no: "06",
    name: "Leadership",
    duration: "Ab Monat 6",
    headline: "Bau dein Team",
    body:
      "Top-Performer übernehmen Teams, Märkte oder Standorte. Equity-Optionen, Profit-Share, Founder-Track stehen offen."
  }
];

export default function Training() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="training"
      ref={ref}
      className="relative overflow-hidden border-t border-white/10 bg-ink-800 py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Das Ökosystem
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
              <RevealText as="span">Vom Talent</RevealText>
              <span className="block flame-text">
                <RevealText as="span">zum Closer.</RevealText>
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
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/15 md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-px bg-gradient-to-b from-ember via-coral to-electric"
            />
          </div>

          <ol className="space-y-3 md:space-y-4">
            {phases.map((p, i) => (
              <motion.li
                key={p.no}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-12 items-stretch gap-4 rounded-2xl border border-white/10 bg-ink-700/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-ember/50 hover:bg-ink-700 md:gap-8 md:p-8"
              >
                <div className="col-span-12 flex items-center gap-4 md:col-span-1">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink-900 font-mono text-[10px] tracking-[0.2em] text-bone/85 transition group-hover:border-ember group-hover:text-ember">
                    {p.no}
                  </span>
                </div>
                <div className="col-span-12 flex flex-col gap-2 md:col-span-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">
                    {p.duration}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
                    {p.name}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="font-display text-lg text-bone md:text-xl">{p.headline}</p>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-sm text-bone/75 md:text-base">{p.body}</p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-ember via-coral to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
