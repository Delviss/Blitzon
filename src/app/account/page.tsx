import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import AccountClient from "@/components/auth/AccountClient";

export const metadata: Metadata = {
  title: "Mein Konto | BlitzON Consulting",
  description: "Ihr BlitzON Konto."
};

export default function AccountPage() {
  return (
    <main className="relative">
      <Navbar />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-900 pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-flame opacity-60" />
          <div className="absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-gold/15 blur-[140px]" />
        </div>
        <div className="mx-auto w-full max-w-[1440px] px-page">
          <AccountClient />
        </div>
      </section>
    </main>
  );
}
