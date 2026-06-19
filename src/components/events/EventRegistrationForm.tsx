"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { EventItem } from "@/data/events";

const interests = ["Karriere", "Vertrieb", "Praktikum", "Networking", "Sonstiges"];

// Notification inbox for every event lead, per the events lead-capture requirement.
const NOTIFICATION_EMAIL = "info@blitzonconsulting.de";

export default function EventRegistrationForm({ event }: { event: EventItem }) {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    interest: interests[0],
    consent: false
  });

  const update = <K extends keyof typeof data>(k: K, v: (typeof data)[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Neue Anmeldung – ${event.title} – ${data.firstName} ${data.lastName}`;
    const lines = [
      `Neue Event-Anmeldung über blitzonconsulting.de`,
      "",
      `Event: ${event.title}`,
      `Datum: ${event.dateLabel}`,
      "",
      `Vorname: ${data.firstName || "–"}`,
      `Nachname: ${data.lastName || "–"}`,
      `E-Mail: ${data.email || "–"}`,
      `Telefon: ${data.phone || "–"}`,
      `Alter: ${data.age || "–"}`,
      `Stadt: ${data.city || "–"}`,
      `Interesse: ${data.interest || "–"}`,
      "",
      `Eingegangen: ${new Date().toLocaleString("de-DE")}`
    ];
    const href = `mailto:${NOTIFICATION_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    if (typeof window !== "undefined") window.location.href = href;
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-ink-800 p-6 sm:p-8 md:p-10">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background: "radial-gradient(60% 60% at 100% 0%, rgba(212,175,55,0.16), transparent 70%)"
        }}
      />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="flex flex-col items-start gap-4 py-6 text-bone"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold via-gold-light to-gold-dark text-ink-900">
              ✓
            </span>
            <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Vielen Dank für Ihre Anmeldung.
            </h3>
            <p className="max-w-md text-bone/85">
              Wir freuen uns darauf, Sie am {event.title} persönlich begrüßen zu dürfen.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <Field label="Vorname" required>
                <input
                  value={data.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  required
                  className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                />
              </Field>
              <Field label="Nachname" required>
                <input
                  value={data.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  required
                  className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                />
              </Field>
              <Field label="E-Mail" required>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                  className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                />
              </Field>
              <Field label="Telefon" required>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required
                  className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                />
              </Field>
              <Field label="Alter">
                <input
                  type="number"
                  min={0}
                  value={data.age}
                  onChange={(e) => update("age", e.target.value)}
                  className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                />
              </Field>
              <Field label="Stadt">
                <input
                  value={data.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                />
              </Field>
              <Field label="Interesse">
                <select
                  value={data.interest}
                  onChange={(e) => update("interest", e.target.value)}
                  className="w-full appearance-none bg-transparent py-3 text-base text-bone outline-none"
                >
                  {interests.map((i) => (
                    <option key={i} className="bg-ink-800">
                      {i}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <label className="flex items-start gap-3 text-sm text-bone/80">
              <input
                type="checkbox"
                required
                checked={data.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent accent-[#D4AF37]"
              />
              Ich akzeptiere die Datenschutzbestimmungen.
            </label>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full btn-gold px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] sm:w-auto"
            >
              Kostenlos anmelden
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="group block border-b border-white/15 transition focus-within:border-gold">
      <span className="block font-mono text-[10px] uppercase tracking-[0.32em] text-bone/60">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
