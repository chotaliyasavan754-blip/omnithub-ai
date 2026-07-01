"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Copy, CheckCircle2 } from "lucide-react";

interface CreateKeyModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string, expirationMonths: number | null) => string; // returns the new key
}

export function CreateKeyModal({ open, onClose, onCreate }: CreateKeyModalProps) {
  const [name, setName] = useState("");
  const [expiration, setExpiration] = useState<string>("never");
  const [newKey, setNewKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCreate = () => {
    if (!name.trim()) return;
    const months = expiration === "never" ? null : parseInt(expiration, 10);
    const key = onCreate(name, months);
    setNewKey(key);
  };

  const handleCopy = async () => {
    if (newKey) {
      await navigator.clipboard.writeText(newKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClose = () => {
    setName("");
    setExpiration("never");
    setNewKey(null);
    setCopied(false);
    onClose();
  };

  if (newKey) {
    return (
      <Modal open={open} onClose={handleClose} title="API Key Created">
        <div className="p-6 space-y-4">
          <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-xl p-4 flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Save your API key</h4>
              <p className="text-sm text-emerald-600 dark:text-emerald-400/80 mt-1">
                Please copy this key and save it somewhere safe. For security reasons, we cannot show it to you again.
              </p>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              readOnly
              value={newKey}
              className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 pr-12 pl-3.5 py-3 text-sm text-slate-900 dark:text-white font-mono"
            />
            <button
              onClick={handleCopy}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <CheckCircle2 className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal open={open} onClose={handleClose} title="Create API Key">
      <div className="p-6 space-y-4">
        <Input
          label="Key Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Production Website"
        />

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Expiration
          </label>
          <select
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
          >
            <option value="never">Never expire</option>
            <option value="1">30 days</option>
            <option value="3">90 days</option>
            <option value="6">6 months</option>
            <option value="12">1 year</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
        <Button variant="ghost" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleCreate} disabled={!name.trim()}>
          Create Key
        </Button>
      </div>
    </Modal>
  );
}
