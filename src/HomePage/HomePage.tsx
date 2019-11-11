import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { brightBlue, darkGrey } from "../colors";
import { Header, Image, Link } from "../GlobalComponents";
import { SecondaryHeader } from "./elements";

export const HomePage: React.FC = () => (
  <Box fontSize={{ xs: "30px", md: "40px" }}>
    <Header color={darkGrey}>Welcome to Pi Crafters!</Header>
    {/* <Link to="/workshops">
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
    </Link> */}
  </Box>
);