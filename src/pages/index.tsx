import type { NextPage } from 'next';
import { UserList } from 'src/features/user/components/user-list';
import { useFetchUsers } from 'src/features/user/hooks/use-fetch-users';

const Home: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data, error, loading } = useFetchUsers();

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error {error.message}</div>;
  }
  if (data) {
    return <UserList users={data?.users} />;
  }
};

export default Home;
