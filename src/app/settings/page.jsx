import SecuritySettings from '@/components/SettingsPage/SecuritySettings';
import UserSettings from '@/components/SettingsPage/UserSettings';
import { updateUser } from '@/data/updateUser';

export default async function Settings() {
  const test = await updateUser({ firstName: 'David' });

  return (
    <div>
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="flex flex-col gap-4 mt-3">
        <UserSettings />
        <SecuritySettings />
      </div>
    </div>
  );
}
