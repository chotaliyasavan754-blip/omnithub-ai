"use client";

import { useState } from "react";
import { NOTIFICATIONS } from "@/data/dashboard";
import { SearchBar } from "@/components/ui/SearchBar";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconMenu = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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

// ─── Props ────────────────────────────────────────────────────────────────────

interface NavbarProps {
  dark: boolean;
  onToggleDark: () => void;
  onOpenSidebar: () => void;
}

// ─── Navbar Component ─────────────────────────────────────────────────────────

export function Navbar({ dark, onToggleDark, onOpenSidebar }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">

        {/* Left: Mobile menu + Search */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-slate-500 hover:text-slate-700 dark:hover:text-slate-200"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <IconMenu />
          </button>
          <div className="hidden sm:block">
            <SearchBar
              value={searchValue}
              onChange={setSearchValue}
              placeholder="Search contacts, messages..."
              showKbd
              className="w-64 focus-within:w-80 transition-all duration-200"
              variant="light"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={onToggleDark}
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
              aria-label="Notifications"
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
                  {NOTIFICATIONS.map((n, i) => (
                    <div
                      key={i}
                      className={`px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0 ${
                        n.unread ? "bg-blue-50/50 dark:bg-blue-900/10" : ""
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {n.unread && (
                          <span className="w-2 h-2 mt-1.5 rounded-full bg-[#9D1A10] flex-shrink-0" />
                        )}
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
  );
}
