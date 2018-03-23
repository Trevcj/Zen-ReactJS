import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Dash from "../Components/Dash.js"
import About from "../Components/about.js"
import Ourteam from "../Components/our-team.js"

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Dash} />
      <Route path="/about" exact component={About} />
      <Route path="/ourTeam" exact component={Ourteam} />
    </div>
  </BrowserRouter>

);
