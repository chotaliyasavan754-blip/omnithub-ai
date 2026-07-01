"use client";

import { useBilling } from "@/hooks/useBilling";
import { PlanCard } from "@/components/billing/PlanCard";
import { UsageStats } from "@/components/billing/UsageStats";
import { BillingHistory } from "@/components/billing/BillingHistory";
import { PaymentMethods } from "@/components/billing/PaymentMethods";
import { BillingAddress } from "@/components/billing/BillingAddress";

/**
 * Billing page — thin orchestrator.
 * State lives in useBilling().
 * Sidebar and Navbar are rendered by the (app) layout.
 */
export default function BillingPage() {
  const { isAnnual, selectedPlan, toggleBillingCycle, setSelectedPlan } = useBilling();

  return (
    <main className="p-4 lg:p-6 max-w-[1200px] mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Billing</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your subscription and billing history
          </p>
        </div>

        {/* Billing cycle toggle */}
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-1">
          <button
            onClick={() => !isAnnual && toggleBillingCycle()}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
              !isAnnual
                ? "bg-[#9D1A10] text-white shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => isAnnual && toggleBillingCycle()}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
              isAnnual
                ? "bg-[#9D1A10] text-white shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white"
            }`}
          >
            Annual
            <span className="rounded-full bg-emerald-500/20 px-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <PlanCard isAnnual={isAnnual} selectedPlan={selectedPlan} onSelect={setSelectedPlan} />

      {/* Usage + History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UsageStats />
        <BillingHistory />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PaymentMethods />
        <BillingAddress />
      </div>
    </main>
  );
}
