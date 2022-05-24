import "./Erreur404.css";
import { NavLink } from "react-router-dom";


/**
 * Display the 404 error page
 * @returns {*}
 */
function Erreur404() {
  return (
    <div className="container">
      <NavLink className="lien-accueil" to={"/"}>
        <span>Le profil n'existe pas ou plus</span>
        <button className="btn-accueil">Aller à l'accueil</button>
      </NavLink>
    </div>
  );
}

export default Erreur404;
