import { useGetAdDetailsQuery } from '@/shared/api/endpoints';
import { useParams } from 'react-router-dom';

export const useAdvertisementDetails = () => {
  const { id } = useParams();
  const { data: adDetails, isFetching } = useGetAdDetailsQuery(id ?? '', {
    skip: !id,
  });

  return { adDetails, isFetching };
};
