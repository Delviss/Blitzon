"use client";

import Script from "next/script";
import type { EventItem } from "@/data/events";

// Registrations are collected directly in Jotform until a real backend/CRM exists.
const JOTFORM_ID = "261685632094059";

export default function EventRegistrationForm({ event }: { event: EventItem }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-ink-800 p-2 sm:p-4">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background: "radial-gradient(60% 60% at 100% 0%, rgba(212,175,55,0.16), transparent 70%)"
        }}
      />

      <iframe
        id={`JotFormIFrame-${JOTFORM_ID}`}
        title={`Anmeldung – ${event.title}`}
        src={`https://form.jotform.com/${JOTFORM_ID}`}
        className="min-h-[720px] w-full rounded-xl border-0 sm:min-h-[780px]"
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
    </div>
  );
}
