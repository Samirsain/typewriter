// app/layout.tsx

import type { Metadata } from "next";
import GSAPProvider from "@/components/GSAPProvider";
// agar Club GSAP hai toh:
// import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Typewriters Voice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Free version — GSAPProvider wrap karo */}
        <GSAPProvider>
          {children}
        </GSAPProvider>

        {/* Club GSAP version (ScrollSmoother) use karna ho toh:
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        */}
      </body>
    </html>
  );
}
