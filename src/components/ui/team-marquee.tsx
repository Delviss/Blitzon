'use client';

import Image from 'next/image';

import { Marquee } from '@/components/ui/marquee';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface TeamMarqueeProps {
  members: TeamMember[];
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
}

export default function TeamMarquee({
  members,
  eyebrow,
  title,
  description,
}: TeamMarqueeProps) {
  return (
    <div className="relative w-full">
      <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center px-page text-center md:mb-20">
        {eyebrow && (
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-bone/60">{description}</p>
        )}
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-ink-900 to-transparent md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-ink-900 to-transparent md:w-32" />

        <Marquee className="[--gap:1.5rem]" pauseOnHover>
          {members.map((member) => (
            <div className="group flex w-64 shrink-0 flex-col" key={member.id}>
              <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-ink-800">
                <Image
                  alt={member.name}
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  fill
                  sizes="256px"
                  src={member.image}
                />
                <div className="absolute bottom-0 w-full rounded-b-2xl bg-ink-900/80 p-3 backdrop-blur-sm">
                  <h3 className="font-medium text-bone">{member.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember/70">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
