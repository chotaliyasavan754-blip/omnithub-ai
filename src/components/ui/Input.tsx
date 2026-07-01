"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 * Styled text input field. Used in forms (Login, Add Contact).
 */
export function Input({ label, error, id, className = "", ...rest }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`
          block w-full rounded-lg border border-slate-300 bg-white
          px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400
          shadow-sm transition-all duration-150
          focus:border-[#9D1A10] focus:outline-none focus:ring-2 focus:ring-[#9D1A10]/20
          dark:border-slate-600 dark:bg-slate-800 dark:text-white
          dark:placeholder:text-slate-500 dark:focus:border-red-400 dark:focus:ring-red-400/20
          ${className}
        `}
        {...rest}
      />
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}

/**
 * Dark-themed input used in modals (Contacts page).
 */
export function DarkInput({ label, className = "", ...rest }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="mb-1.5 block text-xs font-medium text-slate-400">
          {label}
        </label>
      )}
      <input
        className={`
          w-full rounded-lg border border-white/10 bg-white/[0.03]
          px-3 py-2 text-sm text-white placeholder-slate-500
          outline-none transition-colors
          focus:border-indigo-500/50 focus:bg-white/[0.06]
          ${className}
        `}
        {...rest}
      />
    </div>
  );
}
