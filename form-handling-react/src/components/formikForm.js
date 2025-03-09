import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string().required('Email is required')
      // .email('Invalid email address')
      ,
    password: Yup.string().required('Password is required')
      // .min(6, 'Password must be at least 6 characters')
      ,
  });

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission, e.g., send data to an API
        console.log('Form submitted:', values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
          />
          <ErrorMessage name="username" component="p" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" component="p" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
          />
          <ErrorMessage name="password" component="p" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
