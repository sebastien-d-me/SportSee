import * as Call from "./Call";


/**
 * Export User Infos from the API
 * @export
 * @async
 * @param {*} id
 * @returns {unknown}
 */
export async function utilsUserInfos(id: any) {
  return Call.getUserInfos(id).then((response) => {
    try {
      return {
        erreur: "",
        firstName: response.userInfos.firstName,
        score: response.todayScore*100 || response.score*100,
        calorieCount: (response.keyData.calorieCount).toLocaleString('en-US'),
        proteinCount: response.keyData.proteinCount,
        carbohydrateCount: response.keyData.carbohydrateCount,
        lipidCount: response.keyData.lipidCount
      }
    } catch(err) {
      return {
        erreur: "erreur",
        firstName: "",
        score: 0,
        calorieCount: 0,
        proteinCount: 0,
        carbohydrateCount: 0,
        lipidCount: 0
      }
    }
  });
}


/**
 * Export User Activity from the API
 * @export
 * @async
 * @param {*} id
 * @returns {unknown}
 */
export async function utilsActivity(id: any) {
  return Call.getActivity(id).then((response) => {
    try {
      return {
        jour1: response.sessions[0],
        jour2: response.sessions[1],
        jour3: response.sessions[2],
        jour4: response.sessions[3],
        jour5: response.sessions[4],
        jour6: response.sessions[5],
        jour7: response.sessions[6]
      }
    } catch(err) {
      return {
        jour1: 0,
        jour2: 0,
        jour3: 0,
        jour4: 0,
        jour5: 0,
        jour6: 0,
        jour7: 0
      }
    }
  });
}


/**
 * Export User Average Sessions from the API
 * @export
 * @async
 * @param {*} id
 * @returns {unknown}
 */
export async function utilsAverageSessions(id: any) {
  return Call.getAverageSessions(id).then((response) => {
    try {
      return {
        lundi: response.sessions[0].sessionLength,
        mardi: response.sessions[1].sessionLength,
        mercredi: response.sessions[2].sessionLength,
        jeudi: response.sessions[3].sessionLength,
        vendredi: response.sessions[4].sessionLength,
        samedi: response.sessions[5].sessionLength,
        dimanche: response.sessions[6].sessionLength,
      }
    } catch(err) {
      return {
        lundi: 0,
        mardi: 0,
        mercredi: 0,
        jeudi: 0,
        vendredi: 0,
        samedi: 0,
        dimanche: 0,
      }
    }
  });
}


/**
 * Export User Performance from the API
 * @export
 * @async
 * @param {*} id
 * @returns {unknown}
 */
export async function utilsUserPerformance(id: any) {
  return Call.getUserPerformance(id).then((response) => {
    try {
      return {
        cardio: response.data[0].value,
        energy: response.data[1].value,
        endurance: response.data[2].value,
        strength: response.data[3].value,
        speed: response.data[4].value,
        intensity: response.data[5].value
      }
    } catch(err) {
      return {
        cardio: 0,
        energy: 0,
        endurance: 0,
        strength: 0,
        speed: 0,
        intensity: 0
      }
    }
  });
}