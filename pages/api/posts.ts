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
      slug, title, userEmail, image, excerpt,
    } = req.body;

    const newPost = {
      slug,
      title,
      userEmail,
      image,
      excerpt,
    };

    try {
      await mongoDb.createPost(newPost);
      res.status(201);
    } catch (error) {
      res.status(500);
    }
  }
}
