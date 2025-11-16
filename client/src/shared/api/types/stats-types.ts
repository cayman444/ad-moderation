export interface CategoriesStatsParams {
  period: string;
  startDate: string;
  endDate: string;
}

export interface SummaryStats {
  totalReviewed: number;
  totalReviewedToday: number;
  totalReviewedThisWeek: number;
  totalReviewedThisMonth: number;
  approvedPercentage: number;
  rejectedPercentage: number;
  requestChangesPercentage: number;
  averageReviewTime: number;
}
export interface SummaryStatsParams {
  period?: SummaryStatsPeriod;
  startDate?: string;
  endDate?: string;
}

export type SummaryStatsPeriod = 'today' | 'week' | 'month' | 'custom';
export type CategoriesStats = Record<string, number>;
