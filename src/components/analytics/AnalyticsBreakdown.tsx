"use client";

import { CHANNEL_BREAKDOWN } from "@/data/analytics";
import { CHANNEL_ICONS } from "@/constants/theme";

export function AnalyticsBreakdown() {
  const total = CHANNEL_BREAKDOWN.reduce((sum, c) => sum + c.count, 0);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Channel Breakdown</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
        Message distribution by channel
      </p>

      <div className="space-y-4">
        {CHANNEL_BREAKDOWN.map((item) => (
          <div key={item.channel}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <span>{CHANNEL_ICONS[item.channel]}</span>
                {item.channel}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {item.count.toLocaleString()} · {item.percentage}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className={`h-2 rounded-full transition-all duration-700 ${item.color}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-slate-100 dark:border-slate-800 pt-4 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total: <span className="font-bold text-slate-900 dark:text-white">{total.toLocaleString()}</span> messages
        </p>
      </div>
    </div>
  );
}
