import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import {
  Header,
  Error,
  StyledTextField,
  StyledMultiLineTextField,
} from "../GlobalComponents";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { MessageSentSnackbar } from "../ContactUsPage";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StyledRadioGroup, RadioGroupWrapper } from "./elements";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";

interface HandleSubmitArgs {
  name: string;
  email: string;
  continue_through_summer: string;
  like_to_learn_over_summer: string;
  favorite_part: string;
  one_thing_you_would_change: string;
  would_recommend: string;
  resetForm(): void;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("You must enter an email address"),
  name: Yup.string().required("You must enter your name"),
  favorite_part: Yup.string().required("This is a required field"),
  like_to_learn_over_summer: Yup.string(),
  one_thing_you_would_change: Yup.string().required("This is a required field"),
  would_recommend: Yup.string().required("This is a required field"),
});

export const SurveyPage: React.FC = () => {
  const [submitError, setSubmitError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = ({
    name,
    email,
    favorite_part,
    continue_through_summer,
    like_to_learn_over_summer,
    one_thing_you_would_change,
    would_recommend,
    resetForm,
  }: HandleSubmitArgs) => {
    setIsSending(true);
    axios
      .post("https://formspree.io/mnqgjnej", {
        name,
        email,
        continue_through_summer,
        favorite_part,
        like_to_learn_over_summer,
        one_thing_you_would_change,
        would_recommend,
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
    values: {
      name,
      email,
      continue_through_summer,
      like_to_learn_over_summer,
      favorite_part,
      one_thing_you_would_change,
      would_recommend,
    },
    errors,
    touched,
    validateForm,
    resetForm,
    setTouched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      continue_through_summer: "yes",
      like_to_learn_over_summer: "",
      favorite_part: "",
      one_thing_you_would_change: "",
      would_recommend: "",
    },
    validationSchema,
    onSubmit: () => undefined,
  });

  return (
    <>
      <Container maxWidth="sm">
        <Header fontSize="35px">End of Semester Survey</Header>
        <Divider style={{ marginTop: "25px", marginBottom: "30px" }} />
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
        <RadioGroupWrapper>
          <FormLabel style={{ marginBottom: "10px" }} component="legend">
            Would you like to continue through the summer?
          </FormLabel>
          <StyledRadioGroup
            name="continue_through_summer"
            value={continue_through_summer}
            onChange={handleChange}
          >
            <FormControlLabel value="yes" label="Yes" control={<Radio />} />
            <FormControlLabel value="no" label="No" control={<Radio />} />
          </StyledRadioGroup>
        </RadioGroupWrapper>
        <Error>
          {errors.continue_through_summer &&
            touched.continue_through_summer &&
            errors.continue_through_summer}
        </Error>
        {continue_through_summer === "yes" && (
          <StyledMultiLineTextField
            name="like_to_learn_over_summer"
            placeholder="What are a few things you'd like to learn over the summer?"
            multiline
            onChange={handleChange}
            onBlur={handleBlur}
            value={like_to_learn_over_summer}
            rows={4}
          />
        )}
        <Error>
          {errors.like_to_learn_over_summer &&
            touched.like_to_learn_over_summer &&
            errors.like_to_learn_over_summer}
        </Error>
        <StyledMultiLineTextField
          name="favorite_part"
          placeholder="What was your favorite part of this Pi Crafters semester?"
          multiline
          onChange={handleChange}
          onBlur={handleBlur}
          value={favorite_part}
          rows={4}
        />
        <Error>
          {errors.favorite_part &&
            touched.favorite_part &&
            errors.favorite_part}
        </Error>
        <StyledMultiLineTextField
          name="one_thing_you_would_change"
          placeholder={`What is one thing you would change about the Pi Crafters class/workshop? (ie. "I would prefer a slower approach to the curriculum")`}
          multiline
          onChange={handleChange}
          onBlur={handleBlur}
          value={one_thing_you_would_change}
          rows={4}
        />
        <Error>
          {errors.one_thing_you_would_change &&
            touched.one_thing_you_would_change &&
            errors.one_thing_you_would_change}
        </Error>
        <StyledMultiLineTextField
          name="would_recommend"
          placeholder="Would you recommend this class/workshop to your friends?"
          multiline
          onChange={handleChange}
          onBlur={handleBlur}
          value={would_recommend}
          rows={4}
        />
        <Error>
          {errors.would_recommend &&
            touched.would_recommend &&
            errors.would_recommend}
        </Error>
        <Button
          variant="contained"
          style={{ marginTop: "25px", fontSize: "16px" }}
          onClick={() => {
            (async () => {
              const errors = await validateForm();
              !errors.name &&
              !errors.email &&
              !errors.favorite_part &&
              !errors.like_to_learn_over_summer &&
              !errors.one_thing_you_would_change &&
              !errors.would_recommend
                ? handleSubmit({
                    name,
                    email,
                    continue_through_summer,
                    like_to_learn_over_summer,
                    favorite_part,
                    one_thing_you_would_change,
                    would_recommend,
                    resetForm,
                  })
                : setTouched({
                    name: true,
                    email: true,
                    continue_through_summer: true,
                    like_to_learn_over_summer: true,
                    favorite_part: true,
                    one_thing_you_would_change: true,
                    would_recommend: true,
                  });
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
          <div style={{ display: isSending ? "none" : "block" }}>Submit</div>
        </Button>
      </Container>
      <MessageSentSnackbar
        message="Thank you so much for taking the time to fill out our survey! 📊"
        submitError={submitError}
        showSnackbar={showSnackbar}
      />
    </>
  );
};
