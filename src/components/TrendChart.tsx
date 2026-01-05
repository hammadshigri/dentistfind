interface TrendChartProps {
  monthlyTrend: number[];
}

/**
 * TrendChart component displays a 6-month performance trend using CSS-only bars
 * Bar heights are calculated as a percentage of the maximum value
 * Uses flexbox and div elements - no external charting libraries
 */
export const TrendChart = ({ monthlyTrend }: TrendChartProps) => {
  const maxValue = Math.max(...monthlyTrend);
  const monthLabels = ["M1", "M2", "M3", "M4", "M5", "M6"];

  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        6-Month Trend
      </h3>
      <div className="flex items-end justify-between gap-2 h-32">
        {monthlyTrend.map((value, index) => {
          const heightPercentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className="w-full flex items-end justify-center"
                style={{ height: "100px" }}
              >
                <div
                  className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                  style={{
                    height: `${heightPercentage}%`,
                    minHeight: heightPercentage > 0 ? "4px" : "0",
                  }}
                  title={`Month ${index + 1}: ${value}`}
                />
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {monthLabels[index]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
