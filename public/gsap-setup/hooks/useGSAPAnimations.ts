"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Hook: elements ko scroll pe fade-up animate karo ───
export function useFadeUp(selector: string, options?: gsap.TweenVars) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: selector,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          ...options,
        }
      );
    });
    return () => ctx.revert();
  }, []);
}

// ─── Hook: horizontal scroll section ───
export function useHorizontalScroll(
  containerRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const panels = containerRef.current!.querySelectorAll(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current!.offsetWidth,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
}

// ─── Hook: text reveal (line by line) ───
export function useTextReveal(selector: string) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: selector,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);
}

// ─── Hook: parallax effect ───
export function useParallax(
  ref: React.RefObject<HTMLElement>,
  speed = 0.5   // 0 = no parallax, 1 = full scroll speed
) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -20 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
}
