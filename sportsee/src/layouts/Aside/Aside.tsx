import "./Aside.css";
import Activite from "../../components/Activite/Activite";
import Yoga from "../../assets/img/Components/Activite/Yoga.png";
import Natation from "../../assets/img/Components/Activite/Natation.png";
import Cyclisme from "../../assets/img/Components/Activite/Cyclisme.png";
import Halterophilie from "../../assets/img/Components/Activite/Halterophilie.png";

function Aside() {
  return (
    <aside>
      <Activite image={Yoga} />
      <Activite image={Natation} />
      <Activite image={Cyclisme} />
      <Activite image={Halterophilie} />
      <span className="copyright">Copyright, SportSee 2022</span>
    </aside>
  );
}

export default Aside;
