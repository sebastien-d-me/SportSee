import "./Layout.css";
import PropTypes, { InferProps } from "prop-types";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";

const LayoutPropTypes = {
  children: PropTypes.any.isRequired
}

type LayoutPropTypes = InferProps<typeof LayoutPropTypes>;
Layout.propTypes = LayoutPropTypes;

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