import React, { useState, Dispatch, SetStateAction } from "react";
import Input from "@material-ui/core/Input";
import { lightGrey, brightBlue } from "../colors";
import { Header, Link } from "../GlobalComponents";
import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

interface FormFieldsTypes {
  updateValue: Dispatch<SetStateAction<string>>;
  value: string;
  label: string;
  style?: React.CSSProperties;
}

const SeeMoreInfoSection: React.FC<{ workShopName: string }> = ({
  workShopName
}) => (
  <Header style={{ marginTop: "24px", fontSize: "20px" }}>
    Click{" "}
    <Link to="/workshops" style={{ color: brightBlue }}>
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
      {/* use https://mailchimp.com/developer/guides/manage-subscribers-with-the-mailchimp-api/ for form API*/}
      <Container maxWidth="md">
        <Header style={{ fontSize: "35px", marginTop: "25px" }}>
          Register for Pi Crafters
        </Header>
        <Divider style={{ marginTop: "25px", marginBottom: "30px" }} />
        {formFields.map(({ label, value, updateValue, style }) => (
          <div style={style}>
            <Input
              onChange={({ target: { value } }) => updateValue(value)}
              value={value}
              placeholder={label}
              disableUnderline
              style={{
                padding: "6px 16px",
                borderRadius: "6px",
                backgroundColor: lightGrey,
                fontSize: "24px",
                color: brightBlue
              }}
            />
          </div>
        ))}
        <FormControl style={{ width: "430px", marginTop: "20px" }}>
          <InputLabel style={{ fontSize: "24px" }}>Program</InputLabel>
          <Select
            onChange={({ target: { value } }) => {
              console.log(value);
              setClassType(`${value}`);
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
    </>
  );
};
