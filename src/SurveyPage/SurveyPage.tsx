import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import { Header, Error } from "../GlobalComponents";
import TextField from "@material-ui/core/TextField";

export const SurveyPage: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("You must enter an email address"),
    full_name: Yup.string().required("You must enter your name"),
  });

  const {
    handleChange,
    handleBlur,
    values: { full_name, email },
    errors,
    touched,
  } = useFormik({
    initialValues: {
      full_name: "",
      email: "",
    },
    validationSchema,
    onSubmit: () => undefined,
  });

  return (
    <Container maxWidth="sm">
      <Header fontSize="35px">Survey</Header>
      <TextField
        onBlur={handleBlur}
        style={{ width: "inherit", margin: "20px" }}
        onChange={handleChange}
        value={full_name}
        name="full_name"
        label="Full Name"
        variant="outlined"
      />
      {errors.full_name && touched.full_name && (
        <Error>{errors.full_name}</Error>
      )}
      <TextField
        onBlur={handleBlur}
        style={{ width: "inherit", margin: "20px" }}
        onChange={handleChange}
        value={email}
        name="email"
        label="Email"
        variant="outlined"
      />
      {errors.email && touched.email && <Error>{errors.email}</Error>}
    </Container>
  );
};
