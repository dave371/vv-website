import 'server-only';

import { currentUser } from '@clerk/nextjs';
import { getUser } from './auth';

export const getUserInfoDTO = async () => {
  const isAuth = getUser();

  if (!isAuth) throw new Error('not authenticated');

  const user = await currentUser();

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    primaryEmail: getPrimaryEmail(
      user.emailAddresses,
      user.primaryEmailAddressId
    ),
  };
};

const getPrimaryEmail = (emailList, primaryEmailId) => {
  const primaryEmail = emailList.find((email) => {
    return email.id === primaryEmailId;
  });

  return primaryEmail.emailAddress;
};
