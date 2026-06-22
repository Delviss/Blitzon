"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Job = {
  title: string;
  city: string;
  type: "Vollzeit" | "Werkstudent" | "Trainee" | "Leitung";
  level: "Einsteiger" | "Junior" | "Senior" | "Leitung";
  income: string;
  tags: string[];
};

const jobs: Job[] = [
  {
    title: "Vertriebs-Trainee",
    city: "München",
    type: "Trainee",
    level: "Einsteiger",
    income: "2.500€ + Provision",
    tags: ["Intensivtraining", "1-zu-1 Mentor", "DACH"]
  },
  {
    title: "Vertriebsprofi",
    city: "München",
    type: "Vollzeit",
    level: "Junior",
    income: "5.000 bis 9.000€",
    tags: ["Großkunden", "Neukundengewinnung"]
  },
  {
    title: "Senior-Kundenberater",
    city: "Augsburg",
    type: "Vollzeit",
    level: "Senior",
    income: "8.000 bis 14.000€",
    tags: ["Geschäftskunden", "Zusatzverkauf"]
  },
  {
    title: "Werkstudent Vertrieb",
    city: "Augsburg",
    type: "Werkstudent",
    level: "Einsteiger",
    income: "20€ pro Std. plus Bonus",
    tags: ["Studierende", "Flexible 20 Std."]
  },
  {
    title: "Teamleiter Vertrieb",
    city: "Frankfurt",
    type: "Leitung",
    level: "Leitung",
    income: "12.000€ plus Teamprovision",
    tags: ["Führung", "Teamaufbau"]
  },
  {
    title: "Vertriebsprofi DACH (Homeoffice)",
    city: "Homeoffice",
    type: "Vollzeit",
    level: "Junior",
    income: "Ohne Deckel",
    tags: ["Homeoffice", "Abschluss"]
  }
];

const cities = ["Alle", "München", "Augsburg", "Frankfurt", "Homeoffice"];
const types: ("Alle" | Job["type"])[] = ["Alle", "Vollzeit", "Trainee", "Werkstudent", "Leitung"];

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
    <section id="jobs" className="relative border-t border-white/10 bg-ink-800 py-20 sm:py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
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

        <div className="mt-10 flex flex-col gap-4 md:mt-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55 sm:tracking-[0.32em]">Stadt</span>
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] transition sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em] ${
                  city === c
                    ? "border-brand bg-brand text-bone shadow-[0_8px_28px_-10px_rgba(3,124,194,0.7)]"
                    : "border-white/15 bg-white/[0.04] text-bone/85 hover:border-brand/50 hover:text-bone"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55 sm:tracking-[0.32em]">Typ</span>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] transition sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em] ${
                  type === t
                    ? "border-brand bg-brand text-bone shadow-[0_8px_28px_-10px_rgba(3,124,194,0.7)]"
                    : "border-white/15 bg-white/[0.04] text-bone/85 hover:border-brand/50 hover:text-bone"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
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
                className="group grid w-full grid-cols-12 items-center gap-3 px-5 py-5 text-left transition hover:bg-ink-700/60 sm:gap-4 sm:px-6 sm:py-6 md:px-10 md:py-7"
              >
                <span className="col-span-10 md:col-span-5">
                  <span className="block font-display text-xl font-semibold tracking-tight text-bone sm:text-2xl md:text-3xl">
                    {j.title}
                  </span>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.24em] text-bone/65 sm:text-[10px] sm:tracking-[0.28em]">
                    {j.level} · {j.type}
                  </span>
                </span>
                <span className="col-span-2 flex justify-end md:col-span-2 md:justify-start md:order-none order-last">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition sm:h-9 sm:w-9 ${
                      open === i ? "rotate-45 border-gold text-gold" : "text-bone/75"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </span>
                <span className="col-span-6 font-mono text-[10px] uppercase tracking-[0.24em] text-bone/85 sm:text-[11px] sm:tracking-[0.28em] md:col-span-2">
                  · {j.city}
                </span>
                <span className="col-span-6 font-mono text-[10px] uppercase tracking-[0.24em] text-gold sm:text-[11px] sm:tracking-[0.28em] md:col-span-3">
                  {j.income}
                </span>
                <span className="col-span-12 hidden gap-2 md:col-span-2 md:flex md:justify-end">
                  {j.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-bone/75"
                    >
                      {t}
                    </span>
                  ))}
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
                <div className="grid grid-cols-1 gap-6 border-t border-white/10 bg-ink-800 px-5 py-6 sm:px-6 sm:py-8 md:grid-cols-12 md:px-10">
                  <div className="md:col-span-7 space-y-3 text-sm text-bone/85 md:text-base">
                    <p>
                      Wir suchen ehrliche {j.level === "Einsteiger" ? "Talente" : "Verkäufer"}, die Ergebnisse lieben. Du arbeitest mit Top-Mentoren, baust deinen Kundenstamm auf und machst aus jedem Gespräch echte Karriereschritte.
                    </p>
                    <ul className="grid grid-cols-1 gap-2 pt-3 md:grid-cols-2">
                      {[
                        "Strukturierte Einarbeitung",
                        "Moderne Arbeitsausstattung",
                        "Provision ohne Deckel",
                        "Teamreisen pro Quartal",
                        "Persönlicher Mentor",
                        "Beteiligungsmodelle ab L4"
                      ].map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-bone/85">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
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
                      className="group inline-flex items-center justify-between rounded-full btn-gold px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
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
      <span className={`font-mono text-xs uppercase tracking-[0.22em] ${accent ? "text-gold" : "text-bone"}`}>
        {value}
      </span>
    </div>
  );
}
