"use client";

import { useProfile } from "@/hooks/useProfile";
import { ProfileForm } from "@/components/profile/ProfileForm";

export default function ProfilePage() {
  const { profile, isSaving, savedMsg, updateProfile, saveProfile } = useProfile();

  return (
    <main className="p-4 lg:p-6 max-w-[800px] mx-auto min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">My Profile</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your account settings and preferences.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 lg:p-8 shadow-sm">
        <ProfileForm 
          profile={profile}
          isSaving={isSaving}
          savedMsg={savedMsg}
          onUpdate={updateProfile}
          onSave={saveProfile}
        />
      </div>
    </main>
  );
}
