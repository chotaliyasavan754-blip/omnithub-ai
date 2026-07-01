"use client";

import { Button } from "@/components/ui/Button";
import { Sun, Moon, Monitor } from "lucide-react";

interface SettingsProps {
  isSaving: boolean;
  savedMsg: string;
  onSave: () => void;
}

export function AppearanceSettings({ isSaving, savedMsg, onSave }: SettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Appearance</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Customize how OmniHub AI looks on your device.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-slate-900 dark:text-white">Theme Preference</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 border-[#9D1A10] bg-red-50/50 dark:bg-red-900/10 text-[#9D1A10] dark:text-red-400 transition-colors">
            <Monitor className="h-6 w-6" />
            <span className="text-sm font-medium">System</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
            <Sun className="h-6 w-6" />
            <span className="text-sm font-medium">Light</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
            <Moon className="h-6 w-6" />
            <span className="text-sm font-medium">Dark</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
        {savedMsg && (
          <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-full">
            {savedMsg}
          </span>
        )}
        <Button variant="primary" onClick={onSave} disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  );
}
