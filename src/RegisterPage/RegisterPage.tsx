import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import axios from "axios";
import React, { useState } from "react";
import { brightBlue } from "../colors";
import {
  Header,
  StyledTextField,
  StyledMultiLineTextField,
  Error,
} from "../GlobalComponents";
import { MessageSnackBar } from "./MessageSnackBar";
import { SeeMoreInfoSection } from "./SeeMoreInfoSection";
import { useFormik } from "formik";
import * as Yup from "yup";
import CircularProgress from "@material-ui/core/CircularProgress";

interface HandleSubmitArgs {
  name: string;
  email: string;
  questions: string;
  classType: string;
  resetForm(): void;
}

const MoreInfo: React.FC<{ classType: string }> = ({ classType }) => {
  if (classType.includes("Kids")) {
    return <SeeMoreInfoSection workShopName="Kids" />;
  } else if (classType.includes("Adults")) {
    return <SeeMoreInfoSection workShopName="Adults" />;
  } else {
    return null;
  }
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("You must enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("You must enter an email address"),
  questions: Yup.string()
    .min(2, "Too Short!")
    .required("You must enter your question"),
});

export const RegisterPage: React.FC = () => {
  const [classType, setClassType] = useState("placeholder");
  const [submitError, setSubmitError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = ({
    name,
    email,
    questions,
    classType,
    resetForm,
  }: HandleSubmitArgs) => {
    setIsSending(true);
    axios
      .post("https://formspree.io/mjvvybwo", {
        name,
        email,
        classType,
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
    <Container maxWidth="sm">
      <Header style={{ fontSize: "35px", marginTop: "25px" }}>
        Register for Pi Crafters
      </Header>
      <div
        style={{ fontSize: "20px", marginBottom: "10px", marginTop: "10px" }}
      >
        <Header style={{ display: "inline" }}>
          Weekend workshops starting date:{" "}
        </Header>{" "}
        <Header style={{ display: "inline" }} color={brightBlue}>
          January 11th, 2020
        </Header>
      </div>
      <Divider style={{ marginTop: "25px", marginBottom: "30px" }} />
      <StyledTextField
        variant="standard"
        name="name"
        type="name"
        placeholder={`Student's Name`}
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
      <Select
        onChange={({ target: { value } }) => {
          setClassType(`${value}`);
        }}
        value={classType}
        style={{ fontSize: "20px", color: brightBlue }}
      >
        <MenuItem disabled value="placeholder">
          Select a Program
        </MenuItem>
        <MenuItem value="Kids Robotics (Workshop)">
          Kids Robotics (Workshop)
        </MenuItem>
        <MenuItem value="Adults Software Engineering (Workshop)">
          Adults Software Engineering (Workshop)
        </MenuItem>
      </Select>
      <MoreInfo classType={classType} />
      <StyledMultiLineTextField
        style={{ marginTop: "20px" }}
        name="questions"
        placeholder="Questions or comments"
        multiline
        onChange={handleChange}
        onBlur={handleBlur}
        value={questions}
        rows={4}
      />
      <Error>{errors.questions && touched.questions && errors.questions}</Error>
      <Button
        variant="contained"
        style={{ marginTop: "25px", fontSize: "16px" }}
        onClick={() =>
          !errors.email &&
          !errors.name &&
          !errors.questions &&
          handleSubmit({ name, email, questions, classType, resetForm })
        }
      >
        <CircularProgress
          style={{
            width: "28px",
            height: "28px",
            display: isSending ? "inline" : "none",
          }}
        />
        <div style={{ display: isSending ? "none" : "block" }}>Register</div>
      </Button>
      <MessageSnackBar
        submitError={submitError}
        showSnackbar={showSnackbar}
        constantClassType={classType}
      />
    </Container>
  );
};
