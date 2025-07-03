import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Login from "../components/Login";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const HomeLayout = () => {
  const { showLogin } = useGlobalContext();
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  // const navigate = useNavigate();
  // const { user, fetchUser } = useGlobalContext();

  // useEffect(() => {
  //   const checkUser = async () => {
  //     await fetchUser();
  //     if (!user) {
  //       navigate("/");
  //     }
  //   };
  //   checkUser();
  // }, []);

  return (
    <div>
      {showLogin && <Login showLogin />}
      {!isOwnerPath && <Navbar showLogin />}
      <Outlet />
      {!isOwnerPath && <Footer />}
    </div>
  );
};
export default HomeLayout;
