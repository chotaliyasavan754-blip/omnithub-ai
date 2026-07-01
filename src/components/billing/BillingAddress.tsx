"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function BillingAddress() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Billing Address</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">This address will appear on your invoices</p>
      </div>

      <div className="space-y-4 flex-1">
        <Input label="Company Name" defaultValue="OmniHub AI Inc." />
        <Input label="Street Address" defaultValue="123 AI Boulevard, Suite 400" />
        <div className="grid grid-cols-2 gap-4">
          <Input label="City" defaultValue="San Francisco" />
          <Input label="State / Province" defaultValue="CA" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input label="ZIP / Postal Code" defaultValue="94105" />
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Country</label>
            <select className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
        <Button variant="primary">Update Address</Button>
      </div>
    </div>
  );
}
