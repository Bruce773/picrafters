import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Dispatch, SetStateAction, useState } from "react";
import { brightBlue } from "../colors";
import { Link } from "../GlobalComponents";
import { mobileLg } from "../Utils";
import { MenuWrapper, StyledNavMenuLink } from "./elements";

const NavItems = ["About", "Classes", "Workshops", "Register"];

const NavLinks: React.FC = () => (
  <>
    {NavItems.map((itemName: string) => (
      <Link to={`/${itemName.toLowerCase()}`}>
        <Button style={{ color: brightBlue }}>{itemName}</Button>
      </Link>
    ))}
  </>
);

const NavMenu: React.FC<{
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}> = ({ show, setShow }) => (
  <ClickAwayListener
    // touchEvent={!show && show}
    mouseEvent={!show && show}
    onClickAway={() => setShow(false)}
  >
    <MenuWrapper show={show}>
      {NavItems.map((itemName: string) => (
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

export const Navbar: React.FC = () => {
  const isMobile = useMediaQuery(mobileLg); // Material UI hook
  const [showFullScreenUserMenu, setShowFullScreenUserMenu] = useState(false);

  return (
    <>
      <AppBar
        style={{
          backgroundColor: "white",
          padding: "0px"
        }}
      >
        <Toolbar>
          <Link to="/">
            <IconButton style={{ padding: "4px" }}>
              <img
                style={{
                  maxHeight: "58px",
                  minHeight: "5vw",
                  borderRadius: "20px"
                }}
                alt="Logo"
                src="https://ik.imagekit.io/3aek1kxt2/pi-crafters/Pi_Crafters_Logo.png?tr=w-200"
              />
            </IconButton>
          </Link>
          {!isMobile ? (
            <NavLinks />
          ) : (
            <IconButton
              onClick={() => setShowFullScreenUserMenu(!showFullScreenUserMenu)}
              style={{ textAlign: "right", marginLeft: "auto" }}
            >
              <MenuIcon style={{ height: "30px", width: "30px" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <NavMenu
        setShow={setShowFullScreenUserMenu}
        show={showFullScreenUserMenu}
      />
    </>
  );
};
