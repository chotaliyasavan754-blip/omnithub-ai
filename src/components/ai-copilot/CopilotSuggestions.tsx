"use client";

import { Sparkles } from "lucide-react";
import { COPILOT_SUGGESTIONS } from "@/data/aiCopilot";

interface CopilotSuggestionsProps {
  onSelect: (prompt: string) => void;
}

export function CopilotSuggestions({ onSelect }: CopilotSuggestionsProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-600 mb-3">
        Quick Prompts
      </p>
      {COPILOT_SUGGESTIONS.map((suggestion) => (
        <button
          key={suggestion.id}
          onClick={() => onSelect(suggestion.prompt)}
          className="w-full flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-left text-sm font-medium text-slate-700 dark:text-slate-300 transition-all hover:border-[#9D1A10]/50 hover:bg-[#9D1A10]/5 hover:text-[#9D1A10] dark:hover:text-red-400"
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-violet-500" />
          {suggestion.label}
        </button>
      ))}
    </div>
  );
}
