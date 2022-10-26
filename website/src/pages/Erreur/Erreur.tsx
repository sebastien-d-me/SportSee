import "./Erreur.css";
import { NavLink } from "react-router-dom";


/**
 * Display the error page
 * @returns {*}
 */
function Erreur() {
  return (
    <div className="container">
      <span className="erreur-titre">Une erreur est survenue</span>
      <NavLink className="lien-accueil" to={"/"}>
        <button className="btn-accueil">Aller à l'accueil</button>
      </NavLink>
    </div>
  );
}

export default Erreur;
