"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

const links = [
  { href: "#movement", label: "Bewegung" },
  { href: "#training", label: "Training" },
  { href: "#career", label: "Karriere" },
  { href: "#team", label: "Team" },
  { href: "#jobs", label: "Jobs" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress, opacity: progressOpacity }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-ember via-coral to-electric"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-page py-5">
          <a href="#" className="group relative flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <Image
                src={asset("/logo/blitzon-mark-transparent.png")}
                alt="BLITZON"
                width={36}
                height={36}
                priority
                className="h-9 w-9 object-contain drop-shadow-[0_6px_18px_rgba(255,181,71,0.45)] transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span className="font-display text-lg font-bold tracking-[0.18em] text-bone">BLITZON</span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-ember/80">/ DE</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.24em] text-bone/80 transition hover:text-bone"
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-500 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#apply"
              className="group hidden h-11 items-center gap-2 rounded-full bg-ember px-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 shadow-[0_10px_30px_-12px_rgba(255,181,71,0.7)] transition-all hover:bg-ember-300 hover:shadow-[0_14px_40px_-10px_rgba(255,181,71,0.8)] md:inline-flex"
            >
              Bewerben
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button
              type="button"
              aria-label="Menü öffnen"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-ink-700/40 transition hover:border-ember md:hidden"
            >
              <span className="block h-px w-5 bg-bone" />
              <span className="block h-px w-3 bg-bone" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[70] flex flex-col bg-ink-900"
    >
      <div className="absolute inset-0 bg-grid-flame opacity-60" />
      <div className="absolute inset-0 grain" />
      <div className="relative flex items-center justify-between px-page py-5">
        <span className="flex items-center gap-2.5">
          <Image
            src="/logo/blitzon-mark-transparent.png"
            alt="BLITZON"
            width={36}
            height={36}
            className="h-9 w-9 object-contain drop-shadow-[0_6px_18px_rgba(255,181,71,0.45)]"
          />
          <span className="font-display text-lg font-bold tracking-[0.18em] text-bone">BLITZON</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Menü schließen"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-2xl text-bone"
        >
          ×
        </button>
      </div>
      <nav className="relative flex flex-1 flex-col justify-center gap-4 px-page">
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-baseline justify-between border-b border-white/10 py-5"
          >
            <span className="font-display text-5xl font-semibold tracking-tightest text-bone">
              {l.label}
            </span>
            <span className="font-mono text-xs text-bone/55 transition group-hover:text-ember">
              0{i + 1}
            </span>
          </motion.a>
        ))}
      </nav>
      <div className="relative px-page pb-10">
        <a
          href="#apply"
          onClick={onClose}
          className="flex w-full items-center justify-between rounded-full bg-ember px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-ink-900 shadow-[0_18px_60px_-18px_rgba(255,181,71,0.7)]"
        >
          Bewirb dich
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}
