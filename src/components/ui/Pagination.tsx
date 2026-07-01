"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  pageSize: number;
  /** Number of items on the current page */
  currentPageItemCount: number;
}

/**
 * Page navigation with previous/next buttons and numbered page buttons.
 * Extracted from contacts/page.tsx — reusable for any paginated list.
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
  currentPageItemCount,
}: PaginationProps) {
  const start = (currentPage - 1) * pageSize + (currentPageItemCount ? 1 : 0);
  const end = (currentPage - 1) * pageSize + currentPageItemCount;

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 p-4 sm:flex-row">
      <p className="text-xs text-slate-500">
        Showing {start}–{end} of {totalItems}
      </p>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-8 w-8 rounded-lg text-xs font-medium transition-colors ${
              page === currentPage
                ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-900/30"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
