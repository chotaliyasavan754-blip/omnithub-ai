"use client";

import { Badge } from "@/components/ui/Badge";
import type { ApiKey } from "@/data/api-keys";
import { Key, MoreHorizontal, Trash2, Ban } from "lucide-react";
import { useState } from "react";

interface ApiKeyListProps {
  keys: ApiKey[];
  onRevoke: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ApiKeyList({ keys, onRevoke, onDelete }: ApiKeyListProps) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  if (keys.length === 0) {
    return (
      <div className="p-12 text-center">
        <Key className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-slate-900 dark:text-white">No API keys found</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Create a new API key to authenticate your requests.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto min-h-[300px]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Name</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Key Preview</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Used</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {keys.map((k) => (
            <tr key={k.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-slate-900 dark:text-white">{k.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">Created {k.createdAt}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md inline-block">
                  {k.key.substring(0, 10)}...{k.key.substring(k.key.length - 4)}
                </div>
              </td>
              <td className="px-6 py-4">
                <Badge 
                  variant={k.status === "Active" ? "success" : k.status === "Revoked" ? "danger" : "warning"}
                >
                  {k.status}
                </Badge>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-500 dark:text-slate-400">{k.lastUsed}</span>
              </td>
              <td className="px-6 py-4 text-right relative">
                <button
                  onClick={() => setOpenDropdownId(openDropdownId === k.id ? null : k.id)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-lg transition-colors"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </button>

                {openDropdownId === k.id && (
                  <div className="absolute right-6 top-12 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-10 animate-in fade-in zoom-in-95">
                    {k.status === "Active" && (
                      <button
                        onClick={() => {
                          onRevoke(k.id);
                          setOpenDropdownId(null);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-500/10 flex items-center gap-2"
                      >
                        <Ban className="h-4 w-4" />
                        Revoke Key
                      </button>
                    )}
                    <button
                      onClick={() => {
                        onDelete(k.id);
                        setOpenDropdownId(null);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete Key
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
