"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";

const photos = [
  { src: "/images/photography/photo-1.jpeg", alt: "Photography 1" },
  { src: "/images/photography/photo-2.jpeg", alt: "Photography 2" },
  { src: "/images/photography/photo-3.jpeg", alt: "Photography 3" },
  { src: "/images/photography/photo-4.jpeg", alt: "Photography 4" },
  { src: "/images/photography/photo-5.jpeg", alt: "Photography 5" },
  { src: "/images/photography/photo-6.jpeg", alt: "Photography 6" },
  { src: "/images/photography/photo-7.jpeg", alt: "Photography 7" },
  { src: "/images/photography/photo-8.jpeg", alt: "Photography 8" },
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
          <p className="text-[#C8C8C8] text-sm max-w-xs leading-relaxed lg:pb-2">
            Photography is how I slow down and pay attention.
            The same eye that frames a shot — framing a problem,
            a system, an explanation.
          </p>
        </div>

        {/* Photo grid: 2 cols mobile → 4 cols desktop, 2 rows */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-[#0a0a0a] group aspect-[3/4]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 z-10 relative"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/20 transition-colors duration-300 z-20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
