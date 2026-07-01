"use client";

import { COPILOT_STATS } from "@/data/aiCopilot";
import { CircularProgress } from "@/components/common/CircularProgress";

export function CopilotStats() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 relative overflow-hidden">
      {/* Glow accents */}
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#9D1A10] blur-[60px] opacity-30" />
      <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-violet-500 blur-[60px] opacity-20" />

      <div className="relative z-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
          AI Credit Usage
        </p>

        {/* Circular credit gauge */}
        <div className="flex items-center gap-4 mb-5">
          <CircularProgress percentage={84} size={72} strokeWidth={5} color="#9D1A10" />
          <div>
            <p className="text-2xl font-bold text-white">8,420</p>
            <p className="text-xs text-slate-500">of 10,000 credits</p>
          </div>
        </div>

        {/* Stats list */}
        <div className="space-y-3">
          {COPILOT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between border-t border-slate-700/50 pt-3"
            >
              <span className="text-xs text-slate-400">{stat.label}</span>
              <span className={`text-sm font-semibold ${stat.accent}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
