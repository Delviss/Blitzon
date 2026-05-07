"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "@/components/system/RevealText";
import { asset } from "@/lib/asset";

const tiles = [
  {
    src: "/media/team-success.jpg",
    label: "Top-Performer · München HQ",
    span: "md:col-span-5 md:row-span-2"
  },
  {
    src: "/media/awards-2026.jpg",
    label: "ProvenExpert Awards 2026",
    span: "md:col-span-3"
  },
  {
    src: "/media/closer-call.jpg",
    label: "Closer im Kundengespräch",
    span: "md:col-span-4"
  },
  {
    src: "/media/lifestyle-bmw.jpg",
    label: "Top-Performer Lifestyle",
    span: "md:col-span-4"
  },
  {
    src: "/media/team-trainee.jpg",
    label: "Trainee · Class 04",
    span: "md:col-span-3"
  },
  {
    src: "/media/lifestyle-fleet.jpg",
    label: "Augsburg Offsite",
    span: "md:col-span-5"
  },
  {
    src: "/media/kodex-blitzon.jpg",
    label: "Der BLITZON Kodex",
    span: "md:col-span-7"
  }
];

export default function Culture() {
  return (
    <section id="team" className="relative overflow-hidden border-t border-white/10 bg-ink-800 py-32 md:py-40">
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
                  hinter den Wins.
                </RevealText>
              </span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-bone/85 md:text-lg">
              Du landest hier nicht in einem Job, sondern in einer Crew. Hohe Energie, voller Kalender, ehrliche Loyalität. Wir feiern jeden Win, lernen aus jedem Loss und gehen die extra Meile gemeinsam.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-12 md:auto-rows-[180px] md:gap-4">
          {tiles.map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative col-span-1 overflow-hidden rounded-xl border border-white/10 bg-ink-900 ${t.span}`}
            >
              <Image
                src={asset(t.src)}
                alt={t.label}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-bone">
                <span className="rounded-full bg-ink-900/80 px-3 py-1.5 backdrop-blur">
                  {t.label}
                </span>
                <span className="hidden rounded-full border border-ember/40 bg-ink-900/70 px-2 py-1 font-mono text-[9px] tracking-[0.32em] text-ember md:inline">
                  IRL
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
