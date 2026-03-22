"use client";

import { useRef } from "react";
import { useFadeUp, useParallax, useTextReveal } from "@/hooks/useGSAPAnimations";

export default function ExamplePage() {
  const heroImgRef = useRef<HTMLDivElement>(null);

  // Scroll pe fade-up
  useFadeUp(".fade-up-item");

  // Hero image parallax
  useParallax(heroImgRef, 0.4);

  // Heading text reveal
  useTextReveal(".reveal-text");

  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-parchment-100">
        {/* Parallax background */}
        <div
          ref={heroImgRef}
          className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-700 opacity-10"
        />

        <div className="text-center z-10">
          {/* Text reveal animation */}
          <h1 className="reveal-text font-display text-6xl text-ink-800">
            Typewriters Voice
          </h1>

          {/* Fade up items */}
          <p className="fade-up-item mt-4 font-body text-ink-500">
            Art that speaks in whispers
          </p>
          <button className="fade-up-item mt-8 px-8 py-3 bg-ink-800 text-parchment-50 font-mono text-sm uppercase tracking-widest">
            Explore
          </button>
        </div>
      </section>

      {/* ── Cards section ── */}
      <section className="py-24 px-12">
        <h2 className="fade-up-item font-display text-4xl text-ink-800 mb-12">
          The Collection
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {["The Quiet Paddler", "The Night Path", "The Porch Light"].map((title) => (
            <div
              key={title}
              className="fade-up-item bg-ink-800 text-parchment-200 p-8 rounded-sm"
            >
              <div className="w-full aspect-square bg-ink-700 mb-4 rounded-sm" />
              <p className="font-script text-2xl">{title}</p>
              <p className="font-mono text-xs text-ink-400 mt-1 uppercase tracking-widest">
                From $20
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
