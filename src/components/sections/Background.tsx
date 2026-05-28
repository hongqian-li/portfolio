"use client";

import { useState, useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { timeline, type TimelineEntry } from "@/lib/data";

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const src = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(index - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(index + 1);
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose, onNavigate, index, hasPrev, hasNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.85)", animation: "lightbox-in 0.2s ease" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#aaaaaa] hover:text-white transition-colors bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a]"
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Prev button */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(index - 1); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#aaaaaa] hover:text-white transition-colors bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a]"
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <polyline points="10,2 4,8 10,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(index + 1); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#aaaaaa] hover:text-white transition-colors bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a]"
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <polyline points="6,2 12,8 6,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Counter / hint */}
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#777777] tracking-widest uppercase select-none">
        {images.length > 1 ? `${index + 1} / ${images.length} · ` : ""}Click anywhere or press Esc to close
      </span>

      <img
        src={src}
        alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain"
        style={{ animation: "lightbox-img-in 0.25s ease" }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function TimelineList({
  entries,
  onLightbox,
}: {
  entries: TimelineEntry[];
  onLightbox: (images: string[], index: number) => void;
}) {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#1e1e1e] hidden sm:block" />
      <div className="flex flex-col gap-0">
        {entries.map((item, i) => (
          <div key={i} className="group relative sm:pl-10 pb-8 last:pb-0">
            <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-[#0a0a0a] hidden sm:block transition-transform group-hover:scale-125 bg-[#00C896]" />
            <div className="border border-[#1e1e1e] p-6 hover:border-[#2a2a2a] transition-colors bg-[#0a0a0a] hover:bg-[#0d0d0d]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-heading font-bold text-[#fafafa] text-base leading-snug">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00C896] transition-colors"
                      >
                        {item.role}
                      </a>
                    ) : (
                      item.role
                    )}
                  </h3>
                  <p className="text-sm mt-0.5 text-[#888888]">{item.org}</p>
                </div>
                <span className="text-xs text-[#686868] font-mono shrink-0 pt-1 whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-[#D0D0D0] text-sm leading-loose mt-3">
                {item.description}
              </p>

              {/* Single thumbnail — opens lightbox */}
              {item.image && (
                <button
                  onClick={() => onLightbox([item.image!], 0)}
                  className="mt-4 block cursor-zoom-in"
                  aria-label="View full image"
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: 200,
                      height: 133,
                      objectFit: "cover",
                      objectPosition: item.imagePosition ?? "center",
                      borderRadius: 4,
                      display: "block",
                    }}
                  />
                </button>
              )}

              {/* Multi-image thumbnail strip */}
              {item.images && item.images.length > 0 && (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                  {item.images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => onLightbox(item.images!, idx)}
                      className="shrink-0 cursor-zoom-in"
                      aria-label={`View screen ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt=""
                        style={{
                          width: 72,
                          height: 128,
                          objectFit: "cover",
                          borderRadius: 4,
                          display: "block",
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* GitHub link */}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#aaaaaa] hover:text-[#00C896] transition-colors"
                >
                  GitHub ↗
                </a>
              )}

              {/* Certificate link */}
              {item.certificate && (
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#aaaaaa] hover:text-[#00C896] transition-colors"
                >
                  View Certificate ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Background() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <section id="background" className="py-32 px-6 border-t border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <SectionLabel text="Background" className="mb-4 block" />
            <h2
              className="font-heading font-extrabold text-[#fafafa] leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Not a <span className="text-[#00C896] italic">straight</span>
              <br />
              line
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[#D0D0D0] text-sm leading-relaxed max-w-sm">
              My path from broadcast hosting and client-facing roles to software engineering is non-linear. I have led presentations across professional and academic settings: Demola National Finals (Business Finland), Hämeenlinna City Hall, and RUN-EU BIP Smart Everything, where I was recognised as one of the best presenters. The same applies to technical demos and explaining AI systems to non-technical audiences.
            </p>
          </div>
        </div>

        {/* Single unified timeline */}
        <TimelineList entries={timeline} onLightbox={(images, index) => setLightbox({ images, index })} />

      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(i) => setLightbox({ images: lightbox.images, index: i })}
        />
      )}
    </section>
  );
}
