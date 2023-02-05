import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { hashPassword, verifyPassword } from '../../../helpers/auth';
import { connectDatabase } from '../../../helpers/db-util';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'PATCH') {
    return;
  }

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'current session is unavailable' });
  }

  const userEmail = session?.user?.email;
  const { oldPassword } = req.body;
  const { newPassword } = req.body;

  const db = await connectDatabase();

  const userCollection = db.collection('users');

  const user = await userCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'no user found' });
  }

  const currentPassword = user?.password;

  const passwordAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordAreEqual) {
    res.status(403).json({ message: 'invalid password' });
  }

  const hashedPassword = await hashPassword(newPassword);

  await userCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } },
  );

  res.status(200).json({ message: 'Password updated!' });
}
