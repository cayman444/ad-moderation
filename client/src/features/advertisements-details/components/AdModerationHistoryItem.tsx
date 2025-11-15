import { AdTag } from '@/features/advertisements/ui';
import type { ModerationHistory } from '@/shared/api/types';
import type { FC } from 'react';
import { AdDetailsItemInfo } from './AdDetailsItemInfo';

export const AdModerationHistoryItem: FC<ModerationHistory> = ({
  moderatorName,
  timestamp,
  action,
  reason,
  comment,
}) => {
  const date = new Date(timestamp);

  return (
    <li className="flex flex-col gap-2 border-b pb-4 mr-4 last:border-b-0 last:pb-0">
      <AdDetailsItemInfo title="Модератор">{moderatorName}</AdDetailsItemInfo>
      <AdDetailsItemInfo title="Дата">
        {date.toLocaleDateString()},{' '}
        {date.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </AdDetailsItemInfo>
      <AdDetailsItemInfo title="Статус">
        {<AdTag type="status" value={action} />}
      </AdDetailsItemInfo>
      {reason && (
        <AdDetailsItemInfo title="Причина">{reason}</AdDetailsItemInfo>
      )}
      {comment && (
        <AdDetailsItemInfo title="Комментарий">{comment}</AdDetailsItemInfo>
      )}
    </li>
  );
};
