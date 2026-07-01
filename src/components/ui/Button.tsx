"use client";

import React from "react";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

const variantClasses: Record<string, string> = {
  primary:
    "bg-[#9D1A10] hover:bg-[#871510] text-white shadow-sm shadow-red-200 focus:ring-[#9D1A10] dark:shadow-red-900/40",
  secondary:
    "border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700",
  ghost:
    "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
  danger:
    "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10",
};

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2.5 text-sm gap-2",
  lg: "px-5 py-3 text-base gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  children,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`
        inline-flex items-center justify-center rounded-lg font-semibold
        transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2
        active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {isLoading ? (
        <>
          <LoadingSpinner className="h-4 w-4" />
          {children}
        </>
      ) : (
        <>
          {leftIcon}
          {children}
        </>
      )}
    </button>
  );
}
