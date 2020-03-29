import React from "react";
import Grid from "@material-ui/core/Grid";
import { VolunteerCard } from "../volunteer-card/volunteer-card";
import { MapContainer } from "../map-component";

const VolunteerHome = () => {
  const sampleList = [
    {
      firstName: "Tommy",
      lastName: "Sun",
      address: "124 Fake Address",
      requests: ["bread", "pb&j", "cogs"],
      distance: 2.6
    },
    {
      firstName: "Cari",
      lastName: "Liu",
      address: "124 Fake Address",
      requests: ["food1", "haha&j", "asdf"],
      distance: 4.3
    },
    {
      firstName: "Person",
      lastName: "Yes",
      address: "124 Fake Address",
      requests: ["ahhh", "ahhh&j", "ahhh"],
      distance: 8.9
    }
  ];
  return (
    <Grid container={true}>
      <Grid
        container={true}
        xs={3}
        direction="column"
        justiy="flex-start"
        alignItems="flex-start"
        style={{ borderRight: "solid" }}
      >
        {sampleList.map(person => {
          return <VolunteerCard person={person} />;
        })}
      </Grid>

      <Grid container={true} xs={9}>
        <MapContainer />
      </Grid>
    </Grid>
  );
};

export { VolunteerHome };
