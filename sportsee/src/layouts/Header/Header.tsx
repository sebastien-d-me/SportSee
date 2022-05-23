import "./Header.css";
import logo from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

/**
 * Display the header
 * @returns {*}
 */
function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="/">Réglage</NavLink>
        <NavLink to="/">Communauté</NavLink>
      </nav>
    </header>
  );
}

export default Header;
