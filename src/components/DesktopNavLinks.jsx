'use client';

import { routes } from '@/data/page-routes';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';

export default function DesktopNavLinks() {
  const pathName = usePathname();

  return (
    <div className="flex gap-17">
      {routes.map((route) => (
        <NavLink
          className={`text-h4 font-medium hover:text-slate-900 ${
            pathName === route.path ? 'text-slate-700' : ''
          }`}
          key={route.path}
          path={route.path}
          name={route.name}
        />
      ))}
    </div>
  );
}
