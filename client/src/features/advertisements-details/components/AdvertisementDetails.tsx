import { AdTag } from '@/features/advertisements/ui';
import { useGetAdDetailsQuery } from '@/shared/api/endpoints';
import { Carousel } from 'antd';
import { useParams } from 'react-router-dom';

export const AdvertisementDetails = () => {
  const { id } = useParams();
  const { data: adDetails } = useGetAdDetailsQuery(id ?? '', { skip: !id });

  return (
    <div className="flex flex-col gap-4 p-4 border">
      <div className="grid grid-cols-2 gap-4 overflow-hidden">
        <Carousel arrows dots={false} className="rounded-lg! overflow-hidden!">
          {adDetails?.images.map((image) => (
            <img
              key={image}
              src={image}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          ))}
        </Carousel>
        <div className="flex flex-col self-start gap-4 border rounded-lg p-4">
          <h4 className="text-xl font-medium">История модерации</h4>
          <ul className="flex flex-col gap-4 h-50 overflow-y-auto">
            {!adDetails?.moderationHistory.length && (
              <div className="flex-1 flex items-center justify-center text-lg font-medium">
                Нет истории
              </div>
            )}
            {adDetails?.moderationHistory.map(
              ({ id, moderatorName, timestamp, action, reason, comment }) => (
                <li
                  key={id}
                  className="flex flex-col gap-2 border-b pb-4 mr-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex gap-x-1 flex-wrap">
                    Модератор:
                    <span className="font-medium">{moderatorName}</span>
                  </div>
                  <div className="flex gap-x-1 flex-wrap">
                    Дата:
                    <div className="flex gap-1 font-medium">
                      <span>
                        {new Date(timestamp).toLocaleDateString('ru-RU')},
                      </span>
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
              )
            )}
          </ul>
        </div>
      </div>
      <div>Полное описание</div>
    </div>
  );
};
