"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevealText from "@/components/system/RevealText";
import MagneticButton from "@/components/system/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
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
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink-900"
    >
      <motion.div
        style={{ y: yBg, x: mouse.x * 18, scale: 1.05 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid-flame" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,241,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.06) 1px, transparent 1px)",
            backgroundSize: "70px 70px"
          }}
        />
        <motion.div
          style={{ x: mouse.x * -40, y: mouse.y * -40 }}
          className="absolute -left-32 top-32 h-[600px] w-[600px] rounded-full bg-ember/30 blur-[140px]"
        />
        <motion.div
          style={{ x: mouse.x * 40, y: mouse.y * 40 }}
          className="absolute -right-32 bottom-0 h-[640px] w-[640px] rounded-full bg-electric/25 blur-[160px]"
        />
        <motion.div
          style={{ x: mouse.x * -10, y: mouse.y * -10 }}
          className="absolute left-1/3 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-coral/15 blur-[150px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900" />
      </motion.div>

      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Top corners */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute left-0 right-0 top-24 mx-auto flex max-w-[1440px] items-center justify-between px-page text-[10px] uppercase tracking-[0.32em] text-bone/55"
      >
        <span className="hidden md:inline">// München · {time} CET</span>
        <span className="hidden md:inline">// Class of 2026 · Cohort 04</span>
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-page pb-16 pt-40 md:pb-24 md:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-ember/30 bg-ember/[0.08] px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-ember-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          <span className="text-ember">Bewerbungen offen</span>
          <span className="text-bone/60">Class 04 / 2026</span>
        </motion.div>

        <h1 className="font-display text-display-lg uppercase leading-[0.88] tracking-tightest text-bone">
          <span className="block overflow-hidden">
            <RevealText as="span" stagger={0.06}>Wo Ehrgeiz</RevealText>
          </span>
          <span className="block overflow-hidden">
            <RevealText as="span" stagger={0.06}>auf Können</RevealText>
          </span>
          <span className="block overflow-hidden">
            <RevealText as="span" stagger={0.06} className="flame-text">trifft.</RevealText>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-12 md:items-end"
        >
          <p className="md:col-span-5 text-balance text-base text-bone/85 md:text-lg">
            BLITZON ist kein Vertriebsjob von der Stange. Wir bauen die Generation, die Deutschlands Sales neu schreibt. Jung, ehrlich, hungrig.
            <span className="mt-3 block text-bone/60">Trainier mit den Besten. Verdien wie sie. Leb wie sie.</span>
          </p>

          <div className="md:col-span-7 flex flex-col items-start gap-4 md:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton href="#apply" variant="primary">
                <span>Jetzt bewerben</span>
                <span>→</span>
              </MagneticButton>
              <MagneticButton href="#video" variant="ghost">
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-ember text-ink-900">
                  <PlayIcon />
                </span>
                <span>Ein Tag bei uns</span>
              </MagneticButton>
            </div>
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-bone/55">
              <span>92% Vermittlungsquote</span>
              <span className="hidden h-3 w-px bg-bone/25 md:block" />
              <span>4,9 von 5 Sternen im Trainee-Feedback</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Headline marquee */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y border-white/5 bg-ink-800/70 backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap py-3 font-mono text-[10px] uppercase tracking-[0.32em] text-bone/65">
          {Array.from({ length: 4 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12">
              <span>·  München</span>
              <span className="text-ember">⚡ Class 04 / 2026</span>
              <span>·  Augsburg</span>
              <span>·  Hamburg</span>
              <span className="text-ember">⚡ Wir suchen Closer, Leader und künftige Gründer</span>
              <span>·  Frankfurt</span>
              <span>·  Stuttgart</span>
              <span className="text-ember">⚡ Premium Sales Training</span>
            </div>
          ))}
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="6" height="6" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
      <path d="M2 1l5 3-5 3z" />
    </svg>
  );
}

function ScrollHint() {
  return (
    <div className="pointer-events-none absolute bottom-16 right-8 hidden flex-col items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-bone/55 md:flex">
      <span className="rotate-90 [writing-mode:vertical-rl]">scroll</span>
      <span className="block h-12 w-px overflow-hidden bg-white/15">
        <span className="block h-1/2 w-px bg-ember" />
      </span>
    </div>
  );
}
