import "./Accueil.css";
import { NavLink } from "react-router-dom";

function Accueil() {
  return (
    <div className="container">
      <NavLink to={"/dashboard/12"} className="lien-accueil">
        <button className="btn-accueil">Profil n°12</button>
      </NavLink>
      <NavLink to={"/dashboard/18"} className="lien-accueil">
        <button className="btn-accueil">Profil n°18</button>
      </NavLink>
    </div>
  );
}

export default Accueil;
