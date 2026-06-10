import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/system/SmoothScroll";
import CustomCursor from "@/components/system/CustomCursor";
import StickyApply from "@/components/system/StickyApply";
import { asset } from "@/lib/asset";

// Tightly scoped font subsets/weights cut the woff2 payload roughly in half.
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["Arial", "system-ui", "sans-serif"]
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["Arial", "system-ui", "sans-serif"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["Arial", "system-ui", "sans-serif"]
});

export const metadata: Metadata = {
  title: "BLITZON · Wo Ehrgeiz auf Können trifft",
  description:
    "BLITZON baut die nächste Generation deutscher Vertriebstalente. Erstklassiges Training, ehrliche Provisionen, klare Karrieren. Standorte München und Augsburg.",
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
      "Vertriebsbewegung mit Substanz. Erstklassiges Training, ehrliche Provisionen. München und Augsburg.",
    type: "website",
    locale: "de_DE",
    images: [{ url: asset("/logo/blitzon-lockup.png"), width: 1024, height: 1024, alt: "BLITZON Consulting" }]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06101C"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        {/* Preload the LCP image so it starts downloading before JS runs. */}
        <link
          rel="preload"
          as="image"
          href={asset("/media/team-success-1600.webp")}
          imageSrcSet={`${asset("/media/team-success-900.webp")} 900w, ${asset("/media/team-success-1600.webp")} 1600w`}
          imageSizes="(min-width: 768px) 58vw, 100vw"
          fetchPriority="high"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-ink-900 font-sans text-bone antialiased">
        <SmoothScroll />
        <CustomCursor />
        {children}
        <StickyApply />
      </body>
    </html>
  );
}
