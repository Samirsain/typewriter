"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on Escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  const links = ["Shop", "About", "Books", "Wishlist ❤︎"];

  return (
    <>
      {/* Promo Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-brown-700 text-cream-50 py-2 sm:py-2.5 px-3 sm:px-4 text-center">
        <p className="font-body text-[10px] sm:text-xs tracking-wider leading-tight">
          Shop over <span className="font-semibold text-gold-400">$180 USD</span> and get a{" "}
          <span className="font-semibold text-gold-400 hidden sm:inline">Jump Rope (valued at $29 USD)</span>
          <span className="font-semibold text-gold-400 sm:hidden">free gift</span>{" "}
          with your order.
        </p>
      </div>

      <nav
        className={`fixed top-9 sm:top-10 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-100/90 backdrop-blur-md shadow-sm border-b border-brown-300/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/dark-logo_65bd3645-b9fc-4be2-980d-e319aa8bf5af (1).png"
              alt="Typewriters Voice"
              width={180}
              height={40}
              className="h-6 sm:h-8 w-auto group-hover:opacity-80 transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase().replace(" ❤︎", "")}`}
                  className="font-body text-sm text-brown-600 hover:text-brown-800 transition-colors duration-200 relative group"
                >
                  {link}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons / Utility */}
          <div className="hidden md:flex items-center gap-8 text-brown-600">
            <Link href="#profile" className="hover:text-brown-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </Link>
            <Link href="#cart" className="relative hover:text-brown-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-clay text-cream-50 text-[10px] flex items-center justify-center font-bold">0</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-brown-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-brown-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-brown-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu — slide down animation */}
        <div
          className={`md:hidden bg-cream-100/95 backdrop-blur-md border-t border-brown-200/40 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase().replace(" ❤︎", "")}`}
                className="font-body text-brown-700 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <div className="flex gap-6 pt-4 mt-auto border-t border-brown-200">
               <Link href="#profile" className="text-brown-700 font-body text-sm" onClick={() => setMenuOpen(false)}>Profile</Link>
               <Link href="#cart" className="text-brown-700 font-body text-sm" onClick={() => setMenuOpen(false)}>Cart (0)</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
