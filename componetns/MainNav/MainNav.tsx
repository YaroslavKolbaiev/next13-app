'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function MainNav() {
  const { data: session, status } = useSession();
  const logged = status === 'authenticated';
  const segment = useSelectedLayoutSegment();
  const isActiveAccount = segment === 'account';

  return (
    <nav className="level has-background-black is-flex m-0 p-5">
      <div className="level-left">
        <Link
          className="has-text-primary level-item is-size-3 has-text-weight-semibold"
          href="/"
        >
          <Image
            style={{ borderRadius: '50%', backgroundColor: 'red' }}
            src="/images/logo.jpg"
            alt="picture displaying logo"
            width={50}
            height={50}
          />
        </Link>
        {logged && (
          <Link className="has-text-grey-light level-item" href="/account">
            <p style={{ fontWeight: isActiveAccount ? 'bold' : 'normal' }}>{session?.user?.email}</p>
          </Link>
        )}
      </div>
      <div className="level-right">
        {!logged && (
          <Link className="has-text-grey-light level-item" href="/auth">
            Login
          </Link>
        )}
        {logged && (
          <button
            onClick={() => signOut()}
            type="button"
            className="button is-small level-item is-dark has-text-grey-light"
          >
            Logout
          </button>
        )}
        <Link className="has-text-grey-light level-item" href="/posts">
          Posts
        </Link>
        <Link className="has-text-grey-light level-item" href="/contacts">
          Contacts
        </Link>
        {logged && (
          <Link className="has-text-grey-light level-item" href="/newpost">
            <span className="icon">
              <i className="fa-solid fa-square-plus" />
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
