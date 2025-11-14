import { PAGE_SIZE } from '@/shared/constants';
import { Pagination } from 'antd';
import type { FC } from 'react';

interface AdPaginationProps {
  currentPage?: number;
  totalItems?: number;
  onChangePage: (page: number, pageSize: number) => void;
}

export const AdPagination: FC<AdPaginationProps> = ({
  currentPage,
  totalItems,
  onChangePage,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <Pagination
        hideOnSinglePage
        align="center"
        showSizeChanger={false}
        current={currentPage}
        onChange={onChangePage}
        total={totalItems}
        pageSize={PAGE_SIZE}
        showTitle={false}
      />
      <div className="text-center font-medium">
        Всего: {totalItems} объявлений
      </div>
    </div>
  );
};
