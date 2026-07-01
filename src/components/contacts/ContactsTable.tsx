"use client";

import {
  Mail,
  Phone,
  Building2,
  Eye,
  Pencil,
  Trash2,
  ChevronDown,
  UserCheck,
} from "lucide-react";
import { ContactStatusBadge, TagPill } from "@/components/ui/Badge";
import { Pagination } from "@/components/ui/Pagination";
import type { Contact, ContactStatus } from "@/types";

// ─── Contact Avatar (gradient style for dark background) ──────────────────────

function ContactAvatar({ contact }: { contact: Contact }) {
  const initials = `${contact.firstName[0]}${contact.lastName[0]}`;
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${contact.avatarColor} text-xs font-semibold text-white shadow-lg shadow-black/30 ring-1 ring-white/10`}
    >
      {initials}
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface ContactsTableProps {
  contacts: Contact[];
  filteredCount: number;
  statusFilter: "All" | ContactStatus;
  onStatusFilterChange: (value: "All" | ContactStatus) => void;
  filterOpen: boolean;
  onToggleFilter: () => void;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onDelete: (id: string) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ContactsTable({
  contacts,
  filteredCount,
  statusFilter,
  onStatusFilterChange,
  filterOpen,
  onToggleFilter,
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onDelete,
}: ContactsTableProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl">
      {/* Table toolbar */}
      <div className="flex flex-col gap-3 border-b border-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <UserCheck className="h-4 w-4 text-slate-500" />
          <p className="text-sm font-medium text-slate-300">
            {filteredCount} contact{filteredCount !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Status filter dropdown */}
        <div className="relative">
          <button
            onClick={onToggleFilter}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.06]"
          >
            Status: {statusFilter}
            <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
          </button>

          {filterOpen && (
            <div className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-lg border border-white/10 bg-[#0F1530] shadow-xl shadow-black/50">
              {(["All", "Active", "Pending", "Blocked"] as const).map((option) => (
                <button
                  key={option}
                  onClick={() => onStatusFilterChange(option)}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs transition-colors hover:bg-white/5 ${
                    statusFilter === option ? "text-white" : "text-slate-400"
                  }`}
                >
                  {option}
                  {statusFilter === option && (
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">Tags</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Last Message</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {contacts.map((c) => (
              <tr key={c.id} className="transition-colors hover:bg-white/[0.025]">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <ContactAvatar contact={c} />
                    <span className="font-medium text-white">
                      {c.firstName} {c.lastName}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-slate-600" />
                    {c.email}
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-slate-600" />
                    {c.phone}
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-slate-600" />
                    {c.company}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <TagPill key={tag} tag={tag} />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <ContactStatusBadge status={c.status} />
                </td>
                <td className="max-w-[200px] truncate px-4 py-3 text-slate-500">
                  {c.lastMessage}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      title="View"
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-sky-400"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      title="Edit"
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-indigo-400"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => onDelete(c.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-rose-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {contacts.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-sm text-slate-500">
                  No contacts match your search or filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        totalItems={filteredCount}
        pageSize={pageSize}
        currentPageItemCount={contacts.length}
      />
    </div>
  );
}
