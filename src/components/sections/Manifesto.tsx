"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  { text: "Wir glauben nicht an Mittelmaß.", accent: "default" as const },
  { text: "Wir glauben an Ergebnisse.", accent: "ember" as const },
  { text: "An echte Skills.", accent: "default" as const },
  { text: "An echte Karrieren.", accent: "coral" as const },
  { text: "An Menschen, die mehr wollen.", accent: "default" as const }
];

export default function Manifesto() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-20 sm:py-28 md:py-48">
      <div className="absolute inset-0 -z-10 bg-grid-flame opacity-40" />
      <div className="absolute -left-32 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-ember/15 blur-[140px]" />
      <div className="absolute right-0 bottom-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-electric/15 blur-[140px]" />
      <div className="mx-auto max-w-[1440px] px-page">
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
          · Manifest
        </span>
        <div className="mt-10 space-y-2 md:mt-12">
          {lines.map((l, i) => {
            const start = i / (lines.length + 1);
            const end = (i + 1.5) / (lines.length + 1);
            return <Line key={l.text} progress={scrollYProgress} start={start} end={end} text={l.text} accent={l.accent} />;
          })}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-bone/75 sm:text-base md:mt-10 md:text-lg">
          Wenn dich auch nur einer dieser Sätze trifft, bist du hier richtig.
        </p>
      </div>
    </section>
  );
}

function Line({
  progress,
  start,
  end,
  text,
  accent
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  text: string;
  accent: "default" | "ember" | "coral";
}) {
  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0.25, 1, 1]);
  const x = useTransform(progress, [start, end], ["-2%", "0%"]);
  const colorClass =
    accent === "ember" ? "flame-text" : accent === "coral" ? "text-coral" : "text-bone";
  return (
    <motion.h3
      style={{ opacity, x }}
      className={`font-display text-display-md uppercase tracking-tightest ${colorClass}`}
    >
      {text}
    </motion.h3>
  );
}
