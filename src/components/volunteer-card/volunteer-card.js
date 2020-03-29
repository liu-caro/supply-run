import React from "react";

import PersonIcon from "@material-ui/icons/Person";
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
  const formattedPhone = formatPhoneNumber(phone);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
          <PersonIcon /> {firstName} {lastName}
        </Typography>
        <Typography style={{ marginLeft: "1.8rem" }}>
          {formattedPhone}
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
