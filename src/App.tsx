import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import styled from "styled-components";
import { AboutPage } from "./AboutPage";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { RegisterPage } from "./RegisterPage";
import { WorkshopsPage } from "./WorkshopsPage";

const MainPageWrapper = styled.div`
  font-family: "Work Sans", sans-serif;
  text-align: center;
  margin-top: 12vh;
`;

const App: React.FC = () => (
  <Router>
    <ScrollToTop>
      <Navbar />
      <MainPageWrapper>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/workshops" render={() => <WorkshopsPage />} />
          <Route path="/register" render={() => <RegisterPage />} />
        </Switch>
      </MainPageWrapper>
      <Footer />
    </ScrollToTop>
  </Router>
);

export default App;
