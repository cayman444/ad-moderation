import { Select } from 'antd';

interface AdFilterSelectProps<T> {
  onChange?: (value?: T) => void;
  value?: T;
  placeholder: string;
  multiple?: boolean;
  isFetching?: boolean;
  options?: { label: string; value: string | number }[];
}

export const AdFilterSelect = <T,>({
  options,
  placeholder,
  value,
  isFetching,
  multiple = false,
  onChange,
}: AdFilterSelectProps<T>) => {
  return (
    <div className="flex-1 flex">
      <Select
        mode={multiple ? 'multiple' : undefined}
        onChange={onChange}
        loading={isFetching}
        placeholder={placeholder}
        value={value}
        allowClear
        showSearch={false}
        style={{ width: '100%' }}
        options={options}
      />
    </div>
  );
};
