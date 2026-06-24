```tsx
"use client";

import React, { useState, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

interface AnalyticsCard {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  icon: React.ReactNode;
  gradient: string;
}

interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

interface Message {
  id: number;
  contactName: string;
  channel: string;
  lastMessage: string;
  status: "Active" | "Pending" | "Closed" | "Replied";
  date: string;
  avatar: string;
}

// ─── Icon Components ─────────────────────────────────────────────────────────

const IconDashboard = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconContacts = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconInbox = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);

const IconMessages = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const IconTemplates = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconAI = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconSettings = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconBilling = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const IconSearch = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconBell = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const IconChevronDown = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconPlus = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const IconSend = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const IconSparkles = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconMenu = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const IconX = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconSun = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconMoon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const IconArrowUp = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

const IconArrowDown = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const IconDollar = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconTarget = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconCpu = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const IconUsers = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconActivity = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconCopy = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// ─── Mock Data ───────────────────────────────────────────────────────────────

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: <IconDashboard />, badge: 0 },
  { label: "Contacts", icon: <IconContacts />, badge: 0 },
  { label: "Inbox", icon: <IconInbox />, badge: 12 },
  { label: "Messages", icon: <IconMessages />, badge: 5 },
  { label: "Templates", icon: <IconTemplates />, badge: 0 },
  { label: "AI Copilot", icon: <IconAI />, badge: 0 },
  { label: "Settings", icon: <IconSettings />, badge: 0 },
  { label: "Billing", icon: <IconBilling />, badge: 0 },
];

const analyticsCards: AnalyticsCard[] = [
  {
    title: "Total Contacts",
    value: "24,589",
    change: "+12.5%",
    changeType: "up",
    icon: <IconContacts />,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Active Conversations",
    value: "1,429",
    change: "+8.2%",
    changeType: "up",
    icon: <IconInbox />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Messages Sent",
    value: "89,247",
    change: "+23.1%",
    changeType: "up",
    icon: <IconMessages />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Responses",
    value: "15,832",
    change: "+34.7%",
    changeType: "up",
    icon: <IconAI />,
    gradient: "from-amber-500 to-orange-500",
  },
];

const recentActivities: Activity[] = [
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
    user: "AI Copilot",
    action: "generated response for",
    target: "Support Ticket #4521",
    time: "5 min ago",
    avatar: "AI",
  },
  {
    id: 3,
    user: "Marcus Johnson",
    action: "added new contact",
    target: "Emily Watson",
    time: "12 min ago",
    avatar: "MJ",
  },
  {
    id: 4,
    user: "Lisa Park",
    action: "updated template",
    target: "Welcome Email v3",
    time: "28 min ago",
    avatar: "LP",
  },
  {
    id: 5,
    user: "David Kim",
    action: "closed conversation with",
    target: "James Cooper",
    time: "45 min ago",
    avatar: "DK",
  },
  {
    id: 6,
    user: "AI Copilot",
    action: "auto-replied to",
    target: "3 pending inquiries",
    time: "1 hr ago",
    avatar: "AI",
  },
];

const recentMessages: Message[] = [
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
    lastMessage: "I'd like to upgrade to the Pro plan",
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
  {
    id: 6,
    contactName: "Olivia Brown",
    channel: "WhatsApp",
    lastMessage: "The integration docs are really helpful!",
    status: "Replied",
    date: "3 hrs ago",
    avatar: "OB",
  },
];

// ─── Mini Chart Component ────────────────────────────────────────────────────

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 120;
  const height = 40;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#grad-${color})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Bar Chart Component ─────────────────────────────────────────────────────

function BarChart({ dark }: { dark: boolean }) {
  const data = [65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const max = Math.max(...data);

  return (
    <div className="flex items-end justify-between gap-2 h-40 px-2">
      {data.map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full rounded-t-md transition-all duration-500 hover:opacity-80 cursor-pointer"
            style={{
              height: `${(v / max) * 100}%`,
              background: `linear-gradient(to top, #9D1A10, #c4281c)`,
              minHeight: "4px",
            }}
            title={`${labels[i]}: ${v}`}
          />
          <span className={`text-[9px] ${dark ? "text-slate-500" : "text-slate-400"}`}>
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Circular Progress Component ─────────────────────────────────────────────

function CircularProgress({
  percentage,
  size = 80,
  strokeWidth = 6,
  color,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className={color === "#9D1A10" ? "text-red-100 dark:text-slate-700" : "text-slate-100 dark:text-slate-700"}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000"
      />
    </svg>
  );
}

// ─── Main Dashboard Page ─────────────────────────────────────────────────────

export default function DashboardPage() {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [aiGenerating, setAiGenerating] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const statusColorMap: Record<string, string> = {
    Active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Closed: "bg-slate-100 text-slate-600 dark:bg-slate-700/30 dark:text-slate-400",
    Replied: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };

  const channelIconMap: Record<string, string> = {
    WhatsApp: "💬",
    Email: "📧",
    SMS: "📱",
    "Live Chat": "💭",
    Facebook: "👥",
  };

  const avatarColors = [
    "bg-violet-500", "bg-blue-500", "bg-emerald-500", "bg-amber-500",
    "bg-rose-500", "bg-cyan-500", "bg-pink-500", "bg-indigo-500",
  ];

  function getAvatarColor(name: string) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return avatarColors[Math.abs(hash) % avatarColors.length];
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        {/* ─── Mobile Sidebar Overlay ──────────────────────────── */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ─── Sidebar ─────────────────────────────────────────── */}
        <aside
          className={`fixed top-0 left-0 z-50 h-full w-[260px] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 h-16 border-b border-slate-200 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9D1A10] to-[#c4281c] flex items-center justify-center shadow-lg shadow-red-500/20">
              <IconSparkles />
            </div>
            <span className="font-semibold text-lg text-slate-900 dark:text-white tracking-tight">
              OmniHub<span className="text-[#9D1A10]"> AI</span>
            </span>
            <button
              className="ml-auto lg:hidden text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              onClick={() => setSidebarOpen(false)}
            >
              <IconX />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActiveMenu(item.label);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  activeMenu === item.label
                    ? "bg-[#9D1A10] text-white shadow-lg shadow-red-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span className={activeMenu === item.label ? "text-white" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"}>
                  {item.icon}
                </span>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge > 0 && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeMenu === item.label
                        ? "bg-white/20 text-white"
                        : "bg-[#9D1A10]/10 text-[#9D1A10] dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="bg-gradient-to-br from-[#9D1A10]/5 to-[#9D1A10]/10 dark:from-[#9D1A10]/20 dark:to-[#9D1A10]/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <IconSparkles />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Pro Plan</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                8,420 / 10,000 AI credits used
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                <div className="bg-[#9D1A10] h-1.5 rounded-full" style={{ width: "84%" }} />
              </div>
            </div>
          </div>
        </aside>

        {/* ─── Main Content ────────────────────────────────────── */}
        <div className="lg:pl-[260px]">
          {/* ─── Top Navbar ─────────────────────────────────────── */}
          <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between h-full px-4 lg:px-6">
              {/* Left: Mobile menu + Search */}
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden text-slate-500 hover:text-slate-700 dark:hover:text-slate-200"
                  onClick={() => setSidebarOpen(true)}
                >
                  <IconMenu />
                </button>
                <div
                  className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 ${
                    searchFocused
                      ? "border-[#9D1A10] ring-2 ring-[#9D1A10]/10 bg-white dark:bg-slate-800 w-80"
                      : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 w-64"
                  }`}
                >
                  <IconSearch />
                  <input
                    type="text"
                    placeholder="Search contacts, messages..."
                    className="bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none w-full"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                  <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-700 rounded">
                    ⌘K
                  </kbd>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2">
                {/* Dark mode toggle */}
                <button
                  onClick={() => setDark(!dark)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title={dark ? "Light mode" : "Dark mode"}
                >
                  {dark ? <IconSun /> : <IconMoon />}
                </button>

                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
                    className="relative p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <IconBell />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#9D1A10] rounded-full ring-2 ring-white dark:ring-slate-900" />
                  </button>
                  {notifOpen && (
                    <div className="absolute right-0 top-12 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
                      <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {[
                          { title: "New message from Alex", desc: "WhatsApp inquiry about pricing", time: "2m ago", unread: true },
                          { title: "AI Copilot completed", desc: "Generated 15 responses", time: "5m ago", unread: true },
                          { title: "Team member joined", desc: "Lisa Park accepted invite", time: "1h ago", unread: false },
                          { title: "Monthly report ready", desc: "Download your December report", time: "3h ago", unread: false },
                        ].map((n, i) => (
                          <div key={i} className={`px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0 ${n.unread ? "bg-blue-50/50 dark:bg-blue-900/10" : ""}`}>
                            <div className="flex items-start gap-2">
                              {n.unread && <span className="w-2 h-2 mt-1.5 rounded-full bg-[#9D1A10] flex-shrink-0" />}
                              <div className={n.unread ? "" : "pl-4"}>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{n.title}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{n.desc}</p>
                                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{n.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-700">
                        <button className="text-xs font-medium text-[#9D1A10] hover:text-[#871510] w-full text-center">
                          View all notifications
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-8 bg-slate-200 dark:bg-slate-700" />

                {/* User Profile */}
                <div className="relative">
                  <button
                    onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
                    className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9D1A10] to-[#c4281c] flex items-center justify-center text-white text-xs font-bold">
                      JD
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-slate-900 dark:text-white leading-tight">John Doe</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">Admin</p>
                    </div>
                    <IconChevronDown />
                  </button>
                  {profileOpen && (
                    <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
                      <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                        <p className="font-semibold text-slate-900 dark:text-white text-sm">John Doe</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">john@omnihub.ai</p>
                      </div>
                      {["Your Profile", "Workspace Settings", "Team Management", "Help & Support"].map((item) => (
                        <button
                          key={item}
                          className="w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                      <div className="border-t border-slate-200 dark:border-slate-700">
                        <button className="w-full text-left px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* ─── Dashboard Content ─────────────────────────────── */}
          <main className="p-4 lg:p-6 max-w-[1440px] mx-auto">
            {/* 1. Welcome Section */}
            <div
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#9D1A10] via-[#b91c1c] to-[#c4281c] p-6 md:p-8 mb-6 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-white/70 text-sm font-medium mb-1">{today}</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Welcome back, John! 👋
                  </h1>
                  <p className="text-white/80 text-sm md:text-base">
                    Here&apos;s what&apos;s happening with your conversations today.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Add Contact", icon: <IconPlus /> },
                    { label: "Send Message", icon: <IconSend /> },
                    { label: "AI Copilot", icon: <IconSparkles /> },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-sm font-medium rounded-xl transition-all duration-200 border border-white/20"
                    >
                      {btn.icon}
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Analytics Cards */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {analyticsCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {card.icon}
                    </div>
                    <MiniChart
                      data={[30, 45, 35, 55, 48, 65, 58, 72, 68, 80, 75, 85]}
                      color={
                        card.gradient.includes("violet")
                          ? "#8b5cf6"
                          : card.gradient.includes("blue")
                          ? "#3b82f6"
                          : card.gradient.includes("emerald")
                          ? "#10b981"
                          : "#f59e0b"
                      }
                    />
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{card.title}</p>
                  <div className="flex items-end gap-2">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{card.value}</p>
                    <span
                      className={`inline-flex items-center gap-0.5 text-xs font-semibold mb-1 ${
                        card.changeType === "up"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-red-500"
                      }`}
                    >
                      {card.changeType === "up" ? <IconArrowUp /> : <IconArrowDown />}
                      {card.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Performance + Activity Row */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* Performance Section */}
              <div className="lg:col-span-2 space-y-4">
                {/* Revenue Chart */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">Revenue Overview</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Monthly revenue performance</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {["7D", "1M", "3M", "1Y"].map((period, i) => (
                        <button
                          key={period}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            i === 1
                              ? "bg-[#9D1A10] text-white"
                              : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">$48,295</span>
                    <span className="inline-flex items-center gap-0.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      <IconArrowUp /> 18.2%
                    </span>
                    <span className="text-sm text-slate-400">vs last month</span>
                  </div>
                  <BarChart dark={dark} />
                </div>

                {/* Performance Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Conversion Card */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <IconTarget />
                      </div>
                      <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <IconArrowUp /> 5.3%
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Conversion Rate</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">24.8%</p>
                    <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                      <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: "24.8%" }} />
                    </div>
                  </div>

                  {/* AI Usage Card */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                        <IconCpu />
                      </div>
                      <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <IconArrowUp /> 34.7%
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">AI Usage</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">84.2%</p>
                    <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                      <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: "84.2%" }} />
                    </div>
                  </div>

                  {/* Team Activity Card */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <IconUsers />
                      </div>
                      <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <IconArrowUp /> 12.1%
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Team Activity</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">142</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">actions this week</p>
                  </div>
                </div>
              </div>

              {/* 4. Recent Activity */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Latest updates from your team</p>
                </div>
                <div className="p-5 space-y-4 max-h-[460px] overflow-y-auto">
                  {recentActivities.map((activity, idx) => (
                    <div key={activity.id} className="flex gap-3">
                      <div className="relative flex flex-col items-center">
                        <div
                          className={`w-9 h-9 rounded-full ${getAvatarColor(activity.user)} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                        >
                          {activity.avatar}
                        </div>
                        {idx < recentActivities.length - 1 && (
                          <div className="w-px h-full bg-slate-200 dark:bg-slate-700 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 pb-1">
                        <p className="text-sm text-slate-900 dark:text-white">
                          <span className="font-semibold">{activity.user}</span>{" "}
                          <span className="text-slate-500 dark:text-slate-400">{activity.action}</span>{" "}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800">
                  <button className="text-sm font-medium text-[#9D1A10] hover:text-[#871510] dark:text-red-400 dark:hover:text-red-300 transition-colors">
                    View all activity →
                  </button>
                </div>
              </div>
            </div>

            {/* 5. Recent Messages Table + AI Widget + Quick Actions */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6 transition-all duration-700 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* Messages Table */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Messages</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Latest conversation updates</p>
                  </div>
                  <button className="text-sm font-medium text-[#9D1A10] hover:text-[#871510] dark:text-red-400 transition-colors">
                    View all →
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-slate-800">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact</th>
                        <th className="text-left px-3 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden sm:table-cell">Channel</th>
                        <th className="text-left px-3 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">Last Message</th>
                        <th className="text-left px-3 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                        <th className="text-left px-3 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentMessages.map((msg) => (
                        <tr
                          key={msg.id}
                          className="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer"
                        >
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-full ${getAvatarColor(msg.contactName)} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                                {msg.avatar}
                              </div>
                              <span className="text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">
                                {msg.contactName}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-3 hidden sm:table-cell">
                            <span className="text-sm text-slate-600 dark:text-slate-300">
                              {channelIconMap[msg.channel]} {msg.channel}
                            </span>
                          </td>
                          <td className="px-3 py-3 hidden md:table-cell">
                            <p className="text-sm text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                              {msg.lastMessage}
                            </p>
                          </td>
                          <td className="px-3 py-3">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${statusColorMap[msg.status]}`}>
                              {msg.status}
                            </span>
                          </td>
                          <td className="px-3 py-3 hidden lg:table-cell">
                            <span className="text-sm text-slate-400 dark:text-slate-500">{msg.date}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 6. AI Copilot Widget */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl p-5 border border-slate-700 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#9D1A10] rounded-full blur-[80px] opacity-30" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500 rounded-full blur-[80px] opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9D1A10] to-[#c4281c] flex items-center justify-center">
                      <IconSparkles />
                    </div>
                    <h3 className="font-bold text-white">AI Copilot</h3>
                  </div>

                  <div className="space-y-4">
                    {/* Credits Circle */}
                    <div className="flex items-center gap-4">
                      <CircularProgress percentage={84} size={72} strokeWidth={5} color="#9D1A10" />
                      <div>
                        <p className="text-2xl font-bold text-white">8,420</p>
                        <p className="text-xs text-slate-400">of 10,000 credits</p>
                      </div>
                    </div>

                    {/* AI Stats */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2 border-t border-slate-700/50">
                        <span className="text-sm text-slate-400">Responses Today</span>
                        <span className="text-sm font-semibold text-white">342</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-t border-slate-700/50">
                        <span className="text-sm text-slate-400">Avg. Response Time</span>
                        <span className="text-sm font-semibold text-white">1.2s</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-t border-slate-700/50">
                        <span className="text-sm text-slate-400">Accuracy Score</span>
                        <span className="text-sm font-semibold text-emerald-400">96.8%</span>
                      </div>
                    </div>

                    {/* Generate Button */}
                    <button
                      onClick={() => {
                        setAiGenerating(true);
                        setTimeout(() => setAiGenerating(false), 2000);
                      }}
                      disabled={aiGenerating}
                      className="w-full py-2.5 bg-gradient-to-r from-[#9D1A10] to-[#c4281c] hover:from-[#871510] hover:to-[#b01a18] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-red-500/20 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {aiGenerating ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Generating...
                        </>
                      ) : (
                        <>
                          <IconSparkles />
                          Generate Response
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* 7. Quick Actions Panel */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Quick Actions</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Frequently used shortcuts</p>
                <div className="space-y-2">
                  {[
                    {
                      label: "Add Contact",
                      desc: "Create a new contact",
                      icon: <IconPlus />,
                      color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/30",
                    },
                    {
                      label: "Send Message",
                      desc: "Start a conversation",
                      icon: <IconSend />,
                      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30",
                    },
                    {
                      label: "Create Template",
                      desc: "Build message templates",
                      icon: <IconCopy />,
                      color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
                    },
                    {
                      label: "Launch AI Copilot",
                      desc: "AI-powered responses",
                      icon: <IconSparkles />,
                      color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30",
                    },
                  ].map((action) => (
                    <button
                      key={action.label}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${action.color}`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        {action.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{action.label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{action.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Performance Donut */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Weekly Goal</p>
                  <div className="flex items-center gap-3">
                    <CircularProgress percentage={68} size={56} strokeWidth={4} color="#10b981" />
                    <div>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">68%</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">340 of 500 msgs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Footer ────────────────────────────────────────── */}
            <footer
              className={`text-center py-6 text-sm text-slate-400 dark:text-slate-600 transition-all duration-700 delay-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <p>© 2025 OmniHub AI. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
```