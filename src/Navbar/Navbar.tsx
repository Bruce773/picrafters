import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton, Button } from "@material-ui/core";
import { Link } from "../GlobalComponents";
import { brightBlue } from "../colors";

export const Navbar = () => {
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
      </Toolbar>
    </AppBar>
  );
};
