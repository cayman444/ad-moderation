import { AdTag } from '@/features/advertisements/ui';
import type { ModerationHistory } from '@/shared/api/types';
import { AdItemInfo } from '@/shared/ui';
import type { FC } from 'react';

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
      <AdItemInfo title="Модератор">{moderatorName}</AdItemInfo>
      <AdItemInfo title="Дата">
        {date.toLocaleDateString()},{' '}
        {date.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </AdItemInfo>
      <AdItemInfo title="Статус">
        {<AdTag type="status" value={action} />}
      </AdItemInfo>
      {reason && <AdItemInfo title="Причина">{reason}</AdItemInfo>}
      {comment && <AdItemInfo title="Комментарий">{comment}</AdItemInfo>}
    </li>
  );
};
