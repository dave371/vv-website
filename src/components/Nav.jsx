import Link from 'next/link';
import DesktopNavLinks from './DesktopNavLinks';
import MobileNavLinks from './MobileNavLinks';
import BrandLogo from './BrandLogo';

export default function Nav() {
  return (
    <div className="flex items-center justify-between p-4">
      <Link className="text-3xl font-semibold" href="/">
        <BrandLogo className="text-green-500" />
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
