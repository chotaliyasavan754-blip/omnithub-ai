import type { BillingInvoice, BillingPlan } from "@/types";

// ─── Plans ────────────────────────────────────────────────────────────────────

export interface PlanDetails {
  name: BillingPlan;
  price: string;
  priceAnnual: string;
  description: string;
  features: string[];
  highlight: boolean;
  current: boolean;
}

export const BILLING_PLANS: PlanDetails[] = [
  {
    name: "Starter",
    price: "$29",
    priceAnnual: "$23",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "2,500 AI credits/month",
      "WhatsApp + Email",
      "Basic analytics",
      "Email support",
    ],
    highlight: false,
    current: false,
  },
  {
    name: "Pro",
    price: "$79",
    priceAnnual: "$63",
    description: "Everything you need to scale",
    features: [
      "Up to 25 team members",
      "10,000 AI credits/month",
      "All channels",
      "Advanced analytics",
      "Priority support",
      "Custom templates",
      "API access",
    ],
    highlight: true,
    current: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceAnnual: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited team members",
      "Unlimited AI credits",
      "All channels + custom",
      "Enterprise analytics",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "SSO / SAML",
    ],
    highlight: false,
    current: false,
  },
];

// ─── Invoices ─────────────────────────────────────────────────────────────────

export const BILLING_INVOICES: BillingInvoice[] = [
  { id: "INV-2025-012", date: "Dec 1, 2025", amount: "$79.00", status: "paid",    plan: "Pro", downloadUrl: "#" },
  { id: "INV-2025-011", date: "Nov 1, 2025", amount: "$79.00", status: "paid",    plan: "Pro", downloadUrl: "#" },
  { id: "INV-2025-010", date: "Oct 1, 2025", amount: "$79.00", status: "paid",    plan: "Pro", downloadUrl: "#" },
  { id: "INV-2025-009", date: "Sep 1, 2025", amount: "$49.00", status: "paid",    plan: "Starter", downloadUrl: "#" },
  { id: "INV-2025-008", date: "Aug 1, 2025", amount: "$49.00", status: "paid",    plan: "Starter", downloadUrl: "#" },
  { id: "INV-2025-007", date: "Jul 1, 2025", amount: "$49.00", status: "failed",  plan: "Starter", downloadUrl: "#" },
];

// ─── Usage ────────────────────────────────────────────────────────────────────

export const USAGE_STATS = [
  { label: "AI Credits",       used: 8420,  total: 10000, unit: "credits", color: "bg-[#9D1A10]" },
  { label: "Team Seats",       used: 8,     total: 25,    unit: "seats",   color: "bg-violet-500" },
  { label: "Messages Sent",    used: 89247, total: 150000, unit: "msgs",   color: "bg-blue-500" },
  { label: "Storage",          used: 4.2,   total: 20,    unit: "GB",      color: "bg-emerald-500" },
];
