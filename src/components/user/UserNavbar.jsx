import React from "react";
import { userNavbarLinks } from "../../data";
import { HiOutlineLogout } from "react-icons/hi";
import ToggleTheme from "./ToggleTheme";
import { Link, useParams } from "react-router-dom";
import { BiToggleRight } from "react-icons/bi";

const UserNavbar = () => {
  const { userID } = useParams();
  return (
    <div className="relative py-10 bg-primary-white">
      {/* <div className="relative py-10 bg-primary-white hidden lg:block"> */}
      <div>
        {userNavbarLinks.map((link, index) => (
          <div key={link.id}>
            <div
              className={`text-xs font-semibold uppercase px-7 text-[#94A7CB] mb-3 -tracking-tighter
                ${index === 1 ? "mt-10" : ""}`}
            >
              {link.title}
            </div>

            {link.list.map((list) => {
              const Icon = list.icon;
              return (
                <div key={list.id}>
                  <Link to={`/user${userID}/${list.path}`}>
                    <div
                      className={`flex items-end gap-3 mx-4 px-3 py-4 pr-20 cursor-pointer group hover:text-primary-white hover:bg-primary-500 hover:rounded-lg transition ease-in-out duration-300 
                       `}
                    >
                      <Icon className="text-secondary-300 text-2xl group-hover:text-primary-white  " />
                      <div className="text-secondary-300 font-medium capitalize group-hover:text-primary-white  ">
                        {list.text}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ))}
        <div className="absolute right-10 bottom-[157px]">
          <ToggleTheme />
        </div>
        <button className="flex  gap-3 px-7 mt-20 cursor-pointer text-secondary-300  ">
          <HiOutlineLogout size={24} className="transform -scale-x-100 " />
          <div className="font-medium ">Log Out</div>
        </button>
      </div>
    </div>
  );
};

export default UserNavbar;
