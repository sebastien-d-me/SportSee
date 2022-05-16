import * as Call from "../services/Call";

export async function utilsUserInfos(id) {
  return Call.getUserInformations(id).then((response) => { 
    return response.userInfos.firstName;
  });
}