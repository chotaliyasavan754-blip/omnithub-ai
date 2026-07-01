"use client";

import { Inbox, Pin, Archive, Filter } from "lucide-react";
import { INBOX_CHANNELS } from "@/data/inbox";
import type { Channel } from "@/types";

type FolderKey = "all" | "unread" | "pinned" | "archived";

interface FolderItem {
  key: FolderKey;
  label: string;
  icon: React.ReactNode;
}

const FOLDERS: FolderItem[] = [
  { key: "all",      label: "All",      icon: <Inbox      className="h-4 w-4" /> },
  { key: "unread",   label: "Unread",   icon: <Filter     className="h-4 w-4" /> },
  { key: "pinned",   label: "Pinned",   icon: <Pin        className="h-4 w-4" /> },
  { key: "archived", label: "Archived", icon: <Archive    className="h-4 w-4" /> },
];

interface InboxSidebarProps {
  activeFolder: FolderKey;
  activeChannel: Channel | "All";
  folderCounts: Record<FolderKey, number>;
  onFolderChange: (folder: FolderKey) => void;
  onChannelChange: (channel: Channel | "All") => void;
}

export function InboxSidebar({
  activeFolder,
  activeChannel,
  folderCounts,
  onFolderChange,
  onChannelChange,
}: InboxSidebarProps) {
  return (
    <aside className="flex w-48 shrink-0 flex-col gap-6 border-r border-white/5 bg-white/[0.02] p-4">
      {/* Folders */}
      <div>
        <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Folders
        </p>
        <nav className="space-y-0.5">
          {FOLDERS.map((folder) => {
            const isActive = activeFolder === folder.key;
            return (
              <button
                key={folder.key}
                onClick={() => onFolderChange(folder.key)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#9D1A10]/20 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {folder.icon}
                  {folder.label}
                </span>
                {folderCounts[folder.key] > 0 && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      isActive ? "bg-[#9D1A10] text-white" : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {folderCounts[folder.key]}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Channel Filters */}
      <div>
        <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Channel
        </p>
        <nav className="space-y-0.5">
          {INBOX_CHANNELS.map((ch) => {
            const isActive = activeChannel === ch;
            return (
              <button
                key={ch}
                onClick={() => onChannelChange(ch as Channel | "All")}
                className={`flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-white/[0.06] font-medium text-white"
                    : "text-slate-500 hover:bg-white/5 hover:text-slate-300"
                }`}
              >
                {ch}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
