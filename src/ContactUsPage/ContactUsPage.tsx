import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Header, StyledInput, StyledMultiLineInput } from "../GlobalComponents";
import { MessageSentSnackbar } from "./MessageSentSnackbar";

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
  const [isSending, setIsSending] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <>
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
          onSubmit={(values, { resetForm }) => {
            setIsSending(true);
            const { name, email, questions } = values;
            axios
              .post("https://formspree.io/mrggjzbb", {
                name,
                email,
                questions
              })
              .then(() => {
                resetForm();
                setIsSending(false);
                setShowSnackbar(true);
              })
              .catch(error => {
                if (`${error}`.includes("400")) {
                  setSubmitError(true);
                  setShowSnackbar(true);
                }
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit}>
              <Field
                render={() => (
                  <StyledInput
                    name="name"
                    type="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    disableUnderline
                  />
                )}
              />
              <ErrorMessage>
                {errors.name && touched.name && errors.name}
              </ErrorMessage>
              <Field
                render={() => (
                  <StyledInput
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    disableUnderline
                  />
                )}
              />
              <ErrorMessage>
                {errors.email && touched.email && errors.email}
              </ErrorMessage>
              <Field
                render={() => (
                  <StyledMultiLineInput
                    name="questions"
                    placeholder="Questions or comments"
                    multiline
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.questions}
                    disableUnderline
                    rows={4}
                  />
                )}
              />
              <ErrorMessage>
                {errors.questions && touched.questions && errors.questions}
              </ErrorMessage>
              <Button
                type="submit"
                variant="contained"
                style={{ marginTop: "25px", fontSize: "16px" }}
              >
                <CircularProgress
                  style={{
                    width: "28px",
                    height: "28px",
                    display: isSending ? "inline" : "none"
                  }}
                />
                <div style={{ display: isSending ? "none" : "block" }}>
                  Send
                </div>
              </Button>
            </form>
          )}
        </Formik>
      </Container>
      <MessageSentSnackbar
        submitError={submitError}
        showSnackbar={showSnackbar}
      />
    </>
  );
};
