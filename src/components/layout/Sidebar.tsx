"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navigation";
import { OmniHubLogo } from "@/components/common/OmniHubLogo";

import { 
  LayoutDashboard, 
  Users, 
  Inbox, 
  MessageSquare, 
  FileText, 
  Sparkles, 
  BarChart2, 
  Settings, 
  CreditCard,
  User,
  Users2,
  Key,
  Blocks,
  X
} from "lucide-react";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconDashboard = () => <LayoutDashboard className="w-5 h-5" />;
const IconContacts = () => <Users className="w-5 h-5" />;
const IconInbox = () => <Inbox className="w-5 h-5" />;
const IconMessages = () => <MessageSquare className="w-5 h-5" />;
const IconTemplates = () => <FileText className="w-5 h-5" />;
const IconAI = () => <Sparkles className="w-5 h-5" />;
const IconAnalytics = () => <BarChart2 className="w-5 h-5" />;
const IconSettings = () => <Settings className="w-5 h-5" />;
const IconBilling = () => <CreditCard className="w-5 h-5" />;
const IconProfile = () => <User className="w-5 h-5" />;
const IconTeam = () => <Users2 className="w-5 h-5" />;
const IconApiKeys = () => <Key className="w-5 h-5" />;
const IconIntegrations = () => <Blocks className="w-5 h-5" />;
const IconSparkles = () => <Sparkles className="w-4 h-4" />;
const IconX = () => <X className="w-6 h-6" />;

// ─── Icon map ─────────────────────────────────────────────────────────────────

const NAV_ICON_MAP: Record<string, React.ReactNode> = {
  Dashboard: <IconDashboard />,
  Contacts: <IconContacts />,
  Inbox: <IconInbox />,
  Messages: <IconMessages />,
  Templates: <IconTemplates />,
  "AI Copilot": <IconAI />,
  Analytics: <IconAnalytics />,
  Settings: <IconSettings />,
  Profile: <IconProfile />,
  Team: <IconTeam />,
  Integrations: <IconIntegrations />,
  "API Keys": <IconApiKeys />,
  Billing: <IconBilling />,
};

// ─── Sidebar Component ────────────────────────────────────────────────────────

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[260px] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
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
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <IconX />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-[#9D1A10] text-white shadow-lg shadow-red-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span
                  className={
                    isActive
                      ? "text-white"
                      : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                  }
                >
                  {NAV_ICON_MAP[item.label]}
                </span>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge != null && item.badge > 0 && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#9D1A10]/10 text-[#9D1A10] dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer — AI Credits */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-gradient-to-br from-[#9D1A10]/5 to-[#9D1A10]/10 dark:from-[#9D1A10]/20 dark:to-[#9D1A10]/10 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#9D1A10]"><IconSparkles /></span>
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
    </>
  );
}
