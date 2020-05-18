import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import {
  Header,
  StyledTextField,
  StyledMultiLineTextField,
  Error,
} from "../GlobalComponents";
import { MessageSentSnackbar } from "./MessageSentSnackbar";

interface HandleSubmitParams {
  name: string;
  email: string;
  questions: string;
  resetForm(): void;
}

type HandleSubmit = ({
  email,
  name,
  questions,
  resetForm,
}: HandleSubmitParams) => void;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("You must enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("You must enter an email address"),
  questions: Yup.string()
    .min(2, "Too Short!")
    .required("You must enter your question"),
});

export const ContactUsPage: React.FC = () => {
  const [submitError, setSubmitError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit: HandleSubmit = ({
    name,
    email,
    questions,
    resetForm,
  }) => {
    setIsSending(true);
    axios
      .post("https://formspree.io/mrggjzbb", {
        name,
        email,
        questions,
      })
      .then(() => {
        setIsSending(false);
        setShowSnackbar(true);
        resetForm();
      })
      .catch(error => {
        if (`${error}`.includes("400")) {
          setSubmitError(true);
          setShowSnackbar(true);
        }
      });
  };

  const {
    handleChange,
    handleBlur,
    values: { name, email, questions },
    errors,
    touched,
    resetForm,
    validateForm,
    setTouched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      questions: "",
    },
    validationSchema,
    onSubmit: () => undefined,
  });

  return (
    <>
      <Container maxWidth="sm">
        <Header fontSize="35px">Contact Us</Header>
        <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
        <StyledTextField
          variant="standard"
          name="name"
          type="name"
          placeholder="Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={name}
        />
        <Error>{errors.name && touched.name && errors.name}</Error>
        <StyledTextField
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
        />
        <Error>{errors.email && touched.email && errors.email}</Error>
        <StyledMultiLineTextField
          name="questions"
          placeholder="Questions or comments"
          multiline
          onChange={handleChange}
          onBlur={handleBlur}
          value={questions}
          rows={4}
        />
        <Error>
          {errors.questions && touched.questions && errors.questions}
        </Error>
        <Button
          variant="contained"
          style={{ marginTop: "25px", fontSize: "16px" }}
          onClick={() => {
            (async () => {
              const errors = await validateForm();
              !errors.email && !errors.name && !errors.questions
                ? handleSubmit({ name, email, questions, resetForm })
                : setTouched({ email: true, name: true, questions: true });
            })();
          }}
        >
          <CircularProgress
            style={{
              width: "28px",
              height: "28px",
              display: isSending ? "inline" : "none",
            }}
          />
          <div style={{ display: isSending ? "none" : "block" }}>Send</div>
        </Button>
      </Container>
      <MessageSentSnackbar
        submitError={submitError}
        showSnackbar={showSnackbar}
      />
    </>
  );
};
