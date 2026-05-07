"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoFeature() {
  const ref = useRef<HTMLElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  const radius = useTransform(scrollYProgress, [0, 0.5, 1], ["28px", "12px", "28px"]);

  return (
    <section
      id="video"
      ref={ref}
      className="relative overflow-hidden bg-ink-900 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-page">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
              · A day at BLITZON
            </span>
            <h2 className="mt-3 font-display text-display-md uppercase tracking-tightest">
              60 Sekunden Realität.
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-bone/60 md:block">
            Trainings, Closing-Sessions, Lifestyle, Wins. Alles ungefiltert. Ton an empfohlen.
          </p>
        </div>

        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative aspect-[16/9] w-full overflow-hidden border border-white/5 bg-ink-700"
        >
          {!playing ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 flex items-center justify-center"
              aria-label="Video abspielen"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80"
                alt="A day at BLITZON"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
              <div className="absolute inset-0 grain pointer-events-none" />
              <div className="relative flex flex-col items-center gap-4 text-bone">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-flame via-flame-400 to-copper text-bone shadow-[0_18px_60px_-12px_rgba(3,124,194,0.7)] transition-transform duration-500 group-hover:scale-110 md:h-28 md:w-28">
                  <span className="absolute inset-0 animate-pulseGlow rounded-full" />
                  <PlaySvg />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/70">
                  Watch · 1:08
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-ink-900/60 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/60 backdrop-blur md:px-8 md:py-4">
                <span>· Cohort 04 · Berlin</span>
                <span className="hidden md:inline">Shot on RED · No Stock</span>
                <span className="text-flame">REC ●</span>
              </div>
            </button>
          ) : (
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&modestbranding=1&rel=0"
              title="A day at BLITZON"
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute inset-0 h-full w-full"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

function PlaySvg() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
