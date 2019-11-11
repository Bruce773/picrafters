import styled from "styled-components";
import { lightGrey, solidDarkGrey } from "../colors";
import { Link } from "../GlobalComponents";

export const MenuWrapper = styled.div<{ show: boolean }>`
  height: fit-content;
  width: 96vw;
  background-color: ${solidDarkGrey};
  margin-top: 17%;
  padding: 3px;
  position: fixed;
  z-index: 999999;
  border-radius: 25px;
  top: 0;
  margin-left: 6px;
  padding-top: 18px;
  padding-bottom: 18px;
  display: ${({ show }) => (show ? "" : "none")};
`;

export const StyledNavMenuLink = styled(Link)`
  display: block;
  height: 40px;
  border-radius: 10px;
  margin: 10px 10px;
  background-color: ${lightGrey};
`;
