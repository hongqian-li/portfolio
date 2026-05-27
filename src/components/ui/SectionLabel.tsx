"use client";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs tracking-[0.2em] uppercase text-[#00C896] font-medium font-body ${className}`}
    >
      {text}
    </span>
  );
}
