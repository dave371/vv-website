import 'server-only';

import { auth } from '@clerk/nextjs';

export const getUser = () => {
  const { userId } = auth();

  if (!userId) return null;

  return userId;
};
s;
