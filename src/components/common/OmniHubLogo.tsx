"use client";

/** OmniHub AI brand logo SVG mark. */
export function OmniHubLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
      <rect width="36" height="36" rx="10" fill="url(#omnihub-logo-grad)" />
      <path
        d="M18 8a10 10 0 1 0 0 20A10 10 0 0 0 18 8Zm0 3a7 7 0 1 1 0 14A7 7 0 0 1 18 11Zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        fill="white"
        fillOpacity="0.95"
      />
      <defs>
        <linearGradient id="omnihub-logo-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9D1A10" />
          <stop offset="1" stopColor="#c4281c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
