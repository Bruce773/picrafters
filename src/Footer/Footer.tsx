import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";
import { brightBlue, gold } from "../colors";
import { Link } from "../GlobalComponents";

export const Footer = () => {
  const currentDate = new Date();

  return (
    <Container maxWidth="lg" style={{ marginBottom: "15px" }}>
      <Box style={{ textAlign: "center", paddingTop: "20px" }}>
        <Divider />
        <Typography
          style={{
            fontSize: "2vh",
            color: gold,
            padding: "20px",
            paddingBottom: "0px"
          }}
        >
          Copyright {currentDate.getFullYear()} © Pi Crafters
        </Typography>
        <a
          style={{ display: "inline", color: brightBlue }}
          href="https://www.facebook.com/picrafters4u/"
          target="_blank"
        >
          <FacebookIcon color="inherit" fontSize="large" />
        </a>
      </Box>
    </Container>
  );
};
