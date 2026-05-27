"use client";

import Badge from "@/components/ui/Badge";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 px-6 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Teal radial glow behind the name */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: "-5%",
          width: "70%",
          height: "60%",
          background: "radial-gradient(ellipse at 30% 50%, rgba(0,200,150,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <Badge available />
            </div>

            <h1 className="font-heading font-extrabold leading-[0.9] tracking-tight text-[#fafafa] mb-8"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              Hongqian
              <br />
              <span className="text-[#00C896]">Li</span>
            </h1>

            <p className="text-[#999999] text-sm tracking-[0.25em] uppercase font-medium mb-8">
              AI &amp; Cloud Engineer — Tampere, Finland
            </p>

            <p className="text-[#fafafa]/85 text-xl lg:text-2xl font-light leading-relaxed max-w-xl mb-12">
              I build AI systems —{" "}
              <span className="text-[#fafafa] font-normal italic">
                and I can explain them to anyone in the room.
              </span>
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-[#00C896] text-[#0a0a0a] font-semibold text-sm tracking-wide hover:bg-[#00b386] transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 border border-[#2a2a2a] text-[#fafafa]/70 text-sm tracking-wide hover:border-[#00C896] hover:text-[#fafafa] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Accent border offset */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#00C896]/30" />
              <div className="relative w-64 h-80 lg:w-80 lg:h-96 bg-[#111111] overflow-hidden">
                <Image
                  src="/images/photo-placeholder.jpg"
                  alt="Hongqian Li"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10 relative"
                  priority
                />
                {/* Placeholder overlay shown when image missing */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111] text-[#333333]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <span className="mt-3 text-xs tracking-widest uppercase">Photo</span>
                </div>
              </div>
              {/* Location tag */}
              <div className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-[#1e1e1e] px-3 py-1.5 text-xs text-[#666666] tracking-widest uppercase">
                📍 Tampere, FI
              </div>
            </div>
          </div>

        </div>

        {/* Bottom scroll indicator */}
        <div className="mt-20 lg:mt-24 flex items-center gap-4">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#2a2a2a]" />
          <span className="text-xs text-[#444444] tracking-widest uppercase rotate-0">Scroll</span>
        </div>
      </div>
    </section>
  );
}
