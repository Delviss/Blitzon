"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { asset } from "@/lib/asset";

export default function VideoFeature() {
  const ref = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  const radius = useTransform(scrollYProgress, [0, 0.5, 1], ["28px", "12px", "28px"]);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  return (
    <section
      id="video"
      ref={ref}
      className="relative overflow-hidden border-t border-white/10 bg-ink-900 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-electric/20 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-brand/25 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-electric">
              · Ein Tag bei BLITZON
            </span>
            <h2 className="mt-3 font-display text-display-md uppercase tracking-tightest text-bone">
              60 Sekunden <span className="text-electric">Realität.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-bone/75 md:text-right">
            Trainings, Closing-Sessions, Lifestyle, Wins. Ungefiltert. Ton an, lohnt sich.
          </p>
        </div>

        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 bg-ink-800 shadow-[0_30px_120px_-30px_rgba(31,169,255,0.45)]"
        >
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full bg-ink-900 object-cover transition-opacity duration-500 ${
              playing ? "opacity-100" : "opacity-0"
            }`}
            playsInline
            controls={playing}
            preload="metadata"
            poster={asset("/media/video-poster.jpg")}
          >
            <source src={asset("/media/blitzon-hero.mp4")} type="video/mp4" />
          </video>

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              className="group absolute inset-0 flex items-center justify-center"
              aria-label="Video abspielen"
            >
              <Image
                src={asset("/media/video-poster.jpg")}
                alt="Ein Tag bei BLITZON"
                fill
                priority
                sizes="100vw"
                className="object-cover grayscale-[0.35] brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-[#06101C]/45 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
              <div className="absolute inset-0 grain pointer-events-none" />
              <div className="relative flex flex-col items-center gap-4 text-bone">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand text-bone shadow-[0_18px_60px_-12px_rgba(31,169,255,0.7)] transition-transform duration-500 group-hover:scale-110 md:h-28 md:w-28">
                  <span className="absolute inset-0 animate-pulseGlow rounded-full" />
                  <PlaySvg />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/85">
                  Schauen · 1:08
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 bg-ink-900/75 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/75 backdrop-blur md:px-8 md:py-4">
                <span>· Cohort 04 · München</span>
                <span className="hidden md:inline">Gedreht in HQ · Kein Stockmaterial</span>
                <span className="text-electric">REC ●</span>
              </div>
            </button>
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
