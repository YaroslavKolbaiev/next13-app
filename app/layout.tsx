import React from 'react';
import 'bulma/css/bulma.css';
import MainNav from '../componetns/MainNav/MainNav';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="has-background-grey-lighter">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
