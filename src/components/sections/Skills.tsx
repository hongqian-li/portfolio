"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { skillTiers } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-t border-[#1e1e1e] bg-[#111111]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div>
            <SectionLabel text="Tech Stack" className="mb-4 block" />
            <h2
              className="font-heading font-extrabold text-[#fafafa] leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              What I Build
              <br />
              <span className="text-[#D0D0D0]">With</span>
            </h2>
          </div>
          <p className="text-[#D0D0D0] text-sm max-w-xs leading-relaxed lg:pb-2">
            Python, Azure, Terraform, and privacy-first AI. Experience in both local development and cloud deployment on Azure.
          </p>
        </div>

        {/* Skill tiers */}
        <div className="flex flex-col divide-y divide-[#1e1e1e]">
          {skillTiers.map((tier) => (
            <div
              key={tier.tier}
              className="py-8 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 items-start"
            >
              <span className="text-xs text-[#686868] font-mono tracking-widest uppercase shrink-0 sm:pt-1">
                {tier.tier}
              </span>
              <div className="flex flex-wrap gap-2">
                {tier.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-xs border transition-all duration-200 cursor-default ${
                      tier.tier === "Focus"
                        ? "text-[#00C896]/70 border-[#00C896]/20 hover:border-[#00C896]/40 hover:text-[#00C896]"
                        : "text-[#D0D0D0] border-[#1e1e1e] hover:border-[#00C896]/50 hover:text-[#fafafa]"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Also worked with */}
        <div className="mt-12 pt-8 border-t border-[#1e1e1e] flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <span className="text-xs text-[#686868] tracking-widest uppercase shrink-0">
            Also worked with
          </span>
          <div className="w-8 h-px bg-[#2a2a2a] hidden sm:block" />
          <div className="flex flex-wrap gap-2">
            {["Nginx", "Apache", "Java", "UiPath", "Robot Framework", "OutSystems", "Google Analytics"].map((item) => (
              <span key={item} className="text-xs text-[#777777] px-2 py-1 border border-dashed border-[#2a2a2a]">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Also exploring */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <span className="text-xs text-[#686868] tracking-widest uppercase shrink-0">
            Also exploring
          </span>
          <div className="w-8 h-px bg-[#2a2a2a] hidden sm:block" />
          <div className="flex flex-wrap gap-2">
            {["Copilot Studio", "Power Automate", "LangChain", "N8N"].map((item) => (
              <span key={item} className="text-xs text-[#777777] px-2 py-1 border border-dashed border-[#2a2a2a]">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
