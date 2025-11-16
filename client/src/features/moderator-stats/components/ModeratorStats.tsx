import { ChartActivity } from './ChartActivity';
import { SummaryStats } from './SummaryStats';

export const ModeratorStats = () => {
  return (
    <main className="flex flex-col gap-8 pt-5 pb-10">
      <SummaryStats />
      <ChartActivity />
    </main>
  );
};
