import { PostComments } from '../types/PostComments';

export const createComment = async (commentsData: PostComments) => {
  const res = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify(commentsData),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};
