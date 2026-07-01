import { useState, useCallback } from "react";
import { TEAM_MEMBERS, TeamMember, TeamRole } from "@/data/team";

export function useTeam() {
  const [members, setMembers] = useState<TeamMember[]>(TEAM_MEMBERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<TeamRole | "All">("All");

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "All" || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const inviteMember = useCallback((email: string, role: TeamRole) => {
    const newMember: TeamMember = {
      id: `tm-${Date.now()}`,
      name: email.split("@")[0],
      email,
      role,
      avatar: email[0].toUpperCase(),
      status: "Invited",
      lastActive: "Never",
    };
    setMembers((prev) => [...prev, newMember]);
  }, []);

  const removeMember = useCallback((id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }, []);

  const updateRole = useCallback((id: string, newRole: TeamRole) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, role: newRole } : m))
    );
  }, []);

  return {
    members: filteredMembers,
    totalMembers: members.length,
    searchQuery,
    setSearchQuery,
    roleFilter,
    setRoleFilter,
    inviteMember,
    removeMember,
    updateRole,
  };
}
