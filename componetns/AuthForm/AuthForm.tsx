'use client';

import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { createUser } from '../../helpers/createUser';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setError] = useState('');
  const router = useRouter();
  const { status } = useSession();
  const logged = status === 'authenticated';

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password: pass,
      });

      if (!result?.error) {
        router.replace('/');
      }

      console.log(result);
    } else {
      try {
        const result = await createUser(email, pass);
        console.log(result);
      } catch (error: any) {
        if (error.message === 'User already exists') {
          setError('userExists');
        }
        console.log(error.message);
      }
    }
  }

  return (
    <section className="section">
      <div className="container is-flex is-justify-content-center">
        {logged ? <p>You Are already Logged In</p> : (
          <form
            onSubmit={submitHandler}
            style={{ maxWidth: '400px' }}
            className="is-flex-grow-1"
          >
            <h1 className="title has-text-centered">
              {isLogin ? 'LOGIN' : 'Sign Up'}
            </h1>
            <div className="field">
              <label className="label" htmlFor="email">
                E-Mail
                <div className="control">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    id="email"
                    className="input"
                    type="text"
                    placeholder="enter your email"
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Name
                <div className="control">
                  <input
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                    required
                    id="password"
                    className="input"
                    type="password"
                    placeholder="enter your password"
                  />
                </div>
              </label>
            </div>
            <div className="buttons is-centered m-0">
              <button className="button" type="submit">
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            </div>
            <div className="buttons is-centered">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
                type="button"
                style={{
                  backgroundColor: 'transparent',
                  border: '0',
                  cursor: 'pointer',
                }}
              >
                Create New Account
              </button>
            </div>
            {errorMsg === 'userExists' && (
            <div className="notification">
              <button
                onClick={() => {
                  setError('');
                }}
                type="button"
                className="delete"
                aria-label="notification"
              />
              User Already Exists
            </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
