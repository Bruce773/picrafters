import { Container, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Image, PageWrapper } from "../GlobalComponents";
import { Header, MainParagraphText } from "./elements";

const InstructorData = [
  {
    name: "Bruce Johnson",
    imageUrl: "bruce_headshot_square.jpg",
    bio: `Hello! My name is Bruce Johnson. I'm currently a Software Engineer working for Yoga International in Honesdale, PA. I started coding when I was 12 years old using the Python language. After a few years of coding, I picked up the Arduino language and started working with electronics and robotics. Then, in 2015, I started a company called Pi Crafters to help kids and adults enjoy learning computer programing. I'm currently working on a bachelor's degree in Computer Science and plan to earn my master's degree in software engineering. And, I recently graduated from the Hack React Full Stack Web Development Immersive program which specializes in advanced software engineering skills.`
  }
];

const InstructorProfile: React.FC<{
  name: string;
  imageUrl: string;
  bio: string;
}> = ({ name, imageUrl, bio }) => (
  <>
    <Header>{name}</Header>
    <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
    <Grid container>
      <Grid item xs={12} md={6}>
        <Image
          style={{
            borderRadius: "50%",
            textAlign: "left",
            margin: "auto",
            marginBottom: "15px"
          }}
          shortName={imageUrl}
          size={300}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MainParagraphText>{bio}</MainParagraphText>
      </Grid>
    </Grid>
  </>
);

export const AboutPage: React.FC = () => (
  <PageWrapper>
    <Container maxWidth="md">
      {InstructorData.map(({ name, imageUrl, bio }) => (
        <InstructorProfile name={name} imageUrl={imageUrl} bio={bio} />
      ))}
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <Header>About Pi Crafters</Header>
      <Divider style={{ marginBottom: "20px", marginTop: "14px" }} />
      <Header style={{ fontSize: "28px", textAlign: "left" }}>
        Why is it called "Pi Crafters"
      </Header>
      <MainParagraphText>{`One of my very first computers was the Raspberry Pi B+. I learned everything from coding to electronics on that Pi. The Pi even had its own version of Minecraft, which allowed you to play in a world with other Raspberry Pi owners. My three younger brothers and I were avid Minecrafters at the time, so I saved up enough money to buy each of us a Raspberry Pi.

We had so much fun playing Minecraft at our dining room table together that I thought to myself, "I bet other people would enjoy this, too!" So, I went down to my local library that afternoon and asked if I could book one of their rooms for an hour the next week. They said yes! And our first "Pi Crafters" group met the following Wednesday to play Minecraft Pi Edition. I found several tutorials on the Raspberry Pi website that taught you how to modify parts of the game with a popular programming language called Python. So, in the next meeting, I showed everyone how to "hack" their games using code. And the Pi Crafters coding program was borne!`}</MainParagraphText>
    </Container>
  </PageWrapper>
);
