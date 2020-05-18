import styled from "styled-components";
import RadioGroup from "@material-ui/core/RadioGroup";
import { brightBlue, gold } from "../colors";

export const RadioGroupWrapper = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  color: ${brightBlue};
  &&& {
    span.Mui-checked {
      color: ${gold};
    }
  }
`;
