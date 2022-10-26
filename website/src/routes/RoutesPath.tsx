import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Accueil from "../pages/Accueil/Accueil";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardMock from "../pages/DashboardMock/DashboardMock";
import Erreur from "../pages/Erreur/Erreur";

function RoutesPath() {
  return(
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/accueil" />} path="/" />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/dashboard-mock/:id" element={<DashboardMock />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default RoutesPath;