import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Emergency from "./pages/Emergency";
import Shelters from "./pages/Shelters";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Authority from "./pages/Authority";
import Family from "./pages/Family";
import EvacueeRecords from "./pages/EvacueeRecords";
import SignIn from "./pages/SignIn";
import Citizen from "./pages/Citizen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/emergency" element={<Emergency />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/shelters/:shelterId" element={<Shelters />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/citizen" element={<Citizen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/report" element={<Report />} />
        <Route path="/authority" element={<Authority />} />
        <Route path="/family" element={<Family />} />
        <Route path="/authority/records" element={<EvacueeRecords />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;