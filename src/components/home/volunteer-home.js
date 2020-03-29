import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { VolunteerCard } from "../volunteer-card/volunteer-card";
import { MapContainer } from "../map/map-component";

import { findAllTasks } from "../../services/tasks";

const VolunteerHome = () => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const { data } = await findAllTasks();
      setDataList(data);
    };

    getTasks();
  }, []);

  const sampleList = [
    {
      firstName: "Tommy",
      lastName: "Sun",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "29.570",
      long: "-98.61",
      request: "Hello world"
    },
    {
      firstName: "Cari",
      lastName: "Liu",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "29.5916",
      long: "-98.640",
      request: "Hello world"
    },
    {
      firstName: "Other",
      lastName: "Person",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "29.573",
      long: "-98.63",
      request: "Hello world"
    },
    {
      firstName: "Tommy",
      lastName: "Sun",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "36.188725",
      long: "-115.276",
      request: "Hello world"
    },
    {
      firstName: "Cari",
      lastName: "Liu",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "36.203",
      long: "-115.303",
      request: "Hello world"
    },
    {
      firstName: "Other",
      lastName: "Person",
      phone: "1234567890",
      address: "124 Fake Address",
      lat: "36.206",
      long: "-115.282",
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
      >
        {dataList.map(person => {
          const { firstName, lastName, phone } = person;
          return (
            <VolunteerCard
              key={`${firstName}-${lastName}-${phone}`}
              person={person}
            />
          );
        })}
      </Grid>

      <Grid container={true} xs={9}>
        <MapContainer tasks={sampleList}/>
      </Grid>
    </Grid>
  );
};

export { VolunteerHome };
