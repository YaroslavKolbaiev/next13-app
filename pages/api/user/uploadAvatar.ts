import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { connectDatabase } from '../../../helpers/db-util';

type Data = {
  message: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'current session is unavailable' });
  }

  const userEmail = session?.user?.email;

  const { avatar } = req.body;

  const db = await connectDatabase();
  const userCollection = db.collection('users');
  const user = await userCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'no user found' });
  }

  if (req.method === 'GET') {
    res.status(200).json({ message: user });
  }

  if (req.method === 'POST') {
    await userCollection.updateOne(
      { email: userEmail },
      { $set: { avatar } },
    );
    res.status(200).json({ message: 'Avatar changed' });
  }
}
