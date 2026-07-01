"use client";

import { Calendar, CheckCircle2 } from "lucide-react";
import { UPCOMING_REMINDERS } from "@/data/dashboard";

export function ReminderCard() {
  const getBadgeColor = (date: string) => {
    switch (date) {
      case "Today":
        return "bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20";
      case "Tomorrow":
        return "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20";
      case "This Week":
        return "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20";
      default:
        return "bg-slate-100 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400 border border-slate-200 dark:border-slate-500/20";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 h-full">
      <div className="flex items-center gap-2 mb-5">
        <Calendar className="h-5 w-5 text-[#9D1A10]" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Upcoming Reminders</h2>
      </div>

      <div className="space-y-3">
        {UPCOMING_REMINDERS.map((reminder) => (
          <div 
            key={reminder.id}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <button className="h-5 w-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center group-hover:border-[#9D1A10] transition-colors shrink-0">
                <CheckCircle2 className="h-3.5 w-3.5 text-transparent group-hover:text-[#9D1A10] transition-colors" />
              </button>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {reminder.title}
              </p>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ml-2 ${getBadgeColor(reminder.date)}`}>
              {reminder.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
