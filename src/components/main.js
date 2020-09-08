import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import About from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/aboutme' component={About} />
    <Route path='/resume' component={Resume} />
    <Route path='/contact' component={Contact} />
    <Route path='/projects' component={Projects} />
  </Switch>
);

export default Main;
