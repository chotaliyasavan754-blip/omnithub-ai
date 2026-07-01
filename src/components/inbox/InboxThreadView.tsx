"use client";

import {
  Pin,
  CheckCircle2,
  ArrowLeft,
  MoreHorizontal,
  Send,
  MessageSquareDashed,
  Archive,
} from "lucide-react";
import { CHANNEL_ICONS } from "@/constants/theme";
import { Avatar } from "@/components/ui/Avatar";
import type { InboxThread, ThreadStatus } from "@/types";

interface InboxThreadViewProps {
  thread: InboxThread | null;
  onBack: () => void;
  onTogglePin: (id: string) => void;
  onToggleArchive: (id: string) => void;
  onUpdateStatus: (id: string, status: ThreadStatus) => void;
}

export function InboxThreadView({
  thread,
  onBack,
  onTogglePin,
  onToggleArchive,
  onUpdateStatus,
}: InboxThreadViewProps) {
  if (!thread) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
        <MessageSquareDashed className="h-10 w-10 text-slate-700" />
        <p className="text-sm font-medium text-slate-500">Select a conversation</p>
        <p className="text-xs text-slate-700">Choose a thread from the list to view it here</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Thread Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <Avatar initials={thread.contactAvatar} name={thread.contactName} />
          <div>
            <p className="text-sm font-semibold text-white">{thread.contactName}</p>
            <p className="text-xs text-slate-500">
              {CHANNEL_ICONS[thread.channel]} {thread.channel} · {thread.messageCount} messages
            </p>
            {thread.labels && thread.labels.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {thread.labels.map((label) => (
                  <span key={label} className="rounded bg-white/[0.05] px-1.5 py-0.5 text-[9px] font-medium text-slate-400">
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleArchive(thread.id)}
            className={`rounded-lg p-2 transition-colors ${thread.archived ? "bg-white/10 text-white" : "text-slate-500 hover:bg-white/5 hover:text-white"}`}
            aria-label="Toggle archive"
          >
            <Archive className="h-4 w-4" />
          </button>
          <button
            onClick={() => onTogglePin(thread.id)}
            className={`rounded-lg p-2 transition-colors ${thread.pinned ? "text-[#9D1A10]" : "text-slate-500 hover:bg-white/5 hover:text-white"}`}
            aria-label="Toggle pin"
          >
            <Pin className={`h-4 w-4 ${thread.pinned ? "fill-[#9D1A10]" : ""}`} />
          </button>

          {thread.status !== "resolved" && (
            <button
              onClick={() => onUpdateStatus(thread.id, "resolved")}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400"
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              Resolve
            </button>
          )}

          <button className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white/5 hover:text-white">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Thread Body — simulated messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {/* Incoming message */}
        <div className="flex gap-3">
          <Avatar initials={thread.contactAvatar} name={thread.contactName} size="sm" />
          <div className="max-w-[75%]">
            <div className="rounded-2xl rounded-tl-none bg-white/[0.06] px-4 py-3">
              <p className="text-sm text-slate-200">{thread.snippet}</p>
            </div>
            <p className="mt-1 text-[11px] text-slate-600">{thread.timestamp}</p>
          </div>
        </div>

        {/* AI-suggested reply badge */}
        <div className="flex items-center gap-2 rounded-xl border border-[#9D1A10]/20 bg-[#9D1A10]/5 px-4 py-2.5">
          <span className="text-[11px] font-semibold text-[#9D1A10]">✨ AI Copilot</span>
          <p className="flex-1 text-[11px] text-slate-400">
            AI has a suggested reply ready. Open AI Copilot to review it.
          </p>
        </div>
      </div>

      {/* Reply Box */}
      <div className="border-t border-white/5 p-4">
        <div className="flex items-end gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <textarea
            placeholder={`Reply via ${thread.channel}…`}
            rows={2}
            className="flex-1 resize-none bg-transparent text-sm text-white placeholder-slate-600 outline-none"
          />
          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#9D1A10] to-[#c4281c] text-white shadow-lg shadow-red-900/30 transition-opacity hover:opacity-90">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
