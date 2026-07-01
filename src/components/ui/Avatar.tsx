"use client";

import { getAvatarBgColor } from "@/constants/theme";

interface AvatarProps {
  /** Two-letter initials to display */
  initials: string;
  /** Full name used to deterministically compute a background color */
  name: string;
  size?: "sm" | "md";
}

/**
 * Circular avatar with initials and a deterministic background color.
 * Used throughout Dashboard tables and activity feeds.
 */
export function Avatar({ initials, name, size = "md" }: AvatarProps) {
  const bg = getAvatarBgColor(name);
  const sizeClasses = size === "sm" ? "w-8 h-8 text-xs" : "w-9 h-9 text-xs";

  return (
    <div
      className={`${sizeClasses} ${bg} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}
