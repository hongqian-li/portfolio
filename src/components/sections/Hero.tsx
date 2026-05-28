"use client";

import Badge from "@/components/ui/Badge";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex overflow-hidden bg-[#0a0a0a]"
    >
      {/* Teal radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "-5%",
          width: "60%",
          height: "70%",
          background: "radial-gradient(ellipse at 30% 50%, rgba(0,200,150,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Left: Text content */}
      <div className="relative z-10 flex flex-col justify-center pt-28 pb-16 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24 w-full md:w-[58%]">
        <div className="max-w-xl">
          <div className="mb-8">
            <Badge available />
          </div>

          <h1
            className="font-heading font-extrabold leading-[0.88] tracking-tight text-[#fafafa] mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)" }}
          >
            Hongqian
            <br />
            <span className="text-[#00C896]">Li</span>
          </h1>

          <p className="text-[#D0D0D0] text-sm tracking-[0.25em] uppercase font-medium mb-8">
            AI &amp; Cloud Engineer — Tampere, Finland
          </p>

          <p className="text-[#E8E8E8] text-xl lg:text-2xl font-light leading-relaxed mb-12">
            I build AI systems —{" "}
            <span className="font-normal italic">
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
              className="px-6 py-3 bg-[#00C896] hover:bg-[#00b386] text-[#0a0a0a] font-semibold text-sm tracking-wide transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-[#2a2a2a] hover:border-[#00C896] text-[#D0D0D0] hover:text-[#fafafa] text-sm tracking-wide transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="mailto:hongqi4nli@gmail.com" className="text-xs text-[#686868] hover:text-[#00C896] transition-colors tracking-wide">
              hongqi4nli@gmail.com
            </a>
            <span className="text-[#2a2a2a] text-xs">·</span>
            <a href="https://github.com/hongqian-li" target="_blank" rel="noopener noreferrer" className="text-xs text-[#686868] hover:text-[#00C896] transition-colors tracking-wide">
              GitHub
            </a>
            <span className="text-[#2a2a2a] text-xs">·</span>
            <a href="https://linkedin.com/in/hongqian-li" target="_blank" rel="noopener noreferrer" className="text-xs text-[#686868] hover:text-[#00C896] transition-colors tracking-wide">
              LinkedIn
            </a>
          </div>

          {/* Mobile: compact photo */}
          <div className="md:hidden mt-12 relative w-48 h-60 overflow-hidden">
            <Image
              src="/images/Hongqian_Li_Picture.jpeg"
              alt="Hongqian Li"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 lg:mt-20 flex items-center gap-4">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#2a2a2a]" />
            <span className="text-xs text-[#777777] tracking-widest uppercase">Scroll</span>
          </div>
        </div>
      </div>

      {/* Desktop: full-height photo bleeding to right edge */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[42%]">
        <Image
          src="/images/Hongqian_Li_Picture.jpeg"
          alt="Hongqian Li"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient: blends photo into background */}
        <div
          className="absolute inset-y-0 left-0 w-56 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.6) 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
