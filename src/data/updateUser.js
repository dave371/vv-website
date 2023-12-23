import 'server-only';

import { clerkClient } from '@clerk/nextjs/server';
import { getUser } from './auth';

export const updateUser = async (params) => {
  const user = getUser();

  if (!user) throw new Error('not authenticated');

  try {
    await clerkClient.users.updateUser(user, params);
  } catch (err) {
    console.log(err.message);
    throw new Error('there was an error in updating user');
  }
};
