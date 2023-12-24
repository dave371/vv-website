import { getUserInfoDTO } from '@/data/getUserInfoDTO';
import InfoBlock from './InfoBlock';
import EditFieldButton from './EditFieldButton';
import { createEmail } from '@/data/createEmailAddress';

export default async function UserSettings() {
  const user = await getUserInfoDTO();

  await createEmail();

  return (
    <div>
      <EditFieldButton />

      <h2 className="text-xl font-medium">Account</h2>
      <div className="flex flex-col gap-4 mt-1">
        <InfoBlock fieldName="First Name" fieldValue={user.firstName} />
        <InfoBlock fieldName="Last Name" fieldValue={user.lastName} />
        <InfoBlock fieldName="Email" fieldValue={user.primaryEmail} />
      </div>
    </div>
  );
}
