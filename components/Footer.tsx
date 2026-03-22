"use client";

import Link from "next/link";
import Image from "next/image";
import { useFadeUp } from "@/hooks/useGSAPAnimations";

export default function Footer() {
  useFadeUp(".fade-footer-item");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bark text-cream-300/70 pt-14 sm:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 mb-14 sm:mb-20">
          {/* Brand */}
          <div className="fade-footer-item col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/dark-logo_65bd3645-b9fc-4be2-980d-e319aa8bf5af (1).png"
                alt="Typewriters Voice"
                width={180}
                height={40}
                className="h-7 sm:h-8 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="font-body text-sm leading-relaxed max-w-xs text-cream-300/50 italic">
               &ldquo;Art that speaks in whispers &amp; echoes.&rdquo;
            </p>
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-brown-700/50 border border-gold-400/20 rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-body text-[10px] text-gold-400 uppercase tracking-widest">Shopify Store · Soon</span>
            </div>
          </div>

          {/* About Us */}
          <div className="fade-footer-item">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-cream-100/40 mb-4 sm:mb-6">About Us</h4>
            <ul className="space-y-3">
              {["FAQs", "About"].map((l) => (
                <li key={l}>
                  <Link href={`#${l.toLowerCase()}`} className="font-body text-sm hover:text-cream-100 transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Centre */}
          <div className="fade-footer-item">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-cream-100/40 mb-4 sm:mb-6">Help Centre</h4>
            <ul className="space-y-3">
              {["FAQ Corner", "Shipping & Returns", "Privacy Policy", "Refund Policy"].map((l) => (
                <li key={l}>
                  <Link href="#" className="font-body text-sm hover:text-cream-100 transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="fade-footer-item">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-cream-100/40 mb-4 sm:mb-6">Social</h4>
            <ul className="space-y-3">
               {["X (Twitter)", "Facebook", "Instagram", "TikTok", "YouTube", "Pinterest"].map((l) => (
                <li key={l}>
                  <Link href="#" className="font-body text-sm hover:text-cream-100 transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="border-t border-cream-100/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] tracking-widest text-cream-100/30 uppercase text-center sm:text-left">
             © 2025 Typewriters Voice. All rights reserved.
          </p>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="#" className="font-body text-[10px] tracking-widest text-cream-100/20 hover:text-cream-100/50 uppercase transition-colors">Privacy Policy</Link>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 font-body text-[10px] tracking-widest text-cream-100/30 hover:text-cream-100/60 uppercase transition-colors"
            >
              Back to top
              <svg className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
