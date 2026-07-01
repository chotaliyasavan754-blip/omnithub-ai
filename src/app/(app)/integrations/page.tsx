"use client";

import { useIntegrations } from "@/hooks/useIntegrations";
import { IntegrationCard } from "@/components/integrations/IntegrationCard";
import { Blocks, Search, Filter } from "lucide-react";

export default function IntegrationsPage() {
  const {
    integrations,
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    toggleConnection,
  } = useIntegrations();

  return (
    <main className="p-4 lg:p-6 max-w-[1440px] mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Blocks className="h-6 w-6 text-[#9D1A10]" />
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Integrations</h1>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Connect OmniHub AI with your favorite tools and platforms.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search integrations..."
            className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors"
          />
        </div>
        <div className="relative min-w-[200px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Filter className="h-4 w-4" />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#9D1A10] focus:ring-1 focus:ring-[#9D1A10] transition-colors appearance-none"
          >
            <option value="All">All Categories</option>
            <option value="Messaging">Messaging</option>
            <option value="AI">AI Models</option>
            <option value="Payment">Payment</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {integrations.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Blocks className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 dark:text-white">No integrations found</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Try adjusting your filters or search query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {integrations.map((int) => (
            <IntegrationCard 
              key={int.id} 
              integration={int} 
              onToggle={toggleConnection} 
            />
          ))}
        </div>
      )}
    </main>
  );
}
