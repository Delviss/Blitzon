"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/system/RevealText";

const benefits = [
  {
    no: "01",
    title: "Echtes Tempo",
    body:
      "Vom ersten Pitch zur Teamführung in unter neun Monaten. Wir messen, was du lieferst, nicht wie lange du sitzt.",
    tags: ["Beförderung in Monaten", "Leadership-Programm", "Persönlicher Mentor"],
    accent: "ember" as const,
    span: "md:col-span-7"
  },
  {
    no: "02",
    title: "Echtes Geld",
    body: "Provision ohne Deckel. Unsere Top-Closer landen schon im ersten Jahr im sechsstelligen Bereich.",
    tags: ["Bonus-Pool", "Quartalsprämien"],
    accent: "coral" as const,
    span: "md:col-span-5"
  },
  {
    no: "03",
    title: "Premium Training",
    body: "Sales-Psychologie, Closing-Frameworks, Persönlichkeit. Jeden Tag, nicht nur im Onboarding.",
    tags: ["1-zu-1 Coaching", "Roleplay Lab", "Verkaufspsychologie"],
    accent: "electric" as const,
    span: "md:col-span-5"
  },
  {
    no: "04",
    title: "Lifestyle, der zählt",
    body: "Retreats in Lissabon, Skiwochen in Tirol, Quartalsgalas. Hart arbeiten und richtig feiern.",
    tags: ["International Retreats", "Top-Performer-Trips"],
    accent: "ember" as const,
    span: "md:col-span-7"
  },
  {
    no: "05",
    title: "Du wächst als Mensch",
    body: "Kommunikation, Führung, Disziplin, Selbstvertrauen. Wir formen die Person hinter dem Verkäufer.",
    tags: ["Mindset Lab", "Speaker Sessions"],
    accent: "moss" as const,
    span: "md:col-span-12"
  }
];

const accentGlow = {
  ember: "group-hover:bg-ember/15",
  coral: "group-hover:bg-coral/15",
  electric: "group-hover:bg-electric-400/15",
  moss: "group-hover:bg-moss/15"
} as const;

const accentNumber = {
  ember: "text-ember",
  coral: "text-coral",
  electric: "text-electric-400",
  moss: "text-moss"
} as const;

const accentLine = {
  ember: "from-ember",
  coral: "from-coral",
  electric: "from-electric-400",
  moss: "from-moss"
} as const;

export default function WhyBlitzon() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink-900 py-20 sm:py-28 md:py-40">
      <div className="absolute inset-0 -z-10 bg-grid-flame opacity-50" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Warum BlitzON
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-display-md uppercase tracking-tightest text-bone">
              <RevealText as="span">Mehr als ein Job.</RevealText>
              <span className="block">
                <RevealText as="span" className="flame-text">
                  Eine Startbahn.
                </RevealText>
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-12 md:gap-5">
          {benefits.map((b, i) => (
            <motion.article
              key={b.no}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl gold-card bg-ink-800 p-6 hover:-translate-y-1 sm:min-h-[260px] sm:p-8 md:min-h-[340px] md:p-10 ${b.span}`}
            >
              <div className={`absolute -right-12 -top-12 h-48 w-48 rounded-full bg-transparent blur-3xl transition-all duration-700 ${accentGlow[b.accent]}`} />

              <div className="flex items-center justify-between">
                <span className={`font-mono text-[10px] uppercase tracking-[0.32em] ${accentNumber[b.accent]} opacity-90`}>
                  {b.no} / 05
                </span>
                <span className={`text-bone/45 transition-transform duration-500 group-hover:rotate-45 group-hover:${accentNumber[b.accent].replace("text-", "text-")}`}>
                  <ArrowSvg />
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="font-display text-3xl font-semibold tracking-tight text-bone md:text-4xl">
                  {b.title}
                </h3>
                <p className="mt-3 max-w-md text-sm text-bone/80 md:text-base">{b.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r ${accentLine[b.accent]} to-transparent transition-transform duration-700 group-hover:scale-x-100`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M7 17 17 7" strokeLinecap="round" />
      <path d="M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
