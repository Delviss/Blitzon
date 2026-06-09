"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    // Native scroll on touch devices: Lenis on touch costs CPU and clashes
    // with momentum scrolling. Keep it desktop-only.
    if (reduce || isTouch) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    // Defer the Lenis import + boot until the browser is idle so it never
    // competes with hydration, fonts or the LCP image. Falls back to a
    // microtask on browsers without requestIdleCallback (Safari).
    const boot = async () => {
      if (cancelled) return;
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        lerp: 0.08
      });

      let frame = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      cleanup = () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
      };
    };

    const ric =
      (window as typeof window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      }).requestIdleCallback;
    const handle = ric
      ? ric(boot, { timeout: 1500 })
      : (window.setTimeout(boot, 600) as unknown as number);

    return () => {
      cancelled = true;
      const cic = (window as typeof window & {
        cancelIdleCallback?: (h: number) => void;
      }).cancelIdleCallback;
      if (cic) cic(handle);
      else clearTimeout(handle as unknown as ReturnType<typeof setTimeout>);
      cleanup?.();
    };
  }, []);

  return null;
}
