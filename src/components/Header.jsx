import Search from "./Search";
import user from "../assets/png/user.png"
// import like from "../assets/svg/Like.svg";
// import notification from "../assets/svg/Notification.svg";
// import settings from "../assets/svg/Settings.svg";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between my-8">
        <h1 className="uppercase font-bold text-2xl text-primary-500">
          truemotion
        </h1>
        <div className="h-[28px] w-[28px] rounded-full">
          <img src={user} alt="" />
        </div>
      </div>
      <Search />
      {/* <div className="flex gap-5">
          <img src={like} alt="heart" />
          <img src={notification} alt="notification" />
          <img src={settings} alt="settings" />
          <div className="h-[44px] w-[44px] rounded-full bg-error-500">
            <img src="" alt="" />
          </div>
        </div> */}
    </div>
  );
};
export default Header;
