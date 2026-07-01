import type { Activity, RecentMessage, Notification, Contact, DashboardTask, Reminder, CommunicationStat } from "@/types";

// ─── KPI Stats ───────────────────────────────────────────────────────────────

export const DASHBOARD_STATS = [
  {
    title: "Total Contacts",
    value: "24,589",
    change: "+12.5%",
    changeType: "up" as const,
    iconKey: "users",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Active Conversations",
    value: "1,429",
    change: "+8.2%",
    changeType: "up" as const,
    iconKey: "message-square",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Unread Messages",
    value: "342",
    change: "-5.1%",
    changeType: "down" as const,
    iconKey: "inbox",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Pending Replies",
    value: "89",
    change: "-12.4%",
    changeType: "down" as const,
    iconKey: "clock",
    gradient: "from-amber-500 to-orange-500",
  },
];

// ─── Today's Tasks ───────────────────────────────────────────────────────────

export const TODAYS_TASKS: DashboardTask[] = [
  {
    id: 1,
    title: "conversations waiting",
    count: 12,
    description: "Requires attention soon",
    iconKey: "clock",
  },
  {
    id: 2,
    title: "follow-ups today",
    count: 8,
    description: "Scheduled for today",
    iconKey: "calendar",
  },
  {
    id: 3,
    title: "contacts need reply",
    count: 5,
    description: "High priority contacts",
    iconKey: "users",
  },
  {
    id: 4,
    title: "scheduled reminders",
    count: 3,
    description: "Meetings and calls",
    iconKey: "message",
  },
];

// ─── Communication Summary ───────────────────────────────────────────────────

export const COMMUNICATION_SUMMARY: CommunicationStat[] = [
  { channel: "WhatsApp", today: 1245, unread: 156, pending: 45 },
  { channel: "Email", today: 856, unread: 92, pending: 21 },
  { channel: "SMS", today: 432, unread: 34, pending: 12 },
  { channel: "Facebook", today: 321, unread: 45, pending: 8 },
  { channel: "Live Chat", today: 198, unread: 15, pending: 3 },
];

// ─── Upcoming Reminders ──────────────────────────────────────────────────────

export const UPCOMING_REMINDERS: Reminder[] = [
  { id: 1, title: "Call John about enterprise plan", date: "Today" },
  { id: 2, title: "Reply Sarah regarding API docs", date: "Today" },
  { id: 3, title: "Meeting with ABC Ltd", date: "Tomorrow" },
  { id: 4, title: "Send proposal to Acme Corp", date: "This Week" },
];

// ─── Recent Contacts ─────────────────────────────────────────────────────────

export const RECENT_CONTACTS: Contact[] = [
  {
    id: "cont-1",
    firstName: "Sarah",
    lastName: "Chen",
    email: "sarah.c@techcorp.com",
    phone: "+1 (555) 012-3456",
    company: "TechCorp Inc.",
    tags: ["VIP", "Customer"],
    status: "Active",
    lastMessage: "2 hrs ago",
    avatar: "SC",
    avatarColor: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
  },
  {
    id: "cont-2",
    firstName: "Marcus",
    lastName: "Johnson",
    email: "marcus.j@innovate.io",
    phone: "+1 (555) 987-6543",
    company: "Innovate Solutions",
    tags: ["Lead"],
    status: "Pending",
    lastMessage: "1 day ago",
    avatar: "MJ",
    avatarColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "cont-3",
    firstName: "Elena",
    lastName: "Rodriguez",
    email: "elena.r@globalnet.com",
    phone: "+1 (555) 456-7890",
    company: "GlobalNet",
    tags: ["Customer"],
    status: "Active",
    lastMessage: "3 days ago",
    avatar: "ER",
    avatarColor: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    id: "cont-4",
    firstName: "David",
    lastName: "Kim",
    email: "david.k@startupsync.co",
    phone: "+1 (555) 234-5678",
    company: "StartupSync",
    tags: ["Trial"],
    status: "Active",
    lastMessage: "Just now",
    avatar: "DK",
    avatarColor: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
  },
  {
    id: "cont-5",
    firstName: "Lisa",
    lastName: "Park",
    email: "lisa.p@enterprise.net",
    phone: "+1 (555) 876-5432",
    company: "Enterprise Net",
    tags: ["VIP", "Lead"],
    status: "Pending",
    lastMessage: "4 hrs ago",
    avatar: "LP",
    avatarColor: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

// ─── Recent Activities ────────────────────────────────────────────────────────

export const RECENT_ACTIVITIES: Activity[] = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "sent a message to",
    target: "Alex Rivera",
    time: "2 min ago",
    avatar: "SC",
  },
  {
    id: 2,
    user: "System",
    action: "added new contact",
    target: "Emily Watson",
    time: "12 min ago",
    avatar: "OM",
  },
  {
    id: 3,
    user: "Marcus Johnson",
    action: "assigned conversation to",
    target: "David Kim",
    time: "28 min ago",
    avatar: "MJ",
  },
  {
    id: 4,
    user: "Lisa Park",
    action: "updated template",
    target: "Welcome Email v3",
    time: "45 min ago",
    avatar: "LP",
  },
  {
    id: 5,
    user: "David Kim",
    action: "resolved conversation with",
    target: "James Cooper",
    time: "1 hr ago",
    avatar: "DK",
  },
];

// ─── Recent Messages ──────────────────────────────────────────────────────────

export const RECENT_MESSAGES: RecentMessage[] = [
  {
    id: 1,
    contactName: "Alex Rivera",
    channel: "WhatsApp",
    lastMessage: "Hey, I need help with my subscription plan...",
    status: "Active",
    date: "2 min ago",
    avatar: "AR",
  },
  {
    id: 2,
    contactName: "Emily Watson",
    channel: "Email",
    lastMessage: "Thank you for the quick response!",
    status: "Replied",
    date: "15 min ago",
    avatar: "EW",
  },
  {
    id: 3,
    contactName: "James Cooper",
    channel: "SMS",
    lastMessage: "Can we schedule a demo for tomorrow?",
    status: "Pending",
    date: "32 min ago",
    avatar: "JC",
  },
  {
    id: 4,
    contactName: "Sophia Martinez",
    channel: "Live Chat",
    lastMessage: "I would like to upgrade to the Pro plan",
    status: "Active",
    date: "1 hr ago",
    avatar: "SM",
  },
  {
    id: 5,
    contactName: "Ryan Thompson",
    channel: "Facebook",
    lastMessage: "Is there a free trial available?",
    status: "Closed",
    date: "2 hrs ago",
    avatar: "RT",
  },
];

// ─── Notifications ────────────────────────────────────────────────────────────

export const NOTIFICATIONS: Notification[] = [
  {
    title: "New contact added",
    desc: "Emily Watson (Acme Corp)",
    time: "2m ago",
    unread: true,
  },
  {
    title: "Customer replied",
    desc: "Alex Rivera sent a message on WhatsApp",
    time: "5m ago",
    unread: true,
  },
  {
    title: "Conversation assigned",
    desc: "Marcus assigned a ticket to you",
    time: "15m ago",
    unread: false,
  },
  {
    title: "Reminder due",
    desc: "Call John about enterprise plan",
    time: "1h ago",
    unread: false,
  },
  {
    title: "Template updated",
    desc: "Lisa Park updated Welcome Email v3",
    time: "2h ago",
    unread: false,
  },
];
