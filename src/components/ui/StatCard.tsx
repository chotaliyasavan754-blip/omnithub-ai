"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  /** Tailwind gradient classes e.g. "from-indigo-500 to-violet-600" */
  accent: string;
}

/**
 * Dark-themed stat card with glow accent, icon, value, and delta label.
 * Used on the Contacts page stats row.
 */
export function StatCard({ label, value, delta, icon: Icon, accent }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:border-white/10 hover:bg-white/[0.05]">
      <div
        className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-30 bg-gradient-to-br ${accent}`}
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{value}</p>
          <p className="mt-1 text-[11px] font-medium text-emerald-400">{delta}</p>
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} bg-opacity-10 ring-1 ring-white/10`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}
