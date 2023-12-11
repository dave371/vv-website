import Link from 'next/link';
import DesktopNavLinks from './DesktopNavLinks';
import MobileNavLinks from './MobileNavLinks';

export default function Nav() {
  return (
    <div className="flex items-center justify-between p-4">
      <Link className="text-3xl font-semibold" href="/">
        VitalityVault
      </Link>

      <div className="hidden lg:block">
        <DesktopNavLinks />
      </div>

      <div className="lg:hidden">
        <MobileNavLinks />
      </div>
    </div>
  );
}
