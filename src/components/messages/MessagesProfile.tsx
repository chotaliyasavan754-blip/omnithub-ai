"use client";

import { Mail, Phone, MapPin, Briefcase, Tag, AlertCircle } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { ContactStatusBadge } from "@/components/ui/Badge";
import type { RecentMessage } from "@/types";

interface MessagesProfileProps {
  contact: RecentMessage | null;
}

export function MessagesProfile({ contact }: MessagesProfileProps) {
  if (!contact) {
    return (
      <div className="w-80 shrink-0 bg-white dark:bg-slate-950 p-6 flex flex-col items-center justify-center text-center border-l border-slate-200 dark:border-slate-800 hidden xl:flex">
        <AlertCircle className="h-10 w-10 text-slate-300 dark:text-slate-700 mb-3" />
        <p className="text-sm font-medium text-slate-500">No Profile Selected</p>
      </div>
    );
  }

  // Mock contact details based on the selected RecentMessage
  const profileData = {
    email: `${contact.contactName.toLowerCase().replace(" ", ".")}@example.com`,
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    company: "Acme Corp",
    tags: ["VIP", "Customer"],
  };

  return (
    <div className="w-80 shrink-0 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 overflow-y-auto hidden xl:block">
      <div className="p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <Avatar initials={contact.avatar} name={contact.contactName} size="md" />
          <h2 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{contact.contactName}</h2>
          <p className="text-sm text-slate-500">{profileData.company}</p>
          
          <div className="mt-3 flex gap-2">
            <ContactStatusBadge status="Active" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 mb-8">
          <button className="flex flex-col items-center justify-center h-14 w-14 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <Phone className="h-5 w-5 mb-1 text-slate-500" />
            <span className="text-[10px] font-medium">Call</span>
          </button>
          <button className="flex flex-col items-center justify-center h-14 w-14 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <Mail className="h-5 w-5 mb-1 text-slate-500" />
            <span className="text-[10px] font-medium">Email</span>
          </button>
        </div>

        {/* Details List */}
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Email</p>
              <p className="text-sm text-slate-900 dark:text-white">{profileData.email}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Phone</p>
              <p className="text-sm text-slate-900 dark:text-white">{profileData.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Location</p>
              <p className="text-sm text-slate-900 dark:text-white">{profileData.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Company</p>
              <p className="text-sm text-slate-900 dark:text-white">{profileData.company}</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="h-4 w-4 text-slate-400" />
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Tags</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {profileData.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
