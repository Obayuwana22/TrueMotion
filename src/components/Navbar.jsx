import React, { useState } from "react";
import { assets } from "../data";
import { Link, useLocation } from "react-router-dom";
import { menuLinks } from "../data";
import BrandLogo from "./BrandLogo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ToastContainer hideProgressBar />
      <div
        className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${
          location.pathname === "/" && "bg-light"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <BrandLogo />
        </Link>

        <div
          className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
            location.pathname === "/" ? "bg-light" : "bg-white"
          } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
        >
          {menuLinks.map((link) => (
            <Link key={link.id} to={link.path} onClick={() => setOpen(!open)}>
              {link.name}
            </Link>
          ))}

          <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
            <input
              type="text"
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              placeholder="Search products"
            />
            <img src={assets.search_icon} alt="search" />
          </div>

          <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
            <button
              // onClick={() => (isOwner ? navigate("/owner") : changeRole())}
              className="cursor-pointer"
            >
              {/* {isOwner ? "Dashboard" : "List cars"} */}
              Dashboard
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
            >
              Login
            </button>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden cursor-pointer"
          aria-label="Menu"
        >
          <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
