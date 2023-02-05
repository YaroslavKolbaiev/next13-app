'use client';

import axios from 'axios';
import classNames from 'classnames';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import handleCancelImageClick from '../../helpers/handleCancelImageClick';
import handleFileChanged from '../../helpers/handleFileChange';
import { onChangePassword } from '../../helpers/passwordChange';
import LoadingComp from '../LoadingComp/LoadingComp';
import classes from './Account.module.css';

type Props = {
  avatar: string;
};

export default function Account({ avatar }: Props) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [oldPasswordRef, setOldPasswordRef] = useState('');
  const [newPasswordRef, setNewPasswordRef] = useState('');
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [isPasswordForm, setIsPasswordForm] = useState(false);
  const [isAvatarImageForm, setIsAvatarImageForm] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(-1);
  const [imageUrl, setImageUrl] = useState<string>('');
  const fileInputRef = useRef<any>();
  const userEmail = session?.user?.email;

  const setFileInputRef = (value: any) => {
    fileInputRef.current.value = value;
  };

  const switchOffMsg = () => {
    setTimeout(() => {
      setIsPasswordChanged(false);
    }, 3000);
  };

  async function submitPasswordHandler(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    try {
      await onChangePassword({
        newPassword: newPasswordRef,
        oldPassword: oldPasswordRef,
      });
      setIsPasswordChanged(true);
      switchOffMsg();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function avatarHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const avatarData = {
      avatar: imageUrl,
    };

    try {
      await axios.post('/api/user/uploadAvatar', avatarData);
      setIsAvatarImageForm(false);
    } catch (error) {
      console.log('uploading avatar failed');
    }
  }

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    handleFileChanged(event, setUploadProgress, setImageUrl, setFileInputRef);
  }

  function handleCancelImage() {
    handleCancelImageClick(
      imageUrl,
      setFileInputRef,
      setImageUrl,
      setUploadProgress,
    );
  }

  useEffect(() => {
    getSession().then((res) => {
      if (!res) {
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
    <>
      <section className="hero is-dark is-bold">
        <div className="hero-body has-text-centered">
          <button
            type="button"
            className={classes.logoWrapper}
            onClick={() => {
              setIsAvatarImageForm(true);
            }}
          >
            {!avatar.length && (
              <span className={classes.logoText}>Click to change</span>
            )}
            <Image
              className={classes.logoImage}
              src={!avatar.length ? '/images/noAvatar.png' : avatar}
              alt="An image showing person"
              width={200}
              height={200}
            />
          </button>
          <p className="title has-text-grey-light">{userEmail}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <button
            className="button is-dark mb-2"
            type="button"
            onClick={() => {
              setIsPasswordForm(!isPasswordForm);
            }}
          >
            Change Password
          </button>
          {isPasswordForm && (
            <form
              style={{ maxWidth: '200px' }}
              onSubmit={submitPasswordHandler}
            >
              <div className="field">
                <label htmlFor="oldPass" className="label">
                  Old Password
                  <div className="control">
                    <input
                      onChange={(e) => {
                        setOldPasswordRef(e.target.value);
                      }}
                      value={oldPasswordRef}
                      id="oldPass"
                      className="input is-small is-rounded"
                      type="password"
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <label htmlFor="newPass" className="label">
                  New Password
                  <div className="control">
                    <input
                      onChange={(e) => {
                        setNewPasswordRef(e.target.value);
                      }}
                      value={newPasswordRef}
                      id="newPass"
                      className="input is-small is-rounded"
                      type="password"
                    />
                  </div>
                </label>
              </div>
              <div className="buttons">
                <button
                  className="button is-small is-rounded is-dark"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
          {isPasswordChanged && (
            <p className="notification is-success">password changed</p>
          )}
        </div>
      </section>

      <div className={classNames('modal', { 'is-active': isAvatarImageForm })}>
        <div className="modal-background" />
        <div className="modal-content is-clipped">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="box">
                  <form onSubmit={avatarHandler}>
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
                          onClick={handleCancelImage}
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
                    <button type="submit" className="button is-small is-dark mt-2">
                      Change avatar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsAvatarImageForm(false)}
          type="button"
          className="modal-close"
          aria-label="close"
        />
      </div>
    </>
  );
}
