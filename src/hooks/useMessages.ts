"use client";

import { useMemo, useState } from "react";
import { ALL_MESSAGES, type MessageStatusTab } from "@/data/messages";
import type { RecentMessage, MessageStatus } from "@/types";

/**
 * All Messages page state: tab filter, search, selected message.
 */
export function useMessages() {
  const [activeTab, setActiveTab] = useState<MessageStatusTab>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<RecentMessage | null>(null);

  const filteredMessages = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return ALL_MESSAGES.filter((m) => {
      const matchesTab    = activeTab === "All" || m.status === activeTab;
      const matchesSearch =
        !term ||
        m.contactName.toLowerCase().includes(term) ||
        m.lastMessage.toLowerCase().includes(term) ||
        m.channel.toLowerCase().includes(term);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchTerm]);

  const tabCounts = useMemo(() => {
    const counts: Record<MessageStatusTab, number> = {
      All: ALL_MESSAGES.length,
      Active: 0, Pending: 0, Replied: 0, Closed: 0,
    };
    ALL_MESSAGES.forEach((m) => {
      counts[m.status as MessageStatusTab] = (counts[m.status as MessageStatusTab] || 0) + 1;
    });
    return counts;
  }, []);

  return {
    filteredMessages,
    activeTab,
    searchTerm,
    selectedMessage,
    tabCounts,
    setActiveTab,
    setSearchTerm,
    setSelectedMessage,
  };
}
