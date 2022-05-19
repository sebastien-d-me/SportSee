import axios from "axios";
import { Navigate } from 'react-router';
import * as Data from "../assets/mock/data";

function IDMock(id) {
  let positionID = 0;
  switch(Object.values(id)[0]) {
    case "12":
      positionID = 0;
      break;
    case "18":
      positionID = 1;
      break;
    default:
      break;
    }
  return positionID;
}

/* Mock ( a mettre dans utils) */
export function mockUserInfos(id) {
  const positionArray = IDMock(id);
  return {
    calorieCount: (Data.USER_MAIN_DATA[positionArray].keyData.calorieCount).toLocaleString('en-US'),
    proteinCount: Data.USER_MAIN_DATA[positionArray].keyData.proteinCount,
    carbohydrateCount: Data.USER_MAIN_DATA[positionArray].keyData.carbohydrateCount,
    lipidCount: Data.USER_MAIN_DATA[positionArray].keyData.lipidCount,
    score: Data.USER_MAIN_DATA[positionArray].todayScore*100 || Data.USER_MAIN_DATA[positionArray].score*100,
    firstName: Data.USER_MAIN_DATA[positionArray].userInfos.firstName
  }
}

export function mockUserAverageSessions(id) {
  const positionArray = IDMock(id);
  return {
    lundi: Data.USER_AVERAGE_SESSIONS[positionArray].sessions[0].sessionLength,
    mardi: Data.USER_AVERAGE_SESSIONS[positionArray].sessions[1].sessionLength,
    mercredi: Data.USER_AVERAGE_SESSIONS[positionArray].sessions[2].sessionLength,
    jeudi: Data.USER_AVERAGE_SESSIONS[positionArray].sessions[3].sessionLength,
    vendredi: Data.USER_AVERAGE_SESSIONS[positionArray].sessions[4].sessionLength,
    samedi: Data.USER_AVERAGE_SESSIONS[positionArray].sessions[5].sessionLength,
    dimanche: Data.USER_AVERAGE_SESSIONS[positionArray].sessions[6].sessionLength
  }
}

export function mockUserActivity(id) {
  const positionArray = IDMock(id);
  return {
    jour1: Data.USER_ACTIVITY[positionArray].sessions[0],
    jour2: Data.USER_ACTIVITY[positionArray].sessions[1],
    jour3: Data.USER_ACTIVITY[positionArray].sessions[2],
    jour4: Data.USER_ACTIVITY[positionArray].sessions[3],
    jour5: Data.USER_ACTIVITY[positionArray].sessions[4],
    jour6: Data.USER_ACTIVITY[positionArray].sessions[5],
    jour7: Data.USER_ACTIVITY[positionArray].sessions[6]
  }
}

export function mockUserPerformance(id) {
  const positionArray = IDMock(id)
  return {
    cardio: Data.USER_PERFORMANCE[positionArray].data[0].value,
    energy: Data.USER_PERFORMANCE[positionArray].data[1].value,
    endurance: Data.USER_PERFORMANCE[positionArray].data[2].value,
    strength: Data.USER_PERFORMANCE[positionArray].data[3].value,
    speed: Data.USER_PERFORMANCE[positionArray].data[4].value,
    intensity: Data.USER_PERFORMANCE[positionArray].data[5].value
  }
}



/* API */
const instance = axios.create({
  baseURL: "http://localhost:3000/user",
  headers: {"X-Custom-Header": "foobar"},
  timeout: 1000
});

/* User Infos */
export const getUserInfos = async(id) => {
  try {
    const response = await instance.get(`/${id}`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}

/* Activity */
export const getActivity = async(id) => {
  try {
    const response = await instance.get(`/${id}/activity`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}

/* Average Sessions */
export const getAverageSessions = async(id) => {
  try {
    const response = await instance.get(`/${id}/average-sessions`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}

/* User Performance */
export const getUserPerformance = async(id) => {
  try {
    const response = await instance.get(`/${id}/performance`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}