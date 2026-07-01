"use client";

import { useEffect, useRef } from "react";
import { Bot, User } from "lucide-react";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import type { CopilotMessage } from "@/data/aiCopilot";

interface CopilotChatProps {
  messages: CopilotMessage[];
  isGenerating: boolean;
}

export function CopilotChat({ messages, isGenerating }: CopilotChatProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  return (
    <div className="flex-1 overflow-y-auto space-y-4 p-4 lg:p-6">
      {messages.map((msg) => {
        const isUser = msg.role === "user";
        return (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                isUser
                  ? "bg-gradient-to-br from-[#9D1A10] to-[#c4281c]"
                  : "bg-gradient-to-br from-violet-500 to-indigo-600"
              }`}
            >
              {isUser ? (
                <User className="h-4 w-4 text-white" />
              ) : (
                <Bot className="h-4 w-4 text-white" />
              )}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                isUser
                  ? "rounded-tr-none bg-gradient-to-br from-[#9D1A10] to-[#c4281c] text-white"
                  : "rounded-tl-none bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              }`}
            >
              <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
              <p className={`mt-1.5 text-[10px] ${isUser ? "text-white/60" : "text-slate-400 dark:text-slate-500"}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        );
      })}

      {/* Generating indicator */}
      {isGenerating && (
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div className="flex items-center gap-2 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3">
            <LoadingSpinner className="h-4 w-4 text-violet-500" />
            <span className="text-sm text-slate-500 dark:text-slate-400">AI is thinking…</span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
