import * as Call from "../services/Call";

/* User Data */
export async function utilsUserInfos(id) {
  return Call.getUserInformations(id).then((response) => {
    return {
      firstName: response.userInfos.firstName,
      calorieCount: response.keyData.calorieCount,
      proteinCount: response.keyData.proteinCount,
      carbohydrateCount: response.keyData.carbohydrateCount,
      lipidCount: response.keyData.lipidCount
    }
  });
}