import React from "react";

import { DefaultHome } from "../components/home/default-home";
import { VolunteerHome } from "../components/home/volunteer-home";

const Home = () => {
  const typeOfHome = "a";
  return <>{typeOfHome === "a" ? <DefaultHome /> : <VolunteerHome />}</>;
};

export { Home };
