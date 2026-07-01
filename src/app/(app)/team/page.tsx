"use client";

import { useState } from "react";
import { useTeam } from "@/hooks/useTeam";
import { TeamList } from "@/components/team/TeamList";
import { InviteMemberModal } from "@/components/team/InviteMemberModal";
import { Button } from "@/components/ui/Button";
import { Users, UserPlus, Search, Filter } from "lucide-react";
import type { TeamRole } from "@/data/team";

export default function TeamPage() {
  const {
    members,
    totalMembers,
    searchQuery,
    setSearchQuery,
    roleFilter,
    setRoleFilter,
    inviteMember,
    removeMember,
    updateRole,
  } = useTeam();

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  return (
    <main className="p-4 lg:p-6 max-w-[1440px] mx-auto min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-6 w-6 text-[#9D1A10]" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Team Members</h1>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage your team, set roles, and control access permissions. ({totalMembers} total)
          </p>
        </div>
        <Button variant="primary" className="gap-2" onClick={() => setIsInviteModalOpen(true)}>
          <UserPlus className="h-4 w-4" />
          Invite Member
        </Button>
      </div>

      {/* Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-4 bg-slate-50/50 dark:bg-slate-800/20">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search members by name or email..."
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
            />
          </div>
          <div className="relative min-w-[200px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Filter className="h-4 w-4" />
            </div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value as TeamRole | "All")}
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors appearance-none"
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Member">Member</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
        </div>

        {/* List */}
        <TeamList members={members} onRemove={removeMember} onUpdateRole={updateRole} />
      </div>

      <InviteMemberModal 
        open={isInviteModalOpen} 
        onClose={() => setIsInviteModalOpen(false)}
        onInvite={inviteMember}
      />
    </main>
  );
}
