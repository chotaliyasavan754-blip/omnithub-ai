"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** Show ⌘K keyboard hint */
  showKbd?: boolean;
  /** Additional wrapper classes */
  className?: string;
  /** Visual variant */
  variant?: "light" | "dark";
}

/**
 * Reusable search bar with an optional keyboard shortcut hint.
 * Supports a light variant (dashboard navbar) and dark variant (contacts page header).
 */
export function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  showKbd = false,
  className = "",
  variant = "light",
}: SearchBarProps) {
  const wrapperLight =
    "flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 transition-all duration-200 focus-within:border-[#9D1A10] focus-within:ring-2 focus-within:ring-[#9D1A10]/10 focus-within:bg-white dark:focus-within:bg-slate-800";
  const wrapperDark =
    "flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-400 focus-within:border-indigo-500/50";

  return (
    <div className={`${variant === "light" ? wrapperLight : wrapperDark} ${className}`}>
      <Search className="h-4 w-4 shrink-0 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none w-full"
      />
      {showKbd && (
        <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-700 rounded">
          ⌘K
        </kbd>
      )}
    </div>
  );
}
