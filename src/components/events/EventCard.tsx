"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { EventItem } from "@/data/events";

const MotionLink = motion(Link);

export default function EventCard({ event, index = 0 }: { event: EventItem; index?: number }) {
  return (
    <MotionLink
      href={`/events/${event.slug}/`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group gold-card relative flex flex-col overflow-hidden rounded-2xl bg-ink-800/60 p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1.5 sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-flame opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.26em] text-gold">
          {event.category}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-bone/55">
          {event.dateLabel}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-bone sm:text-3xl">
        {event.title}
      </h3>

      <p className="mt-3 text-sm text-bone/75 sm:text-base">{event.shortDescription}</p>

      <div className="mt-5 flex items-center gap-2 text-sm text-bone/65">
        <span className="h-1.5 w-1.5 rounded-full bg-electric" />
        {event.locationShort}
      </div>

      <div className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
        {event.ctaLabel}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </MotionLink>
  );
}
