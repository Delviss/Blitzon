"use client";

import { useEffect, useState } from "react";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(target: string): Remaining {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000)
  };
}

export default function Countdown({ target }: { target: string }) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining(target));
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: { label: string; value: number }[] = [
    { label: "Tage", value: remaining?.days ?? 0 },
    { label: "Stunden", value: remaining?.hours ?? 0 },
    { label: "Minuten", value: remaining?.minutes ?? 0 },
    { label: "Sekunden", value: remaining?.seconds ?? 0 }
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4" aria-live="polite">
      {units.map((u) => (
        <div
          key={u.label}
          className="gold-card flex flex-col items-center rounded-xl bg-ink-800/70 px-2 py-4 backdrop-blur-xl sm:px-4 sm:py-6"
        >
          <span className="font-display text-2xl font-bold tabular-nums text-bone sm:text-4xl md:text-5xl">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] text-gold sm:text-[10px]">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
