// ─── Domain Types ─────────────────────────────────────────────────────────────

export type MessageStatus = "Active" | "Pending" | "Closed" | "Replied";
export type ContactStatus = "Active" | "Pending" | "Blocked";
export type ContactTag = "VIP" | "Lead" | "Customer" | "Trial";
export type ChangeType = "up" | "down";
export type Channel = "WhatsApp" | "Email" | "SMS" | "Live Chat" | "Facebook";

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export interface SidebarNavItem {
  label: string;
  href: string;
  badge?: number;
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export interface AnalyticsCard {
  title: string;
  value: string;
  change: string;
  changeType: ChangeType;
  /** Tailwind gradient classes e.g. "from-violet-500 to-purple-600" */
  gradient: string;
  /** Icon key used to look up the icon component */
  iconKey: "contacts" | "inbox" | "messages" | "ai";
}

export interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

export interface RecentMessage {
  id: number;
  contactName: string;
  channel: Channel;
  lastMessage: string;
  status: MessageStatus;
  date: string;
  avatar: string;
}

export interface DashboardTask {
  id: number;
  title: string;
  count: number;
  description: string;
  iconKey: "clock" | "calendar" | "message" | "users";
}

export interface Reminder {
  id: number;
  title: string;
  date: "Today" | "Tomorrow" | "This Week";
}

export interface CommunicationStat {
  channel: Channel;
  today: number;
  unread: number;
  pending: number;
}

// ─── Contacts ─────────────────────────────────────────────────────────────────

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  tags: ContactTag[];
  status: ContactStatus;
  lastMessage: string;
  avatar: string;
  avatarColor: string;
}

export type NewContact = Omit<Contact, "id" | "status" | "lastMessage" | "avatarColor" | "avatar">;

// ─── Notification ─────────────────────────────────────────────────────────────

export interface Notification {
  title: string;
  desc: string;
  time: string;
  unread: boolean;
}

// ─── Quick Action ─────────────────────────────────────────────────────────────

export interface QuickAction {
  label: string;
  desc: string;
  iconKey: "plus" | "send" | "copy" | "sparkles";
  colorClasses: string;
}

// ─── Inbox ────────────────────────────────────────────────────────────────────

export type ThreadStatus = "open" | "pending" | "resolved" | "spam";
export type ThreadPriority = "urgent" | "high" | "normal" | "low";

export interface InboxThread {
  id: string;
  contactName: string;
  contactAvatar: string;
  channel: Channel;
  subject: string;
  snippet: string;
  status: ThreadStatus;
  priority: ThreadPriority;
  unread: boolean;
  pinned: boolean;
  archived: boolean;
  labels: string[];
  timestamp: string;
  messageCount: number;
}

// ─── Templates ────────────────────────────────────────────────────────────────

export type TemplateCategory = "Marketing" | "Support" | "Sales" | "Onboarding" | "Billing";
export type TemplateChannel = "WhatsApp" | "Email" | "SMS";

export interface MessageTemplate {
  id: string;
  name: string;
  category: TemplateCategory;
  channel: TemplateChannel;
  body: string;
  variables: string[];
  usageCount: number;
  lastUsed: string;
  status: "approved" | "pending" | "rejected";
  isFavorite: boolean;
}

// ─── Analytics ────────────────────────────────────────────────────────────────

export interface AnalyticsStat {
  label: string;
  value: string;
  change: string;
  changeType: ChangeType;
  gradient: string;
}

export interface ChannelBreakdown {
  channel: Channel;
  count: number;
  percentage: number;
  color: string;
}

// ─── Settings ─────────────────────────────────────────────────────────────────

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
  timezone: string;
  language: string;
}

// ─── Billing ──────────────────────────────────────────────────────────────────

export type BillingPlan = "Free" | "Starter" | "Pro" | "Enterprise";

export interface BillingInvoice {
  id: string;
  date: string;
  amount: string;
  status: "paid" | "pending" | "failed";
  plan: BillingPlan;
  downloadUrl: string;
}
