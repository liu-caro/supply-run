import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { Header } from "./pages/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Task } from "./pages/task";
import { Signup } from "./pages/signup";
import { UserProvider } from "./services/authContext";

const App = () => {
  const [fireBaseId, setFireBaseId] = useState("");
  return (
    <BrowserRouter>
      <UserProvider value={{ fireBaseId, setFireBaseId }}>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/task" component={Task} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
};

export { App };
