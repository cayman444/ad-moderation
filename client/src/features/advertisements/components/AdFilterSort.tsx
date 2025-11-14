import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import { memo } from 'react';
import type { AdChangeFilterParams, AdFilterSortType, SortBy } from '../model';

interface AdFilterSortProps extends AdFilterSortType {
  options: { value: SortBy; label: string }[];
  handleChangeFilter: (filterParams: AdChangeFilterParams) => void;
}

const AdFilterSortComponent = ({
  sortBy,
  sortOrder,
  options,
  handleChangeFilter,
}: AdFilterSortProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Select
        value={sortBy}
        placeholder="Сортировка"
        allowClear
        onChange={(value) =>
          handleChangeFilter({ filter: 'sort', value, typeSort: 'sortBy' })
        }
        options={options}
        className="min-w-42!"
      />
      <Button
        icon={sortOrder === 'asc' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        onClick={() =>
          handleChangeFilter({
            filter: 'sort',
            value: sortOrder === 'asc' ? 'desc' : 'asc',
            typeSort: 'sortOrder',
          })
        }
      />
    </div>
  );
};

export const AdFilterSort = memo(AdFilterSortComponent);
