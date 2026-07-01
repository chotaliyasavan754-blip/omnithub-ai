"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import type { TeamMember, TeamRole } from "@/data/team";
import { MoreHorizontal, Shield, Mail } from "lucide-react";

interface TeamListProps {
  members: TeamMember[];
  onRemove: (id: string) => void;
  onUpdateRole: (id: string, role: TeamRole) => void;
}

export function TeamList({ members, onRemove, onUpdateRole }: TeamListProps) {
  if (members.length === 0) {
    return (
      <div className="p-12 text-center">
        <Shield className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-slate-900 dark:text-white">No members found</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Member</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Role</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Active</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {members.map((member) => (
            <tr key={member.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <Avatar initials={member.avatar} name={member.name} />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{member.name}</div>
                    <div className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <Mail className="h-3 w-3" />
                      {member.email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <Badge 
                  variant={member.status === "Active" ? "success" : member.status === "Invited" ? "warning" : "default"}
                >
                  {member.status}
                </Badge>
              </td>
              <td className="px-6 py-4">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole(member.id, e.target.value as TeamRole)}
                  className="block w-full max-w-[140px] rounded-lg border-0 bg-transparent py-1.5 pl-3 pr-8 text-sm text-slate-900 dark:text-white ring-1 ring-inset ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-[#9D1A10]"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Member">Member</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-500 dark:text-slate-400">{member.lastActive}</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onRemove(member.id)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                  title="Remove member"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
