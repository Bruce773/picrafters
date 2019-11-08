import styled from "styled-components";
import { gold } from "../colors";

export const Header = styled.div<{ color?: string }>`
  margin: auto;
  color: ${({ color }) => (color ? color : gold)};
  font-size: inherit;
  letter-spacing: 2px;
  font-weight: 600;
  text-transform: none;
`;

export const SecondaryHeader = styled.div<{ color?: string }>`
  margin: auto;
  color: ${({ color }) => (color ? color : gold)};
  font-size: inherit;
  letter-spacing: 3px;
  font-weight: 500;
  text-transform: none;
`;
