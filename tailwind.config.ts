import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050B12",
          900: "#050B12",
          800: "#0C1622",
          700: "#132536",
          600: "#1A2D43",
          500: "#1F3650",
          400: "#26425F",
          300: "#2E4F72"
        },
        bone: {
          DEFAULT: "#F5F7FA",
          50: "#FAFBFD",
          100: "#F5F7FA",
          200: "#D5DCE6",
          300: "#A8B3C2",
          400: "#6E7C91"
        },
        flame: {
          DEFAULT: "#037CC2",
          400: "#0496EA",
          500: "#037CC2",
          600: "#025E94",
          700: "#024A75"
        },
        copper: {
          DEFAULT: "#5DD6FF",
          400: "#7CDFFF",
          500: "#5DD6FF"
        },
        electric: {
          DEFAULT: "#1BA3F5",
          400: "#1BA3F5",
          500: "#1BA3F5"
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
          "radial-gradient(circle at 20% 20%, rgba(3,124,194,0.22), transparent 45%), radial-gradient(circle at 80% 0%, rgba(27,163,245,0.16), transparent 55%), radial-gradient(circle at 60% 90%, rgba(93,214,255,0.10), transparent 55%)",
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
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(3,124,194,0.55)" },
          "50%": { boxShadow: "0 0 48px 8px rgba(27,163,245,0.22)" }
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
