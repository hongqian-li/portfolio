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

export default function Thesis() {
  return (
    <section id="thesis" className="py-32 px-6 border-t border-[#1e1e1e] bg-[#111111]">
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
              for Enterprise <span className="text-[#00C896]">AI Chatbots</span>
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

        {/* Context */}
        <div className="mb-14 p-8 border border-[#1e1e1e] bg-[#0d0d0d] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#2a2a2a]" />
          <p className="text-[#D0D0D0] text-sm leading-relaxed">
            While testing HAMK's official website chatbot, I found that a pregnancy-related question
            (GDPR Article 9 sensitive data) was passed directly to the LLM with no detection in place,
            creating compliance exposure with no legal basis for that processing.
            This thesis built a 3-layer privacy system around a RAG pipeline
            (ChromaDB + llama3.2 locally, Azure OpenAI in cloud):
            safe queries are answered from a verified knowledge base;
            sensitive ones are routed to a human agent.
          </p>
        </div>

        {/* 3-layer system */}
        <div className="mb-6">
          <p className="text-xs text-[#686868] tracking-widest uppercase mb-6">
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

        {/* Key finding */}
        <div className="mb-14 px-8 py-6 border-l-2 border-[#00C896]/50 bg-[#0d0d0d]">
          <p className="text-xs text-[#00C896] tracking-widest uppercase mb-3">Key Finding</p>
          <p className="text-[#D0D0D0] text-sm leading-relaxed">
            LLM behavior on sensitive data is model-dependent and cannot be independently audited.
            gpt-4o-mini passed a pregnancy-related query without flagging it;
            llama3.2 correctly escalated the same query after the keyword list was refined.
            For EU deployments under GDPR, this is a production risk:
            the only part of the system a compliance audit can verify is what the deterministic layer documents.
          </p>
        </div>

        {/* Test coverage */}
        <div className="border-t border-[#1e1e1e] pt-8">
          <p className="text-xs text-[#686868] tracking-widest uppercase mb-6">
            Test Coverage · Local &amp; Azure
          </p>
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
