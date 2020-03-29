import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import { TextField } from "../components/form/text-field";

import { createTask } from "../services/tasks";
import { Typography } from "@material-ui/core";

const TaskSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name."),
  lastName: Yup.string().required("Please enter your last name."),
  phone: Yup.string().required("Please enter a 10 digit phone number."),
  address: Yup.string().required("Please enter your address."),
  request: Yup.string().required("Please enter your request.")
});

const Task = () => {
  const [hasSubmitted, setHasSubmitted] = useState();
  return (
    <>
      {!hasSubmitted && (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            request: ""
          }}
          validationSchema={TaskSchema}
          onSubmit={values => {
            const { firstName, lastName, phone, address, request } = values;
            if (!navigator && !navigator.geolocation) {
              alert("Please turn on browser location");
              return;
            }

            const newTask = async (lat, long) => {
              const newTaskObj = {
                firstName,
                lastName,
                phone,
                address,
                request,
                lat,
                long,
                completed: false
              };
              return createTask(newTaskObj).then(response => {
                setHasSubmitted(true);
              });
            };

            navigator.geolocation.getCurrentPosition(pos => {
              const lat = pos.coords.latitude;
              const long = pos.coords.longitude;

              newTask(lat, long);
            });
            return;
          }}
        >
          {({ isSubmitting }) => (
            <Form
              style={{
                display: "grid",
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5rem"
              }}
            >
              <Field
                component={TextField}
                name="firstName"
                label="First Name"
                style={{ margin: "1rem" }}
              />
              <Field
                component={TextField}
                name="lastName"
                label="Last Name"
                style={{ margin: "1rem" }}
              />
              <Field
                component={TextField}
                name="phone"
                label="Phone Number"
                type="phone"
                maxLength={10}
                style={{ margin: "1rem" }}
              />
              <Field
                component={TextField}
                name="address"
                label="Address"
                multiline={true}
                style={{ margin: "1rem" }}
              />
              <Field
                component={TextField}
                name="request"
                label="Request"
                multiline={true}
                style={{ margin: "1rem" }}
              />
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      )}
      {hasSubmitted && (
        <Typography>
          We will match you with a volunteer as quickly as possible. You will be
          contacted via your phone when you are matched.
        </Typography>
      )}
    </>
  );
};

export { Task };
