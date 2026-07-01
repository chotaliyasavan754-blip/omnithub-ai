"use client";

import { SearchBar } from "@/components/ui/SearchBar";
import { MESSAGE_STATUS_TABS, type MessageStatusTab } from "@/data/messages";

interface MessagesTabsProps {
  activeTab: MessageStatusTab;
  tabCounts: Record<MessageStatusTab, number>;
  searchTerm: string;
  onTabChange: (tab: MessageStatusTab) => void;
  onSearchChange: (value: string) => void;
}

export function MessagesTabs({
  activeTab,
  tabCounts,
  searchTerm,
  onTabChange,
  onSearchChange,
}: MessagesTabsProps) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 lg:px-6">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Messages</h1>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            All your conversations in one place
          </p>
        </div>
        <div className="hidden sm:block">
          <SearchBar
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search messages…"
            variant="light"
            className="w-56"
          />
        </div>
      </div>

      {/* Status tabs */}
      <div className="flex gap-0.5 overflow-x-auto">
        {MESSAGE_STATUS_TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`flex items-center gap-1.5 whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-[#9D1A10] text-[#9D1A10] dark:text-red-400"
                  : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              }`}
            >
              {tab}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  isActive
                    ? "bg-[#9D1A10]/10 text-[#9D1A10] dark:bg-red-900/30 dark:text-red-400"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}
              >
                {tabCounts[tab]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
