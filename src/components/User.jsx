'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import { forwardRef, useState } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Cog6ToothIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      {isLoaded ? <UserTrigger user={user} /> : null}

      <AnimatePresence>
        {isOpen ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <UserOverlay />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <UserContent
                user={user}
                isLoaded={isLoaded}
                isSignedIn={isSignedIn}
                setIsOpen={setIsOpen}
              />
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}

const UserTrigger = forwardRef(function UserTrigger({ user, ref, ...props }) {
  return (
    <Dialog.Trigger
      {...props}
      ref={ref}
      className="min-w-[36px] min-h-[36px] bg-green-100 font-medium rounded-full text-sm text-[#083A08]"
    >
      {user.firstName[0] + user.lastName[0]}
    </Dialog.Trigger>
  );
});

const UserOverlay = forwardRef(function UserOverlay(props, ref) {
  return (
    <motion.div
      {...props}
      ref={ref}
      className="fixed inset-0 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.5 }}
    />
  );
});

const UserContent = forwardRef(function UserContent({
  user,
  isLoaded,
  isSignedIn,
  setIsOpen,
  ref,
  ...props
}) {
  return (
    <motion.div
      {...props}
      ref={ref}
      className="w-[85%] bg-white right-0 fixed inset-y-0 flex flex-col"
      initial={{ x: '100vh' }}
      animate={{ x: 0 }}
      exit={{ x: '100vh' }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <div className="flex justify-end p-4">
        <Dialog.Close>
          <Cross1Icon className="w-[1.618rem] h-[1.618rem]" />
        </Dialog.Close>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-col items-center">
          <span className="bg-green-100 rounded-full text-[#083a08] font-medium flex items-center justify-center w-[48px] h-[48px]">
            {user.firstName[0] + user.lastName[0]}
          </span>

          <p className="mt-3 text-lg font-medium">{user.fullName}</p>

          <p className="mt-2 text-lg">
            {user.primaryEmailAddress.emailAddress}
          </p>
        </div>

        <ul className="mt-4">
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/dashboard"
              className="flex items-center w-full gap-2 p-2 pl-4 text-lg font-medium hover:bg-green-100 hover:text-[#083A08]"
            >
              <HomeIcon className="w-6 h-6" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/settings"
              className="flex items-center w-full gap-2 p-2 pl-4 text-lg font-medium hover:bg-green-100 hover:text-[#083A08]"
            >
              <Cog6ToothIcon className="w-6 h-6" />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
});
