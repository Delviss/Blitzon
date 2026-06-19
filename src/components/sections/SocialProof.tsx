"use client";

import Counter from "@/components/system/Counter";
import { motion } from "framer-motion";

const stats = [
  { value: 1240, label: "Trainees ausgebildet", suffix: "+", accent: "ember" as const },
  { value: 92, label: "Vermittlungsquote", suffix: "%", accent: "electric" as const },
  { value: 38, label: "Mio. € Umsatz für Partner", suffix: "", accent: "coral" as const },
  { value: 64, label: "Partnerunternehmen", suffix: "", accent: "moss" as const }
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

const accentMap = {
  ember: "text-ember",
  electric: "text-electric-400",
  coral: "text-coral",
  moss: "text-moss"
} as const;

const lineMap = {
  ember: "bg-ember",
  electric: "bg-electric-400",
  coral: "bg-coral",
  moss: "bg-moss"
} as const;

export default function SocialProof() {
  return (
    <section className="relative border-y border-white/10 bg-ink-800">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col gap-2 bg-ink-800 p-5 transition-colors hover:bg-ink-700 sm:gap-3 sm:p-8 md:p-12"
          >
            <span className={`font-mono text-[9px] uppercase tracking-[0.24em] sm:text-[10px] sm:tracking-[0.3em] ${accentMap[s.accent]} opacity-80`}>
              0{i + 1} /
            </span>
            <span className="font-display text-3xl font-semibold tracking-tightest text-gold sm:text-5xl md:text-6xl" style={{ textShadow: "0 0 40px rgba(212,175,55,0.18)" }}>
              <Counter to={s.value} suffix={s.suffix} />
            </span>
            <span className="text-[11px] text-bone/75 sm:text-xs">{s.label}</span>
            <span className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 ${lineMap[s.accent]} transition-transform duration-500 group-hover:scale-x-100`} />
          </motion.div>
        ))}
      </div>

      <div className="overflow-hidden border-t border-white/10 py-6">
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.4em] text-bone/55">
          {Array.from({ length: 3 }).map((_, k) => (
            <div key={k} className="flex items-center gap-16">
              {partners.map((p) => (
                <span key={`${k}-${p}`} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-ember" />
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
