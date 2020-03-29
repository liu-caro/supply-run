import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./pages/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Task } from "./pages/task";
import { Signup } from "./pages/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/task" component={Task} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
