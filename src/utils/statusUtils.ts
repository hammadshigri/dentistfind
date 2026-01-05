import type { PracticeStatus, StatusConfig } from "../types/practice";

/**
 * Determines the practice status based on conversion rate
 * @param conversionRate - The conversion rate percentage (e.g., 18.5 for 18.5%)
 * @returns The practice status
 */
export const getPracticeStatus = (conversionRate: number): PracticeStatus => {
  if (conversionRate >= 20) {
    return "high-performer";
  }
  if (conversionRate < 10) {
    return "at-risk";
  }
  return "stable";
};

/**
 * Gets the status configuration (label and color) for a given status
 * @param status - The practice status
 * @returns Status configuration with label and Tailwind color classes
 */
export const getStatusConfig = (status: PracticeStatus): StatusConfig => {
  switch (status) {
    case "high-performer":
      return {
        label: "High Performer",
        colorClass: "bg-green-100 text-green-800 border-green-300",
      };
    case "at-risk":
      return {
        label: "At Risk",
        colorClass: "bg-red-100 text-red-800 border-red-300",
      };
    case "stable":
      return {
        label: "Stable",
        colorClass: "bg-gray-100 text-gray-800 border-gray-300",
      };
  }
};
