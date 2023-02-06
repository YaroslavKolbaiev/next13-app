import React from 'react';
import PostsLayout from '../../componetns/PostsLayout/PostsLayout';
import mongoDb from '../../helpers/db-util';

async function getPosts() {
  const res = await mongoDb.getAllPosts();
  return res;
}

export default async function AllPostsPage() {
  const allPosts = await getPosts();

  return (
    <PostsLayout posts={allPosts} />
  );
}
