import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='flex w-full flex-col py-8'>
      <main className='container mx-auto w-full flex-1'>{children}</main>
    </div>
  );
};
