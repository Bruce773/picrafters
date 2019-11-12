import styled from "styled-components";
import { gold } from "../colors";

export const Header = styled.div<{ color?: string; fontSize?: string }>`
  margin: auto;
  color: ${({ color }) => (color ? color : gold)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
  letter-spacing: 2px;
  font-weight: 600;
  text-transform: none;
`;
