"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import type { EventItem } from "@/data/events";

// Registrations are collected directly in Jotform until a real backend/CRM exists.
const JOTFORM_ID = "261685632094059";

export default function EventRegistrationForm({ event }: { event: EventItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-gold/25 bg-ink-800 p-2 sm:p-4"
    >
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background: "radial-gradient(60% 60% at 100% 0%, rgba(212,175,55,0.16), transparent 70%)"
        }}
      />

      {shouldLoad ? (
        <>
          <iframe
            id={`JotFormIFrame-${JOTFORM_ID}`}
            title={`Anmeldung – ${event.title}`}
            src={`https://form.jotform.com/${JOTFORM_ID}`}
            loading="lazy"
            className="min-h-[720px] w-full rounded-xl border-0 sm:min-h-[780px]"
            scrolling="no"
            allow="geolocation; microphone; camera; fullscreen"
          />

          <Script
            src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
            strategy="lazyOnload"
            onLoad={() => {
              // @ts-expect-error injected globally by the Jotform embed script
              window.jotformEmbedHandler?.(
                `iframe[id='JotFormIFrame-${JOTFORM_ID}']`,
                "https://form.jotform.com"
              );
            }}
          />
        </>
      ) : (
        <div className="min-h-[720px] w-full animate-pulse rounded-xl bg-ink-800/40 sm:min-h-[780px]" />
      )}
    </div>
  );
}
