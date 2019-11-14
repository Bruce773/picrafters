import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
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
    <div style={{ lineHeight: "35px" }}>
      <Header fontSize="24px">Location and times of both workshops</Header>
      <ParagraphText>{`Both workshops will be held on the second floor of The Stourbridge Project building located in Honesdale, PA.`}</ParagraphText>
      <Header fontSize="24px" style={{ display: "inline" }}>
        Location:{" "}
      </Header>{" "}
      <Header style={{ display: "inline" }} color={brightBlue}>
        {"The Stourbridge Project - 646 Park Street, Honesdale, PA. 18431"}
      </Header>
      <br />
      <Header fontSize="24px" style={{ display: "inline" }}>
        Times:{" "}
      </Header>{" "}
      <Header style={{ display: "inline" }} color={brightBlue}>
        {"Kids Workshop - 2:00 PM to 3:00 PM"}
      </Header>
      <Header
        color={brightBlue}
      >{`Adults Workshop - 3:15 PM to 4:45 PM`}</Header>
    </div>
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
              algorithmic design
            </li>
          </ul>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center" }}>{`And so much more!`}</div>
      <Header style={{ textAlign: "center" }}>
        **The only things you'll need to bring with you are a laptop and a way
        to keep notes.**
      </Header>
    </ParagraphText>
  </Container>
);
