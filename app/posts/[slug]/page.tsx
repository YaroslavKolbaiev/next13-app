import Image from 'next/image';
import React from 'react';
import mongoDb from '../../../helpers/db-util';
import { Posts } from '../../../types/Posts';

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await mongoDb.getPost(slug);

  const { title, image, excerpt } = post[0];

  return (
    <section className="hero">
      <div className="hero-head">
        <h1 className="title has-text-centered">{title}</h1>
        <figure className="has-text-centered">
          <Image src={`/posts/${image}`} alt={title} width={400} height={350} />
        </figure>
      </div>
      <div className="hero-body">
        <div className="">
          <p className="title is-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await mongoDb.getAllPosts();

  return posts.map((postPath: Posts) => ({
    slug: postPath.slug,
  }));
}
