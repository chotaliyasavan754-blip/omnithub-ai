"use client";

import { Check, Zap } from "lucide-react";
import { BILLING_PLANS } from "@/data/billing";
import { Button } from "@/components/ui/Button";
import type { BillingPlan } from "@/types";

interface PlanCardProps {
  isAnnual: boolean;
  selectedPlan: string;
  onSelect: (plan: BillingPlan) => void;
}

export function PlanCard({ isAnnual, selectedPlan, onSelect }: PlanCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {BILLING_PLANS.map((plan) => {
        const isCurrent = plan.current;
        const isSelected = selectedPlan === plan.name;

        return (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-6 transition-all ${
              plan.highlight
                ? "border-[#9D1A10] bg-gradient-to-br from-[#9D1A10]/5 to-[#9D1A10]/10 dark:from-[#9D1A10]/10 dark:to-[#9D1A10]/5 shadow-lg shadow-red-500/10"
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="flex items-center gap-1 rounded-full bg-[#9D1A10] px-3 py-1 text-[11px] font-bold text-white">
                  <Zap className="h-3 w-3" /> Most Popular
                </span>
              </div>
            )}

            <div className="mb-5">
              <p className="text-base font-bold text-slate-900 dark:text-white">{plan.name}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{plan.description}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                  {isAnnual ? plan.priceAnnual : plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="mb-1 text-sm text-slate-400 dark:text-slate-500">/mo</span>
                )}
              </div>
              {isAnnual && plan.price !== "Custom" && (
                <p className="mt-0.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                  Save {Math.round((1 - parseFloat(plan.priceAnnual.replace("$", "")) / parseFloat(plan.price.replace("$", ""))) * 100)}% annually
                </p>
              )}
            </div>

            <ul className="mb-6 flex-1 space-y-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={isCurrent ? "secondary" : "primary"}
              onClick={() => onSelect(plan.name)}
              className="w-full"
            >
              {isCurrent ? "Current Plan" : plan.price === "Custom" ? "Contact Sales" : "Upgrade"}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
