"use client";

import { MessageCircle } from "lucide-react";
import { COMMUNICATION_SUMMARY } from "@/data/dashboard";
import { CHANNEL_ICONS } from "@/constants/theme";

export function CommunicationSummary() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 h-full">
      <div className="flex items-center gap-2 mb-5">
        <MessageCircle className="h-5 w-5 text-[#9D1A10]" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Communication Summary</h2>
      </div>

      <div className="space-y-3">
        {COMMUNICATION_SUMMARY.map((stat, i) => (
          <div 
            key={i}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-slate-700 text-[#9D1A10] shadow-sm">
                {CHANNEL_ICONS[stat.channel]}
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {stat.channel}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-center">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">{stat.today}</span>
                <span className="text-[9px] uppercase tracking-wider font-medium text-slate-500 mt-1">Today</span>
              </div>
              <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-rose-500 leading-none">{stat.unread}</span>
                <span className="text-[9px] uppercase tracking-wider font-medium text-slate-500 mt-1">Unread</span>
              </div>
              <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-sm font-bold text-amber-500 leading-none">{stat.pending}</span>
                <span className="text-[9px] uppercase tracking-wider font-medium text-slate-500 mt-1">Pending</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
