"use client";

import { useMemo, useState } from "react";
import { MESSAGE_TEMPLATES } from "@/data/templates";
import type { MessageTemplate, TemplateCategory, TemplateChannel } from "@/types";

export function useTemplates() {
  const [templates, setTemplates] = useState<MessageTemplate[]>(MESSAGE_TEMPLATES);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "All">("All");
  const [activeChannel, setActiveChannel] = useState<TemplateChannel | "All">("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  // Modals state
  const [previewTemplate, setPreviewTemplate] = useState<MessageTemplate | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<MessageTemplate | null>(null);
  const [deletingTemplateId, setDeletingTemplateId] = useState<string | null>(null);

  const filteredTemplates = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return templates.filter((t) => {
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      const matchesChannel  = activeChannel  === "All" || t.channel  === activeChannel;
      const matchesFavorite = showFavoritesOnly ? t.isFavorite : true;
      const matchesSearch   =
        !term ||
        t.name.toLowerCase().includes(term) ||
        t.body.toLowerCase().includes(term) ||
        t.category.toLowerCase().includes(term);
      return matchesCategory && matchesChannel && matchesFavorite && matchesSearch;
    });
  }, [templates, searchTerm, activeCategory, activeChannel, showFavoritesOnly]);

  const toggleFavorite = (id: string) => {
    setTemplates((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isFavorite: !t.isFavorite } : t))
    );
  };

  const deleteTemplate = (id: string) => {
    setTemplates((prev) => prev.filter((t) => t.id !== id));
    setDeletingTemplateId(null);
  };

  const saveTemplate = (template: MessageTemplate) => {
    if (editingTemplate) {
      setTemplates((prev) => prev.map((t) => (t.id === template.id ? template : t)));
    } else {
      setTemplates((prev) => [{ ...template, id: `tmpl-${Date.now()}` }, ...prev]);
    }
    setIsCreateModalOpen(false);
    setEditingTemplate(null);
  };

  return {
    filteredTemplates,
    previewTemplate,
    searchTerm,
    activeCategory,
    activeChannel,
    showFavoritesOnly,
    isCreateModalOpen,
    editingTemplate,
    deletingTemplateId,
    setSearchTerm,
    setActiveCategory,
    setActiveChannel,
    setShowFavoritesOnly,
    setPreviewTemplate,
    setIsCreateModalOpen,
    setEditingTemplate,
    setDeletingTemplateId,
    toggleFavorite,
    deleteTemplate,
    saveTemplate,
  };
}
