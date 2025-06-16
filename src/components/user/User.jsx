import React from "react";
import UserNavbar from "./UserNavbar";
import ContentArea from "./ContentArea";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="flex">
      <UserNavbar />
      {/* <ContentArea /> */}
      <Outlet />
    </div>
  );
};

export default User;
