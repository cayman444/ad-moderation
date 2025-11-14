import { Select } from 'antd';
import type { FC } from 'react';

interface AdFilterSelectProps {
  onChange: () => void;
  placeholder: string;
  multiple?: boolean;
  options?: { label: string; value: string | number }[];
}

export const AdFilterSelect: FC<AdFilterSelectProps> = ({
  options,
  placeholder,
  multiple = false,
  onChange,
}) => {
  return (
    <Select
      mode={multiple ? 'multiple' : undefined}
      onChange={onChange}
      placeholder={placeholder}
      allowClear
      style={{ width: '100%' }}
      options={options}
    />
  );
};
