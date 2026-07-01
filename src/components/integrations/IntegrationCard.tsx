"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Integration } from "@/data/integrations";
import { Settings2, Blocks, ExternalLink } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

interface IntegrationCardProps {
  integration: Integration;
  onToggle: (id: string) => void;
}

export function IntegrationCard({ integration, onToggle }: IntegrationCardProps) {
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const isConnected = integration.status === "Connected";

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <Blocks className="h-6 w-6 text-slate-400 dark:text-slate-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{integration.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{integration.category}</p>
            </div>
          </div>
          <Badge variant={isConnected ? "success" : "default"}>
            {integration.status}
          </Badge>
        </div>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 flex-1 mb-6">
          {integration.description}
        </p>

        <div className="flex items-center gap-2 mt-auto">
          <Button 
            variant={isConnected ? "secondary" : "primary"} 
            className="flex-1"
            onClick={() => onToggle(integration.id)}
          >
            {isConnected ? "Disconnect" : "Connect"}
          </Button>
          {isConnected && (
            <Button variant="ghost" className="px-3" onClick={() => setIsConfigOpen(true)}>
              <Settings2 className="h-5 w-5 text-slate-500" />
            </Button>
          )}
        </div>
      </div>

      <Modal open={isConfigOpen} onClose={() => setIsConfigOpen(false)} title={`${integration.name} Settings`}>
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Configure how OmniHub AI interacts with {integration.name}.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-700">
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">Sync Contacts</div>
                <div className="text-xs text-slate-500">Automatically sync contacts daily</div>
              </div>
              <div className="w-10 h-6 bg-[#9D1A10] rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-700">
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">Import History</div>
                <div className="text-xs text-slate-500">Import past conversation history</div>
              </div>
              <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <Button variant="secondary" className="w-full gap-2 mt-2">
            View API Documentation <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-end p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <Button variant="primary" onClick={() => setIsConfigOpen(false)}>Done</Button>
        </div>
      </Modal>
    </>
  );
}
