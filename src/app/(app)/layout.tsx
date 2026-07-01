"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

/**
 * Shared authenticated layout for all app pages (Dashboard, Contacts, Inbox, etc.)
 * Renders the Sidebar + Navbar once — all child pages get them for free.
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content pushed right of the fixed sidebar on desktop */}
        <div className="lg:pl-[260px]">
          <Navbar
            dark={dark}
            onToggleDark={() => setDark((d) => !d)}
            onOpenSidebar={() => setSidebarOpen(true)}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
