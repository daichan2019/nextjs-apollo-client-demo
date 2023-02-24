import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return <div className='flex w-full flex-col'>{children}</div>;
};
