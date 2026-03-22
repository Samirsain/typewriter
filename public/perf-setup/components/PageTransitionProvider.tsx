"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname    = usePathname();
  const overlayRef  = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const isFirst     = useRef(true);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    if (isFirst.current) {
      // First load — just fade in content
      isFirst.current = false;
      gsap.fromTo(
        content,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );
      return;
    }

    // Page change — curtain transition
    const tl = gsap.timeline();

    tl
      // Curtain slides IN (cover screen)
      .set(overlay, { scaleY: 0, transformOrigin: "bottom center", display: "flex" })
      .to(overlay, {
        scaleY: 1,
        duration: 0.55,
        ease: "power4.inOut",
      })
      // Content fades out
      .to(content, { opacity: 0, duration: 0.2 }, "<")
      // Brief pause at full cover
      .to({}, { duration: 0.1 })
      // Curtain slides OUT (reveal new page)
      .set(overlay, { transformOrigin: "top center" })
      .to(overlay, {
        scaleY: 0,
        duration: 0.55,
        ease: "power4.inOut",
      })
      // Content fades in
      .fromTo(
        content,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .set(overlay, { display: "none" });
  }, [pathname]);

  return (
    <>
      {/* Transition overlay — warm ink curtain */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="fixed inset-0 z-[9999] hidden items-center justify-center bg-ink-900"
        style={{ transformOrigin: "bottom center" }}
      >
        {/* Logo mark shown during transition */}
        <div className="flex flex-col items-center gap-2 opacity-60">
          <div className="w-8 h-8 rounded-full border-2 border-parchment-300/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-rust animate-pulse" />
          </div>
          <span
            className="text-parchment-200/60 tracking-[0.3em] uppercase text-[10px]"
            style={{ fontFamily: "var(--font-inconsolata, monospace)" }}
          >
            Typewriters Voice
          </span>
        </div>
      </div>

      {/* Page content */}
      <div ref={contentRef}>{children}</div>
    </>
  );
}
