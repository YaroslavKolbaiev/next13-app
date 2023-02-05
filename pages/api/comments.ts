import type { NextApiRequest, NextApiResponse } from 'next';
import mongoDb from '../../helpers/db-util';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const {
      email, text, postSlug, avatar,
    } = req.body;

    const newComment = {
      email,
      text,
      postSlug,
      avatar,
    };

    try {
      await mongoDb.createComment(newComment);
      res.status(201);
    } catch (error) {
      res.status(500);
    }
  }
}
