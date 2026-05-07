"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/system/RevealText";

const tiles = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
    label: "Strategie-Session · Berlin HQ",
    span: "md:col-span-5 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80",
    label: "Quarterly Gala",
    span: "md:col-span-3"
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=80",
    label: "Closer Workshop",
    span: "md:col-span-4"
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80",
    label: "Top-Performer Retreat",
    span: "md:col-span-4"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    label: "Daily Standup",
    span: "md:col-span-3"
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80",
    label: "Lisbon Offsite",
    span: "md:col-span-5"
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
    label: "Onboarding Cohort 04",
    span: "md:col-span-7"
  }
];

export default function Culture() {
  return (
    <section id="team" className="relative overflow-hidden border-t border-white/5 bg-ink-800 py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
              · Team &amp; Kultur
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest">
              <RevealText as="span">Die Crew</RevealText>
              <span className="block">
                <RevealText as="span" className="flame-text">
                  hinter den Wins.
                </RevealText>
              </span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-bone/65 md:text-lg">
              Du joinst keinen Job — du joinst eine Crew. Hohe Energie, harter Kalender, echte
              Loyalität. Wir feiern jeden Win, lernen aus jedem Loss, und gehen die extra Meile —
              gemeinsam.
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
              className={`group relative col-span-1 overflow-hidden rounded-xl border border-white/5 bg-ink-900 ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-110 object-cover grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-bone/80">
                <span className="rounded-full bg-ink-900/70 px-3 py-1.5 backdrop-blur">
                  {t.label}
                </span>
                <span className="hidden rounded-full border border-white/10 bg-ink-900/60 px-2 py-1 font-mono text-[9px] tracking-[0.32em] text-flame md:inline">
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
