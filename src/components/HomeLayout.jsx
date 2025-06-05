import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Filter from "./Filter";

const HomeLayout = () => {
  return (
    <div>
      <Header />

      {/* <div className="flex">
        <div>
          <Filter />
        </div>
        <div className="flex-1 mt-10 xl:px-12 ">
          <Outlet />
        </div>
      </div> */}

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
export default HomeLayout;
