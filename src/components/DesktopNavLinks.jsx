'use client';

import { routes } from '@/data/page-routes';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';

export default function DesktopNavLinks() {
  const pathName = usePathname();

  return (
    <div className="flex gap-5">
      {routes.map((route) => (
        <NavLink
          className={`${pathName === route.path ? 'text-red-900' : ''}`}
          key={route.path}
          path={route.path}
          name={route.name}
        />
      ))}
    </div>
  );
}
