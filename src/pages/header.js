import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box'
import Button from "@material-ui/core/Button";
import Toolbar from '@material-ui/core/Toolbar';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters={true}>
      <Button component={Link} to="/" color="inherit">
        Supply Run
      </Button>
      <Box style={{ flexGrow: 1 }} />
        <Button component={Link} to="login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
