import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/system/SmoothScroll";
import CustomCursor from "@/components/system/CustomCursor";
import StickyApply from "@/components/system/StickyApply";
import { asset } from "@/lib/asset";

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
  title: "BLITZON · Wo Ehrgeiz auf Können trifft",
  description:
    "BLITZON baut die nächste Generation deutscher Vertriebstalente. Premium Training, ehrliche Provisionen, klare Karrieren. Standorte München und Augsburg.",
  keywords: [
    "Sales Ausbildung München",
    "Vertrieb Karriere Augsburg",
    "Sales Training Bayern",
    "Karriere im Vertrieb",
    "Junge Vertriebstalente",
    "Sales Recruiting München",
    "BlitzON Consulting"
  ],
  icons: {
    icon: [{ url: asset("/logo/favicon-64.png"), type: "image/png", sizes: "64x64" }],
    apple: [{ url: asset("/logo/favicon-64.png") }]
  },
  openGraph: {
    title: "BLITZON · Wo Ehrgeiz auf Können trifft",
    description:
      "Sales-Bewegung mit Substanz. Premium Training, ehrliche Provisionen. München und Augsburg.",
    type: "website",
    locale: "de_DE",
    images: [{ url: asset("/logo/blitzon-lockup.png"), width: 1024, height: 1024, alt: "BLITZON Consulting" }]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#06101C"
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
