"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { timeline } from "@/lib/data";

const trackColors: Record<string, string> = {
  tech: "#00C896",
  bridge: "#888888",
  previous: "#444444",
};

const trackLabels: Record<string, string> = {
  tech: "Tech Career",
  bridge: "Career Bridge",
  previous: "Previous Career",
};

export default function Background() {
  return (
    <section id="background" className="py-32 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <SectionLabel text="Background" className="mb-4 block" />
            <h2
              className="font-heading font-extrabold text-[#fafafa] leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Not a{" "}
              <span className="text-[#333333]">straight</span>
              <br />
              line
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[#666666] text-sm leading-relaxed max-w-sm">
              My path from broadcast journalism to AI engineering is not career confusion —
              it's a genuine differentiator. I understand both sides of the room:
              the technical architecture, and the people who need to trust it.
            </p>
          </div>
        </div>

        {/* Track legend */}
        <div className="flex flex-wrap gap-6 mb-12">
          {Object.entries(trackLabels).map(([track, label]) => (
            <div key={track} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: trackColors[track] }}
              />
              <span className="text-xs text-[#555555] tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#1e1e1e] hidden sm:block" />

          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="group relative sm:pl-10 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0a0a0a] hidden sm:block transition-transform group-hover:scale-125"
                  style={{ backgroundColor: trackColors[item.track] }}
                />

                {/* Card */}
                <div className="border border-[#1e1e1e] p-6 hover:border-[#2a2a2a] transition-colors bg-[#0a0a0a] hover:bg-[#0d0d0d]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-[#fafafa] text-base">
                        {item.role}
                      </h3>
                      <p className="text-sm" style={{ color: trackColors[item.track] }}>
                        {item.org}
                      </p>
                    </div>
                    <span className="text-xs text-[#444444] font-mono shrink-0 pt-1">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication differentiator callout */}
        <div className="mt-20 pt-8 border-t border-[#1e1e1e]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Presented at",
                value: "Demola National Finals, Helsinki",
              },
              {
                label: "Managed",
                value: "100+ international students as Arrival Specialist",
              },
              {
                label: "Lived & studied in",
                value: "China · Finland · Austria · Portugal · Spain",
              },
            ].map(({ label, value }) => (
              <div key={label} className="border-l border-[#1e1e1e] pl-4">
                <p className="text-xs text-[#444444] tracking-widest uppercase mb-1">{label}</p>
                <p className="text-sm text-[#888888]">{value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
