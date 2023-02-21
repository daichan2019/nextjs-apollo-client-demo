import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { HASURA_GRAPHQL_API_ENDPOINT } from '@/config/index';

const link = new HttpLink({
  uri: HASURA_GRAPHQL_API_ENDPOINT,
});

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
