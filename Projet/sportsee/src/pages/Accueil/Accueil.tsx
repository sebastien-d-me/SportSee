import "./Accueil.css";
import { NavLink } from "react-router-dom";


/**
 * Display the home page
 * @returns {*}
 */
function Accueil() {
  return (
    <div className="container">
      <NavLink className="lien-accueil" to={"/dashboard/12"}>
        <button className="btn-accueil">Profil n°12 - Axios</button>
      </NavLink>
      <NavLink className="lien-accueil" to={"/dashboard/18"}>
        <button className="btn-accueil">Profil n°18 - Axios</button>
      </NavLink>
      <NavLink className="lien-accueil" to={"/dashboard-mock/12"}>
        <button className="btn-accueil">Profil n°12 - Mock</button>
      </NavLink>
      <NavLink className="lien-accueil" to={"/dashboard-mock/18"}>
        <button className="btn-accueil">Profil n°18 - Mock</button>
      </NavLink>
    </div>
  );
}

export default Accueil;
