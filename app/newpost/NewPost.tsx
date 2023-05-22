'use client';

import { getSession, useSession } from 'next-auth/react';
import { uuid as uuidv4 } from 'uuidv4';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import LoadingComp from '../../componetns/LoadingComp/LoadingComp';
import handleCancelImageClick from '../../helpers/handleCancelImageClick';
import handleFileChanged from '../../helpers/handleFileChange';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [excerpt, setExcerpt] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(-1);
  const { data: session } = useSession();
  const fileInputRef = useRef<any>();
  const [isPosted, setIsPosted] = useState(false);

  const switchOffMsg = () => {
    setTimeout(() => {
      setIsPosted(false);
    }, 3000);
  };

  const setFileInputRef = (value: any) => {
    fileInputRef.current.value = value;
  };

  async function addPostHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const generatedFileId = uuidv4();

    const newPost = {
      slug: generatedFileId,
      title,
      userEmail: session?.user?.email,
      image: imageUrl,
      excerpt,
    };

    try {
      axios.post('/api/posts', newPost);
      setIsPosted(true);
      switchOffMsg();
    } catch (error) {
      console.log('Fetching failed');
    }
  }

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    handleFileChanged(event, setUploadProgress, setImageUrl, setFileInputRef);
  }

  function handleCancel() {
    handleCancelImageClick(
      imageUrl,
      setFileInputRef,
      setImageUrl,
      setUploadProgress,
    );
  }

  useEffect(() => {
    getSession().then((sessionRes) => {
      if (!sessionRes) {
        window.location.href = '/auth';
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <LoadingComp />;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
              <form onSubmit={addPostHandler} className="field">
                <label htmlFor="name" className="label">
                  Title
                  <div className="control">
                    <input
                      id="name"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </label>

                <div className="file is-dark mb-2">
                  <label htmlFor="file" className="file-label">
                    <input
                      id="file"
                      className="file-input"
                      type="file"
                      name="resume"
                      accept="image/*"
                      onChange={handleFile}
                      ref={fileInputRef}
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fa-solid fa-upload" />
                      </span>
                      <span className="file-label">Upload File</span>
                    </span>
                  </label>
                </div>

                {uploadProgress > -1 && (
                  <progress
                    className="progress"
                    value={uploadProgress}
                    max="100"
                  >
                    {uploadProgress}
                    %
                  </progress>
                )}

                {imageUrl && (
                  <div className="notification">
                    <button
                      aria-label="delete"
                      className="delete"
                      type="button"
                      onClick={handleCancel}
                    />
                    <figure className="image">
                      <Image
                        src={imageUrl}
                        alt="img"
                        height={200}
                        width={200}
                      />
                    </figure>
                  </div>
                )}

                <label htmlFor="text" className="label">
                  Text
                  <div className="control">
                    <textarea
                      id="text"
                      value={excerpt}
                      onChange={(e) => {
                        setExcerpt(e.target.value);
                      }}
                      className="textarea"
                      placeholder="Textarea"
                    />
                  </div>
                </label>

                <button type="submit" className="button">
                  Create
                </button>
              </form>
              {isPosted && (
                <div className="notification is-success">New post created</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
