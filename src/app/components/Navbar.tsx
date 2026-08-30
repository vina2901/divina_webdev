"use client";

import { useState } from "react";

const NAV = ["Projects", "Skills", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f2]/90 backdrop-blur-sm border-b border-[#e5ddd3]">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 h-14 flex items-center justify-between">
        <span
          className="text-[13px] cursor-pointer tracking-widest uppercase text-[#1e6b6b] font-medium"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          D.B
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-[11px] tracking-[0.18em] uppercase text-[#8a7b6e] hover:text-[#1e6b6b] transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-[#1c1812] transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#1c1812] transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#1c1812] transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#e5ddd3] bg-[#fdf8f2] px-5 py-5 flex flex-col gap-5">
          {NAV.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-[11px] tracking-[0.18em] uppercase text-[#8a7b6e] hover:text-[#1e6b6b] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}