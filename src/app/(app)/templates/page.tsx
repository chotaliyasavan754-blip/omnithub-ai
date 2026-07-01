"use client";

import { LayoutTemplate } from "lucide-react";
import { useTemplates } from "@/hooks/useTemplates";
import { TemplatesHeader } from "@/components/templates/TemplatesHeader";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { TemplatePreviewModal } from "@/components/templates/TemplatePreviewModal";
import { TemplateEditorModal } from "@/components/templates/TemplateEditorModal";
import { TemplateDeleteModal } from "@/components/templates/TemplateDeleteModal";

/**
 * Templates page — thin orchestrator.
 * State and filtering logic live in useTemplates().
 * Sidebar and Navbar are rendered by the (app) layout.
 */
export default function TemplatesPage() {
  const {
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
  } = useTemplates();

  return (
    <main className="p-4 lg:p-6 max-w-[1440px] mx-auto">
      <TemplatesHeader
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        activeChannel={activeChannel}
        onSearchChange={setSearchTerm}
        onCategoryChange={setActiveCategory}
        onChannelChange={setActiveChannel}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
        onCreateTemplate={() => setIsCreateModalOpen(true)}
      />

      {/* Grid */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={setPreviewTemplate}
              onEdit={setEditingTemplate}
              onDelete={setDeletingTemplateId}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <LayoutTemplate className="mb-3 h-8 w-8 text-slate-400 dark:text-slate-600" />
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">No templates found</p>
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
            Try adjusting your filters or create a new template
          </p>
        </div>
      )}

      {/* Modals */}
      <TemplatePreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
      
      <TemplateEditorModal
        isOpen={isCreateModalOpen || editingTemplate !== null}
        onClose={() => {
          setIsCreateModalOpen(false);
          setEditingTemplate(null);
        }}
        template={editingTemplate}
        onSave={saveTemplate}
      />
      
      <TemplateDeleteModal
        isOpen={deletingTemplateId !== null}
        onClose={() => setDeletingTemplateId(null)}
        onConfirm={() => {
          if (deletingTemplateId) {
            deleteTemplate(deletingTemplateId);
          }
        }}
      />
    </main>
  );
}
