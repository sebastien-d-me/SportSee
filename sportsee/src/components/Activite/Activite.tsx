import "./Activite.css";
import PropTypes, { InferProps } from "prop-types";

const ActivitePropTypes = {
  image: PropTypes.string.isRequired
}

type ActivitePropTypes = InferProps<typeof ActivitePropTypes>;
Activite.propTypes = ActivitePropTypes;

function Activite({ image }: ActivitePropTypes) {
  return (
    <div className="activite">
      <img src={image} alt="activite" />
    </div>
  )
}

export default Activite;