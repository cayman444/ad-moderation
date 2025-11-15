import { AdTag } from '@/features/advertisements/ui';
import type { ModerationHistory } from '@/shared/api/types';
import type { FC } from 'react';

export const AdModerationHistoryItem: FC<ModerationHistory> = ({
  moderatorName,
  timestamp,
  action,
  reason,
  comment,
}) => {
  return (
    <li className="flex flex-col gap-2 border-b pb-4 mr-4 last:border-b-0 last:pb-0">
      <div className="flex gap-x-1 flex-wrap">
        Модератор:
        <span className="font-medium">{moderatorName}</span>
      </div>
      <div className="flex gap-x-1 flex-wrap">
        Дата:
        <div className="flex gap-1 font-medium">
          <span>{new Date(timestamp).toLocaleDateString('ru-RU')},</span>
          <span>
            {new Date(timestamp).toLocaleTimeString('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
      </div>
      <div className="flex gap-x-1 flex-wrap">
        Статус:
        <span className="font-medium">
          <AdTag type="status" value={action} />
        </span>
      </div>
      {reason && (
        <div className="flex gap-x-1 flex-wrap">
          Причина:
          <span className="font-medium">{reason}</span>
        </div>
      )}
      {comment && (
        <div className="flex gap-x-1 flex-wrap">
          Комментарий:
          <span className="font-medium">{comment}</span>
        </div>
      )}
    </li>
  );
};
