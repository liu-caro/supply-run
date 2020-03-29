import React from "react";

import { DefaultHome } from "../components/home/default-home";
import { VolunteerHome } from "../components/home/volunteer-home";

const Home = () => {
  const typeOfHome = "volunteer";
  return (
    <>
      {typeOfHome === "default" ? (
        <DefaultHome />
      ) : typeOfHome === "volunteer" ? (
        <VolunteerHome />
      ) : typeOfHome === "default" ? null : null}
    </>
  );
};

export { Home };
