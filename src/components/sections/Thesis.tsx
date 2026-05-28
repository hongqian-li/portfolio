"use client";

import SectionLabel from "@/components/ui/SectionLabel";

const layers = [
  {
    number: "01",
    title: "Keyword Detection",
    subtitle: "GDPR Article 9",
    description:
      "Rule-based filtering for GDPR Article 9 special categories: health, religion, ethnicity, political opinion, biometric data. Flags both direct mentions and indirect references before any model is involved.",
    result: "Most reliable layer",
    accent: true,
  },
  {
    number: "02",
    title: "Prompt Injection Filter",
    subtitle: "Anti-manipulation",
    description:
      'Pattern-based detection for attempts to override privacy constraints ("Ignore previous instructions..."). Stops adversarial inputs before they reach the LLM.',
    result: "Stops manipulation",
    accent: false,
  },
  {
    number: "03",
    title: "LLM Fallback",
    subtitle: "Context classification",
    description:
      "llama3.2 (local) and gpt-4o-mini (Azure) serve as last-resort classifiers for ambiguous inputs. LLMs are the weakest layer, used only after deterministic checks pass.",
    result: "Last resort only",
    accent: false,
  },
];

const insights = [
  "LLM behaviour on sensitive inputs is model-dependent and cannot be reliably audited across deployments.",
  "Deterministic preprocessing is required for GDPR-compliant systems in production.",
  "Rule-based filters will generate false positives, but under GDPR this is acceptable compared to missed sensitive data.",
];

export default function Thesis() {
  return (
    <section id="thesis" className="py-32 px-6 border-t border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
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
            <p className="text-[#D0D0D0] text-sm leading-relaxed">
              Graduating June 2026 · HAMK Häme University of Applied Sciences
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Flask", "Azure", "Terraform", "ChromaDB", "RAG", "GDPR", "EU AI Act"].map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 border border-[#2a2a2a] text-[#777777]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* System Context + Decision Point */}
        <div className="mb-14 p-8 border border-[#1e1e1e] bg-[#111111] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#2a2a2a]" />
          <div className="mb-6">
            <p className="text-xs text-[#686868] tracking-widest uppercase mb-3">System Context</p>
            <p className="text-[#D0D0D0] text-sm leading-relaxed">
              A GDPR Article 9 sensitive query was processed directly by an LLM in HAMK's public chatbot without prior detection or routing controls.
              It was treated like any other request.
              This thesis designed a privacy-first RAG architecture combining a verified knowledge base (ChromaDB),
              deterministic classification layers, and selective LLM inference:
              safe queries answered from the knowledge base; sensitive ones routed to human support.
            </p>
          </div>
          <div>
            <p className="text-xs text-[#686868] tracking-widest uppercase mb-3">Decision Point</p>
            <p className="text-[#D0D0D0] text-sm leading-relaxed">
              An initial prototype used an LLM-based classifier as the primary routing mechanism.
              The system showed inconsistent outputs across models (gpt-4o-mini vs llama3.2), making the LLM-based classifier unreliable for auditability.
              This led to a redesign: deterministic rules became the primary control layer,
              with LLMs downgraded to a fallback role.
            </p>
          </div>
        </div>

        {/* Defense-in-depth architecture */}
        <div className="mb-6">
          <p className="text-xs text-[#686868] tracking-widest uppercase mb-6">
            Defense-in-Depth Architecture
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
                  <span className="font-mono text-xs text-[#777777]">{layer.number}</span>
                  {layer.accent ? (
                    <span className="text-xs text-[#00C896] border border-[#00C896]/30 px-2 py-0.5">
                      {layer.result}
                    </span>
                  ) : (
                    <span className="text-xs text-[#686868] border border-[#1e1e1e] px-2 py-0.5">
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
                  <p className="text-[#D0D0D0] text-sm leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Insights */}
        <div className="mb-8 px-8 py-6 border-l-2 border-[#00C896]/50 bg-[#111111]">
          <p className="text-xs text-[#00C896] tracking-widest uppercase mb-4">Engineering Insights</p>
          <div className="flex flex-col gap-3">
            {insights.map((insight, i) => (
              <p key={i} className="text-sm text-[#D0D0D0] leading-relaxed">{insight}</p>
            ))}
          </div>
        </div>

        {/* Key Outcome */}
        <div className="mb-14 px-8 py-5 border border-[#1e1e1e] bg-[#111111]">
          <p className="text-xs text-[#686868] tracking-widest uppercase mb-2">Key Outcome</p>
          <p className="text-[#D0D0D0] text-sm leading-relaxed">
            The system prioritises auditability and regulatory compliance over model autonomy,
            making it suitable for production systems handling sensitive personal data under GDPR.
          </p>
        </div>

        {/* Test coverage */}
        <div className="border-t border-[#1e1e1e] pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <p className="text-xs text-[#686868] tracking-widest uppercase">
              Test Coverage · Local &amp; Azure
            </p>
            <p className="text-xs text-[#777777] font-mono">
              4 input categories · local + Azure · 100% final accuracy
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Type 1", value: "General queries" },
              { label: "Type 2", value: "Direct sensitive data" },
              { label: "Type 3", value: "Indirect sensitive data" },
              { label: "Type 4", value: "Prompt injection attacks" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-[#686868] tracking-widest uppercase mb-1">{label}</p>
                <p className="text-sm text-[#D0D0D0]">{value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
