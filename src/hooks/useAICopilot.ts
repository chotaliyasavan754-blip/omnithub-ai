"use client";

import { useState, useCallback } from "react";
import { INITIAL_MESSAGES, DEMO_RESPONSES } from "@/data/aiCopilot";
import type { CopilotMessage } from "@/data/aiCopilot";

/**
 * All AI Copilot page state: chat messages, generating state, and prompt handling.
 */
export function useAICopilot() {
  const [messages, setMessages] = useState<CopilotMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isGenerating) return;

    const userMsg: CopilotMessage = {
      id:        `msg-${Date.now()}-user`,
      role:      "user",
      content:   content.trim(),
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsGenerating(true);

    // Simulate AI response latency
    await new Promise((r) => setTimeout(r, 1800));

    const lower = content.toLowerCase();
    const responseText =
      lower.includes("pric") ? DEMO_RESPONSES.pricing :
      lower.includes("translat") ? DEMO_RESPONSES.translate :
      DEMO_RESPONSES.default;

    const assistantMsg: CopilotMessage = {
      id:        `msg-${Date.now()}-ai`,
      role:      "assistant",
      content:   responseText,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, assistantMsg]);
    setIsGenerating(false);
  }, [isGenerating]);

  const clearChat = () => setMessages(INITIAL_MESSAGES);

  return {
    messages,
    input,
    isGenerating,
    setInput,
    sendMessage,
    clearChat,
  };
}
