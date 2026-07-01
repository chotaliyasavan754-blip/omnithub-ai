import { useState } from "react";
import { NOTIFICATION_PREFS } from "@/data/settings";
import type { NotificationPref } from "@/data/settings";

export type SettingsSection = 
  | "general" 
  | "appearance" 
  | "security" 
  | "notifications" 
  | "workspace";

export function useSettings() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("general");
  const [prefs, setPrefs] = useState<NotificationPref[]>(NOTIFICATION_PREFS);
  const [isSaving, setIsSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  const togglePref = (id: string, channel: "email" | "push" | "sms") => {
    setPrefs((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        return { ...p, [channel]: !p[channel] };
      })
    );
  };

  const saveSettings = async () => {
    setIsSaving(true);
    setSavedMsg("");
    // Mock API call
    await new Promise((res) => setTimeout(res, 600));
    setIsSaving(false);
    setSavedMsg("Settings saved successfully");
    setTimeout(() => setSavedMsg(""), 3000);
  };

  return {
    activeSection,
    setActiveSection,
    prefs,
    togglePref,
    isSaving,
    savedMsg,
    saveSettings,
  };
}
