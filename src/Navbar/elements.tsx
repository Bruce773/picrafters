import styled from "styled-components";
import { lightGrey } from "../colors";
import { Link } from "../GlobalComponents";

export const MenuWrapper = styled.div<{ show: boolean }>`
  height: 50vh;
  width: 100vw;
  background-color: grey;
  margin-top: 17%;
  padding: 3px;
  position: fixed;
  z-index: 999999;
  border-radius: 25px;
  top: 0;
  margin-left: 3px;
  padding-top: 18px;
  display: ${({ show }) => (show ? "" : "none")};
`;

export const StyledNavMenuLink = styled(Link)`
  display: block;
  height: 40px;
  borderradius: 10px;
  margin: 10px 10px;
  background-color: ${lightGrey};
`;
