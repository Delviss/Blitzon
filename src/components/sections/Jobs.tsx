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
    city: "München",
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
    income: "5.000 bis 9.000€",
    tags: ["High Ticket", "Outbound"]
  },
  {
    title: "Senior Account Closer",
    city: "Augsburg",
    type: "Vollzeit",
    level: "Senior",
    income: "8.000 bis 14.000€",
    tags: ["Enterprise", "Cross-Selling"]
  },
  {
    title: "Sales Werkstudent",
    city: "Augsburg",
    type: "Werkstudent",
    level: "Starter",
    income: "20€ pro Std. plus Bonus",
    tags: ["Studierende", "Flex 20h"]
  },
  {
    title: "Team Lead Vertrieb",
    city: "Frankfurt",
    type: "Lead",
    level: "Lead",
    income: "12.000€ plus Override",
    tags: ["Leadership", "Hiring"]
  },
  {
    title: "Closer DACH (Remote)",
    city: "Remote",
    type: "Vollzeit",
    level: "Junior",
    income: "Ohne Deckel",
    tags: ["Remote", "Closing"]
  }
];

const cities = ["Alle", "München", "Augsburg", "Frankfurt", "Remote"];
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
    <section id="jobs" className="relative border-t border-white/10 bg-ink-800 py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Offene Rollen
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
              Der Platz ist frei.
              <span className="block flame-text">Nimm ihn.</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/65">
              {filtered.length} aktive Rollen · DACH
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">Stadt</span>
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                city === c
                  ? "border-ember bg-ember text-ink-900 shadow-[0_8px_28px_-10px_rgba(255,181,71,0.7)]"
                  : "border-white/15 bg-white/[0.04] text-bone/85 hover:border-ember/50 hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-4 font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">Typ</span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                type === t
                  ? "border-ember bg-ember text-ink-900 shadow-[0_8px_28px_-10px_rgba(255,181,71,0.7)]"
                  : "border-white/15 bg-white/[0.04] text-bone/85 hover:border-ember/50 hover:text-bone"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
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
                  <span className="block font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
                    {j.title}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-bone/65">
                    {j.level} · {j.type}
                  </span>
                </span>
                <span className="col-span-6 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.28em] text-bone/85">
                  · {j.city}
                </span>
                <span className="col-span-6 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ember">
                  {j.income}
                </span>
                <span className="col-span-12 md:col-span-2 flex items-center justify-between gap-3 md:justify-end">
                  <span className="hidden gap-2 md:flex">
                    {j.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-bone/75"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition ${
                      open === i ? "rotate-45 border-ember text-ember" : "text-bone/75"
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
                <div className="grid grid-cols-1 gap-6 border-t border-white/10 bg-ink-800 px-6 py-8 md:grid-cols-12 md:px-10">
                  <div className="md:col-span-7 space-y-3 text-sm text-bone/85 md:text-base">
                    <p>
                      Wir suchen ehrliche {j.level === "Starter" ? "Talente" : "Closer"}, die Ergebnisse lieben. Du arbeitest mit Top-Mentoren, baust deine Pipeline auf und machst aus Cold Calls echte Karriereschritte.
                    </p>
                    <ul className="grid grid-cols-1 gap-2 pt-3 md:grid-cols-2">
                      {[
                        "Strukturiertes Onboarding",
                        "Premium Tech-Stack",
                        "Provision ohne Deckel",
                        "Quartals-Retreats",
                        "Persönlicher Mentor",
                        "Equity-Optionen ab L4"
                      ].map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-bone/85">
                          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-between gap-4 rounded-xl border border-white/10 bg-ink-900 p-6">
                    <div className="space-y-3 text-sm text-bone/85">
                      <Row label="Standort" value={j.city} />
                      <Row label="Anstellung" value={j.type} />
                      <Row label="Level" value={j.level} />
                      <Row label="Einkommen" value={j.income} accent />
                    </div>
                    <a
                      href="#apply"
                      className="group inline-flex items-center justify-between rounded-full bg-ember px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 shadow-[0_12px_40px_-14px_rgba(255,181,71,0.7)] transition hover:bg-ember-300 hover:shadow-[0_16px_50px_-12px_rgba(255,181,71,0.8)]"
                    >
                      Schnell bewerben
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
    <div className="flex items-center justify-between border-b border-white/10 pb-2 last:border-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/55">{label}</span>
      <span className={`font-mono text-xs uppercase tracking-[0.22em] ${accent ? "text-ember" : "text-bone"}`}>
        {value}
      </span>
    </div>
  );
}
