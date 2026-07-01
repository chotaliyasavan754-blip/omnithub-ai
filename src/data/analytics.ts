import type { AnalyticsStat, ChannelBreakdown } from "@/types";

export const MINI_CHART_DATA = [30, 45, 35, 55, 48, 65, 58, 72, 68, 80, 75, 85];

// ─── Analytics Stats ──────────────────────────────────────────────────────────

export const ANALYTICS_STATS: AnalyticsStat[] = [
  {
    label: "Total Messages",
    value: "248,391",
    change: "+21.4%",
    changeType: "up",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    label: "Avg. Response Time",
    value: "1.8 min",
    change: "-32.5%",
    changeType: "up",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    label: "Resolution Rate",
    value: "94.2%",
    change: "+4.1%",
    changeType: "up",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    label: "Customer Satisfaction",
    value: "4.8 / 5",
    change: "+0.3pts",
    changeType: "up",
    gradient: "from-amber-500 to-orange-500",
  },
];

// ─── Channel Breakdown ────────────────────────────────────────────────────────

export const CHANNEL_BREAKDOWN: ChannelBreakdown[] = [
  { channel: "WhatsApp", count: 98420, percentage: 40, color: "bg-emerald-500" },
  { channel: "Email", count: 74106, percentage: 30, color: "bg-blue-500" },
  { channel: "SMS", count: 49278, percentage: 20, color: "bg-violet-500" },
  { channel: "Live Chat", count: 19872, percentage: 8, color: "bg-amber-500" },
  { channel: "Facebook", count: 6715, percentage: 2, color: "bg-rose-500" },
];

// ─── Weekly Volume (7 days) ────────────────────────────────────────────────────

export const WEEKLY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const WEEKLY_INBOUND  = [820, 932, 741, 1102, 956, 480, 370];
export const WEEKLY_OUTBOUND = [654, 810, 620, 985, 820, 390, 295];

// ─── Monthly Volume (12 months) ───────────────────────────────────────────────

export const MONTHLY_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
export const MONTHLY_DATA = [
  14200, 18400, 16800, 22100, 19600, 24800,
  21400, 28900, 25600, 31200, 27800, 33400,
];

// ─── Top Agents ───────────────────────────────────────────────────────────────

export const TOP_AGENTS = [
  { name: "Sarah Chen",     avatar: "SC", resolved: 342, satisfaction: 4.9, responseTime: "1.1 min" },
  { name: "Marcus Johnson", avatar: "MJ", resolved: 298, satisfaction: 4.7, responseTime: "1.4 min" },
  { name: "Lisa Park",      avatar: "LP", resolved: 276, satisfaction: 4.8, responseTime: "1.2 min" },
  { name: "David Kim",      avatar: "DK", resolved: 241, satisfaction: 4.6, responseTime: "1.8 min" },
  { name: "Emma Bennett",   avatar: "EB", resolved: 198, satisfaction: 4.5, responseTime: "2.1 min" },
];
