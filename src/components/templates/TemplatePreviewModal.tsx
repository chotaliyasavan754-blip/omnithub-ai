"use client";

import { Copy } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import type { MessageTemplate } from "@/types";

interface TemplatePreviewModalProps {
  template: MessageTemplate | null;
  onClose: () => void;
}

export function TemplatePreviewModal({ template, onClose }: TemplatePreviewModalProps) {
  if (!template) return null;

  const footer = (
    <>
      <Button variant="secondary" onClick={onClose}>Close</Button>
      <Button variant="primary" leftIcon={<Copy className="h-4 w-4" />}>
        Copy Template
      </Button>
    </>
  );

  return (
    <Modal open={!!template} onClose={onClose} title={template.name} footer={footer}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="rounded bg-white/10 px-2 py-0.5 font-medium">{template.channel}</span>
          <span>·</span>
          <span>{template.category}</span>
          <span>·</span>
          <span>Used {template.usageCount.toLocaleString()}×</span>
        </div>

        {/* Body */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <pre className="whitespace-pre-wrap font-sans text-sm text-slate-200 leading-relaxed">
            {template.body}
          </pre>
        </div>

        {/* Variables */}
        {template.variables.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-medium text-slate-400">Template Variables</p>
            <div className="flex flex-wrap gap-2">
              {template.variables.map((v) => (
                <span
                  key={v}
                  className="rounded bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300 ring-1 ring-white/10"
                >
                  {`{{${v}}}`}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
