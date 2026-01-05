export type PracticeSummary = {
  id: string;
  name: string;
  city: string;
  country: string;
  newPatientsThisMonth: number;
  appointmentRequests: number;
  conversionRate: number; // Example: 18.5
  monthlyTrend: number[]; // Last 6 months, e.g. [10, 12, 8, 15, 18, 20]
  marketingSpend?: number; // Optional additional metric
};

export type PracticeStatus = "high-performer" | "stable" | "at-risk";

export type StatusConfig = {
  label: string;
  colorClass: string;
};
