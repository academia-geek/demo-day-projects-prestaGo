import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLanding from "../components/landing/NavBarLanding";
import FormRegister from "../pages/FormRegister";
import LandingPage from "../pages/LandingPage";
import  Login  from "../pages/Login";
const AppRouters = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBarLanding />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<FormRegister/>}/>
          {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouters;