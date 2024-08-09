'use client';

import { User } from '@prisma/client';
import { updateUser } from './lib/user';
import { useState } from 'react';

export const UpdateForm = ({ initialUser }: { initialUser: User }) => {
  const [user, setUser] = useState<User>(initialUser);

  const update = () => {
    if (user) {
      updateUser(user).then((user) => setUser(user));
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <input value={user.name ?? ''} onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <button onClick={() => update()}>Update to {user?.name}</button>
    </div>
  );
};
