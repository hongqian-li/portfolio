"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";

const photos = [
  { src: "/images/photo-1.jpg", alt: "Photography 1", aspect: "tall" },
  { src: "/images/photo-2.jpg", alt: "Photography 2", aspect: "wide" },
  { src: "/images/photo-3.jpg", alt: "Photography 3", aspect: "wide" },
  { src: "/images/photo-4.jpg", alt: "Photography 4", aspect: "tall" },
];

export default function Photography() {
  return (
    <section id="photography" className="py-32 px-6 border-t border-[#1e1e1e] bg-[#111111]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionLabel text="Personal" className="mb-4 block" />
            <h2
              className="font-heading font-extrabold text-[#fafafa] leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Beyond the
              <br />
              <span className="text-[#00C896]">Terminal</span>
            </h2>
          </div>
          <p className="text-[#555555] text-sm max-w-xs leading-relaxed lg:pb-2">
            Photography is how I slow down and pay attention.
            The same eye that frames a shot — framing a problem,
            a system, an explanation.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-[#111111] group ${
                photo.aspect === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 z-10 relative"
              />
              {/* Placeholder shown when image missing */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#111111]">
                <div className="text-center text-[#2a2a2a]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    className="mx-auto mb-2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span className="text-xs tracking-widest uppercase">
                    0{i + 1}
                  </span>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#333333] tracking-widest uppercase text-right">
          Photos coming soon
        </p>

      </div>
    </section>
  );
}
