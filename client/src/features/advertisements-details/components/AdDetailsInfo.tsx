import { AdTag } from '@/features/advertisements/ui';
import type { Advertisement } from '@/shared/api/types';
import type { FC } from 'react';
import { AdDetailsInfoSkeleton } from '../ui';

interface AdDetailsInfoProps extends Partial<Advertisement> {
  isFetching: boolean;
}

export const AdDetailsInfo: FC<AdDetailsInfoProps> = ({
  description,
  title,
  price,
  category,
  createdAt,
  characteristics,
  status,
  priority,
  seller,
  isFetching,
}) => {
  if (isFetching) return <AdDetailsInfoSkeleton />;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h4 className="font-medium text-xl">Описание</h4>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-1">
            Название: <span className="font-medium">{title}</span>
          </div>
          <div className="flex items-center gap-1">
            Цена: <span className="font-medium">{price} ₽</span>
          </div>
          <div className="flex items-center gap-1">
            Категория: <span className="font-medium">{category}</span>
          </div>
          <div className="flex items-center gap-1">
            Дата создания:
            <span className="font-medium">
              {new Date(createdAt ?? '').toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            Статус:
            <span className="font-medium">
              <AdTag type="status" value={status} />
            </span>
          </div>
          <div className="flex items-center gap-1">
            Приоритет:
            <span className="font-medium">
              <AdTag type="priority" value={priority} />
            </span>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            Подробное описание:
            <span className="font-medium">{description}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-medium text-xl">Характеристики</h4>
        <table>
          <tbody>
            {Object.entries(characteristics ?? {}).map(([key, value]) => (
              <tr key={key} className="border-b [&>td]:w-1/2 [&>td]:p-2">
                <td>{key}</td>
                <td className="font-medium">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-medium text-xl">Информация о продавце</h4>
        <ul className="flex flex-col gap-1">
          <li className="flex gap-1">
            Имя: <span className="font-medium">{seller?.name}</span>
          </li>
          <li className="flex gap-1">
            Рейтинг:
            <span className="font-medium">{seller?.rating}</span>
          </li>
          <li className="flex gap-1">
            Количество объявлений:
            <span className="font-medium">{seller?.totalAds}</span>
          </li>
          <li className="flex gap-1">
            Дата регистрации:
            <span className="font-medium">
              {new Date(seller?.registeredAt ?? '').toLocaleDateString()}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
