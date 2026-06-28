"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import type { EventItem } from "@/data/events";

// Registrations and ticket payments are collected directly via TicketPay.
const TICKETPAY_SHOP_URL = "https://shop.ticketpay.de/5SPXLYOX";

export default function EventRegistrationForm({ event }: { event: EventItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  // The TicketPay iframe pulls a heavy third-party document + its own JS/CSS, which
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
            id="tpiframe"
            title={`Anmeldung – ${event.title}`}
            src={TICKETPAY_SHOP_URL}
            className="min-h-[720px] w-full rounded-xl border-0 sm:min-h-[780px]"
            scrolling="no"
            frameBorder={0}
            onLoad={(e) => {
              const doc = e.currentTarget.ownerDocument as Document & { tpiframeCalled?: boolean };
              if (typeof doc.tpiframeCalled === "undefined") {
                doc.tpiframeCalled = true;
              } else {
                e.currentTarget.scrollIntoView();
              }
            }}
          />

          <Script id="ticketpay-resize-listener" strategy="lazyOnload">
            {`
              function receiveMessage(e) {
                var parts = e.data.split(":");
                var action = parts[0];
                var allowedOrigins = [
                  "https://organizer.ticketpay.de",
                  "https://ticketing.ticketpay.de",
                  "https://shop.ticketpay.de",
                  "https://preregistration.ticketpay.de"
                ];
                if (allowedOrigins.indexOf(e.origin) !== -1 && action === "resize") {
                  var iframes = document.getElementsByTagName("iframe");
                  for (var i = 0; i < iframes.length; i++) {
                    if ((iframes[i].contentWindow || iframes[i].documentWindow) === e.source) {
                      iframes[i].style.height = parts[1] + "px";
                      return;
                    }
                  }
                }
              }
              window.addEventListener("message", receiveMessage, false);
            `}
          </Script>
        </>
      ) : (
        <div className="flex min-h-[720px] w-full items-center justify-center rounded-xl text-sm text-bone/60 sm:min-h-[780px]">
          Anmeldeformular wird geladen…
        </div>
      )}
    </div>
  );
}
