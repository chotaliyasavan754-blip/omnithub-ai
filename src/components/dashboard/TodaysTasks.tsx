"use client";

import { CheckCircle2, Clock, Calendar, Users, MessageSquare } from "lucide-react";
import { TODAYS_TASKS } from "@/data/dashboard";

const ICON_MAP = {
  clock: <Clock className="h-4 w-4" />,
  calendar: <Calendar className="h-4 w-4" />,
  users: <Users className="h-4 w-4" />,
  message: <MessageSquare className="h-4 w-4" />,
};

export function TodaysTasks() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle2 className="h-5 w-5 text-[#9D1A10]" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Today's Tasks</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {TODAYS_TASKS.map((task) => (
          <div 
            key={task.id}
            className="flex flex-col p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2 group-hover:text-[#9D1A10] transition-colors">
              {ICON_MAP[task.iconKey]}
              <span className="text-2xl font-bold text-slate-900 dark:text-white leading-none">
                {task.count}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">
              {task.title}
            </p>
            <p className="text-[10px] text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wider font-medium">
              {task.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
