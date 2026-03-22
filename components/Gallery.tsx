"use client";

import { useState } from "react";
import Image from "next/image";
import { useFadeUp } from "@/hooks/useGSAPAnimations";

const THEMES = ["All", "Solitude", "Self Belief", "Resilience", "Night Sky", "Nature", "Connection", "Journey", "Letting Go", "Light & Darkness"];

interface Painting {
  id: number;
  title: string;
  category: string;
  img: string;
  price: string;
}

const paintings: Painting[] = [
  { id: 1, title: "The Quiet Paddler",    category: "Solitude",        img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80", price: "20.00" },
  { id: 2, title: "The Quiet Stand",      category: "Resilience",      img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80",  price: "20.00" },
  { id: 3, title: "The Porch Light",      category: "Light & Darkness", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80", price: "20.00" },
  { id: 4, title: "The Patient Light",    category: "Nature",          img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80", price: "20.00" },
  { id: 5, title: "The Orange Umbrella",  category: "Connection",      img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&q=80", price: "20.00" },
  { id: 6, title: "The Night Path",       category: "Night Sky",       img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&q=80", price: "20.00" },
  { id: 7, title: "The Moon's Invitation",category: "Journey",         img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",  price: "20.00" },
  { id: 8, title: "The Midnight Train",   category: "Letting Go",      img: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=600&q=80", price: "20.00" },
];

export default function Gallery() {
  const [activeTheme, setActiveTheme] = useState("All");

  useFadeUp(".painting-card");

  const filtered = activeTheme === "All"
    ? paintings
    : paintings.filter((p) => p.category === activeTheme);

  return (
    <section id="shop" className="py-16 sm:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="font-body text-xs text-brown-400 uppercase tracking-[0.3em]">Art of the Month</span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-brown-800 leading-tight mt-2 uppercase tracking-wide">
            Latest <em className="font-script not-italic text-brown-500 lowercase">Collection</em>
          </h2>

          {/* Theme chips — horizontally scrollable on mobile */}
          <div className="flex sm:justify-center gap-2 mt-6 sm:mt-8 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {THEMES.slice(0, 6).map((theme) => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className={`font-body text-[10px] uppercase tracking-widest px-4 sm:px-5 py-2 rounded-full border transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeTheme === theme
                    ? "bg-brown-800 text-cream-50 border-brown-800"
                    : "border-brown-200 text-brown-500 hover:border-brown-400"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid — Canvas box style */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-16">
          {filtered.map((painting) => (
            <div
              key={painting.id}
              className="painting-card group cursor-pointer"
            >
              {/* 3D Canvas Box */}
              <div className="canvas-box mb-6 sm:mb-8">
                <div className="canvas-box-inner">
                  {/* Front face — the image */}
                  <div className="canvas-front">
                    <Image
                      src={painting.img}
                      alt={painting.title}
                      fill
                      sizes="(max-width: 475px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Right side edge */}
                  <div className="canvas-side-right" />
                  {/* Bottom edge */}
                  <div className="canvas-side-bottom" />
                </div>
              </div>
              
              {/* Text */}
              <div className="text-center px-2">
                <h3 className="font-body text-[11px] sm:text-xs font-semibold text-brown-800 uppercase tracking-widest leading-relaxed h-10 flex items-center justify-center">
                  {painting.title}
                </h3>
                <p className="font-body text-[10px] sm:text-[11px] text-brown-400 mt-2 tracking-wide uppercase">
                  <span className="lowercase italic opacity-70">from</span> ${painting.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-display text-xl text-brown-400">No prints found for this theme.</p>
            <button onClick={() => setActiveTheme("All")} className="mt-4 font-body text-sm text-brown-600 underline">View all prints</button>
          </div>
        )}
      </div>
    </section>
  );
}
