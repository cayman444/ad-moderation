import { Select } from 'antd';

interface AdFilterSelectProps<T> {
  onChange?: (value?: T) => void;
  placeholder: string;
  multiple?: boolean;
  options?: { label: string; value: string | number }[];
}

export const AdFilterSelect = <T,>({
  options,
  placeholder,
  multiple = false,
  onChange,
}: AdFilterSelectProps<T>) => {
  return (
    <Select
      mode={multiple ? 'multiple' : undefined}
      onChange={onChange}
      placeholder={placeholder}
      allowClear
      showSearch={false}
      style={{ width: '100%' }}
      options={options}
    />
  );
};
