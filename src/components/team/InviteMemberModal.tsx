"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { TeamRole } from "@/data/team";

interface InviteMemberModalProps {
  open: boolean;
  onClose: () => void;
  onInvite: (email: string, role: TeamRole) => void;
}

export function InviteMemberModal({ open, onClose, onInvite }: InviteMemberModalProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<TeamRole>("Member");

  const handleInvite = () => {
    if (!email.trim()) return;
    onInvite(email, role);
    setEmail("");
    setRole("Member");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Invite Team Member">
      <div className="p-6 space-y-4">
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="colleague@company.com"
        />

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as TeamRole)}
            className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
          >
            <option value="Admin">Admin (Full access)</option>
            <option value="Manager">Manager (Can manage most resources)</option>
            <option value="Member">Member (Standard access)</option>
            <option value="Viewer">Viewer (Read-only)</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleInvite} disabled={!email.trim()}>
          Send Invite
        </Button>
      </div>
    </Modal>
  );
}
