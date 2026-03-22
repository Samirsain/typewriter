"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";

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
      isFirst.current = false;
      gsap.fromTo(
        content,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );
      return;
    }

    const tl = gsap.timeline();

    tl
      .set(overlay, { scaleY: 0, transformOrigin: "bottom center", display: "flex" })
      .to(overlay, { scaleY: 1, duration: 0.55, ease: "power4.inOut" })
      .to(content, { opacity: 0, duration: 0.2 }, "<")
      .to({}, { duration: 0.1 })
      .set(overlay, { transformOrigin: "top center" })
      .to(overlay, { scaleY: 0, duration: 0.55, ease: "power4.inOut" })
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
      {/* Transition overlay — warm curtain */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="fixed inset-0 z-[9999] hidden items-center justify-center bg-brown-800"
        style={{ transformOrigin: "bottom center" }}
      >
        <div className="flex flex-col items-center gap-3 opacity-70">
          <Image
            src="/dark-logo_65bd3645-b9fc-4be2-980d-e319aa8bf5af (1).png"
            alt="Typewriters Voice"
            width={140}
            height={32}
            className="h-6 w-auto brightness-0 invert"
          />
        </div>
      </div>

      {/* Page content */}
      <div ref={contentRef}>{children}</div>
    </>
  );
}
