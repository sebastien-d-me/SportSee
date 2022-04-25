import "./Prenom.css";
import PropTypes, { InferProps } from "prop-types";

const PrenomPropTypes = {
  prenom: PropTypes.string.isRequired
}

type PrenomPropTypes = InferProps<typeof PrenomPropTypes>;
Prenom.propTypes = PrenomPropTypes;

function Prenom({ prenom }: PrenomPropTypes) {
  return (
    <div className="bonjour">
      <h1>Bonjour <span className="prenom">{prenom}</span></h1>
    </div>
  )
}

export default Prenom;