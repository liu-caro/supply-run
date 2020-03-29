import React from "react";
import Grid from "@material-ui/core/Grid";
import { VolunteerCard } from "../volunteer-card/volunteer-card";
import { MapContainer } from "../map/map-component";

const VolunteerHome = () => {
  const sampleList = [
    {
      firstName: "Tommy",
      lastName: "Sun",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "12.4",
      long: "12.4",
      request: "Hello world"
    },
    {
      firstName: "Cari",
      lastName: "Liu",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "12.4",
      long: "12.4",
      request: "Hello world"
    },
    {
      firstName: "Other",
      lastName: "Person",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "12.4",
      long: "12.4",
      request: "Hello world"
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
        {sampleList.map((person) => {
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
