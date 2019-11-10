import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { brightBlue } from "../colors";
import { Header, Link } from "../GlobalComponents";
import { StyledInput, StyledMultiLineInput } from "./elements";

interface FormFieldsTypes {
  updateValue: Dispatch<SetStateAction<string>>;
  value: string;
  label: string;
  style?: React.CSSProperties;
}

interface FormData {
  name: string;
  email: string;
  classType: string;
  questions: string;
}

const SeeMoreInfoSection: React.FC<{ workShopName: string }> = ({
  workShopName
}) => (
  <Header style={{ marginTop: "24px", fontSize: "20px" }}>
    Click{" "}
    <Link target="_blank" to="/workshops" style={{ color: brightBlue }}>
      HERE
    </Link>{" "}
    to see more information about the {workShopName} Workshop
  </Header>
);

const MoreInfo: React.FC<{ classType: string }> = ({ classType }) => {
  if (classType.includes("Kids")) {
    return <SeeMoreInfoSection workShopName="Kids" />;
  } else if (classType.includes("Adults")) {
    return <SeeMoreInfoSection workShopName="Adults" />;
  } else {
    return null;
  }
};

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [classType, setClassType] = useState("");
  const [constantClassType, setConstantClassType] = useState("");
  const [questions, setQuestions] = useState("");
  const [status, setStatus] = useState(0);

  const resetFormFields = () => {
    [setName, setEmail, setClassType, setQuestions].forEach(item => item(""));
  };

  const submitFormDataToFormSpree = () => {
    axios
      .post("https://formspree.io/mjvvybwo", {
        name,
        email,
        classType,
        questions
      })
      .then(({ status }) => {
        setStatus(status);
        resetFormFields();
      })
      .catch(error => {
        console.log(error);
        if (`${error}`.includes("400")) setStatus(400);
      });
  };

  const formFields: FormFieldsTypes[] = [
    {
      label: `Student's Name`,
      value: name,
      updateValue: setName
    },
    {
      label: `Email`,
      value: email,
      updateValue: setEmail,
      style: { margin: "atuo", marginTop: "20px" }
    }
  ];

  return (
    <>
      <Container maxWidth="md" style={{ textAlign: "center", margin: "auto" }}>
        <Header style={{ fontSize: "35px", marginTop: "25px" }}>
          Register for Pi Crafters
        </Header>
        <Divider style={{ marginTop: "25px", marginBottom: "30px" }} />
        {formFields.map(({ label, value, updateValue, style }) => (
          <div style={style}>
            <StyledInput
              onChange={({ target: { value } }) => updateValue(value)}
              required
              value={value}
              placeholder={label}
              disableUnderline
            />
          </div>
        ))}
        <FormControl style={{ width: "430px", marginTop: "20px" }}>
          <InputLabel style={{ fontSize: "24px" }}>Select a Program</InputLabel>
          <Select
            required
            onChange={({ target: { value } }) => {
              setClassType(`${value}`);
              setConstantClassType(`${value}`);
            }}
            value={classType}
            style={{ fontSize: "20px", marginTop: "25px", color: brightBlue }}
          >
            <MenuItem value="Kids Robotics (Workshop)">
              Kids Robotics (Workshop)
            </MenuItem>
            <MenuItem value="Adults Software Engineering (Workshop)">
              Adults Software Engineering (Workshop)
            </MenuItem>
          </Select>
        </FormControl>
        <MoreInfo classType={classType} />
      </Container>
      <StyledMultiLineInput
        onChange={({ target: { value } }) => setQuestions(value)}
        value={questions}
        placeholder="Questions or comments"
        multiline
        disableUnderline
        rows={4}
      />
      <Button
        onClick={() => {
          submitFormDataToFormSpree();
        }}
        variant="contained"
        style={{ marginTop: "25px", fontSize: "16px" }}
      >
        Register
      </Button>

      <Snackbar
        open={status === 200 || status === 400 ? true : false}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        autoHideDuration={5000}
        message={
          status === 200 ? (
            <Header>🎉You are now registered for {constantClassType}!</Header>
          ) : (
            <Header color="red">
              Error! Please ensure you've filled out every field.
            </Header>
          )
        }
      />
    </>
  );
};
