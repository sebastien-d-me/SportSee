import "./Layout.css";
import PropTypes, { InferProps } from "prop-types";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";


/**
 * Defines the types accepted in this component
 * @type {{ children: any; }}
 */
const LayoutPropTypes = {
  children: PropTypes.any.isRequired
}

/**
 * @typedef {LayoutPropTypes}
 */
type LayoutPropTypes = InferProps<typeof LayoutPropTypes>;
Layout.propTypes = LayoutPropTypes;

/**
 * Display the layout
 * @param {LayoutPropTypes} { children }
 * @returns
 */
function Layout({ children }: LayoutPropTypes) {
  return (
    <>
      <Header />
      <main>
        <Aside />
        {children}
      </main>
    </>
  )
}

export default Layout;