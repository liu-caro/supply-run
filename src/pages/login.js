import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import { TextField } from "../components/form/text-field";

import firebase from "../firebase";


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: Yup.string().required("Please enter a password")
});

const Login = () => {
  const history = useHistory();

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then((user) => {
                history.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
        }}
      >
        {props => (
          <Form>
            <Field component={TextField} type="email" name="email" label="email"/>
            <Field component={TextField} type="password" name="password" label="password"/>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { Login };
