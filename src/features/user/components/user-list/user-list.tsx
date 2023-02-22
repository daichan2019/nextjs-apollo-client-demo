import type { FC } from 'react';

import type { GetUsersQuery } from '@/graphql/generated/graphql';

type Props = {
  users: GetUsersQuery['users'];
};

export const UserList: FC<Props> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};
