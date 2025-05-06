import Search from "./Search";
import user from "../assets/png/user.png";
import like from "../assets/svg/Like.svg";
import notification from "../assets/svg/Notification.svg";
import settings from "../assets/svg/Settings.svg";
import search from "../assets/svg/search-normal.svg";
import filter from "../assets/svg/search-filter.svg";

const Header = () => {
  return (
    <div>
      <div className="xl:hidden">
        <div className="flex items-center justify-between my-8">
          <h1 className="uppercase font-bold text-2xl text-primary-500">
            truemotion
          </h1>
          <div className="h-[28px] w-[28px] rounded-full">
            <img src={user} alt="" />
          </div>
        </div>
        <Search />
      </div>

      <div className="hidden xl:block">
        <div className="flex items-center justify-between py-8 shadow-sm mb-10 px-12">
          <div className="flex items-center gap-20">
            <h1 className="uppercase font-bold text-2xl text-primary-500">
              truemotion
            </h1>
            <div className="relative">
              <img src={search} alt="" className="absolute ml-5 top-2" />
              <input
                type="text"
                placeholder="Search something here"
                className="w-[492px] border border-secondary-200 rounded-3xl pl-14 py-2 "
              />
              <img
                src={filter}
                alt=""
                className="absolute top-2 left-[450px] mr-5"
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
            <div className="h-[44px] w-[44px] rounded-full">
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
