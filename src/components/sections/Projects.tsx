"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20">
          <SectionLabel text="Selected Work" className="mb-4 block" />
          <h2
            className="font-heading font-extrabold text-[#fafafa] leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group border-t border-[#1e1e1e] py-12 grid grid-cols-1 lg:grid-cols-[120px_1fr_auto] gap-8 hover:bg-[#0d0d0d] -mx-6 px-6 transition-colors"
            >
              {/* Number */}
              <div className="hidden lg:block">
                <span className="font-heading font-extrabold text-5xl text-[#1a1a1a] group-hover:text-[#222222] transition-colors leading-none">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="lg:hidden text-2xl font-heading font-bold text-[#1e1e1e]">
                    {project.number}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#fafafa] group-hover:text-[#00C896] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-[#00C896] text-xs tracking-widest uppercase mb-4">
                  {project.tagline}
                </p>

                <p className="text-[#888888] text-sm leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#555555]">
                      <span className="text-[#00C896] mt-1 text-xs">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 bg-[#111111] text-[#666666] border border-[#1e1e1e]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <div className="flex items-start">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-[#444444] hover:text-[#00C896] transition-colors border border-[#1e1e1e] hover:border-[#00C896]/40 px-3 py-2 group/link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                    <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                ) : (
                  <span className="text-xs text-[#333333] border border-[#1a1a1a] px-3 py-2">
                    Thesis
                  </span>
                )}
              </div>
            </div>
          ))}
          {/* Final border */}
          <div className="border-t border-[#1e1e1e]" />
        </div>

      </div>
    </section>
  );
}
