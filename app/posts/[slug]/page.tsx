import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react';
import Comments from '../../../componetns/Comments/Comments';
import mongoDb from '../../../helpers/db-util';
import { Posts } from '../../../types/Posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await mongoDb.getPost(slug);
  const comments = await mongoDb.getComments(slug);
  const session = await getServerSession();
  let user;
  if (session) {
    user = await mongoDb.getUser(session?.user?.email);
  }

  const {
    image, title, excerpt, userEmail,
  } = post;

  return (
    <section className="hero">
      <div className="hero-head">
        <h1 className="title has-text-centered">{title}</h1>
        <figure className="has-text-centered">
          <Image src={image} alt="picture of post" width={500} height={500} />
        </figure>
      </div>
      <div className="hero-body">
        <Comments
          avatar={user?.avatar}
          postSlug={slug}
          comments={comments}
          excerpt={excerpt}
          userEmail={userEmail}
        />
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

export const revalidate = 10;
