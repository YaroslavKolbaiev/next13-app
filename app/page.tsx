import React from 'react';
import Hero from '../componetns/Hero/Hero';
import mongoDb from '../helpers/db-util';
import FeaturedPostsLayout from '../componetns/FeaturedPostsLayout/FeaturedPostsLayout';

export default async function Home() {
  const posts = await mongoDb.getFeaturedPosts();

  return (
    <>
      <Hero />
      <FeaturedPostsLayout posts={posts} adventureTitle="Featured Posts" />
    </>
  );
}
