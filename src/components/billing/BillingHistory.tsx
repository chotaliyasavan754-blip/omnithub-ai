"use client";

import { Download, CheckCircle2, Clock, XCircle } from "lucide-react";
import { BILLING_INVOICES } from "@/data/billing";

const STATUS_CONFIG = {
  paid:    { icon: <CheckCircle2 className="h-3.5 w-3.5" />, classes: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" },
  pending: { icon: <Clock        className="h-3.5 w-3.5" />, classes: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400" },
  failed:  { icon: <XCircle      className="h-3.5 w-3.5" />, classes: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400" },
};

export function BillingHistory() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Billing History</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Your past invoices and receipts</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              {["Invoice", "Date", "Amount", "Plan", "Status", ""].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {BILLING_INVOICES.map((invoice) => {
              const status = STATUS_CONFIG[invoice.status];
              return (
                <tr key={invoice.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">{invoice.id}</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{invoice.date}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{invoice.amount}</td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{invoice.plan}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${status.classes}`}>
                      {status.icon}
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-white"
                      title="Download invoice"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
