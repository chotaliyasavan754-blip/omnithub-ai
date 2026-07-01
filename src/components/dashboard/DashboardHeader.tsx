"use client";

import { Bell, Search } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { SearchBar } from "@/components/ui/SearchBar";
import { useState } from "react";

export function DashboardHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
      {/* Greeting and Date */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Good morning, Marcus! 👋
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
          {today}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <div className="w-full sm:w-64">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search contacts, messages..."
            variant="light"
          />
        </div>
        
        <button className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors shadow-sm">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9D1A10] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9D1A10]"></span>
          </span>
        </button>

        <div className="hidden sm:block ml-1">
          <Avatar initials="MJ" name="Marcus Johnson" size="md" />
        </div>
      </div>
    </div>
  );
}
