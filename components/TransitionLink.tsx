"use client";

import { useRouter } from "next/navigation";
import { gsap }      from "gsap";
import { useRef }    from "react";

interface Props {
  href:      string;
  children:  React.ReactNode;
  className?: string;
}

/**
 * Drop-in replacement for <Link> — triggers GSAP exit animation
 * before navigating so the transition feels intentional.
 */
export default function TransitionLink({ href, children, className }: Props) {
  const router  = useRouter();
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    gsap.to(linkRef.current, {
      opacity: 0.6,
      scale: 0.97,
      duration: 0.15,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(linkRef.current, { opacity: 1, scale: 1 });
        router.push(href);
      },
    });
  };

  return (
    <a ref={linkRef} href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
