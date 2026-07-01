"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { TIMEZONES } from "@/data/settings";
import type { UserProfile } from "@/data/profile";
import { Upload, Globe, Link as LinkIcon, MapPin, Phone } from "lucide-react";

interface ProfileFormProps {
  profile: UserProfile;
  isSaving: boolean;
  savedMsg: string;
  onUpdate: (field: keyof UserProfile, value: any) => void;
  onSave: () => void;
}

export function ProfileForm({ profile, isSaving, savedMsg, onUpdate, onSave }: ProfileFormProps) {
  return (
    <div className="space-y-8">
      {/* Header section */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">Personal Information</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Update your photo and personal details here.</p>
      </div>

      {/* Avatar section */}
      <div className="flex items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9D1A10] to-[#c4281c] text-3xl font-bold text-white shadow-lg shadow-red-500/20 ring-4 ring-white dark:ring-slate-900">
          {profile.avatar}
        </div>
        <div>
          <div className="flex gap-3 mb-2">
            <Button variant="secondary" size="sm" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload new
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-red-500">
              Remove
            </Button>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Recommended size is 256x256px. Maximum file size is 2MB.
          </p>
        </div>
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          value={profile.name}
          onChange={(e) => onUpdate("name", e.target.value)}
          placeholder="e.g. John Doe"
        />
        <Input
          label="Email Address"
          type="email"
          value={profile.email}
          onChange={(e) => onUpdate("email", e.target.value)}
          placeholder="e.g. john@example.com"
        />
        <Input
          label="Job Title"
          value={profile.title}
          onChange={(e) => onUpdate("title", e.target.value)}
          placeholder="e.g. Lead Developer"
        />
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
          <input
            value={profile.role}
            readOnly
            className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3.5 py-2.5 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed focus:outline-none"
          />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Bio</label>
        <textarea
          rows={4}
          value={profile.bio}
          onChange={(e) => onUpdate("bio", e.target.value)}
          placeholder="Write a few sentences about yourself..."
          className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors resize-none"
        />
        <p className="text-xs text-slate-500 mt-1">Brief description for your profile.</p>
      </div>

      {/* Contact & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 pt-7 flex items-center pointer-events-none text-slate-400">
            <Phone className="h-4 w-4" />
          </div>
          <Input
            label="Phone Number"
            value={profile.phone}
            onChange={(e) => onUpdate("phone", e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 pt-7 flex items-center pointer-events-none text-slate-400">
            <MapPin className="h-4 w-4" />
          </div>
          <Input
            label="Location"
            value={profile.location}
            onChange={(e) => onUpdate("location", e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Timezone</label>
          <select
            value={profile.timezone}
            onChange={(e) => onUpdate("timezone", e.target.value)}
            className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Language</label>
          <select
            value={profile.language}
            onChange={(e) => onUpdate("language", e.target.value)}
            className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
          >
            <option>English (US)</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Social Profiles</h3>
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Globe className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={profile.socials.twitter}
              onChange={(e) => onUpdate("socials", { ...profile.socials, twitter: e.target.value })}
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
              placeholder="Twitter username"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <LinkIcon className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={profile.socials.github}
              onChange={(e) => onUpdate("socials", { ...profile.socials, github: e.target.value })}
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
              placeholder="GitHub username"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <LinkIcon className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={profile.socials.linkedin}
              onChange={(e) => onUpdate("socials", { ...profile.socials, linkedin: e.target.value })}
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
              placeholder="LinkedIn profile"
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
        {savedMsg && (
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-full">
            {savedMsg}
          </span>
        )}
        <Button variant="primary" onClick={onSave} disabled={isSaving} className="min-w-[120px]">
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  );
}
