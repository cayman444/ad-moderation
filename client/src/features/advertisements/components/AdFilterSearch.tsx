import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { type FC, memo, useState } from 'react';
import type { AdChangeFilterParams } from '../model';

interface AdFilterSearchProps {
  search?: string;
  handleChangeFilter: (filterParams: AdChangeFilterParams) => void;
}

const AdFilterSearchComponent: FC<AdFilterSearchProps> = ({
  search,
  handleChangeFilter,
}) => {
  const [localSearch, setLocalSearch] = useState(search);

  const handleChangeSearch = (value: string) => {
    setLocalSearch(value);
    handleChangeFilter({ filter: 'search', value });
  };

  return (
    <Input
      name="ad-search-filter"
      suffix={<SearchOutlined />}
      allowClear
      placeholder="Поиск..."
      value={localSearch}
      className="min-w-42!"
      onChange={(e) => handleChangeSearch(e.target.value)}
    />
  );
};

export const AdFilterSearch = memo(AdFilterSearchComponent);
