import "./Erreur404.css";
import { NavLink } from "react-router-dom";

function Erreur404() {
  return (
    <div className="container">
      <NavLink to={"/"} className="lien-accueil">
        <span>Le profil n'existe pas ou plus</span>
        <button className="btn-accueil">Aller à l'accueil</button>
      </NavLink>
    </div>
  );
}

export default Erreur404;
