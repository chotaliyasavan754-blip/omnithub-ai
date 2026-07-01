"use client";

import { Users, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { RECENT_CONTACTS } from "@/data/dashboard";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

export function RecentContacts() {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden h-full flex flex-col">
      <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-[#9D1A10]" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Recent Contacts</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={() => router.push("/contacts")}>
          View All
        </Button>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20">
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Company</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date Added</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
            {RECENT_CONTACTS.slice(0, 5).map((contact) => (
              <tr
                key={contact.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar initials={contact.avatar} name={`${contact.firstName} ${contact.lastName}`} size="sm" />
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#9D1A10] transition-colors">
                      {contact.firstName} {contact.lastName}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {contact.company}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {contact.email}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {contact.phone}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className="text-xs text-slate-400 dark:text-slate-500">{contact.lastMessage}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
