import { useState, useCallback } from "react";
import { INTEGRATIONS_DATA, Integration } from "@/data/integrations";

export function useIntegrations() {
  const [integrations, setIntegrations] = useState<Integration[]>(INTEGRATIONS_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || integration.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleConnection = useCallback((id: string) => {
    setIntegrations((prev) =>
      prev.map((int) => {
        if (int.id === id) {
          return {
            ...int,
            status: int.status === "Connected" ? "Disconnected" : "Connected",
          };
        }
        return int;
      })
    );
  }, []);

  return {
    integrations: filteredIntegrations,
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    toggleConnection,
  };
}
