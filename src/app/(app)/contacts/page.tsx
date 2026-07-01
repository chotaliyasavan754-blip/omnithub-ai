"use client";

import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import { ALL_CONTACTS, generateContacts } from "@/data/contacts";
import { AVATAR_GRADIENT_COLORS } from "@/constants/theme";
import { ContactsStats } from "@/components/contacts/ContactsStats";
import { ContactsTable } from "@/components/contacts/ContactsTable";
import { AddContactModal } from "@/components/contacts/AddContactModal";
import type { Contact, ContactStatus, NewContact } from "@/types";

const PAGE_SIZE = 8;

/**
 * Contacts page — thin orchestrator.
 * All UI is composed from focused, reusable components.
 * The Sidebar and Navbar are rendered by the (app) layout.
 */
export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>(ALL_CONTACTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | ContactStatus>("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredContacts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return contacts.filter((c) => {
      const matchesSearch =
        !term ||
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        c.company.toLowerCase().includes(term) ||
        c.phone.toLowerCase().includes(term);
      const matchesStatus = statusFilter === "All" || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [contacts, searchTerm, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredContacts.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageContacts = filteredContacts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleStatusFilterChange = (value: "All" | ContactStatus) => {
    setStatusFilter(value);
    setFilterOpen(false);
    setCurrentPage(1);
  };

  const handleAddContact = (newContact: NewContact) => {
    setContacts((prev) => [
      {
        ...newContact,
        id: `contact-${Date.now()}`,
        status: "Pending",
        lastMessage: "No messages yet",
        avatar: "",
        avatarColor: AVATAR_GRADIENT_COLORS[prev.length % AVATAR_GRADIENT_COLORS.length],
      },
      ...prev,
    ]);
    setCurrentPage(1);
  };

  const handleDelete = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#0B1020] px-4 py-6 text-slate-200 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">Contacts</h1>
          <p className="mt-1 text-sm text-slate-500">Manage all your customers</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-400 focus-within:border-indigo-500/50">
            <Search className="h-4 w-4 shrink-0" />
            <input
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search contacts…"
              className="w-40 bg-transparent text-white placeholder-slate-500 outline-none sm:w-56"
            />
          </div>

          {/* Add Contact */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-opacity hover:opacity-90"
          >
            <Plus className="h-4 w-4" />
            Add Contact
          </button>
        </div>
      </div>

      {/* Stats */}
      <ContactsStats contacts={contacts} />

      {/* Table */}
      <ContactsTable
        contacts={pageContacts}
        filteredCount={filteredContacts.length}
        statusFilter={statusFilter}
        onStatusFilterChange={handleStatusFilterChange}
        filterOpen={filterOpen}
        onToggleFilter={() => setFilterOpen((v) => !v)}
        currentPage={safePage}
        totalPages={totalPages}
        pageSize={PAGE_SIZE}
        onPageChange={setCurrentPage}
        onDelete={handleDelete}
      />

      {/* Add Contact Modal */}
      <AddContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddContact}
      />
    </main>
  );
}
