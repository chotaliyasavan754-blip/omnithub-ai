"use client";

import { USAGE_STATS } from "@/data/billing";

export function UsageStats() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Current Usage</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">Billing cycle: Dec 1–31, 2025</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {USAGE_STATS.map((stat) => {
          const pct = Math.round((stat.used / stat.total) * 100);
          const isWarning = pct >= 80;
          return (
            <div key={stat.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">{stat.label}</span>
                <span className={`font-semibold ${isWarning ? "text-amber-600 dark:text-amber-400" : "text-slate-900 dark:text-white"}`}>
                  {stat.used.toLocaleString()} / {stat.total.toLocaleString()} {stat.unit}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className={`h-2 rounded-full transition-all duration-700 ${
                    isWarning ? "bg-amber-500" : stat.color
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-600">{pct}% used</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
