import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Header, StyledInput, StyledMultiLineInput } from "../GlobalComponents";

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin: 10px;
`;

const QuestionSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  questions: Yup.string()
    .min(2, "Too Short!")
    .required("Required")
});

export const ContactUsPage: React.FC = () => {
  const [submitError, setSubmitError] = useState(false);

  return (
    <Container maxWidth="md">
      <Header fontSize="35px">Contact Us</Header>
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <Formik
        initialValues={{
          email: "",
          name: "",
          questions: ""
        }}
        validationSchema={QuestionSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          axios
            .post("https://formspree.io/mjvvybwo", {
              values
            })
            .then(() => setSubmitting(false))
            .catch(error => {
              if (`${error}`.includes("400")) setSubmitError(true);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting
        }) => (
          <Form>
            <StyledInput
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              disableUnderline
            />
            <ErrorMessage>
              {errors.name && touched.name && errors.name}
            </ErrorMessage>
            <StyledInput
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              disableUnderline
            />
            <ErrorMessage>
              {errors.email && touched.email && errors.email}
            </ErrorMessage>
            <StyledMultiLineInput
              name="questions"
              placeholder="Questions or comments"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.questions}
              multiline
              disableUnderline
              rows={4}
            />
            <ErrorMessage>
              {errors.questions && touched.questions && errors.questions}
            </ErrorMessage>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              style={{ marginTop: "25px", fontSize: "16px" }}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
