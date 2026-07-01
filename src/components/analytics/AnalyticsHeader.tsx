"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { ANALYTICS_STATS, MINI_CHART_DATA } from "@/data/analytics";
import { MiniChart } from "@/components/common/MiniChart";

const CHART_COLORS: Record<string, string> = {
  "from-violet-500 to-purple-600": "#8b5cf6",
  "from-blue-500 to-cyan-500":     "#3b82f6",
  "from-emerald-500 to-teal-500":  "#10b981",
  "from-amber-500 to-orange-500":  "#f59e0b",
};

export function AnalyticsHeader() {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Analytics</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Performance insights across all channels
      </p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ANALYTICS_STATS.map((stat) => {
          const chartColor = CHART_COLORS[stat.gradient] ?? "#8b5cf6";
          const isUp = stat.changeType === "up";
          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                  {isUp
                    ? <TrendingUp className="h-5 w-5 text-white" />
                    : <TrendingDown className="h-5 w-5 text-white" />
                  }
                </div>
                <MiniChart data={MINI_CHART_DATA} color={chartColor} />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <span className={`mt-1 inline-flex items-center gap-0.5 text-xs font-semibold ${
                isUp ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"
              }`}>
                {isUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {stat.change} vs last month
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
