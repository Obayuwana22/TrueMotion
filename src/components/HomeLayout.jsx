import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const HomeLayout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Outlet />
      {!isOwnerPath && <Footer />}
    </div>
  );
};
export default HomeLayout;
