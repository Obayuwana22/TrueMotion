import { useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Landing = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return <div>{!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}</div>;
};
export default Landing;
