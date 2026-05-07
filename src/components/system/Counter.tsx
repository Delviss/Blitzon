"use client";

import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => {
    const n = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("de-DE");
    return `${prefix}${n}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, {
        duration,
        ease: [0.16, 1, 0.3, 1]
      });
      return controls.stop;
    }
  }, [inView, to, duration, value]);

  return (
    <motion.span ref={ref}>
      <motion.span>{display}</motion.span>
    </motion.span>
  );
}
