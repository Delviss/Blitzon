"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const stories = [
  {
    name: "Lina K.",
    role: "Senior Closer · München",
    age: 24,
    avatar:
      "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=400&q=80",
    quote:
      "Ich war Studentin, jetzt schließe ich Deals im 5-stelligen Bereich. BLITZON hat mir den Mindset-Shift gegeben, den keine Uni je liefert.",
    metric: "+412%",
    metricLabel: "Einkommenssteigerung in 8 Mo."
  },
  {
    name: "Noah R.",
    role: "Team Lead · München",
    age: 27,
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    quote:
      "Ich habe den Konzern verlassen, weil ich Stillstand gespürt habe. Hier wachse ich jeden Monat — fachlich und persönlich.",
    metric: "9 Monate",
    metricLabel: "Vom Quereinsteiger zum Team Lead"
  },
  {
    name: "Yara S.",
    role: "Closer · Hamburg",
    age: 22,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    quote:
      "Das Niveau der Mentoren ist unfair gut. Ich habe mehr in einem Quartal gelernt als in zwei Jahren Studium.",
    metric: "Top 5%",
    metricLabel: "Performer Cohort 03"
  },
  {
    name: "Eli D.",
    role: "Junior Closer · Frankfurt",
    age: 20,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    quote:
      "Mit 19 hätte ich nie geglaubt, dass ich Enterprise-Pitches halte. BLITZON hat mich gebaut.",
    metric: "1. Karriere",
    metricLabel: "Direkt nach dem Abi"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink-900 py-32 md:py-40">
      <div className="absolute inset-0 -z-10 bg-grid-flame opacity-30" />

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
              · Transformations
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest">
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
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-ink-800 p-8 md:p-12"
            >
              <span className="absolute right-8 top-8 font-display text-[160px] leading-none text-flame/10 md:text-[260px]">
                ”
              </span>
              <div className="relative z-10 flex flex-col gap-8">
                <p className="text-balance font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl">
                  „{story.quote}"
                </p>
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-white/10">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover grayscale"
                      />
                    </span>
                    <div>
                      <div className="font-display text-lg font-semibold tracking-tight">
                        {story.name} <span className="text-bone/40">· {story.age}</span>
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/50">
                        {story.role}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-flame/30 bg-flame/10 px-5 py-3">
                    <div className="font-display text-xl font-semibold text-flame md:text-2xl">
                      {story.metric}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-bone/60">
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
                        ? "border-flame/50 bg-ink-800"
                        : "border-white/5 bg-ink-800/30 hover:border-white/15"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
                        <img
                          src={s.avatar}
                          alt={s.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover grayscale"
                        />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{s.name}</span>
                        <span className="block font-mono text-[9px] uppercase tracking-[0.28em] text-bone/50">
                          {s.role}
                        </span>
                      </span>
                    </span>
                    <span
                      className={`font-mono text-[10px] tracking-[0.28em] transition ${
                        i === active ? "text-flame" : "text-bone/30"
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
