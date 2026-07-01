"use client";

import {
  Users,
  UserPlus,
  MessageCircle,
  UserX,
} from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import type { Contact } from "@/types";

interface ContactsStatsProps {
  contacts: Contact[];
}

export function ContactsStats({ contacts }: ContactsStatsProps) {
  const total = contacts.length;
  const newThisMonth = Math.max(1, Math.round(total * 0.18));
  const activeConversations = contacts.filter((c) => c.status === "Active").length;
  const blocked = contacts.filter((c) => c.status === "Blocked").length;

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Contacts"
        value={total.toString()}
        delta="+12% vs last month"
        icon={Users}
        accent="from-indigo-500 to-violet-600"
      />
      <StatCard
        label="New This Month"
        value={newThisMonth.toString()}
        delta="+4 this week"
        icon={UserPlus}
        accent="from-emerald-500 to-teal-500"
      />
      <StatCard
        label="Active Conversations"
        value={activeConversations.toString()}
        delta="+8% engagement"
        icon={MessageCircle}
        accent="from-sky-500 to-blue-600"
      />
      <StatCard
        label="Blocked Contacts"
        value={blocked.toString()}
        delta="-2% this month"
        icon={UserX}
        accent="from-rose-500 to-pink-600"
      />
    </div>
  );
}
