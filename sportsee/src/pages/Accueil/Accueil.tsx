import "./Accueil.css";
import { NavLink } from "react-router-dom";

/**
 * Display the home page
 * @returns {*}
 */
function Accueil() {
  return (
    <div className="container">
      <NavLink to={"/dashboard/12"} className="lien-accueil">
        <button className="btn-accueil">Profil n°12 - Axios</button>
      </NavLink>
      <NavLink to={"/dashboard/18"} className="lien-accueil">
        <button className="btn-accueil">Profil n°18 - Axios</button>
      </NavLink>
      <NavLink to={"/dashboard-mock/12"} className="lien-accueil">
        <button className="btn-accueil">Profil n°12 - Mock</button>
      </NavLink>
      <NavLink to={"/dashboard-mock/18"} className="lien-accueil">
        <button className="btn-accueil">Profil n°18 - Mock</button>
      </NavLink>
    </div>
  );
}

export default Accueil;
