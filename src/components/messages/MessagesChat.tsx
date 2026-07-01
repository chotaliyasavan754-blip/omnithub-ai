"use client";

import { useState } from "react";
import { 
  Paperclip, 
  Smile, 
  Mic, 
  Send,
  MoreVertical,
  Phone,
  Video
} from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { CHANNEL_ICONS } from "@/constants/theme";
import type { RecentMessage } from "@/types";

interface MessagesChatProps {
  contact: RecentMessage | null;
}

export function MessagesChat({ contact }: MessagesChatProps) {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  if (!contact) {
    return (
      <div className="flex h-full flex-1 flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50">
        <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-4 mb-4">
          <Send className="h-8 w-8 text-slate-400" />
        </div>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Your Messages</p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Select a conversation to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-1 flex-col bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-3">
          <Avatar initials={contact.avatar} name={contact.contactName} size="sm" />
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{contact.contactName}</p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="text-[#9D1A10]">{CHANNEL_ICONS[contact.channel]}</span>
              {contact.channel}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
            <Phone className="h-4 w-4" />
          </button>
          <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
            <Video className="h-4 w-4" />
          </button>
          <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-slate-900/20">
        {/* Mock history */}
        <div className="flex flex-col gap-1 items-start">
          <div className="max-w-[70%] rounded-2xl rounded-tl-none bg-white dark:bg-slate-800 p-3 shadow-sm border border-slate-100 dark:border-slate-700/50">
            <p className="text-sm text-slate-700 dark:text-slate-200">{contact.lastMessage}</p>
          </div>
          <span className="text-[10px] text-slate-400 pl-1">{contact.date}</span>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <div className="max-w-[70%] rounded-2xl rounded-tr-none bg-[#9D1A10] p-3 shadow-sm text-white">
            <p className="text-sm">We're looking into this right away.</p>
          </div>
          <span className="text-[10px] text-slate-400 pr-1">Just now</span>
        </div>

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-2 items-center text-slate-400 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 p-3 rounded-2xl rounded-tl-none w-16 shadow-sm">
            <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce"></span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900">
        <div className="flex items-end gap-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-2 focus-within:border-[#9D1A10] focus-within:ring-1 focus-within:ring-[#9D1A10]/50 transition-all">
          <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700">
            <Paperclip className="h-5 w-5" />
          </button>
          
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a message..."
            className="max-h-32 min-h-[40px] w-full resize-none bg-transparent py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            rows={1}
          />

          <div className="flex items-center gap-1 pr-1 pb-1">
            <button className="p-1.5 text-slate-400 hover:text-amber-500 transition-colors rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700">
              <Smile className="h-5 w-5" />
            </button>
            <button className="p-1.5 text-slate-400 hover:text-emerald-500 transition-colors rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700">
              <Mic className="h-5 w-5" />
            </button>
            <button 
              disabled={!input.trim()}
              className="p-1.5 text-white bg-gradient-to-r from-[#9D1A10] to-[#c4281c] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-xl ml-1 shadow-sm"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
