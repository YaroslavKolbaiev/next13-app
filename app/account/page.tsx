import { getServerSession } from 'next-auth';
import React from 'react';
import Account from '../../componetns/Account/Account';
import mongoDb from '../../helpers/db-util';

export default async function AccountPage() {
  const session = await getServerSession();
  const user = await mongoDb.getUser(session?.user?.email);
  const { avatar } = user;
  return <Account avatar={avatar} />;
}
