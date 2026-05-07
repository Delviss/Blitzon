import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#06101C",
          900: "#06101C",
          800: "#0E1B2C",
          700: "#152840",
          600: "#1C3354",
          500: "#243D63",
          400: "#2C4972",
          300: "#365681"
        },
        bone: {
          DEFAULT: "#F4F1EA",
          50: "#FBF9F4",
          100: "#F4F1EA",
          200: "#DDD6C9",
          300: "#B6AE9E",
          400: "#857D6E"
        },
        flame: {
          DEFAULT: "#1FA9FF",
          400: "#3DB6FF",
          500: "#1FA9FF",
          600: "#0C82CC",
          700: "#0A6AA6"
        },
        copper: {
          DEFAULT: "#7DE2FF",
          400: "#A8ECFF",
          500: "#7DE2FF"
        },
        electric: {
          DEFAULT: "#1FA9FF",
          400: "#3DB6FF",
          500: "#1FA9FF"
        },
        ember: {
          DEFAULT: "#FFB547",
          50: "#FFF2DA",
          100: "#FFE3B0",
          200: "#FFD27D",
          300: "#FFC25B",
          400: "#FFB547",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309"
        },
        coral: {
          DEFAULT: "#FF6F5C",
          400: "#FF8B7A",
          500: "#FF6F5C",
          600: "#E85544"
        },
        moss: {
          DEFAULT: "#5EEAD4",
          400: "#8BF3E2",
          500: "#5EEAD4"
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
          "radial-gradient(circle at 18% 18%, rgba(255,181,71,0.16), transparent 45%), radial-gradient(circle at 82% 0%, rgba(31,169,255,0.20), transparent 55%), radial-gradient(circle at 60% 92%, rgba(255,111,92,0.10), transparent 55%)",
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
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,181,71,0.55)" },
          "50%": { boxShadow: "0 0 48px 8px rgba(255,181,71,0.22)" }
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
