import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components";
const DashboardLayout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
