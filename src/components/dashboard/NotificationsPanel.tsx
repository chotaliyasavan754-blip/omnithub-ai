"use client";

import { Bell } from "lucide-react";
import { NOTIFICATIONS } from "@/data/dashboard";

export function NotificationsPanel() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-[#9D1A10]" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Notifications</h2>
        </div>
        <span className="text-xs font-semibold px-2 py-1 bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 rounded-full">
          {NOTIFICATIONS.filter((n) => n.unread).length} New
        </span>
      </div>

      <div className="space-y-4">
        {NOTIFICATIONS.slice(0, 8).map((notif, i) => (
          <div key={i} className="flex gap-3 items-start relative group cursor-pointer">
            {/* Unread indicator */}
            <div className={`mt-2 h-2 w-2 shrink-0 rounded-full ${notif.unread ? "bg-[#9D1A10]" : "bg-transparent"}`} />
            
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${notif.unread ? "font-semibold text-slate-900 dark:text-white" : "font-medium text-slate-700 dark:text-slate-300"}`}>
                {notif.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                {notif.desc}
              </p>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 shrink-0 whitespace-nowrap mt-1">
              {notif.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
