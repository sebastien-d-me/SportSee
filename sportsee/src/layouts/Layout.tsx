import "./Layout.css";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";

type LayoutProps = {
  children: any;
};

export function Layout({ children }: LayoutProps) {
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