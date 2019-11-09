import React, { useState, Dispatch, SetStateAction } from "react";
import Input from "@material-ui/core/Input";
import { lightGrey, darkGrey } from "../colors";

export const RegisterPage: React.FC = () => {
  const [studentsName, setStudentsName] = useState("");

  interface FormFieldsTypes {
    updateValue: Dispatch<SetStateAction<string>>;
    value: string;
    label: string;
  }

  const formFields: FormFieldsTypes[] = [
    {
      label: `Student's Name`,
      value: studentsName,
      updateValue: setStudentsName
    }
  ];

  return (
    <>
      {/* use https://mailchimp.com/developer/guides/manage-subscribers-with-the-mailchimp-api/ for form API*/}
      {formFields.map(({ label, value, updateValue }) => (
        <Input
          onChange={({ target: { value } }) => updateValue(value)}
          value={value}
          placeholder={label}
          disableUnderline
          style={{
            padding: "6px 16px",
            borderRadius: "6px",
            backgroundColor: lightGrey,
            color: darkGrey,
            fontSize: "24px"
          }}
        />
      ))}
    </>
  );
};
