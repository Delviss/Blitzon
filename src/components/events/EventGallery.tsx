"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

export default function EventGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 auto-rows-[160px] gap-4 sm:gap-5 sm:auto-rows-[200px] md:grid-cols-4 md:grid-flow-dense">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 text-left outline-none transition-colors duration-300 hover:border-gold/50 focus-visible:border-gold/60 ${img.className ?? "row-span-1"}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 rounded-full border border-gold/40 bg-ink-900/80 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-gold opacity-0 transition group-hover:opacity-100">
              Ansehen
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-full max-w-2xl overflow-hidden rounded-2xl border border-gold/30"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                width={1200}
                height={1200}
                className="h-auto max-h-[85vh] w-auto"
              />
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Schließen"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 text-bone transition hover:border-gold/50 hover:text-gold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
