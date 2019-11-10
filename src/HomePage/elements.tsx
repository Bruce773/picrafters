import styled from "styled-components";
import { gold } from "../colors";

export const SecondaryHeader = styled.div<{ color?: string }>`
  margin: auto;
  color: ${({ color }) => (color ? color : gold)};
  font-size: inherit;
  letter-spacing: 3px;
  font-weight: 500;
  text-transform: none;
`;
