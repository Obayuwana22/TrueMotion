import { Outlet } from "react-router-dom";
import Header from "./Header";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <div className="xl:px-12">
        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;
