import { graphql } from '@/graphql/generated';

export const getUsersDocument = graphql(/* GraphQL */ `
  query GetUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`);
