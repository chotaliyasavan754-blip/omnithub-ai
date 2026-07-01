"use client";

import { useState } from "react";
import { BILLING_PLANS } from "@/data/billing";

/**
 * Billing page state: billing cycle toggle and plan selection.
 */
export function useBilling() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(
    BILLING_PLANS.find((p) => p.current)?.name ?? "Pro"
  );

  const toggleBillingCycle = () => setIsAnnual((prev) => !prev);

  return {
    isAnnual,
    selectedPlan,
    toggleBillingCycle,
    setSelectedPlan,
  };
}
