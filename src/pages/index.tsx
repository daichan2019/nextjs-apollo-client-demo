import type { NextPage } from 'next';
import { InviteForm } from 'src/features/user/components/invite-form';
import { UserList } from 'src/features/user/components/user-list';
import { useFetchUsers } from 'src/features/user/hooks/use-fetch-users';

import { Layout } from '@/components/layout';

const Home: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data, error, loading } = useFetchUsers();

  if (loading) {
    return (
      <Layout>
        <p>loading...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p>error {error.message}</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <InviteForm />
      <UserList users={data?.users ?? []} />
    </Layout>
  );
};

export default Home;
