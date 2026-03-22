"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // ScrollTrigger normalize — removes scroll jank, but breaks native touch scroll on mobile
    if (!isMobile) {
      ScrollTrigger.normalizeScroll(true);
    }

    // Custom smooth scroll using GSAP ticker
    let currentY = 0;
    let targetY  = 0;
    const ease   = 0.08; // 0.05 = very slow/smooth, 0.12 = faster

    const onWheel = (e: WheelEvent) => {
      // Don't normalize on touch devices, let native handle it
      if (isMobile) return;
      
      e.preventDefault();
      targetY += e.deltaY;
      targetY = Math.max(
        0,
        Math.min(targetY, document.body.scrollHeight - window.innerHeight)
      );
    };

    const tick = () => {
      if (isMobile) return;
      currentY += (targetY - currentY) * ease;
      window.scrollTo(0, currentY);
      ScrollTrigger.update();
    };

    if (!isMobile) {
      window.addEventListener("wheel", onWheel, { passive: false });
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0); // jank remove
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("wheel", onWheel);
        gsap.ticker.remove(tick);
        ScrollTrigger.normalizeScroll(false);
      }
    };
  }, []);

  return <>{children}</>;
}
