import React from "react";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Aboutpage } from "./Aboutpage";
import styled from "styled-components";

const MainPageWrapper = styled.div`
  font-family: "Work Sans", sans-serif;
  text-align: center;
  margin-top: 10px;
`;

const App = () => (
  <Router>
    <Navbar />
    <MainPageWrapper>
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route path="/about" render={() => <Aboutpage />} />
      </Switch>
    </MainPageWrapper>
    {/* <Footer /> */}
  </Router>
);

export default App;
