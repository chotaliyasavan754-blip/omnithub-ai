"use client";

import { Pin, Mail } from "lucide-react";
import { CHANNEL_ICONS } from "@/constants/theme";
import { Avatar } from "@/components/ui/Avatar";
import type { InboxThread, ThreadPriority } from "@/types";

// ─── Priority dot ─────────────────────────────────────────────────────────────

const PRIORITY_DOT: Record<ThreadPriority, string> = {
  urgent: "bg-rose-500",
  high:   "bg-amber-500",
  normal: "bg-blue-400",
  low:    "bg-slate-400",
};

// ─── Props ────────────────────────────────────────────────────────────────────

interface InboxThreadListProps {
  threads: InboxThread[];
  selectedId: string | null;
  onSelect: (thread: InboxThread) => void;
  onTogglePin: (id: string) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function InboxThreadList({
  threads,
  selectedId,
  onSelect,
  onTogglePin,
}: InboxThreadListProps) {
  if (threads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Mail className="mb-3 h-8 w-8 text-slate-600" />
        <p className="text-sm font-medium text-slate-400">No threads found</p>
        <p className="mt-1 text-xs text-slate-600">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-white/5 overflow-y-auto">
      {threads.map((thread) => {
        const isSelected = thread.id === selectedId;
        return (
          <button
            key={thread.id}
            onClick={() => onSelect(thread)}
            className={`w-full px-4 py-4 text-left transition-colors hover:bg-white/[0.04] ${
              isSelected ? "bg-white/[0.06]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Priority dot */}
              <span
                className={`mt-2 h-2 w-2 shrink-0 rounded-full ${PRIORITY_DOT[thread.priority]}`}
                title={`Priority: ${thread.priority}`}
              />

              <Avatar initials={thread.contactAvatar} name={thread.contactName} size="sm" />

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`truncate text-sm font-medium ${
                      thread.unread ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {thread.contactName}
                  </span>
                  <span className="shrink-0 text-[11px] text-slate-500">{thread.timestamp}</span>
                </div>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="text-xs text-slate-500">{CHANNEL_ICONS[thread.channel]}</span>
                  <p
                    className={`truncate text-xs ${
                      thread.unread ? "font-semibold text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {thread.subject}
                  </p>
                  {thread.unread && (
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9D1A10]" />
                  )}
                </div>

                <p className="mt-1 truncate text-[11px] text-slate-600 leading-tight">
                  {thread.snippet}
                </p>
                {thread.labels && thread.labels.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {thread.labels.map((label) => (
                      <span key={label} className="rounded bg-white/[0.05] px-1.5 py-0.5 text-[9px] font-medium text-slate-400">
                        {label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Pin */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTogglePin(thread.id);
                }}
                className={`shrink-0 p-0.5 transition-colors ${thread.pinned ? "text-[#9D1A10]" : "text-slate-600 hover:text-slate-400"}`}
                aria-label="Toggle pin"
              >
                <Pin
                  className={`h-3.5 w-3.5 ${thread.pinned ? "fill-[#9D1A10]" : ""}`}
                />
              </button>
            </div>
          </button>
        );
      })}
    </div>
  );
}
