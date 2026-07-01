"use client";

import { Reply, MoreHorizontal, MessageSquareDashed } from "lucide-react";
import { CHANNEL_ICONS } from "@/constants/theme";
import { Avatar } from "@/components/ui/Avatar";
import { MessageStatusBadge } from "@/components/ui/Badge";
import type { RecentMessage } from "@/types";

interface MessagesListProps {
  messages: RecentMessage[];
  selectedId?: number;
  onSelect: (message: RecentMessage) => void;
}

export function MessagesList({ messages, selectedId, onSelect }: MessagesListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <MessageSquareDashed className="mb-3 h-8 w-8 text-slate-400 dark:text-slate-600" />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">No messages found</p>
        <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
          Try adjusting your filter or search term
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-100 dark:divide-slate-800">
      {messages.map((msg) => (
        <div
          key={msg.id}
          onClick={() => onSelect(msg)}
          role="button"
          tabIndex={0}
          className={`flex items-start gap-4 px-4 py-4 transition-colors cursor-pointer lg:px-6 ${
            selectedId === msg.id 
              ? "bg-slate-50 dark:bg-slate-800/60" 
              : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
          }`}
        >
          <Avatar initials={msg.avatar} name={msg.contactName} />

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {msg.contactName}
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {CHANNEL_ICONS[msg.channel]} {msg.channel}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <span className="text-xs text-slate-400 dark:text-slate-500">{msg.date}</span>
                <MessageStatusBadge status={msg.status} />
              </div>
            </div>
            <p className="mt-1.5 truncate text-sm text-slate-500 dark:text-slate-400">
              {msg.lastMessage}
            </p>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-[#9D1A10]"
              title="Reply"
            >
              <Reply className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-white"
              title="More"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
