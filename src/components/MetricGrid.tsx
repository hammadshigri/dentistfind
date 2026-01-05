import type { PracticeSummary } from "../types/practice";
import { MetricItem } from "./MetricItem";

interface MetricGridProps {
  practice: PracticeSummary;
}

/**
 * MetricGrid component displays key metrics in a grid layout
 * Shows: new patients, appointment requests, conversion rate, and optional marketing spend
 */
export const MetricGrid = ({ practice }: MetricGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <MetricItem
        label="New Patients"
        value={practice.newPatientsThisMonth}
        unit="this month"
      />
      <MetricItem
        label="Appointment Requests"
        value={practice.appointmentRequests}
      />
      <MetricItem
        label="Conversion Rate"
        value={practice.conversionRate.toFixed(1)}
        unit="%"
      />
      {practice.marketingSpend && (
        <MetricItem
          label="Marketing Spend"
          value={`$${practice.marketingSpend.toLocaleString()}`}
        />
      )}
    </div>
  );
};
