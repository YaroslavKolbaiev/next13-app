'use client';

/* eslint-disable arrow-body-style */

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import { Posts } from '../../types/Posts';
import Pagination from '../Pagination/Pagination';

type Props = {
  posts: Posts[];
  adventureTitle: string;
};

export default function PostsLayout({ posts, adventureTitle }: Props) {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || '1';

  const totaItems = useMemo(() => posts.length, [posts]);

  const indexOfLastItem = +currentPage * 2;
  const indexOfFirstItem = indexOfLastItem - 2;
  const paginationIsDisabled = posts.length <= 2;

  const visiblePosts = useMemo((): Posts[] => {
    return posts.slice(indexOfFirstItem, indexOfLastItem);
  }, [posts, indexOfFirstItem, indexOfLastItem]);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">{adventureTitle}</h1>
        <div className="columns is-multiline">
          {visiblePosts.map(({
            _id, slug, title, image, excerpt,
          }) => (
            <div key={_id} className="column is-one-third">
              <div className="box p-0">
                <figure className="image is-square">
                  <Image src={`/posts/${image}`} alt="picture of post" fill />
                </figure>
                <div className="p-3 has-background-dark">
                  <Link
                    href={`/posts/${slug}`}
                    className="title is-4 has-text-light"
                  >
                    <p className="has-text-centered">{title}</p>
                  </Link>
                  <p className="has-text-centered has-text-grey-light">
                    {excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!paginationIsDisabled && <Pagination totalItems={totaItems} />}
      </div>
    </section>
  );
}
