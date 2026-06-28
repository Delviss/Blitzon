"use client";

import { motion } from "framer-motion";
import type { EventAgendaItem } from "@/data/events";

export default function AgendaTimeline({ items }: { items: EventAgendaItem[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-[3.25rem] top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 via-electric/40 to-transparent sm:block" />
      <ul className="space-y-4">
        {items.map((item, i) => (
          <motion.li
            key={item.time}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-ink-800/50 px-4 py-4 backdrop-blur-xl transition-colors duration-300 hover:border-gold/40 sm:gap-6 sm:px-6"
          >
            <span className="relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full border border-gold/40 bg-ink-900 px-1 font-mono font-semibold text-gold sm:h-20 sm:w-20">
              {(() => {
                const [prefix, ...rest] = item.time.split(" ");
                const clock = rest.join(" ");
                return (
                  <>
                    <span className="text-[9px] leading-none tracking-wide sm:text-[10px]">{prefix}</span>
                    <span className="text-[11px] leading-none sm:text-xs">{clock}</span>
                  </>
                );
              })()}
            </span>
            <span className="font-display text-base font-semibold text-bone sm:text-lg">
              {item.title}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
