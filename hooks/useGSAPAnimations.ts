"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ─── Hook: elements ko scroll pe fade-up animate karo ───
export function useFadeUp(selector: string, options?: gsap.TweenVars) {
  useGSAP(() => {
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
  }, []);
}

// ─── Hook: horizontal scroll section ───
export function useHorizontalScroll(
  containerRef: React.RefObject<HTMLElement | null>
) {
  useGSAP(() => {
    if (!containerRef.current) return;
    const panels = containerRef.current.querySelectorAll(".panel");
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
  }, [containerRef]);
}

// ─── Hook: text reveal (line by line) ───
export function useTextReveal(selector: string) {
  useGSAP(() => {
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
  }, []);
}

// ─── Hook: parallax effect ───
export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  speed = 0.5   // 0 = no parallax, 1 = full scroll speed
) {
  useGSAP(() => {
    if (!ref.current) return;
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
  }, [ref, speed]);
}
