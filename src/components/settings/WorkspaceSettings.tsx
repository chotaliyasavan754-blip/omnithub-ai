"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface SettingsProps {
  isSaving: boolean;
  savedMsg: string;
  onSave: () => void;
}

export function WorkspaceSettings({ isSaving, savedMsg, onSave }: SettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Workspace Settings</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage your organization's details.</p>
      </div>

      <div className="space-y-6">
        <Input 
          label="Workspace Name" 
          defaultValue="OmniHub AI Inc." 
        />
        <Input 
          label="Workspace URL" 
          defaultValue="omnihub-ai.omnihub.app" 
        />
        
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Workspace Logo</label>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#9D1A10] to-[#c4281c] text-xl font-bold text-white shadow-lg">
              OH
            </div>
            <div>
              <Button variant="secondary" size="sm">Upload new logo</Button>
              <p className="text-xs text-slate-500 mt-1">Recommended size 256x256px.</p>
            </div>
          </div>
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
