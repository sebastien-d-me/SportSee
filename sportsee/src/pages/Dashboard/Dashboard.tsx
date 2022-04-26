import "./Dashboard.css";
import Prenom from "../../components/Prenom/Prenom";
import Apport from "../../components/Apport/Apport";
import Score from "../../components/Stats/Score/Score";

function Dashboard() {
  return (
    <div className="container">
      <Prenom prenom="Thomas" />
      <span className="description">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      <div>
        <div className="liste-stats">
          <div>Moyenne</div>
          <div>Toile</div>
          <Score score="0.12"/>
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
