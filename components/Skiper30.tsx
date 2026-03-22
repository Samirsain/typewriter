"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

const images = [
  "/image.png",
  "/image copy.png",
  "/image copy 2.png",
  "/image copy 3.png",
  "/image copy 4.png",
  "/image copy 5.png",
  "/image copy 6.png",
  "/image copy 7.png",
  "/image copy 8.png",
];

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    // Lenis fights native touch scroll on mobile — only enable on desktop
    if (!isMobile) {
      lenis = new Lenis();
      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      if (lenis) lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="skiper-container">
      <div className="intro-section">
        <div className="scroll-hint-wrapper">
          <span className="scroll-hint">
            ↓ explore the gallery
          </span>
        </div>
      </div>

      <div ref={gallery} className="gallery-grid">
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[0], images[4], images[7]]} y={y4} />
      </div>

      <div className="intro-section">
        <div className="scroll-hint-wrapper">
          <span className="scroll-hint">
            ↑ back to the beginning
          </span>
        </div>
      </div>
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div className="gallery-column" style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className="gallery-image-wrapper">
          <Image
            src={src}
            alt={`Gallery image ${i + 1}`}
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
            className="gallery-image"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Skiper30;
