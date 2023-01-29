'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */

import axios from 'axios';
import React, { useState } from 'react';

export default function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  async function addContactHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newContact = {
      name,
      email,
      message,
    };

    try {
      await axios.post('/api/contacts', newContact);
      setNotification('ok');
    } catch (error) {
      console.log('Fetching failed');
      setNotification('error');
    }
  }

  return (
    <form
      onSubmit={(e) => {
        addContactHandler(e);
        resetForm();
      }}
      style={{ maxWidth: '600px' }}
    >
      <h1 className="title has-text-centered">Please write your message</h1>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
              <input
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                className="input"
                type="text"
                placeholder="Your Name"
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="email" className="label">
              E-Mail
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                className="input"
                type="email"
                placeholder="Your Email"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="field">
        <label htmlFor="massage" className="label">
          Message
          <div className="control">
            <textarea
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              id="message"
              className="textarea"
              placeholder="Textarea"
            />
          </div>
        </label>
      </div>
      <div className="buttons">
        <button type="submit" className="button is-dark">
          Submit Contact
        </button>
      </div>
      {notification && (
        <div className="notification">
          <button
            onClick={() => {
              setNotification('');
            }}
            type="button"
            className="delete"
          />
          {notification === 'ok' && 'Your message has been sent sucsefully'}
          {notification === 'error' && 'Failed to send message'}
        </div>
      )}
    </form>
  );
}
