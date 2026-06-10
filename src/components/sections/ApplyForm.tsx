"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

const steps = [
  { id: 1, label: "Profil" },
  { id: 2, label: "Ambition" },
  { id: 3, label: "Termin wählen" }
];

const goals = [
  "Sechsstellig in 12 Monaten",
  "Schneller Aufstieg",
  "Lifestyle und Reisen",
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
    role: "Vertriebs-Trainee",
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

  const sendApplicationEmail = () => {
    const subject = `Neue Bewerbung: ${data.name || "Unbekannt"} (${data.role})`;
    const lines = [
      "Neue Bewerbung über blitzon.de",
      "",
      `Name: ${data.name || "-"}`,
      `E-Mail: ${data.email || "-"}`,
      `Telefon / WhatsApp: ${data.phone || "-"}`,
      `Stadt: ${data.city || "-"}`,
      `Rolle: ${data.role || "-"}`,
      `Ziele: ${data.goals.length ? data.goals.join(", ") : "-"}`,
      `Wunschtermin Erstgespräch: ${data.slot || "-"}`,
      "",
      `Eingegangen: ${new Date().toLocaleString("de-DE")}`
    ];
    const body = lines.join("\n");
    const href = `mailto:Info@blitzon.de?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    if (typeof window !== "undefined") window.location.href = href;
  };

  const next = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      sendApplicationEmail();
      setSubmitted(true);
    }
  };

  return (
    <section id="apply" className="relative overflow-hidden bg-ink-900 py-20 sm:py-28 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full bg-ember/25 blur-[140px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-electric/20 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-coral/15 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
              · Jahrgang 04 · 2026
            </span>
            <h2 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
              Starte
              <span className="block flame-text">deine Reise.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm text-bone/85 sm:text-base md:text-lg">
              Wir lesen jede Bewerbung persönlich. Innerhalb von 24 Stunden bekommst du eine Antwort. Wenn es passt, telefonieren wir 20 Minuten. Ehrlich, locker, ohne Skript.
            </p>

            <ul className="mt-8 space-y-3 sm:space-y-4 md:mt-10">
              {[
                "Antwort innerhalb von 24 Stunden",
                "Komplett kostenlos, keine Verpflichtung",
                "Persönliches Erstgespräch statt Massenmail"
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-bone/85">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ember" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <a
                href="https://api.whatsapp.com/send/?phone=491707777270&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-moss/40 bg-moss/15 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-moss transition hover:border-moss hover:text-bone"
              >
                <span className="h-2 w-2 rounded-full bg-moss" />
                WhatsApp Direktkontakt
              </a>
              <a
                href="https://calendly.com/blitzon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-bone/85 transition hover:border-white/35"
              >
                Calendly Direkt-Buchung
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-ink-800 p-5 sm:p-6 md:p-10">
              <div
                className="absolute inset-0 -z-10 opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 60% at 0% 0%, rgba(31,169,255,0.18), transparent 70%)"
                }}
              />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/65">
                  Schritt 0{step + 1} / 0{steps.length}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ember">
                  {steps[step].label}
                </span>
              </div>

              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/15">
                <motion.div
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-ember via-coral to-electric"
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
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ember via-coral to-electric text-ink-900 shadow-[0_12px_40px_-12px_rgba(31,169,255,0.7)]">
                      ✓
                    </span>
                    <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      Du bist drin, {data.name.split(" ")[0] || "Champion"}.
                    </h3>
                    <p className="max-w-md text-bone/85">
                      Wir prüfen deine Bewerbung. Innerhalb von 24 Stunden hast du eine persönliche Antwort an <span className="text-ember">{data.email}</span> im Postfach.
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
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                        <Field label="Vor- und Nachname" required>
                          <input
                            value={data.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="Lina Müller"
                            required
                            className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                          />
                        </Field>
                        <Field label="E-Mail" required>
                          <input
                            type="email"
                            value={data.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="lina@gmail.com"
                            required
                            className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                          />
                        </Field>
                        <Field label="Telefon oder WhatsApp" required>
                          <input
                            type="tel"
                            value={data.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="+49 …"
                            required
                            className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
                          />
                        </Field>
                        <Field label="Stadt">
                          <input
                            value={data.city}
                            onChange={(e) => update("city", e.target.value)}
                            placeholder="München"
                            className="w-full bg-transparent py-3 text-base text-bone outline-none placeholder:text-bone/40"
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
                            className="w-full appearance-none bg-transparent py-3 text-base text-bone outline-none"
                          >
                            {[
                              "Vertriebs-Trainee",
                              "Vertriebsprofi",
                              "Senior-Kundenberater",
                              "Teamleiter",
                              "Werkstudent"
                            ].map((r) => (
                              <option key={r} className="bg-ink-800">
                                {r}
                              </option>
                            ))}
                          </select>
                        </Field>

                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/65">
                            Was treibt dich an? · Mehrfachauswahl
                          </span>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {goals.map((g) => (
                              <button
                                type="button"
                                key={g}
                                onClick={() => toggleGoal(g)}
                                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                                  data.goals.includes(g)
                                    ? "border-brand bg-brand text-bone shadow-[0_8px_28px_-10px_rgba(3,124,194,0.7)]"
                                    : "border-white/15 bg-white/[0.04] text-bone/85 hover:border-brand/50 hover:text-bone"
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
                        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone/65">
                          Wähl dein Erstgespräch · KW 23
                        </span>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                          {slots.map((s) => (
                            <button
                              type="button"
                              key={s}
                              onClick={() => update("slot", s)}
                              className={`group relative overflow-hidden rounded-xl border px-4 py-5 text-left transition ${
                                data.slot === s
                                  ? "border-brand bg-brand text-bone shadow-[0_12px_40px_-14px_rgba(3,124,194,0.7)]"
                                  : "border-white/15 bg-white/[0.04] text-bone hover:border-brand/50"
                              }`}
                            >
                              <span className="block font-mono text-[10px] uppercase tracking-[0.28em] opacity-80">
                                Termin
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
                        className="text-[11px] uppercase tracking-[0.22em] text-bone/65 transition hover:text-bone disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        ← Zurück
                      </button>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone shadow-[0_18px_60px_-18px_rgba(3,124,194,0.7)] transition hover:bg-brand-400 hover:shadow-[0_22px_70px_-16px_rgba(3,124,194,0.8)]"
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
    <label className="group block border-b border-white/15 transition focus-within:border-ember">
      <span className="block font-mono text-[10px] uppercase tracking-[0.32em] text-bone/60">
        {label} {required && <span className="text-ember">*</span>}
      </span>
      {children}
    </label>
  );
}
