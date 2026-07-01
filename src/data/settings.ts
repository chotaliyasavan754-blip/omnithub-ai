import type { UserProfile } from "@/types";

// ─── Current User Profile ─────────────────────────────────────────────────────

export const USER_PROFILE: UserProfile = {
  name: "John Doe",
  email: "john@omnihub.ai",
  role: "Admin",
  avatar: "JD",
  timezone: "America/New_York",
  language: "English (US)",
};

// ─── Notification Preferences ─────────────────────────────────────────────────

export interface NotificationPref {
  id: string;
  label: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

export const NOTIFICATION_PREFS: NotificationPref[] = [
  {
    id: "new_message",
    label: "New Messages",
    description: "Notify when a new message arrives in your inbox",
    email: true,
    push: true,
    sms: false,
  },
  {
    id: "contact_added",
    label: "Contact Added",
    description: "Notify when a new contact is added by a team member",
    email: false,
    push: true,
    sms: false,
  },
  {
    id: "ai_response",
    label: "AI Copilot Responses",
    description: "Notify when AI generates automated responses",
    email: false,
    push: true,
    sms: false,
  },
  {
    id: "billing_alert",
    label: "Billing Alerts",
    description: "Payment confirmations, failures, and plan changes",
    email: true,
    push: true,
    sms: true,
  },
  {
    id: "weekly_report",
    label: "Weekly Reports",
    description: "Summary of your team's performance every Monday",
    email: true,
    push: false,
    sms: false,
  },
];

// ─── Integrations ─────────────────────────────────────────────────────────────

export interface Integration {
  id: string;
  name: string;
  description: string;
  iconBg: string;
  iconText: string;
  connected: boolean;
  connectedAt?: string;
}

export const INTEGRATIONS: Integration[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    description: "Send and receive WhatsApp messages from your number",
    iconBg: "bg-emerald-500",
    iconText: "WA",
    connected: true,
    connectedAt: "Dec 1, 2025",
  },
  {
    id: "gmail",
    name: "Gmail / Google Workspace",
    description: "Connect your Gmail account for email conversations",
    iconBg: "bg-red-500",
    iconText: "GM",
    connected: true,
    connectedAt: "Nov 15, 2025",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Get notifications and updates directly in Slack channels",
    iconBg: "bg-violet-500",
    iconText: "SL",
    connected: false,
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    description: "Sync contacts and conversations with HubSpot",
    iconBg: "bg-orange-500",
    iconText: "HS",
    connected: false,
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Track payment events and billing conversations",
    iconBg: "bg-blue-500",
    iconText: "ST",
    connected: true,
    connectedAt: "Dec 1, 2025",
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automate workflows between OmniHub AI and 5000+ apps",
    iconBg: "bg-amber-500",
    iconText: "ZP",
    connected: false,
  },
];

// ─── Timezones ────────────────────────────────────────────────────────────────

export const TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "America/Denver",
  "Europe/London",
  "Europe/Paris",
  "Asia/Kolkata",
  "Asia/Tokyo",
  "Australia/Sydney",
];
