import { AnalyticsHeader } from "@/components/analytics/AnalyticsHeader";
import { AnalyticsCharts } from "@/components/analytics/AnalyticsCharts";
import { AnalyticsBreakdown } from "@/components/analytics/AnalyticsBreakdown";

/**
 * Analytics page — thin orchestrator.
 * Data lives in src/data/analytics.ts.
 * Sidebar and Navbar are rendered by the (app) layout.
 */
export default function AnalyticsPage() {
  return (
    <main className="p-4 lg:p-6 max-w-[1440px] mx-auto">
      {/* KPI Stats */}
      <AnalyticsHeader />

      {/* Charts + Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <AnalyticsCharts />
        </div>
        <AnalyticsBreakdown />
      </div>
    </main>
  );
}
