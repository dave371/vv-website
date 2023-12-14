'use client';

import { Form, Formik, useField } from 'formik';

export default function Contact() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-medium">Questions? We Have Got Answers.</h2>
      <p className="mt-3">
        Have any questions or uncertainties? Reach out to us, and our dedicated
        support team will provide the answers you need. Your wellness journey
        starts with clarity.
      </p>

      <ContactForm />
    </section>
  );
}

function ContactForm() {
  return (
    <div className="mt-7">
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
      >
        <Form>
          <div className="flex flex-col gap-5">
            <Input name="name" type="text" label="Name" id="name" />
            <Input name="email" type="email" label="Email" id="email" />
            <TextArea name="message" label="Message" id="message" />
            <button
              className="w-full h-12 text-xl font-medium text-white bg-green-500 rounded shadow-md"
              type="submit"
            >
              Send You Message
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <label className="text-lg font-semibold" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="h-12 p-2 mt-2 border-green-500 border-[2px] rounded font-medium focus:border-[4px] focus:outline-none"
        {...props}
        {...field}
      />
    </div>
  );
}

function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <label className="text-lg font-semibold" htmlFor={props.id}>
        {label}
      </label>
      <textarea
        className="h-32 p-2 mt-2 border-green-500 border-[2px] rounded font-medium focus:border-[4px] focus:outline-none"
        {...props}
        {...field}
      ></textarea>
    </div>
  );
}
