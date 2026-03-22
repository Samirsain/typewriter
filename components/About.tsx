"use client";

import Image from "next/image";
import { useFadeUp } from "@/hooks/useGSAPAnimations";

export default function About() {
  useFadeUp(".fade-about-item");

  return (
    <section id="about" className="py-16 sm:py-24 bg-cream-200/60 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -right-40 top-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full border border-brown-300/20 pointer-events-none" />
      <div className="absolute -right-20 top-30 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full border border-brown-300/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left – image collage */}
        <div className="fade-about-item relative flex justify-center lg:justify-start">
          {/* Main portrait */}
          <div className="relative w-56 sm:w-72 h-80 sm:h-96 rounded-3xl overflow-hidden painting-frame z-10">
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80"
              alt="Artist at work"
              fill
              className="object-cover"
            />
          </div>
          {/* Small inset painting */}
          <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:-right-4 lg:right-4 w-28 sm:w-36 h-36 sm:h-44 rounded-2xl overflow-hidden painting-frame z-20 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80"
              alt="Painting close up"
              fill
              className="object-cover"
            />
          </div>
          {/* Year badge */}
          <div className="absolute top-4 sm:top-6 left-0 sm:-left-4 lg:-left-8 bg-brown-700 text-cream-100 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 z-20 shadow-lg text-center">
            <p className="font-display text-2xl sm:text-3xl font-semibold leading-none">8+</p>
            <p className="font-body text-[10px] text-cream-300/70 mt-1 uppercase tracking-widest">Years</p>
          </div>
        </div>

        {/* Right – text */}
        <div className="text-center lg:text-left">
          <span className="fade-about-item font-body text-xs text-brown-400 uppercase tracking-widest">The Story</span>
          <h2 className="fade-about-item font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-brown-800 leading-tight mt-2">
            About <em className="font-script not-italic text-brown-500">Typewriters Voice</em>
          </h2>

          <p className="fade-about-item mt-5 font-body text-brown-500 leading-relaxed">
            <strong className="text-brown-700 font-semibold">
              Art that speaks in whispers & echoes.
            </strong>{" "}
            Typewriters Voice is a collection of handcrafted prints exploring the quiet spaces in between —
            Solitude, Resilience, Connection, and the poetic moments we rarely pause to notice.
          </p>
          <p className="fade-about-item mt-3 font-body text-brown-400 leading-relaxed text-sm">
            Each piece is crafted with intention, drawing from themes of light and darkness, journeys taken alone,
            and the gentle courage of letting go. Our Shopify store launches soon — connecting original art
            with collectors worldwide, starting from just $20.
          </p>

          {/* Brand Themes */}
          <div className="fade-about-item mt-8 space-y-3">
            <p className="font-body text-[10px] text-brown-400 uppercase tracking-widest">Exploring Themes</p>
            <div className="flex flex-wrap gap-2">
              {["Solitude", "Self Belief", "Resilience", "Night Sky", "Nature", "Connection", "Journey", "Letting Go", "Light & Darkness"].map((theme) => (
                <span
                  key={theme}
                  className="font-body text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-brown-200/80 text-brown-500 bg-cream-50/60"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="fade-about-item mt-8 border-l-2 border-gold-500 pl-5 py-1">
            <p className="font-display text-xl italic text-brown-600">
              "Art is not what you see, but what you make others see."
            </p>
            <footer className="mt-1 font-body text-xs text-brown-400">— Edgar Degas</footer>
          </blockquote>

          <a
            href="#shop"
            className="fade-about-item mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-brown-600 hover:text-brown-800 transition-colors group"
          >
            View the Collection
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
