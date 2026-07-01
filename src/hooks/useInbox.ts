"use client";

import { useMemo, useState } from "react";
import { INBOX_THREADS } from "@/data/inbox";
import type { InboxThread, Channel, ThreadStatus } from "@/types";

type FolderKey = "all" | "unread" | "pinned" | "archived";

/**
 * All Inbox page state and filtering logic.
 * Pages stay thin — business logic lives here.
 */
export function useInbox() {
  const [threads, setThreads] = useState<InboxThread[]>(INBOX_THREADS);
  const [activeFolder, setActiveFolder] = useState<FolderKey>("all");
  const [activeChannel, setActiveChannel] = useState<Channel | "All">("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedThread, setSelectedThread] = useState<InboxThread | null>(null);

  const filteredThreads = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return threads.filter((t) => {
      const matchesFolder =
        activeFolder === "all" ? true :
        activeFolder === "unread"   ? t.unread :
        activeFolder === "pinned"   ? t.pinned :
        activeFolder === "archived" ? t.archived :
        true;

      const matchesChannel =
        activeChannel === "All" || t.channel === activeChannel;

      const matchesSearch =
        !term ||
        t.contactName.toLowerCase().includes(term) ||
        t.subject.toLowerCase().includes(term) ||
        t.snippet.toLowerCase().includes(term);

      return matchesFolder && matchesChannel && matchesSearch;
    });
  }, [threads, activeFolder, activeChannel, searchTerm]);

  const unreadCount = useMemo(() => threads.filter((t) => t.unread).length, [threads]);
  const pinnedCount = useMemo(() => threads.filter((t) => t.pinned).length, [threads]);
  const archivedCount = useMemo(() => threads.filter((t) => t.archived).length, [threads]);

  const folderCounts: Record<FolderKey, number> = {
    all:      threads.length,
    unread:   unreadCount,
    pinned:   pinnedCount,
    archived: archivedCount,
  };

  const markAsRead = (id: string) => {
    setThreads((prev) => prev.map((t) => t.id === id ? { ...t, unread: false } : t));
  };

  const togglePin = (id: string) => {
    setThreads((prev) => prev.map((t) => t.id === id ? { ...t, pinned: !t.pinned } : t));
  };

  const toggleArchive = (id: string) => {
    setThreads((prev) => prev.map((t) => t.id === id ? { ...t, archived: !t.archived } : t));
  };

  const updateStatus = (id: string, status: ThreadStatus) => {
    setThreads((prev) => prev.map((t) => t.id === id ? { ...t, status } : t));
  };

  const selectThread = (thread: InboxThread) => {
    markAsRead(thread.id);
    setSelectedThread(thread);
  };

  return {
    filteredThreads,
    selectedThread,
    activeFolder,
    activeChannel,
    searchTerm,
    folderCounts,
    setActiveFolder,
    setActiveChannel,
    setSearchTerm,
    selectThread,
    markAsRead,
    togglePin,
    toggleArchive,
    updateStatus,
  };
}
