import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
