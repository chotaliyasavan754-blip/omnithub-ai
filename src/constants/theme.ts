import type { MessageStatus, ContactStatus, ContactTag, Channel } from "@/types";

// ─── Brand ────────────────────────────────────────────────────────────────────

export const BRAND = {
  primary: "#9D1A10",
  primaryDark: "#871510",
  primaryLight: "#c4281c",
} as const;

// ─── Status Colors ────────────────────────────────────────────────────────────

/** Tailwind classes for message status badges on the Dashboard. */
export const MESSAGE_STATUS_COLORS: Record<MessageStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Closed: "bg-slate-100 text-slate-600 dark:bg-slate-700/30 dark:text-slate-400",
  Replied: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

/** Tailwind classes for contact status badges on the Contacts page. */
export const CONTACT_STATUS_STYLES: Record<ContactStatus, string> = {
  Active: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30",
  Pending: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30",
  Blocked: "bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/30",
};

export const CONTACT_STATUS_DOT: Record<ContactStatus, string> = {
  Active: "bg-emerald-400",
  Pending: "bg-amber-400",
  Blocked: "bg-rose-400",
};

// ─── Tag Colors ───────────────────────────────────────────────────────────────

export const CONTACT_TAG_STYLES: Record<ContactTag, string> = {
  VIP: "bg-fuchsia-500/10 text-fuchsia-300 ring-1 ring-fuchsia-500/30",
  Lead: "bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30",
  Customer: "bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/30",
  Trial: "bg-orange-500/10 text-orange-300 ring-1 ring-orange-500/30",
};

// ─── Channel Emoji Map ────────────────────────────────────────────────────────

export const CHANNEL_ICONS: Record<Channel, string> = {
  WhatsApp: "💬",
  Email: "📧",
  SMS: "📱",
  "Live Chat": "💭",
  Facebook: "👥",
};

// ─── Avatar Colors ────────────────────────────────────────────────────────────

/** Used to assign a deterministic color to avatar circles based on name. */
export const AVATAR_BG_COLORS = [
  "bg-violet-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-pink-500",
  "bg-indigo-500",
] as const;

/** Used for gradient avatars in the Contacts page. */
export const AVATAR_GRADIENT_COLORS = [
  "from-violet-500 to-indigo-500",
  "from-emerald-500 to-teal-500",
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-sky-500 to-blue-500",
  "from-fuchsia-500 to-purple-500",
] as const;

// ─── Utility ─────────────────────────────────────────────────────────────────

/** Returns a deterministic avatar background color class for a given name. */
export function getAvatarBgColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_BG_COLORS[Math.abs(hash) % AVATAR_BG_COLORS.length];
}
