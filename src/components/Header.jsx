import Search from "./Search";
import userPic from "../assets/png/user.png";
import like from "../assets/svg/Like.svg";
import notification from "../assets/svg/Notification.svg";
import settings from "../assets/svg/Settings.svg";
import search from "../assets/svg/search-normal.svg";
import filter from "../assets/svg/search-filter.svg";
import { useGlobalContext } from "../context/GlobalContext";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
  const { isFilterActive, setIsFilterActive } = useGlobalContext();
  const { carName } = useParams();
  const { user } = useAuthContext();
  const currentUser = user?.uid;

  return (
    <div className="bg-primary-white">
      <div className="px-5 pb-8 mt-8  xl:hidden ">
        <div className="flex items-center justify-between mb-5 ">
          <h1 className="uppercase font-bold text-2xl text-primary-500">
            truemotion
          </h1>
          <Link to={`/home/user/${currentUser}`}>
            <div className="h-[28px] w-[28px] rounded-full">
              <img src={userPic} alt="" />
            </div>
          </Link>
        </div>
        <div className={`${carName || currentUser ? "hidden" : ""}`}>
          <Search />
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="flex items-center justify-between py-8 shadow-sm px-12">
          <div className="flex items-center gap-20">
            <h1 className="uppercase font-bold text-2xl text-primary-500">
              truemotion
            </h1>
            <div
              className={`relative ${carName || currentUser ? "hidden" : ""} `}
            >
              <img src={search} alt="" className="absolute ml-5 top-2" />
              <input
                type="text"
                placeholder="Search something here"
                className="w-[492px] border border-secondary-200 rounded-3xl pl-14 py-2 "
              />
              <img
                src={filter}
                alt=""
                className="absolute top-2 left-[450px] mr-5 cursor-pointer"
                onClick={() => setIsFilterActive(!isFilterActive)}
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <img src={like} alt="heart" />
            </div>
            <div>
              <img src={notification} alt="notification" />
            </div>
            <div>
              <img src={settings} alt="settings" />
            </div>
            <Link to={`/home/user/${currentUser}`}>
              <div className="h-[44px] w-[44px] rounded-full">
                <img src={userPic} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
