"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import RevealText from "@/components/system/RevealText";

const levels = [
  {
    rank: "L1",
    title: "Starter",
    income: "2.500€",
    bonus: "+ Provision",
    skills: ["Lead-Generierung", "Discovery Calls", "Pipeline-Hygiene"],
    pct: 22
  },
  {
    rank: "L2",
    title: "Junior Closer",
    income: "5.000€",
    bonus: "+ ungedeckelte Provision",
    skills: ["High-Ticket Closing", "Objection Mastery", "Negotiation"],
    pct: 42
  },
  {
    rank: "L3",
    title: "Senior Closer",
    income: "9.000€",
    bonus: "+ Bonus-Pool",
    skills: ["Enterprise Deals", "Account Strategy", "Cross-Sell"],
    pct: 64
  },
  {
    rank: "L4",
    title: "Team Lead",
    income: "14.000€",
    bonus: "+ Team-Override",
    skills: ["People Leadership", "Hiring", "Forecasting"],
    pct: 82
  },
  {
    rank: "L5",
    title: "Management",
    income: "20.000€+",
    bonus: "+ Equity / Profit-Share",
    skills: ["P&L", "Markt-Expansion", "Strategy"],
    pct: 100
  }
];

export default function CareerPath() {
  const [active, setActive] = useState(2);
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const current = levels[active];

  return (
    <section id="career" ref={ref} className="relative overflow-hidden bg-ink-900 py-32 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,245,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
              · Karriere Roadmap
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest">
              <RevealText as="span">Skaliere</RevealText>
              <span className="block">
                <RevealText as="span" className="flame-text">
                  dein Level.
                </RevealText>
              </span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base text-bone/65 md:text-lg">
              Klare Stufen. Klare Metriken. Keine Politik. Klick durch die Levels und sieh, wie sich
              dein Einkommen, deine Skills und deine Verantwortung verändern.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Level selector */}
          <div className="md:col-span-5">
            <ul className="space-y-2">
              {levels.map((l, i) => (
                <li key={l.rank}>
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group flex w-full items-center justify-between gap-6 rounded-xl border px-5 py-5 text-left transition-all duration-500 md:px-6 ${
                      i === active
                        ? "border-flame/60 bg-ink-700"
                        : "border-white/5 bg-ink-800 hover:border-white/15"
                    }`}
                  >
                    <span className="flex items-center gap-5">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-[10px] tracking-[0.2em] transition ${
                          i === active
                            ? "bg-flame text-ink-900"
                            : "bg-ink-900 text-bone/50 group-hover:text-bone"
                        }`}
                      >
                        {l.rank}
                      </span>
                      <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                        {l.title}
                      </span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
                      {`0${i + 1}`.slice(-2)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Detail panel */}
          <div className="md:col-span-7">
            <motion.div
              key={current.rank}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-ink-800 p-8 md:p-10"
            >
              <div
                className="absolute inset-0 -z-10 opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 60% at 80% 0%, rgba(255,90,31,0.18), transparent 70%)"
                }}
              />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">
                  Level {current.rank}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
                  Trajectory · {current.pct}%
                </span>
              </div>

              <h3 className="mt-3 font-display text-4xl font-semibold tracking-tightest md:text-5xl">
                {current.title}
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <Metric label="Base" value={current.income} accent />
                <Metric label="Upside" value={current.bonus} />
                <Metric label="Promotion" value={`${4 + active}-${6 + active} Mo.`} />
                <Metric label="Squad" value={active < 3 ? "Solo / Pair" : `${(active - 1) * 5}+ pax`} />
              </div>

              <div className="mt-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">
                  Skill Stack
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {current.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">
                  <span>Income progression</span>
                  <span>Year 1 → Year 5</span>
                </div>
                <div className="relative mt-3 h-12 overflow-hidden rounded-md border border-white/5 bg-ink-900">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${current.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-flame via-flame-400 to-copper"
                  />
                  <div className="pointer-events-none absolute inset-0 grid grid-cols-5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <span key={k} className="border-r border-white/5 last:border-r-0" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-white/5 bg-ink-900/60 p-4">
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/40">{label}</div>
      <div
        className={`mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl ${
          accent ? "text-flame" : "text-bone"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
