"use client";

import React, { useMemo, useState } from "react";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  Bot,
  Inbox,
  Zap,
  Search,
  Bell,
  ChevronDown,
  Plus,
  Mail,
  Phone,
  Building2,
  Eye,
  Pencil,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  UserCheck,
  MessageCircle,
  UserX,
  Tag,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Status = "Active" | "Pending" | "Blocked";
type ContactTag = "VIP" | "Lead" | "Customer" | "Trial";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  tags: ContactTag[];
  status: Status;
  lastMessage: string;
  avatarColor: string;
}

/* -------------------------------------------------------------------------- */
/*                              Sample Contact Data                           */
/* -------------------------------------------------------------------------- */

const firstNames = [
  "Olivia", "Liam", "Emma", "Noah", "Ava", "Ethan", "Sophia", "Mason",
  "Isabella", "Lucas", "Mia", "James", "Charlotte", "Benjamin", "Amelia",
  "Henry", "Harper", "Daniel", "Evelyn", "Jack",
];
const lastNames = [
  "Bennett", "Carter", "Diaz", "Ellison", "Foster", "Grant", "Hayes",
  "Irwin", "Jensen", "Kruger", "Lambert", "Monroe", "Nakamura", "Ortiz",
  "Parker", "Quinn", "Reyes", "Sutton", "Turner", "Vance",
];
const companies = [
  "Northwind Labs", "Vertex Studio", "Brightline Co.", "Pixel & Co",
  "Lumen Systems", "Forge Analytics", "Cobalt Works", "Skyline Ventures",
  "Nimbus Cloud", "Orbital Group", "Cedarwood Inc.", "Mosaic Partners",
  "Driftwood Media", "Pinnacle Tech", "Harbor & Stone", "Quantum Grid",
  "Lighthouse Labs", "Granite Path", "Solstice Co", "Meridian Group",
];
const tagPool: ContactTag[] = ["VIP", "Lead", "Customer", "Trial"];
const statusPool: Status[] = ["Active", "Pending", "Blocked"];
const avatarColors = [
  "from-violet-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-sky-500 to-blue-500",
  "from-fuchsia-500 to-purple-500",
];

const lastMessages = [
  "Thanks for the quick turnaround!",
  "Can we schedule a call this week?",
  "Following up on the proposal.",
  "Looks great, approved on our end.",
  "Still reviewing the contract.",
  "Let's revisit this next quarter.",
  "Invoice received, processing payment.",
  "Excited to get started!",
  "Need a few changes before we sign.",
  "No response yet, will follow up.",
];

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function generateContacts(count: number): Contact[] {
  const rand = seededRandom(42);
  const contacts: Contact[] = [];
  for (let i = 0; i < count; i++) {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[i % lastNames.length];
    const company = companies[i % companies.length];
    const tagCount = 1 + Math.floor(rand() * 2);
    const tags = Array.from(
      new Set(
        Array.from({ length: tagCount }, () => tagPool[Math.floor(rand() * tagPool.length)])
      )
    );
    const status = statusPool[Math.floor(rand() * 10) % statusPool.length];
    const phoneSuffix = `${100 + Math.floor(rand() * 900)}-${1000 + Math.floor(rand() * 9000)}`;
    contacts.push({
      id: `contact-${i + 1}`,
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .slice(0, 10)}.com`,
      phone: `+1 (415) ${phoneSuffix}`,
      company,
      tags,
      status,
      lastMessage: lastMessages[i % lastMessages.length],
      avatarColor: avatarColors[i % avatarColors.length],
    });
  }
  return contacts;
}

const ALL_CONTACTS = generateContacts(20);

/* -------------------------------------------------------------------------- */
/*                              UI Helper Bits                                */
/* -------------------------------------------------------------------------- */

const statusStyles: Record<Status, string> = {
  Active: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30",
  Pending: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30",
  Blocked: "bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/30",
};

const statusDot: Record<Status, string> = {
  Active: "bg-emerald-400",
  Pending: "bg-amber-400",
  Blocked: "bg-rose-400",
};

const tagStyles: Record<ContactTag, string> = {
  VIP: "bg-fuchsia-500/10 text-fuchsia-300 ring-1 ring-fuchsia-500/30",
  Lead: "bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30",
  Customer: "bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/30",
  Trial: "bg-orange-500/10 text-orange-300 ring-1 ring-orange-500/30",
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${statusDot[status]}`} />
      {status}
    </span>
  );
}

function TagPill({ tag }: { tag: ContactTag }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${tagStyles[tag]}`}
    >
      {tag}
    </span>
  );
}

function Avatar({ contact }: { contact: Contact }) {
  const initials = `${contact.firstName[0]}${contact.lastName[0]}`;
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${contact.avatarColor} text-xs font-semibold text-white shadow-lg shadow-black/30 ring-1 ring-white/10`}
    >
      {initials}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Sidebar / Top Navbar                            */
/* -------------------------------------------------------------------------- */

interface NavItem {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Contacts", icon: Users, active: true },
  { label: "Conversations", icon: MessageSquare },
  { label: "Inbox", icon: Inbox },
  { label: "Automations", icon: Zap },
  { label: "Analytics", icon: BarChart3 },
  { label: "Assistants", icon: Bot },
  { label: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/5 bg-white/[0.02] px-4 py-6 backdrop-blur-xl lg:flex">
      <div className="mb-8 flex items-center gap-2.5 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-900/40">
          <Zap className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight text-white">OmniHub</p>
          <p className="text-[11px] text-slate-500">AI Dashboard</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                item.active
                  ? "bg-gradient-to-r from-indigo-500/15 to-violet-500/10 text-white ring-1 ring-indigo-500/20"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <Icon
                className={`h-[18px] w-[18px] ${
                  item.active ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"
                }`}
              />
              {item.label}
              {item.active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-400" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.03] p-4">
        <p className="text-xs font-medium text-slate-300">Upgrade to Pro</p>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
          Unlock advanced automations and unlimited contacts.
        </p>
        <button className="mt-3 w-full rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-900/30 transition-opacity hover:opacity-90">
          Upgrade now
        </button>
      </div>
    </aside>
  );
}

function TopNavbar() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/5 bg-[#0B1020]/80 px-6 py-4 backdrop-blur-xl">
      <div className="flex items-center gap-3 lg:hidden">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-semibold text-white">OmniHub</span>
      </div>

      <div className="hidden flex-1 max-w-md items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-slate-500 md:flex">
        <Search className="h-4 w-4" />
        <span>Quick search anything…</span>
        <kbd className="ml-auto rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-slate-400 transition-colors hover:text-white">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>
        <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-2 py-1.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-[11px] font-semibold text-white">
            JS
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-xs font-medium leading-tight text-white">Jordan Shaw</p>
            <p className="text-[10px] leading-tight text-slate-500">Admin</p>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Statistic Cards                               */
/* -------------------------------------------------------------------------- */

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  accent: string;
}

function StatCard({ label, value, delta, icon: Icon, accent }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl transition-all hover:border-white/10 hover:bg-white/[0.05]">
      <div
        className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-30 ${accent}`}
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{value}</p>
          <p className="mt-1 text-[11px] font-medium text-emerald-400">{delta}</p>
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} bg-opacity-10 ring-1 ring-white/10`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Add Contact Modal                             */
/* -------------------------------------------------------------------------- */

interface AddContactModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (contact: Omit<Contact, "id" | "status" | "lastMessage" | "avatarColor">) => void;
}

function AddContactModal({ open, onClose, onSave }: AddContactModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [selectedTags, setSelectedTags] = useState<ContactTag[]>([]);

  if (!open) return null;

  const toggleTag = (tag: ContactTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetAndClose = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setSelectedTags([]);
    onClose();
  };

  const handleSave = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim()) return;
    onSave({
      firstName,
      lastName,
      email,
      phone,
      company,
      tags: selectedTags,
    });
    resetAndClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0F1530] p-6 shadow-2xl shadow-black/50">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Add Contact</h2>
          <button
            onClick={resetAndClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-400">
                First Name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Olivia"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500/50 focus:bg-white/[0.06]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-400">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Bennett"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500/50 focus:bg-white/[0.06]"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-400">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="olivia.bennett@company.com"
              type="email"
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500/50 focus:bg-white/[0.06]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-400">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (415) 555-0192"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500/50 focus:bg-white/[0.06]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-400">
                Company
              </label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Northwind Labs"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500/50 focus:bg-white/[0.06]"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-400">Tags</label>
            <div className="flex flex-wrap gap-2">
              {tagPool.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                      active
                        ? tagStyles[tag]
                        : "bg-white/[0.03] text-slate-500 ring-1 ring-white/10 hover:text-slate-300"
                    }`}
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={resetAndClose}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-opacity hover:opacity-90"
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Main Page                                 */
/* -------------------------------------------------------------------------- */

const PAGE_SIZE = 8;

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>(ALL_CONTACTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | Status>("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredContacts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return contacts.filter((c) => {
      const matchesSearch =
        !term ||
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        c.company.toLowerCase().includes(term) ||
        c.phone.toLowerCase().includes(term);
      const matchesStatus = statusFilter === "All" || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [contacts, searchTerm, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredContacts.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageContacts = filteredContacts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleStatusFilter = (value: "All" | Status) => {
    setStatusFilter(value);
    setFilterOpen(false);
    setCurrentPage(1);
  };

  const handleAddContact: AddContactModalProps["onSave"] = (newContact) => {
    const colorOptions = avatarColors;
    setContacts((prev) => [
      {
        ...newContact,
        id: `contact-${Date.now()}`,
        status: "Pending",
        lastMessage: "No messages yet",
        avatarColor: colorOptions[prev.length % colorOptions.length],
      },
      ...prev,
    ]);
    setCurrentPage(1);
  };

  const handleDelete = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const stats = useMemo(() => {
    const total = contacts.length;
    const newThisMonth = Math.max(1, Math.round(total * 0.18));
    const activeConversations = contacts.filter((c) => c.status === "Active").length;
    const blocked = contacts.filter((c) => c.status === "Blocked").length;
    return { total, newThisMonth, activeConversations, blocked };
  }, [contacts]);

  return (
    <div className="flex min-h-screen bg-[#0B1020] text-slate-200">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {/* ---------------------------------------------------------------- */}
          {/* Header */}
          {/* ---------------------------------------------------------------- */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-white">Contacts</h1>
              <p className="mt-1 text-sm text-slate-500">Manage all your customers</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-400 focus-within:border-indigo-500/50">
                <Search className="h-4 w-4 shrink-0" />
                <input
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search contacts…"
                  className="w-40 bg-transparent text-white placeholder-slate-500 outline-none sm:w-56"
                />
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-opacity hover:opacity-90"
              >
                <Plus className="h-4 w-4" />
                Add Contact
              </button>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Stats */}
          {/* ---------------------------------------------------------------- */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Total Contacts"
              value={stats.total.toString()}
              delta="+12% vs last month"
              icon={Users}
              accent="from-indigo-500 to-violet-600"
            />
            <StatCard
              label="New This Month"
              value={stats.newThisMonth.toString()}
              delta="+4 this week"
              icon={UserPlus}
              accent="from-emerald-500 to-teal-500"
            />
            <StatCard
              label="Active Conversations"
              value={stats.activeConversations.toString()}
              delta="+8% engagement"
              icon={MessageCircle}
              accent="from-sky-500 to-blue-600"
            />
            <StatCard
              label="Blocked Contacts"
              value={stats.blocked.toString()}
              delta="-2% this month"
              icon={UserX}
              accent="from-rose-500 to-pink-600"
            />
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Table card */}
          {/* ---------------------------------------------------------------- */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl">
            <div className="flex flex-col gap-3 border-b border-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-slate-500" />
                <p className="text-sm font-medium text-slate-300">
                  {filteredContacts.length} contact{filteredContacts.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="relative">
                <button
                  onClick={() => setFilterOpen((v) => !v)}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.06]"
                >
                  Status: {statusFilter}
                  <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
                </button>
                {filterOpen && (
                  <div className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-lg border border-white/10 bg-[#0F1530] shadow-xl shadow-black/50">
                    {(["All", "Active", "Pending", "Blocked"] as const).map((option) => (
                      <button
                        key={option}
                        onClick={() => handleStatusFilter(option)}
                        className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs transition-colors hover:bg-white/5 ${
                          statusFilter === option ? "text-white" : "text-slate-400"
                        }`}
                      >
                        {option}
                        {statusFilter === option && (
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[920px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-xs uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Phone</th>
                    <th className="px-4 py-3 font-medium">Company</th>
                    <th className="px-4 py-3 font-medium">Tags</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Last Message</th>
                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {pageContacts.map((c) => (
                    <tr key={c.id} className="transition-colors hover:bg-white/[0.025]">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar contact={c} />
                          <span className="font-medium text-white">
                            {c.firstName} {c.lastName}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-slate-600" />
                          {c.email}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-slate-600" />
                          {c.phone}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5 text-slate-600" />
                          {c.company}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1.5">
                          {c.tags.map((tag) => (
                            <TagPill key={tag} tag={tag} />
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={c.status} />
                      </td>
                      <td className="max-w-[200px] truncate px-4 py-3 text-slate-500">
                        {c.lastMessage}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            title="View"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-sky-400"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            title="Edit"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-indigo-400"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            title="Delete"
                            onClick={() => handleDelete(c.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-rose-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {pageContacts.length === 0 && (
                    <tr>
                      <td colSpan={8} className="px-4 py-12 text-center text-sm text-slate-500">
                        No contacts match your search or filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Pagination */}
            {/* ---------------------------------------------------------------- */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 p-4 sm:flex-row">
              <p className="text-xs text-slate-500">
                Showing {(safePage - 1) * PAGE_SIZE + (pageContacts.length ? 1 : 0)}–
                {(safePage - 1) * PAGE_SIZE + pageContacts.length} of {filteredContacts.length}
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-8 w-8 rounded-lg text-xs font-medium transition-colors ${
                      page === safePage
                        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-900/30"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                  className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AddContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddContact}
      />
    </div>
  );
}