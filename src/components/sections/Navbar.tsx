"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

const MotionLink = motion(Link);

const links = [
  { href: "/#movement", label: "Bewegung" },
  { href: "/#training", label: "Training" },
  { href: "/#career", label: "Karriere" },
  { href: "/#team", label: "Team" },
  { href: "/#jobs", label: "Jobs" },
  { href: "/events/", label: "Events" },
  { href: "/login/", label: "Login" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);

  useEffect(() => {
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        setScrolled((prev) => {
          const next = window.scrollY > 24;
          return prev === next ? prev : next;
        });
      });
    };
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
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold via-gold-light to-gold-dark"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-page py-4 md:py-5">
          <a href="/" className="group relative flex items-center gap-2 sm:gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
              <Image
                src={asset("/logo/blitzon-mark-transparent.webp")}
                alt="BlitzON"
                width={36}
                height={36}
                priority
                className="h-8 w-8 object-contain drop-shadow-[0_6px_18px_rgba(212,175,55,0.45)] transition-transform duration-500 group-hover:scale-105 sm:h-9 sm:w-9"
              />
            </span>
            <span className="font-display text-base font-bold tracking-[0.16em] text-bone sm:text-lg sm:tracking-[0.18em]">BlitzON</span>
            <span className="hidden font-mono text-[10px] tracking-[0.3em] text-gold/80 sm:inline">/ DE</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.24em] text-bone/80 transition hover:text-gold"
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/#apply"
              className="group hidden h-10 items-center gap-2 rounded-full btn-gold px-4 text-[10px] font-semibold uppercase tracking-[0.2em] sm:inline-flex sm:h-11 sm:px-5 sm:text-[11px] sm:tracking-[0.22em]"
            >
              Bewerben
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button
              type="button"
              aria-label="Menü öffnen"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-ink-700/40 transition hover:border-gold sm:h-11 sm:w-11 lg:hidden"
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
      <div className="relative flex items-center justify-between px-page py-4 sm:py-5">
        <span className="flex items-center gap-2 sm:gap-2.5">
          <Image
            src={asset("/logo/blitzon-mark-transparent.webp")}
            alt="BlitzON"
            width={36}
            height={36}
            loading="lazy"
            className="h-8 w-8 object-contain drop-shadow-[0_6px_18px_rgba(212,175,55,0.45)] sm:h-9 sm:w-9"
          />
          <span className="font-display text-base font-bold tracking-[0.16em] text-bone sm:text-lg sm:tracking-[0.18em]">BlitzON</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Menü schließen"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-2xl text-bone sm:h-11 sm:w-11"
        >
          ×
        </button>
      </div>
      <nav className="relative flex flex-1 flex-col justify-center gap-3 overflow-y-auto px-page py-6 sm:gap-4">
        {links.map((l, i) => (
          <MotionLink
            key={l.href}
            href={l.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-baseline justify-between gap-3 border-b border-white/10 py-3 sm:py-5"
          >
            <span className="font-display text-3xl font-semibold tracking-tightest text-bone sm:text-4xl md:text-5xl">
              {l.label}
            </span>
            <span className="font-mono text-xs text-bone/55 transition group-hover:text-gold">
              0{i + 1}
            </span>
          </MotionLink>
        ))}
      </nav>
      <div className="safe-pb relative px-page pb-6 sm:pb-10">
        <a
          href="/#apply"
          onClick={onClose}
          className="flex w-full items-center justify-between rounded-full btn-gold px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] sm:px-6 sm:py-5 sm:text-sm"
        >
          Bewirb dich
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}
