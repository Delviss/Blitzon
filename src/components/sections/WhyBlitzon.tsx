"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/system/RevealText";

const benefits = [
  {
    no: "01",
    title: "Schnelles Wachstum",
    body:
      "Vom ersten Pitch zum Team-Lead in unter 9 Monaten. Wir messen Ergebnisse, nicht Anwesenheit.",
    tags: ["Beförderung in Monaten", "Leadership-Programm", "Persönlicher Mentor"],
    span: "md:col-span-7"
  },
  {
    no: "02",
    title: "Echtes Einkommen",
    body: "Ungedeckelte Provisionen. Top-Closer skalieren auf 6-stellig bereits im ersten Jahr.",
    tags: ["Bonus-Pool", "Performance-Stack"],
    accent: true,
    span: "md:col-span-5"
  },
  {
    no: "03",
    title: "Elite Training",
    body: "Sales-Psychologie, Closing-Frameworks, Persönlichkeitsentwicklung – jeden Tag.",
    tags: ["1-zu-1 Coaching", "Roleplay Lab", "Sales Psychology"],
    span: "md:col-span-5"
  },
  {
    no: "04",
    title: "Lifestyle",
    body: "Retreats in Lissabon, Skiwochen in Tirol, Quarterly-Galas. Hart arbeiten, hart feiern.",
    tags: ["International Retreats", "Top-Performer-Trips"],
    span: "md:col-span-7"
  },
  {
    no: "05",
    title: "Persönliches Wachstum",
    body: "Kommunikation, Leadership, Disziplin, Selbstvertrauen. Wir trainieren den Menschen, nicht nur den Verkäufer.",
    tags: ["Mindset Lab", "Speaker Sessions"],
    span: "md:col-span-12"
  }
];

export default function WhyBlitzon() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink-900 py-32 md:py-40">
      <div className="absolute inset-0 -z-10 bg-grid-flame opacity-40" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
              · Warum BLITZON
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-display-md uppercase tracking-tightest">
              <RevealText as="span">Nicht nur ein Job —</RevealText>
              <span className="block">
                <RevealText as="span" className="flame-text">
                  ein Launchpad.
                </RevealText>
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {benefits.map((b, i) => (
            <motion.article
              key={b.no}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-ink-800 p-8 transition-all duration-500 hover:border-flame/40 md:min-h-[340px] md:p-10 ${b.span}`}
            >
              {b.accent && (
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(70% 70% at 30% 0%, rgba(3,124,194,0.22), transparent 70%)"
                  }}
                />
              )}
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-flame/0 blur-3xl transition-all duration-700 group-hover:bg-flame/15" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/35">
                  {b.no} / 05
                </span>
                <span className="text-bone/30 transition-transform duration-500 group-hover:rotate-45 group-hover:text-flame">
                  <ArrowSvg />
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {b.title}
                </h3>
                <p className="mt-3 max-w-md text-sm text-bone/65 md:text-base">{b.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-flame to-transparent transition-transform duration-700 group-hover:scale-x-100" />
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
