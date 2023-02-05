import type { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../helpers/auth';
import { connectDatabase } from '../../helpers/db-util';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    return;
  }
  const data = req.body;

  const { email, password } = data;

  if (
    !email
    || !email.includes('@')
    || !password
    || password.trim().length < 7
  ) {
    res.status(422).json({ message: 'Invalid input' });
    return;
  }

  const db = await connectDatabase();

  const existingUser = await db.collection('users').findOne({ email });

  if (existingUser) {
    res.status(422).json({ message: 'User already exists' });
    return;
  }

  const hashedPassword = await hashPassword(password);

  await db.collection('users').insertOne({
    email,
    password: hashedPassword,
    avatar: '',
  });

  res.status(201).json({ message: 'User created OK!' });
}
