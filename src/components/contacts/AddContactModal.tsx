"use client";

import { useState } from "react";
import { Tag } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { DarkInput } from "@/components/ui/Input";
import { CONTACT_TAG_STYLES } from "@/constants/theme";
import type { NewContact, ContactTag } from "@/types";

const TAG_POOL: ContactTag[] = ["VIP", "Lead", "Customer", "Trial"];

interface AddContactModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (contact: NewContact) => void;
}

export function AddContactModal({ open, onClose, onSave }: AddContactModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [selectedTags, setSelectedTags] = useState<ContactTag[]>([]);

  const toggleTag = (tag: ContactTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setSelectedTags([]);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSave = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim()) return;
    onSave({ firstName, lastName, email, phone, company, tags: selectedTags });
    handleClose();
  };

  const footer = (
    <>
      <button
        onClick={handleClose}
        className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5"
      >
        Cancel
      </button>
      <button
        onClick={handleSave}
        className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-opacity hover:opacity-90"
      >
        Save Contact
      </button>
    </>
  );

  return (
    <Modal open={open} onClose={handleClose} title="Add Contact" footer={footer}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <DarkInput
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Olivia"
          />
          <DarkInput
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Bennett"
          />
        </div>

        <DarkInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="olivia.bennett@company.com"
          type="email"
        />

        <div className="grid grid-cols-2 gap-3">
          <DarkInput
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (415) 555-0192"
          />
          <DarkInput
            label="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Northwind Labs"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-400">Tags</label>
          <div className="flex flex-wrap gap-2">
            {TAG_POOL.map((tag) => {
              const active = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                    active
                      ? CONTACT_TAG_STYLES[tag]
                      : "bg-white/[0.03] text-slate-500 ring-1 ring-white/10 hover:text-slate-300"
                  }`}
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
}
