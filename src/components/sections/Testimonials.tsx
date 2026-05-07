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
      "Vor zwei Jahren saß ich noch im Hörsaal. Heute schließe ich Deals im fünfstelligen Bereich. Hier habe ich gelernt zu denken wie eine Unternehmerin, nicht wie eine Studentin.",
    metric: "+412%",
    metricLabel: "mehr Einkommen in 8 Monaten"
  },
  {
    name: "Noah R.",
    role: "Team Lead · München",
    age: 27,
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    quote:
      "Im Konzern war ich gut bezahlter Stillstand. Hier wachse ich jeden Monat fachlich und persönlich. Mein 25-jähriges Ich hätte das nicht für möglich gehalten.",
    metric: "9 Monate",
    metricLabel: "vom Quereinsteiger zum Lead"
  },
  {
    name: "Yara S.",
    role: "Closer · Hamburg",
    age: 22,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    quote:
      "Das Niveau der Mentoren ist unfair gut. Im ersten Quartal habe ich mehr gelernt als in zwei Jahren Studium und meine Familie hat es als erstes gemerkt.",
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
      "Mit 19 hätte ich nie gedacht, dass ich Enterprise-Pitches halte. Sechs Monate später sitze ich Geschäftsführern auf Augenhöhe gegenüber.",
    metric: "Erste Karriere",
    metricLabel: "Direkt nach dem Abi"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink-900 py-32 md:py-40">
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
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-8 md:p-12"
            >
              <span className="absolute right-8 top-8 font-display text-[160px] leading-none text-ember/15 md:text-[260px]">
                ”
              </span>
              <div className="relative z-10 flex flex-col gap-8">
                <p className="text-balance font-display text-2xl font-medium leading-snug tracking-tight text-bone md:text-4xl">
                  „{story.quote}"
                </p>
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-ember/30">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover grayscale"
                      />
                    </span>
                    <div>
                      <div className="font-display text-lg font-semibold tracking-tight text-bone">
                        {story.name} <span className="text-bone/55">· {story.age}</span>
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/65">
                        {story.role}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-ember/40 bg-ember/15 px-5 py-3">
                    <div className="font-display text-xl font-semibold text-ember-200 md:text-2xl">
                      {story.metric}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-bone/80">
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
                          src={s.avatar}
                          alt={s.name}
                          loading="lazy"
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
