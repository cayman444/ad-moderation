import type { Advertisement } from '@/shared/api/types';
import { AdItemInfo } from '@/shared/ui';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { AdTag } from '../ui';

export const AdItem: FC<Advertisement> = ({
  title,
  price,
  category,
  createdAt,
  images,
  description,
  status,
  priority,
  id,
}) => {
  const creationDate = new Date(createdAt).toLocaleDateString();

  return (
    <li>
      <Link to={`/item/${id}`} className="block p-4 border">
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
            <AdItemInfo title="Цена">{price} ₽</AdItemInfo>
            <AdItemInfo title="Категория">
              <div className="flex items-center gap-2">
                <span className="font-medium">{category}</span>
                <span className="w-1 h-1 bg-neutral-800 rounded-full" />
                <div className="flex items-center gap-1">
                  <CalendarOutlined />
                  <span className="font-medium">{creationDate}</span>
                </div>
              </div>
            </AdItemInfo>
            <AdItemInfo title="Статус">
              <AdTag type="status" value={status} />
            </AdItemInfo>
            <AdItemInfo title="Приоритет">
              <AdTag type="priority" value={priority} />
            </AdItemInfo>
          </div>
          <Button
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            className="self-end"
          >
            Открыть
          </Button>
        </div>
      </Link>
    </li>
  );
};
