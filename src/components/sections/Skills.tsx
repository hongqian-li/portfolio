"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { skills } from "@/lib/data";

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
              <span className="text-[#C8C8C8]">With</span>
            </h2>
          </div>
          <p className="text-[#C8C8C8] text-sm max-w-xs leading-relaxed lg:pb-2">
            Cloud-native infrastructure, privacy-first AI, and production-grade DevOps —
            built to last, auditable, and explainable.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e1e1e]">
          {skills.map((group, i) => (
            <div key={i} className="bg-[#111111] p-8 hover:bg-[#161616] transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-[#444444] font-mono">
                  0{i + 1}
                </span>
                <span className="w-6 h-px bg-[#00C896] mt-2 group-hover:w-12 transition-all duration-300" />
              </div>
              <h3 className="font-heading font-bold text-[#fafafa] text-base mb-5 tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs text-[#C8C8C8] border border-[#1e1e1e] hover:border-[#00C896]/50 hover:text-[#fafafa] transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning / growing */}
        <div className="mt-16 pt-8 border-t border-[#1e1e1e] flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <span className="text-xs text-[#444444] tracking-widest uppercase shrink-0">
            Also exploring
          </span>
          <div className="w-8 h-px bg-[#2a2a2a] hidden sm:block" />
          <div className="flex flex-wrap gap-2">
            {["LangGraph", "Agents SDK", "Azure AI Foundry", "Prompt Caching"].map((item) => (
              <span key={item} className="text-xs text-[#555555] px-2 py-1 border border-dashed border-[#2a2a2a]">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
