import { AdTag } from '@/features/advertisements/ui';
import type { Advertisement } from '@/shared/api/types';
import { AdItemInfo } from '@/shared/ui';
import type { FC } from 'react';

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
        <AdItemInfo title="Название">{title}</AdItemInfo>
        <AdItemInfo title="Цена">{price} ₽</AdItemInfo>
        <AdItemInfo title="Категория">{category}</AdItemInfo>
        <AdItemInfo title="Дата создания">
          {createdDate.toLocaleDateString()},{' '}
          {createdDate.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </AdItemInfo>
        <AdItemInfo title="Дата обновления">
          {updatedDate.toLocaleDateString()},{' '}
          {updatedDate.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </AdItemInfo>
        <AdItemInfo title="Статус">
          <AdTag type="status" value={status} />
        </AdItemInfo>
        <AdItemInfo title="Приоритет">
          <AdTag type="priority" value={priority} />
        </AdItemInfo>
        <AdItemInfo title="Подробное описание">{description}</AdItemInfo>
      </ul>
    </div>
  );
};
