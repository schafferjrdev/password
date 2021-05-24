import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Rules from "./Components/Rules";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
