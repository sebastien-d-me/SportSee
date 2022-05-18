import "./Apport.css";
import Calories from "../../assets/img/Components/Apport/Calories.png";
import Proteines from "../../assets/img/Components/Apport/Proteines.png";
import Glucides from "../../assets/img/Components/Apport/Glucides.png";
import Lipides from "../../assets/img/Components/Apport/Lipides.png";
import PropTypes, { InferProps } from "prop-types";

const ApportProp = {
  photo: PropTypes.string.isRequired,
  quantiteStr: PropTypes.string,
  quantite: PropTypes.number,
  type: PropTypes.string.isRequired
}

type ApportPropTypes = InferProps<typeof ApportProp>;
Apport.propTypes = ApportProp;

function Apport({ photo, quantiteStr, quantite, type }: ApportPropTypes) {
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
        <img className="photo-type" src={srcImg} alt="apport" />
      </div>
      <div className="apport-infos">
        <span className="quantite">{quantite || quantiteStr }{unite}</span>
        <span className="type">{type}</span>
      </div>
    </div>
  );
}

export default Apport;
