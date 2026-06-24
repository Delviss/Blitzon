"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { EventSpeaker } from "@/data/events";
import { asset } from "@/lib/asset";

export default function SpeakerCard({ speaker, index = 0 }: { speaker: EventSpeaker; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="gold-card flex flex-col items-center rounded-2xl bg-ink-800/60 p-6 text-center backdrop-blur-xl sm:p-8"
    >
      {speaker.image ? (
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gold/40 sm:h-28 sm:w-28">
          <Image
            src={asset(speaker.image)}
            alt={speaker.name}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-electric/20 via-ink-700 to-gold/15 font-display text-2xl font-bold text-gold sm:h-28 sm:w-28">
          {speaker.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      )}
      <h3 className="mt-5 font-display text-lg font-semibold text-bone sm:text-xl">{speaker.name}</h3>
      <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-gold">{speaker.role}</span>
      <p className="mt-3 text-sm text-bone/75">{speaker.bio}</p>
    </motion.div>
  );
}
