import type { Metadata } from "next";
import {
  Playfair_Display,
  Pinyon_Script,
  EB_Garamond,
  Inconsolata,
} from "next/font/google";

import PageTransitionProvider from "@/components/PageTransitionProvider";
import GSAPProvider           from "@/components/GSAPProvider";
import { generateSEO }        from "@/lib/seo";
import "./globals.css";

// ─── Fonts — display:swap prevents FOUT ──────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"], weight: ["400","500","600","700"],
  style: ["normal","italic"], variable: "--font-playfair", display: "swap",
});
const pinyon = Pinyon_Script({
  subsets: ["latin"], weight: ["400"],
  variable: "--font-pinyon", display: "swap",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"], weight: ["400","500","600"],
  style: ["normal","italic"], variable: "--font-eb-garamond", display: "swap",
});
const inconsolata = Inconsolata({
  subsets: ["latin"], weight: ["400","500"],
  variable: "--font-inconsolata", display: "swap",
});

// ─── Global SEO ───────────────────────────────────────────────
export const metadata: Metadata = generateSEO();

// ─── Viewport ─────────────────────────────────────────────────
export const viewport = {
  width:        "device-width",
  initialScale: 1,
  themeColor:   "#0D0C0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        playfair.variable,
        pinyon.variable,
        ebGaramond.variable,
        inconsolata.variable,
      ].join(" ")}
    >
      <body>
        {/*
          Layer order:
          1. GSAPProvider      — smooth scroll (outermost)
          2. PageTransitionProvider — curtain transition overlay
          3. children          — actual page content
        */}
        <GSAPProvider>
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
        </GSAPProvider>
      </body>
    </html>
  );
}
