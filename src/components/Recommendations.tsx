import type { PracticeStatus } from "../types/practice";
import { getPracticeStatus } from "../utils/statusUtils";

interface RecommendationsProps {
  conversionRate: number;
}

/**
 * Recommendations component displays suggestions based on practice performance status
 */
export const Recommendations = ({ conversionRate }: RecommendationsProps) => {
  const status: PracticeStatus = getPracticeStatus(conversionRate);

  const getRecommendations = (): string[] => {
    switch (status) {
      case "high-performer":
        return [
          "Continue current marketing strategies",
          "Consider expanding to new locations",
          "Maintain patient satisfaction levels",
        ];
      case "stable":
        return [
          "Optimize appointment booking process",
          "Review marketing campaign effectiveness",
          "Consider patient retention programs",
        ];
      case "at-risk":
        return [
          "Urgent: Review conversion funnel",
          "Improve follow-up communication",
          "Consider marketing strategy overhaul",
        ];
    }
  };

  const recommendations = getRecommendations();

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Recommendations
      </h3>
      <ul className="space-y-1">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            {recommendation}
          </li>
        ))}
      </ul>
    </div>
  );
};
