import React from "react";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { formatPhoneNumber } from "../../services/utils";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "0.5rem"
  }
});

const VolunteerCard = props => {
  const classes = useStyles();
  const { person } = props;
  const { firstName, lastName, address, request, phone } = person;
  const formmatedPhone = formatPhoneNumber(phone);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
          <AccountBoxIcon /> {firstName} {lastName}
        </Typography>
        <Typography style={{ marginLeft: "1.8rem" }}>
          {formmatedPhone}
        </Typography>
        <Typography style={{ marginLeft: "1.8rem" }}>{address}</Typography>
        <Typography style={{ marginLeft: "1.8rem" }}>
          <b>Request: </b> {request}
        </Typography>
        <Typography
          style={{ marginRight: "1rem", textAlign: "right" }}
        ></Typography>
      </CardContent>
    </Card>
  );
};

export { VolunteerCard };
