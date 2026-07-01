import type { SidebarNavItem } from "@/types";

/**
 * The canonical sidebar navigation items for all authenticated pages.
 * Badge counts of 0 mean no badge is shown.
 */
export const NAV_ITEMS: SidebarNavItem[] = [
  { label: "Dashboard", href: "/dashboard", badge: 0 },
  { label: "Contacts", href: "/contacts", badge: 0 },
  { label: "Inbox", href: "/inbox", badge: 12 },
  { label: "Messages", href: "/messages", badge: 5 },
  { label: "Templates", href: "/templates", badge: 0 },
  { label: "AI Copilot", href: "/ai-copilot", badge: 0 },
  { label: "Analytics", href: "/analytics", badge: 0 },
  { label: "Settings", href: "/settings", badge: 0 },
  { label: "Profile", href: "/profile", badge: 0 },
  { label: "Team", href: "/team", badge: 0 },
  { label: "Integrations", href: "/integrations", badge: 0 },
  { label: "API Keys", href: "/api-keys", badge: 0 },
  { label: "Billing", href: "/billing", badge: 0 },
];
