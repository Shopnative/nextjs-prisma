'use client';

import { useState } from 'react';
import { createUser } from './lib/user';

export const AddUser = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const add = () => {
    if (name && email) {
      createUser({ name, email }).then(() => {
        setName('');
        setEmail('');
      });
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => add()}>Add</button>
    </div>
  );
};
