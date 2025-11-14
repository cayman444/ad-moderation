import { AdTag } from '@/features/ad-tag';
import type { Advertisement } from '@/shared/api/types';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { type FC } from 'react';

export const AdItem: FC<Advertisement> = ({
  title,
  price,
  category,
  createdAt,
  images,
  description,
  status,
  priority,
}) => {
  const creationDate = new Date(createdAt).toLocaleDateString();

  return (
    <li className="border p-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="relative h-20 w-20">
          <img
            src={images[0]}
            alt={description}
            className="absolute inset-0 w-full h-full object-cover border rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <h4 className="text-lg line-clamp-2">{title}</h4>
          <div className="flex items-center gap-1">
            Цена: <span className="font-medium">{price} ₽</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              Категория: <span className="font-medium">{category}</span>
            </div>
            <span className="w-1 h-1 bg-neutral-800 rounded-full" />
            <div className="flex items-center gap-1">
              <CalendarOutlined />
              <span className="font-medium">{creationDate}</span>
            </div>
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
        </div>
        <Button
          icon={<ArrowRightOutlined />}
          iconPosition="end"
          className="self-end"
        >
          Открыть
        </Button>
      </div>
    </li>
  );
};
