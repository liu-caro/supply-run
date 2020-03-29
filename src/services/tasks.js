import axios from "axios";

const SERVER_URL = "http://localhost:4000/api";
const postHeaders = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
};

const createVolunteer = async volunteer => {
  return await axios.post(
    SERVER_URL + "/createVolunteer",
    { volunteer },
    postHeaders
  );
};

const createTask = async task => {
  return await axios.post(SERVER_URL + "/createTask", { task }, postHeaders);
};

// Take in VolunteerUUID and the Task Object
const bindTask = async (volunteerUUID, taskId) => {
  return await axios.post(
    SERVER_URL + "/bindTask",
    { volunteerUUID, taskId },
    postHeaders
  );
};

const unbindTask = async volunteerUUID => {
  return await axios.post(
    SERVER_URL + "/unbindTask",
    { volunteerUUID },
    postHeaders
  );
};

const findAllTasks = async () => {
  return await axios.get(SERVER_URL + "/findAllTasks");
};

export {
  bindTask,
  unbindTask,
  createTask,
  createVolunteer,
  findAllTasks
};
