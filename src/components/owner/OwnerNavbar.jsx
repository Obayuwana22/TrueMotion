import React from "react";
import { dummyUserData } from "../../data";
import { Link } from "react-router-dom";
import BrandLogo from "../BrandLogo";

const OwnerNavbar = () => {
  const user = dummyUserData;
  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all">
      <Link to="/" className="flex items-center gap-2 h-7">
        <BrandLogo />
      </Link>

      <p>Welcome, {user.name || "Owner"}</p>
    </div>
  );
};

export default OwnerNavbar;
