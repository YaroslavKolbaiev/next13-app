'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import MainNav from '../componetns/MainNav/MainNav';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="has-background-grey-lighter">
      <head />
      <body>
        <SessionProvider>
          <MainNav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
