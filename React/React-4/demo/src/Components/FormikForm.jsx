import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikForm = () => {
  const validate = (formValues) => {
    const error = {};
    if (formValues.name.trim().length === 0) {
      error.name = "Name shouldn't be empty";
    }
    if (formValues.email.trim().length === 0) {
      error.email = "Email shouldn't be empty";
    }
    if (formValues.password.trim().length === 0) {
      error.password = "password shouldn't be empty";
    }
    return error;
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validate={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name: </label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage component="div" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage component="div" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage component="div" name="password" />
        </div>
        <button>Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
