"use client";

import {
  CONTACT_STATUS_STYLES,
  CONTACT_STATUS_DOT,
  CONTACT_TAG_STYLES,
  MESSAGE_STATUS_COLORS,
} from "@/constants/theme";
import type { ContactStatus, ContactTag, MessageStatus } from "@/types";

// ─── Contact Status Badge (dark theme, used on Contacts page) ─────────────────

interface ContactStatusBadgeProps {
  status: ContactStatus;
}

export function ContactStatusBadge({ status }: ContactStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${CONTACT_STATUS_STYLES[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${CONTACT_STATUS_DOT[status]}`} />
      {status}
    </span>
  );
}

// ─── Message Status Badge (light/dark theme, used on Dashboard) ────────────────

interface MessageStatusBadgeProps {
  status: MessageStatus;
}

export function MessageStatusBadge({ status }: MessageStatusBadgeProps) {
  return (
    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${MESSAGE_STATUS_COLORS[status]}`}>
      {status}
    </span>
  );
}

// ─── Contact Tag Pill ─────────────────────────────────────────────────────────

interface TagPillProps {
  tag: ContactTag;
}

export function TagPill({ tag }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${CONTACT_TAG_STYLES[tag]}`}
    >
      {tag}
    </span>
  );
}

// ─── Generic Badge ────────────────────────────────────────────────────────────

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const styles = {
    default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    danger: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
