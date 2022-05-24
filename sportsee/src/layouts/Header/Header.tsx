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
      <img alt="logo" className="logo" src={logo} />
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
