import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import { TextField } from "../components/form/text-field";
import { useHistory } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: Yup.string().required("Please enter a password")
});

const Signup = () => {
  let history = useHistory();

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
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

export { Signup };
