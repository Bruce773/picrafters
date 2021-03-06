import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { brightBlue } from "../colors";
import { Link } from "../GlobalComponents";
import { mobileLg, StandardizeUrlString } from "../Utils";
import { NavMenu } from "./NavMenu";

const navItems = ["About", "Workshops", "Register", "Contact Us"];

const NavLinks: React.FC = () => (
  <>
    {navItems.map((itemName: string) => (
      <Link to={`/${StandardizeUrlString(itemName)}`}>
        <Button style={{ color: brightBlue }}>{itemName}</Button>
      </Link>
    ))}
  </>
);

export const Navbar: React.FC = () => {
  const isMobile = useMediaQuery(mobileLg); // Material UI hook
  const [showFullScreenUserMenu, setShowFullScreenUserMenu] = useState(false);

  return (
    <>
      <AppBar
        style={{
          backgroundColor: "white",
          padding: "0px",
        }}
        title="Pi Crafters"
      >
        <Toolbar>
          <Link to="/">
            <IconButton style={{ padding: "4px" }}>
              <img
                style={{
                  maxHeight: "58px",
                  minHeight: "20px",
                  borderRadius: "20px",
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
        navItems={navItems}
        setShow={setShowFullScreenUserMenu}
        show={showFullScreenUserMenu}
      />
    </>
  );
};
