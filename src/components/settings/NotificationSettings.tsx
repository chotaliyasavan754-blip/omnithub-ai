"use client";

import type { NotificationPref } from "@/data/settings";
import { Button } from "@/components/ui/Button";

interface NotificationSettingsProps {
  prefs: NotificationPref[];
  onToggle: (id: string, channel: "email" | "push" | "sms") => void;
  isSaving: boolean;
  savedMsg: string;
  onSave: () => void;
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-[#9D1A10]" : "bg-slate-200 dark:bg-slate-700"
      }`}
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-4" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export function NotificationSettings({ prefs, onToggle, isSaving, savedMsg, onSave }: NotificationSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Notification Preferences</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Choose how you receive alerts</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          <span className="col-span-2">Notification</span>
          <span className="text-center">Email</span>
          <span className="text-center">Push</span>
        </div>

        {prefs.map((pref) => (
          <div
            key={pref.id}
            className="grid grid-cols-4 items-center border-b border-slate-50 dark:border-slate-800/50 last:border-0 px-5 py-4"
          >
            <div className="col-span-2">
              <p className="text-sm font-medium text-slate-900 dark:text-white">{pref.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{pref.description}</p>
            </div>
            <div className="flex justify-center">
              <Toggle checked={pref.email} onChange={() => onToggle(pref.id, "email")} />
            </div>
            <div className="flex justify-center">
              <Toggle checked={pref.push} onChange={() => onToggle(pref.id, "push")} />
            </div>
          </div>
        ))}
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
