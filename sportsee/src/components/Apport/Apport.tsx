import "./Apport.css";
import Calories from "../../assets/img/Components/Apport/Calories.png";
import Proteines from "../../assets/img/Components/Apport/Proteines.png";
import Glucides from "../../assets/img/Components/Apport/Glucides.png";
import Lipides from "../../assets/img/Components/Apport/Lipides.png";
import PropTypes, { InferProps } from "prop-types";

const ApportPropTypes = {
  photo: PropTypes.string.isRequired,
  quantite: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

type ApportPropTypes = InferProps<typeof ApportPropTypes>;
Apport.propTypes = ApportPropTypes;

function Apport({ photo, quantite, type }: ApportPropTypes) {
  let srcImg = "";
  switch(photo) {
    case "calories":
      srcImg = Calories;
      break;
    case "proteines":
      srcImg = Proteines;
      break;
    case "glucides":
      srcImg = Glucides;
      break;
    case "lipides":
      srcImg = Lipides;
      break;
    default:
      break;
  }

  return (
    <div className="apport">
      <div className={`photo-fond fond-${photo}`}>
        <img className="photo-type" src={srcImg} />
      </div>
      <div className="apport-infos">
        <span className="quantite">{quantite}</span>
        <span className="type">{type}</span>
      </div>
    </div>
  );
}

export default Apport;
