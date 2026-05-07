"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Job = {
  title: string;
  city: string;
  type: "Vollzeit" | "Werkstudent" | "Trainee" | "Lead";
  level: "Starter" | "Junior" | "Senior" | "Lead";
  income: string;
  tags: string[];
};

const jobs: Job[] = [
  {
    title: "Sales Trainee",
    city: "Berlin",
    type: "Trainee",
    level: "Starter",
    income: "2.500€ + Provision",
    tags: ["Bootcamp", "1-zu-1 Mentor", "DACH"]
  },
  {
    title: "High-Ticket Closer",
    city: "München",
    type: "Vollzeit",
    level: "Junior",
    income: "5.000–9.000€",
    tags: ["High Ticket", "Outbound"]
  },
  {
    title: "Senior Account Closer",
    city: "Hamburg",
    type: "Vollzeit",
    level: "Senior",
    income: "8.000–14.000€",
    tags: ["Enterprise", "Cross-Sell"]
  },
  {
    title: "Sales Werkstudent",
    city: "Berlin",
    type: "Werkstudent",
    level: "Starter",
    income: "20€ / Std + Bonus",
    tags: ["Studierende", "Flex 20h"]
  },
  {
    title: "Team Lead Vertrieb",
    city: "Frankfurt",
    type: "Lead",
    level: "Lead",
    income: "12.000€ + Override",
    tags: ["Leadership", "Hiring"]
  },
  {
    title: "Closer DACH (Remote)",
    city: "Remote",
    type: "Vollzeit",
    level: "Junior",
    income: "Ungedeckelt",
    tags: ["Remote", "Closing"]
  }
];

const cities = ["Alle", "Berlin", "München", "Hamburg", "Frankfurt", "Remote"];
const types: ("Alle" | Job["type"])[] = ["Alle", "Vollzeit", "Trainee", "Werkstudent", "Lead"];

export default function Jobs() {
  const [city, setCity] = useState("Alle");
  const [type, setType] = useState<(typeof types)[number]>("Alle");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(
    () =>
      jobs.filter(
        (j) =>
          (city === "Alle" || j.city === city) && (type === "Alle" || j.type === type)
      ),
    [city, type]
  );

  return (
    <section id="jobs" className="relative border-t border-white/5 bg-ink-800 py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
              · Open positions
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest">
              Der Spot ist frei.
              <span className="block flame-text">Nimm ihn.</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/50">
              {filtered.length} aktive Rollen · DACH
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">Stadt</span>
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                city === c
                  ? "border-flame bg-flame text-bone shadow-[0_8px_28px_-10px_rgba(3,124,194,0.7)]"
                  : "border-white/10 bg-white/[0.02] text-bone/70 hover:border-flame/40 hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-4 font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">Typ</span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                type === t
                  ? "border-flame bg-flame text-bone shadow-[0_8px_28px_-10px_rgba(3,124,194,0.7)]"
                  : "border-white/10 bg-white/[0.02] text-bone/70 hover:border-flame/40 hover:text-bone"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="mt-10 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-ink-900">
          {filtered.map((j, i) => (
            <motion.li
              key={`${j.title}-${j.city}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="group grid w-full grid-cols-12 items-center gap-4 px-6 py-6 text-left transition hover:bg-ink-700/60 md:px-10 md:py-7"
              >
                <span className="col-span-12 md:col-span-5">
                  <span className="block font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {j.title}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-bone/50">
                    {j.level} · {j.type}
                  </span>
                </span>
                <span className="col-span-6 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.28em] text-bone/70">
                  · {j.city}
                </span>
                <span className="col-span-6 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.28em] text-flame">
                  {j.income}
                </span>
                <span className="col-span-12 md:col-span-2 flex items-center justify-between gap-3 md:justify-end">
                  <span className="hidden gap-2 md:flex">
                    {j.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-bone/55"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition ${
                      open === i ? "rotate-45 border-flame text-flame" : "text-bone/60"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </button>
              <motion.div
                initial={false}
                animate={
                  open === i
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-6 border-t border-white/5 bg-ink-800 px-6 py-8 md:grid-cols-12 md:px-10">
                  <div className="md:col-span-7 space-y-3 text-sm text-bone/70 md:text-base">
                    <p>
                      Wir suchen ehrgeizige {j.level === "Starter" ? "Talente" : "Closer"}, die
                      Performance lieben. Du arbeitest mit Top-Mentoren, baust deine Pipeline und
                      machst aus Cold Calls Karriere-Sprünge.
                    </p>
                    <ul className="grid grid-cols-1 gap-2 pt-3 md:grid-cols-2">
                      {[
                        "Strukturiertes Onboarding",
                        "Premium Tech-Stack",
                        "Provision ungedeckelt",
                        "Quarterly Retreats",
                        "Persönlicher Mentor",
                        "Equity-Optionen ab L4"
                      ].map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-bone/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-between gap-4 rounded-xl border border-white/5 bg-ink-900 p-6">
                    <div className="space-y-3 text-sm text-bone/70">
                      <Row label="Standort" value={j.city} />
                      <Row label="Anstellung" value={j.type} />
                      <Row label="Level" value={j.level} />
                      <Row label="Income" value={j.income} accent />
                    </div>
                    <a
                      href="#apply"
                      className="group inline-flex items-center justify-between rounded-full bg-flame px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone shadow-[0_12px_40px_-14px_rgba(3,124,194,0.7)] transition hover:bg-flame-400 hover:shadow-[0_16px_50px_-12px_rgba(27,163,245,0.7)]"
                    >
                      Quick apply
                      <span className="transition group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">{label}</span>
      <span className={`font-mono text-xs uppercase tracking-[0.22em] ${accent ? "text-flame" : "text-bone"}`}>
        {value}
      </span>
    </div>
  );
}
