import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { type FC, memo, useEffect, useState } from 'react';
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

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  return (
    <Input
      name="ad-search-filter"
      suffix={<SearchOutlined />}
      allowClear
      placeholder="Поиск..."
      value={localSearch}
      className="min-w-52!"
      onChange={(e) => handleChangeSearch(e.target.value)}
    />
  );
};

export const AdFilterSearch = memo(AdFilterSearchComponent);
