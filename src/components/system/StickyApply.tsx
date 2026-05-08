"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StickyApply() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? y / max : 0;
      setShow(y > window.innerHeight * 0.6 && ratio < 0.94);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 18, stiffness: 200 }}
          className="safe-pb fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:bottom-5 sm:right-5 sm:gap-3 md:bottom-7 md:right-7"
        >
          <a
            href="https://wa.me/4915123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-12 items-center gap-2 rounded-full border border-white/15 bg-ink-700/80 px-4 text-xs uppercase tracking-[0.2em] text-bone backdrop-blur-md transition hover:border-moss/60 hover:text-moss md:flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
            </span>
            WhatsApp
          </a>
          <a
            href="#apply"
            className="group relative flex h-11 items-center gap-2 overflow-hidden rounded-full bg-brand px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-bone shadow-[0_10px_40px_-10px_rgba(3,124,194,0.7)] transition hover:bg-brand-400 hover:shadow-[0_14px_50px_-10px_rgba(3,124,194,0.85)] sm:h-12 sm:px-5 sm:text-xs sm:tracking-[0.2em] md:px-6"
          >
            <span className="relative z-10">Bewirb dich</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
