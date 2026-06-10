"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import RevealText from "@/components/system/RevealText";

const levels = [
  {
    rank: "L1",
    title: "Außendienstmitarbeiter",
    tagline: "Dein Einstieg in den Vertrieb",
    summary:
      "Du berätst Kunden zu passenden Angeboten, überzeugst mit deinem Auftreten und entwickelst dich stetig weiter.",
    requirements: [
      "Pünktlich, zuverlässig und engagiert",
      "Gepflegtes Erscheinungsbild",
      "Lernbereitschaft und Motivation, im Verkauf besser zu werden"
    ],
    goals: [
      "Ohne Druck verkaufen lernen, mit Ruhe und Fokus auf hohe Beratungsqualität",
      "Mit jedem Gespräch sicherer, überzeugender und erfolgreicher werden"
    ],
    perks: [
      "Einstieg in die Vertriebswelt",
      "Praxisnahe Ausbildung im Verkauf",
      "Persönliche Entwicklung und Aufstiegschancen"
    ],
    pct: 25
  },
  {
    rank: "L2",
    title: "Ausbilder",
    tagline: "Vom Verkäufer zum Coach",
    summary:
      "Du gibst dein Wissen an neue Mitarbeiter weiter, begleitest sie und trägst Verantwortung für deren Entwicklung.",
    requirements: [
      "Konstant gute Verkaufsleistung und Zuverlässigkeit (mind. 3 Aufträge netto pro Tag)",
      "Positives Denken und Handeln, du bist Motivator, kein Bremser",
      "Sehr gute Stornoquote (1A)",
      "Verantwortungsbewusster Umgang mit Teammitgliedern"
    ],
    goals: [
      "Erfolgreiche Einarbeitung neuer Mitarbeiter",
      "Aktive Mitarbeit im Team mit Vorbildfunktion",
      "Nachweislich exzellente Auftragsqualität",
      "Ø 3 Aufträge netto (provisionsfähige Aufträge) pro Tag über 2 Wochen"
    ],
    perks: [
      "Zusatzprovision: Privatkunden 5 € / Vertrag, Gewerbekunden 20 € / Vertrag",
      "Berechtigt zum Abschluss von B2B-Verträgen"
    ],
    pct: 50
  },
  {
    rank: "L3",
    title: "Teamleiter",
    tagline: "Vom Coach zur Führungskraft",
    summary:
      "Du leitest dein eigenes Team, motivierst, planst und sorgst für den gemeinsamen Vertriebserfolg.",
    requirements: [
      "Führungsstärke und Verantwortungsbewusstsein",
      "Hohe Eigenmotivation und Organisationstalent",
      "Vorbild in Auftreten, Struktur und Arbeitsweise"
    ],
    goals: [
      "Mindestens 3 aktive Teammitglieder (1 Außendienstmitarbeiter + 2 Ausbilder)",
      "Durchschnittlich 250 Aufträge pro Monat (3-Monats-Check)",
      "Stabile Teamleistung und geringe Stornoquote"
    ],
    perks: [
      "Zusatzprovision: Privatkunde 10 € / Vertrag, Geschäftskunde 60 € / Vertrag",
      "Dienstfahrzeug (mit Privatnutzung)",
      "Schulung im Bereich Management & Expansion"
    ],
    pct: 75
  },
  {
    rank: "L4",
    title: "Standortleiter",
    tagline: "Von der Führungskraft zum Unternehmer",
    summary:
      "Du führst deine eigene BlitzON-Niederlassung, entwickelst Strategien und trägst die Gesamtverantwortung.",
    requirements: [
      "Führungsstark, unternehmerisch denkend, zielorientiert",
      "Kennt und beherrscht alle Stufen der Karriereleiter",
      "Plant langfristig und setzt Unternehmensziele konsequent um",
      "Teilt Erfahrung und gibt die Chancen weiter, die seinen Weg möglich gemacht haben"
    ],
    goals: [
      "Aufbau und Leitung eines Standorts mit 20 oder mehr Mitarbeitern",
      "Nachhaltiger Unternehmenserfolg und Teamwachstum",
      "Aktive Entwicklung neuer Vertriebspotenziale"
    ],
    perks: [
      "Nahezu alle Vorteile der vorherigen Stufen",
      "Volle unternehmerische Freiheit",
      "Beteiligung am Standorterfolg"
    ],
    pct: 100
  }
];

export default function CareerPath() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  const current = levels[active];

  return (
    <section id="career" ref={ref} className="relative overflow-hidden bg-ink-900 py-20 sm:py-28 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,241,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
        <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-ember/15 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[480px] w-[480px] rounded-full bg-electric/15 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Karriereleiter · Direktvertrieb
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
              <RevealText as="span">Den Weg</RevealText>
              <span className="block">
                <RevealText as="span" className="flame-text">
                  nach oben.
                </RevealText>
              </span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base text-bone/85 md:text-lg">
              Vier klare Stufen, vom Einstieg in den Vertrieb bis zur eigenen Niederlassung. Klick dich durch und sieh, welche Voraussetzungen, Ziele und Vorteile jede Stufe mit sich bringt.
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
                    className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-4 text-left transition-all duration-500 sm:gap-6 sm:px-5 sm:py-5 md:px-6 ${
                      i === active
                        ? "border-ember/70 bg-ink-700"
                        : "border-white/10 bg-ink-800 hover:border-white/25"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3 sm:gap-5">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[10px] tracking-[0.2em] transition sm:h-10 sm:w-10 ${
                          i === active
                            ? "bg-brand text-bone shadow-[0_8px_28px_-10px_rgba(3,124,194,0.8)]"
                            : "bg-ink-900 text-bone/65 group-hover:text-bone"
                        }`}
                      >
                        {l.rank}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-display text-lg font-semibold tracking-tight text-bone sm:text-xl md:text-2xl">
                          {l.title}
                        </span>
                        <span className="block truncate font-mono text-[9px] uppercase tracking-[0.24em] text-bone/45 sm:text-[10px]">
                          {l.tagline}
                        </span>
                      </span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/55">
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
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 sm:p-8 md:p-10"
            >
              <div
                className="absolute inset-0 -z-10 opacity-70"
                style={{
                  background:
                    "radial-gradient(60% 60% at 80% 0%, rgba(31,169,255,0.18), transparent 70%)"
                }}
              />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">
                  Level {current.rank} · {current.tagline}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
                  Fortschritt · {current.pct}%
                </span>
              </div>

              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tightest text-bone sm:text-4xl md:text-5xl">
                {current.title}
              </h3>

              <p className="mt-4 max-w-2xl text-sm text-bone/80 sm:text-base">
                {current.summary}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <InfoList label="Voraussetzungen" items={current.requirements} accent />
                <InfoList label="Zielvorgabe" items={current.goals} />
                <InfoList label="Vorteile" items={current.perks} />
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">
                  <span>Aufstieg</span>
                  <span>Stufe 1 bis 4</span>
                </div>
                <div className="relative mt-3 h-12 overflow-hidden rounded-md border border-white/10 bg-ink-900">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${current.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-ember via-coral to-electric"
                  />
                  <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
                    {Array.from({ length: 4 }).map((_, k) => (
                      <span key={k} className="border-r border-white/10 last:border-r-0" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-bone/45 sm:text-left">
              BlitzON: Erfolg ist kein Zufall, sondern das Ergebnis harter Arbeit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoList({ label, items, accent }: { label: string; items: string[]; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-900/70 p-4 sm:p-5">
      <div
        className={`font-mono text-[9px] uppercase tracking-[0.3em] ${
          accent ? "text-ember" : "text-bone/55"
        }`}
      >
        {label}
      </div>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-xs leading-relaxed text-bone/80 sm:text-[13px]">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent ? "bg-ember" : "bg-electric"}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
