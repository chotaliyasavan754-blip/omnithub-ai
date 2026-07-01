"use client";

import { Modal } from "@/components/ui/Modal";
import type { MessageTemplate } from "@/types";
import { Button } from "@/components/ui/Button";

interface TemplateEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: MessageTemplate | null;
  onSave: (template: MessageTemplate) => void;
}

export function TemplateEditorModal({ isOpen, onClose, template, onSave }: TemplateEditorModalProps) {
  // Placeholder implementation
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title={template ? "Edit Template" : "New Template"}
    >
      <p className="text-sm text-slate-500 mb-4 px-6 mt-2">Create or edit a message template.</p>
      <div className="py-8 text-center text-sm text-slate-500">
        Template editor placeholder
      </div>
      <div className="flex justify-end gap-2 border-t border-slate-100 dark:border-slate-800 pt-4">
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={onClose}>Save Template</Button>
      </div>
    </Modal>
  );
}
