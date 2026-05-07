import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          900: "#050505",
          800: "#0a0a0a",
          700: "#111111",
          600: "#161616",
          500: "#1c1c1c",
          400: "#242424",
          300: "#2e2e2e"
        },
        bone: {
          DEFAULT: "#F5F5F5",
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#a3a3a3",
          400: "#737373"
        },
        flame: {
          DEFAULT: "#FF5A1F",
          400: "#ff7a4a",
          500: "#FF5A1F",
          600: "#e64a10",
          700: "#C65A2E"
        },
        copper: {
          DEFAULT: "#C65A2E",
          500: "#C65A2E"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 11vw, 12rem)", { lineHeight: "0.9", letterSpacing: "-0.05em", fontWeight: "800" }],
        "display-lg": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-md": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "0.96", letterSpacing: "-0.03em", fontWeight: "700" }],
        "eyebrow": ["0.72rem", { lineHeight: "1", letterSpacing: "0.22em", fontWeight: "600" }]
      },
      letterSpacing: {
        tightest: "-0.05em"
      },
      backgroundImage: {
        "grid-flame":
          "radial-gradient(circle at 20% 20%, rgba(255,90,31,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(198,90,46,0.14), transparent 50%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.65'/></svg>\")"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.92" },
          "55%": { opacity: "0.85" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,90,31,0.5)" },
          "50%": { boxShadow: "0 0 40px 6px rgba(255,90,31,0.18)" }
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        }
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        flicker: "flicker 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        scanline: "scanline 8s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
