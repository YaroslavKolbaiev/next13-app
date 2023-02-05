'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import { Posts } from '../../types/Posts';
import Pagination from '../Pagination/Pagination';

type Props = {
  posts: Posts[];
};

export default function PostsLayout({ posts }: Props) {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || '1';

  const totaItems = useMemo(() => posts.length, [posts]);

  const indexOfLastItem = +currentPage * 2;
  const indexOfFirstItem = indexOfLastItem - 2;
  const paginationIsDisabled = posts.length <= 2;

  const visiblePosts = useMemo(
    (): Posts[] => posts.slice(indexOfFirstItem, indexOfLastItem),
    [posts, indexOfFirstItem, indexOfLastItem],
  );
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">All posts</h1>
        <div className="columns is-multiline">
          {visiblePosts.map(({
            _id, slug, title, image,
          }) => (
            <div key={_id} className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <Image
                      style={{
                        height: '260px',
                        objectFit: 'cover',
                      }}
                      src={image}
                      alt="picture of post"
                      width={300}
                      height={300}
                    />
                  </figure>
                </div>
                <div className="card-content p-0">
                  <div className="p-3 has-background-dark">
                    <Link
                      href={`/posts/${slug}`}
                      className="title is-4 has-text-light"
                    >
                      <p className="has-text-centered">{title}</p>
                    </Link>
                  </div>
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
