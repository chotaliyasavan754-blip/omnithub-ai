import type { RecentMessage } from "@/types";
import { RECENT_MESSAGES } from "@/data/dashboard";

// ─── Messages page re-exports dashboard messages as the full messages list ────

export const ALL_MESSAGES: RecentMessage[] = [
  ...RECENT_MESSAGES,
  {
    id: 7,
    contactName: "Marcus Johnson",
    channel: "WhatsApp",
    lastMessage: "Following up on the proposal we discussed last week.",
    status: "Pending",
    date: "4 hrs ago",
    avatar: "MJ",
  },
  {
    id: 8,
    contactName: "Lisa Park",
    channel: "Email",
    lastMessage: "The updated template has been approved by our legal team.",
    status: "Replied",
    date: "5 hrs ago",
    avatar: "LP",
  },
  {
    id: 9,
    contactName: "Noah Wilson",
    channel: "Live Chat",
    lastMessage: "Can you walk me through the API documentation?",
    status: "Active",
    date: "6 hrs ago",
    avatar: "NW",
  },
  {
    id: 10,
    contactName: "Ava Foster",
    channel: "SMS",
    lastMessage: "Please unsubscribe me from further messages.",
    status: "Closed",
    date: "Yesterday",
    avatar: "AF",
  },
  {
    id: 11,
    contactName: "David Kim",
    channel: "Email",
    lastMessage: "The invoice has been processed. Thank you!",
    status: "Closed",
    date: "Yesterday",
    avatar: "DK",
  },
  {
    id: 12,
    contactName: "Sarah Chen",
    channel: "WhatsApp",
    lastMessage: "I'd like to schedule a demo for the enterprise plan.",
    status: "Active",
    date: "2 days ago",
    avatar: "SC",
  },
];

export const MESSAGE_STATUS_TABS = ["All", "Active", "Pending", "Replied", "Closed"] as const;
export type MessageStatusTab = (typeof MESSAGE_STATUS_TABS)[number];
