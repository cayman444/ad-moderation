import { AdItem } from './AdItem';

export const AdList = () => {
  const list = Array.from({ length: 10 });

  return (
    <ul className="flex flex-col gap-4">
      {list.map((_, ind) => (
        <AdItem key={ind} />
      ))}
    </ul>
  );
};
