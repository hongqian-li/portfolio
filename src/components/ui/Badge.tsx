"use client";

interface BadgeProps {
  available?: boolean;
}

export default function Badge({ available = true }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e1e1e] bg-[#111111] text-sm text-[#fafafa]/80">
      <span
        className="relative flex h-2 w-2"
        aria-hidden="true"
      >
        {available && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C896] opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            available ? "bg-[#00C896]" : "bg-[#666666]"
          }`}
        />
      </span>
      {available ? "Available for opportunities" : "Not currently available"}
    </span>
  );
}
