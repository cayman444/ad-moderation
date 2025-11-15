import type { Seller } from '@/shared/api/types';
import type { FC } from 'react';
import { AdDetailsInfoSkeleton } from '../ui';

interface AdDetailsInfoProps {
  title?: string;
  description?: string;
  characteristics?: Record<string, string>;
  seller?: Seller;
  isFetching: boolean;
}

export const AdDetailsInfo: FC<AdDetailsInfoProps> = ({
  description,
  title,
  characteristics,
  seller,
  isFetching,
}) => {
  if (isFetching) return <AdDetailsInfoSkeleton />;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-xl">{title}</h1>
        <div>{description}</div>
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
