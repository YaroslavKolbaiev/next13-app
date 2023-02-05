import React from 'react';
import PostsLayout from '../../componetns/PostsLayout/PostsLayout';
import mongoDb from '../../helpers/db-util';

export default async function AllPostsPage() {
  const allPosts = await mongoDb.getAllPosts();

  return (
    <PostsLayout posts={allPosts} />
  );
}
