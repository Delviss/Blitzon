"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Wir glauben nicht an Mittelmaß.",
  "Wir glauben an Ergebnisse.",
  "An echte Skills.",
  "An echte Karrieren.",
  "An echte Menschen, die mehr wollen."
];

export default function Manifesto() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/5 bg-ink-900 py-32 md:py-48">
      <div className="absolute inset-0 -z-10 bg-grid-flame opacity-30" />
      <div className="mx-auto max-w-[1440px] px-page">
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
          · Manifest
        </span>
        <div className="mt-10 space-y-2 md:mt-12">
          {lines.map((l, i) => {
            const start = i / (lines.length + 1);
            const end = (i + 1.5) / (lines.length + 1);
            return <Line key={l} progress={scrollYProgress} start={start} end={end} text={l} />;
          })}
        </div>
        <p className="mt-10 max-w-2xl text-base text-bone/55 md:text-lg">
          Wenn du auch nur eines davon spürst — du bist hier richtig.
        </p>
      </div>
    </section>
  );
}

function Line({
  progress,
  start,
  end,
  text
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  text: string;
}) {
  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0.18, 1, 1]);
  const x = useTransform(progress, [start, end], ["-2%", "0%"]);
  return (
    <motion.h3
      style={{ opacity, x }}
      className="font-display text-display-md uppercase tracking-tightest text-bone"
    >
      {text}
    </motion.h3>
  );
}
