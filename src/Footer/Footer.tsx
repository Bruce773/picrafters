import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { gold } from "../colors";

export const Footer = () => {
  const currentDate = new Date();

  return (
    <Container maxWidth="lg">
      <Box style={{ textAlign: "center", paddingTop: "20px" }}>
        <Divider />
        <Typography style={{ fontSize: "2vh", color: gold, padding: "20px" }}>
          Copyright {currentDate.getFullYear()} © Pi Crafters
        </Typography>
      </Box>
    </Container>
  );
};
