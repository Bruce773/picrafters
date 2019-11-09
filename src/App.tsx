import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { RegisterPage } from "./RegisterPage";
import { WorkshopsPage } from "./WorkshopsPage";

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
