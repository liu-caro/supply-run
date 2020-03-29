import React from "react";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const DefaultHome = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h1" style={{ fontWeight: 900, margin: "3rem 0rem" }}>
        SupplyRun
        <ShoppingCartIcon style={{}} />
      </Typography>

      <Button component={Link} variant="contained" style={{margin:"0rem 1rem"}}>
        In Need?
      </Button>

      <Button component={Link} variant="contained" style={{margin:"0rem 1rem"}}>
        Sign up to help
      </Button>

      <Typography variant="h5" paragraph={true} style={{ margin: "2rem 0rem 1rem" }}>
        Our Mission Statement
      </Typography>

      <Typography variant="h4">
        To assist those in need in times of uncertainty.
      </Typography>
    </div>
  );
};

export { DefaultHome };
