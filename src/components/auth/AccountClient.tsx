"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthUser, clearToken, fetchMe, getToken } from "@/lib/auth";

export default function AccountClient() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/login/");
      return;
    }
    fetchMe(token)
      .then((res) => setUser(res.user))
      .catch(() => {
        clearToken();
        router.replace("/login/");
      })
      .finally(() => setLoading(false));
  }, [router]);

  function logout() {
    clearToken();
    router.replace("/login/");
  }

  if (loading || !user) {
    return <p className="text-center font-mono text-sm text-bone/60">Konto wird geladen…</p>;
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">· Mein Konto</span>
      <h1 className="mt-4 font-display text-display-md uppercase tracking-tightest text-bone">
        Willkommen{user.name ? `, ${user.name}` : ""}.
      </h1>

      <dl className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-ink-800/60 p-6">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/50">E-Mail</dt>
          <dd className="mt-1 text-sm text-bone">{user.email}</dd>
        </div>
        {user.name && (
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/50">Name</dt>
            <dd className="mt-1 text-sm text-bone">{user.name}</dd>
          </div>
        )}
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/50">Rolle</dt>
          <dd className="mt-1 text-sm text-bone">{user.role === "admin" ? "Administrator" : "Mitglied"}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={logout}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone transition hover:border-gold hover:text-gold"
      >
        Abmelden
      </button>
    </div>
  );
}
