'use client';

import { PencilIcon } from '@heroicons/react/24/solid';
import * as Dialog from '@radix-ui/react-dialog';
import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Form, Formik, useField } from 'formik';

export default function EditFieldButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>
        <PencilIcon className="w-4 h-4" />
      </Dialog.Trigger>

      <AnimatePresence>
        {isOpen ? (
          <Dialog.Portal>
            <Dialog.Overlay asChild>
              <Overlay />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <Content />
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}

const Overlay = forwardRef((props, ref) => (
  <motion.div
    {...props}
    ref={ref}
    className="fixed inset-0 bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    exit={{ opacity: 0 }}
    transition={{ type: 'tween', duration: 0.5 }}
  />
));

const Content = forwardRef((props, ref) => (
  <motion.div
    {...props}
    ref={ref}
    className="w-[85%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white"
  >
    <div className="flex justify-between p-4">
      <Dialog.Title className="text-xl font-semibold">Edit</Dialog.Title>
      <Dialog.Close>
        <Cross1Icon className="w-6 h-6" />
      </Dialog.Close>
    </div>

    <EditFieldForm fieldType="email" />
  </motion.div>
));

function EditFieldForm({ fieldType }) {
  return (
    <Formik
      initialValues={{
        fieldValue: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      <Form>
        <InputField
          name="fieldValue"
          type={fieldType}
          label="New Email"
          id="fieldValue"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

function InputField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id}>{label}</label>

      <input {...props} {...field} />
    </div>
  );
}
