export interface CategoriesStatsParams {
  period: string;
  startDate: string;
  endDate: string;
}

export type CategoriesStats = Record<string, number>;
