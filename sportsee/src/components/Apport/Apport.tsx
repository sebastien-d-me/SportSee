import "./Apport.css";
import PropTypes, { InferProps } from "prop-types";
import Calories from "../../assets/img/Components/Apport/Calories.png";
import Proteines from "../../assets/img/Components/Apport/Proteines.png";
import Glucides from "../../assets/img/Components/Apport/Glucides.png";
import Lipides from "../../assets/img/Components/Apport/Lipides.png";


/**
 * Defines the types accepted in this component
 * @type {{ photo: any; quantiteStr: any; quantite: any; type: any; }}
 */
const ApportProp = {
  photo: PropTypes.string.isRequired,
  quantiteStr: PropTypes.string,
  quantite: PropTypes.number,
  type: PropTypes.string.isRequired
}

/**
 * @typedef {ApportPropTypes}
 */
type ApportPropTypes = InferProps<typeof ApportProp>;
Apport.propTypes = ApportProp;


/**
 * Displays the different inputs with their image and value
 * @param {ApportPropTypes} { photo, quantite, quantiteStr, type }
 * @returns
 */
function Apport({ photo, quantite, quantiteStr, type }: ApportPropTypes) {
  /**
   * Adds according to the type the corresponding photo and its unit
   */
  let srcImg = "";
  let unite = "";
  switch(photo) {
    case "calories":
      srcImg = Calories;
      unite = "kCal";
      break;
    case "proteines":
      srcImg = Proteines;
      unite = "g";
      break;
    case "glucides":
      srcImg = Glucides;
      unite = "g";
      break;
    case "lipides":
      srcImg = Lipides;
      unite = "g";
      break;
    default:
      break;
  }

  return (
    <div className="apport">
      <div className={`photo-fond fond-${photo}`}>
        <img alt="apport" className="photo-type" src={srcImg} />
      </div>
      <div className="apport-infos">
        <span className="quantite">{quantite || quantiteStr }{unite}</span>
        <span className="type">{type}</span>
      </div>
    </div>
  );
}

export default Apport;
