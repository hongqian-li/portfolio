"use client";

import SectionLabel from "@/components/ui/SectionLabel";

const layers = [
  {
    number: "01",
    title: "Keyword Detection",
    subtitle: "GDPR Article 9",
    description:
      "Deterministic filtering for special category data — health, religion, ethnicity, political opinion, biometric identifiers. Catches explicit references with zero LLM overhead.",
    result: "Most reliable layer",
    accent: true,
  },
  {
    number: "02",
    title: "Prompt Injection Filter",
    subtitle: "Anti-manipulation",
    description:
      "Pattern-based detection for attempts to override privacy constraints. Stops adversarial inputs before they reach the LLM — no model can be instructed to bypass this layer.",
    result: "Stops manipulation",
    accent: false,
  },
  {
    number: "03",
    title: "LLM Fallback",
    subtitle: "Context classification",
    description:
      "llama3.2 (local) and gpt-4o-mini (Azure) as a last-resort classifier for ambiguous inputs. Research showed gpt-4o-mini failed an indirect sensitive query that llama3.2 blocked — proving LLMs alone are insufficient for compliance.",
    result: "Last resort only",
    accent: false,
  },
];

export default function Thesis() {
  return (
    <section id="thesis" className="py-32 px-6 border-t border-[#1e1e1e] bg-[#111111]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <SectionLabel text="Bachelor's Thesis" className="mb-4 block" />
            <h2
              className="font-heading font-extrabold text-[#fafafa] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 3rem)" }}
            >
              Security by Design
              <br />
              for Enterprise AI Chatbots
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="text-[#C8C8C8] text-sm leading-relaxed">
              Graduating June 2026 · HAMK Häme University of Applied Sciences
            </p>
            <div className="flex flex-wrap gap-2">
              {["Azure", "Terraform", "Norway East", "GDPR", "EU AI Act", "Zero Trust"].map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 border border-[#2a2a2a] text-[#555555]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key finding callout */}
        <div className="mb-16 p-8 border border-[#00C896]/20 bg-[#00C896]/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#00C896]" />
          <p className="text-xs text-[#00C896] tracking-widest uppercase mb-3">Key Research Finding</p>
          <p className="text-[#fafafa] text-lg font-light leading-relaxed max-w-3xl">
            "Deterministic keyword detection outperforms LLM-based classification for GDPR compliance.
            gpt-4o-mini{" "}
            <span className="text-[#ff6b6b]">failed</span> an indirect sensitive query that llama3.2{" "}
            <span className="text-[#00C896]">correctly blocked</span> —
            proving LLMs alone are unreliable for compliance-critical use cases."
          </p>
        </div>

        {/* 3-layer system */}
        <div className="mb-4">
          <p className="text-xs text-[#444444] tracking-widest uppercase mb-8">
            3-Layer Privacy Classification System
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {layers.map((layer) => (
              <div
                key={layer.number}
                className={`p-8 flex flex-col gap-4 ${
                  layer.accent ? "bg-[#191919]" : "bg-[#111111]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#333333]">{layer.number}</span>
                  {layer.accent && (
                    <span className="text-xs text-[#00C896] border border-[#00C896]/30 px-2 py-0.5">
                      {layer.result}
                    </span>
                  )}
                  {!layer.accent && (
                    <span className="text-xs text-[#444444] border border-[#1e1e1e] px-2 py-0.5">
                      {layer.result}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#fafafa] text-base mb-1">
                    {layer.title}
                  </h3>
                  <p className="text-[#00C896] text-xs tracking-widest uppercase mb-4">
                    {layer.subtitle}
                  </p>
                  <p className="text-[#C8C8C8] text-sm leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure note */}
        <div className="mt-12 pt-8 border-t border-[#1e1e1e] grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Infrastructure", value: "Terraform IaC on Azure" },
            { label: "Data Residency", value: "Norway East (EU GDPR)" },
            { label: "Architecture", value: "Zero Trust + EU AI Act" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs text-[#444444] tracking-widest uppercase mb-1">{label}</p>
              <p className="text-sm text-[#C8C8C8]">{value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
