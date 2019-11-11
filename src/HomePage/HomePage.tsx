import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { brightBlue, darkGrey, gold, lightGrey } from "../colors";
import { Header, Image, Link } from "../GlobalComponents";
import { SecondaryHeader } from "./elements";

export const HomePage: React.FC = () => (
  <Container maxWidth="sm">
    <Box style={{ fontSize: "3vh", textAlign: "center" }}>
      <Header color={darkGrey}>Welcome to Pi Crafters!</Header>
      <Box
        width={{ xs: "74vw", md: "auto" }}
        style={{
          textAlign: "center",
          margin: "auto",
          marginBottom: "20px",
          marginTop: "20px"
        }}
      >
        <Link to="/workshops">
          <Button style={{ marginLeft: "-22px" }}>
            <Paper style={{ width: "inherit", padding: "20px" }}>
              <SecondaryHeader style={{ fontSize: "20px" }} color={brightBlue}>
                Check out our new Weekend Workshops program
              </SecondaryHeader>
              <Image
                shortName="Pi_Crafters_Weekend_Workshops_Logo_Square.png"
                size={300}
              />
            </Paper>
          </Button>
        </Link>
      </Box>
      <Header
        style={{
          fontSize: "2.5vh",
          lineHeight: "24px",
          letterSpacing: "3px",
          marginBottom: "15px",
          fontWeight: 400
        }}
        color={brightBlue}
      >
        Learn software egineering and coding skills from engineers in the field!
        Checkout our new Weekend Workshops on the Workshops page.
      </Header>
      <Link to="/workshops">
        <Button
          style={{ backgroundColor: lightGrey, color: gold }}
          variant="contained"
        >
          Workshops
        </Button>
      </Link>
    </Box>
  </Container>
);
