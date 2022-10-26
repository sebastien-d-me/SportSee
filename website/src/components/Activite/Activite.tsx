import "./Activite.css";
import PropTypes, { InferProps } from "prop-types";


/**
 * Defines the types accepted in this component
 * @type {{ image: any; }}
 */
const ActiviteProp = {
  image: PropTypes.string.isRequired
}

/**
 * @typedef {ActivitePropTypes}
 */
type ActivitePropTypes = InferProps<typeof ActiviteProp>;
Activite.propTypes = ActiviteProp;


/**
 * Display the activity image in the sidebar
 * @param {ActivitePropTypes} { image }
 * @returns
 */
function Activite({ image }: ActivitePropTypes) {
  return (
    <div className="activite">
      <img alt="activite" src={image} />
    </div>
  )
}

export default Activite;