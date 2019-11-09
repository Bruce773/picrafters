import React from "react";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { WorkshopsPage } from "./WorkshopsPage";
import { RegisterPage } from "./RegisterPage";

const MainPageWrapper = styled.div`
  font-family: "Work Sans", sans-serif;
  text-align: center;
  margin-top: 10px;
`;

const App: React.FC = () => (
  <Router>
    <Navbar />
    <MainPageWrapper>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/workshops" render={() => <WorkshopsPage />} />
        <Route path="/register" render={() => <RegisterPage />} />
      </Switch>
    </MainPageWrapper>
    {/* <Footer /> */}
  </Router>
);

export default App;
