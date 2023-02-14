import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';

const GET_REPOSITORY = gql`
  query {
    viewer {
      repositories(
        first: 3
        privacy: PUBLIC
        isFork: false
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          name
          url
          description
        }
      }
    }
  }
`;

type Repository = {
  name: string;
  url: string;
  description: string;
};

const Home: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data, error, loading } = useQuery(GET_REPOSITORY);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div>
      {data.viewer.repositories.nodes.map((repository: Repository) => {
        return (
          <div key={repository.name}>
            <b>Repository: {repository.name}</b>
            <p>URL: {repository.url}</p>
            <p>Description: {repository.description || '-'}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
