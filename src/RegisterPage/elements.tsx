import Input from "@material-ui/core/Input";
import styled from "styled-components";
import { brightBlue, lightGrey } from "../colors";

export const StyledInput = styled(Input)`
  padding: 6px 16px;
  border-radius: 6px;
  background-color: ${lightGrey};
  font-size: 24px;
  && {
    color: ${brightBlue};
  }
  width: 432px;
`;
