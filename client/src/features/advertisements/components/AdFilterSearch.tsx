import { useDebounce } from '@/shared/hooks';
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
  const debouncedSearch = useDebounce(localSearch);

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  useEffect(() => {
    handleChangeFilter({ filter: 'search', value: debouncedSearch });
  }, [debouncedSearch, handleChangeFilter]);

  return (
    <Input
      name="ad-search-filter"
      suffix={<SearchOutlined />}
      allowClear
      placeholder="Поиск..."
      value={localSearch}
      className="min-w-42!"
      onChange={(e) => setLocalSearch(e.target.value)}
    />
  );
};

export const AdFilterSearch = memo(AdFilterSearchComponent);
