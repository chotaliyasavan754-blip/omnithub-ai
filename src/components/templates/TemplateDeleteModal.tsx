"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";

interface TemplateDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function TemplateDeleteModal({ isOpen, onClose, onConfirm }: TemplateDeleteModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Delete Template"
    >
      <p className="text-sm text-slate-500 mb-4 px-6 mt-2">Are you sure you want to delete this template?</p>
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10">
          <AlertCircle className="h-6 w-6 text-rose-500" />
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          This action cannot be undone. This template will be permanently removed from your account.
        </p>
      </div>
      <div className="flex justify-end gap-2 border-t border-slate-100 dark:border-slate-800 pt-4">
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Delete Template</Button>
      </div>
    </Modal>
  );
}
