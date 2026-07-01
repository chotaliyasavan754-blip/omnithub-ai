"use client";

import { Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/ui/SearchBar";
import { TEMPLATE_CATEGORIES, TEMPLATE_CHANNELS } from "@/data/templates";
import type { TemplateCategory, TemplateChannel } from "@/types";

interface TemplatesHeaderProps {
  searchTerm: string;
  activeCategory: TemplateCategory | "All";
  activeChannel: TemplateChannel | "All";
  onSearchChange: (value: string) => void;
  onCategoryChange: (cat: TemplateCategory | "All") => void;
  onChannelChange: (ch: TemplateChannel | "All") => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
  onCreateTemplate: () => void;
}

export function TemplatesHeader({
  searchTerm,
  activeCategory,
  activeChannel,
  onSearchChange,
  onCategoryChange,
  onChannelChange,
  showFavoritesOnly,
  onToggleFavorites,
  onCreateTemplate,
}: TemplatesHeaderProps) {
  return (
    <div className="space-y-4 mb-6">
      {/* Title + New button */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Templates</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Reusable message templates for all channels
          </p>
        </div>
        <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />} onClick={onCreateTemplate}>
          New Template
        </Button>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SearchBar
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search templates…"
          variant="light"
          className="w-full sm:w-64"
        />

        {/* Favorites toggle */}
        <button
          onClick={onToggleFavorites}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
            showFavoritesOnly
              ? "border-amber-500 bg-amber-500/10 text-amber-500"
              : "border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-500"
          }`}
          title="Show favorites only"
        >
          <Star className={`h-4 w-4 ${showFavoritesOnly ? "fill-amber-500" : ""}`} />
        </button>

        {/* Category filter */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat as TemplateCategory | "All")}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "border-[#9D1A10] bg-[#9D1A10]/10 text-[#9D1A10] dark:text-red-400"
                  : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channel filter */}
        <div className="flex items-center gap-1.5">
          {TEMPLATE_CHANNELS.map((ch) => (
            <button
              key={ch}
              onClick={() => onChannelChange(ch as TemplateChannel | "All")}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeChannel === ch
                  ? "border-violet-500 bg-violet-500/10 text-violet-600 dark:text-violet-400"
                  : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300"
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
