"use client";

import { useInbox } from "@/hooks/useInbox";
import { InboxSidebar } from "@/components/inbox/InboxSidebar";
import { InboxThreadList } from "@/components/inbox/InboxThreadList";
import { InboxThreadView } from "@/components/inbox/InboxThreadView";
import { SearchBar } from "@/components/ui/SearchBar";

/**
 * Inbox page — thin orchestrator.
 * State and filtering logic live in useInbox().
 * Sidebar and Navbar are rendered by the (app) layout.
 */
export default function InboxPage() {
  const {
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
    togglePin,
    toggleArchive,
    updateStatus,
  } = useInbox();

  return (
    <main className="flex h-[calc(100vh-4rem)] bg-[#0B1020] text-slate-200 overflow-hidden">
      {/* Left: Folder + Channel Sidebar */}
      <InboxSidebar
        activeFolder={activeFolder}
        activeChannel={activeChannel}
        folderCounts={folderCounts}
        onFolderChange={setActiveFolder}
        onChannelChange={setActiveChannel}
      />

      {/* Center: Thread List */}
      <div className="flex w-80 shrink-0 flex-col border-r border-white/5 overflow-hidden">
        {/* Search */}
        <div className="border-b border-white/5 p-3">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search inbox…"
            variant="dark"
          />
        </div>

        {/* Count */}
        <div className="border-b border-white/5 px-4 py-2">
          <p className="text-xs text-slate-600">
            {filteredThreads.length} thread{filteredThreads.length !== 1 ? "s" : ""}
          </p>
        </div>

        <InboxThreadList
          threads={filteredThreads}
          selectedId={selectedThread?.id ?? null}
          onSelect={selectThread}
          onTogglePin={togglePin}
        />
      </div>

      {/* Right: Thread View */}
      <InboxThreadView
        thread={selectedThread}
        onBack={() => selectThread(selectedThread!)}
        onTogglePin={togglePin}
        onToggleArchive={toggleArchive}
        onUpdateStatus={updateStatus}
      />
    </main>
  );
}
