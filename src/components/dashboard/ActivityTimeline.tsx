"use client";

import { Activity as ActivityIcon } from "lucide-react";
import { RECENT_ACTIVITIES } from "@/data/dashboard";
import { Avatar } from "@/components/ui/Avatar";

export function ActivityTimeline() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 h-full">
      <div className="flex items-center gap-2 mb-6">
        <ActivityIcon className="h-5 w-5 text-[#9D1A10]" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Recent Activity</h2>
      </div>

      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 space-y-6 pb-2">
        {RECENT_ACTIVITIES.map((activity, i) => (
          <div key={activity.id} className="relative pl-6">
            {/* Timeline dot */}
            <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-[#9D1A10]" />
            
            <div className="flex items-start gap-3">
              <Avatar initials={activity.avatar} name={activity.user} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">{activity.user}</span>{" "}
                  {activity.action}{" "}
                  <span className="font-medium text-slate-900 dark:text-white">{activity.target}</span>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
