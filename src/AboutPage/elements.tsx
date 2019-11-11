import styled from "styled-components";
import { brightBlue, gold } from "../colors";

export const Header = styled.div`
  margin: auto;
  color: ${gold};
  font-size: 38px;
  letter-spacing: 2px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const MainParagraphText = styled.div`
  color: ${brightBlue};
  font-size: 2.2vh;
  white-space: pre-wrap;
  line-height: 1.4;
  text-align: left;
`;
