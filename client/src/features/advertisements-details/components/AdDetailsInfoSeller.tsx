import type { Seller } from '@/shared/api/types';
import { AdItemInfo } from '@/shared/ui';

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
        <AdItemInfo title="Имя">{name}</AdItemInfo>
        <AdItemInfo title="Рейтинг">{rating}</AdItemInfo>
        <AdItemInfo title="Количество объявлений">{totalAds}</AdItemInfo>
        <AdItemInfo title="Дата регистрации">
          {new Date(registeredAt ?? '').toLocaleDateString()}
        </AdItemInfo>
      </ul>
    </div>
  );
};
