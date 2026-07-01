"use client";

import { 
  Settings2, 
  Palette, 
  ShieldCheck, 
  Bell, 
  Briefcase 
} from "lucide-react";
import type { SettingsSection } from "@/hooks/useSettings";

interface SettingsNavProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

const NAV_ITEMS = [
  { id: "general", label: "General", icon: <Settings2 className="w-5 h-5" /> },
  { id: "appearance", label: "Appearance", icon: <Palette className="w-5 h-5" /> },
  { id: "workspace", label: "Workspace", icon: <Briefcase className="w-5 h-5" /> },
  { id: "notifications", label: "Notifications", icon: <Bell className="w-5 h-5" /> },
  { id: "security", label: "Security", icon: <ShieldCheck className="w-5 h-5" /> },
];

export function SettingsNav({ activeSection, onSectionChange }: SettingsNavProps) {
  return (
    <nav className="w-full lg:w-[240px] flex-shrink-0 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id as SettingsSection)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
              isActive
                ? "bg-[#9D1A10] text-white shadow-md shadow-red-500/10"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span className={isActive ? "text-white" : "text-slate-400"}>
              {item.icon}
            </span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
