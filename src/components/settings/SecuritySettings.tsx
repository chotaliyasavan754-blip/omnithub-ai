"use client";

import { Shield, Key, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface SecuritySettingsProps {
  isSaving: boolean;
  savedMsg: string;
  onSave: () => void;
}

export function SecuritySettings({ isSaving, savedMsg, onSave }: SecuritySettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Security</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Password, 2FA, and session management</p>
      </div>

      {/* Change Password */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4">
        <div className="flex items-center gap-2.5">
          <Key className="h-4 w-4 text-slate-400" />
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Change Password</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Current Password" type="password" placeholder="••••••••" />
          <div />
          <Input label="New Password" type="password" placeholder="••••••••" />
          <Input label="Confirm New Password" type="password" placeholder="••••••••" />
        </div>
        <Button variant="primary" size="sm">Update Password</Button>
      </div>

      {/* 2FA */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Smartphone className="h-4 w-4 text-slate-400" />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Two-Factor Authentication</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Add an extra layer of security to your account</p>
            </div>
          </div>
          <Button variant="secondary" size="sm">Enable 2FA</Button>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        <div className="flex items-center gap-2.5 mb-4">
          <Shield className="h-4 w-4 text-slate-400" />
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Active Sessions</p>
        </div>
        {[
          { device: "MacBook Pro · Chrome", location: "New York, US", current: true, time: "Now" },
          { device: "iPhone 15 · Safari",   location: "New York, US", current: false, time: "2 hrs ago" },
        ].map((session) => (
          <div key={session.device} className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800 last:border-0">
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{session.device}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">{session.location} · {session.time}</p>
            </div>
            {session.current
              ? <span className="rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">Current</span>
              : <Button variant="danger" size="sm">Revoke</Button>
            }
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
