import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import LoginClient from "@/components/auth/LoginClient";

export const metadata: Metadata = {
  title: "Login | BlitzON Consulting",
  description: "Melden Sie sich bei Ihrem BlitzON Konto an."
};

export default function LoginPage() {
  return (
    <main className="relative">
      <Navbar />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-900 pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-flame opacity-60" />
          <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-electric/25 blur-[140px]" />
          <div className="absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-gold/15 blur-[140px]" />
        </div>
        <div className="mx-auto w-full max-w-[1440px] px-page">
          <LoginClient />
        </div>
      </section>
    </main>
  );
}
