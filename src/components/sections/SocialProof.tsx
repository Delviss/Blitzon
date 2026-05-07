"use client";

import Counter from "@/components/system/Counter";
import { motion } from "framer-motion";

const stats = [
  { value: 1240, label: "Trainees ausgebildet", suffix: "+" },
  { value: 92, label: "Vermittlungsquote", suffix: "%" },
  { value: 38, label: "Mio. € Umsatz generiert", suffix: "" },
  { value: 64, label: "Partnerunternehmen", suffix: "" }
];

const partners = [
  "MÜNCHEN",
  "AUGSBURG",
  "FRANKFURT",
  "STUTTGART",
  "WIEN",
  "ZÜRICH",
  "HAMBURG",
  "DÜSSELDORF",
  "AMSTERDAM"
];

export default function SocialProof() {
  return (
    <section className="relative border-y border-white/5 bg-ink-800">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-white/5 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col gap-3 bg-ink-800 p-8 transition-colors hover:bg-ink-700 md:p-12"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
              0{i + 1} —
            </span>
            <span className="font-display text-5xl font-semibold tracking-tightest text-bone md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </span>
            <span className="text-xs text-bone/60">{s.label}</span>
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-flame transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </div>

      <div className="overflow-hidden border-t border-white/5 py-6">
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.4em] text-bone/30">
          {Array.from({ length: 3 }).map((_, k) => (
            <div key={k} className="flex items-center gap-16">
              {partners.map((p) => (
                <span key={`${k}-${p}`} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-flame" />
                  {p}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
