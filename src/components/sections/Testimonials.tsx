"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { asset } from "@/lib/asset";

const stories = [
  {
    name: "Hojat Aliyar",
    role: "Ausbilder",
    avatar: "/media/team/hojat.jpg",
    quote:
      "Vertriebspartner aufzubauen ist mein Handwerk. Aus Disziplin, klaren Prozessen und ehrlichem Feedback wird Leistung — gerade dann, wenn es unbequem wird.",
    metric: "150+",
    metricLabel: "Vertriebler entwickelt"
  },
  {
    name: "H. Blitz",
    role: "Gründer & Geschäftsführer",
    avatar: "/media/team/blitz.jpg",
    quote:
      "Nach zehn Jahren im Energiemarkt weiß ich: Direktvertrieb funktioniert nur mit System. Keine Quereinsteiger-Show — sondern Qualität, Struktur und echte Marktexpertise.",
    metric: "10+ Jahre",
    metricLabel: "Energiemarkt-Expertise"
  },
  {
    name: "H. Leon",
    role: "Gründer & Geschäftsführer",
    avatar: "/media/team/leon.jpg",
    quote:
      "Wir bauen den Vertrieb, der Energielösungen einfach macht. Schneller zum richtigen Tarif, klarer zum nächsten Deal — und mit jedem Schritt skalierbar.",
    metric: "Co-Founder",
    metricLabel: "Vision & Strategie"
  },
  {
    name: "M. Mory",
    role: "Rookie",
    avatar: "/media/team/mory.jpg",
    quote:
      "Vor ein paar Monaten hätte ich mich an keine Tür getraut. Heute hole ich mit dem Team raus, was vorher in mir verborgen lag.",
    metric: "Rookie 03",
    metricLabel: "Cohort des Quartals"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink-900 py-20 sm:py-28 md:py-40">
      <div className="absolute inset-0 -z-10 bg-grid-flame opacity-30" />

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Verwandlungen
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
              Echte Menschen.
              <span className="block flame-text">Echte Wins.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <motion.figure
              key={story.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 sm:p-8 md:p-12"
            >
              <span className="pointer-events-none absolute right-4 top-4 font-display text-[100px] leading-none text-ember/15 sm:right-8 sm:top-8 sm:text-[160px] md:text-[260px]">
                "
              </span>
              <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
                <p className="text-balance font-display text-xl font-medium leading-snug tracking-tight text-bone sm:text-2xl md:text-4xl">
                  „{story.quote}"
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-ember/30 sm:h-14 sm:w-14">
                      <img
                        src={asset(story.avatar)}
                        alt={story.name}
                        width={56}
                        height={56}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover grayscale"
                      />
                    </span>
                    <div className="min-w-0">
                      <div className="font-display text-base font-semibold tracking-tight text-bone sm:text-lg">
                        {story.name}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/65 sm:tracking-[0.32em]">
                        {story.role}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-ember/40 bg-ember/15 px-4 py-2.5 sm:px-5 sm:py-3">
                    <div className="font-display text-lg font-semibold text-ember-200 sm:text-xl md:text-2xl">
                      {story.metric}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-bone/80 sm:tracking-[0.28em]">
                      {story.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </motion.figure>
          </div>

          <div className="md:col-span-4">
            <ul className="space-y-2">
              {stories.map((s, i) => (
                <li key={s.name}>
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group flex w-full items-center justify-between gap-4 rounded-xl border px-4 py-4 text-left transition-all duration-500 ${
                      i === active
                        ? "border-ember/60 bg-ink-800"
                        : "border-white/10 bg-ink-800/40 hover:border-white/25"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/15">
                        <img
                          src={asset(s.avatar)}
                          alt={s.name}
                          width={36}
                          height={36}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover grayscale"
                        />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-bone">{s.name}</span>
                        <span className="block font-mono text-[9px] uppercase tracking-[0.28em] text-bone/65">
                          {s.role}
                        </span>
                      </span>
                    </span>
                    <span
                      className={`font-mono text-[10px] tracking-[0.28em] transition ${
                        i === active ? "text-ember" : "text-bone/45"
                      }`}
                    >
                      {`0${i + 1}`}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
