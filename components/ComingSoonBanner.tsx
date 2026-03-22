"use client";

import { useEffect, useState } from "react";
import { useFadeUp } from "@/hooks/useGSAPAnimations";

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setTime(calc()); // Initial client-side calculation
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function ComingSoonBanner() {
  const launchDate = new Date("2026-09-01T00:00:00");
  const { days, hours, minutes, seconds } = useCountdown(launchDate);

  useFadeUp(".fade-banner-item");

  const units = [
    { label: "Days",    value: days },
    { label: "Hours",   value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section id="coming-soon" className="relative py-24 overflow-hidden bg-brown-700">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FAF7F2' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="fade-banner-item inline-flex items-center gap-2 border border-gold-400/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="font-body text-xs text-cream-300 tracking-widest uppercase">
            Shopify Store · Opening Soon
          </span>
        </div>

        <h2 className="fade-banner-item font-display text-[clamp(2rem,5vw,4rem)] font-light text-cream-100 leading-tight">
          Something beautiful
          <br />
          <em className="font-script not-italic text-gold-400" style={{ fontSize: "0.95em" }}>
            is on its way
          </em>
        </h2>
        <p className="fade-banner-item mt-4 font-body text-cream-300/70 text-sm max-w-lg mx-auto leading-relaxed">
          Original art prints from $20 — poetic, handcrafted, one-of-a-kind. 
          Join the waitlist for a <strong className="text-gold-400">15% launch discount</strong> and first access.
        </p>

        <div className="mt-12 flex justify-center gap-4 sm:gap-8">
          {units.map(({ label, value }) => (
            <div key={label} className="fade-banner-item flex flex-col items-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl border border-cream-300/15 bg-brown-800/50 backdrop-blur-sm flex items-center justify-center">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-cream-100 tabular-nums">
                  {String(value).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 font-body text-[10px] text-cream-400/60 uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#waitlist"
          className="fade-banner-item mt-10 inline-flex items-center gap-2 font-body text-sm font-medium text-brown-800 bg-gold-400 hover:bg-gold-300 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Join the Waitlist
        </a>
      </div>
    </section>
  );
}
