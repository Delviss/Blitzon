"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { login, register, setToken } from "@/lib/auth";

type Mode = "login" | "register";

export default function LoginClient() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res =
        mode === "login"
          ? await login(email, password)
          : await register(email, password, name || undefined);
      setToken(res.token);
      router.push("/account/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-ink-800/70 px-4 py-3.5 text-sm text-bone placeholder:text-bone/40 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/40";

  return (
    <div className="mx-auto w-full max-w-md">
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">· Konto</span>
      <h1 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
        {mode === "login" ? "Anmelden" : "Registrieren"}
      </h1>
      <p className="mt-4 text-sm text-bone/70">
        {mode === "login"
          ? "Melden Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort an."
          : "Erstellen Sie ein neues BlitzON Konto."}
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        {mode === "register" && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (optional)"
            autoComplete="name"
            className={inputClass}
          />
        )}
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail-Adresse"
          autoComplete="email"
          className={inputClass}
        />
        <input
          type="password"
          required
          minLength={mode === "register" ? 8 : undefined}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={mode === "register" ? "Passwort (mind. 8 Zeichen)" : "Passwort"}
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          className={inputClass}
        />

        {error && (
          <p className="rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-coral" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-2 rounded-full btn-gold px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Bitte warten…" : mode === "login" ? "Anmelden" : "Konto erstellen"}
          <span className="transition group-hover:translate-x-1">→</span>
        </button>
      </form>

      <p className="mt-6 text-sm text-bone/60">
        {mode === "login" ? "Noch kein Konto?" : "Bereits registriert?"}{" "}
        <button
          type="button"
          onClick={() => {
            setMode(mode === "login" ? "register" : "login");
            setError(null);
          }}
          className="font-semibold text-gold underline-offset-4 transition hover:underline"
        >
          {mode === "login" ? "Jetzt registrieren" : "Zum Login"}
        </button>
      </p>
    </div>
  );
}
