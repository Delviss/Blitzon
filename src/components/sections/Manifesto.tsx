"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

const lines = [
  { text: "Wir glauben nicht an Mittelmaß.", accent: "default" as const },
  { text: "Wir glauben an Ergebnisse.", accent: "ember" as const },
  { text: "An echtes Können.", accent: "default" as const },
  { text: "An echte Karrieren.", accent: "coral" as const },
  { text: "An Menschen, die mehr wollen.", accent: "default" as const }
];

export default function Manifesto() {
  const ref = useRef<HTMLElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const enableScrollFx = isDesktop && !reduceMotion;

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-20 sm:py-28 md:py-48">
      <div className="absolute inset-0 -z-10 bg-grid-flame opacity-40" />
      {/* Heavy 420px blurs are expensive on mobile GPUs — desktop only */}
      <div className="absolute -left-32 top-1/4 -z-10 hidden h-[420px] w-[420px] rounded-full bg-ember/15 blur-[140px] md:block" />
      <div className="absolute right-0 bottom-1/4 -z-10 hidden h-[420px] w-[420px] rounded-full bg-electric/15 blur-[140px] md:block" />
      <div className="mx-auto max-w-[1440px] px-page">
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
          · Manifest
        </span>
        <div className="mt-10 space-y-2 md:mt-12">
          {lines.map((l, i) => {
            const start = i / (lines.length + 1);
            const end = (i + 1.5) / (lines.length + 1);
            return (
              <Line
                key={l.text}
                progress={scrollYProgress}
                start={start}
                end={end}
                text={l.text}
                accent={l.accent}
                enabled={enableScrollFx}
              />
            );
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
  accent,
  enabled
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  text: string;
  accent: "default" | "ember" | "coral";
  enabled: boolean;
}) {
  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0.25, 1, 1]);
  const x = useTransform(progress, [start, end], ["-2%", "0%"]);
  const colorClass =
    accent === "ember" ? "flame-text" : accent === "coral" ? "text-coral" : "text-bone";
  return (
    <motion.h3
      style={enabled ? { opacity, x } : undefined}
      initial={enabled ? undefined : { opacity: 0, x: "-2%" }}
      whileInView={enabled ? undefined : { opacity: 1, x: "0%" }}
      viewport={enabled ? undefined : { once: true, margin: "-15% 0px" }}
      transition={enabled ? undefined : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`font-display text-display-md uppercase tracking-tightest ${colorClass}`}
    >
      {text}
    </motion.h3>
  );
}
