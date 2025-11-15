import type { ModerationHistoryList } from '@/shared/api/types';
import type { FC } from 'react';
import { AdModerationHistorySkeleton } from '../ui';
import { AdModerationHistoryItem } from './AdModerationHistoryItem';

interface AdModerationHistoryProps {
  moderationHistory?: ModerationHistoryList;
  isFetching: boolean;
}

export const AdModerationHistory: FC<AdModerationHistoryProps> = ({
  moderationHistory,
  isFetching,
}) => {
  return (
    <div className="flex flex-col self-start gap-4 border rounded-lg p-4">
      <h4 className="text-xl font-medium">История модерации</h4>
      <ul className="flex flex-col gap-4 h-50 overflow-y-auto">
        {isFetching && <AdModerationHistorySkeleton />}
        {!moderationHistory?.length && !isFetching && (
          <div className="flex-1 flex items-center justify-center text-lg font-medium">
            Нет истории
          </div>
        )}
        {moderationHistory?.map((params) => (
          <AdModerationHistoryItem key={params.id} {...params} />
        ))}
      </ul>
    </div>
  );
};
