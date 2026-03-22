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
    // ScrollTrigger normalize — removes scroll jank
    ScrollTrigger.normalizeScroll(true);

    // Custom smooth scroll using GSAP ticker
    let currentY = 0;
    let targetY  = 0;
    const ease   = 0.08; // 0.05 = very slow/smooth, 0.12 = faster

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetY += e.deltaY;
      targetY = Math.max(
        0,
        Math.min(targetY, document.body.scrollHeight - window.innerHeight)
      );
    };

    const tick = () => {
      currentY += (targetY - currentY) * ease;
      window.scrollTo(0, currentY);
      ScrollTrigger.update();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0); // jank remove

    return () => {
      window.removeEventListener("wheel", onWheel);
      gsap.ticker.remove(tick);
      ScrollTrigger.normalizeScroll(false);
    };
  }, []);

  return <>{children}</>;
}
