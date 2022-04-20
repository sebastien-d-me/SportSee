import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";

function RoutesPath() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/dashboard/:id" element={<Dashboard />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RoutesPath;