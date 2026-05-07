"use client";

import { useEffect, useState } from "react";

const cols = [
  {
    title: "Movement",
    links: [
      { label: "Über uns", href: "#movement" },
      { label: "Training", href: "#training" },
      { label: "Karriere-Pfad", href: "#career" },
      { label: "Team", href: "#team" }
    ]
  },
  {
    title: "Apply",
    links: [
      { label: "Open Roles", href: "#jobs" },
      { label: "Jetzt bewerben", href: "#apply" },
      { label: "Werkstudent", href: "#jobs" },
      { label: "Quereinsteiger", href: "#jobs" }
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "TikTok", href: "https://tiktok.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" }
    ]
  }
];

export default function Footer() {
  const [year, setYear] = useState<string>("2026");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-900">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-flame opacity-40" />

      <div className="mx-auto max-w-[1440px] px-page pt-24 pb-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
              · Class 04 · 2026
            </span>
            <h2 className="mt-3 font-display text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[0.85] tracking-tightest">
              <span className="block">Train.</span>
              <span className="block">Grow.</span>
              <span className="block flame-text">Earn.</span>
            </h2>
          </div>

          <a
            href="#apply"
            className="group inline-flex items-center gap-3 rounded-full bg-flame px-7 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-ink-900 transition hover:bg-flame-400"
          >
            Werde Teil der Bewegung
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-flame text-ink-900">
                <Bolt />
              </span>
              <span className="font-display text-base font-bold tracking-[0.2em]">BLITZON</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-bone/55">
              BLITZON ist eine moderne Sales-Akademie & Recruiting-Plattform mit Sitz in Berlin. Wir
              bauen die nächste Generation von Vertriebstalenten.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55">
              <span className="rounded-full border border-white/10 px-3 py-1.5">DACH</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5">B2B · B2C</span>
              <span className="rounded-full border border-flame/40 px-3 py-1.5 text-flame">Hiring</span>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">
                · {c.title}
              </span>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-bone/75 transition hover:text-flame"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">
              · HQ
            </span>
            <p className="mt-4 text-sm text-bone/75">
              BLITZON GmbH<br />
              Friedrichstr. 68<br />
              10117 Berlin
            </p>
            <p className="mt-3 text-sm text-bone/55">hello@blitzon.de</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 md:flex-row md:items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">
            © {year} BLITZON · Movement · Made in Berlin
          </span>
          <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.32em] text-bone/40">
            <a href="#" className="transition hover:text-bone">Impressum</a>
            <a href="#" className="transition hover:text-bone">Datenschutz</a>
            <a href="#" className="transition hover:text-bone">AGB</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden border-t border-white/5 py-8 md:py-12">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-[clamp(4rem,14vw,16rem)] font-extrabold uppercase leading-none tracking-tightest text-bone/[0.06]">
          {Array.from({ length: 4 }).map((_, k) => (
            <span key={k} className="flex items-center gap-12">
              BLITZON · BLITZON · BLITZON ·
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Bolt() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2 3 14h7l-1 8 11-13h-7l0-7z" />
    </svg>
  );
}
