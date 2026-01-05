interface MetricItemProps {
  label: string;
  value: string | number;
  unit?: string;
}

/**
 * MetricItem component displays a single metric with label and value
 */
export const MetricItem = ({ label, value, unit }: MetricItemProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">
        {label}
      </span>
      <span className="text-lg font-semibold text-gray-900">
        {value}
        {unit && (
          <span className="text-sm font-normal text-gray-600 ml-1">{unit}</span>
        )}
      </span>
    </div>
  );
};
