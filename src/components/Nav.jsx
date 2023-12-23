import Link from 'next/link';
import DesktopNavLinks from './DesktopNavLinks';
import MobileNavLinks from './MobileNavLinks';
import BrandLogo from './BrandLogo';
import { UserButton, auth } from '@clerk/nextjs';
import User from './User';
import { getUser } from '@/data/auth';

export default function Nav() {
  const { userId } = auth();

  return (
    <div className="flex items-center justify-between p-4">
      <Link className="text-3xl font-semibold" href="/">
        <BrandLogo className="text-green-500" />
      </Link>

      <div className="hidden lg:block">
        <DesktopNavLinks />
      </div>

      <div className="flex items-center justify-center gap-3 lg:hidden">
        <UserButton />
        {userId ? <User /> : null}
        <MobileNavLinks />
      </div>
    </div>
  );
}
