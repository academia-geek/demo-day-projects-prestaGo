import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "../styles/Dashboard.scss";
import Sidebar from "../components/Sidebar";
import User from "../pages/User";
import Extracto from "../pages/Extracto";
import Historial from "../pages/Historial";
import Pago from "../pages/Pago";
import Principal from "../pages/Principal";
import { DashboardWrapper } from "../styles/DashboardStyled";

const DashboarRouters = () => {
  return (
    <div>
      <div>
        <Sidebar />
        <Outlet />
      </div>
      <DashboardWrapper>
        <Routes>
          <Route path="/dashboard/extractos" element={<Extracto />} />
          <Route path="/dashboard/historial" element={<Historial />} />
          <Route path="/dashboard/user" element={<User />} />
          <Route path="/dashboard/pago" element={<Pago />} />
          <Route path="/dashboard/" element={<Principal />} />
        </Routes>
      </DashboardWrapper>
    </div>
  );
};

export default DashboarRouters;
