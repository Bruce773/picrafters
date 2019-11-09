import { Button, IconButton, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { brightBlue } from "../colors";
import { Link } from "../GlobalComponents";

export const Navbar: React.FC = () => {
  return (
    <AppBar
      style={{
        backgroundColor: "white",
        padding: "0px",
        top: "0px",
        position: "sticky"
      }}
    >
      <Toolbar style={{ color: brightBlue }}>
        <Link to="/">
          <IconButton style={{ padding: "4px" }}>
            <img
              style={{
                maxHeight: "63px",
                minHeight: "5vw",
                borderRadius: "20px"
              }}
              alt="Logo"
              src="https://ik.imagekit.io/3aek1kxt2/pi-crafters/Pi_Crafters_Logo.png?tr=w-200"
            />
          </IconButton>
        </Link>
        <Link to="/about">
          <Button color="inherit">About</Button>
        </Link>
        <Link to="/classes">
          <Button color="inherit">Classes</Button>
        </Link>
        <Link to="/workshops">
          <Button color="inherit">Workshops</Button>
        </Link>
        <Link to="/register">
          <Button color="inherit">Register</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
