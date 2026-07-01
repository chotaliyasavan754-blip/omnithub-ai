"use client";

import { useMessages } from "@/hooks/useMessages";
import { MessagesTabs } from "@/components/messages/MessagesTabs";
import { MessagesList } from "@/components/messages/MessagesList";
import { MessagesChat } from "@/components/messages/MessagesChat";
import { MessagesProfile } from "@/components/messages/MessagesProfile";

/**
 * Messages page — thin orchestrator.
 * State and filtering logic live in useMessages().
 * Sidebar and Navbar are rendered by the (app) layout.
 */
export default function MessagesPage() {
  const {
    filteredMessages,
    activeTab,
    searchTerm,
    tabCounts,
    selectedMessage,
    setActiveTab,
    setSearchTerm,
    setSelectedMessage,
  } = useMessages();

  return (
    <main className="flex h-[calc(100vh-4rem)] bg-white dark:bg-slate-950 overflow-hidden">
      {/* Left Column: Messages List Sidebar */}
      <div className="flex w-96 shrink-0 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        <MessagesTabs
          activeTab={activeTab}
          tabCounts={tabCounts}
          searchTerm={searchTerm}
          onTabChange={setActiveTab}
          onSearchChange={setSearchTerm}
        />
        <div className="flex-1 overflow-y-auto">
          <MessagesList
            messages={filteredMessages}
            selectedId={selectedMessage?.id}
            onSelect={setSelectedMessage}
          />
        </div>
      </div>

      {/* Center Column: Chat View */}
      <div className="flex-1 min-w-0">
        <MessagesChat contact={selectedMessage} />
      </div>

      {/* Right Column: User Profile */}
      <MessagesProfile contact={selectedMessage} />
    </main>
  );
}
