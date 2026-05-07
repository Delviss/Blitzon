"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

const steps = [
  { id: 1, label: "Profil" },
  { id: 2, label: "Ambition" },
  { id: 3, label: "Slot wählen" }
];

const goals = [
  "6-stellig in 12 Monaten",
  "Schneller Aufstieg",
  "Lifestyle & Reisen",
  "Eigenes Team führen",
  "Karrierewechsel"
];

const slots = [
  "Mo · 09:30",
  "Mo · 14:00",
  "Di · 11:00",
  "Mi · 16:30",
  "Do · 10:00",
  "Fr · 13:00"
];

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "Sales Trainee",
    goals: [] as string[],
    slot: ""
  });

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const update = <K extends keyof typeof data>(k: K, v: (typeof data)[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleGoal = (g: string) =>
    setData((d) => ({
      ...d,
      goals: d.goals.includes(g) ? d.goals.filter((x) => x !== g) : [...d.goals, g]
    }));

  const next = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (step < steps.length - 1) setStep((s) => s + 1);
    else setSubmitted(true);
  };

  return (
    <section id="apply" className="relative overflow-hidden bg-ink-900 py-32 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full bg-flame/15 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-copper/15 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
              · Class 04 · 2026
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest">
              Starte
              <span className="block flame-text">deine Reise.</span>
            </h2>
            <p className="mt-6 max-w-md text-base text-bone/65 md:text-lg">
              Wir prüfen deine Bewerbung in 24h. Wenn es passt, gibt es ein erstes 20-Minuten-Call —
              persönlich, ehrlich, ohne Bullshit.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Antwort innerhalb von 24h",
                "100% kostenfrei · keine Verpflichtung",
                "Persönliches Discovery-Call"
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-bone/70">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-flame" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://wa.me/4915123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                WhatsApp Quick-Connect
              </a>
              <a
                href="https://calendly.com/blitzon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-bone/80 transition hover:border-white/30"
              >
                Calendly Direkt-Buchung
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 md:p-10">
              <div
                className="absolute inset-0 -z-10 opacity-50"
                style={{
                  background:
                    "radial-gradient(60% 60% at 0% 0%, rgba(255,90,31,0.18), transparent 70%)"
                }}
              />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/50">
                  Step 0{step + 1} / 0{steps.length}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-flame">
                  {steps[step].label}
                </span>
              </div>

              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-flame to-copper"
                />
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    className="mt-12 flex flex-col items-start gap-6 text-bone"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flame text-ink-900">
                      ✓
                    </span>
                    <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      Du bist drin, {data.name.split(" ")[0] || "Champion"}.
                    </h3>
                    <p className="max-w-md text-bone/70">
                      Wir checken deine Bewerbung jetzt. Du bekommst innerhalb von 24h eine
                      persönliche Antwort an <span className="text-flame">{data.email}</span>.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key={step}
                    onSubmit={next}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4 }}
                    className="mt-10 space-y-8"
                  >
                    {step === 0 && (
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Field label="Vor- und Nachname" required>
                          <input
                            value={data.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="Lina Müller"
                            required
                            className="w-full bg-transparent py-3 text-base outline-none placeholder:text-bone/30"
                          />
                        </Field>
                        <Field label="E-Mail" required>
                          <input
                            type="email"
                            value={data.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="lina@gmail.com"
                            required
                            className="w-full bg-transparent py-3 text-base outline-none placeholder:text-bone/30"
                          />
                        </Field>
                        <Field label="Telefon · Whatsapp" required>
                          <input
                            type="tel"
                            value={data.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="+49 …"
                            required
                            className="w-full bg-transparent py-3 text-base outline-none placeholder:text-bone/30"
                          />
                        </Field>
                        <Field label="Stadt">
                          <input
                            value={data.city}
                            onChange={(e) => update("city", e.target.value)}
                            placeholder="Berlin"
                            className="w-full bg-transparent py-3 text-base outline-none placeholder:text-bone/30"
                          />
                        </Field>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="space-y-6">
                        <Field label="Welche Rolle reizt dich am meisten?">
                          <select
                            value={data.role}
                            onChange={(e) => update("role", e.target.value)}
                            className="w-full appearance-none bg-transparent py-3 text-base outline-none"
                          >
                            {[
                              "Sales Trainee",
                              "High-Ticket Closer",
                              "Senior Account Closer",
                              "Team Lead",
                              "Werkstudent"
                            ].map((r) => (
                              <option key={r} className="bg-ink-800">
                                {r}
                              </option>
                            ))}
                          </select>
                        </Field>

                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/50">
                            Was treibt dich? · multi
                          </span>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {goals.map((g) => (
                              <button
                                type="button"
                                key={g}
                                onClick={() => toggleGoal(g)}
                                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                                  data.goals.includes(g)
                                    ? "border-flame bg-flame text-ink-900"
                                    : "border-white/10 bg-white/[0.02] text-bone/70 hover:border-white/30"
                                }`}
                              >
                                {g}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/50">
                          Wähle einen Discovery-Call Slot · KW 23
                        </span>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                          {slots.map((s) => (
                            <button
                              type="button"
                              key={s}
                              onClick={() => update("slot", s)}
                              className={`group relative overflow-hidden rounded-xl border px-4 py-5 text-left transition ${
                                data.slot === s
                                  ? "border-flame bg-flame text-ink-900"
                                  : "border-white/10 bg-white/[0.02] text-bone/80 hover:border-white/30"
                              }`}
                            >
                              <span className="block font-mono text-[10px] uppercase tracking-[0.28em] opacity-70">
                                Slot
                              </span>
                              <span className="mt-1 block font-display text-xl font-semibold">{s}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                      <button
                        type="button"
                        disabled={step === 0}
                        onClick={() => setStep((s) => Math.max(0, s - 1))}
                        className="text-[11px] uppercase tracking-[0.22em] text-bone/50 transition hover:text-bone disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        ← Zurück
                      </button>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-full bg-flame px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 transition hover:bg-flame-400"
                      >
                        {step === steps.length - 1 ? "Bewerbung absenden" : "Weiter"}
                        <span className="transition group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  required
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="group block border-b border-white/10 transition focus-within:border-flame">
      <span className="block font-mono text-[10px] uppercase tracking-[0.32em] text-bone/45">
        {label} {required && <span className="text-flame">*</span>}
      </span>
      {children}
    </label>
  );
}
