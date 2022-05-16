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

function Dashboard() {
  const {id} = useParams();
  const [userInfos, setUserInfos] = useState<string>("")

  useEffect(() => {
    Utils.utilsUserInfos(id).then((response) => {
        setUserInfos(response);      
    });
  }, []);

  return (
    <div className="container">
      <Prenom prenom={userInfos} />
      <span className="description">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      <div>
        <div className="liste-stats">
          <Quotidien datas={[]}/>
          <div className="col-stats">
            <Moyenne lundi={30} mardi={40} mercredi={50} jeudi={30} vendredi={30} samedi={50} dimanche={50} />
            <Toile cardio={200} energy={240} endurance={80} strength={80} speed={220} intensity={110} />
            <Score score={0.12} />
          </div>
        </div>
        <div className="liste-apports">
          <Apport photo="calories" quantite="1,930kCal" type="Calories" />
          <Apport photo="proteines" quantite="155g" type="Protéines" />
          <Apport photo="glucides" quantite="290g" type="Glucides" />
          <Apport photo="lipides" quantite="50g" type="Lipides" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
