"use client";

import { useSettings } from "@/hooks/useSettings";
import { SettingsNav } from "@/components/settings/SettingsNav";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { GeneralSettings } from "@/components/settings/GeneralSettings";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { WorkspaceSettings } from "@/components/settings/WorkspaceSettings";

export default function SettingsPage() {
  const {
    activeSection,
    prefs,
    isSaving,
    savedMsg,
    setActiveSection,
    togglePref,
    saveSettings,
  } = useSettings();

  return (
    <main className="p-4 lg:p-6 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your application preferences and configurations.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left nav */}
        <SettingsNav activeSection={activeSection} onSectionChange={setActiveSection} />

        {/* Content panel */}
        <div className="flex-1 min-w-0 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          {activeSection === "general" && <GeneralSettings isSaving={isSaving} savedMsg={savedMsg} onSave={saveSettings} />}
          {activeSection === "appearance" && <AppearanceSettings isSaving={isSaving} savedMsg={savedMsg} onSave={saveSettings} />}
          {activeSection === "workspace" && <WorkspaceSettings isSaving={isSaving} savedMsg={savedMsg} onSave={saveSettings} />}
          {activeSection === "security" && <SecuritySettings isSaving={isSaving} savedMsg={savedMsg} onSave={saveSettings} />}
          {activeSection === "notifications" && (
            <NotificationSettings 
              prefs={prefs} 
              onToggle={togglePref} 
              isSaving={isSaving} 
              savedMsg={savedMsg} 
              onSave={saveSettings} 
            />
          )}
        </div>
      </div>
    </main>
  );
}
