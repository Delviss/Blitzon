"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "@/components/system/RevealText";
import { asset } from "@/lib/asset";

const tiles = [
  {
    src: "/media/team-success.webp",
    label: "Top-Verkäufer · Zentrale München",
    span: "md:col-span-5 md:row-span-2"
  },
  {
    src: "/media/awards-2026.webp",
    label: "ProvenExpert Auszeichnungen 2026",
    span: "md:col-span-3"
  },
  {
    src: "/media/closer-call.webp",
    label: "Verkäufer im Kundengespräch",
    span: "md:col-span-4"
  },
  {
    src: "/media/lifestyle-bmw.webp",
    label: "Lifestyle der Top-Verkäufer",
    span: "md:col-span-4"
  },
  {
    src: "/media/team-trainee.webp",
    label: "Trainee · Jahrgang 04",
    span: "md:col-span-3"
  },
  {
    src: "/media/lifestyle-fleet.webp",
    label: "Teamtag Augsburg",
    span: "md:col-span-5"
  },
  {
    src: "/media/kodex-blitzon.webp",
    label: "Der BLITZON Kodex",
    span: "md:col-span-7"
  }
];

export default function Culture() {
  return (
    <section id="team" className="relative overflow-hidden border-t border-white/10 bg-ink-800 py-20 sm:py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Team und Kultur
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
              <RevealText as="span">Die Crew</RevealText>
              <span className="block">
                <RevealText as="span" className="flame-text">
                  hinter den Erfolgen.
                </RevealText>
              </span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-bone/85 md:text-lg">
              Du landest hier nicht in einem Job, sondern in einer Crew. Hohe Energie, voller Kalender, ehrliche Loyalität. Wir feiern jeden Erfolg, lernen aus jeder Niederlage und gehen die Extrameile gemeinsam.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-12 md:auto-rows-[180px] md:gap-4">
          {tiles.map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative col-span-1 aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-ink-900 md:aspect-auto ${t.span}`}
            >
              <Image
                src={asset(t.src)}
                alt={t.label}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="lazy"
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
              <figcaption className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2 text-[9px] uppercase tracking-[0.22em] text-bone sm:inset-x-4 sm:bottom-4 sm:text-[10px] sm:tracking-[0.28em]">
                <span className="truncate rounded-full bg-ink-900/80 px-2 py-1 backdrop-blur sm:px-3 sm:py-1.5">
                  {t.label}
                </span>
                <span className="hidden rounded-full border border-ember/40 bg-ink-900/70 px-2 py-1 font-mono text-[9px] tracking-[0.32em] text-ember md:inline">
                  Echt
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
