"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#movement", label: "Movement" },
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
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-flame via-flame-400 to-copper"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-white/5 bg-ink-900/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-page py-5">
          <a href="#" className="group relative flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-flame text-ink-900">
              <BoltSvg />
            </span>
            <span className="font-display text-lg font-bold tracking-[0.18em]">BLITZON</span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-bone/40">/ DE</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.24em] text-bone/70 transition hover:text-bone"
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame transition-all duration-500 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#apply"
              className="group hidden h-11 items-center gap-2 rounded-full bg-flame px-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 transition-all hover:bg-flame-400 md:inline-flex"
            >
              Bewerben
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button
              type="button"
              aria-label="Menü öffnen"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-ink-700/40 transition hover:border-flame md:hidden"
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
        <span className="font-display text-lg font-bold tracking-[0.18em]">BLITZON</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Menü schließen"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-2xl"
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
            className="group flex items-baseline justify-between border-b border-white/5 py-5"
          >
            <span className="font-display text-5xl font-semibold tracking-tightest">
              {l.label}
            </span>
            <span className="font-mono text-xs text-bone/40 transition group-hover:text-flame">
              0{i + 1}
            </span>
          </motion.a>
        ))}
      </nav>
      <div className="relative px-page pb-10">
        <a
          href="#apply"
          onClick={onClose}
          className="flex w-full items-center justify-between rounded-full bg-flame px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-ink-900"
        >
          Bewirb dich jetzt
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}

function BoltSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2 3 14h7l-1 8 11-13h-7l0-7z" />
    </svg>
  );
}
