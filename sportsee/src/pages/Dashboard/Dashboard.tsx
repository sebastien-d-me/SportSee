import "./Dashboard.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as Utils from "../../services/Utils";
import Prenom from "../../components/Prenom/Prenom";
import Quotidien from "../../components/Stats/Quotidien/Quotidien";
import Moyenne from "../../components/Stats/Moyenne/Moyenne";
import Toile from "../../components/Stats/Toile/Toile";
import Score from "../../components/Stats/Score/Score";
import Apport from "../../components/Apport/Apport";
import { Navigate } from "react-router-dom";

/**
 * Display the dashboard
 * @returns {*}
 */
function Dashboard() {
  /* Get ID */
  const { id } = useParams();
  const [erreur, setErreur] = useState(false);
  type id = string | undefined;

  /**
   * User Infos : Interfaces - State
   * @interface interfaceUserInfos
   * @typedef {interfaceUserInfos}
   */
  interface interfaceUserInfos {
    erreur: string,
    firstName: string,
    score: number,
    calorieCount: string,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
  }
  const [userInfos, setUserInfos] = useState<interfaceUserInfos>();

  /**
   * Activity : Interfaces - State
   * @interface interfaceActivitySessions
   * @typedef {interfaceActivitySessions}
   */
  interface interfaceActivitySessions {
    jour1: object,
    jour2: object,
    jour3: object,
    jour4: object,
    jour5: object,
    jour6: object,
    jour7: object
  }
  const [activity, setActivity] = useState<interfaceActivitySessions>();

  /**
   * Average Sessions : Interfaces - State
   * @interface interfaceAverageSessions
   * @typedef {interfaceAverageSessions}
   */
  interface interfaceAverageSessions {
    lundi: number,
    mardi: number,
    mercredi: number,
    jeudi: number,
    vendredi: number,
    samedi: number,
    dimanche: number,
  }
  const [averageSessions, setAverageSessions] = useState<interfaceAverageSessions>();

  /**
   * User Performance : Interfaces - State
   * @interface interfaceUserPerformance
   * @typedef {interfaceUserPerformance}
   */
  interface interfaceUserPerformance {
    cardio: number,
    energy: number,
    endurance: number,
    strength: number,
    speed: number,
    intensity: number
  }
  const [userPerformance, setUserPerformance] = useState<interfaceUserPerformance>();

  /* Use effect */
  useEffect(() => {
    /* User Infos */
    Utils.utilsUserInfos(id).then((response) => {
      setUserInfos(response);   
      if(response.erreur == "erreur") {
        setErreur(true);
      }
    });

    /* Activity */
    Utils.utilsActivity(id).then((response) => {
      setActivity(response);   
    });

    /* Average Sessions */
    Utils.utilsAverageSessions(id).then((response) => {
      setAverageSessions(response);   
    });

    /* User Performance */
    Utils.utilsUserPerformance(id).then((response) => {
      setUserPerformance(response);   
    });
  }, [id]);

  if(erreur === true) return <Navigate to="/404" />  

  return (
    console.log(userInfos),
    <div className="container">
      <Prenom prenom={userInfos?.firstName} />
      <span className="description">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      <div>
        <div className="liste-stats">
          <Quotidien jour1={activity?.jour1} jour2={activity?.jour2} jour3={activity?.jour3} jour4={activity?.jour4} jour5={activity?.jour5} jour6={activity?.jour6} jour7={activity?.jour7} />
          <div className="col-stats">
            <Moyenne lundi={averageSessions?.lundi} mardi={averageSessions?.mardi} mercredi={averageSessions?.mercredi} jeudi={averageSessions?.jeudi} vendredi={averageSessions?.vendredi} samedi={averageSessions?.samedi} dimanche={averageSessions?.dimanche} />
            <Toile cardio={userPerformance?.cardio} energy={userPerformance?.energy} endurance={userPerformance?.endurance} strength={userPerformance?.strength} speed={userPerformance?.speed} intensity={userPerformance?.intensity} />
            <Score score={userInfos?.score} />
          </div>
        </div>
        <div className="liste-apports">
          <Apport photo="calories" quantiteStr={userInfos?.calorieCount} type="Calories" />
          <Apport photo="proteines" quantite={userInfos?.proteinCount} type="Protéines" />
          <Apport photo="glucides" quantite={userInfos?.carbohydrateCount} type="Glucides" />
          <Apport photo="lipides" quantite={userInfos?.lipidCount} type="Lipides" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
