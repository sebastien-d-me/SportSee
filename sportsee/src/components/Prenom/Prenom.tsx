import "./Prenom.css";
import PropTypes, { InferProps } from "prop-types";


/**
 * Defines the types accepted in this component
 * @type {{ prenom: any; }}
 */
const PrenomProp = {
  prenom: PropTypes.string
}

/**
 * @typedef {PrenomPropTypes}
 */
type PrenomPropTypes = InferProps<typeof PrenomProp>;
Prenom.propTypes = PrenomProp;


/**
 * Displays the user's first name
 * @param {PrenomPropTypes} { prenom }
 * @returns
 */
function Prenom({ prenom }: PrenomPropTypes) {
  return (
    <div className="bonjour">
      <h1 className="prenom-titre">Bonjour <span className="prenom-valeur">{prenom}</span></h1>
    </div>
  )
}

export default Prenom;