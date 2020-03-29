import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import { TextField } from "../components/form/text-field";

import { createVolunteer } from "../services/tasks";
import UserContext from "../services/authContext";

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: Yup.string().required("Please enter a password")
});

const Signup = () => {
  let history = useHistory();
  const { setFireBaseId } = useContext(UserContext);

  return (
    <>
      <Typography
        variant="h1"
        style={{ marginTop: "1.5rem", textAlign: "center" }}
      >
        Sign Up
      </Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: ""
        }}
        validationSchema={SignUpSchema}
        onSubmit={values => {
          const { firstName, lastName, phone } = values;
          return firebase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(user => {
              setFireBaseId(user.uid);

              const newVolunteer = {
                firstName,
                lastName,
                phone,
                uuid: user.uid
              };
              createVolunteer(newVolunteer).then(response => {
                history.push("/");
              });
            })
            .catch(error => {
              alert(error.message);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              display: "grid",
              width: "33%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Field component={TextField} name="firstName" label="First Name" />
            <Field component={TextField} name="lastName" label="Last Name" />
            <Field
              component={TextField}
              type="email"
              name="email"
              label="Email"
            />
            <Field
              component={TextField}
              type="phone"
              name="phone"
              label="Phone"
            />
            <Field
              component={TextField}
              type="password"
              name="password"
              label="Password"
            />
            <Button disabled={isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { Signup };
