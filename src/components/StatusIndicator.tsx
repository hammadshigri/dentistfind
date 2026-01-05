import { getPracticeStatus, getStatusConfig } from "../utils/statusUtils";

interface StatusIndicatorProps {
  conversionRate: number;
}

/**
 * StatusIndicator component displays a badge representing practice performance
 * Status is derived from conversion rate:
 * - ≥ 20%: High Performer (Green)
 * - 10% - 19.9%: Stable (Gray)
 * - < 10%: At Risk (Red)
 */
export const StatusIndicator = ({ conversionRate }: StatusIndicatorProps) => {
  const status = getPracticeStatus(conversionRate);
  const config = getStatusConfig(status);

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${config.colorClass}`}
    >
      {config.label}
    </span>
  );
};
