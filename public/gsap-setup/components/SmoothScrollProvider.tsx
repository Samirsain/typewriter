"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // Only run on desktop (mobile ko native scroll dene ke liye)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      smootherRef.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,        // smoothness — 1 = normal, 2 = very smooth
        smoothTouch: 0.1,   // touch devices pe thoda smooth
        effects: true,      // data-speed / data-lag attributes enable
        normalizeScroll: true,
      });

      return () => {
        smootherRef.current?.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div id="smooth-wrapper" style={{ overflow: "hidden" }}>
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
