"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import type { EventItem } from "@/data/events";

// Registrations are collected directly in Jotform until a real backend/CRM exists.
const JOTFORM_ID = "261685632094059";

export default function EventRegistrationForm({ event }: { event: EventItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  // The Jotform iframe pulls a heavy third-party document + its own JS/CSS, which
  // competes with the page's own resources for bandwidth if loaded eagerly. Only
  // start fetching it once the registration section is about to enter view.
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
      { rootMargin: "300px 0px" }
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
            className="min-h-[720px] w-full rounded-xl border-0 sm:min-h-[780px]"
            loading="lazy"
            scrolling="no"
            allow="geolocation; microphone; camera; fullscreen"
          />

          <Script
            src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
            strategy="afterInteractive"
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
        <div className="flex min-h-[720px] w-full items-center justify-center rounded-xl text-sm text-bone/60 sm:min-h-[780px]">
          Anmeldeformular wird geladen…
        </div>
      )}
    </div>
  );
}
