import React, { useContext } from "react";

import { DefaultHome } from "../components/home/default-home";
import { VolunteerHome } from "../components/home/volunteer-home";

import UserContext from "../services/authContext";

const Home = () => {
  const { fireBaseId } = useContext(UserContext);
  return <>{fireBaseId === "" ? <DefaultHome /> : <VolunteerHome />}</>;
};

export { Home };
