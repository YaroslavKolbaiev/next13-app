import Link from 'next/link';
import React from 'react';

export default function MainNav() {
  return (
    <nav className="level has-background-black is-flex m-0 p-5">
      <div className="level-left">
        <div className="level-item">
          <Link className="has-text-primary title" href="/">
            LOGO
          </Link>
        </div>
      </div>
      <div className="level-right">
        <Link className="has-text-grey-light level-item" href="/newpost">
          Create New Post
        </Link>
        <Link className="has-text-grey-light level-item" href="/posts">
          Posts
        </Link>
        <Link className="has-text-grey-light level-item" href="/contacts">
          Contacts
        </Link>
      </div>
    </nav>
  );
}
