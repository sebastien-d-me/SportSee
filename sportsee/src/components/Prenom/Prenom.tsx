import "./Prenom.css";
import PropTypes, { InferProps } from "prop-types";

const PrenomProp = {
  prenom: PropTypes.string
}

type PrenomPropTypes = InferProps<typeof PrenomProp>;
Prenom.propTypes = PrenomProp;

function Prenom({ prenom }: PrenomPropTypes) {
  return (
    <div className="bonjour">
      <h1 className="prenom-titre">Bonjour <span className="prenom-valeur">{prenom}</span></h1>
    </div>
  )
}

export default Prenom;