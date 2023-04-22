import { useMutation } from '@apollo/client';

import { createUserDocument, getUsersDocument } from '@/graphql/queries/queries';

export const useCreateUser = () => {
  // const [createUser] = useMutation(createUserDocument, {
  //   update(cache, { data }) {
  //     const newUserFromResponse = data?.insert_users_one;
  //     const existingUsers = cache.readQuery({ query: getUsersDocument });

  //     if (existingUsers && newUserFromResponse) {
  //       cache.writeQuery({
  //         query: getUsersDocument,
  //         data: {
  //           users: [newUserFromResponse, ...existingUsers.users],
  //         },
  //       });
  //     }
  //   },
  // });

  const [createUser] = useMutation(createUserDocument, {
    refetchQueries: [{ query: getUsersDocument }, 'GetUsers'],
  });

  return [createUser];
};
