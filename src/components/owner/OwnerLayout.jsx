import React from "react";
import OwnerNavbar from "./OwnerNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const OwnerLayout = () => {
  return (
    <div className="flex flex-col">
      <OwnerNavbar />

      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default OwnerLayout;
