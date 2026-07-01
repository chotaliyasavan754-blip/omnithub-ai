"use client";

import { Send, Trash2, Sparkles } from "lucide-react";
import { useAICopilot } from "@/hooks/useAICopilot";
import { CopilotChat } from "@/components/ai-copilot/CopilotChat";
import { CopilotStats } from "@/components/ai-copilot/CopilotStats";
import { CopilotSuggestions } from "@/components/ai-copilot/CopilotSuggestions";

/**
 * AI Copilot page — thin orchestrator.
 * Chat state lives in useAICopilot().
 * Sidebar and Navbar are rendered by the (app) layout.
 */
export default function AICopilotPage() {
  const { messages, input, isGenerating, setInput, sendMessage, clearChat } = useAICopilot();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <main className="flex h-[calc(100vh-4rem)] overflow-hidden p-4 lg:p-6 gap-5 bg-slate-50 dark:bg-slate-950">
      {/* Chat Column */}
      <div className="flex flex-1 flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#9D1A10] to-[#c4281c]">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">AI Copilot</p>
              <p className="text-[11px] text-slate-500">Powered by OmniHub AI</p>
            </div>
          </div>
          <button
            onClick={clearChat}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white"
            title="Clear chat"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <CopilotChat messages={messages} isGenerating={isGenerating} />

        {/* Input */}
        <div className="border-t border-slate-200 dark:border-slate-800 p-4">
          <div className="flex items-end gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 focus-within:border-[#9D1A10] focus-within:ring-2 focus-within:ring-[#9D1A10]/10">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask AI Copilot anything… (Enter to send, Shift+Enter for newline)"
              rows={2}
              className="flex-1 resize-none bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isGenerating}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#9D1A10] to-[#c4281c] text-white shadow-lg shadow-red-900/20 transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:flex w-72 flex-col gap-4 overflow-y-auto">
        <CopilotStats />
        <CopilotSuggestions onSelect={(prompt) => { setInput(prompt); }} />
      </div>
    </main>
  );
}
