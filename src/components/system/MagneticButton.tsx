"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  strength?: number;
  variant?: "primary" | "ghost" | "outline";
  children: React.ReactNode;
};

export default function MagneticButton({
  href,
  strength = 24,
  variant = "primary",
  children,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(((e.clientX - cx) / rect.width) * strength);
    y.set(((e.clientY - cy) / rect.height) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] transition-colors";
  const variants = {
    primary:
      "bg-brand text-bone hover:bg-brand-400 shadow-[0_18px_60px_-18px_rgba(3,124,194,0.65)] hover:shadow-[0_22px_70px_-16px_rgba(3,124,194,0.85)]",
    ghost:
      "bg-white/[0.05] text-bone hover:bg-white/[0.10] hover:border-brand/50 border border-white/15",
    outline:
      "border border-brand text-brand hover:bg-brand hover:text-bone"
  } as const;

  const inner = (
    <motion.span
      className="relative z-10 flex items-center gap-3"
      style={{ x: sx, y: sy }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="inline-block"
      >
        <a href={href} className={`${base} ${variants[variant]} ${className ?? ""}`}>
          {inner}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <button className={`${base} ${variants[variant]} ${className ?? ""}`} {...rest}>
        {inner}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>
    </motion.div>
  );
}
