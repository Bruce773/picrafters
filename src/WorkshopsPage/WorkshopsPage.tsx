import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import React from "react";
import { brightBlue } from "../colors";
import { Header, Image, ParagraphText } from "../GlobalComponents";

export const WorkshopsPage: React.FC = () => (
  <Container maxWidth="md">
    <Header fontSize="35px">Our Weekend Workshops</Header>
    <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
    <Image
      shortName="Pi_Crafters_Weekend_Workshops_Logo_Square.png"
      size={300}
    />
    <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
    <Header fontSize="24px">Adults Software Engineering (Workshop)</Header>
    <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
    <div style={{ fontSize: "20px", marginBottom: "10px" }}>
      <Header style={{ display: "inline" }}>Ages: </Header>{" "}
      <Header style={{ display: "inline" }} color={brightBlue}>
        15+
      </Header>
    </div>
    <ParagraphText>{`In this exciting and fun paced workshop, you'll learn all the skills you need to start developing software with web technologies. We'll teach you the basics of coding in the JavaScript language along with some of the high level concepts and principles of designing and producing software. 
    
    Some of the skills you'll learn are:`}</ParagraphText>
    <ParagraphText>
      <Grid container>
        <Grid item xs={12} md={6}>
          <ul>
            <li>A working knowledge of HTML and CSS</li>
            <li>JavaScript programing</li>
            <li>
              Basic knowledge and use of React
              <br />a popular front-end JS library
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <ul>
            <li>Basic data structures</li>
            <li>Iteration</li>
            <li>
              A working knowledge of
              <br />
              designing algorithms
            </li>
          </ul>
        </Grid>
      </Grid>
    </ParagraphText>
  </Container>
);
