import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Lora } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Artfy — Original Paintings & Fine Art",
  description:
    "Handcrafted original paintings. Our Shopify store is coming soon — join the waitlist for early access.",
  openGraph: {
    title: "Artfy — Original Paintings",
    description: "Fine art gallery & store — coming soon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dancing.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
