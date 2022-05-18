import * as Call from "../services/Call";

/* User Infos */
export async function utilsUserInfos(id) {
  return Call.getUserInfos(id).then((response) => {
    return {
      firstName: response.userInfos.firstName,
      score: response.todayScore*100 || response.score*100,
      calorieCount: (response.keyData.calorieCount).toLocaleString('en-US'),
      proteinCount: response.keyData.proteinCount,
      carbohydrateCount: response.keyData.carbohydrateCount,
      lipidCount: response.keyData.lipidCount
    }
  });
}


/* Activity */
export async function utilsActivity(id) {
  return Call.getActivity(id).then((response) => {
    return {
      jour1: response.sessions[0],
      jour2: response.sessions[1],
      jour3: response.sessions[2],
      jour4: response.sessions[3],
      jour5: response.sessions[4],
      jour6: response.sessions[5],
      jour7: response.sessions[6]
    }
  });
}


/* Average Sessions */
export async function utilsAverageSessions(id) {
  return Call.getAverageSessions(id).then((response) => {
    return {
      lundi: response.sessions[0].sessionLength,
      mardi: response.sessions[1].sessionLength,
      mercredi: response.sessions[2].sessionLength,
      jeudi: response.sessions[3].sessionLength,
      vendredi: response.sessions[4].sessionLength,
      samedi: response.sessions[5].sessionLength,
      dimanche: response.sessions[6].sessionLength,
    }
  });
}


/* User Performance */
export async function utilsUserPerformance(id) {
  return Call.getUserPerformance(id).then((response) => {
    return {
      cardio: response.data[0].value,
      energy: response.data[1].value,
      endurance: response.data[2].value,
      strength: response.data[3].value,
      speed: response.data[4].value,
      intensity: response.data[5].value
    }
  });
}