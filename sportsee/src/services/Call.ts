import axios from "axios";
import * as Data from "../assets/mock/data";


/**
 * Get the position of the ID in the Mock
 * @param {*} id
 * @returns {number}
 */
function IDMock(id: any) {
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


/**
 * Export User Infos from the Mock
 * @export
 * @param {*} id
 * @returns {{ calorieCount: any; proteinCount: any; carbohydrateCount: any; lipidCount: any; score: any; firstName: any; }}
 */
export function mockUserInfos(id: any) {
  const positionArray = IDMock(id);
  return {
    calorieCount: (Data.USER_MAIN_DATA[positionArray].keyData.calorieCount).toLocaleString('en-US'),
    proteinCount: Data.USER_MAIN_DATA[positionArray].keyData.proteinCount,
    carbohydrateCount: Data.USER_MAIN_DATA[positionArray].keyData.carbohydrateCount,
    lipidCount: Data.USER_MAIN_DATA[positionArray].keyData.lipidCount,
    score: Data.USER_MAIN_DATA[positionArray].todayScore || Data.USER_MAIN_DATA[positionArray].score,
    firstName: Data.USER_MAIN_DATA[positionArray].userInfos.firstName
  }
}


/**
 * Export User Average Sessions from the Mock
 * @export
 * @param {*} id
 * @returns {{ lundi: any; mardi: any; mercredi: any; jeudi: any; vendredi: any; samedi: any; dimanche: any; }}
 */
export function mockUserAverageSessions(id: any) {
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


/**
 * Export User Activity from the Mock
 * @export
 * @param {*} id
 * @returns {{ jour1: any; jour2: any; jour3: any; jour4: any; jour5: any; jour6: any; jour7: any; }}
 */
export function mockUserActivity(id: any) {
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


/**
 * Export User Performance from the Mock
 * @export
 * @param {*} id
 * @returns {{ cardio: any; energy: any; endurance: any; strength: any; speed: any; intensity: any; }}
 */
export function mockUserPerformance(id: any) {
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



/**
 * API
 * @type {*}
 */
const instance = axios.create({
  baseURL: "http://localhost:3000/user",
  headers: {"X-Custom-Header": "foobar"},
  timeout: 1000
});


/**
 * Export User Infos from the API
 * @async
 * @param {*} id
 * @returns {unknown}
 */
export const getUserInfos = async(id: any) => {
  try {
    const response = await instance.get(`/${id}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
}


/**
 * Export User Activity from the API
 * @async
 * @param {*} id
 * @returns {unknown}
 */
export const getActivity = async(id: any) => {
  try {
    const response = await instance.get(`/${id}/activity`);
    return response.data.data;
  } catch (error) {
    return error;
  }
}


/**
 * Export User Average Sessions from the API
 * @async
 * @param {*} id
 * @returns {unknown}
 */
export const getAverageSessions = async(id: any) => {
  try {
    const response = await instance.get(`/${id}/average-sessions`);
    return response.data.data;
  } catch (error) {
    return error;
  }
}


/**
 * Export User Performance from the API
 * @async
 * @param {*} id
 * @returns {unknown}
 */
export const getUserPerformance = async(id: any) => {
  try {
    const response = await instance.get(`/${id}/performance`);
    return response.data.data;
  } catch (error) {
    return error;
  }
}