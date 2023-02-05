'use client';

import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { PostComments } from '../../types/PostComments';
import { createComment } from '../../helpers/commentHelpers';
import classes from './Comments.module.css';

type Props = {
  excerpt: string;
  comments: PostComments[];
  postSlug: string;
  userEmail: string;
  avatar: string;
};

export default function Comments({
  excerpt,
  comments,
  postSlug,
  userEmail,
  avatar,
}: Props) {
  const { data: session } = useSession();
  const [commentText, setCommentText] = useState('');

  async function addComment() {
    try {
      await createComment({
        email: session?.user?.email,
        text: commentText,
        postSlug,
        avatar,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{userEmail}</strong>
              <br />
              {excerpt}
            </p>
          </div>
          <hr />
          {comments.map((comment) => (
            <article key={comment.postSlug} className="media">
              <figure className="media-left">
                <Image
                  className={classes.logoImage}
                  src={!comment.avatar ? '/images/noAvatar.png' : comment.avatar}
                  alt="An image showing person"
                  width={64}
                  height={64}
                />
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{comment.email}</strong>
                    <br />
                    {comment.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </article>
      <article className="media">
        <div className="media-content">
          <div style={{ maxWidth: '400px' }} className="field">
            <p className="control">
              <textarea
                onChange={(e) => {
                  setCommentText(e.target.value);
                }}
                value={commentText}
                className="textarea"
                placeholder="Add a comment..."
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button onClick={addComment} type="button" className="button">
                Post comment
              </button>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
