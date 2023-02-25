import { useMutation } from '@apollo/client';

import { createUserDocument } from '@/graphql/queries/queries';

export const useCreateUser = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [createUser] = useMutation(createUserDocument);

  return [createUser];
};
