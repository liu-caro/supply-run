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
      <Typography variant="h1" style={{ fontWeight: 900, margin: "3rem 0rem" }}>
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
        variant="h5"
        paragraph={true}
        style={{ margin: "2rem 0rem 1rem" }}
      >
        Our Mission Statement
      </Typography>

      <Typography variant="h4">
        To assist those in need in times of uncertainty.
      </Typography>
      </div>
      </div>
    </div>
  );
};

export { DefaultHome };
