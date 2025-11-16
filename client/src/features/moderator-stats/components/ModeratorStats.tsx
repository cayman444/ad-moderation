import { CategoriesStats } from './CategoriesStats';
import { ChartActivity } from './ChartActivity';
import { DecisionsStats } from './DecisionsStats';
import { SummaryStats } from './SummaryStats';

export const ModeratorStats = () => {
  return (
    <main className="flex flex-col gap-8 pt-5 pb-10">
      <SummaryStats />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <ChartActivity />
        <DecisionsStats />
      </div>
      <CategoriesStats />
    </main>
  );
};
