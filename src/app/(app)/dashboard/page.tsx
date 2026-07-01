"use client";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { TodaysTasks } from "@/components/dashboard/TodaysTasks";
import { RecentConversations } from "@/components/dashboard/RecentConversations";
import { RecentContacts } from "@/components/dashboard/RecentContacts";
import { NotificationsPanel } from "@/components/dashboard/NotificationsPanel";
import { ReminderCard } from "@/components/dashboard/ReminderCard";
import { CommunicationSummary } from "@/components/dashboard/CommunicationSummary";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";

/**
 * Dashboard page — thin orchestrator.
 * Redesigned to act as a CRM home page focused on daily workflow.
 */
export default function DashboardPage() {
  return (
    <main className="p-4 lg:p-6 max-w-[1440px] mx-auto min-h-screen pb-12">
      {/* 1. Header */}
      <DashboardHeader />

      {/* 2. KPI Cards */}
      <StatsGrid />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Left Column (Wider on XL) */}
        <div className="lg:col-span-2 xl:col-span-3 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <TodaysTasks />
            <CommunicationSummary />
          </div>
          
          <RecentConversations />
          <RecentContacts />
        </div>

        {/* Right Column (Narrower on XL) */}
        <div className="lg:col-span-1 space-y-4 sm:space-y-6">
          <ReminderCard />
          <NotificationsPanel />
          <ActivityTimeline />
        </div>
      </div>
    </main>
  );
}
