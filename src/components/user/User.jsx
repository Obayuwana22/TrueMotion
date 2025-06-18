import React, { useEffect } from "react";
import UserNavbar from "./UserNavbar";
import { Outlet, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const User = () => {
  const { userID } = useParams();
  const { setUserID } = useGlobalContext();

  useEffect(() => {
    if (userID) setUserID(userID);
  }, [userID]);
  return (
    <div className="flex">
      <UserNavbar />
      <Outlet />
    </div>
  );
};

export default User;
