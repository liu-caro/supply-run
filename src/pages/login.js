import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import { TextField } from "../components/form/text-field";

import firebase from "../firebase";
import { Typography } from "@material-ui/core";

import UserContext from "../services/authContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: Yup.string().required("Please enter a password")
});

const Login = () => {
  const history = useHistory();
  const { setFireBaseId } = useContext(UserContext);

  return (
    <>
      <Typography
        variant="h1"
        style={{ marginTop: "1.5rem", textAlign: "center" }}
      >
        Log In
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(user => {
              setFireBaseId(user.uid);
              history.push("/");
            })
            .catch(error => {
              alert(error.message);
            });
        }}
      >
        {props => (
          <Form
            style={{
              display: "grid",
              width: "33%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Field
              component={TextField}
              type="email"
              name="email"
              label="email"
              style={{ margin: "1rem" }}
            />
            <Field
              component={TextField}
              type="password"
              name="password"
              label="password"
              style={{ margin: "1rem" }}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { Login };
