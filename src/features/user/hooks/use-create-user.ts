import { useMutation } from '@apollo/client';

import { createUserDocument } from '@/graphql/queries/queries';

export const useCreateUser = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [createUser, { data, error, loading }] = useMutation(createUserDocument);

  return [createUser, { data, error, loading }];
};
