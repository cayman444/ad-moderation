import { AdTag } from '@/features/advertisements/ui';
import type { Advertisement } from '@/shared/api/types';
import type { FC } from 'react';
import { AdDetailsItemInfo } from './AdDetailsItemInfo';

export const AdDetailsDescription: FC<Partial<Advertisement>> = ({
  title,
  price,
  category,
  createdAt,
  updatedAt,
  status,
  priority,
  description,
}) => {
  const createdDate = new Date(createdAt ?? '');
  const updatedDate = new Date(updatedAt ?? '');

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium text-xl">Описание</h4>
      <ul className="flex-1 flex flex-col gap-2">
        <AdDetailsItemInfo title="Название">{title}</AdDetailsItemInfo>
        <AdDetailsItemInfo title="Цена">{price} ₽</AdDetailsItemInfo>
        <AdDetailsItemInfo title="Категория">{category}</AdDetailsItemInfo>
        <AdDetailsItemInfo title="Дата создания">
          {createdDate.toLocaleDateString()},{' '}
          {createdDate.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </AdDetailsItemInfo>
        <AdDetailsItemInfo title="Дата обновления">
          {updatedDate.toLocaleDateString()},{' '}
          {updatedDate.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </AdDetailsItemInfo>
        <AdDetailsItemInfo title="Статус">
          <AdTag type="status" value={status} />
        </AdDetailsItemInfo>
        <AdDetailsItemInfo title="Приоритет">
          <AdTag type="priority" value={priority} />
        </AdDetailsItemInfo>
        <AdDetailsItemInfo title="Подробное описание">
          {description}
        </AdDetailsItemInfo>
      </ul>
    </div>
  );
};
