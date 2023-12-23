import 'server-only';

import { auth } from '@clerk/nextjs';

export const getUser = () => {
  const { userId } = auth();

  console.log(userId);

  if (!userId) return null;

  return userId;
};
