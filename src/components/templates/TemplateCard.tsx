"use client";

import { Eye, Copy, Pencil, CheckCircle2, Clock, XCircle, Star, Trash2 } from "lucide-react";
import type { MessageTemplate } from "@/types";

// ─── Status badge ─────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  approved: { icon: <CheckCircle2 className="h-3 w-3" />, classes: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  pending:  { icon: <Clock        className="h-3 w-3" />, classes: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  rejected: { icon: <XCircle      className="h-3 w-3" />, classes: "bg-rose-500/10 text-rose-600 dark:text-rose-400" },
};

const CHANNEL_COLORS: Record<string, string> = {
  WhatsApp: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Email:    "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  SMS:      "bg-violet-500/10 text-violet-600 dark:text-violet-400",
};

// ─── Props ────────────────────────────────────────────────────────────────────

interface TemplateCardProps {
  template: MessageTemplate;
  onPreview: (template: MessageTemplate) => void;
  onEdit: (template: MessageTemplate) => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function TemplateCard({ template, onPreview, onEdit, onDelete, onToggleFavorite }: TemplateCardProps) {
  const status = STATUS_CONFIG[template.status];

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-all hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700">
      {/* Top row */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
            {template.name}
          </p>
          <div className="mt-1 flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium ${CHANNEL_COLORS[template.channel]}`}>
              {template.channel}
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500">{template.category}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${status.classes}`}>
            {status.icon}
            {template.status.charAt(0).toUpperCase() + template.status.slice(1)}
          </span>
          <button
            onClick={() => onToggleFavorite(template.id)}
            className={`rounded-lg p-1.5 transition-colors ${
              template.isFavorite ? "text-amber-500 hover:text-amber-600" : "text-slate-300 hover:text-slate-400 dark:text-slate-700 dark:hover:text-slate-600"
            }`}
            title="Toggle favorite"
          >
            <Star className={`h-4 w-4 ${template.isFavorite ? "fill-amber-500" : ""}`} />
          </button>
        </div>
      </div>

      {/* Body preview */}
      <p className="flex-1 line-clamp-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        {template.body}
      </p>

      {/* Variables */}
      {template.variables.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {template.variables.map((v) => (
            <span
              key={v}
              className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400"
            >
              {`{{${v}}}`}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
        <p className="text-[11px] text-slate-400 dark:text-slate-600">
          Used {template.usageCount.toLocaleString()}× · {template.lastUsed}
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPreview(template)}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white"
            title="Preview"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#9D1A10]"
            title="Copy"
          >
            <Copy className="h-4 w-4" />
          </button>
          <button
            onClick={() => onEdit(template)}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-500"
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(template.id)}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-rose-500"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
