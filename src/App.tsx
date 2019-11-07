import React from "react";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Aboutpage } from "./Aboutpage";

const App = () => (
  <Router>
    <Navbar />
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route path="/about" render={() => <Aboutpage />} />
      </Switch>
    </div>
    {/* <Footer /> */}
  </Router>
);

export default App;
