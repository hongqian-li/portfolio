"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { timeline, type TimelineEntry } from "@/lib/data";

function TimelineList({ entries }: { entries: TimelineEntry[] }) {
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
                  <p className="text-sm mt-0.5 text-[#00C896]">{item.org}</p>
                </div>
                <span className="text-xs text-[#444444] font-mono shrink-0 pt-1 whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-[#C8C8C8] text-sm leading-relaxed mt-3">
                {item.description}
              </p>

              {/* Thumbnail image */}
              {item.image && (
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block"
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: 200,
                      height: 133,
                      objectFit: "cover",
                      borderRadius: 4,
                      display: "block",
                    }}
                  />
                </a>
              )}

              {/* Certificate link */}
              {item.certificate && (
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#444444] hover:text-[#00C896] transition-colors"
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
              Not a straight
              <br />
              line
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[#C8C8C8] text-sm leading-relaxed max-w-sm">
              My path from broadcast journalism to AI engineering is not career confusion —
              it's a genuine differentiator. I understand both sides of the room:
              the technical architecture, and the people who need to trust it.
            </p>
          </div>
        </div>

        {/* Single unified timeline */}
        <TimelineList entries={timeline} />

        {/* Stats callout */}
        <div className="mt-20 pt-8 border-t border-[#1e1e1e]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Presented at", value: "Demola National Finals, Helsinki" },
              { label: "Coordinated", value: "100+ international students' arrival" },
              { label: "Lived & studied in", value: "China · Finland · Austria · Portugal · Spain" },
            ].map(({ label, value }) => (
              <div key={label} className="border-l border-[#1e1e1e] pl-4">
                <p className="text-xs text-[#444444] tracking-widest uppercase mb-1">{label}</p>
                <p className="text-sm text-[#C8C8C8]">{value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
