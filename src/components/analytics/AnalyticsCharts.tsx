"use client";

import {
  MONTHLY_DATA,
  MONTHLY_LABELS,
  WEEKLY_LABELS,
  WEEKLY_INBOUND,
  WEEKLY_OUTBOUND,
  TOP_AGENTS,
} from "@/data/analytics";
import { Avatar } from "@/components/ui/Avatar";

// ─── Monthly Volume Chart ─────────────────────────────────────────────────────

function MonthlyChart() {
  const max = Math.max(...MONTHLY_DATA);
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Monthly Volume</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">Messages sent per month</p>
      <div className="flex items-end gap-2 h-36">
        {MONTHLY_DATA.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md transition-all hover:opacity-80"
              style={{
                height: `${(v / max) * 100}%`,
                background: "linear-gradient(to top, #9D1A10, #c4281c)",
                minHeight: "4px",
              }}
            />
            <span className="text-[9px] text-slate-400">{MONTHLY_LABELS[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Weekly Inbound/Outbound ──────────────────────────────────────────────────

function WeeklyChart() {
  const max = Math.max(...WEEKLY_INBOUND, ...WEEKLY_OUTBOUND);
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Weekly Activity</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Inbound vs Outbound</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#9D1A10]" /> Inbound</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-violet-500" /> Outbound</span>
        </div>
      </div>
      <div className="flex items-end gap-3 h-28">
        {WEEKLY_LABELS.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full items-end gap-0.5 h-24">
              <div className="flex-1 rounded-t-sm bg-[#9D1A10] opacity-80" style={{ height: `${(WEEKLY_INBOUND[i] / max) * 100}%` }} />
              <div className="flex-1 rounded-t-sm bg-violet-500 opacity-80" style={{ height: `${(WEEKLY_OUTBOUND[i] / max) * 100}%` }} />
            </div>
            <span className="text-[10px] text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Top Agents Table ─────────────────────────────────────────────────────────

function TopAgents() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Top Agents</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Best performers this month</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              {["Agent", "Resolved", "Satisfaction", "Avg. Response"].map((h) => (
                <th key={h} className="py-2 pr-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {TOP_AGENTS.map((agent, i) => (
              <tr key={agent.name} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-slate-400 w-4">{i + 1}</span>
                    <Avatar initials={agent.avatar} name={agent.name} size="sm" />
                    <span className="font-medium text-slate-900 dark:text-white">{agent.name}</span>
                  </div>
                </td>
                <td className="py-3 pr-4 font-semibold text-slate-900 dark:text-white">{agent.resolved}</td>
                <td className="py-3 pr-4 text-emerald-600 dark:text-emerald-400 font-semibold">{agent.satisfaction}</td>
                <td className="py-3 text-slate-500 dark:text-slate-400">{agent.responseTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Combined Charts export ───────────────────────────────────────────────────

export function AnalyticsCharts() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <MonthlyChart />
        <WeeklyChart />
      </div>
      <TopAgents />
    </div>
  );
}
