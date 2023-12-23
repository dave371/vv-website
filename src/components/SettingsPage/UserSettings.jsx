import { getUserInfoDTO } from '@/data/getUserInfoDTO';
import InfoBlock from './InfoBlock';

export default async function UserSettings() {
  const user = await getUserInfoDTO();

  return (
    <div>
      <h2 className="text-xl font-medium">Account</h2>
      <div className="flex flex-col gap-4 mt-1">
        <InfoBlock fieldName="First Name" fieldValue={user.firstName} />
        <InfoBlock fieldName="Last Name" fieldValue={user.lastName} />
        <InfoBlock fieldName="Email" fieldValue={user.primaryEmail} />
      </div>
    </div>
  );
}
