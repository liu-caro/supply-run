import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";

import { TextField } from "../components/form/text-field";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: Yup.string().required("Please enter a password")
});

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {props => (
          <Form>
            <Field component={TextField} type="email" name="email" />
            <Field component={TextField} type="password" name="password" />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { Login };
