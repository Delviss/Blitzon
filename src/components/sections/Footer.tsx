"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

type FooterLink = { label: string; href?: string };
type FooterCol = { title: string; links: FooterLink[] };

const cols: FooterCol[] = [
  {
    title: "Bewegung",
    links: [
      { label: "Über uns", href: "#movement" },
      { label: "Training", href: "#training" },
      { label: "Karriere-Pfad", href: "#career" },
      { label: "Team", href: "#team" }
    ]
  },
  {
    title: "Bewerben",
    links: [
      { label: "Offene Rollen", href: "#jobs" },
      { label: "Jetzt bewerben", href: "#apply" },
      { label: "Werkstudent", href: "#jobs" },
      { label: "Quereinsteiger", href: "#jobs" }
    ]
  },
  {
    title: "Kontakt",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/blitzonconsulting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@blitzon_consulting?is_from_webapp=1&sender_device=pc"
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/blitzon/" },
      { label: "YouTube · bald verfügbar" }
    ]
  }
];

export default function Footer() {
  const [year, setYear] = useState<string>("2026");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-flame opacity-50" />

      <div className="mx-auto max-w-[1440px] px-page pt-16 pb-12 sm:pt-20 sm:pb-14 md:pt-24 md:pb-16">
        <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Jahrgang 04 · 2026
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.25rem,9vw,9rem)] font-bold uppercase leading-[0.88] tracking-tightest text-bone">
              <span className="block">Lerne.</span>
              <span className="block">Wachse.</span>
              <span className="block flame-text">Verdien.</span>
            </h2>
          </div>

          <a
            href="#apply"
            className="group inline-flex w-full items-center justify-between gap-3 rounded-full btn-gold px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] sm:w-auto sm:px-7 sm:py-5 sm:text-xs sm:tracking-[0.22em]"
          >
            Werde Teil der Bewegung
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:gap-10 md:mt-20 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src={asset("/logo/blitzon-mark-transparent.webp")}
                alt="BlitzON Consulting"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 object-contain drop-shadow-[0_8px_24px_rgba(31,169,255,0.45)]"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold tracking-[0.2em] text-bone">BlitzON</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-bone/60">
                  Consulting · Energie. Vertrieb. Leistung.
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-bone/75">
              BlitzON ist eine moderne Vertriebsakademie und Recruiting-Plattform mit Standorten in München und Augsburg. Wir bauen die nächste Generation deutscher Vertriebstalente.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-bone/75">
              <span className="rounded-full border border-white/15 px-3 py-1.5">DACH</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">B2B · B2C</span>
              <span className="rounded-full border border-ember/50 bg-ember/10 px-3 py-1.5 text-ember">Wir stellen ein</span>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">
                · {c.title}
              </span>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => {
                  const isExternal = l.href?.startsWith("http");
                  return (
                    <li key={l.label}>
                      {l.href ? (
                        <a
                          href={l.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="text-sm text-bone/85 transition hover:text-ember"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <span className="text-sm text-bone/50">{l.label}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">
              · Zentrale
            </span>
            <p className="mt-4 text-sm text-bone/85">
              BlitzON Consulting OHG<br />
              Radlkoferstraße 2<br />
              81373 München
            </p>
            <p className="mt-3 text-sm text-bone/75">
              <a href="mailto:Info@blitzon.de" className="transition hover:text-ember">
                Info@blitzon.de
              </a>
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55">
              · Standort 02 · Augsburg
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 text-[11px] text-bone/60 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55">
              · Pflichtangaben gem. § 5 TMG
            </p>
            <p className="mt-2 leading-relaxed">
              BlitzON Consulting OHG · Radlkoferstraße 2 · 81373 München ·
              Persönlich haftende Gesellschafter: Hasan Blitz, Leon-Paul Ishimwe Harelimana ·
              Registergericht: Amtsgericht München · HRA 121039 ·
              Verantwortlich i.S.d. § 18 Abs. 2 MStV: Hasan Blitz · Info@blitzon.de
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55">
              · Standorte
            </p>
            <p className="mt-2">
              München · Radlkoferstraße 2 · 81373 München<br />
              Augsburg · Büro DACH-Süd
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">
            © {year} BlitzON Consulting OHG · Bewegung · Umgesetzt von{" "}
            <a
              href="https://descale.services/it"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-bone"
            >
              Descale Services
            </a>
          </span>
          <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.32em] text-bone/55">
            <a href="https://blitzon.de/Impressum.html" className="transition hover:text-bone">Impressum</a>
            <a href="https://blitzon.de/Datenschutz.html" className="transition hover:text-bone">Datenschutz</a>
            <a href="https://blitzon.de/AGB.html" className="transition hover:text-bone">AGB</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden border-t border-white/10 py-8 md:py-12">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-[clamp(4rem,14vw,16rem)] font-extrabold uppercase leading-none tracking-tightest text-bone/[0.07]">
          {Array.from({ length: 4 }).map((_, k) => (
            <span key={k} className="flex items-center gap-12">
              BlitzON · BlitzON · BlitzON ·
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
