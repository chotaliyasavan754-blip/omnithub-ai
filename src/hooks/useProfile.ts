import { useState, useCallback } from "react";
import { USER_PROFILE, UserProfile } from "@/data/profile";

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(USER_PROFILE);
  const [isSaving, setIsSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  const updateProfile = useCallback((key: keyof UserProfile, value: any) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }, []);

  const saveProfile = useCallback(async () => {
    setIsSaving(true);
    setSavedMsg("");
    // Mock API call
    await new Promise((res) => setTimeout(res, 800));
    setIsSaving(false);
    setSavedMsg("Profile updated successfully");
    setTimeout(() => setSavedMsg(""), 3000);
  }, []);

  return {
    profile,
    isSaving,
    savedMsg,
    updateProfile,
    saveProfile,
  };
}
