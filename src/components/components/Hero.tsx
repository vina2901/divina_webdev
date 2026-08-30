"use client";

import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="flex flex-col md:flex-row md:items-center md:gap-16 gap-10">
        
        {/* Left: all text content */}
        <div className="flex-1 min-w-0">
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#1e6b6b] mb-6">
            4th Year &middot; BS Information Technology &middot; RTU
          </p>

          <h1
            className="font-normal leading-[1.08] text-[#1c1812] mb-6"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Divina O. <br />
            <span className="italic text-[#8a7b6e]">Barabad.</span>
          </h1>

          <p className="text-[14px] leading-[1.85] text-[#5a4f45] max-w-sm mb-8">
            Motivated and detail-oriented IT student with experience in system
            development, database management, and IT support. Driven to deliver
            quality outputs and grow within the technology field.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-3 bg-[#1e6b6b] text-[#fdf8f2] px-6 py-3 text-[11px] tracking-[0.18em] uppercase hover:bg-[#155454] transition-colors duration-300"
            >
              View projects
              <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-3 border border-[#c8b8a8] text-[#8a7b6e] px-6 py-3 text-[11px] tracking-[0.18em] uppercase hover:border-[#1e6b6b] hover:text-[#1e6b6b] transition-colors duration-300"
            >
              Get in touch
            </button>
          </div>

          <div className="flex gap-10 pt-8 border-t border-[#e5ddd3]">
            {[
              { val: "3+", label: "Projects" },
              { val: "NCII", label: "Certified" },
              { val: "2023", label: "RTU enrolled" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl text-[#1e6b6b] font-normal" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {s.val}
                </p>
                <p className="text-[10px] tracking-widest uppercase text-[#a8998a] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo with decoration */}
        <div className="shrink-0 flex justify-center md:justify-end">
          <div className="relative">
            {/* Offset shadow block */}
            <div
              className="absolute bg-[#d4eded]"
              style={{ width: "100%", height: "100%", top: 12, left: 12, zIndex: 0 }}
            />
            {/* Corner lines in teal */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#1e6b6b] z-10" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#1e6b6b] z-10" />

            {/* Photo */}
            <div
              className="relative overflow-hidden bg-[#d8cfc4] z-[1]"
              style={{ width: 220, height: 275 }}
            >
              <Image
                src="/images/Divina_Pic.jpg"
                alt="Divina O. Barabad"
                width={220}
                height={275}
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>

            <p className="text-[10px] tracking-[0.2em] uppercase text-[#1e6b6b] mt-3 text-right">
              IT Student &middot; 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}