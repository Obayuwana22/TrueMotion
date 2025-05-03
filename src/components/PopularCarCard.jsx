import { nanoid } from "nanoid";
import car from "../assets/png/image 7.png";
import gasStation from "../assets/svg/gas-station.svg";
import carGearType from "../assets/svg/Car-gear-type.svg";
import users from "../assets/svg/profile-2user.svg";
import unlike from "../assets/svg/unlike.svg";
import redLike from "../assets/svg/red-like.svg";
import { useState } from "react";

const PopularCarCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const carData = [
    { id: nanoid(), icon: gasStation, description: "90L" },
    { id: nanoid(), icon: carGearType, description: "Manual" },
    {
      id: nanoid(),
      icon: users,
      description: "2 People",
      alt: "number of users",
    },
  ];
  return (
    <div>
      <div className="my-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded p-5 w-[240px]">
        <div className="flex justify-between">
          <div className="font-semibold text-secondary-500">Koenigsegg</div>
          <div onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <img src={redLike} alt="liked icon" />
            ) : (
              <img src={unlike} alt="unliked icon" />
            )}
          </div>
        </div>
        <span className="font-medium text-xs text-secondary-300">Sport</span>
        <div className="mt-5 mb-10">
          <img src={car} alt="image of a car" />
        </div>
        <div className="flex justify-between font-medium text-secondary-300 text-xs">
          {carData.map((item) => (
            <div key={item.id} className="flex gap-1">
              <img
                src={item.icon}
                alt={item.alt ? item.alt : item.description}
              />
              <span>{item.description}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-7">
          <div className="font-bold">
            <span>$99.00/</span>
            <span className="text-xs text-secondary-300 ml-1">day</span>
          </div>
          <button className="bg-primary-500 py-1 px-5 rounded text-primary-white">
            <span className="font-semibold text-xs">Rent Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PopularCarCard;
