import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import React, { Dispatch, SetStateAction } from "react";
import { brightBlue } from "../colors";
import { MenuWrapper, StyledNavMenuLink } from "./elements";

export const NavMenu: React.FC<{
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  navItems: string[];
}> = ({ show, setShow, navItems }) => (
  <ClickAwayListener
    mouseEvent={!show && show}
    onClickAway={() => setShow(false)}
  >
    <MenuWrapper show={show}>
      {navItems.map((itemName: string) => (
        <StyledNavMenuLink
          onClick={() => setShow(false)}
          to={`/${itemName.toLowerCase()}`}
        >
          <Button style={{ color: brightBlue, width: "100%" }}>
            {itemName}
          </Button>
        </StyledNavMenuLink>
      ))}
    </MenuWrapper>
  </ClickAwayListener>
);
