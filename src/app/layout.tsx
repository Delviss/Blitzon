import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/system/SmoothScroll";
import CustomCursor from "@/components/system/CustomCursor";
import StickyApply from "@/components/system/StickyApply";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "BLITZON — Wo ehrgeizige Menschen gewinnen",
  description:
    "BLITZON ist die nächste Generation des Vertriebs. Elite-Training, echtes Einkommen, kompromisslose Karriere. Bewirb dich für das Movement.",
  keywords: [
    "Sales Ausbildung Deutschland",
    "Vertrieb Karriere",
    "Sales Training Germany",
    "Karriere im Vertrieb",
    "Junge Vertriebstalente",
    "Sales Recruiting",
    "Vertrieb Ausbildung"
  ],
  openGraph: {
    title: "BLITZON — Wo ehrgeizige Menschen gewinnen",
    description:
      "Elite Sales Movement. Premium Training. Hohe Provisionen. Werde Teil der nächsten Generation Vertriebstalente.",
    type: "website",
    locale: "de_DE"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="bg-ink-900 font-sans text-bone antialiased">
        <SmoothScroll />
        <CustomCursor />
        {children}
        <StickyApply />
      </body>
    </html>
  );
}
