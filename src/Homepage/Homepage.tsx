import React from "react";
import { Header, SecondaryHeader } from "./elements";
import Box from "@material-ui/core/Box";
import { Image, Link } from "../GlobalComponents";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { brightBlue } from "../colors";

export const Homepage = () => (
  <Box fontSize={{ xs: "30px", md: "40px" }}>
    <Header>Welcome to Pi Crafters!</Header>
    <Link to="/workshops">
      <Button
        style={{
          maxWidth: "470px",
          minWidth: "452px",
          marginTop: "20px"
        }}
      >
        <Paper style={{ width: "inherit", padding: "20px" }}>
          <SecondaryHeader style={{ fontSize: "20px" }} color={brightBlue}>
            Check out our new Weekend Workshops program
          </SecondaryHeader>
          <Image
            shortName="Pi_Crafters_Weekend_Workshops_Logo_Square.png"
            size={400}
          />
        </Paper>
      </Button>
    </Link>
  </Box>
);
