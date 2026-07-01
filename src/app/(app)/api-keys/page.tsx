"use client";

import { useState } from "react";
import { useApiKeys } from "@/hooks/useApiKeys";
import { ApiKeyList } from "@/components/api-keys/ApiKeyList";
import { CreateKeyModal } from "@/components/api-keys/CreateKeyModal";
import { Button } from "@/components/ui/Button";
import { Key, Plus, Search } from "lucide-react";

export default function ApiKeysPage() {
  const {
    keys,
    totalActive,
    searchQuery,
    setSearchQuery,
    createKey,
    revokeKey,
    deleteKey,
  } = useApiKeys();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <main className="p-4 lg:p-6 max-w-[1440px] mx-auto min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Key className="h-6 w-6 text-[#9D1A10]" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">API Keys</h1>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage API keys to authenticate your requests to OmniHub AI. You have {totalActive} active keys.
          </p>
        </div>
        <Button variant="primary" className="gap-2" onClick={() => setIsCreateModalOpen(true)}>
          <Plus className="h-4 w-4" />
          Create New Key
        </Button>
      </div>

      {/* Controls & List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search API keys by name..."
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
            />
          </div>
        </div>

        <ApiKeyList keys={keys} onRevoke={revokeKey} onDelete={deleteKey} />
      </div>

      <CreateKeyModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={createKey}
      />
    </main>
  );
}
