import { useMutation } from '@apollo/client';

import { createUserDocument, getUsersDocument } from '@/graphql/queries/queries';

export const useCreateUser = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [createUser] = useMutation(createUserDocument, {
    update(cache, { data }) {
      const newUserFromResponse = data?.insert_users_one;
      const existingUsers = cache.readQuery({ query: getUsersDocument });

      if (existingUsers && newUserFromResponse) {
        cache.writeQuery({
          query: getUsersDocument,
          data: {
            users: [...existingUsers.users, newUserFromResponse],
          },
        });
      }
    },
  });

  return [createUser];
};
