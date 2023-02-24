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

export const createUserDocument = graphql(/* GraphQL */ `
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      created_at
    }
  }
`);

export const updateUserDocument = graphql(/* GraphQL */ `
  mutation UpdateUser($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      created_at
    }
  }
`);

export const deleteUserDocument = graphql(/* GraphQL */ `
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`);
