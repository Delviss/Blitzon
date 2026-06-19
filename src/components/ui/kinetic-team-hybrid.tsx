'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface Props {
  members: TeamMember[];
}

export default function KineticTeamHybrid({ members }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  const activeImage = members.find((t) => t.id === activeId)?.image;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full cursor-default"
    >
      <div className="flex flex-col">
        {members.map((member, index) => (
          <TeamRow
            key={member.id}
            data={member}
            index={index}
            isActive={activeId === member.id}
            setActiveId={setActiveId}
            isMobile={isMobile}
            isAnyActive={activeId !== null}
          />
        ))}
      </div>

      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        >
          <AnimatePresence mode="wait">
            {activeId && activeImage && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative aspect-[4/5] w-64 overflow-hidden rounded-xl border border-white/10 bg-ink-800 shadow-2xl"
              >
                <Image
                  src={activeImage}
                  alt="Vorschau"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                    <span className="text-[10px] uppercase tracking-widest text-white/80">Aktiv</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

function TeamRow({
  data,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  data: TeamMember;
  index: number;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
}) {
  const isDimmed = isAnyActive && !isActive;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isDimmed ? 0.25 : 1,
        y: 0,
        backgroundColor:
          isActive && isMobile ? 'rgba(255,255,255,0.03)' : 'transparent',
      }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onMouseEnter={() => !isMobile && setActiveId(data.id)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      onClick={() => isMobile && setActiveId(isActive ? null : data.id)}
      className={`group relative border-t border-white/10 transition-colors duration-500 last:border-b ${
        isMobile ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      <div className="relative z-10 flex flex-col py-6 sm:py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <div className="flex items-baseline gap-5 pl-4 transition-transform duration-500 group-hover:translate-x-3 md:gap-10 md:pl-0">
          <span className="font-mono text-[10px] text-bone/30">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-2xl font-medium tracking-tight text-bone/60 transition-colors duration-300 group-hover:text-bone sm:text-3xl md:text-5xl">
            {data.name}
          </h3>
        </div>

        <div className="mt-3 flex items-center justify-between pl-12 pr-4 md:mt-0 md:justify-end md:gap-10 md:pl-0 md:pr-0">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember/70 transition-colors group-hover:text-ember">
            {data.role}
          </span>

          <div className="block md:hidden text-bone/40">
            {isActive ? <Minus size={16} /> : <Plus size={16} />}
          </div>

          <motion.div
            animate={{ x: isActive ? 0 : -8, opacity: isActive ? 1 : 0 }}
            className="hidden md:block text-ember"
          >
            <ArrowUpRight size={24} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMobile && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-ink-800/60"
          >
            <div className="p-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white">
                    {data.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
