import type { PracticeSummary } from "../types/practice";

export const mockPractices: PracticeSummary[] = [
  {
    id: "1",
    name: "Bright Smile Dental",
    city: "New York",
    country: "USA",
    newPatientsThisMonth: 45,
    appointmentRequests: 180,
    conversionRate: 25.0, // High Performer
    monthlyTrend: [35, 38, 42, 40, 43, 45],
    marketingSpend: 5000,
  },
  {
    id: "2",
    name: "Coastal Dental Care",
    city: "Los Angeles",
    country: "USA",
    newPatientsThisMonth: 28,
    appointmentRequests: 200,
    conversionRate: 14.0, // Stable
    monthlyTrend: [20, 22, 25, 24, 26, 28],
    marketingSpend: 3500,
  },
  {
    id: "3",
    name: "Downtown Dental Clinic",
    city: "Chicago",
    country: "USA",
    newPatientsThisMonth: 12,
    appointmentRequests: 150,
    conversionRate: 8.0, // At Risk
    monthlyTrend: [15, 14, 13, 12, 11, 12],
    marketingSpend: 2000,
  },
];
