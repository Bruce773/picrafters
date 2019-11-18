import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import { brightBlue, gold, lightGrey } from "../colors";
import { Header, Image, Link, ParagraphText } from "../GlobalComponents";

export const WorkshopsPage: React.FC = () => {
  const hash = window.location.hash;
  const elementWithMatchingId = document.getElementById(
    hash.slice(1, hash.length)
  );

  useEffect(() => {
    if (hash && elementWithMatchingId) {
      console.log(elementWithMatchingId);
      elementWithMatchingId.scrollIntoView({ behavior: "smooth" });
    }
  }, [elementWithMatchingId]);

  return (
    <Container maxWidth="md">
      <Header fontSize="35px">Our Weekend Workshops</Header>
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <Image
        shortName="Pi_Crafters_Weekend_Workshops_Logo_Square.png"
        size={300}
      />
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <Header fontSize="24px">Info</Header>
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <div
        style={{ fontSize: "24px", marginBottom: "10px", marginTop: "10px" }}
      >
        <Header style={{ display: "inline" }}>Starting date: </Header>{" "}
        <Header style={{ display: "inline" }} color={brightBlue}>
          January 11th, 2020
        </Header>
      </div>
      <div style={{ lineHeight: "45px" }}>
        <ParagraphText
          style={{ textAlign: "center" }}
        >{`Both workshops will be held on the second floor of The Stourbridge Project building located in Honesdale, PA.`}</ParagraphText>
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
        <div style={{ marginTop: "10px", marginBottom: "30px" }}>
          <Header fontSize="30px">Register for either workshop</Header>
          <Link to="/register">
            <Button
              style={{
                backgroundColor: lightGrey,
                color: gold,
                fontSize: "20px",
                marginTop: "10px"
              }}
              variant="contained"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
      {/* --------------Kids Workshop-------------- */}
      <div id="kids-workshop" />
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <Header fontSize="24px">Kids Robotics (Workshop)</Header>
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <div style={{ fontSize: "20px", marginBottom: "10px" }}>
        <Header style={{ display: "inline" }}>Ages: </Header>{" "}
        <Header style={{ display: "inline" }} color={brightBlue}>
          10-14
        </Header>
        <br />
        <br />
        <Header style={{ display: "inline" }}>Price (6 months): </Header>{" "}
        <Header style={{ display: "inline" }} color={brightBlue}>
          $100
        </Header>
      </div>
      <ParagraphText>{`In this exciting and creative workshop, kids will explore the world of robotics while also learning the basics of coding and circuit design. We'll use several fun tools designed by the industries leading brands to help kids learn electronics. Some of these tools include Little Bits, mBot, and Ozobots. After a few weeks of learning the basics, kids will put their imaginations to the test by building their own robots 🤖 from scratch then racing them!
    
    Some of the skills kids will learn are:`}</ParagraphText>
      <ParagraphText>
        <Grid container>
          <Grid item xs={12} md={6}>
            <ul>
              <li>The basics of how electronic circuits work</li>
              <li>How to build their own circuits using Little Bits</li>
              <li>
                How to build circuits using breadboarding one of the most
                popular tools for circuit prototype design
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <ul>
              <li>The basics of computer programming using Scratch</li>
              <li>
                The basics of computer programming using the Arduino language
                (C++)
              </li>
              <li>
                How to build and program robots using the Arduino board and
                language
              </li>
            </ul>
          </Grid>
        </Grid>
        <div style={{ textAlign: "center" }}>{`And so much more!`}</div>
        <Header style={{ textAlign: "center" }}>
          **No prior coding or electronic experience needed. The only thing they
          should bring is whatever helps them take "notes". This can be a blank
          page and some coloured markers... Anything that will help them
          remember what we talk about in class **
        </Header>
      </ParagraphText>
      {/* --------------Adults Workshop-------------- */}
      <div id="adults-workshop" />
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <Header fontSize="24px">Adults Software Engineering (Workshop)</Header>
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <div style={{ fontSize: "20px", marginBottom: "10px" }}>
        <Header style={{ display: "inline" }}>Ages: </Header>{" "}
        <Header style={{ display: "inline" }} color={brightBlue}>
          15+
        </Header>
        <br />
        <br />
        <Header style={{ display: "inline" }}>Price (6 months): </Header>{" "}
        <Header style={{ display: "inline" }} color={brightBlue}>
          $200
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
          **The only things you'll need to bring with you are a laptop
          (preferably a Mac or Linux machine) and a way to keep notes.**
        </Header>
      </ParagraphText>
    </Container>
  );
};
