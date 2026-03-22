"use client";

import { useRef } from "react";
import Image from "next/image";
import { useFadeUp, useParallax, useTextReveal } from "@/hooks/useGSAPAnimations";

export default function Hero() {
  const heroImgRef = useRef<HTMLDivElement>(null);

  useTextReveal(".reveal-hero-text");
  useFadeUp(".fade-hero-item");
  useParallax(heroImgRef, 0.4);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-0">
      {/* Warm background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-200 via-cream-100 to-cream-300" />
      
      {/* Decorative blobs — smaller on mobile */}
      <div className="absolute top-20 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-brown-300/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-gold-300/10 blur-3xl pointer-events-none" />

      {/* Ornamental corner lines — hidden on mobile */}
      <svg className="absolute top-32 left-8 opacity-20 hidden sm:block" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M0 40 H30 M40 0 V30 M40 0 L0 40" stroke="#8B5E3C" strokeWidth="1.5"/>
      </svg>
      <svg className="absolute bottom-16 right-8 opacity-20 rotate-180 hidden sm:block" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M0 40 H30 M40 0 V30 M40 0 L0 40" stroke="#8B5E3C" strokeWidth="1.5"/>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — Text */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="fade-hero-item inline-flex items-center gap-3 mb-6 sm:mb-8">
            <span className="font-body text-[10px] sm:text-xs text-brown-400 tracking-[0.3em] uppercase">New in</span>
            <div className="h-px w-6 sm:w-8 bg-brown-300" />
            <span className="font-body text-[10px] sm:text-xs text-clay font-bold tracking-widest uppercase italic">Sale Off 30%</span>
          </div>

          <h1 className="reveal-hero-text font-display text-[clamp(2rem,6vw,4.8rem)] leading-[1.1] font-light text-brown-800">
            Art that speaks in
            <br />
            <em className="font-script not-italic text-brown-500" style={{ fontSize: "1.05em" }}>
              whispers & echoes.
            </em>
          </h1>

          <p className="fade-hero-item mt-5 sm:mt-8 font-body text-brown-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            Handcrafted prints exploring Solitude, Resilience, Connection and the quiet spaces in between. 
            Our store is opening soon — be the first to bring a piece home.
          </p>

          <div className="fade-hero-item mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#shop"
              className="group inline-flex items-center justify-center gap-2 font-body text-sm font-medium text-cream-50 bg-brown-600 hover:bg-brown-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore Collection
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium text-brown-700 border border-brown-300 hover:border-brown-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:bg-brown-500/5"
            >
              Get First Access
            </a>
          </div>

          {/* Core Themes */}
          <div className="fade-hero-item mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-brown-200/50">
             <p className="font-body text-[10px] text-brown-400 uppercase tracking-widest mb-3 sm:mb-4">Core Themes</p>
             <div className="flex flex-wrap gap-y-2 gap-x-4 sm:gap-x-6 justify-center lg:justify-start">
                {["Solitude", "Resilience", "Connection", "Light & Darkness"].map(theme => (
                  <span key={theme} className="font-display text-xs sm:text-sm text-brown-600/80 italic">{theme}</span>
                ))}
             </div>
          </div>
        </div>

        {/* Right — Featured painting stack */}
        <div ref={heroImgRef} className="relative flex justify-center items-center mt-4 lg:mt-0 min-h-[350px] sm:min-h-[420px]">
          {/* Back card */}
          <div className="absolute -rotate-6 translate-x-4 sm:translate-x-6 -translate-y-3 sm:-translate-y-4 w-52 sm:w-72 h-72 sm:h-96 rounded-2xl bg-cream-300 painting-frame" />
          {/* Mid card */}
          <div className="absolute rotate-3 -translate-x-3 sm:-translate-x-4 translate-y-4 sm:translate-y-6 w-52 sm:w-72 h-72 sm:h-96 rounded-2xl bg-brown-300/30 painting-frame" />
          {/* Front / main card */}
          <div className="relative w-52 sm:w-72 h-72 sm:h-96 rounded-2xl overflow-hidden painting-frame hover:painting-frame-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80"
              alt="Featured print"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brown-900/60 to-transparent p-6 text-center">
              <p className="font-body text-[11px] font-semibold text-gold-300 uppercase tracking-widest leading-relaxed">The Night Path</p>
              <p className="font-body text-cream-200 text-[10px] sm:text-[11px] mt-2 tracking-wide uppercase">
                <span className="lowercase italic opacity-70">from</span> $20
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-2 sm:-top-4 right-0 sm:-right-2 lg:right-4 bg-cream-50 border border-gold-300/50 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-md animate-float">
            <p className="font-body text-[8px] sm:text-[10px] text-brown-400 uppercase tracking-widest">Store Status</p>
            <p className="font-display text-sm sm:text-base font-semibold text-brown-700 leading-tight">Opening Soon</p>
          </div>
        </div>
      </div>

      {/* Marquee scroll hint */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-brown-200/40 overflow-hidden py-2 sm:py-3 bg-cream-200/50">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {Array(8).fill("Poetic Prints · Handcrafted Art · One-of-a-kind · Opening Soon ·\u00A0").map((t, i) => (
            <span key={i} className="font-body text-[8px] sm:text-[10px] text-brown-400 tracking-widest uppercase px-4 sm:px-6">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
