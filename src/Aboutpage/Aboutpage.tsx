import React from "react";
import { MainParagraphText, Header } from "./elements";
import Grid from "@material-ui/core/Grid";
import { PageWrapper } from "../GlobalComponents";
import { Image } from "../GlobalComponents";
import { Container, Divider } from "@material-ui/core";

const InstructorData = [
  {
    name: "Bruce Johnson",
    imageUrl: "bruce_headshot.jpeg",
    bio: `Hello! My name is Bruce Johnson. I'm currently a Software Engineer working for Yoga International in Honesdale, PA. I started coding when I was 12 years old using the Python language. After a few years, I started a company to help kids and adults enjoy learning computer programing.

My program started with the basics of HTML and CSS. Then, moved on to more advanced coding through the use of the Arduino platform. The Arduino platform is open source and produces both hardware (the Arduino Uno board being a great example) and software (the Arduino IDE). The board can be programmed from the IDE using their language derived from C++.`
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
          style={{ borderRadius: "10px", textAlign: "left", margin: "auto" }}
          shortName={imageUrl}
          size={400}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MainParagraphText>{bio}</MainParagraphText>
      </Grid>
    </Grid>
  </>
);

export const Aboutpage = () => (
  <PageWrapper>
    <Container maxWidth="lg">
      {InstructorData.map(({ name, imageUrl, bio }) => (
        <InstructorProfile name={name} imageUrl={imageUrl} bio={bio} />
      ))}
    </Container>
  </PageWrapper>
);
