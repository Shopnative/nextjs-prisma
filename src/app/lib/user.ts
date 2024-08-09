'use server';

import { User } from '@prisma/client';
import prisma from './client';

export async function updateUser(user: User) {
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: user.name, email: user.email },
  });

  return updatedUser;
}

export const createUser = async (user: { name: string; email: string }) => {
  const newUser = await prisma.user.create({ data: user });

  return newUser;
};
