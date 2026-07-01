"use client";

import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { RECENT_MESSAGES } from "@/data/dashboard";
import { CHANNEL_ICONS } from "@/constants/theme";
import { Avatar } from "@/components/ui/Avatar";
import { MessageStatusBadge } from "@/components/ui/Badge";

export function RecentConversations() {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden h-full flex flex-col">
      <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-[#9D1A10]" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Recent Conversations</h2>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20">
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Platform</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Message</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Time</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
            {RECENT_MESSAGES.map((msg) => (
              <tr
                key={msg.id}
                onClick={() => router.push("/messages")}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar initials={msg.avatar} name={msg.contactName} size="sm" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#9D1A10] transition-colors">
                      {msg.contactName}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <span className="text-[#9D1A10]">{CHANNEL_ICONS[msg.channel]}</span>
                    {msg.channel}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                    {msg.lastMessage}
                  </p>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs text-slate-400 dark:text-slate-500">{msg.date}</span>
                </td>
                <td className="px-5 py-3">
                  <MessageStatusBadge status={msg.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
