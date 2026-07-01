"use client";

import { CreditCard, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PaymentMethods() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Payment Methods</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Manage your saved cards</p>
        </div>
        <Button variant="secondary" size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Card
        </Button>
      </div>

      <div className="space-y-3 flex-1">
        <div className="flex items-center justify-between p-4 rounded-xl border-2 border-[#9D1A10] bg-red-50/50 dark:bg-red-900/10">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-14 items-center justify-center rounded bg-slate-800 text-white font-bold text-xs tracking-wider shadow-sm">
              VISA
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                Visa ending in 4242
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#9D1A10] text-white">Default</span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">Expires 12/2026</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-500">
            Remove
          </Button>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-14 items-center justify-center rounded bg-[#FF5F00] text-white font-bold text-[10px] tracking-wider shadow-sm">
              MC
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Mastercard ending in 8899
              </div>
              <div className="text-xs text-slate-500 mt-0.5">Expires 08/2025</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-slate-500">
              Set Default
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-500">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
