import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#FDFAF6",
          100: "#FAF7F2",
          200: "#F5EFE4",
          300: "#EDE3D0",
          400: "#E0D0B8",
        },
        brown: {
          300: "#C49A6C",
          400: "#A87B52",
          500: "#8B5E3C",
          600: "#6F4428",
          700: "#4E2D14",
          800: "#2C1810",
        },
        gold: {
          300: "#E2C97E",
          400: "#D4AF5A",
          500: "#C9A84C",
          600: "#A8863A",
        },
        clay: "#D4895A",
        sage:  "#8B9E7E",
        bark:  "#3D2B1F",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        script:  ["var(--font-dancing)", "cursive"],
        body:    ["var(--font-lora)", "serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up":      "fadeUp 0.7s ease both",
        "fade-up-d1":   "fadeUp 0.7s 0.15s ease both",
        "fade-up-d2":   "fadeUp 0.7s 0.30s ease both",
        "fade-up-d3":   "fadeUp 0.7s 0.45s ease both",
        "fade-in":      "fadeIn 1s ease both",
        shimmer:        "shimmer 3s linear infinite",
        float:          "float 4s ease-in-out infinite",
        marquee:        "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
