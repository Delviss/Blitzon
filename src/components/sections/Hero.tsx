"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevealText from "@/components/system/RevealText";
import { asset } from "@/lib/asset";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Berlin"
        })
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      id="movement"
      className="relative isolate flex min-h-[100svh] items-stretch overflow-hidden bg-ink-900"
    >
      {/* Right-side photo with strong blue/black tint */}
      <motion.div
        style={{ y: yBg, scale: 1.05 }}
        className="absolute inset-y-0 right-0 -z-10 w-full md:w-[58%]"
      >
        <Image
          src={asset("/media/team-success.jpg")}
          alt="BLITZON Trainee in Aktion"
          fill
          priority
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover object-center grayscale-[0.2] brightness-[0.55] contrast-[1.05]"
        />
        {/* Blue color wash over photo */}
        <div className="absolute inset-0 bg-[#06101C]/55 mix-blend-multiply" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(6,16,28,0.96) 0%, rgba(6,16,28,0.85) 30%, rgba(6,16,28,0.45) 55%, rgba(6,16,28,0.65) 100%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/30" />
      </motion.div>

      {/* Decorative giant lightning bolt on the right */}
      <motion.svg
        aria-hidden
        viewBox="0 0 200 320"
        style={{ x: mouse.x * -8, y: mouse.y * -8 }}
        className="pointer-events-none absolute right-[6%] top-[6%] z-0 hidden h-[88%] w-auto opacity-[0.55] md:block"
      >
        <defs>
          <linearGradient id="bolt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3DB6FF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#1FA9FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#037CC2" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M120 8 L40 170 L96 170 L80 312 L168 132 L108 132 Z"
          fill="none"
          stroke="url(#bolt)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Subtle background ambience */}
      <motion.div
        style={{ x: mouse.x * 18 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid-flame opacity-90" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,241,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.06) 1px, transparent 1px)",
            backgroundSize: "70px 70px"
          }}
        />
        <motion.div
          style={{ x: mouse.x * -40, y: mouse.y * -40 }}
          className="absolute -left-32 top-32 h-[600px] w-[600px] rounded-full bg-electric/25 blur-[140px]"
        />
        <motion.div
          style={{ x: mouse.x * 40, y: mouse.y * 40 }}
          className="absolute -right-32 bottom-0 h-[640px] w-[640px] rounded-full bg-brand/30 blur-[160px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900" />
      </motion.div>

      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Top corner labels */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute left-0 right-0 top-20 z-10 mx-auto flex max-w-[1440px] items-center justify-between px-page text-[9px] uppercase tracking-[0.28em] text-bone/60 sm:top-24 sm:text-[10px] sm:tracking-[0.32em]"
      >
        <span className="hidden sm:inline">// München · {time || "12:57"} CET</span>
        <span className="hidden sm:inline">
          // Class of 2026 · <span className="text-electric">Cohort 04</span>
        </span>
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-end px-page pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-28 md:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 inline-flex w-fit max-w-full flex-wrap items-center gap-2 rounded-full border border-electric/35 bg-electric/[0.08] px-3 py-2 text-[9px] uppercase tracking-[0.28em] text-electric-400 backdrop-blur sm:gap-3 sm:px-4 sm:text-[10px] sm:tracking-[0.32em] md:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
          </span>
          <span className="text-electric-400">Bewerbungen offen</span>
          <span className="text-bone/65">Class 04 / 2026</span>
        </motion.div>

        <h1 className="font-display text-display-lg uppercase leading-[0.88] tracking-tightest text-bone">
          <span className="block overflow-hidden">
            <RevealText as="span" stagger={0.06}>Wo Ehrgeiz</RevealText>
          </span>
          <span className="block overflow-hidden">
            <RevealText as="span" stagger={0.06}>auf Können</RevealText>
          </span>
          <span className="block overflow-hidden">
            <RevealText as="span" stagger={0.06} className="text-electric">trifft.</RevealText>
          </span>
        </h1>

        <span className="mt-6 block h-px w-24 bg-electric/70" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-6">
            <p className="text-balance text-sm text-bone/85 sm:text-base md:text-lg">
              BLITZON ist kein Vertriebsjob von der Stange. Wir bauen die Generation, die Deutschlands Sales neu schreibt. Jung, ehrlich, hungrig.
            </p>
            <p className="mt-4 text-sm font-medium text-electric sm:text-base md:text-lg">
              Trainier mit den Besten.
              <span className="block">Verdien wie sie. Leb wie sie.</span>
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col items-start gap-5 md:items-end">
            <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">
              <a
                href="#apply"
                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-brand px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone shadow-[0_18px_60px_-18px_rgba(3,124,194,0.7)] transition-all hover:bg-brand-400 hover:shadow-[0_22px_70px_-16px_rgba(31,169,255,0.85)] sm:flex-none sm:px-7 sm:py-4 sm:tracking-[0.22em]"
              >
                <span>Jetzt bewerben</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#video"
                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-white/25 bg-ink-900/40 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone backdrop-blur-md transition hover:border-electric/60 hover:bg-ink-900/70 sm:flex-none sm:px-6 sm:py-4 sm:tracking-[0.22em]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-white/5 text-bone transition group-hover:border-electric group-hover:bg-electric/20 group-hover:text-electric">
                  <PlayIcon />
                </span>
                <span>Ein Tag bei uns</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats row centered at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[9px] uppercase tracking-[0.24em] text-bone/65 sm:mt-14 sm:gap-x-6 sm:text-[10px] sm:tracking-[0.3em] md:mt-20"
        >
          <span>92% Vermittlungsquote</span>
          <span className="hidden h-3 w-px bg-bone/25 sm:block" />
          <span>4,9 von 5 Sternen im Trainee-Feedback</span>
        </motion.div>
      </motion.div>

      <ScrollHint />
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
      <path d="M2 1l5 3-5 3z" />
    </svg>
  );
}

function ScrollHint() {
  return (
    <div className="pointer-events-none absolute bottom-12 right-6 z-10 hidden flex-col items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-bone/55 md:flex">
      <span className="rotate-90 [writing-mode:vertical-rl]">scroll</span>
      <span className="block h-12 w-px overflow-hidden bg-white/15">
        <span className="block h-1/2 w-px bg-electric" />
      </span>
    </div>
  );
}
