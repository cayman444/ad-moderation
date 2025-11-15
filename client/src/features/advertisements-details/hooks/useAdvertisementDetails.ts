import { useGetAdDetailsQuery } from '@/shared/api/endpoints';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useAdvertisementDetails = () => {
  const { id } = useParams();
  const {
    data: adDetails,
    isFetching,
    isError,
    error,
  } = useGetAdDetailsQuery(id ?? '', {
    skip: !id,
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return { adDetails, isFetching, isError, error };
};
