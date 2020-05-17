import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { brightBlue, lightGrey } from "../colors";

export const StyledTextField = styled(TextField)`
  padding: 6px 16px;
  border-radius: 6px;
  background-color: ${lightGrey};
  font-size: 24px;
  && {
    input {
      padding: 12px;
      color: ${brightBlue};
    }
    .MuiInput-underline:before {
      border-bottom: none;
    }
  }
  width: inherit;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledMultiLineTextField = styled(StyledTextField)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: inherit;

  && {
    textarea {
      padding: 12px;
      color: ${brightBlue};
    }
  }
`;
