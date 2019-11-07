import React from "react";
import { MainParagraphText } from "./elements";
import Grid from "@material-ui/core/Grid";
import { PageWrapper } from "../GlobalComponents";

export const Aboutpage = () => (
  <PageWrapper>
    <Grid container>
      <Grid item xs={12} md={6}>
        <h2>image_placeholder</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <MainParagraphText>
          Hello! My name is Bruce Johnson. I'm currently a Software Engineer
          working for Yoga International in Honesdale, PA.
        </MainParagraphText>
      </Grid>
    </Grid>
  </PageWrapper>
);
