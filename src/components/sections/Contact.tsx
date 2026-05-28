"use client";

import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">

        {/* Big CTA text */}
        <div className="mb-20">
          <SectionLabel text="Contact" className="mb-6 block" />
          <h2
            className="font-heading font-extrabold text-[#fafafa] leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Let's
            <br />
            <span style={{ WebkitTextStroke: "1px #fafafa", color: "transparent" }}>talk.</span>
          </h2>
          <p className="text-[#D0D0D0] text-base max-w-md leading-relaxed">
            I'm looking for roles in AI consulting, AI application development,
            and cloud engineering, based in Finland, open to hybrid or remote across the EU.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1e1e1e] mb-20">
          <a
            href="mailto:hongqi4nli@gmail.com"
            className="group bg-[#0a0a0a] p-8 hover:bg-[#0d0d0d] transition-colors flex flex-col gap-3"
          >
            <span className="text-xs text-[#686868] tracking-widest uppercase">Email</span>
            <span className="text-[#D0D0D0] group-hover:text-[#00C896] transition-colors text-sm break-all">
              hongqi4nli@gmail.com
            </span>
            <span className="text-[#777777] group-hover:text-[#00C896] text-lg transition-all group-hover:translate-x-1 mt-auto inline-block">
              →
            </span>
          </a>

          <a
            href="https://github.com/hongqian-li"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0a0a0a] p-8 hover:bg-[#0d0d0d] transition-colors flex flex-col gap-3"
          >
            <span className="text-xs text-[#686868] tracking-widest uppercase">GitHub</span>
            <span className="text-[#D0D0D0] group-hover:text-[#00C896] transition-colors text-sm">
              github.com/hongqian-li
            </span>
            <span className="text-[#777777] group-hover:text-[#00C896] text-lg transition-all group-hover:translate-x-1 mt-auto inline-block">
              ↗
            </span>
          </a>

          <a
            href="https://linkedin.com/in/hongqian-li-9508671a6"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0a0a0a] p-8 hover:bg-[#0d0d0d] transition-colors flex flex-col gap-3"
          >
            <span className="text-xs text-[#686868] tracking-widest uppercase">LinkedIn</span>
            <span className="text-[#D0D0D0] group-hover:text-[#00C896] transition-colors text-sm">
              linkedin.com/in/hongqian-li
            </span>
            <span className="text-[#777777] group-hover:text-[#00C896] text-lg transition-all group-hover:translate-x-1 mt-auto inline-block">
              ↗
            </span>
          </a>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[#1e1e1e]">
          <p className="text-xs text-[#777777] tracking-widest uppercase">
            Hongqian Li · Tampere, Finland · 2026
          </p>
          <p className="text-xs text-[#2a2a2a]">
            Built with Next.js · Claude Code · Deployed on Vercel
          </p>
        </div>

      </div>
    </section>
  );
}
