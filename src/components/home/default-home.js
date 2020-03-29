import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DesktopLanding from '../../assets/desktop-landing.jpg';
import MobileLanding from '../../assets/mobile-landing.jpg';

const DefaultHome = () => {
  const imageUrl = window.innerWidth >= 650 ? DesktopLanding : MobileLanding;

  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})`}}>
      <div className="overlay">
      <div style={{ textAlign: "center"}} className="App-content">
        <div style={{ backgroundColor: "rgba(36,130,212,0.85)"}} >
      <Typography variant="h1" style={{ fontWeight: 900, margin: "2rem 3rem" }}>
        SupplyRun
        <ShoppingCartIcon style={{}} />
      </Typography>

      <Button
        component={Link}
        to="/task"
        variant="contained"
        style={{ margin: "0rem 1rem" }}
      >
        In Need?
      </Button>

      <Button
        component={Link}
        to="/signup"
        variant="contained"
        style={{ margin: "0rem 1rem" }}
      >
        Sign up to help
      </Button>

      <Typography
        variant="h3"
        paragraph={true}
        style={{ margin: "3rem 0rem 0.25rem 0rem" }}
      >
        Our Mission Statement
      </Typography>

      <Typography variant="h6" style={{margin: "0rem 0rem 2rem 0rem"}}>
        In these times, .
      </Typography>
      </div>
      </div>
      </div>
    </div>
  );
};

export { DefaultHome };
