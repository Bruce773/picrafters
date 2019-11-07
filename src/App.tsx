import React from "react";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./Homepage";

const App = () => (
  <Router>
    <Navbar />
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
      </Switch>
    </div>
    {/* <Footer /> */}
  </Router>
);

export default App;
