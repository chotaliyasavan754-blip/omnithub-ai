"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { TIMEZONES } from "@/data/settings";
import type { UserProfile } from "@/types";

interface ProfileSettingsProps {
  profile: UserProfile;
  isSaving: boolean;
  savedMsg: string;
  onUpdate: (field: keyof UserProfile, value: string) => void;
  onSave: () => void;
}

export function ProfileSettings({ profile, isSaving, savedMsg, onUpdate, onSave }: ProfileSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Profile Settings</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage your personal information</p>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9D1A10] to-[#c4281c] text-xl font-bold text-white">
          {profile.avatar}
        </div>
        <div>
          <Button variant="secondary" size="sm">Change photo</Button>
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">JPG, PNG or GIF · max 2MB</p>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          value={profile.name}
          onChange={(e) => onUpdate("name", e.target.value)}
          placeholder="John Doe"
        />
        <Input
          label="Email"
          type="email"
          value={profile.email}
          onChange={(e) => onUpdate("email", e.target.value)}
          placeholder="john@omnihub.ai"
        />
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
          <input
            value={profile.role}
            readOnly
            className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3.5 py-2.5 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Timezone</label>
          <select
            value={profile.timezone}
            onChange={(e) => onUpdate("timezone", e.target.value)}
            className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:outline-none focus:ring-2 focus:ring-[#9D1A10]/20"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="primary" isLoading={isSaving} onClick={onSave}>
          Save Changes
        </Button>
        {savedMsg && (
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{savedMsg}</p>
        )}
      </div>
    </div>
  );
}
