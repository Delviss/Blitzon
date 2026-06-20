'use client';

import TeamMarquee from '@/components/ui/team-marquee';
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
  // ── Gründer & Geschäftsführer ─────────────────────────────────────
  {
    id: '01',
    name: 'H. Blitz',
    role: 'Gründer & Geschäftsführer',
    image: asset('/media/team/blitz.jpg'),
  },
  {
    id: '02',
    name: 'L. Harelimana',
    role: 'Gründer & Geschäftsführer',
    image: asset('/media/team/harelimana.jpg'),
  },
  // ── Ausbilder ─────────────────────────────────────────────────────
  {
    id: '03',
    name: 'H. Aliyar',
    role: 'Ausbilder',
    image: asset('/media/team/aliyar.jpg'),
  },
  {
    id: '04',
    name: 'D. May',
    role: 'Ausbilder',
    image: asset('/media/team/may.jpg'),
  },
  {
    id: '05',
    name: 'M. Mory',
    role: 'Ausbilder',
    image: asset('/media/team/mory.jpg'),
  },
  // ── Rookies ───────────────────────────────────────────────────────
  {
    id: '06',
    name: 'G. Soumalia',
    role: 'Rookie',
    image: asset('/media/team/soumalia.jpg'),
  },
  {
    id: '07',
    name: 'D. Berger',
    role: 'Rookie',
    image: asset('/media/team/berger_d.jpg'),
  },
  {
    id: '08',
    name: 'L. Rosa',
    role: 'Rookie',
    image: asset('/media/team/rosa.jpg'),
  },
  {
    id: '09',
    name: 'N. Dullovi',
    role: 'Rookie',
    image: asset('/media/team/dullovi.jpg'),
  },
  {
    id: '10',
    name: 'D. Unrecht',
    role: 'Rookie',
    image: asset('/media/team/unrecht.jpg'),
  },
  // ── Recruiting Agent ──────────────────────────────────────────────
  {
    id: '11',
    name: 'J. Berger',
    role: 'Recruiting Agent',
    image: asset('/media/team/berger_j.jpg'),
  },
  // ── BlitzON-Partner ───────────────────────────────────────────────
  {
    id: '12',
    name: 'M. Will',
    role: 'BlitzON-Partner',
    image: asset('/media/team/will.jpg'),
  },
  {
    id: '13',
    name: 'A. Alrammahi',
    role: 'BlitzON-Partner',
    image: asset('/media/team/alrammahi.jpg'),
  },
];

export default function Team() {
  return (
    <section
      id="team-roster"
      className="relative overflow-hidden border-t border-white/10 bg-ink-900 py-20 sm:py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-flame opacity-20" />

      <TeamMarquee
        description="Die Menschen, die BlitzON jeden Tag antreiben — von der Gründung bis zum Vertrieb."
        eyebrow="· Das Team"
        members={TEAM}
        title={
          <>
            <RevealText as="span">Menschen</RevealText>
            <span className="block">
              <RevealText as="span" className="flame-text">
                hinter BlitzON.
              </RevealText>
            </span>
          </>
        }
      />
    </section>
  );
}
