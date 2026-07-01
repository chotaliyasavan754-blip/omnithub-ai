"use client";

import { Users, Inbox, MessageSquare, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { DASHBOARD_STATS } from "@/data/dashboard";

const ICON_MAP = {
  users: <Users className="h-5 w-5" />,
  inbox: <Inbox className="h-5 w-5" />,
  "message-square": <MessageSquare className="h-5 w-5" />,
  clock: <Clock className="h-5 w-5" />,
};

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {DASHBOARD_STATS.map((stat, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-all hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700"
        >
          {/* Subtle gradient background */}
          <div
            className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-5 blur-2xl transition-opacity group-hover:opacity-10 ${stat.gradient}`}
          />

          <div className="flex items-center justify-between">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm ${stat.gradient}`}>
              {ICON_MAP[stat.iconKey as keyof typeof ICON_MAP]}
            </div>
            
            <div className={`flex items-center gap-1 text-xs font-semibold ${stat.changeType === "up" ? "text-emerald-500" : "text-amber-500"}`}>
              {stat.changeType === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {stat.change}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              {stat.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
