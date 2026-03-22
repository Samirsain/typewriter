"use client";

import { useState } from "react";
import { useFadeUp } from "@/hooks/useGSAPAnimations";

export default function EmailWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useFadeUp(".fade-waitlist-item");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="waitlist" className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="fade-waitlist-item font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-brown-800 leading-tight">
          Subscribe to <em className="font-script not-italic text-brown-500">our emails</em>
        </h2>

        <p className="fade-waitlist-item mt-4 font-body text-brown-400 text-sm leading-relaxed max-w-md mx-auto">
          Be the first to know about new collections and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="fade-waitlist-item mt-10">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-6">
              <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-display text-2xl text-brown-700 uppercase tracking-wide">Thank You</p>
              <p className="font-body text-sm text-brown-400">You&apos;ve successfully subscribed to our newsletter.</p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 font-body text-sm text-brown-700 bg-cream-50 border border-brown-200 outline-none rounded-full px-6 py-4 placeholder-brown-300 focus:border-brown-400 focus:ring-1 focus:ring-brown-300 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="font-body text-sm font-medium text-cream-50 bg-brown-600 hover:bg-brown-700 disabled:opacity-60 px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Joining...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
