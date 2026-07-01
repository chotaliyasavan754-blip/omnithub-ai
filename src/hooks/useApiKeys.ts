import { useState, useCallback } from "react";
import { API_KEYS, ApiKey } from "@/data/api-keys";

export function useApiKeys() {
  const [keys, setKeys] = useState<ApiKey[]>(API_KEYS);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKeys = keys.filter((key) =>
    key.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const createKey = useCallback((name: string, expirationMonths: number | null) => {
    const expiresAt = expirationMonths
      ? new Date(Date.now() + expirationMonths * 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
      : null;

    const newKey: ApiKey = {
      id: `ak-${Date.now()}`,
      name,
      key: `omni_live_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
      createdAt: new Date().toISOString().split("T")[0],
      lastUsed: "Never",
      expiresAt,
      status: "Active",
    };
    setKeys((prev) => [newKey, ...prev]);
    return newKey.key; // Return actual key to show user once
  }, []);

  const revokeKey = useCallback((id: string) => {
    setKeys((prev) =>
      prev.map((k) => (k.id === id ? { ...k, status: "Revoked" as const } : k))
    );
  }, []);

  const deleteKey = useCallback((id: string) => {
    setKeys((prev) => prev.filter((k) => k.id !== id));
  }, []);

  return {
    keys: filteredKeys,
    totalActive: keys.filter((k) => k.status === "Active").length,
    searchQuery,
    setSearchQuery,
    createKey,
    revokeKey,
    deleteKey,
  };
}
