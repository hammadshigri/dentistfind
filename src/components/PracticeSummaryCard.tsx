import type { PracticeSummary } from "../types/practice";
import { CardHeader } from "./CardHeader";
import { MetricGrid } from "./MetricGrid";
import { StatusIndicator } from "./StatusIndicator";
import { TrendChart } from "./TrendChart";
import { Recommendations } from "./Recommendations";

interface PracticeSummaryCardProps {
  practice: PracticeSummary;
}

/**
 * PracticeSummaryCard is the main container component
 * Displays key performance metrics for a dental practice
 * Includes: header, metrics, status, trend chart, and recommendations
 * Features hover states and responsive design
 */
export const PracticeSummaryCard = ({ practice }: PracticeSummaryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
      <CardHeader
        name={practice.name}
        city={practice.city}
        country={practice.country}
      />

      <div className="mb-4">
        <StatusIndicator conversionRate={practice.conversionRate} />
      </div>

      <MetricGrid practice={practice} />

      <TrendChart monthlyTrend={practice.monthlyTrend} />

      <Recommendations conversionRate={practice.conversionRate} />
    </div>
  );
};
