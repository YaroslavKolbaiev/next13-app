'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Posts } from '../../types/Posts';

type Props = {
  posts: Posts[];
  adventureTitle: string;
};

export default function FeaturedPostsLayout({ posts, adventureTitle }: Props) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">{adventureTitle}</h1>
        <div className="columns is-multiline">
          {posts.map(({
            _id, slug, title, image,
          }) => (
            <div key={_id} className="column is-one-third">
              <div className="box p-0">
                <figure className="image is-square">
                  <Image src={`/posts/${image}`} alt="picture of post" fill />
                </figure>
                <div className="p-3 has-background-dark">
                  <p className="title is-4 has-text-light has-text-centered">
                    {title}
                  </p>
                  <Link
                    href={`/posts/${slug}`}
                    className="button is-fullwidth is-primary"
                  >
                    Explore Post
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
