import React from "react";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Typography } from "@material-ui/core";

const VolunteerCard = props => {
  const { person } = props;
  const { firstName, lastName, address, distance, requests } = person;
  return (
    <div style={{ width: "21.5rem", border: "solid", margin: "1rem" }}>
      <Typography>
        <AccountBoxIcon /> {firstName} {lastName}
      </Typography>
      <Typography style={{ marginLeft: "1.8rem" }}>{address}</Typography>
      <Typography style={{ marginLeft: "1.8rem" }}>Requests:</Typography>
      <ul style={{ marginTop: "0rem" }}>
        {requests.map(item => {
          return (
            <li style={{ marginLeft: "1rem" }} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
      <Typography style={{ marginRight: "1rem", textAlign: "right" }}>
        {distance} mi
      </Typography>
    </div>
  );
};

export { VolunteerCard };
