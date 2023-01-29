'use client';

import axios from 'axios';
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';

export default function NewPost() {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [excerpt, setExcerpt] = useState('');

  async function addPostHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newPost = {
      slug,
      title,
      image,
      excerpt,
    };

    try {
      await axios.post('/api/posts', newPost);
    } catch (error) {
      console.log('Fetching failed');
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
              <form onSubmit={addPostHandler} className="field">
                <label className="label">Name of Place</label>
                <div className="control">
                  <input
                    value={slug}
                    onChange={(e) => {
                      setSlug(e.target.value);
                    }}
                    className="input"
                    type="text"
                    placeholder="Text input"
                  />
                </div>
                <label className="label">Title</label>
                <div className="control">
                  <input
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="input"
                    type="text"
                    placeholder="Text input"
                  />
                </div>
                <label className="label">Image</label>
                <div className="control">
                  <input
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    className="input"
                    type="text"
                    placeholder="Text input"
                  />
                </div>
                <label className="label">Text</label>
                <div className="control">
                  <textarea
                    value={excerpt}
                    onChange={(e) => {
                      setExcerpt(e.target.value);
                    }}
                    className="textarea"
                    placeholder="Textarea"
                  />
                </div>
                <button type="submit" className="button">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
