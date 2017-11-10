import React from "react";
import { Switch, Route } from "react-router-dom";

import AuthView from "./components/AuthView/AuthView";

export default (
  <Switch>
    <Route path="/auth" component={AuthView} />
  </Switch>
);
