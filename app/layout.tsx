import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Lora } from "next/font/google";
import "./globals.css";
import GSAPProvider from "@/components/gsap/GSAPProvider";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import { generateSEO } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";

// ─── Fonts — display:swap prevents FOUT ──────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

// ─── Global SEO ───────────────────────────────────────────────
export const metadata: Metadata = generateSEO();

// ─── Viewport ─────────────────────────────────────────────────
export const viewport = {
  width:        "device-width",
  initialScale: 1,
  themeColor:   "#2C1810",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dancing.variable} ${lora.variable}`}>
      <body className="antialiased">
        <GSAPProvider>
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
        </GSAPProvider>
        <Analytics />
      </body>
    </html>
  );
}
