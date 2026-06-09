'use client';

import KineticTeamHybrid from '@/components/ui/kinetic-team-hybrid';
import RevealText from '@/components/system/RevealText';
import { asset } from '@/lib/asset';

/* ------------------------------------------------------------------ */
/*  Team roster — ordered by rank:                                      */
/*  1. Gründer / Co-Founder & CEO                                       */
/*  2. Ausbilder                                                        */
/*  3. Rookie                                                           */
/*  4. Recruiting Agent                                                 */
/*  5. BlitzON-Partner                                                  */
/* ------------------------------------------------------------------ */

const TEAM = [
  // ── Gründer ──────────────────────────────────────────────────────
  {
    id: '01',
    name: 'H. Blitz',
    role: 'Gründer & Geschäftsführer',
    image: asset('/media/team/blitz.webp'),
  },
  {
    id: '02',
    name: 'H. Leon',
    role: 'Gründer & Geschäftsführer',
    image: asset('/media/team/leon.webp'),
  },
  {
    id: '03',
    name: 'L. Harelimana',
    role: 'Gründer',
    image: asset('/media/team/harelimana.jpg'),
  },
  // ── Ausbilder ─────────────────────────────────────────────────────
  {
    id: '04',
    name: 'H. Aliyar',
    role: 'Ausbilder',
    image: asset('/media/team/hojat.webp'),
  },
  // ── Rookies ───────────────────────────────────────────────────────
  {
    id: '05',
    name: 'M. Mory',
    role: 'Rookie',
    image: asset('/media/team/mory.webp'),
  },
  {
    id: '06',
    name: 'D. Unrecht',
    role: 'Rookie',
    image: asset('/media/team/unrecht.jpg'),
  },
  {
    id: '07',
    name: 'D. Berger',
    role: 'Rookie',
    image: asset('/media/team/berger_d.jpg'),
  },
  {
    id: '08',
    name: 'N. Dullovi',
    role: 'Rookie',
    image: asset('/media/team/dullovi.jpg'),
  },
  {
    id: '09',
    name: 'A. Ghaffar',
    role: 'Rookie',
    image: asset('/media/team/ghaffar.jpg'),
  },
  {
    id: '10',
    name: 'Lucas Rosa',
    role: 'Rookie',
    image: asset('/media/team/rosa.jpg'),
  },
  // ── Recruiting Agent ──────────────────────────────────────────────
  {
    id: '11',
    name: 'Jana Berger',
    role: 'Recruiting Agent',
    image: asset('/media/team/berger_j.jpg'),
  },
  // ── BlitzON-Partner ───────────────────────────────────────────────
  {
    id: '12',
    name: 'A. Alrammahi',
    role: 'BlitzON-Partner',
    image: asset('/media/team/alrammahi.jpg'),
  },
  {
    id: '13',
    name: 'Michael Will',
    role: 'BlitzON-Partner',
    image: asset('/media/team/will.jpg'),
  },
  {
    id: '14',
    name: 'Jan Atesli',
    role: 'BlitzON-Partner',
    image: asset('/media/team/atesli.jpg'),
  },
];

export default function Team() {
  return (
    <section
      id="team-roster"
      className="relative overflow-hidden border-t border-white/10 bg-ink-900 py-20 sm:py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-flame opacity-20" />

      <div className="mx-auto max-w-[1440px] px-page">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Das Team
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
              <RevealText as="span">Menschen</RevealText>
              <span className="block">
                <RevealText as="span" className="flame-text">
                  hinter BlitzON.
                </RevealText>
              </span>
            </h2>
          </div>

          {/* Rank legend — visible on md+ */}
          <div className="hidden flex-col gap-2 md:flex">
            {[
              'Gründer & Geschäftsführer',
              'Ausbilder',
              'Rookie',
              'Recruiting Agent',
              'BlitzON-Partner',
            ].map((rank, i) => (
              <div key={rank} className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-bone/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-bone/50">
                  {rank}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Kinetic list */}
        <KineticTeamHybrid members={TEAM} />
      </div>
    </section>
  );
}
