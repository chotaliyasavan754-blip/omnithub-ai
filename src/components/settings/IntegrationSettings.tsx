"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Integration } from "@/data/settings";

interface IntegrationSettingsProps {
  integrations: Integration[];
  onToggle: (id: string) => void;
}

export function IntegrationSettings({ integrations, onToggle }: IntegrationSettingsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Integrations</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Connect your favorite tools and services
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-all hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white ${integration.iconBg}`}
              >
                {integration.iconText}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {integration.name}
                  </p>
                  {integration.connected ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                  )}
                </div>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {integration.description}
                </p>
                {integration.connected && integration.connectedAt && (
                  <p className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-500">
                    Connected since {integration.connectedAt}
                  </p>
                )}
              </div>
            </div>

            <Button
              variant={integration.connected ? "secondary" : "primary"}
              size="sm"
              onClick={() => onToggle(integration.id)}
              className="w-full"
            >
              {integration.connected ? "Disconnect" : "Connect"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
