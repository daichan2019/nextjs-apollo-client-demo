import { useQuery } from '@apollo/client';

import { getUsersDocument } from '@/graphql/queries/queries';

export const useFetchUsers = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data, error, loading } = useQuery(getUsersDocument);

  return {
    data,
    error,
    loading,
  };
};
