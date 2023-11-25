'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { routes } from '@/data/page-routes';
import { AnimatePresence, motion } from 'framer-motion';

export default function MobileNavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>
        <HamburgerMenuIcon className="w-6 h-6" />
      </Dialog.Trigger>

      <AnimatePresence>
        {isOpen ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <NavOverlay />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <NavContent />
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}

const NavOverlay = React.forwardRef((props, forwardedRef) => (
  <motion.div
    {...props}
    ref={forwardedRef}
    className="fixed inset-0 bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    exit={{ opacity: 0 }}
    transition={{ type: 'tween', duration: 2 }}
  />
));

NavOverlay.displayName = 'NavOverlay';

const NavContent = React.forwardRef((props, forwardedRef) => (
  <motion.div
    {...props}
    ref={forwardedRef}
    className="w-[85%] bg-white right-0 fixed inset-y-0"
    initial={{ x: '100vh' }}
    animate={{ x: 0 }}
    exit={{ x: '100vh' }}
    transition={{ type: 'tween', duration: 2 }}
  >
    <div className="flex items-center justify-between">
      <Dialog.Title>Menu</Dialog.Title>
      <Dialog.Close>
        <Cross1Icon className="w-6 h-6" />
      </Dialog.Close>
    </div>

    <Links />
  </motion.div>
));

NavContent.displayName = 'NavContent';

function Links() {
  const pathName = usePathname();

  return (
    <div className="flex flex-col">
      {routes.map((route) => (
        <NavLink
          className={`p-3 hover:text-white hover:bg-slate-900 ${
            pathName === route.path ? 'text-slate-600' : ''
          }`}
          key={route.path}
          path={route.path}
          name={route.name}
        />
      ))}
    </div>
  );
}
