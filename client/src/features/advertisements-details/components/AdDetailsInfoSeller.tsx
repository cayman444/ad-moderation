import type { Seller } from '@/shared/api/types';
import { AdDetailsItemInfo } from './AdDetailsItemInfo';

export const AdDetailsInfoSeller = ({
  name,
  rating,
  totalAds,
  registeredAt,
}: Partial<Seller>) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium text-xl">Информация о продавце</h4>
      <ul className="flex flex-col gap-1">
        <AdDetailsItemInfo title="Имя">{name}</AdDetailsItemInfo>
        <AdDetailsItemInfo title="Рейтинг">{rating}</AdDetailsItemInfo>
        <AdDetailsItemInfo title="Количество объявлений">
          {totalAds}
        </AdDetailsItemInfo>
        <AdDetailsItemInfo title="Дата регистрации">
          {new Date(registeredAt ?? '').toLocaleDateString()}
        </AdDetailsItemInfo>
      </ul>
    </div>
  );
};
