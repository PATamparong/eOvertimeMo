import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import OTForms from "../pages/OTForms";
import History from "../pages/History";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/otforms" element={<OTForms />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
