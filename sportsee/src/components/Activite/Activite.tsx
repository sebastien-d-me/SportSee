import "./Activite.css";
import PropTypes, { InferProps } from "prop-types";


/**
 * Defines the types accepted in this component
 * @type {{ image: any; }}
 */
const ActivitePropTypes = {
  image: PropTypes.string.isRequired
}

/**
 * @typedef {ActivitePropTypes}
 */
type ActivitePropTypes = InferProps<typeof ActivitePropTypes>;
Activite.propTypes = ActivitePropTypes;

/**
 * Display the activity image in the sidebar
 * @param {ActivitePropTypes} { image }
 * @returns
 */
function Activite({ image }: ActivitePropTypes) {
  return (
    <div className="activite">
      <img src={image} alt="activite" />
    </div>
  )
}

export default Activite;