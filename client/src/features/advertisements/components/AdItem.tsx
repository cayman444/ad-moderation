import { ArrowRightOutlined, TagOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const AdItem = () => {
  return (
    <li className="border p-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="relative h-20 w-20 border rounded-lg">
          <img
            src="./vite.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1 ">
          <h4 className="text-lg line-clamp-2">Название товара</h4>
          <div className="flex items-center gap-1">
            <TagOutlined /> 15 000 ₽
          </div>
          <div className="flex items-center justify-between gap-2 max-w-34">
            <div>Категория</div>
            <span className="w-1 h-1 bg-neutral-800 rounded-full" />
            <div>Дата</div>
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
