import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';

import { graphql } from '@/graphql/gql';

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query GetUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`);

const Home: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data, error, loading } = useQuery(allFilmsWithVariablesQueryDocument);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error {error.message}</div>;
  }

  if (data) {
    <ul>
      {data.users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>;
  }
};

export default Home;
